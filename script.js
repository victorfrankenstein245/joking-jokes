const jokeElement = document.getElementById("joke");
const jokebtn = document.getElementById("jokebtn");

jokebtn.addEventListener("click", generatejoke);

generatejoke();

function generatejoke() {
  const config = {
    headers: {
      Accept: "appllication/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    });
}
