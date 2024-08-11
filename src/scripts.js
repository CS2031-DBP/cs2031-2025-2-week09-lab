"use strict";
// declare const axios: any;
/* 1. Extraer los valores de los campos */
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const description = document.getElementById('description');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatPassword');
const result = document.getElementById('result');
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};
/* 3. Crea un EventListener en el formulario que ejecute una función al enviarlo */
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
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
    const user = {
        firstname: firstname === null || firstname === void 0 ? void 0 : firstname.value,
        lastname: lastname === null || lastname === void 0 ? void 0 : lastname.value,
        email: email === null || email === void 0 ? void 0 : email.value,
        phone: phone === null || phone === void 0 ? void 0 : phone.value,
        age: parseInt(age === null || age === void 0 ? void 0 : age.value),
        description: description === null || description === void 0 ? void 0 : description.value,
        password: password === null || password === void 0 ? void 0 : password.value
    };
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
