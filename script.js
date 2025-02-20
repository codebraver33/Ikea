// Toggle Navbar for Mobile
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
// Scroll to the Welcome Section
function scrollToWelcome() {
    document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
}
// Cart Counter
let cartCount = JSON.parse(localStorage.getItem("cart"))?.length || 0;
document.getElementById("cart-count").innerText = cartCount;

let selectedRating = 0;
// Function to highlight the stars based on the rating
function rate(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.stars i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
            star.classList.add('hover');
        } else {
            star.classList.remove('selected');
            star.classList.remove('hover');
        }
    });
}
// Function to submit the rating
function submitRating() {
    if (selectedRating === 0) {
        alert("Please select a rating before submitting.");
    } else {
        alert(`Thank you for your rating of ${selectedRating} stars!`);
        // Reset the rating after submission
        selectedRating = 0;
        const stars = document.querySelectorAll('.stars i');
        stars.forEach(star => {
            star.classList.remove('selected');
            star.classList.remove('hover');
        });
    }
}

let messages = [
    "IKEA Restaurant has the best meals at great prices!",
    "I love the variety of dishes available at IKEA Restaurant.",
    "IKEA Restaurant's customer service is always friendly and helpful.",
    "Dining at IKEA Restaurant is always a delightful experience.",
    "I find all my favorite Swedish dishes in one place. Great job, IKEA!",
    "IKEA’s self-service restaurant is so convenient and fast.",
    "The quality of IKEA’s food is always top-notch.",
    "I always enjoy delicious meals when dining at IKEA Restaurant.",
    "IKEA Restaurant has everything I need for a tasty, satisfying meal.",
    "I trust IKEA Restaurant for fresh, delicious food every time I visit."
];
let currentMessageIndex = 0;
function displayNextMessage() {
    const messageContainer = document.getElementById("message-container");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message");
    newMessage.textContent = messages[currentMessageIndex];
    messageContainer.appendChild(newMessage);
    // Fade in the new message
    setTimeout(() => {
        newMessage.style.opacity = 1;
    }, 10);
    // Reset opacity after the message is displayed for 3 seconds
    setTimeout(() => {
        newMessage.style.opacity = 0;
    }, 3000);
    // Move to the next message
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
// Start displaying messages every 4 seconds
setInterval(displayNextMessage, 4000);
// Initially display the first message
displayNextMessage();



//Items js in the page

//contact js in page

//cart js also in its page
