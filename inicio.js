    const prompt = require ('prompt-sync')()
    const {exibirMenu} = require('./menu.js')

    let consultas = []

     global.prompt = prompt
     global.consultas = consultas

     exibirMenu()

    