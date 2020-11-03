
const ApiKey = 'https://api.chucknorris.io/jokes/random';

const btnTwitter = document.getElementById('btn-twitter')
const btnNext = document.getElementById('btn-next')
const jokes = document.querySelector('.jokes');





async function newJoke(){
    try {
        const chuckNorrisApi = await fetch(ApiKey);
                const data = await chuckNorrisApi.json();
                console.log(data.value);
               jokes.textContent= data.value;
        
    } catch (error) {
        newJoke()
    }
}
const twitter = ()=>{
   
    const twitterUrl = `https://twitter.com/intent/tweet?text=${jokes}`;
  window.open(twitterUrl, "_blank");
}
btnTwitter.addEventListener('click',twitter)
btnNext.addEventListener('click',newJoke)

