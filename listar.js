
    function listarConsultas() {
        
        consultas.forEach((objeto, index) => {
            
            console.log("===>> CONSULTAS <<===")
                
                console.log(`${index +1} 
                    
                    |Paciente: ${objeto.paciente}
                    |Medico: ${objeto.medico}
                    |Data: ${objeto.data}
                    |Hora: ${objeto.hora}
               
             `)
                
        });

    }
        module.exports = {listarConsultas}