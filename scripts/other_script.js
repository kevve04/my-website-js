/**
 * Shows an alert with the message "Hello, Javascript!"
 */
function showHello () {
	alert("Hello, JavaScript!");
}

/**
 * Switches apperance of the page 'other.html' between dark and light
 */
function darkModeToggle () {
	let main = document.getElementById("other_main");
	let sections = document.getElementsByClassName("other_section");

	if (main.style.backgroundColor == "rgb(255, 253, 245)") {
		main.style.backgroundColor = "rgb(46, 48, 56)";
		main.style.color = "whitesmoke";
		
		for (let section of sections) {
			section.style.backgroundColor = "rgb(149, 20, 106)";
			section.style.color = "whitesmoke";
		}
	} else {
		main.style.backgroundColor = "rgb(255, 253, 245)";
		main.style.color = "rgb(61, 28, 67)";

		for (let section of sections) {
			section.style.backgroundColor = "rgb(214, 122, 184)";
			section.style.color = "rgb(61, 28, 67)";
		}
	}
}