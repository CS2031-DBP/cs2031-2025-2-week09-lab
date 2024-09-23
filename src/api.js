const BACKEND_URL = "https://jsonplaceholder.typicode.com";
export async function axiosGet() {
    try {
        const response = await axios.get(`${BACKEND_URL}/posts`);
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
    }
}
const postBody = {
    title: 'DBP',
    body: 'Best Course',
    userId: 1,
};
export async function axiosPost() {
    try {
        const response = await axios.post(`${BACKEND_URL}/posts`, postBody);
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}
const putBody = {
    id: 1,
    title: 'DBP',
    body: 'Curso filtro',
    userId: 1,
};
export async function axiosPut() {
    try {
        const response = await axios.put(`${BACKEND_URL}/posts/1`, putBody);
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}
export async function axiosDelete() {
    try {
        const response = await axios.delete(`${BACKEND_URL}/posts/1`);
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}
