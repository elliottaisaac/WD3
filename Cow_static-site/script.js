let isMobile = false;
if(document.documentElement.clientWidth < 600) isMobile = true;

//nav scripts ------------------------------------------------------------------------------------------->
for(i = 1; i <= 13; i++){
    let wave = document.createElement("div");
    wave.classList.add("wave");
    wave.style.gridColumn = `${i}/span 1`;
    document.querySelector("nav").appendChild(wave);
}

let menuOpen = false;
document.querySelector("#hamburger").addEventListener("click", () => {
    let menu = document.querySelector("#hamburgerMenu");
    let nav = document.querySelector("nav");
    let navMenus = document.querySelector("#masthead");
    if(menuOpen == false){
        menu.style.opacity = "1";
        menu.style.height = "140px";
        nav.style.transform = "translateY(140px)";
        navMenus.style.transform = "translateY(-140px)";
        document.querySelector("#hamburger svg:first-child").style.opacity = "0";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "rotate(45deg) translate(8px, 8px)";
        document.querySelector("#hamburger svg:nth-child(3)").style.transform = "rotate(-45deg)";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "0px";
        }); 
        if(isMobile){
            document.querySelector("main").style.display = "none";
            menu.style.border = "none";
            nav.style.transform = "translateY(320px)";
            navMenus.style.transform = "translateY(-320px)";
        }
        menuOpen = true;
    }
    else if(menuOpen == true){
        menu.style.opacity = "0";
        menu.style.height = "0px";
        nav.style.transform = "translateY(0px)";
        navMenus.style.transform = "translateY(0px)";
        document.querySelector("#hamburger svg:first-child").style.opacity = "1";
        document.querySelector("#hamburger svg:nth-child(2)").style.transform = "unset";
        document.querySelector("#hamburger svg:nth-child(3)").style.transform = "unset";
        document.querySelector("main").style.display = "block";
        menu.style.border = "4px solid #e9e8e8";
        document.querySelectorAll("#hamburgerMenu li a").forEach(link =>{
            link.style.marginLeft = "-300px";
        }); 
        menuOpen = false;
    }
});

if(isMobile){
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 32){
            document.querySelectorAll(".wave").forEach(wave =>{
                wave.style.display = "none";
            });
        }
        else if(window.scrollY < 32){
            document.querySelectorAll(".wave").forEach(wave =>{
                wave.style.display = "block";
            });
        }
    });
}
// ------------------------------------------------------------------------------------------->




//landing page animation ------------------------------------->
let circle1;
let circle2;
let c1;
let c2;
let text1;
let text2;
let moo;

function CreateCircles(){
    circle1 = document.createElement("div");
    c1 = false;
    circle2 = document.createElement("div");
    c2 = false;
    text1 = document.createElement("h1");
    text1.id = "text1";
    text1.innerHTML = "Get More";
    text2 = document.createElement("h1");
    text2.id = "text2";
    text2.innerHTML = "From Your";
    circle1.style.borderRadius="50%";
    circle1.style.backgroundColor="#373449";
    circle1.style.order = "2";
    circle2.style.borderRadius="50%";
    circle2.style.borderTopRightRadius="10%";
    circle2.style.borderBottomRightRadius="10%";
    circle2.style.backgroundColor="#e9e8e8";
    circle2.style.order = "1";
    document.querySelector("#animationContainer").appendChild(circle1);
    circle1.appendChild(circle2);
    circle1.appendChild(text1);
    circle2.appendChild(text2);
}
CreateCircles();

function Moo(){
    document.querySelector("body").classList.add("CowSpots");
    moo = document.createElement("h4");
    moo.classList.add("MOO");
    moo.innerHTML = "M00000000NEY!!!!";
    document.querySelector("#mockup").style.display = "none";
    document.querySelector("#landingPageAnimation").style.width = "100vw";
    document.querySelector("#animationContainer").appendChild(moo);
    window.addEventListener("click", () => {
        location.reload();
    });
}

function ClearCircles(){
    window.setTimeout( () => {
        if(c1==true){circle1.remove(); circle1 = undefined; text1.remove(); text1=undefined; }
        if(c2==true){circle2.remove(); circle2 = undefined; text2.remove(); text2=undefined; }
        CreateCircles();
        Moo();
    }, 9000);
    document.querySelector("body").classList.remove("CowSpots");
    document.querySelector("#mockup").style.display = "block";
    document.querySelector("#landingPageAnimation").style.width = "auto";
    moo.classList.remove("MOO");
}

let animation = setInterval( () => {
    var scr = window.scrollY
    if(scr >= window.innerHeight || window.innerWidth > 1400 && window.scrollY > 100){
        window.setTimeout( () => {
        circle1.style.height="90vw";
        circle1.style.width="90vw";
        }, 3000);
        c1 = true;

        window.setTimeout( () => {
            circle2.style.height="80vw";
            circle2.style.width="80vw";
        }, 7000);
        c2 = true;

        window.setTimeout( () => {
            moo.style.transform = "translateX(-240vw)";
            window.addEventListener('scroll', () => {
                window.scrollTo(0, scr);
            });
        }, 100);
        
        ClearCircles();
    }
}, 9000);  
//--------------------------------------------------------------------->




//homepage animated text typing --------------------------------------------------------------------->
if(document.querySelector("#typing")){
    const Typing = document.querySelector("#typing");
    let copy;
    let cycle = 0;
    let backspacing;
    let TypedChars;
    let backspaceTo;
    let lag;
    let lag2;

    window.addEventListener("load", Type);
    window.addEventListener("resize", Type);
    window.addEventListener("blur", Reset);

    function Type(){
        /*if(window.innerWidth > 1000) */copy = ["With Cow you can Spend. ", "With Cow you can Save. ", "With Cow you can Budget. ", "With Cow you can Invest. "];
        // else copy = [""];
        backspaceTo = 17;
        if(window.innerWidth < 1000) backspaceTo = 6;
        TypedChars = copy[cycle].split("");
        backspacing = false;
        Typing.innerHTML = copy[cycle];
        clearInterval(lag2); 
        lag2  = setInterval( () => {   
            lag = setInterval( () => {  

                    if (Typing.innerHTML.length == copy[cycle].length) backspacing = true;
                    
                    else if(Typing.innerHTML.length == backspaceTo){
                            backspacing = false;
                            cycle++;
                            if(cycle == 4) cycle = 0;
                            TypedChars = copy[cycle].split("");
                    }

                    if (backspacing == true && Typing.innerHTML.length > backspaceTo) Typing.innerHTML = Typing.innerHTML.slice(0, -1);  
    
                    if(backspacing == false && Typing.innerHTML.length >= backspaceTo){ 
                        if (Typing.innerHTML.length < copy[cycle].length) Typing.innerHTML += TypedChars[Typing.innerHTML.length];
                        if (Typing.innerHTML.length == copy[cycle].length) clearInterval(lag); 
                    }
            }, 133);     
        }, 6500);  
    }
    
    function Reset(){
        clearInterval(lag2); 
        window.addEventListener("focus", () => {
            Type();
        });
    } 

    //blinks the cursor
    const cursor = document.querySelector("#cursorSVG");
    cursor.classList.add("hidden");
    let blinking;
    setInterval( () => {
        if (blinking == true){
        cursor.classList.remove("hidden"); 
        blinking = false;
        }
        else {
            cursor.classList.add("hidden");
            blinking = true;
        }
    }, 680);
}
// --------------------------------------------------------------------->