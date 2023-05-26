/* 

É um padrão de arquitetura, que garante que a leitura e execução do código
seja feita de cima pra baixo!
Garantindo a sequencia de execução

*/

function a(){
    console.log("Excutando a()")
}

function b(){
    console.log("Excutando b()")
}

function c(){
    console.log("Excutando c()")
}

b()
c()
a()