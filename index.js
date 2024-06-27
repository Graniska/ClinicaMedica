

console.log ("=============GERENCIAMENTO DE CONSULTAS================")
console.log ("MENU// DIGITE UM OPÇÃO")
console.log ("1. Adicionar uma nova consulta")
console.log ("2.Listar todas as consultas")
console.log("3.Atualizar uma consulta existente")
console.log ("4. Cancelar uma consulta")

    let novaConsulta = {
        paciente: "",
        medico: "",
        data: "",
        hora: ""
    }

    let consultas = []

    let opcao = "";

        process.stdin.on('data', function(data){
           // let input = data.toString().trim()

                if (!opcao) {
                    opcao = parseInt(data.toString().trim())
                    switch (opcao) {
                        case 1:
                            console.log ("Você escolheu adicionar uma nova consulta")
                            console.log ("Por favor digite o nome do paciente")
                                process.stdin.on('data', function(data){
                                    let input = data.toString().trim()
                                    if (!novaConsulta.paciente) {
                                        novaConsulta.paciente = input
                                        console.log ("Agora digite o nome do medico: ")
                                    } else if (!novaConsulta.medico) {
                                        novaConsulta.medico = input
                                        console.log("Digite a data da consulta: ")
                                    } else if (!novaConsulta.data) {
                                        novaConsulta.data = input
                                        console.log ("Digite a hora da consulta: ")
                                    } else if (!novaConsulta.hora) {
                                        novaConsulta.hora = input
                                        consultas.push(novaConsulta)
                                        console.log("MENU// DIGITE UM OPÇÃO")
                                        opcao = "";
                                        
                                    } 
                             
                               }); ;break
                           
                        case 2:
                            console.log ("LISTAR COSULTAS")
                            console.log (consultas)
                            console.log("MENU// DIGITE UM OPÇÃO")
                             opcao = "";
                            
                            break;
                        
                        case 3:
                    
                        default:
                            break;
                    }
                }
        })
