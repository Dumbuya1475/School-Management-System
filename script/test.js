document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.typing-animation p');
    const cursorElement = document.getElementById('cursor');
  
    const text = "Hello, I am Mohamed Super Dumbuya";
    let index = 0;
  
    function type() {
      textElement.textContent = text.slice(0, index + 1);
      index++;
  
      if (index === text.length) {
        cursorElement.style.display = 'none';
        clearInterval(typingInterval);
      }
    }
  
    const typingInterval = setInterval(type, 100);
  });
  