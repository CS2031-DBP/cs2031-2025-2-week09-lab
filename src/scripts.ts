const button: HTMLElement | null = document.getElementById('button');
const form: HTMLElement | null = document.getElementById('form');

let count: number = 0;

button?.addEventListener('click', () => {
  console.log(count++);
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted');
});

