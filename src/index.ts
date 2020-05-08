import './style.css';
import './App.js';

function component() {
  const element = document.createElement('div');

  element.innerText = "Fangerang force of blood Moon Fire";
  element.classList.add("base");

  return element;
}
document.body.appendChild(component());
