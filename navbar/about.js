// Add glowing effect dynamically
function addGlowEffect() {
    const teamMembers = document.querySelectorAll('.team-member');
  
    teamMembers.forEach(member => {
      const glowElement = member.querySelector('.glow');
  
      // Randomize the glow intensity
      setInterval(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
  
        glowElement.style.background = `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.6) 0%, rgba(${r}, ${g}, ${b}, 0.3) 70%)`;
      }, 1000);
    });
}

// Add glow effects
addGlowEffect();

// Adding background animation to the whole webpage
function animateBackground() {
    let color1 = [0, 0, 255];  // Blue
    let color2 = [0, 0, 0];    // Black
    let color3 = [255, 255, 255]; // White
    let step = 0;
    let direction = 1;  // Controls whether the gradient is going from color1 -> color2 -> color3 or reverse

    // Function to smoothly transition colors
    setInterval(() => {
        // Interpolate between the colors
        let r, g, b;
        if (step <= 50) {
            // Transition from color1 (Blue) to color2 (Black)
            r = Math.floor(color1[0] + (color2[0] - color1[0]) * (step / 50));
            g = Math.floor(color1[1] + (color2[1] - color1[1]) * (step / 50));
            b = Math.floor(color1[2] + (color2[2] - color1[2]) * (step / 50));
        } else {
            // Transition from color2 (Black) to color3 (White)
            r = Math.floor(color2[0] + (color3[0] - color2[0]) * ((step - 50) / 50));
            g = Math.floor(color2[1] + (color3[1] - color2[1]) * ((step - 50) / 50));
            b = Math.floor(color2[2] + (color3[2] - color2[2]) * ((step - 50) / 50));
        }

        // Apply the smooth gradient transition to the entire webpage
        document.body.style.background = `linear-gradient(135deg, rgb(${r}, ${g}, ${b}), rgb(${255 - r}, ${255 - g}, ${255 - b}))`;

        // Increment step, and reverse direction when reaching the ends
        step += direction;
        if (step >= 100 || step <= 0) {
            direction *= -1; // Reverse direction at each transition point
        }
    }, 30);  // Update every 30ms to create smooth animation
}

// Start background animation
animateBackground();


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