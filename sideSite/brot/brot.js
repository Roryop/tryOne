let site = document.getElementById("pageContainer");

let bar = document.getElementById("navOverview");
let navBar = document.getElementsByClassName("linkOverview")[0];
let modeDiv = document.getElementById("modeDiv");
let modeBtnSelta = document.getElementById("modeBtnSelta");
let navLinks = document.getElementsByClassName("navLink");
let navChildren = navBar.children;

let sectionDiv2Main = document.getElementById("section2Main");
let pictureSection2DivMain = document.getElementById("pictureSection2Main");
let h2Main = document.getElementById("h2Main");
let sideImg1Main = document.getElementById("sideImg1Main");

   //nav defining
   let windowLength = 1;
   let navChildrenAmount = navChildren.length + 1;
   let navDivLength = 2;
   //for push
       //nav resize
setInterval(function() {
    windowLength = window.innerWidth;
    navDivLength = windowLength / navChildrenAmount;
    for (i = 0; i < navChildrenAmount - 1; i++) {
       let linkCount = i+1;
       let link = document.getElementById("navLink"+linkCount);
       link.style.width = navDivLength+"px";
   }
   modeDiv.style.width = navDivLength+"px";
},100);

  
modeBtnSelta.addEventListener("click", function() {
    document.documentElement.classList.toggle("darkMode");
    pictureSection2DivMain.classList.toggle("darkMode");
})