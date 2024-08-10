"use strict";
const button = document.getElementById('button');
const fetching = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
        return response.json();
    })
        .then(data => {
        console.log(data);
    });
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', async () => {
    fetching();
});
