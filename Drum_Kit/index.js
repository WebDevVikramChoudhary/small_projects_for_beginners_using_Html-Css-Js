var btn = document.querySelectorAll(".drum").length

for(var i = 0; i < btn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", click)
  
}
function click() {
    var ChangSound = this.innerHTML;
    keyClick(ChangSound)
   
}
document.addEventListener("keypress", test);

function test(e) {
   keyClick(e.key)
}
function keyClick(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
            case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
            case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
            case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
            case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
            case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
             case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
    
        default: console.log("sound is not defind")
            
    }
    
}