console.log("loaded index.js");
import initHomepage from "./homepage";

const contentDiv = document.querySelector("#content");
const navBtns = document.querySelectorAll(".nav-btn");
const homeBtn = navBtns.item(0);
const menuBtn = navBtns.item(1);
const contactBtn = navBtns.item(2);

let currentPage = "home";

initHomepage();

homeBtn.addEventListener("click", () => { loadPage("home")});
menuBtn.addEventListener("click", () => { loadPage("menu")} );
contactBtn.addEventListener("click", () => { loadPage("contact")});


function loadPage(page){
    if(page !== currentPage){
        clearContent();
        switch (page) {
            case 'home':
                console.log("Home");
                initHomepage();
                break;
            case 'menu':
                console.log("Menu");
                break;
            case 'contact':
                console.log("Contact");
                break;
        }
        currentPage = page;
    }
    else return;
}

function clearContent(){
    contentDiv.innerHTML="";
}

// function contentComponent() {
//     const element = document.createElement("div");
//     element.innerHTML = homepage;
//     return element;
// }

// 
// contentDiv.appendChild(contentComponent());
