(function() {
  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => {
      const root = document.getElementById('root');
      // const h1 = document.createElement('h1');
      // h1.innerText = "Let's hear what Kanye has to say now...";
      // root.appendChild(h1);

      // const article = document.createElement('article');
      // article.innerHTML = `<p>${json.quote}</p>`;

      // root.appendChild(article);
      root.innerHTML = `
        <h1 class='title'>Let's hear what Kanye has to say now...</h1>

        <article class='quote'><p>&quot;${json.quote}&quot;</p></article>
      `
    })
    .catch(e => {
      const root = document.getElementById('root');
      root.innerHTML = "<h1 class='title'>Kanye has nothing to say now, please come back later!</h1>"
    })
})();