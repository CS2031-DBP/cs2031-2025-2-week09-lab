import { axiosPost } from "./api.js";
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
    const student = {
        id: null,
        firstname: (firstname === null || firstname === void 0 ? void 0 : firstname.value) || "",
        lastname: (lastname === null || lastname === void 0 ? void 0 : lastname.value) || "",
        email: (email === null || email === void 0 ? void 0 : email.value) || "",
        phone: (phone === null || phone === void 0 ? void 0 : phone.value) || "",
        age: Number.parseInt((age === null || age === void 0 ? void 0 : age.value) || "0"),
        description: (description === null || description === void 0 ? void 0 : description.value) || "",
        password: (password === null || password === void 0 ? void 0 : password.value) || "",
    };
    console.log(student);
    axiosPost(student);
});
