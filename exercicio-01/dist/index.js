var spaceShip = [];
var optionMenu = 0;
while (optionMenu !== 5) {
    var spaceshipName = prompt('Escolha umas das opcoes\n 1- Registrar nova nave.\n 2- Adicionar um membro da tripulacao.\n 3- Enviar nave em missao.\n 4- Listar naves registradas.\n 5- Encerrar');
}
var createSpaceship = function (name, pilot, crewLimit) {
    var spacechip = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [], //Sera? ou crew: []
        inMission: false
    };
    return spacechip;
};
console.log(createSpaceship('Nave1', 'Fernando', 20));
