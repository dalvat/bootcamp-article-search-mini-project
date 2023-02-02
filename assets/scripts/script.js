let searchButton = $('#search-button');
let clearButton = $('#clear-button');

searchButton.on('click', function(event) {
  event.preventDefault();
  let searchTerm = $('#search-term-input').val();
  let numberOfRecords = $('#number-of-records-input').val();
  let startYear = $('#start-year-input').val();
  let endYear = $('#end-year-input').val();
  
  let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
  + searchTerm + "&api-key=JzyQ4A9itNYqAc3O0CySUs7Dy0IACa4I"
  + "&begin_date=" + startYear
  + "&end_date=" + endYear
  ;

  console.log(searchTerm);
  console.log(numberOfRecords);
  console.log(startYear);
  console.log(endYear);
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
  console.log(response);
  let articleDiv = $('<div>');
  
  });
});