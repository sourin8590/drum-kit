
// Detecting button press
var numOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML; // Here "this" is used to detect which button is pressed
        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml)

    });
}

// Detecting keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key) // Here "event" is used to detect which key is pressed

    buttonAnimation(event.key)

});

// Providing sound output

function makeSound(key) {
    switch(key){
        case "w":var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        case "l":var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

        default:console.log(buttonInnerHtml)
    }
}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey)

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}