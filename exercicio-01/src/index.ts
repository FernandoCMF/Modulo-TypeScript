let spaceShip = []

let optionMenu = 0;
while(optionMenu !== 5){
    const spaceshipName = prompt('Escolha umas das opcoes\n 1- Registrar nova nave.\n 2- Adicionar um membro da tripulacao.\n 3- Enviar nave em missao.\n 4- Listar naves registradas.\n 5- Encerrar');


}


const createSpaceship = (name:string, pilot:string, crewLimit:number) => {
    const spacechip = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [] as string[], //Sera? ou crew: []
        inMission: false
    }
    return spacechip
}

console.log(createSpaceship('Nave1', 'Fernando', 20))

