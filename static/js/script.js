// const navToggle = document.getElementById("nav_toggle");
// const listMenu = document.getElementById("list_menu");

// navToggle.addEventListener("click", () => {
//     listMenu.classList.toggle("show");

//     // change icon (hamburger ↔ close)
//     const icon = navToggle.querySelector("i");
//     icon.classList.toggle("bi-list");
//     icon.classList.toggle("bi-x");
// });

// // optional: close menu when user clicks a link
// document.querySelectorAll(".item-link").forEach((link) => {
//     link.addEventListener("click", () => {
//         listMenu.classList.remove("show");
//         const icon = navToggle.querySelector("i");
//         icon.classList.add("bi-list");
//         icon.classList.remove("bi-x");
//     });
// });

// /*===== REMOVE MENU MOBILE =====*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections = document.querySelectorAll('section[id]')

// window.addEventListener('scroll', scrollActive)

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         } else {
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }

// Initialize EmailJS
// static/js/script.js

   



// Contact Us
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  let form = e.target;

  let status = document.getElementById("status");

  let data = new FormData(form);

  try {
    let res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      status.style.color = "green";
      status.innerText = "Message sent successfully!";
      form.reset();
    } else {
      status.style.color = "red";
      status.innerText = "Failed to send message!";
    }
  } catch (error) {
    status.style.color = "red";
    status.innerText = "Something went wrong!";
  }
});
