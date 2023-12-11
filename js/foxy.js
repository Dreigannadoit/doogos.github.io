const foxy = document.getElementById("foxy");
const trigger = document.getElementById("trigger");

trigger.addEventListener('click', () => {
    foxy.classList.add("scare");
    setTimeout(() => {foxy.classList.remove("scare")}, 865)
})