function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

/* MODAL LOGIC */
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

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
