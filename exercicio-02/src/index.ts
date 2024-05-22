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


// Agora e fazer que o usuario forneca o input
const changeSituationPlanet = (name:string) => {
    let planetSituation = findPlanet(name) 
    let newSituation: situationPlanet

    newSituation = 'inexplorado';

    if(planetSituation){
        planetSituation.situation = newSituation
        alert('situacao trocada')
    }else{
        console.log('Planeta nao registrado')
    }
}

const removeSatellite = (name:string) => {
    let findSatellite = findPlanet(name)
    
    // A ideia e usuario informa o satelite
    // let locateSatellite = prompt('Informe o nome do satelite:')
    let locateSatellite = '1'
    if(findSatellite){
        findSatellite.satellite.forEach((item)=>{
            if(item === locateSatellite){
                findSatellite.satellite.pop()
                console.log('teste - satelite removido')
            }
        })
    }
}

const allRegisteredPlanets = () => {
    let list = 'Planetas registrados \n'

    AllPlanets.forEach((planet: {
        name:string,
        coordinates: coordinatesPlanet,
        situation: situationPlanet,
        satellite: satelliteType
    })=>{
        list+= `
            planeta:${planet.name}
            coordenadas:${planet.coordinates}
            situation:${planet.situation}
        `
        planet.satellite.forEach(item => {
            list += `${item} |`
        });

    })

    alert(list)
}

/*
 FAZER DEPOIS, POIS NAO CONSEGUE ENTENDER SOBRE USAR OS TIPOS CRIADOS PARA RECEBERS VALORES DO USUARIO
const addPlanet = () => {
    let name = prompt('Informe o nome do planeta')
    let coordinates: coordinatesPlanet
    coordinates = [0,0,0,0]
    coordinates = parseInt(prompt('Informe as coordenadas: '))
    let situation = prompt()
}
*/
dataPlanets('Terra',[10,10,10,10], 'habitado', ['1','2'])
dataPlanets('Marte',[20,20,20,20], 'habitado', ['3'])
findPlanet('Terra')
changeSituationPlanet('Terra')
findPlanet('Terra')