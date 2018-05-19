const form = document.querySelector("form");
const searchInput = document.querySelector("input");
const BASE_URL = "https://web-scraper-server-usldwnacoy.now.sh/";
const resultsList = document.querySelector("#results");
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  getSearchResults(searchTerm).then(showResults);
}
function getSearchResults(searchTerm) {
  return fetch(`${BASE_URL}search/${searchTerm}`).then(res => res.json());
}
function showResults(results) {
  console.log("====================================");
  console.log(results);
  console.log("====================================");
  results.forEach(movie => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.appendChild(img);
    img.src = movie.image;
    const a = document.createElement("a");
    a.textContent = movie.title;
    a.href = "/movie.html?imdbID=" + movie.imdbID;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}
