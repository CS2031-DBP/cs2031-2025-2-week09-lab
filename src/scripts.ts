import { axiosPost, type Student } from "./api.js";
const form = document.getElementById("form") as HTMLFormElement | null;
const fields = ["firstname", "lastname", "email", "phone", "age", "description", "password"];
const [firstname, lastname, email, phone, age, description, password] = fields.map(id => document.getElementById(id) as HTMLInputElement | null);

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
    password: password?.value || ""
  }

  console.log(student);

  async function callPostStudent(student: Student) {
    const res = await axiosPost(student);
    console.log(res);
  }

  callPostStudent(student);

});
