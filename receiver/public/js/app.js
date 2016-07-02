var socket = io();
var app = document.getElementById("app");
var player = document.getElementById("video_player");
var source = document.getElementById("video_source");

var control_keywords = ["pause", "play", "stop", "mute", "unmute"];

socket.on('control_message', function(msg){

    console.log(msg);

    switch(msg) {
        case "pause":
            player.pauseVideo();
            break;
        case "play":
            player.playVideo();
            break;
        case "stop":
            player.stopVideo();
            break;
        case "mute":
            player.mute();
            break;
        case "unmute":
            player.unMute();
            break;
        default:
            console.log("Unknown control command");
            break;
    }

});

socket.on('video message', function(msg){
    if(control_keywords.indexOf(msg) == -1) {
        console.log(msg);
        loadVideo(youtube_parser(msg));
        source.src = msg;
        player.load();
        app.style.backgroundColor = "#000";
        document.getElementById("message").style.display = "none";
        player.style.opacity = "1.0";
    }
});

document.getElementById('video_player').addEventListener('ended', videoEnded, false);
function videoEnded(e) {
    player.style.opacity = "0.0";
    app.style.backgroundColor = "#b31217";
    document.getElementById("message").style.display = "block";
}

// var line = document.getElementById("line");
// var lineWidth = 500;
// line.style.width = lineWidth + "px";
// var expanded = true;
// window.setInterval(function() {
//
//     console.log("animating...");
//
//     if(expanded === false)
//     {
//         line.style.width = lineWidth + "px";
//         expanded = true;
//     }
//     else
//     {
//         line.style.width = "0";
//         expanded = false;
//     }
//
// }, 2000);

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
