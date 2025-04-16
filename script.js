// JavaScript for theme toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Toggle Dark Mode';
    themeButton.style.position = 'fixed';
    themeButton.style.bottom = '20px';
    themeButton.style.right = '20px';
    themeButton.style.padding = '10px 15px';
    themeButton.style.backgroundColor = '#333';
    themeButton.style.color = '#fff';
    themeButton.style.border = 'none';
    themeButton.style.borderRadius = '5px';
    themeButton.style.cursor = 'pointer';
    document.body.appendChild(themeButton);

    themeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
});

// CSS for Dark Mode
const darkThemeStyle = document.createElement('style');
darkThemeStyle.textContent = `
    .dark-theme {
        background-color: #121212;
        color: #f4f4f4;
    }
    .dark-theme header {
        background: linear-gradient(120deg, #333, #555);
    }
    .dark-theme footer {
        background-color: #121212;
    }
    .dark-theme .track {
        background-color: #1e1e1e;
        color: #f4f4f4;
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(darkThemeStyle);
