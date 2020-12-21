// adding a click function where user clicks image on the left to start and stop music

document.getElementById("clickImageMusic").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};


// button reloads song on click
// not sure how to make it fully work... if clicked time = 0 for the audio
function play() {
    document.getElementById("#reload").onclick = function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0
    }
}
}



// plays different song
let audio = new Audio(`audio/Free Spirit.mp3`)

let playOrPauseBtn = document.querySelector(`#forwardicon`)
let isMusicPlaying = false 

let toggleMusic = function() {
	
	if (isMusicPlaying === false) { 
		audio.play()
		isMusicPlaying = true
	} else { 
		audio.pause()
		isMusicPlaying = false
	}
	
}

playOrPauseBtn.addEventListener(`click`, toggleMusic)















// var ele = document.getElementById("next-icon");

// if (ele.addEventListener) {
//     ele.addEventListener("click", function() {
//         var audio = document.getElementById("audio-two");
//         if (audio.paused) audio.play();
//     }
//     );
//     } else {
//         ele.attachEvent("onclick", function() {
//             audio.pause();
//         })
//     }







// var audioTwo = document.getElementByID('audio-two')
//     element.onclick = function() {
//         let audioTwo = audio-two
//             audioTwo.play();
//             isPlaying = true;
        
//         if (isPlaying == true){
//             element.onclick = function() {
//                 audioTwo.pause();
//             }
//         }
//     }