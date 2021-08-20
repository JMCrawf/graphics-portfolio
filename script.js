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


// Modal code - fix repetition!

// Bank modal --------------------------------------
var bank_modal = document.getElementById("bank-modal");
var bankImg = document.getElementById("bank-icon");
var captionText1 = document.getElementById("caption1");
var span = document.getElementsByClassName("close")[0];

bankImg.onclick = function(){
  bank_modal.style.display = "block";
  captionText1.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  bank_modal.style.display = "none";
  body.classList.toggle('noscroll');
}

// DVD modal - SBS -----------------------------------
var sbsModal = document.getElementById("sbs-modal");
var sbsImg = document.getElementById("sbs-icon");
var captionText2 = document.getElementById("caption2");
var span = document.getElementsByClassName("close")[1];

sbsImg.onclick = function(){
  sbsModal.style.display = "block";
  captionText2.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  sbsModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier1 modal -----------------------------------
var harrier1Modal = document.getElementById("harrier1-modal");
var harrier1Img = document.getElementById("harrier1-icon");
var captionText3 = document.getElementById("caption3");
var span = document.getElementsByClassName("close")[2];

harrier1Img.onclick = function(){
  harrier1Modal.style.display = "block";
  captionText3.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  harrier1Modal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier2 modal -----------------------------------
var harrier2Modal = document.getElementById("harrier2-modal");
var harrier2Img = document.getElementById("harrier2-icon");
var captionText4 = document.getElementById("caption4");
var span = document.getElementsByClassName("close")[3];

harrier2Img.onclick = function(){
  harrier2Modal.style.display = "block";
  captionText4.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  harrier2Modal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Harrier3 Compositing ------------------------------
var harrier3Modal = document.getElementById("harrier3-modal");
var harrier3Img = document.getElementById("harrier3-icon");
var captionText5 = document.getElementById("caption5");
var span = document.getElementsByClassName("close")[5];

harrier3Img.onclick = function(){
  harrier3Modal.style.display = "block";
  captionText5.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  harrier3Modal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Jeep ------------------------------
var jeepModal = document.getElementById("jeep-modal");
var jeepImg = document.getElementById("jeep-icon");
var captionText6 = document.getElementById("caption6");
var span = document.getElementsByClassName("close")[6];

jeepImg.onclick = function(){
  jeepModal.style.display = "block";
  captionText6.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  jeepModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Sony ------------------------------
var sonyModal = document.getElementById("sony-modal");
var sonyImg = document.getElementById("sony-icon");
var captionText7 = document.getElementById("caption7");
var span = document.getElementsByClassName("close")[7];

sonyImg.onclick = function(){
  sonyModal.style.display = "block";
  captionText7.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  sonyModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// WRX ------------------------------
var wrxModal = document.getElementById("wrx-modal");
var wrxImg = document.getElementById("wrx-icon");
var captionText8 = document.getElementById("caption8");
var span = document.getElementsByClassName("close")[8];

wrxImg.onclick = function(){
  wrxModal.style.display = "block";
  captionText8.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  wrxModal.style.display = "none";
  body.classList.toggle('noscroll');
}

// Site ------------------------------
var siteModal = document.getElementById("site-modal");
var siteImg = document.getElementById("site-icon");
var captionText9 = document.getElementById("caption9");
var span = document.getElementsByClassName("close")[9];

siteImg.onclick = function(){
  siteModal.style.display = "block";
  captionText9.innerHTML = this.alt;
  body.classList.toggle('noscroll');
}

span.onclick = function() { 
  siteModal.style.display = "none";
  body.classList.toggle('noscroll');
}