const menuPage = () => {
    const container = document.querySelector(".hero-section");
    
    container.innerHTML = `
        <h1>Menu page</h1>
    `;
    
    container.appendChild(header);

}

export {menuPage};