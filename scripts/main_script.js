/**
 * Turns the hamburger menu visible
 */
function hamburgerOn () {
	// jQuery
	$("#close_hamburger").fadeIn(400);
	$("#open_hamburger").fadeOut(600);
	$("#nav_mobile").slideDown(400);

	// Show meny (later handled by jQuery)
	document.getElementById("nav_mobile").style.display = "flex";
	
	// Prevent scrolling
	document.body.style.position = "fixed";
	document.body.style.top = "0px";	

	
	// (Try to) get the main tag of index
	let main = document.getElementById("index_main");

	// Only do this if the current website is "index"
	if (main !== null) {
		// Get the buttons
		let ham_buttons = document.getElementsByClassName("hamburger_button");
	
		// Correct the unwanted offset for the buttons
		for (let index = 0; index < ham_buttons.length; index++) {
			const button = ham_buttons[index];
	
			button.style.marginTop = "-8px";
			button.style.marginRight = "-8px";
		}
	}	
}

/**
 * Turns the hamburger menu hidden
*/
function hamburgerOff () {
	// jQuery
	$("#close_hamburger").fadeOut(400);
	$("#nav_mobile").slideUp(400);
	$("#open_hamburger").fadeIn(400);

	// Enable scrolling
	document.body.style.position = "";
	document.body.style.top = "";

	// (Try to) get the main tag of index
	let main = document.getElementById("index_main");

	// Only do this if the current website is "index"
	if (main !== null) {
		// Get the buttons
		let ham_buttons = document.getElementsByClassName("hamburger_button");
	
		// Correct the unwanted offset for the buttons
		for (let index = 0; index < ham_buttons.length; index++) {
			const button = ham_buttons[index];
	
			button.style.marginTop = "0px";
			button.style.marginRight = "0px";
		}
	}
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

