let gameContainer = document.querySelector(".game");
let input_text =document.querySelector("#input");
let facilebtn =document.querySelector(".facile");
let normalbtn =document.querySelector(".normal");
let difficilebtn =document.querySelector(".difficile");
let controls =document.querySelector(".controls");
let div_score=document.querySelector(".score");
let contenu_score =document.querySelector(".contenu_score");
let chrono ="";
let images = ["./public/image/image1.jpg", "./public/image/image2.jpg", "./public/image/image3.jpg", "./public/image/image4.jpg", "./public/image/image5.jpg", "./public/image/image6.jpg", "./public/image/image7.jpg", "./public/image/image8.jpg"];
facilebtn.addEventListener("click",()=>{
    input_text.value = input_text.value.trim();
    while (input_text.value == "") {
        alert("enter your name");
        return;
    }
    controls.classList.add("none");
    gameContainer.classList.remove("none");
    seconds = 0;
    minutes = 0;
    chrono =setInterval(timeGenerator,1000); 
    time.classList.remove("none");
    images.sort(() => Math.random() - 0.5);

    let contenugame =`
    <div class=" card ">
            <img src=${images[0]} class="front" alt="" srcset="">
            <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
        </div>

        <div class=" card ">
            <img src=${images[0]} class="front" alt="" srcset="">
            <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
        </div>

        <div class=" card">
            <img src=${images[1]} class="front" alt="" srcset="">
            <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
        </div>

        <div class=" card">
            <img src=${images[1]} class="front" alt="" srcset="">
            <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
        </div>

        
    `;
    gameContainer.innerHTML =contenugame;
    gameContainer.classList.add("facile_nv");
    gameContainer.classList.remove("normal_nv");
    gamepaire();
})




normalbtn.addEventListener("click" ,()=>{
    input_text.value = input_text.value.trim();
    while (input_text.value == "") {
        alert("enter your name");
        return;
    }
    controls.classList.add("none");
    gameContainer.classList.remove("none");
    seconds = 0;
    minutes = 0;
    chrono =setInterval(timeGenerator,1000); 
    time.classList.remove("none");
    images.sort(() => Math.random() - 0.5);

    let contenugame =`
    <div class=" card ">
    <img src=${images[0]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
    <img src=${images[0]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
    <img src=${images[1]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
    <img src=${images[1]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[2]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[2]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[3]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[3]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

    `;
    gameContainer.innerHTML =contenugame;
    gameContainer.classList.add("normal_nv");
    gameContainer.classList.remove("facile_nv");
    gamepaire();
})

difficilebtn.addEventListener("click",() =>{
    input_text.value = input_text.value.trim();
    while (input_text.value == "") {
        alert("enter your name");
        return;
    }
    controls.classList.add("none");
    gameContainer.classList.remove("none");
    seconds = 0;
    minutes = 0;
    chrono =setInterval(timeGenerator,1000); 
    time.classList.remove("none");
    images.sort(() => Math.random() - 0.5);

    let contenugame =`
    <div class=" card ">
    <img src=${images[0]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
    <img src=${images[0]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
    <img src=${images[1]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
    <img src=${images[1]} class="front" alt="" srcset="">
    <img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[2]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[2]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[3]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[3]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[4]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[4]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[5]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[5]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[6]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card ">
<img src=${images[6]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[7]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>

<div class=" card">
<img src=${images[7]} class="front" alt="" srcset="">
<img src="./public/image/bg_cl.png" class="back" alt="" srcset="">
</div>
    `;
    gameContainer.innerHTML =contenugame;
    gameContainer.classList.remove("normal_nv");
    gameContainer.classList.remove("facile_nv");
    gamepaire();

});

function gamepaire() {
//*
let allCards= document.querySelectorAll(".card");  
let firstCard = "" ;
let secondCard = "" ;
let canClick =true;
let score = 0;

allCards.forEach((card) =>{
    card.addEventListener("click" , cardClick.bind(null ,card));

});

function cardClick(card) {
    //^ you can't  click 3 times
    if (!canClick) {
        return;
    }
    // prevent card double click
    if (card.classList.contains("flip")){
        return;
    }
    card.classList.add("flip");

    if (!firstCard){
        firstCard = card ;
    } 
    else if (!secondCard){
        secondCard = card;
    }  
    // console.log(firstCard , secondCard);
    //! verifer if firstCard = secondCard
    let img1 =firstCard ? firstCard.firstElementChild.src : "";
    let img2 =secondCard ? secondCard.firstElementChild.src : "";
    // console.log(img1, img2);
        //! if firstCard = secondCard
    if (img1 === img2) {
        console.log("matchinggggg");
        firstCard ="";
        secondCard ="";
        //? score -------
        score++;
        if (score === allCards.length / 2) {
            gameOver();
        }
        //^ if firstCard != secondCard
    }else if (img1 && img2) {
        canClick=false;
        setTimeout(() =>{
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard ="";
            secondCard ="";
            canClick=true;
        },1000);
    }
}
let niveauser= "";
//! function gameOver
function gameOver() {
    setTimeout(() => {
        clearInterval(chrono);
        let rslttime = time.innerHTML

        alert("YOU WiiiiiiiN");
        if (allCards.length ==16) {
            niveauser="Difficile";
        }else if (allCards.length ==8) {
            niveauser="Normal";
        }else if (allCards.length ==4) {
            niveauser="Facile";
        }
        controls.classList.remove("none");
        gameContainer.classList.add("none");
        time.classList.add("none");

        //* table scores
        div_score.classList.remove("none");
        contenu_score.innerHTML +=`
        <div class="rslt">
        <h4>${input_text.value}</h4>
        <h4>${niveauser}</h4>
        <h4>${rslttime}</h4>
        </div>
        `;
        input_text.value="";
        //* end table scores
    }, 1000);
} 
//* pick random objects
allCards.forEach((card) =>{
    let randCard =Math.floor(Math.random() * 16);
    card.style.order = randCard;
})
};
let time = document.getElementById("time");

//* initial time 
let seconds = 0;
let minutes = 0;

//^ function time 
const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
        //& formation time before displaying
        let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
        let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
        time.innerHTML = `Time:${minutesValue}min:${secondsValue}s`;
};
images.sort(() => Math.random() - 0.5);
console.log(images[0]);