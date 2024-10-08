/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- Download CV  FUNCTION ----- */

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/AryanSharma_Resume.pdf'; // Use the relative path
  link.download = 'AryanSharma_Resume.pdf';
  link.click();
}

document.getElementById('download-cv-btn').addEventListener('click', downloadCV);
document.getElementById('download-cv-btn-2').addEventListener('click', downloadCV);

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


// /* ----- TYPING EFFECT ----- */
//  var typingEffect = new Typed(".typedText",{
//     strings : ["Data Manage","Youtuber","Developer"],
//     loop : true,
//     typeSpeed : 100, 
//     backSpeed : 80,
//     backDelay : 2000
//  })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// Email initialization
(function() {
  emailjs.init("9mg3dYY7PXR3SlPp9"); // Replace 'YOUR_PUBLIC_KEY' with your actual Public Key from EmailJS
})();

// Function to send email
function sendEmail() {
  var templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  emailjs.send('service_h5e11o3', 'template_y33dos9', templateParams, 'YOUR_USER_ID')
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          console.error('FAILED...', error);
      });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const myNavMenu = document.getElementById('myNavMenu');

  menuToggle.addEventListener('click', () => {
      myNavMenu.classList.toggle('active');
  });

  const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
          header.classList.add('scroll-header');
      } else {
          header.classList.remove('scroll-header');
      }
  };

  window.addEventListener('scroll', handleScroll);
});
