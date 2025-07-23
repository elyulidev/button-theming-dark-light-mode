// script.js
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Establece el tema claro como inicial
body.classList.add("light-theme");

themeToggle.addEventListener("click", () => {
	if (body.classList.contains("light-theme")) {
		body.classList.remove("light-theme");
		body.classList.add("dark-theme");
	} else {
		body.classList.remove("dark-theme");
		body.classList.add("light-theme");
	}
});
