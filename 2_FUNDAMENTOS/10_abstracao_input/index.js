//Uma coleção de interfaces de usuário de linha de comando interativas comuns.

const inquirer = require('inquirer')

// prompt(), método responsável por fazer as perguntas (dentro de um [] e cada pergunta precisa ser um objeto {} -> [{},{}])
inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual  a primeira nota?',
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?',
        },
    ])
    .then((answers) => {
        console.log(answers)
        const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)

        console.log(`A média é: ${media}`)
    })
    .catch(err => console.log(err))