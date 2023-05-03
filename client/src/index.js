import './css/style.css';

fetch('/api/test')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));