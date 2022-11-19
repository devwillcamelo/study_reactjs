import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllPost: async () => {
        let response = await http.get('/posts');
        return response.data;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await http.post('/posts', {
            title, body, userId
        });
        return response.data;
    },
}


// Requisições com axios, código cada vez mais limpo 2