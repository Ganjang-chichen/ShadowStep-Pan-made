const player_character = document.querySelector(".main");
const player_img = player_character.querySelector("img");

document.addEventListener("keydown", (e) => {
    
    if(e.key === " "){
        let audio_drum = new Audio();
        audio_drum.src = "./sound/drum2.m4a";
        audio_drum.volume = 0.4;
        audio_drum.play();

        let left_src = "./img/chactor/left/snowmiku-left.png";
        let front_src = "./img/chactor/front/snowmiku-front.png"
        change_left(player_img, left_src, front_src);
    }

    if(e.key === "V"){
        let audio_drum = new Audio();
        audio_drum.src = "./sound/drum2.m4a";
        audio_drum.volume = 0.4;
        audio_drum.play();
        
        let left_src = "./img/chactor/left/snowmiku-left.png";
        let front_src = "./img/chactor/front/snowmiku-front.png"
        change_right(player_img, left_src, front_src);
    }
});

