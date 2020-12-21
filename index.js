// adding a click function where user clicks image to start and stop music

document.getElementById("clickImageMusic").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};


document.getElementById("next-icon").onclick = function() {
    var audio = document.getElementById("audio-two");
    if (audio.paused) audio.play();
    else audio.pause();
};

