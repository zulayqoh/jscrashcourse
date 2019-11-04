(function () {
  const fruits = [
    'Banana', 'Mango', 'Apple', 'Banana', 'Mango', 'Apple'
  ];
  const main = document.getElementById('main');

  if (fruits.length === 0) {
    const p = document.createElement('p');
    p.innerText = 'There are no fruits in the basket';
    main.appendChild(p);
  } else {
    const p = document.createElement('p');
    p.innerText = 'These are the available fruits';
    main.appendChild(p);
    const ul = document.createElement('ul');
    fruits.map((fruit) => {
      const li = document.createElement('li');
      li.innerText = fruit;
      ul.appendChild(li);
      main.appendChild(ul);
    });
  }
})();
