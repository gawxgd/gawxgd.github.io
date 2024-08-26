const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const topnav = document.querySelector('.topnav');
const links = document.querySelectorAll('.topnav a');
const contentBlocks = document.querySelectorAll('.content');
const textBlocks = document.querySelectorAll('.text');
const contactBlock = document.querySelector('.contact-block');

// Function to update the theme and button text
function updateTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        topnav.classList.add('dark-mode');
        links.forEach(link => link.classList.add('dark-mode'));
        contentBlocks.forEach(block => block.classList.add('dark-mode'));
        textBlocks.forEach(block => block.classList.add('dark-mode'));
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = "☀️ Light Mode";
        contactBlock.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        topnav.classList.remove('dark-mode');
        links.forEach(link => link.classList.remove('dark-mode'));
        contentBlocks.forEach(block => block.classList.remove('dark-mode'));
        textBlocks.forEach(block => block.classList.remove('dark-mode'));
        toggleButton.classList.remove('dark-mode');
        toggleButton.textContent = "🌙 Dark Mode";
        contactBlock.classList.remove('dark-mode');
    }
}

// Event listener for the dark mode toggle button
toggleButton.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    updateTheme(isDarkMode);

    // Save theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load saved theme from local storage on page load
const savedTheme = localStorage.getItem('theme');
updateTheme(savedTheme === 'dark');
