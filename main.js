document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".main-menu");
  const menuToggle = document.querySelector(".fa-bars");

  // Toggle Menu for Mobile View
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Optional: Close menu when a link is clicked
  document.querySelectorAll(".main-menu li a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  document.querySelectorAll(".main-menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form Validation
  document.querySelector("form.count").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector('input[name="first name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you for your message!");
      // You can add code here to send form data to the server
    }
  });
  // Interactive Buttons
  document.querySelector(".get").addEventListener("click", function () {
    alert("Thank you for getting in touch!");
  });
});
