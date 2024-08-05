
    const {listarConsultas} = require('./listar.js')

        function atualizarConsultas(exibirMenu) {
            listarConsultas()
                let num = prompt ("Digite o numero da consulta que deseja atualizar: ")
                    let index = parseInt(num) -1
                        if (index < 0 && index > consultas.length) {
                                console.log("Consulta não encontrada, tente novamente: ")
                                    atualizarConsultas()
                        } else {
                            console.log("==>> ATUALIZANDO DADOS <<==")
                                let paciente = prompt("Nome do paciente: ")
                                    let medico = prompt("Nome do(a) médico(a): ")
                                        let data = prompt("Data da consulta(dd/mm/yyyy): ")
                                            let hora = prompt ("Hora da consulta: ")
                                                consultas[index] = {paciente, medico, data, hora}
                                                    console.log("==>CONSULTA ATUALIZADA COM SUCESSO!!<==")
                                                        
                        }
                
                exibirMenu()
        }   
        module.exports = {atualizarConsultas}