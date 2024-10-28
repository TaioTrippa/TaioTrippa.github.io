// JavaScript to handle the fun facts typing effect
document.addEventListener("DOMContentLoaded", () => {
    const facts = document.querySelectorAll('.fun-fact');
    facts.forEach((fact, index) => {
        fact.style.animationDelay = `${index * 4}s`; // Stagger each fact's appearance (increase delay for visibility)
        fact.classList.add('typing'); // Add the typing class for animation
    });
});

// Function to play an episode
function playEpisode(source) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = source;
    audio.load();
    audio.play();
}

// Event listener to play the episode when clicking on the episode card
document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('click', function () {
        const audioSrc = this.getAttribute('data-audio');
        playEpisode(audioSrc);
    });
});

// Scroll animation for cards
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.episode-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
});

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Optional: Hover sound effect
const hoverSound = new Audio('hover-sound.mp3');
document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        hoverSound.play();
    });
});

document.addEventListener("scroll", function() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            card.classList.add('is-visible');
        }
    });
});


// JavaScript for Games and Quizzes Section

// JavaScript to handle particles and doodles

function generateParticles() {
    const particleContainer = document.querySelector('.particles-container');
    const totalParticles = 50;
  
    for (let i = 0; i < totalParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particleContainer.appendChild(particle);
    }
  }
  
  function generateDoodles() {
    const doodleContainer = document.querySelector('.particles-container');
    const doodle = document.createElement('div');
    doodle.classList.add('doodle');
    doodle.style.top = `${Math.random() * 100}%`;
    doodle.style.left = `${Math.random() * 100}%`;
    doodleContainer.appendChild(doodle);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    generateParticles();
    generateDoodles();
  });
  



  document.addEventListener("DOMContentLoaded", () => {
    // Stats counter animation
    const stats = [
        { id: "members-count", end: 1800 },
        { id: "chats-count", end: 320 },
        { id: "events-count", end: 12 }
    ];

    stats.forEach(stat => animateCounter(stat.id, stat.end, 2000));

    function animateCounter(id, end, duration) {
        const el = document.getElementById(id);
        let start = 0;
        const step = (end / duration) * 20;

        function updateCounter() {
            start += step;
            el.textContent = Math.floor(start);
            if (start < end) requestAnimationFrame(updateCounter);
            else el.textContent = end;
        }
        requestAnimationFrame(updateCounter);
    }

    // Typing indicator in the chat
    const chatFeed = document.getElementById('chat-feed');
    const typingIndicator = document.getElementById('typing-indicator');
    const dummyMessages = [
        "Welcome to the community!",
        "Just learned some new coding tricks!",
        "Anyone available for a quick Q&A?",
        "Check out our latest post on AI trends!",
        "Who’s attending the tech meetup tomorrow?"
    ];

    let messageIndex = 0;
    function addChatMessage() {
        const newMessage = document.createElement('li');
        newMessage.textContent = dummyMessages[messageIndex];
        chatFeed.appendChild(newMessage);
        messageIndex = (messageIndex + 1) % dummyMessages.length;
        chatFeed.scrollTop = chatFeed.scrollHeight;

        typingIndicator.style.opacity = '1';
        setTimeout(() => typingIndicator.style.opacity = '0', 1000);
    }

    setInterval(addChatMessage, 3000);

    // Testimonial slider rotation
    const testimonials = document.querySelectorAll('.testimonial');
    let testimonialIndex = 0;

    function cycleTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            if (index === testimonialIndex) testimonial.classList.add('active');
        });
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    }

    setInterval(cycleTestimonials, 5000);
});
 
// JavaScript for smooth carousel effect in testimonials
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonial = 0;

    function switchTestimonial() {
        // Hide current testimonial
        testimonials[currentTestimonial].classList.remove("active");

        // Move to next testimonial, or loop back to start
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;

        // Show the next testimonial
        testimonials[currentTestimonial].classList.add("active");
    }

    // Set interval for smooth switching
    setInterval(switchTestimonial, 4000); // Switch every 4 seconds
});

// JavaScript for confetti, countdown, and personalized greeting
document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem("username") || "Guest";
    document.getElementById("username").textContent = username;

    function triggerConfetti() {
        // Code for confetti animation (using a library like confetti.js or custom code)
        console.log("Confetti animation triggered!");
    }

    // Countdown Timer
    document.querySelectorAll('.countdown').forEach(item => {
        const eventDate = new Date(item.dataset.date);
        setInterval(() => {
            const now = new Date();
            const timeLeft = eventDate - now;
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            item.textContent = `${days} days remaining`;
        }, 1000);
    });
});



// Toggle Light/Dark Mode
document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Parallax Effect for Background
window.addEventListener('scroll', function() {
    const background = document.querySelector('.footer-background');
    let scrollPos = window.scrollY;
    background.style.transform = `translateY(${scrollPos * 0.2}px)`;
});

document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggles the 'active' class
}


// JavaScript for scroll effects
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            // If section is in the viewport, add 'visible' class
            if (sectionTop < viewportHeight * 0.8) { // Trigger before fully in view
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Remove class if out of view
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case sections are already in view
});

