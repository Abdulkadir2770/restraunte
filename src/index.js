import {onPageLoad} from "./home-page/onPageLoad";
import { secondaryNav } from "./home-page/secondaryNav";
import { displayHomePage } from "./home-page/home";
import {footer} from "./home-page/footer";

// tab clicking section
const clickedTab = (() => {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    home.setAttribute("href", "https://www.google.com");
    menu.setAttribute("href", "./menu.js");
    contact.setAttribute("href", "./contact.js");

    // // changes the color of the active tab
    // const snNavbar = document.querySelector(".secondary-nav");
    // snNavbar.addEventListener("click", (current) => {
    //     current.target.style.cssText = "background-color: black; color: white";
    //     console.log(current.target.children.);
    // });
})();


