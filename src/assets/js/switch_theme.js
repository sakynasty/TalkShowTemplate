const prefersTheme = localStorage.getItem('color-theme');
var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
	if (prefersTheme) {
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.dark('dark');
			localStorage.setItem('color-theme', 'light');
		}
	} else {
		if (document.documentElement.classList.contains('dark')) {
			localStorage.setItem('color-theme', 'dark');
		} else {
			localStorage.setItem('color-theme', 'light');
		}
	}
});
if (prefersTheme == light) {
	document.documentElement.classList.remove('dark');
} else {
	document.documentElement.classList.add('dark');
}
