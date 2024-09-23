const BACKEND_URL = "http://127.0.0.1:8080";
export async function getStudents() {
    try {
        const response = await axios.get(`${BACKEND_URL}/student`);
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
    }
}
export async function postStudent(student) {
    try {
        const response = await axios.post(`${BACKEND_URL}/student`, student);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
// export async function axiosPut(): Promise<any> {
//   try {
//     const response = await axios.put(`${BACKEND_URL}/posts/1`, putBody);
//     console.log(response);
//   } catch (error: any) {
//     console.error(error);
//   }
// }
// export async function axiosDelete(): Promise<any> {
//   try {
//     const response = await axios.delete(`${BACKEND_URL}/posts/1`);
//     console.log(response);
//   } catch (error: any) {
//     console.error(error);
//   }
// }
