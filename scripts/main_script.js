/**
 * Turns the hamburger menu visible
 */
function hamburgerOn () {
	// jQuery
	$("#close_hamburger").fadeIn(400);
	$("#open_hamburger").fadeOut(600);
	$("#nav_mobile").slideDown(400);

	// Show menu (later handled by jQuery)
	document.getElementById("nav_mobile").style.display = "flex";
	
	// Prevent scrolling
	document.body.style.position = "fixed";
	document.body.style.top = "0px";

	// Get the buttons
	let ham_buttons = document.getElementsByClassName("hamburger_button");

	// Correct the unwanted offset for the buttons
	for (let index = 0; index < ham_buttons.length; index++) {
		const button = ham_buttons[index];

		button.style.marginTop = "-8px";
		button.style.marginRight = "-8px";
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

	// Get the buttons
	let ham_buttons = document.getElementsByClassName("hamburger_button");

	// Correct the unwanted offset for the buttons
	for (let index = 0; index < ham_buttons.length; index++) {
		const button = ham_buttons[index];

		button.style.marginTop = "0px";
		button.style.marginRight = "0px";
	}
}

/**
 * Plays a click sound (taken from https://freesound.org/people/eneibol/sounds/369964/)
 */
function playClick () {
	let click = new Audio("lib/click.mp3");
	click.play();
}

/**
 * Takes the button of the page the user is on and presses it down by reducing its height slightly and then bounce 
 * back up
 */
function animateButton () {
	// Pressing down
	$("#current_page_button").animate({
		marginTop: "18px",
		height: "27px"
	}, 100)
	
	// Bouncing up
	$("#current_page_button").animate({
		marginTop: "15px",
		height: "30px"
	}, 100)	
}

