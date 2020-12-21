// adding a click function where user clicks image on the left to start and stop music

document.getElementById("clickImageMusic").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};

// adding event listener to reload music on click
let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false  // Flip the switch
		play.textContent = `refresh-outline`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `⏸`
	}
}
let play = document.querySelector(`refresh-outline`)
play.addEventListener(`click`, pressedPlay)




// adding event listener to play other song on click
let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false  // Flip the switch
		play.textContent = `play-forward-outline`
	}
}

let play = document.querySelector(`audio-two`)
play.addEventListener(`click`, pressedPlay)