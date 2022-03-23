let file_loading = false;

let youtube_link;
let youtube_start;
let youtube_end;

let bpm;
let game_start;
let game_end;

let beat_change;

let file = fetch("./sample/test.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        console.log(jsondata);
        youtube_link = jsondata.youtube_link;
        youtube_start = jsondata.youtube_start;
        youtube_end = jsondata.youtube_end;

        bpm = jsondata.bpm;
        game_start = jsondata.game_start;
        game_end = jsondata.game_end;

        beat_change = jsondata.beat_change;

        file_loading = true;
    })
