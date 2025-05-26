

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getCodingJokes();
    const newList = document.createElement('LI');
    newList.append(jokeText);
    jokes.append(newList);
}

const getCodingJokes = async () => {
    const response = await axios.get("https://sv443.net/jokeapi/v2/joke/Programming");
    return response.data.joke;
}
button.addEventListener('click', addNewJoke);