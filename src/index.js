function component() {
  const element = document.createElement('div');

  element.innerText = "Fangerang!";

  return element;
}
document.body.appendChild(component());