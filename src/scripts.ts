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

  alert(firstname?.value)
});
