
fetch('product.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product');

    products.forEach(product => {
      // outer wrapper
      const wrapper = document.createElement('div');
      wrapper.classList.add('product-card');

      // inner HTML
      wrapper.innerHTML =`
        <div class="cards">
          <div class="card-inner">
            <div class="card-front">
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <span class="view"><button>View more <i class="fa-solid fa-arrow-up-right-from-square"></i></button></span>
              <div class="btn1">
                <a href="${product.flipkartLink}" target="_blank">
                  <button id="flip">
                    <img src="assest/flipkart.png" alt="flipkart" />
                  </button>
                </a>
                <a href="${product.meeshoLink}" target="_blank">
                  <button id="mess">
                    <img src="assest/Meesho_logo.png" alt="meesho" />
                  </button>
                </a>
              </div>
            </div>
            <div class="card-back">
              <h3>Weight:${product.Weight}</h3>
              <p>Offer:${product.offer}</p>
              <button class="back">Back</button>
            </div>
          </div>
        </div>
      `;

      container.appendChild(wrapper);
      const cards=document.querySelectorAll(".cards")
 cards.forEach(card=>{
    const view=card.querySelector(".view")
    const backbtn=card.querySelector(".back")
    view.addEventListener("click",(e)=>{
      e.stopPropagation();
      card.classList.add("flipped");
    })
    backbtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        card.classList.remove("flipped")
    })
 })
    });
  });




const hamburg=document.getElementById("hamburg")
const cross=document.getElementById("cross")
const nav=document.getElementsByClassName("nav-2")[0]
const navLinks = document.querySelectorAll(".nav-2 span a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2,
});

const animatedElements = document.querySelectorAll(".animate-on-scroll");
animatedElements.forEach(el => observer.observe(el));
hamburg.addEventListener("click",()=>{
    hamburg.style.display="none"
    nav.style.display="flex"

})
cross.addEventListener("click",()=>{
    nav.style.display="none"
    hamburg.style.display="flex"
})
navLinks.forEach(link => {
  link.addEventListener("click", function () {
   
    navLinks.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
    setTimeout(() => {
      document.querySelector(".nav-2").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("hamburg").style.display = "flex";
    }, 100);
  });
});



 