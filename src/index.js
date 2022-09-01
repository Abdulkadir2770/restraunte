import {onPageLoad} from "./home-page/onPageLoad";
import { secondaryNav } from "./home-page/secondaryNav";
import { displayHomePage } from "./home-page/home";
import {footer} from "./home-page/footer";

// tab clicking section
const clickedTab = (() => {
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");

    menu.setAttribute("href", "./menu.js");
    about.setAttribute("href", "./about.js");
    contact.setAttribute("href", "./contact.js");
})();


