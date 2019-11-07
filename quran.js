(function () {
  // use fetch to get data from url (http://api.alquran.cloud/v1/surah)
  fetch('http://api.alquran.cloud/v1/surah')
    .then(response => { console.log(response); return response.json()})
    .then(json => {
      const main = document.getElementById('main');
      const h2 = document.createElement('h2');
      h2.innerText = 'List of Surahs in the Quran';
      h2.className = 'title';
      main.appendChild(h2);
      const table = document.createElement('table');

      // add the class=table to the table element
      table.className = 'table';
      const thead = document.createElement('thead');

      // list out all the table headings
      const headings = [
        'Number', 'Name', 'English Name', 'English Name Translation',
        'Number of Ayahs', 'Revelation Type'
      ];

      // put each heading into th
      headings.map(heading => {
        const th = document.createElement('th');
        th.innerText = heading;
        thead.appendChild(th);
      });
      table.appendChild(thead);
      main.appendChild(table);
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);

      // get surahs from json
      const surahs = json.data;

      // convert each surah object to a table row in the table
      surahs.map(surah => {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        if (surah.revelationType === 'Meccan') {
          tr.className = 'meccan';
        }
        tr.innerHTML = `
          <td class="">${surah.number}</td>
          <td class="">${surah.name}</td>
          <td class="">${surah.englishName}</td>
          <td class="">${surah.englishNameTranslation}</td>
          <td class="">${surah.numberOfAyahs}</td>
          <td class="">${surah.revelationType}</td>
        `
      });
    });
})();
