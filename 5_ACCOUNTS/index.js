// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

//chamando a function
operation()

// criando função com as opções de entrada do candidato
function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ],
        },
    ]).then((answer) => {
        const action = answer['action']

        if (action === 'Criar Conta') {
            createAccount()

        } else if (action === 'Depositar') {
            deposit()

        } else if (action === 'Consultar Saldo') {
            getAccountBalance()

        } else if (action === 'Sacar') {
            withdraw()

        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))

            // encerrando a execução do sistema
            process.exit()
        }
    })
        .catch(err => console.log(err))
}

// Saudação ao cliente
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    //chamando a function que cria a conta
    buildAccount()
}

// criando a conta
function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
        }
    ]).then(answer => {
        const accountName = answer['accountName']
        console.info(accountName)

        // verificando se existe diretório, senão, é criado!
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        // verificando se a conta descrita já existe

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!'))

            // chamando o buid de novo
            buildAccount()
            return //encerrando ação
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
            '{"balance": 0}',
            function (err) {
                console.log(err)
            },
        )
        console.log(chalk.green('Parabéns, a sua conta foi criada!'))

        // chamando a operation de novo, pro cliente escolher outra opção
        operation()

    }).catch(err => console.log(err))
}

// depositando 

function deposit() {

    // qual a conta terá o depósito?

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua Conta?'
        }
    ])
        .then(answer => {

            const accountName = answer['accountName']

            // verificando se a conta existe
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar'
                }
            ]).then((answer) => {
                const amount = answer['amount']

                // adicionando a quantia
                addAmount(accountName, amount)
                //chamando menu
                operation()
            }).catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

// checando conta
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe. Tente outra vez!'))
        return false
    }

    return true
}

// adicionando valor
function addAmount(accountName, amount) {

    const accountData = getAccount(accountName)
    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro. Por favor, tente mais tarde!'))
        return deposit()
    }

    // somando valores
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    //salvando novo valor
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), // transformando o JSON em texto
        function (err) {
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} em sua conta!`))
}

// chamando arquivo da conta
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8', // tudo bem ter acento
        flag: 'r' //indica que quero só ler o arquivo
    })

    return JSON.parse(accountJSON)
}

// consultando saldo da conta
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer => {
        const accountName = answer["accountName"]

        // verificando se a conta existe
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)
        console.log(
            chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`,
            ),
        )
        operation()
    })).catch(err => console.log(err))
}

// sacando dinheiro
function withdraw() {
    // identificando a conta que terá o valor sacado
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {

        const accountName = answer['accountName']

        //verificando se a conta existe
        if (!checkAccount(accountName)) {
            return withdraw()
        }

        //removendo o dinheiro da conta
        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
        ]).then((answer) => {

            const amount = answer['amount']

            removeAmount(accountName, amount)

        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro. Por favor, tente novamente!'),
        )
        return withdraw()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw()
    }

    // salvando na cont o valor atual, com a subtração
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta!`)),

    operation()

}