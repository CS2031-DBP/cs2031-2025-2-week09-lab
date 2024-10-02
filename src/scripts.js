import { axiosPost } from "./api.js";
const form = document.getElementById("form");
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const description = document.getElementById('description');
const password = document.getElementById('password');
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const student = {
        id: null,
        firstname: firstname === null || firstname === void 0 ? void 0 : firstname.value,
        lastname: lastname === null || lastname === void 0 ? void 0 : lastname.value,
        email: email === null || email === void 0 ? void 0 : email.value,
        phone: phone === null || phone === void 0 ? void 0 : phone.value,
        age: Number.parseInt(age === null || age === void 0 ? void 0 : age.value),
        description: description === null || description === void 0 ? void 0 : description.value,
        password: password === null || password === void 0 ? void 0 : password.value
    };
    console.log(student);
    async function callPostStudent(student) {
        const res = await axiosPost(student);
        console.log(res);
    }
    callPostStudent(student);
});
