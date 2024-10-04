"use strict";
const form = document.getElementById("form");
const fields = [
    "firstname",
    "lastname",
    "email",
    "phone",
    "age",
    "description",
    "password",
];
const [firstname, lastname, email, phone, age, description, password] = fields.map((id) => document.getElementById(id));
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(firstname === null || firstname === void 0 ? void 0 : firstname.value);
});
