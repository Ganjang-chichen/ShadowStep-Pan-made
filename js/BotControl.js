
function bot_step() {
    setInterval(() => {
        console.log((Date.now() - start) % 300);
    
        let bot = document.querySelectorAll(".sub");
        
        let left_src = "./img/chactor/left/snowmiku-left.png";
        let front_src = "./img/chactor/front/snowmiku-front.png"
    
        for(let i = 0; bot.length; i++){
            let img = bot[i].querySelector("img");
            change_left(img, left_src, front_src);
        }
    
    }, 300);
}
