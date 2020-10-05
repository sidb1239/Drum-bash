for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonsPressed=this.innerHTML;
        makesound(buttonsPressed);
        buttonAnimation(buttonsPressed);
        
       
    })

    document.addEventListener("keydown",function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    })

    function makesound(key){
        switch(key){
            case "w":
                var tom_1= new Audio('sounds/tom-1.mp3');
                tom_1.play();
            
            case "a":
                var tom_2= new Audio("sounds/tom-2.mp3");
                tom_2.play();
            
            case "s":
                var tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play();
            
            case "d":
                var tom_4 = new Audio("sounds/tom-4.mp3");
                tom_4.play();
            case "j":
                var snare1= new Audio("sounds/snare.mp3");
                snare1.play();
            case "k" :
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            case "l":
                var crash1 = new Audio("sounds/crash.mp3");
                crash1.play();


        }
    }


    function buttonAnimation(currentkey){
        var animation = document.querySelector("."+currentkey);
        animation.classList.add("pressed");

        setTimeout(function(){
            animation.classList.remove("pressed");
        },100)
    }
}








// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();