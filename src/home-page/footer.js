const footer = (() => {
    const content = document.querySelector("#content");

    const ft = document.createElement("div");
    ft.classList.add("footer");
    ft.innerHTML = `<h3>Created by Amadi Abdulkadir</h3>`;
    
    content.appendChild(ft);
})();

export {footer};