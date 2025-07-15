const hamburg=document.getElementById("hamburg")
const cross=document.getElementById("cross")
const nav=document.getElementsByClassName("nav-2")[0]

hamburg.addEventListener("click",()=>{
    hamburg.style.display="none"
    cross.style.display="flex"
    nav.style.display="flex"

})
cross.addEventListener("click",()=>{
    cross.style.display="none"
    hamburg.style.display="flex"
    nav.style.display="none"
})
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