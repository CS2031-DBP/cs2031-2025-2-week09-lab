"use strict";
const button = document.getElementById('button');
let count = 0;
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log(count++);
});
