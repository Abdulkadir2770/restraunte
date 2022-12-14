import {onPageLoad} from "./home-page/onPageLoad";
import { secondaryNav } from "./home-page/secondaryNav";
import { homePage } from "./home-page/home";
import {footer} from "./home-page/footer";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

// tab clicking section
const tabNavigation = (() => {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    home.addEventListener("click", () => {
        home.classList.add("active");
        menu.classList.remove("active");
        contact.classList.remove("active");

        setTimeout(window.location.reload(), 1000);

        alert("Home page will appear in a second. Thank you!!!");
        
    });

    menu.addEventListener("click", () => {
        menu.classList.add("active");
        home.classList.remove("active");
        contact.classList.remove("active");

        menuPage();
    });

    contact.addEventListener("click", () => {
        contact.classList.add("active");
        home.classList.remove("active");
        menu.classList.remove("active");

        contactPage();
    });
})();

