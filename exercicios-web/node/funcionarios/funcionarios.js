const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const apenasMulheres = funcionario => (funcionario.genero === 'F')
    const apenasChinesas = funcionario => (funcionario.pais === 'China')
    const filtroMenorSalario = (funcionario, funcionarioAtual) => {
            if(funcionarioAtual.salario < funcionario.salario){
                funcionario = funcionarioAtual
            }
            return funcionario
        }
        
    const funcionariosFiltrados = funcionarios.filter(apenasMulheres).filter(apenasChinesas).reduce(filtroMenorSalario)
    console.log(funcionariosFiltrados)
})

