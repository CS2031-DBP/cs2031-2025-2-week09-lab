const BACKEND_URL = "http://localhost:8080";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function axiosPost(student) {
    try {
        const response = await axios.post(`${BACKEND_URL}/student`, student);
        console.log(response);
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    }
    catch (error) {
        console.error(error);
    }
}
