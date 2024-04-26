const foxy = document.getElementById("foxy");
const trigger = document.getElementById("trigger");
var audio = document.getElementById("audio");

trigger.addEventListener('click', () => {
    foxy.classList.add("scare");
    setTimeout(() => {foxy.classList.remove("scare")}, 865)
    audio.play();
})