// typwriter effect
const typedText = document.querySelector(".typed-text");
const botdotbot = document.querySelector(".botdotbot");
const botdotbottwo = document.querySelector(".botdotbottwo");
const cursorLoader = document.querySelector(".cursor-load");

const textArray = ["CUTEST", "BRAVEST", "BEST", "AWESOME-EST"];
const textArrayDot = ["...", "...", "...", "...", "Easter Egg", "..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
    if (charIndex > 0) {
        cursorLoader.classList.remove('blink');
        eraseAnimation(typedText, textArray)
        eraseAnimation(botdotbot, textArrayDot)
        eraseAnimation(botdotbottwo, textArrayDot)
        charIndex--;
        setTimeout(erase, 80);
    } 
    else {
        cursorLoader.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
        }
        setTimeout(type, 1000);
    }
}

const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursorLoader.classList.remove('blink');
        typeAnimation(typedText, textArray)
        typeAnimation(botdotbot, textArrayDot)
        typeAnimation(botdotbottwo, textArrayDot)
        charIndex++;
        setTimeout(type, 120);
    } 
    else {
        cursorLoader.classList.add('blink');
        setTimeout(erase, 1000);
    }
}

const eraseAnimation = (elm, list) => elm.textContent = list[textArrayIndex].slice(0, charIndex - 1);
const typeAnimation = (elm, list) => elm.textContent += list[textArrayIndex].charAt(charIndex);
