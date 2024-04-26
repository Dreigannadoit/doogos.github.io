document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementsByTagName("body")[0]
    const bodyGetClass = body.classList
    const wrapper = document.getElementById("wrapper") 

    // height
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // TODO: create universal class then replace get by element with query selector
    // hero header and sub-header
    const s1SubHeaderOne = document.getElementById("s1-h2-1");
    const s1SubHeader2 = document.getElementById("s1-h2-2");
    const s1Header = document.getElementById("s1-h");
    const s1SubText = document.getElementById("s1-p");
    let currentXPosition = 0;

    // intro video background
    const intro_video = document.getElementById("intro");
    let introDefaultSize = 80; 
    
    const sizeSpeedMultiplier = 1.8;

    // get current user scroll position
    function ScrollPosition() {
        // scroll position
        let scrollPosition = window.scrollY;
        let scrollPercentage = ((scrollPosition / totalHeight) * 100); // converts to percent

        introHeroState(scrollPercentage)
        Start(scrollPercentage)

        // changes collor pallete within the scroll position coordinate
        if(scrollPercentage >= 18 && scrollPercentage <= 1000){
            bodyGetClass.add("s3-active")
        }
        else{
            bodyGetClass.remove("s3-active")
        }

        // console.log(`${scrollPercentage}%`)
    }

    // paralex header and navigation title hide
    function Start(scrollPercentage) {
        let newXPosition = currentXPosition;ition = scrollPercentage

        if(scrollPercentage >= 1){
            // hide nav title
            bodyGetClass.add("hide-title")
            // move hero title
            newXPosition += Math.floor(scrollPercentage * sizeSpeedMultiplier)
        }
        else{
            // reset
            bodyGetClass.remove("hide-title")
            newXPosition = scrollPercentage
        }

        s1SubHeaderOne.style.transform  = `translateY(-${newXPosition * 20}%)`;
        s1SubHeader2.style.transform  = `translateY(${newXPosition * 40}%)`;
        s1Header.style.transform  = `translateX(${newXPosition * 7.5}%)`;
        s1SubText.style.transform  = `translateX(-${newXPosition * 10}%)`;
        // console.log(newXPosition)
    }

    let adde = () => {
        const hiddenPage = document.createElement('div');   
        hiddenPage.classList.add("findMe")
        hiddenPage.setAttribute('id','findMe');
        wrapper.appendChild(hiddenPage); 

        const hiddenPage_inner = document.createElement('div');   
        hiddenPage_inner.classList.add("con")
        hiddenPage.appendChild(hiddenPage_inner); 
        
        const form = document.createElement("form");
        form.setAttribute("method", "post");
        hiddenPage_inner.appendChild(form); 

        const hiddenTitle = document.createElement("h1");
        hiddenTitle.innerHTML = "Hint: I am the odd one out, painted in gold"
        form.appendChild(hiddenTitle); 

        const pass = document.createElement("input");
        pass.setAttribute("type", "text");
        pass.setAttribute("name", "pass");
        pass.setAttribute("placeholder", "Enter Code");
        form.appendChild(pass); 

        const hiddenButtons = document.createElement("div");
        hiddenButtons.classList.add("buttons")
        form.appendChild(hiddenButtons); 

        const hiddenExitButton = document.createElement("button");
        hiddenExitButton.innerHTML = "Exit"
        hiddenPage_inner.appendChild(hiddenExitButton); 

        const el = document.getElementById("secret")
        
        hiddenExitButton.addEventListener("click", activateSecret);
        el.addEventListener("click", activateSecret);

        function activateSecret(){
            hiddenPage.classList.toggle("active")
        }

        const EnterExitButton = document.createElement("button");
        EnterExitButton.innerHTML = "Enter Password"
        hiddenButtons.appendChild(EnterExitButton);
        
        EnterExitButton.addEventListener('click',(event) => {
            event.preventDefault();
        });
        
        const redi = document.createElement("a");
        redi.setAttribute("href", "./css/anotherPage.html");
        redi.innerHTML = "How did you get in?"
        redi.style.cursor = "pointer"

        EnterExitButton.addEventListener('click',() => {
            if(pass.value === "furballs"){
                form.appendChild(redi); 
                EnterExitButton.remove()
            } else{
                console.log("Nah")
            }
        });

        return hiddenPage, hiddenExitButton
    }

    // increase video size on scroll
    function introHeroState(scrollPercentage) {
        // handles the state of intor hero
        let introNewSize = introDefaultSize;

        if(scrollPercentage < 50){
            introNewSize += Math.floor(scrollPercentage * sizeSpeedMultiplier)
        }
        else{
            introNewSize = scrollPercentage
        }

        intro_video.style.width = `${introNewSize}%`;
        intro_video.style.height = `${introNewSize}%`;
    }

    document.addEventListener("scroll", ScrollPosition);

    type();
    ScrollPosition();
    adde()
    costumeCursor();
});
