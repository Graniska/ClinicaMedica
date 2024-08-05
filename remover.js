const { exibirMenu } = require("./menu");

    function removerConsultas(callback) {
        if (consultas.lenght == 0) {
            console.log("Não há consultas a serem deletados")
            callback()
        } else {
            console.log("====Lista de consultas====")
                consultas.forEach((objeto, index) => {
                    console.log(`(${index +1})
                        |Data:${objeto.data}
                        |Paciente: ${objeto.paciente}
                        |Medico: ${objeto.medico}
                        |Hora: ${objeto.hora}`)
                });
                    let cancelar = prompt("Digite o numero da consulta que deseja deletar: ")
                    const indice = parseInt(cancelar) -1
                        if (indice >= 0 && indice < consultas.length) {
                                consultas.splice(indice, 1)
                                console.log("=> Consulta deletada")
                        } else {
                            console.log("Numero inválido, tente novamente: ")
                             removerConsultas()
                        }
        }   callback()
    }
        module.exports = {removerConsultas}