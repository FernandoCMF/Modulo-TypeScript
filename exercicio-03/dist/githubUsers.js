var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { error } from 'console';
import fetch from 'node-fetch';
/*
    Promise<GitHubUser | null>: A função retorna uma Promise que, quando resolvida com sucesso, contém um objeto GitHubUser com os dados do usuário. Se ocorrer um erro durante a requisição ou se o usuário não for encontrado, a função retorna null.
*/
const getGitHubUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar usuario: ${response.statusText}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (_a) {
        console.error('Error:', error);
        return null;
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const username = 'octocat';
    const user = yield getGitHubUser(username);
    if (user) {
        console.log(user);
    }
    else {
        console.log(`Usuario nao encontrado ou ocorreu um erro`);
    }
});
