/* 
	O método unlink é utilizado para remover arquivo
	é importante passar o arquivo como parâmetro
	Também é possível checar se houve algum erro a partir
	da callback retornada

 */

//chamando o método fs
const fs = require('fs')

fs.unlink('arquivo.txt', function(err){ // temos apenas o Argumento err (pois estamos removendo, assim, não é preciso do Argumento data)
    if(err) {
        console.log(err)
        return
    }

    console.log('Arquivo Removido!')
});

// OBS: para testar, insira o "arquivo.txt"