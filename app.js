// VARIABLE 

const button = document.querySelector('.btn');
const ul = document.querySelector('ul');

// FUNCTION 

const addJoke = async() => {
    //alert('it wokrs');
    let jokeText= await getJoke();
    let newLi = document.createElement('li');
    newLi.innerText= jokeText;
    ul.appendChild(newLi);
}

const getJoke = async () => {
    try {
        let config = { headers: { Accept:"application/json" }};
        let joke= await axios.get("https://icanhazdadjoke.com/",config);
        return joke.data.joke;
    }catch(e){
        return e;
    }
}
//EVENTS

button.addEventListener('click', addJoke)
