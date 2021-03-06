const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
let aplastoHamburguer = false;
var prevScrollpos = window.pageYOffset;

// Para el menu hamburguesa
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  aplastoHamburguer= !aplastoHamburguer;
  console.log(aplastoHamburguer)
});
document.querySelectorAll(".nav-link").forEach((n) =>

  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    aplastoHamburguer= !aplastoHamburguer;
  })
);

// Para que no se muestre el navbar cuando baja
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    console.log("sube")
    document.getElementById("navbar").style.top = "0";
    
  }
  else if(aplastoHamburguer && (prevScrollpos < currentScrollPos )){ //esta bajando
      document.getElementById("navbar").style.top = "0";
      console.log("baja y aplasto")
  } 
  else {
    document.getElementById("navbar").style.top = "-80px";
    console.log("baja")
  }
  prevScrollpos = currentScrollPos;
};
//fade effect
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");

    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);