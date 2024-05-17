let AllSpaceShip = []


const addSpaceship = (name:string, pilot:string, crewLimit:number) => {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    AllSpaceShip.push(spaceship);
    alert(`Nova nave ${spaceship.name} foi adicionada com sucesso`)
}

const findSpaceship = (name: string) => {
    let spacechip: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[], //Sera? ou crew: []
        inMission: boolean
    }

    spacechip = AllSpaceShip.find(ship => ship.nmae === name)

    return spacechip

}


const addCrewMember = (member: string, spaceship: { name: string, crewLimit: number, crew: string[] }) => {
    if(spaceship.crew.length >= spaceship.crewLimit){
        alert(`${member} nao pode ser adicionado a tripulacao. Limite atingido`)
    }else{
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulacao da ${spaceship.name}`)
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

const createNewSpaceship = () => {
    const name = prompt(`Informe o nome da nave: `)
    const pilot = prompt(`Informe o nome do piloto da nave ${name}`)
    const crewLimit = Number.parseInt(prompt(`Informe a quantidade de tripulante da nave`));

    const confirmation = confirm(`Confirmar o registro \nnave: ${name} \n o piloto ${pilot} \nquantidade da tripulacao: ${crewLimit}`)

    if(confirmation){
        addSpaceship(name, pilot, crewLimit)
        alert('nave adicionada com sucesso')
    }
}

const addNewMemberInSpaceship = () => {
    const member = prompt('Qual o nome do novo tripulante?')
    const spaceshipName = prompt(`Para qual nave o ${member} devera ser adicionado?`)

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma a inclusao do ${member} para a nave ${spaceship.name}`)

        if(confirmation){
            addCrewMember(member, spaceship)
        }
    }

}

const sendSpaceshipInMisson = () => {
    const spaceshipName = prompt('Informe o nome da nave para enviar em missao')

    const spaceship = findSpaceship(spaceshipName)

    const confirmation = confirm(`Confirma e envio da nave ${spaceship.name} para missao`)

    if(confirmation){
        sendInMission(spaceship)
    }
}

let optionMenu = 0;

while(optionMenu !== 5){
    const spaceshipName = prompt('Escolha umas das opcoes\n 1- Registrar nova nave.\n 2- Adicionar um membro da tripulacao.\n 3- Enviar nave em missao.\n 4- Listar naves registradas.\n 5- Encerrar');

    optionMenu = parseInt(spaceshipName)
    switch(optionMenu) {
        case 1:
            createNewSpaceship
            break;
        case 2:
           
            break;
    }
}

