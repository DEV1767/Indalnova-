const ham=document.getElementById("ham")
const cross=document.getElementById("cross")
const nav=document.querySelector(".nav-bar")
const nav2=document.querySelector(".nav-bar2")

 ham.addEventListener("click",()=>{
  ham.style.display="none"
  nav.style.display="none"
  nav2.style.display="flex"
  nav2.classList.add("show");
 })
 cross.addEventListener("click", () => {
  ham.style.display="flex"
  nav.style.display="flex"
  nav2.style.display="none"
  nav2.classList.remove("show");
});