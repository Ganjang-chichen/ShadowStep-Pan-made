let youtube_link;
let youtube_start;
let youtube_end;

let bpm;
let game_start;
let game_end;

document.getElementById('noteData').addEventListener('change', (e) => {
    let file = new FileReader();
    file.onload = () => {
        let txt = (file.result);
        console.log(txt);
    }
})