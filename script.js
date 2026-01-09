



 // Initialize the typing animation
      const typingAnimationElement =
        document.getElementById("typing-animation");

      // Create an array of typing text
      const typingTexts = [
        "Software Engineer",
        "Frontend Developer",
        "React Developer",
        "JavaScript Developer",
        "TypeScript Developer"
      ];

      // Create a function to display the typing animation for a given text
      function playTypingAnimation(text) {
        // Loop through each character and add it to the element
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            typingAnimationElement.textContent += text[i];
          }, i * 200); // Increase the delay to slow down the typing animation
        }

        // Once the animation is complete, reset the text and start over
        setTimeout(() => {
          typingAnimationElement.textContent = "";
          playTypingAnimation(
            typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
          );
        }, text.length * 200);
      }

      // Start the typing animation loop
      playTypingAnimation(typingTexts[0]);





  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function animateBars() {
    const section = document.querySelector('.skill-mf');
    if (isInViewport(section)) {
      const bars = section.querySelectorAll('.progress-bar');
      bars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      });

      // Run only once
      window.removeEventListener('scroll', animateBars);
    }
  }

  // Run when scroll
  window.addEventListener('scroll', animateBars);

  // Also run once in case it's already in view
  animateBars();




  //  nav bar js 
  window.addEventListener("scroll", function () {
  const navbar = document.getElementById("Navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// js for the thems in protfolio


  const themeOptions = document.querySelectorAll('.theme-option');

  // Load saved theme on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--primary-color', savedColor);
    }
  });

  // Listen for click on any theme option
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const color = option.getAttribute('data-color');
      document.documentElement.style.setProperty('--primary-color', color);
      localStorage.setItem('themeColor', color);
    });
  });


  // the acchivment js 
  
  // Detect when the counters enter the viewport
function animateCounter(element, endValue, duration = 2000) {
  let startValue = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.textContent = Math.floor(progress * endValue);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = endValue;
    }
  }

  requestAnimationFrame(step);
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  // Change here: Check if element is even partially visible
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

const counters = document.querySelectorAll('.number');
const countersAnimated = new Set();

function checkAndStartCounters() {
  counters.forEach(counter => {
    if (!countersAnimated.has(counter) && isInViewport(counter)) {
      const endValue = parseInt(counter.getAttribute('data-number'), 10);
      if (!isNaN(endValue)) {
        animateCounter(counter, endValue);
        countersAnimated.add(counter);
      }
    }
  });
}

window.addEventListener('scroll', checkAndStartCounters);
window.addEventListener('load', checkAndStartCounters);
window.addEventListener('resize', checkAndStartCounters);


// for anmation 

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Delay a bit for smooth effect (optional)
  setTimeout(() => {
    hero.classList.add("show");
  }, 300);
});


// box come form left write 
const leftBox = document.querySelector(".left-box");
const rightBox = document.querySelector(".right-box");

window.addEventListener("scroll", checkBoxes);
checkBoxes(); // Run on load in case boxes already in view

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.7; // trigger when 80% of viewport height

  const leftBoxTop = leftBox.getBoundingClientRect().top;
  const rightBoxTop = rightBox.getBoundingClientRect().top;

  if (leftBoxTop < triggerBottom) {
    leftBox.classList.add("show");
  } else {
    leftBox.classList.remove("show");
  }

  if (rightBoxTop < triggerBottom) {
    rightBox.classList.add("show");
  } else {
    rightBox.classList.remove("show");
  }
}


// Scroll Progress Indicator
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById('scroll-progress');
  progressBar.style.width = scrollPercent + '%';
});


// fade in animation
const fadeSlides = document.querySelectorAll('.fade-slide');

function fadeSlideOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  fadeSlides.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', fadeSlideOnScroll);
window.addEventListener('load', fadeSlideOnScroll);

// cards come from left right in resume sec
const leftBoxes = document.querySelectorAll('.left-box-r');
const rightBoxes = document.querySelectorAll('.right-box-r');

function animateBoxesOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  leftBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show-r');
    } else {
      box.classList.remove('show-r');
    }
  });

  rightBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show-r');
    } else {
      box.classList.remove('show-r');
    }
  });
}

window.addEventListener('scroll', animateBoxesOnScroll);
window.addEventListener('load', animateBoxesOnScroll);

