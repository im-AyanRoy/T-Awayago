// Toggle navigation menu on mobile
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Form validation - optional feature
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (!name || !email) {
        alert("Please fill out all required fields.");
        return;
    }

    // If everything is okay, show a success message
    alert("Thank you for your submission!");
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

// Menu Toggle
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

// Get the custom cursor element
const customCursor = document.querySelector('#custom-cursor');

// Track mouse position
let mouseX = 0;
let mouseY = 0;

// Update mouse position on mousemove
window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Smooth the cursor movement using requestAnimationFrame
function smoothCursor() {
    const currentX = parseFloat(customCursor.style.left) || 0;
    const currentY = parseFloat(customCursor.style.top) || 0;

    // Calculate the difference between the current position and the target mouse position
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;

    // Apply smooth easing (adjust the multiplier for speed)
    const speed = 0.1; // Increase for faster movement
    const moveX = currentX + dx * speed;
    const moveY = currentY + dy * speed;

    // Update cursor position
    customCursor.style.left = `${moveX}px`;
    customCursor.style.top = `${moveY}px`;

    // Continue the animation
    requestAnimationFrame(smoothCursor);
}

// Start the smooth cursor movement
requestAnimationFrame(smoothCursor);

// Optional: Change cursor appearance when hovering over different elements
document.querySelectorAll('a, button, input').forEach(element => {
    element.addEventListener('mouseover', () => {
        customCursor.style.transform = 'scale(1.5)'; // Increase size
        customCursor.style.backgroundColor = '#007bff'; // Change color
        customCursor.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)'; // Add glow effect
    });

    element.addEventListener('mouseout', () => {
        customCursor.style.transform = 'scale(1)'; // Reset size
        customCursor.style.backgroundColor = '#ff4d4d'; // Reset color
        customCursor.style.boxShadow = 'none'; // Remove glow effect
    });
});

// Smooth effect when hovering over sections
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        customCursor.style.transform = 'scale(2)'; // Increase size further
        customCursor.style.backgroundColor = '#28a745'; // Change color for sections
        customCursor.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.5)'; // Green glow effect
    });

    section.addEventListener('mouseout', () => {
        customCursor.style.transform = 'scale(1)'; // Reset size
        customCursor.style.backgroundColor = '#ff4d4d'; // Reset color
        customCursor.style.boxShadow = 'none'; // Remove glow effect
    });
});

// Add an event listener for mouse clicks to change the cursor's appearance
window.addEventListener('click', () => {
    customCursor.style.transform = 'scale(1.2)'; // Slightly increase size when clicked
    customCursor.style.backgroundColor = '#343a40'; // Darker color on click
    customCursor.style.transition = 'transform 0.1s ease, background-color 0.1s ease'; // Add smooth transition

    // Reset cursor state after a short delay
    setTimeout(() => {
        customCursor.style.transform = 'scale(1)'; // Reset size
        customCursor.style.backgroundColor = '#ff4d4d'; // Reset color
    }, 200);
});

// Fade effect for the outer part of the cursor (transparency)
customCursor.style.background = 'radial-gradient(circle, rgba(255, 77, 77, 1) 50%, rgba(255, 77, 77, 0) 100%)';

// Optional: Cursor style reset when hovering over non-interactive elements
document.querySelectorAll('*:not(a):not(button):not(input):not(section)').forEach(element => {
    element.addEventListener('mouseover', () => {
        customCursor.style.transform = 'scale(1)'; // Reset size
        customCursor.style.backgroundColor = '#ff4d4d'; // Reset color
        customCursor.style.boxShadow = 'none'; // Remove glow effect
    });
});


// cursor animation - line 55