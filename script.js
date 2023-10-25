const textareaEl = document.querySelector('.textarea');
const characterNumberEl = document.querySelector('.stat__number--characters');
const wordNumberEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');

const handleEvent = () => {
    
    if(textareaEl.value.includes("<script>")){
        alert("You can't use <script> in the text.");
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    if(textareaEl.value.includes("  ")){
        textareaEl.value = textareaEl.value.replace('  ', ' ');
    }

    let numOfWords = textareaEl.value.split(' ').length;
    const numOfChar = textareaEl.value.length;
    if(numOfChar === 0){
        numOfWords = 0;
    }
    const twitterCharLeft = 280 - numOfChar;
    const facebookCharLeft = 2200 - numOfChar;

    if(twitterCharLeft < 0){
        twitterNumberEl.classList.add('stat__number--limit');
    }else{
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if(facebookCharLeft < 0){
        facebookNumberEl.classList.add('stat__number--limit');
    }else{
        facebookNumberEl.classList.remove('stat__number--limit');
    }

    characterNumberEl.textContent = numOfChar;
    wordNumberEl.textContent = numOfWords;
    twitterNumberEl.textContent = twitterCharLeft;
    facebookNumberEl.textContent = facebookCharLeft;
};

textareaEl.addEventListener('input', handleEvent);