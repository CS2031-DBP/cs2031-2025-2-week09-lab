import { axiosPost, axiosGet, type Student } from "./api.js";

const ul: HTMLUListElement | null = document.getElementById(
  "students"
) as HTMLUListElement | null;

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

  try {
    axiosPost(student);
    alert("Student added successfully!");
  } catch (error) {
    console.error(error);
  }
});

axiosGet().then((students: Student[]) => {
  if (ul) {
    for (const student of students) {
      const li = document.createElement("li");
      const nameSpan = document.createElement("span");
      const emailSpan = document.createElement("span");

      nameSpan.textContent = `${student.firstname} ${student.lastname}`;
      emailSpan.textContent = student.email;

      nameSpan.style.display = "inline-block";
      nameSpan.style.width = "50%";
      emailSpan.style.display = "inline-block";
      emailSpan.style.width = "50%";

      li.appendChild(nameSpan);
      li.appendChild(emailSpan);
      ul.appendChild(li);
    }
  }
});
