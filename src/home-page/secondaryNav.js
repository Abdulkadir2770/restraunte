const secondaryNav = (() => {
    // secondary header
    const mainContainer = document.querySelector("#content");
    const header = document.querySelector("header");

    const secondaryHeader = document.createElement("div");
    secondaryHeader.classList.add("secondary-nav");
    secondaryHeader.innerHTML = `
        <div class="sn-item">
            <a href="#" id="home">Home</a>
        </div>
        <div class="sn-item">
            <a href="#" id="menu">Menu</a>
        </div>
        <div class="sn-item">
            <a href="#" id="contact">Contact us</a>
        </div>
    `;


    mainContainer.appendChild(secondaryHeader);
})();

export {secondaryNav};