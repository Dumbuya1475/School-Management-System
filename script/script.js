// ==============================
// Text effect
// ==============================
document.addEventListener('DOMContentLoaded', function () {
    const h1Element = document.querySelector('.typing-animation:nth-of-type(1)');
    const h6Element = document.querySelector('.typing-animation:nth-of-type(2)');
    const cursorElement = document.getElementById('cursor');

    const texts = [
        "Mohamed S. Dumbuya"
        // "Hello!! l'm\n Mohamed  Super Dumbuya",
   ]

    let textIndex = 0;
    let letterIndex = 0;
    let currentText = texts[textIndex];

    function type() {
        if (letterIndex < currentText.length) {
            if (textIndex === 0) {
                h1Element.textContent += currentText[letterIndex];
            } else if (textIndex === 1) {
                h6Element.textContent += currentText[letterIndex];
            }
            letterIndex++;
        } else {
            // cursorElement.style.display = 'none';
            // cursorElement.style.background = 'red';
            clearInterval(typingInterval);
        }
    }

    let typingInterval = setInterval(type, 100);
});

// ====================smooth scroll======================
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duration in milliseconds

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(step);
}


// ===============================nav panel===========================
  
function toggleNavPanel() {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('nav-open');
}