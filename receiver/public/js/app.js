var socket = io();
socket.on('video message', function(msg){
    console.log(msg);
    document.getElementById("mySource").src = msg;
    document.getElementById("myVideo").load();
    document.getElementById("app").style.backgroundColor = "#000";
    document.getElementById("message").style.display = "none";
    document.getElementById("myVideo").style.opacity = "1.0";
});

document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
    document.getElementById("myVideo").style.opacity = "0.0";
    document.getElementById("app").style.backgroundColor = "#b31217";
    document.getElementById("message").style.display = "block";
}

var line = document.getElementById("line");
var lineWidth = 500;
line.style.width = lineWidth + "px";
var expanded = true;
window.setInterval(function() {

    console.log("animating...");

    if(expanded === false)
    {
        line.style.width = lineWidth + "px";
        expanded = true;
    }
    else
    {
        line.style.width = "0";
        expanded = false;
    }

}, 2000);
