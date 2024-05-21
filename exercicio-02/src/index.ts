type situationPlanet = 'habitado' | 'habitavel' | 'inabitavel' | 'inexplorado';
type coordinatesPlanet = [number, number, number, number];
type satelliteType = string[];

let AllPlanets: {
    name: string,
    coordinates: coordinatesPlanet,
    situation: situationPlanet,
    satellite: satelliteType
}[] = [];

const dataPlanets = (name: string, coordinates: coordinatesPlanet, situation: situationPlanet, satellite: satelliteType = []) => {
    const planet = {
        name,
        coordinates,
        situation,
        satellite: satellite.length > 0 ? satellite : []
    };

    AllPlanets.push(planet);
    console.log(`Novo planeta ${planet.name} foi adicionado com sucesso`);
};

const findPlanet = (name: string) => {
    console.log(AllPlanets)
    return AllPlanets.find(planets => planets.name === name);
};

dataPlanets('Terra',[10,10,10,10], 'habitado', ['1','2'])

findPlanet('Terra')


const addPlanet = () => {
    let name = prompt('Informe o nome do planeta')
    let coordinates: coordinatesPlanet
    coordinates = [0,0,0,0]
    coordinates = parseInt(prompt('Informe as coordenadas: '))
    let situation = prompt()
}