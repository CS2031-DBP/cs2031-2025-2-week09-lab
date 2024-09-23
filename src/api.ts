declare const axios: any;

const BACKEND_URL: string = "https://jsonplaceholder.typicode.com"

export async function axiosGet(): Promise<any> {
  try {
    const response = await axios.get(`${BACKEND_URL}/posts`);
    console.log(response.data);
  } catch (error: any) {
    console.error(error);
  }
}

interface postBodyStructure {
  title: string,
  body: string,
  userId: number
}

const postBody: postBodyStructure = {
  title: 'DBP',
  body: 'Best Course',
  userId: 1,
}

export async function axiosPost(): Promise<any> {
  try {
    const response = await axios.post(`${BACKEND_URL}/posts`, postBody);
    console.log(response);
  } catch (error: any) {
    console.error(error);
  }
}

interface putBodyStructure {
  id: number,
  title: string,
  body: string,
  userId: number
}

const putBody: putBodyStructure = {
  id: 1,
  title: 'DBP',
  body: 'Curso filtro',
  userId: 1,
}


export async function axiosPut(): Promise<any> {
  try {
    const response = await axios.put(`${BACKEND_URL}/posts/1`, putBody);
    console.log(response);
  } catch (error: any) {
    console.error(error);
  }
}

export async function axiosDelete(): Promise<any> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/posts/1`);
    console.log(response);
  } catch (error: any) {
    console.error(error);
  }
}
