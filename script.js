document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });

// Show the loading spinner when the page starts loading
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none"; // Hide the loading spinner once the page is fully loaded
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Here you can handle the form data, e.g., send it to a server
    const formData = new FormData(this);

    // Example: Log the form data to the console
    console.log("Form submitted:", Object.fromEntries(formData));

    // Optionally, show a success message or reset the form
    alert("Your message has been sent!");
    this.reset(); // Reset the form fields
  });

// Smooth scrolling for anchor links with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight; // Get the navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight; // Calculate the target position

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Toggle mobile navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the active class
});

// Fungsi untuk menutup menu saat mengklik di luar navbar
document.addEventListener("click", (event) => {
  // Cek apakah klik terjadi di luar hamburger dan navbar
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active"); // Hapus kelas 'active' untuk menutup menu
  }
});

document.getElementById("background-music").volume = 0.5; // Set volume to 50%
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");

musicToggle.addEventListener("click", function () {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.textContent = "Pause Music"; // Ubah teks tombol
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "Play Music"; // Ubah teks tombol
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userLanguage = navigator.language || navigator.userLanguage; // Mendapatkan bahasa pengguna
  const languageCode = userLanguage.startsWith("id") ? "id" : "en"; // Cek apakah bahasa Indonesia

  updateLanguage(languageCode); // Memperbarui bahasa berdasarkan kode

  function updateLanguage(lang) {
    const elements = document.querySelectorAll(
      "[data-lang-id], [data-lang-en]"
    );
    elements.forEach((element) => {
      element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
  }
});
