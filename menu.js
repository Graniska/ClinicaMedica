   const {adicionarConsultas} = require('./adicionar.js')
    const {atualizarConsultas} = require('./atualizar.js')
    const {listarConsultas} = require('./listar.js')
    const {removerConsultas} = require('./remover.js')

        function exibirMenu() {
            console.log("================CLINICA MÉDICA================" +
                "\n 1. Adicionar Consulta" +
                "\n 2. Listar Consultas" +
                "\n 3. Atualizar Consulta" +
                "\n 4. Remover Consulta" +
                "\n 5. SAIR"
             )
                let opcao = prompt('Escoha uma opção: ')

                    switch (opcao) {
                        case '1':
                            adicionarConsultas(exibirMenu)
                            break;
                            case '2':
                            listarConsultas()
                            exibirMenu()
                            break;
                            case '3':
                            atualizarConsultas(exibirMenu)
                            
                            break;
                            case '4':
                            removerConsultas(exibirMenu)
                            break;
                            case '5':
                                console.log("=======VOLTE==SEMPRE=======")
                                return
                            break;
                        default:
                            console.error("Opção inválida, tente novamente: ");
                            exibirMenu()
                            break;
                    }
        }

            module.exports = {exibirMenu}