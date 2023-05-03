import './css/style.css';
import { sayHi } from './methods.js';

const hiBtn = document.querySelector('#hi-btn');

hiBtn.addEventListener('click', sayHi);

