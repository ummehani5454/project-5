const logo = document.querySelector(".logo");
logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });

  logo.style.transform = "scale(1.2)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 200);
});

// ===== Smooth scroll for nav links =====
const navLink = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// ===== Highlight active nav link on scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    // Only add 'active' if we are not at the very top
    if (current && link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // Special case: if at top of page, make Home link white and remove active
  if (window.scrollY < 30) {
    navLinks.forEach(link => link.classList.remove("active"));
  }
});

    
//======see more button=====
const seeMoreBtn = document.querySelector('.btn');
seeMoreBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ===== Contact form submission alert =====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (firstName && email && message) {
    alert(`Thanks ${firstName}! Your message has been sent.`);
    contactForm.reset();
  } else {
    alert("Please fill out all required fields.");
  }
});