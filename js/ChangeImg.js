const player_character = document.querySelector(".main");

document.addEventListener("keydown", (e) => {
    if(e.key === " "){
        let left_src = "./img/chactor/left/snowmiku-left.png";
        let front_src = "./img/chactor/front/snowmiku-front.png"
        change_left(left_src, front_src);
    }
});

function change_left(left, front){
    
    player_character.querySelector("img").src = front;
    player_character.querySelector("img").src = left;
    console.log("key down");

    setTimeout(e => {
        player_character.querySelector("img").src = front;
        console.log("end");
    }, 150);

}