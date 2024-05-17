let AllSpaceShip = []


const addSpaceship = (name:string, pilot:string, crewLimit:number) => {
    const spacechip = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    AllSpaceShip.push(spacechip);
    alert(`Nova nave ${spacechip.name} foi adicionada com sucesso`)
}

const findSpaceship = (name:string) => {
    let spacechip = {
        name: String,
        pilot: String,
        crewLimit: String,
        crew: String, //Sera? ou crew: []
        inMission: Boolean
    }

    spacechip = AllSpaceShip.find(ship => ship.nmae === name)

    return spacechip

}


const addCrewMember = (member: string, spacechip:{name:string, crewLimit:number, crew: string[]}) => {
    if(spacechip.crew.length >= spacechip.crewLimit){
        alert(`${member} nao pode ser adicionado a tripulacao. Limite atingido`)
    }else{
        spacechip.crew.push(member);
        alert(`${member} foi adicionado a tripulacao da ${spacechip.name}`)
    }
}

const sendInMission = (spacechip:{name:string, crewLimit:number, crew: string[], inMission: boolean},) => {
    if(spacechip.inMission){
        alert(`${spacechip.name} Nao pode ser enviado a missao. Nave ja em missao`)
    }else if(spacechip.crew.length < Math.floor(spacechip.crewLimit / 3)){
        alert(`${spacechip.name} Nao pode ser enviado a missao. Tripulacao insuficiente`)
    } else{
        spacechip.inMission = true
        alert(`${spacechip.name} Enviada para a missao.`)
    }
}



let optionMenu = 0;

while(optionMenu !== 5){
    const spaceshipName = prompt('Escolha umas das opcoes\n 1- Registrar nova nave.\n 2- Adicionar um membro da tripulacao.\n 3- Enviar nave em missao.\n 4- Listar naves registradas.\n 5- Encerrar');

    optionMenu = parseInt(spaceshipName)
    switch(optionMenu) {
        case 1:
           
            console.log(AllSpaceShip)
            break;
        case 2:
           
            break;
    }
}

