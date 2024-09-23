/* 1. Extraer los valores de los campos */
const form: HTMLFormElement | null = document.getElementById('form') as HTMLFormElement;
const firstname: HTMLInputElement | null = document.getElementById('firstname') as HTMLInputElement;
const lastname: HTMLInputElement | null = document.getElementById('lastname') as HTMLInputElement;
const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
const phone: HTMLInputElement | null = document.getElementById('phone') as HTMLInputElement;
const age: HTMLInputElement | null = document.getElementById('age') as HTMLInputElement;
const description: HTMLInputElement | null = document.getElementById('description') as HTMLInputElement;
const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
const repeatPassword: HTMLInputElement | null = document.getElementById('repeatPassword') as HTMLInputElement;
const result: HTMLElement | null = document.getElementById('result') as HTMLElement;

/* 2. Crea una interfaz con la forma y tipo de datos de los campos del formulario */
interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: number;
  description: string;
  password: string;
}

const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/* 3. Crea un EventListener en el formulario que ejecute una función al enviarlo */
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  /* 4. Realiza una validación de la entrada de los datos */
  if (firstname.value.length < 3) {
    alert('Firstname must be at least 3 characters');
    return;
  }

  if (lastname.value.length < 3) {
    alert('Lastname must be at least 3 characters');
    return;
  }

  if (email.value.length < 3) {
    alert('Email must be at least 3 characters');
    return;
  }

  if (!validateEmail(email.value)) {
    alert('Email is not valid');
    return;
  }

  if (phone.value.length < 9) {
    alert('Phone must be at least 9 characters');
    return;
  }

  if (parseInt(age.value) < 13) {
    alert('Age must be at least 13');
    return;
  }

  if (description.value.length < 10) {
    alert('Description must be at least 10 characters');
    return;
  }

  if (password.value.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  if (password.value !== repeatPassword.value) {
    alert('Passwords do not match');
    return;
  }

  const user: User = {
    firstname: firstname?.value,
    lastname: lastname?.value,
    email: email?.value,
    phone: phone?.value,
    age: parseInt(age?.value),
    description: description?.value,
    password: password?.value
  }

  /* 5. Imprimir en consola los datos rellenados*/
  console.log(user);

  /* 6. Muestra los datos rellenados en el documento HTML */
  result.innerHTML = `
    <h2 class="text-xl font-bold">User Info</h2>
    <p><b>Firstname:</b> ${user.firstname}</p>
    <p><b>Lastname:</b> ${user.lastname}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Phone:</b> ${user.phone}</p>
    <p><b>Age:</b> ${user.age}</p>
    <p><b>Description:</b> ${user.description}</p>
    <p><b>Password:</b> ${user.password}</p>
  `;
});