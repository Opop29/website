function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

function openModal(type) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    if (type === "ecommerce") {
        title.innerText = "🌐 E-Commerce Platform";
        text.innerText =
            "A full-stack online store built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.";
    }

    if (type === "taskmanager") {
        title.innerText = "📱 Task Manager App";
        text.innerText =
            "A responsive task management application using Vue.js and Firebase. Allows users to create, edit, and track tasks with real-time updates.";
    }

    if (type === "portfolio") {
        title.innerText = "🎨 Portfolio Website";
        text.innerText =
            "This very website! Built with HTML, CSS, and JavaScript. Showcases modern design principles and responsive layout.";
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const text = "Hi, I'm Op-op";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }

    themeToggle.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
            updateThemeIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });

    function updateThemeIcon(theme) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.textContent = icon;
    }
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
