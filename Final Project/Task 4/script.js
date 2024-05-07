window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var headerOpacity = 1 - (scrollPosition / 200); // Adjust the division factor to control the fading speed
    
    // Limit the minimum opacity to 0
    header.style.opacity = headerOpacity < 0 ? 0 : headerOpacity;

    var footer = document.querySelector('.footer');
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;

    // Calculate the distance from the bottom of the page
    var distanceFromBottom = bodyHeight - (scrollPosition + windowHeight);

    // Show or hide the footer based on scroll position
    footer.style.opacity = distanceFromBottom < 50 ? 1 : 0;
});

// Get the modals
var modal1 = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get all sets of custom buttons
var customButtons1 = document.querySelectorAll(".custom-button");
var customButtons2 = document.querySelectorAll(".custom-button2");
var customButtons3 = document.querySelectorAll(".custom-button3");
var customButtons4 = document.querySelectorAll(".custom-button4");
var customButtons5 = document.querySelectorAll(".custom-button5");
var customButtons6 = document.querySelectorAll(".custom-button6");

// Get the <span> elements that close the modals
var span1 = document.querySelector("#myModal .close");
var span2 = document.querySelector("#myModal2 .close");
var span3 = document.querySelector("#myModal3 .close");
var span4 = document.querySelector("#myModal4 .close");
var span5 = document.querySelector("#myModal5 .close");
var span6 = document.querySelector("#myModal6 .close");

// Function to open the modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Add click event listeners to custom buttons to open the modals
customButtons1.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal1);
    });
});

customButtons2.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal2);
    });
});

customButtons3.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal3);
    });
});

customButtons4.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal4);
    });
});

customButtons5.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal5);
    });
});

customButtons6.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(modal6);
    });
});

// When the user clicks on <span> (x) or outside of the modals, close the modals
window.addEventListener('click', function(event) {
    if (event.target == modal1 || event.target == span1) {
        closeModal(modal1);
    }
    if (event.target == modal2 || event.target == span2) {
        closeModal(modal2);
    }
    if (event.target == modal3 || event.target == span3) {
        closeModal(modal3);
    }
    if (event.target == modal4 || event.target == span4) {
        closeModal(modal4);
    }
    if (event.target == modal5 || event.target == span5) {
        closeModal(modal5);
    }
    if (event.target == modal6 || event.target == span6) {
        closeModal(modal6);
    }
});
