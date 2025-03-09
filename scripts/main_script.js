/**
 * Turns the hamburger menu visible
 */
function hamburgerOn () {
	document.getElementById("nav_mobile").style.display = "flex";
	document.getElementById("close_hamburger").style.display = "block";

    document.body.style.position = "fixed";
	document.body.style.top = "0px";
}

/**
 * Turns the hamburger menu hidden
*/
function hamburgerOff () {

    document.body.style.position = "";
    document.body.style.top = "";

}

/**
 * Plays a click sound (taken from https://freesound.org/people/eneibol/sounds/369964/)
 */
function playClick () {
	
	console.log("*click*");

	
	// REMEMBER TO UN-COMMENT THIS!!!!

	// let click = new Audio("lib/click.mp3");
	// click.play();
}

/**
 * Takes the button of the page the user is on and presses it down by reducing its height slightly and then bounce 
 * back up
 */
function animateButton () {
	let id = null;
	const button = document.getElementById("current_page_button");

	let height = 30;
	let offset = 15;

	let goingDown = true;
	let nrOfFrames = 6;

	clearInterval(id);
	id = setInterval(frame, 30);

	function frame() {
		// Check if it has been pushed down far enough
		if (height == 27) {
			goingDown = false;
		}

		if (goingDown) {
			height--;
			offset++;
		} else {
			height++;
			offset--;
		}
		
		// Update values
		button.style.height = height + "px"; 
		button.style.marginTop = offset + "px";
		nrOfFrames--;

		// Check if animation is done, i.e. if there are no frames left
		if (nrOfFrames == 0) {
			clearInterval(id);
		}
	}
}

