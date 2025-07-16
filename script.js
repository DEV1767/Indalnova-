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
 