
    function adicionarConsultas(exibirMenu) {
           
            let paciente = prompt ("Digite o nome do paciente: ")
             let medico = prompt ("Digite o nome do(a) médico(a): ")
                let data = prompt("Digite a data da consulta (dd/mm/yyyy): ")
                    let hora = prompt ("Digite a hora da consulta: ")
         
                        consultas.push({paciente, medico, data, hora})
                            console.log("===>> CONSULTA AGENDADA COM SUCESSO <<===")
               
                                exibirMenu()
     }   
   module.exports = {adicionarConsultas}