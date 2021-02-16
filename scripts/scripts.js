// Goal is to create a small pop-in or drop down navigation manu for smaller mobile devices.
// nav list items were hidden for smaller mobile devices to make the design more responsive for smartphones with smaller and lower resolution displays. 
// The user clicks or taps on the hamburger and then has access to anchor navigation tags for the site. This will serve as the basis for activation. Due to this an Event listener will be required below.

// Create variables for navigation menu
const mobileNavMenu = document.getElementById("upperNavMenu");
const openNavMenu = document.getElementById("openMenu");
const closeNavMenu = document.getElementById("removeMenu");

// Event listener for toggling open nav menu click.
openNavMenu.addEventListener('click', function(){
    closeNavMenu.style.display = 'block';
    mobileNavMenu.style.display = 'block';
    openNavMenu.style.display = 'none';
});

// Event listener for toggling close nav menu click.
closeNavMenu.addEventListener('click', function (){
    openNavMenu.style.display = 'block';
    closeNavMenu.style.display = 'none';
    mobileNavMenu.style.display = 'none';
});


// This portion of JavaScript is to check and validate form submissions to ensure that information is entered before the form will be submitted.
// A function will be created to check for all 3 empty form inputs
// Function will be called when form button is submitted as per form action onsubmit included with HTML.
function emptyFormSpaces() {

    // If statement checks for user name form input to ensure that user has entered at least some information. If the value is equal to blank, hence quotation marks then border is highlighted red to indicate information MUST be entered.
    
    // return false is used to stop form from going ahead with the submit when the if statement condition is met. Otherwise form submit will go ahead. I was unsure whether to include an else statement...
    // NOTE: Return false was recommended from Stack Overflow users in regards to stopping an HTML form from submitting. URL for reference is located here: https://stackoverflow.com/questions/3384960/want-html-form-submit-to-do-nothing

    // I considered adding prompts or alerts however that would be a major annoyance and I want to avoid popups when possible since I dislike them and they lead to a very negative user experience!
    // Instead of alerts I decided to change the placeholder text to notify the user that the relevant information must be included for submit to occur. I figured this would be necessary since just having a form input borderColor change might be insufficient and it is less accessible.

    if (document.getElementById('userName').value == "") {
        document.getElementById('userName').style.borderColor = 'red';
        document.getElementById('userName').placeholder = "Enter your name...";
        return false;
    }
    // If statement to check for email address entry. If no value is entered underline will be highlighted red to indicate that a value MUST be entered.
    if (document.getElementById('userEmail').value == "") {
        document.getElementById('userEmail').style.borderColor = 'red';
        document.getElementById('userEmail').placeholder = "Enter your email address...";
        return false;
    }

    // Same as above however this is in regards to the comment box. Same condition and logic applies as per previous if statements.
    if (document.getElementById('commentBox').value == "") {
        document.getElementById('commentBox').style.borderColor = 'red';
        document.getElementById('commentBox').placeholder = "Please enter your comment or message.";
        return false;
    }

    // This is used to reset the form inputs to theri default value when submit is completed.
    if (document.getElementById('form1') != "") {
        document.getElementById('form1').reset();
    }

}





