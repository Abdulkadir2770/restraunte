const menuPage = () => {
    const container = document.querySelector(".hero-section");

    container.innerHTML = `
        <div id="menu-container-one">
            <img src="../dist/assets/img/somosa.jpg" alt="somosa image" class="menu-item"/>

            <img src="../dist/assets/img/hen.jpg" alt="somosa image" class="menu-item"/>
        </div>
        <div id="menu-container-two">
            <img src="../dist/assets/img/rice-beef.jpg" alt="somosa image" class="menu-item"/>

            <img src="../dist/assets/img/rice-chicken.jpg" alt="somosa image" class="menu-item"/>
        </div>
    `;

    const footer = document.querySelector(".footer");
    footer.remove();
    console.log(footer);
}

export {menuPage};