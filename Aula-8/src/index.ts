function sendSpaceShip(name:string, captain:string){
    const spaceShip = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceShip.name} comandada pelo capitao ${spaceShip.captain} foi enviada para missao`);

    return spaceShip
}

function accelerate(targetSpeed:number, spaceShip:{name: string, speed: number}) {
    if (spaceShip.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}`)
    } else if(spaceShip.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceShip.name} para ${targetSpeed}`)
    }else {
        alert(`Mantendo a velocidade ${spaceShip.name}`)
    }    
}

const spaceshipName = prompt('Informe o nome da nave:');
const spaceshipCaptain = prompt('Informe o nome do capitao da nave:');

const currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain);

const changeSpeed = Number(prompt('Infome a velocidade desejada'));

accelerate(changeSpeed, currentShip)

