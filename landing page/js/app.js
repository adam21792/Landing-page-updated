// Select sections and navigation bar
const sections = document.querySelectorAll("main section");
const navbar = document.getElementById("navbar");

// Dynamically build the navigation menu
sections.forEach((section) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="#${section.id}" class="nav-link">${section.dataset.nav}</a>`;
  navbar.appendChild(li);
});

// Add smooth scrolling and highlight active section on click
navbar.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Smooth scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update active navbar link
    updateActiveNav(e.target);
  }
});

// Highlight active section and navbar link while scrolling
window.addEventListener("scroll", () => {
  let activeFound = false;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const navLink = document.querySelector(`a[href="#${section.id}"]`);

    if (!activeFound && rect.top >= -100 && rect.top <= window.innerHeight / 2) {
      // Highlight the active section and corresponding nav link
      sections.forEach((sec) => sec.classList.remove("active"));
      section.classList.add("active");

      updateActiveNav(navLink);
      activeFound = true;
    } else {
      section.classList.remove("active");
    }
  });
});

// Update active navbar link
function updateActiveNav(link) {
  const links = navbar.querySelectorAll(".nav-link");
  links.forEach((l) => l.classList.remove("active"));
  link.classList.add("active");
}

// Toggle mobile navigation menu
document.getElementById("mobileToggle").addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Scroll to top functionality
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
