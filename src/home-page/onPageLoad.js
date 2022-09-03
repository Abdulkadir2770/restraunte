
const onPageLoad = (() => {
    const mainContainer = document.querySelector("#content");

    // main header
    const header = document.createElement("header");
    header.innerHTML = `<h1>Binti's Takeout</h1> <img src='../dist/assets/img/logo.jpg' alt="logo img" id="logo"/>`;

    mainContainer.appendChild(header);

})();

export {onPageLoad};