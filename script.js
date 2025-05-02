// Button to change text
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    changeTextBtn.textContent = "You clicked me!";
    changeTextBtn.style.backgroundColor = "green";
});

// Image gallery functionality
const nextImageBtn = document.getElementById('nextImageBtn');
const galleryImage = document.getElementById('galleryImage');
const images = ['kong2.png', 'sabu.jpg', 'sabu1.jpg'];
let currentImageIndex = 0;

nextImageBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
});

// Form validation
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email.match(/\S+@\S+\.\S+/)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    alert("Form submitted successfully!");
});
