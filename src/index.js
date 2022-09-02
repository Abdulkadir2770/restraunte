import {onPageLoad} from "./home-page/onPageLoad";
import { secondaryNav } from "./home-page/secondaryNav";
import { displayHomePage } from "./home-page/home";
import {footer} from "./home-page/footer";

// tab clicking section
const clickedTab = (() => {
    const menu = document.querySelector("#menu");
    const home = document.querySelector("#home");
    const contact = document.querySelector("#contact");

    menu.setAttribute("href", "./menu.js");
    home.setAttribute("href", "https://www.google.com");
    contact.setAttribute("href", "./contact.js");
})();


