// Get references to the buttons and the content container
const academicButton = document.getElementById('academicButton');
const contentWrapper = document.querySelector('.content-wrapper');
const homeButton = document.getElementById('homeButton');
const contentBackground2 = document.querySelector('.content-background2');

// Function to simulate click on the home button
function simulateHomeButtonClick() {
    // Hide the content-background2 by setting its display property to "none"
    contentBackground2.style.display = 'none';
    // Clear the content in the contentWrapper
    contentWrapper.innerHTML = '';

    // Set content for Home button click
    contentWrapper.innerHTML = `
        <div class="content home-content">
            <h2 class='custom-heading'>Come Chill</h2>
            <img src="giffy.gif" alt="Home Image" class="custom-image">
        </div>
    `;
}

// Call the function to simulate click on the home button when the page loads
window.addEventListener('load', simulateHomeButtonClick);

// Add click event listener to the HOME button
homeButton.addEventListener('click', function() {
    simulateHomeButtonClick(); // Call the function to simulate click on the home button
});

// Add click event listener to the academic button
academicButton.addEventListener('click', function() {
    // Set content for academic button click
    contentWrapper.innerHTML = `
        <div class="content academic-content">
            <h2 class='custom-heading'>Academic Information</h2>
            <div class="info">
                <strong class='custom-paragraph'>School Name:</strong> Polytechnic University of the Philippines<br>
                <strong class='custom-paragraph'>School Address and Contact Number:</strong> Anonas Street, Sta. Mesa, Manila | Contact: (02) 716-7832<br>
                <strong class='custom-paragraph'>Student Number:</strong> 2021-05888-MN-0<br>
                <strong class='custom-paragraph'>Course:</strong> Bachelor of Science in Computer Engineering<br>
                <strong class='custom-paragraph'>Student Name:</strong> John Robert P. Legaspi<br>
                <strong class='custom-paragraph'>Year:</strong> 3rd Year<br>
            </div>
            <img src="pup.jpg" alt="Image Description" class="custom-image">
        </div>
    `;
});

function displayPersonalContent() {
    // Clear the content in the contentWrapper
    contentWrapper.innerHTML = '';

    // Set content for personal button click
    contentWrapper.innerHTML = `
        <div class="content personal-content">
            <h2 class='custom-heading'>Personal Information</h2>
            <div class="info">
                <strong>Name:</strong> John Robert P. Legaspi<br>
                <strong>Nickname:</strong> Jan<br>
                <strong>Birth date:</strong> 03/12/2003<br>
                <strong>Birth place:</strong> Angono, Rizal<br>
                <strong>Age:</strong> 21<br>
                <strong>Place of Birth:</strong> Angono, Rizal<br>
                <strong>Address:</strong> 5237 Fahrenheit St. Palanan Makati City<br>
                <strong>Height:</strong> 164 cm<br>
                <strong>Phone:</strong> 09193549466<br>
            </div>
            <img src="1x1.png" alt="Image Description" class="custom-image">
        </div>
    `;
}

// Function to display family content
function displayFamilyContent() {
    // Clear the content in the contentWrapper
    contentWrapper.innerHTML = '';

    // Set content for family button click
    contentWrapper.innerHTML = `
        <div class="content family-content">
            <h2 class='custom-heading'>Family Information</h2>
            <div class="info">
                <strong>Father's Name:</strong> Roberto P. Legaspi<br>
                <strong>Occupation:</strong> Technician<br>
                <strong>Mother's Name:</strong> Marites P. Legaspi<br>
                <strong>Occupation:</strong> N/A<br>
                <strong>Brother's Name:</strong> Jazer Allen P. Legaspi<br>
                <strong>Sister's Name:</strong> N/A<br>
            </div>
            <img src="fam2.jpg" alt="Image Description" class="custom-image">
        </div>
    `;
}

// Function to display resume content
function displayResumeContent() {
    // Clear the content in the contentWrapper
    contentWrapper.innerHTML = '';

    // Set content for resume button click
    contentWrapper.innerHTML = `
        <div class="content resume-content">
            <h2 class='custom-heading'>Resume</h2>
            <div class="info">
            </div>
            <img src="resume.png" alt="Image Description" class="custom-image">
        </div>
    `;
}


personalButton.addEventListener('click', displayPersonalContent);
familyButton.addEventListener('click', displayFamilyContent);
resumeButton.addEventListener('click', displayResumeContent);