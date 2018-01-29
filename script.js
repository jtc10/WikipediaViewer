

$('#random-article').click(function () {
  window.open('https://en.wikipedia.org/wiki/Special:Random');
});

//event listener to get info from wikipedia api

$('#search').on('keyup keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }

  let result = document.getElementById('search').value;
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + result +
    '&prop=revisions&rvprop=content&formatversion=2',
    dataType: 'jsonp',
    type: 'GET',
    success: function (data) {
      let results = '';
      for (let i = 0; i < 10; i++) {
        const link = `<a href='${data[3][i]}>'${data[1][i]}</a>`;
        const split = data[2][i].split('.').join('') + '...';
        results += `<div class="content">${link}<br><br>${split}</div>`;
      }
      $('.container').html(results);
    }
  });
});
