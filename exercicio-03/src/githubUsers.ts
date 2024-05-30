interface GitHubUsers {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: 'Not Found'
}

interface GitHubRepoResponse {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const AllUsers: GitHubUsers[] = [];

const getGitHubUser = async (username: string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const user = await response.json() // Esperando a resposta da api em JSON
       
        if (user.message) {
            console.log(`Usuario ${username} nao encontrado`)
        } else {
            AllUsers.push(user)
            console.log(
                `O usuário ${user.login} foi salvo.\n` +
                `\nid: ${user.id}` +
                `\nlogin: ${user.login}` +
                `\nNome: ${user.name}` +
                `\nBio: ${user.bio}` +
                `\nRepositórios públicos: ${user.public_repos}`
            )
        }

    } catch (error) {
        console.error('Erro:', error);
    }
};

const showDataUser = async (username:string) => {
    const user = await AllUsers.find(user => user.login === username)

    if(typeof user === 'undefined') {
        console.log(`Usuario ${username} nao encontrado showDataUser`)
    }else {
        const response = await fetch(user.repos_url)
        const repos: GitHubRepoResponse[] = await response.json()
        console.log(response)

        let message = `id: ${user.id}\n` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
  
      repos.forEach(repo => {
        message += `\nNome: ${repo.name}` +
          `\nDescrição: ${repo.description}` +
          `\nEstrelas: ${repo.stargazers_count}` +
          `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
      })

       console.log(message)
    }

}


const showAllUsers = () => {
    let Users = 'Todos os usuarios registrados \n'

    AllUsers.forEach(user =>{
        Users += `
            Id: ${user.id}
            Login: ${user.login}
            Nome: ${user.name}
            Bio: ${user.bio}
            Repositórios públicos: ${user.public_repos}
        `
    })

    console.log(Users)
    
}

const main = async () => {
    const username1 = 'fernandoCMF'
    const username2 = 'WagnerRochaJ'
    getGitHubUser(username1);
    getGitHubUser(username2)
    console.log('\n #### Mostrando todos registrados')
    showAllUsers()

}

main()