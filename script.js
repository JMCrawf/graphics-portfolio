const body = document.body;
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(dir1, dir2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate in
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in - Nav items
        navAnimation('out', 'in');
    } else {
        // animate out
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);

navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

// Bank Modal ----------------------------------------
let bankModal = document.getElementById("bank-modal");
let cap1 = document.getElementById("caption1");

function bankOpen(event){
  bankModal.style.display = "block";
  cap1.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function bankClose(){
  bankModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// DVD modal - SBS -----------------------------------
var sbsModal = document.getElementById("sbs-modal");
var cap2 = document.getElementById("caption2");

function sbsOpen(event){
  sbsModal.style.display = "block";
  cap2.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function sbsClose() { 
  sbsModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier1 modal -----------------------------------
var harrierOneModal = document.getElementById("harrier1-modal");
var cap3 = document.getElementById("caption3");

function harrierOneOpen(event){
  harrierOneModal.style.display = "block";
  cap3.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function harrierOneClose() { 
  harrierOneModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier2 modal -----------------------------------
var harrierTwoModal = document.getElementById("harrier2-modal");
var cap4 = document.getElementById("caption4");

function harrierTwoOpen(event){
  harrierTwoModal.style.display = "block";
  cap4.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function harrierTwoClose() { 
  harrierTwoModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier3 Compositing ------------------------------
var harrierThreeModal = document.getElementById("harrier3-modal");
var cap5 = document.getElementById("caption5");

function harrierThreeOpen(event){
  harrierThreeModal.style.display = "block";
  cap5.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function harrierThreeClose() { 
  harrierThreeModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Jeep ------------------------------
var jeepModal = document.getElementById("jeep-modal");
var cap6 = document.getElementById("caption6");

function jeepOpen(event){
  jeepModal.style.display = "block";
  cap6.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function jeepClose() { 
  jeepModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Sony ------------------------------
var sonyModal = document.getElementById("sony-modal");
var cap7 = document.getElementById("caption7");

function sonyOpen(event){
  sonyModal.style.display = "block";
  cap7.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function sonyClose() { 
  sonyModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// WRX ------------------------------
var wrxModal = document.getElementById("wrx-modal");
var cap8 = document.getElementById("caption8");

function wrxOpen(event){
  wrxModal.style.display = "block";
  cap8.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function wrxClose() { 
  wrxModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Site ------------------------------
var siteModal = document.getElementById("site-modal");
var cap9 = document.getElementById("caption9");

function siteDesignOpen(event){
  siteModal.style.display = "block";
  cap9.innerHTML = event.target.alt;
  body.classList.toggle('noscroll');
}

function siteDesignClose() { 
  siteModal.style.display = "none";
  body.classList.toggle('noscroll');
}