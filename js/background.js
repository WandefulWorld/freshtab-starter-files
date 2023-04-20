const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const addJoke = async () => {
    const jokeResult = await getDadJoke();
    const newLi = document.createElement('Li');
    newLi.append(jokeResult);
    jokes.append(newLi);
}
const getDadJoke = async() => {
    try{
       const config = {headers: { Accept: 'application/json'}};
       const res = await axios.get('https://icanhazdadjoke.com/', config)
    //const joke = await res.json()
    //console.log(joke)
       return res.data.joke;
    } catch(e){
        return 'error!'
    }
};

button.addEventListener('click', addJoke);


// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');
// const addJoke = async () => {
//     const element = document.querySelector("p")
//     element.remove();
//     const jokeResult = await getDadJoke();
//     const newP = document.createElement('p');
//     newP.append(jokeResult);
//     jokes.append(newP);
// }
// const getDadJoke = async() => {
//     try{
//        const config = {headers: { Accept: 'application/json'}};
//        const res = await axios.get('https://icanhazdadjoke.com/', config)
//     //const joke = await res.json()
//     //console.log(joke)
//        return res.data.joke;
//     } catch(e){
//         return 'error!'
//     }
// };

// button.addEventListener('click', addJoke);


