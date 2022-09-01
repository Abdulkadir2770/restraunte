const secondaryNav = (() => {
    // secondary header
    const mainContainer = document.querySelector("#content");
    const header = document.querySelector("header");

    const secondaryHeader = document.createElement("div");
    secondaryHeader.classList.add("secondary-nav");
    secondaryHeader.innerHTML = `
        <div class="sn-item">Menu</div>
        <div class="sn-item">About</div>
        <div class="sn-item">Contact</div>
    `;


    mainContainer.appendChild(secondaryHeader);
})();

export {secondaryNav};