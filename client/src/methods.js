export const sayHi = () => {
  fetch('/api/test')
    .then(res => res.json())
    .then(data => {
      const headerEl = document.querySelector('#header-text');
      headerEl.innerText = data.message;
    })
    .catch(err => console.log(err));
}
