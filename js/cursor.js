// cursor
const linkA = document.querySelectorAll("a")
const cursor = document.querySelector('.cursor');

function costumeCursor(){
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })

    linkA.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add("link-hover");
            cursor.classList.remove("link-out");
        });
    
        link.addEventListener('mouseout', () => {
            cursor.classList.remove("link-hover");
            cursor.classList.add("link-out");
        });
    });
}