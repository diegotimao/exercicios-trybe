// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const getJoke = (data) => {
  const joke = document.getElementById('joke');
  joke.innerHTML = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => getJoke(data))
    .catch((err) => alert(err));
};

window.onload = () => fetchJoke();
