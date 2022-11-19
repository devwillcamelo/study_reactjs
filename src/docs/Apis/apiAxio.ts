import axios from 'axios';

const BASE = 'https:jsonplaceholder.typicode.com';

export const api = {
    getAllPost: async () => {
        let responde = await axios.get(`${BASE}/posts`);
        return responde.data;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let responde = await axios.post(`${BASE}/posts`, {
            title, body, userId
        });
        return responde.data;
    },
}


// Requisições com axios, código cada vez mais limpo