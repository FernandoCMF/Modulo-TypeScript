"use strict";
const AllUsers = [];
const getGitHubUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json(); // Esperando a resposta da api em JSON
    try {
        if (user.message) {
            console.log(`Usuario ${username} nao encontrado`);
        }
        else {
            AllUsers.push(user);
            console.log(`O usuário ${user.login} foi salvo.\n` +
                `\nid: ${user.id}` +
                `\nlogin: ${user.login}` +
                `\nNome: ${user.name}` +
                `\nBio: ${user.bio}` +
                `\nRepositórios públicos: ${user.public_repos}`);
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
};
const showAllUser = async (username) => {
    const user = AllUsers.find(user => user.login === username);
    if (typeof user === 'undefined') {
        console.log(`Usuario ${username} nao encontrado`);
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        console.log(message);
    }
};
const main = async () => {
    const username = 'fernandoCMF';
    const user = await getGitHubUser(username);
    console.log(AllUsers);
};
main();
