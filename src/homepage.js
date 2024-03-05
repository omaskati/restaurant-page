
export default function initHomepage(){
    const div = document.createElement("div");
    const splashDiv = document.createElement("div");
    splashDiv.classList.add("splash");

    const captionH6 = document.createElement("h6");
    captionH6.classList.add("caption");
    captionH6.innerHTML = 'Photo by <a href="https://unsplash.com/@syedabsarahmad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Syed Ahmad</a> on <a href="https://unsplash.com/photos/people-sitting-on-chair-in-restaurant-kgjQ1AGDwE0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    splashDiv.appendChild(captionH6);

    const subtitleH2 = document.createElement("h2");
    subtitleH2.classList.add("text-center");
    subtitleH2.id="subtitle";
    subtitleH2.textContent = "Connect On a Deeper Level";


    const descP = document.createElement("p");
    descP.classList.add("text-center");
    descP.id="home-description";
    descP.textContent = "Entwine yourself with the earth and experience the purity of raw dining. All our foods are grown and picked fresh daily from our garden. Nothing is washed, peeled, or prepared. Take off your shoes, ground yourself, and enjoy the amazing simplicity of all that Mother Nature has to offer.";

    let innerHTML = `<div class="splash">
            <h6 class="caption">Photo by <a href="https://unsplash.com/@syedabsarahmad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Syed Ahmad</a> on <a href="https://unsplash.com/photos/people-sitting-on-chair-in-restaurant-kgjQ1AGDwE0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></h6>
        </div>
        <h2 class="text-center" id="subtitle">Connect On a Deeper Level</h2>
        <p class="text-center" id="home-description">Entwine yourself with the earth and experience the purity of raw dining. All our foods are grown and picked fresh daily from our garden. Nothing is washed, peeled, or prepared. Take off your shoes, ground yourself, and enjoy the amazing simplicity of all Mother Nature has to offer.</p>`;

        
        div.appendChild(splashDiv);
        div.appendChild(subtitleH2);
        div.appendChild(descP);
        
        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(div);
}

