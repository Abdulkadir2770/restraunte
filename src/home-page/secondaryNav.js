const secondaryNav = (() => {
    // secondary header
    const mainContainer = document.querySelector("#content");
    const header = document.querySelector("header");

    const secondaryHeader = document.createElement("div");
    secondaryHeader.classList.add("secondary-nav");
    secondaryHeader.innerHTML = `
        <div class="sn-item">
            <a href="#">Menu</a>
        </div>
        <div class="sn-item">
            <a href="#">About</a>
        </div>
        <div class="sn-item">
            <a href="#">Contact</a>
        </div>
    `;


    mainContainer.appendChild(secondaryHeader);
})();

export {secondaryNav};