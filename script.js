/* Prompt: Assist me in the creation of a dark/light mode toggle for my website. Use the button with id #dark-mode-toggle and the set of colors from body.dark-mode in the css for the implementation. */
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const savedTheme = localStorage.getItem('theme');

function updateTheme(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    darkModeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
    darkModeToggle.setAttribute('aria-pressed', String(isDarkMode));
}

if (darkModeToggle) {
    const isDarkMode = savedTheme === 'dark';

    updateTheme(isDarkMode);

    darkModeToggle.addEventListener('click', () => {
        const nextIsDarkMode = !document.body.classList.contains('dark-mode');

        updateTheme(nextIsDarkMode);
        localStorage.setItem('theme', nextIsDarkMode ? 'dark' : 'light');
    });
}

// Typed.js implementation
if (document.querySelector('#typed-text')) {
    new Typed('#typed-text', {
        strings: ['CS Senior at MSU', 'Computer Assembler', 'C++ and Python Programmer', 'Game Developer'],
        typeSpeed: 35,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
    });
}

// ScrollReveal implementation
ScrollReveal().reveal('.section-title, .project, #about p', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

// Hotkeys implementation
if (typeof hotkeys !== 'undefined') {
    hotkeys.filter = function(event) {
        return true;
    };

    hotkeys('d', () => {
        document.querySelector('#dark-mode-toggle')?.click();
    });

    hotkeys('1', () => {
        document.querySelector('a[href="#"]')?.click();
    });

    hotkeys('2', () => {
        document.querySelector('a[href="#about"]')?.click();
    });

    hotkeys('3', () => {
        document.querySelector('a[href="#projects"]')?.click();
    });

    hotkeys('4', () => {
        document.querySelector('a[href="#contact"]')?.click();
    });
};