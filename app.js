const jokeText = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click",generateJokes);

generateJokes();

async function generateJokes(){
    const respone = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");

    const data = await respone.json();
    console.log(data);

    let joke = "";
    if(data.joke == undefined){
        joke = `${data.setup}<br/>${data.delivery}`;
    } else{
        joke = data.joke;
    }
    jokeText.innerHTML = joke;
}