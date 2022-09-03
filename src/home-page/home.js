const homePage = (() => {
   // the content <div>
   const content = document.querySelector("#content");
   
   const heroSection = document.createElement("div");
   heroSection.classList.add("hero-section");
   heroSection.innerHTML = `
      <div id="info">
         <h3>Welcome to Binti's Takeout</h3>
         <br>
         <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div>
         <img src="../dist/assets/img/pasta.jpg" alt="pasta image"/>
      </div>
   `;

   content.appendChild(heroSection);

})();

export {homePage};