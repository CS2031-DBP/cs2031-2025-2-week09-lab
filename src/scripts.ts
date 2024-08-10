
const button: HTMLElement | null = document.getElementById('button');

const fetching = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
}

button?.addEventListener('click', async () => {
  fetching();
});

