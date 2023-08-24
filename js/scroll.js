// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
	// current scroll position
	const currentScrollPos = window.scrollY;

	if (prevScrollPos > 108) {
		// user has scrolled up
		document.querySelector(".nav-container").classList.remove("hidden");
	} else {
		// user has scrolled down
		document.querySelector(".nav-container").classList.add("hidden");
	}

	// update previous scroll position
	prevScrollPos = currentScrollPos;
});
