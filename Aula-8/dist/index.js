function sendSpaceShip(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceShip.name, " comandada pelo capitao ").concat(spaceShip.captain, " foi enviada para missao"));
    return spaceShip;
}
function accelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade ".concat(spaceShip.name));
    }
}
var spaceshipName = prompt('Informe o nome da nave:');
var spaceshipCaptain = prompt('Informe o nome do capitao da nave:');
var currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain);
var changeSpeed = Number(prompt('Infome a velocidade desejada'));
accelerate(changeSpeed, currentShip);
