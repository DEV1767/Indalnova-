const hamburg=document.getElementById("hamburg")
const cross=document.getElementById("cross")
const nav=document.getElementsByClassName("nav-2")[0]
const navLinks = document.querySelectorAll(".nav-2 span a");

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
    // Remove "active" from all links
    navLinks.forEach(el => el.classList.remove("active"));

    // Add "active" to the clicked link
    this.classList.add("active");

    // Close mobile menu after 200ms
    setTimeout(() => {
      document.querySelector(".nav-2").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("hamburg").style.display = "flex";
    }, 200);
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