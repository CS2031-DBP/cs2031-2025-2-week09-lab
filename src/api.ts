// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare const axios: any;

const BACKEND_URL: string = "http://localhost:8080";

export interface Student {
  id: number | null;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: number;
  description: string;
  password: string;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function axiosPost(student: Student): Promise<any> {
  try {
    const response = await axios.post(`${BACKEND_URL}/student`, student);
    console.log(response);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error(error);
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function axiosGet(): Promise<any> {
  try {
    const response = await axios.get(`${BACKEND_URL}/student`);
    console.log(response);
    return response.data;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error(error);
  }
}
