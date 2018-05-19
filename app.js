const form = document.querySelector('form');
const searchInput = document.querySelector('input')
form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    console.log(window.location.search)


}