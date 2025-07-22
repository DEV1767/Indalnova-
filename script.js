window.onload = function () {
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
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, {
  threshold: 0.2,
});

const track = document.querySelector('.slide-track');
const buttons = document.querySelectorAll('.slide-btn span');
const dots = Array.from(buttons).slice(1, 4);
const prevBtn = document.querySelector('.slide-btn .prev');
const nextBtn = document.querySelector('.slide-btn .next');
let currentSlide = 0;

window.addEventListener("DOMContentLoaded", () => {
  // Slide logic
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

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
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

 
});


window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('product');
  const template = document.getElementById('product-template');

  if (!container || !template) {
    console.error("'product' container or 'product-template' not found.");
    return;
  }

  fetch('product.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then(products => {
      products.forEach(product => {
        const clone = template.cloneNode(true);
        clone.style.display = 'flex';
        clone.classList.remove('card-template');
        clone.removeAttribute('id');

        const img = clone.querySelector('.product-img');
        const weight = clone.querySelector('.product-weight');
        const offer = clone.querySelector('.product-offer');
        const flipkart = clone.querySelector('.flipkart-link');
        const meesho = clone.querySelector('.meesho-link');
        const nameEl = document.createElement("h3");
        const buyBtn = clone.querySelector(".Buy-btn");
        const backBtn = clone.querySelector(".backbtn");
        const cardWrapper = clone.querySelector(".cards");

        if (img && weight && offer && flipkart && meesho && nameEl && cardWrapper && buyBtn && backBtn) {
          img.src = product.image;
          img.alt = product.name;
          weight.textContent = `Weight: ${product.weight}`;
          offer.textContent = `Offer: ${product.offer}`;
          nameEl.textContent = product.name;
          clone.querySelector('.card-front').appendChild(nameEl);

          if ("flipkartLink" in product && product.flipkartLink && product.flipkartLink.trim() !== "") {
            flipkart.href = product.flipkartLink;
            flipkart.setAttribute("target", "_blank");
          } else {
            flipkart.href = "#";
            flipkart.addEventListener("click", (e) => {
              e.preventDefault();
              FlipkartButtonAlert();
            });
          }

          if ("meeshoLink" in product && product.meeshoLink && product.meeshoLink.trim() !== "") {
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
        }
      });
    })
    .catch(err => {
      console.error("Error loading product.json:", err);
    });

  const staticSections = document.querySelectorAll(".animate-on-scroll");
  staticSections.forEach(el => observer.observe(el));
});

const hamburg = document.getElementById("hamburg");
const cross = document.getElementById("cross");
const nav = document.querySelector(".nav-2");
const navLinks = document.querySelectorAll(".nav-2 span a");

if (hamburg && cross && nav) {
  hamburg.addEventListener("click", () => {
    hamburg.style.display = "none";
    nav.style.display = "flex";
  });

  cross.addEventListener("click", () => {
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
}

const icon1 = document.getElementsByClassName("icon1")[0];
const icon2 = document.getElementsByClassName("icon2")[0];
const icon3 = document.getElementsByClassName("icon3")[0];

icon1?.addEventListener("click", () => {
  window.open("https://www.instagram.com/indalnova/", "_blank");
});
icon2?.addEventListener("click", () => {
  window.location.href = "mailto:indalnovacompany@gmail.com";
});
icon3?.addEventListener("click", () => {
  window.open();
});

function FlipkartButtonAlert() {
  alert("This product is not launched yet on Flipkart.\nLaunching soon!\nStay tuned.");
}

function MeeshoButtonAlert() {
  alert("This product is not launched yet on Meesho.\nLaunching soon!\nStay tuned.");
}
