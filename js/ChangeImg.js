
function change_left(character, left, front){
    
    character.src = front;
    character.src = left;
    character.style = "transform: scaleX(1);";
    
    setTimeout(e => {
        character.src = front;
    }, 150);

}

function change_right(character, left, front){
    
    character.src = front;
    character.src = left;
    character.style = "transform: scaleX(-1);";
    
    setTimeout(e => {
        character.src = front;
    }, 150);

}