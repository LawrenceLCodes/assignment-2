// Goal is to create a small pop-in or drop down navigation manu for smaller mobile devices.
// nav list items were hidden for smaller mobile devices to make the design more responsive for smartphones with smaller and lower resolution displays. 
// The user clicks or taps on the hamburger and then has access to anchor navigation tags for the site. This will serve as the basis for activation. Due to this an Event listener will be required below.

// Create variables
const mobileNavMenu = document.querySelector("nav");
const openNavMenu = document.getElementById("openMenu");
const closeNavMenu = document.getElementById("removeMenu");

// Event listener for toggling open nav menu click.
openNavMenu.addEventListener('click', function(event){
    console.log('We clicked on hamburger Menu');
    closeNavMenu.style.display = 'block';
    mobileNavMenu.style.display = 'block';
    openNavMenu.style.display = 'none';
});

// Event listener for toggling close nav menu click.
closeNavMenu.addEventListener('click', function (){
    openNavMenu.style.display = 'block';
    closeNavMenu.style.display = 'none';
    mobileNavMenu.style.display = 'none';
})




