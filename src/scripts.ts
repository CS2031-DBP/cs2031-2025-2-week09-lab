declare const axios;

const form = document.getElementById("form") as HTMLFormElement;
const firstName = document.getElementById("firstname") as HTMLFormElement;
const lastName = document.getElementById("lastname") as HTMLFormElement;
const email = document.getElementById("email") as HTMLFormElement;
const phone = document.getElementById("phone") as HTMLFormElement;
const age = document.getElementById("age") as HTMLFormElement;
const description = document.getElementById("description") as HTMLFormElement;
const password = document.getElementById("password") as HTMLFormElement;
const repeatPassword = document.getElementById(
  "repeatPassword"
) as HTMLFormElement;

window.addEventListener("load", () => {
  async function getStudents() {
    const response = await axios.get("http://localhost:8080/student");
    console.log(response.data);
  }

  getStudents();
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const student = {
    firstname: "Mateo",
    lastname: "Noel",
    email: "a@c.com",
    phone: "123456789",
    age: "3",
    description: "esta es una descripcion",
    password: "123456",
  };

  async function postStudent() {
    try {
      const response = await axios.post(
        "http://localhost:8080/student",
        student
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  postStudent();
});
