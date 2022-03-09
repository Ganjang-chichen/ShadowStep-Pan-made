const player_character = document.querySelector(".main");

function change_left(left, front){
    
    player_character.querySelector("img").src = front;
    player_character.querySelector("img").src = left;
    player_character.querySelector("img").style = "transform: scaleX(1);";
    console.log("key down l");

    setTimeout(e => {
        player_character.querySelector("img").src = front;
        console.log("end");
    }, 200);

}

function change_right(left, front){
    
    player_character.querySelector("img").src = front;
    player_character.querySelector("img").src = left;
    player_character.querySelector("img").style = "transform: scaleX(-1);";
    console.log("key down r");

    setTimeout(e => {
        player_character.querySelector("img").src = front;
        console.log("end");
    }, 200);

}