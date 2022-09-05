const contactPage = () => {
    const container = document.querySelector(".hero-section");

    container.innerHTML = `
        <div id="contact-info">
            <h1>Contact us:</h1>
            <div>
                <h4>Phone</h4>
                <ul>
                    <li>879-867-5767</li>
                </ul>    
            </div>
            <div>
                <h4>Addrees</h4>
                <ul>
                    <li>12345 My Personal Address Rd, Rock Sheet TX 79890.</li>
                </ul>
            </div>
        </div>
        <div id="map">
            <img src="../dist/assets/img/googlemap.gif" />
        </div>
    `;

    console.log("Contact page displayed");
};

export {contactPage};