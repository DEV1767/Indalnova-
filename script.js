// Show welcome popup after delay (not instantly on load)
// Instead of onload, show popup on first scroll
window.addEventListener("scroll", () => {
  Swal.fire({
    title: "🌿 Welcome to Indalnova!",
    text: "Discover our Facewash – 100% Natural, Refreshing & Pure!",
    icon: "success",
    confirmButtonText: "Explore Now !!",
    backdrop: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    timer: 6000,
    timerProgressBar: false,
  });
}, { once: true });


// Reusable observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } 
  });
}, { threshold: 0.2 });

// Product lazy-load observer
const productObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadProducts(); // Lazy load
      obs.unobserve(entry.target); // Only load once
    }
  });
}, { threshold: 0.1 });

// Load product cards from product.json
function loadProducts() {
  const container = document.getElementById('product');
  const template = document.getElementById('product-template');
  if (!container || !template) return;

  fetch('product.json')
    .then(res => res.json())
    .then(products => {
      products.forEach(product => {
        const clone = template.cloneNode(true);
        clone.style.display = 'flex';
        clone.classList.remove('card-template');
        clone.removeAttribute('id');

        const img = clone.querySelector('.product-img');
        const weight = clone.querySelector('.product-weight');
        const offer = clone.querySelector('.product-offer');
        const nameEl = document.createElement("h3");
        const buyBtn = clone.querySelector(".Buy-btn");
        const backBtn = clone.querySelector(".backbtn");
        const meesho = clone.querySelector('.meesho-link');
        const cardWrapper = clone.querySelector(".cards");

        img.src = product.image;
        img.alt = product.name;
        weight.textContent = `Weight: ${product.weight}`;
        offer.textContent = `Offer: ${product.offer}`;
        nameEl.textContent = product.name;
        clone.querySelector('.card-front').appendChild(nameEl);

        if (product.meeshoLink && product.meeshoLink.trim() !== "") {
          meesho.href = product.meeshoLink;
          meesho.setAttribute("target", "_blank");
        } else {
          meesho.href = "#";
          meesho.addEventListener("click", (e) => {
            e.preventDefault();
            MeeshoButtonAlert();
          });
        }

        buyBtn.addEventListener("click", () => {
          cardWrapper.classList.add("flipped");
          buyBtn.style.display = "none";
          backBtn.style.display = "flex";
        });

        backBtn.addEventListener("click", () => {
          cardWrapper.classList.remove("flipped");
          buyBtn.style.display = "block";
          backBtn.style.display = "none";
        });

        container.appendChild(clone);
        observer.observe(clone);
      });
    })
    .catch(err => console.error("Error loading product.json:", err));
}

// Trigger product loading when visible
document.addEventListener("DOMContentLoaded", () => {
  const productSection = document.getElementById('product');
  if (productSection) productObserver.observe(productSection);

  // Animate static sections on scroll
  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

  // Slider Setup
  const track = document.querySelector('.slide-track');
  const buttons = document.querySelectorAll('.slide-btn span');
  const dots = Array.from(buttons).slice(1, 4);
  const prevBtn = document.querySelector('.slide-btn .prev');
  const nextBtn = document.querySelector('.slide-btn .next');
  let currentSlide = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * 100}vw)`;
    dots.forEach((dot, index) => {
      const icon = dot.querySelector('i');
      icon.classList.toggle('fa-solid', index === currentSlide);
      icon.classList.toggle('fa-regular', index !== currentSlide);
    });
  }

  nextBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlide();
  });

  prevBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    updateSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlide();
    });
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlide();
  }, 5000);

  updateSlide();

  // Navigation Toggle
  const hamburg = document.getElementById("hamburg");
  const cross = document.getElementById("cross");
  const nav = document.querySelector(".nav-2");
  const navLinks = document.querySelectorAll(".nav-2 span a");

  hamburg?.addEventListener("click", () => {
    hamburg.style.display = "none";
    nav.style.display = "flex";
  });

  cross?.addEventListener("click", () => {
    nav.style.display = "none";
    hamburg.style.display = "flex";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(el => el.classList.remove("active"));
      this.classList.add("active");
      setTimeout(() => {
        nav.style.display = "none";
        cross.style.display = "none";
        hamburg.style.display = "flex";
      }, 100);
    });
  });

  // Footer Icons
  const icon1 = document.querySelector(".icon1");
  const icon2 = document.querySelectorAll(".icon2")[0];
  const icon3 = document.querySelectorAll(".icon2")[1];

  icon1?.addEventListener("click", () => {
    window.open("https://www.instagram.com/indalnova/", "_blank");
  });

  icon2?.addEventListener("click", () => {
    window.location.href = "mailto:indalnovacompany@gmail.com";
  });

  icon3?.addEventListener("", () => {
    window.open("", "");
  });
});

// Alert for unavailable product
function MeeshoButtonAlert() {
  alert("Almost There! We're Launching in under 48 Hours. Be Ready! - Team INDALNOVA!");
}
