const form: HTMLFormElement | null = document.getElementById(
  "form"
) as HTMLFormElement;
const fields = [
  "firstname",
  "lastname",
  "email",
  "phone",
  "age",
  "description",
  "password",
];
const [firstname, lastname, email, phone, age, description, password] =
  fields.map((id) => document.getElementById(id) as HTMLInputElement | null);
  
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
  declare const axios: any;

const BACKEND_URL: string = "http://localhost:8080";

interface Student {
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
async function axiosPost(student: Student): Promise<any> {
  try {
    const response = await axios.post(`${BACKEND_URL}/student`, student);
    console.log(response);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error(error);
  }
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const student: Student = {
    id: null,
    firstname: firstname?.value || "",
    lastname: lastname?.value || "",
    email: email?.value || "",
    phone: phone?.value || "",
    age: Number.parseInt(age?.value || "0"),
    description: description?.value || "",
    password: password?.value || "",
  };

  console.log(student);

  axiosPost(student);
});
