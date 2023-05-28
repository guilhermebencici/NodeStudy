// importando os módulos
const inquirer = require('inquirer')
const chalk = require('chalk')


// utilizando o prompt(), método auxiliador as perguntas (dentro de um [] e cada pergunta precisa ser um objeto {} 
inquirer
  .prompt([
    { name: 'nome', message: 'Qual o seu nome?' },
    { name: 'idade', message: 'Qual a sua idade?' },
  ])
  //promises
  // utilizando a prop answers para retirar a resposta digitada
  .then((answers) => {
    const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response))
  })
  .catch((err) => {
    console.log(err)
  })