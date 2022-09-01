const secondaryNav = () => {
    // secondary header
    const mainContainer = document.querySelector("#content");
    const header = document.querySelector("header");

    const secondaryHeader = document.createElement("div");
    secondaryHeader.classList.add("secondary-nav");
    secondaryHeader.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;


    secondaryHeader.insertAdjacentElement("afterend", header);
};

export {secondaryNav};