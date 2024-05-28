import { error } from 'console';
import fetch from 'node-fetch';
/*
    Promise<GitHubUser | null>: A função retorna uma Promise que, quando resolvida com sucesso, contém um objeto GitHubUser com os dados do usuário. Se ocorrer um erro durante a requisição ou se o usuário não for encontrado, a função retorna null.
*/
const getGitHubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar usuario: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }
    catch {
        console.error('Error:', error);
        return null;
    }
};
const main = async () => {
    const username = 'octocat';
    const user = await getGitHubUser(username);
    if (user) {
        console.log(user);
    }
    else {
        console.log(`Usuario nao encontrado ou ocorreu um erro`);
    }
};
main();
