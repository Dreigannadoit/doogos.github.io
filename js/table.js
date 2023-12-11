const title = document.getElementById("titleHead");
const checklist = document.getElementById("checklist");
const exitTableIcon = document.getElementById("exitTableIcon");
const tableTip = document.getElementById("tableTip");

title.addEventListener("click", openTable);
exitTableIcon.addEventListener("click", openTable);

function openTable(){
    checklist.classList.toggle("active");
    tableTip.style.opacity = 0;
}