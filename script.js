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

// Smooth Scroll for Buttons (except Testimonial and Contact Us)
document.querySelector(".btn2").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector("#destination").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector("#package").scrollIntoView({
        behavior: "smooth"
    });
});

// Prevent smooth scrolling for "Testimonial" and "Contact Us", and directly redirect
document.querySelectorAll('a[href="#testimonial"], a[href="#contact"]').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent any default smooth scroll behavior
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Directly redirect to the respective section (forces jump without scroll)
            window.location.href = `#${targetId}`; // Changes URL and navigates to the section immediately
        } else {
            // In case the section doesn't exist, you can optionally redirect to another page
            window.location.href = this.getAttribute('href');
        }
    });
});

// Footer Links: Prevent moving to top and open the page link or do nothing if no link is provided
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href'); // Get the href value of the link

        // If href is empty or the link doesn't point to a valid destination, prevent default action
        if (!href || href === "#" || href === "" || href === "javascript:void(0)") {
            e.preventDefault(); // Do nothing if no valid link
        } else {
            // Redirect to the given link if it's valid
            window.location.href = href; // Navigate to the link's destination
        }
    });
});

// Handling search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value;
    if (query) {
        alert('Searching for: ' + query);  // You can replace this with actual search logic
    }
});

// Handling the Enter key for search
document.querySelector('.search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if (query) {
            alert('Searching for: ' + query);  // You can replace this with actual search logic
        }
    }
});

// Smooth scroll to top
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector('.top');

    // Show/Hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add('show'); // Show button
        } else {
            scrollToTopButton.classList.remove('show'); // Hide button
        }
    });

    // Smooth scroll effect when button is clicked
    scrollToTopButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    });
});

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
