const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');

const currentTitle = counterTitleEl.innerHTML;
let currentValue = +counterValueEl.textContent;
const handleEvent = (d) => {
    if(d === "inc"){
        if(currentValue < 5){
            currentValue++;
            counterValueEl.textContent = currentValue;
        }else{
            counterEl.classList.add('counter--limit');
            counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";
            increaseButtonEl.disabled = true;
            decreaseButtonEl.disabled = true;
        }
        increaseButtonEl.blur();
    }else if(d === "dec"){
        if(currentValue > 0){
            currentValue--;
            counterValueEl.textContent = currentValue;
        }
        decreaseButtonEl.blur();
    }
}

const handleReset = () => {
    currentValue = 0;
    counterValueEl.textContent = currentValue;
    counterEl.classList.remove('counter--limit');
    counterTitleEl.innerHTML = currentTitle;
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    resetButtonEl.blur();
}

increaseButtonEl.addEventListener('click', () => handleEvent('inc'));
decreaseButtonEl.addEventListener('click', () => handleEvent('dec'));
resetButtonEl.addEventListener('click', handleReset);
document.addEventListener('keydown', (e) => {
    let key = e.key;
    if(key === "r" || key === "R"){
        handleReset();
    }else{
        handleEvent('inc');
    }
});