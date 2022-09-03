const secondaryNav = (() => {
    // secondary header
    const mainContainer = document.querySelector("#content");
    const header = document.querySelector("header");

    const secondaryHeader = document.createElement("div");
    secondaryHeader.classList.add("secondary-nav");
    secondaryHeader.innerHTML = `
        <div class="sn-item" id="home">Home</div>
        <div class="sn-item" id="menu">Menu</div>
        <div class="sn-item" id="contact">Contact</div>
    `;


    mainContainer.appendChild(secondaryHeader);
})();

export {secondaryNav};