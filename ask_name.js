(function () {
  const main = document.getElementById('main');
  const name = prompt('What is your name');
  const h4 = document.createElement('h4');
  h4.innerText = `Hello, ${name}`;
  main.appendChild(h4);
})();
