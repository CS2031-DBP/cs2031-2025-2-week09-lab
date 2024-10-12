const form: HTMLFormElement | null = document.getElementById(
  "form"
) as HTMLFormElement;
const ul: HTMLUListElement | null = document.getElementById(
    "students"
  ) as HTMLUListElement;
const fileds = [
  "firstname",
  "lastname",
  "email",
  "phone",
  "age",
  "description",
  "password",
];
const [firstname, lastname, email, phone, age, description, password] =
  fileds.map((id) => document.getElementById(id) as HTMLInputElement | null);


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare const axios: any;

const BACKEND_URL = "http://localhost:8080";

type Student = {
  id: number | null;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: number;
  description: string;
  password: string;
};

async function getStudents() {
  try{
    const response = await axios.get(`${BACKEND_URL}/student`);
    return response.data
  } catch (error: unknown) {
    console.error(error);
    }
}

async function postStudent(student: Student) {
  try {
    const response = await axios.post(`${BACKEND_URL}/student`, student);
    console.log(response);
  } catch (error: unknown) {
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

  postStudent(student);
});

getStudents().then((students: Student[]) => {
    if(ul){
        for (const student of students){
            const li = document.createElement("li");
            li.textContent = `${student.firstname} ${student.lastname}`
            ul.appendChild(li);
        }
    }
})

