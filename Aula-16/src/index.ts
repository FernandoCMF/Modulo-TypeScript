type Planet = 'Mercurio' | 'Venus' | 'Terra' | 'Marte' | 'Jupite'

let planet: Planet;

let homePlanet: Planet;

const test = (planet:Planet) => {
    if(planet === 'Terra'){
        console.log(`Saida ${planet}`)
    }else{
        console.log(`Saida else ${planet}`)
    }
}

type testCallback = (nome:string) => void

function greet(callbackFn: testCallback){
    let nome = 'Fernando'
    callbackFn(nome)
}   

