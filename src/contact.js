import Pic from './contact-img.jpeg'

export default function initContact(){
    const div = document.createElement("div");

    const contactH2 = document.createElement("h2");
    contactH2.classList.add("text-center");
    contactH2.textContent = "Contact";
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-grid");
    const mapDiv = document.createElement("div");
    mapDiv.classList.add("grid");
    const mapH3 = document.createElement("h3");
    mapH3.classList.add("text-center", "heading");
    mapH3.textContent = "Our Location";


    const contactIMG = new Image();
    contactIMG.src = Pic;

    const directions = document.createElement("p");
    directions.classList.add("text-center");
    directions.textContent = "Directions: Follow your instincts till you find the point where the sunlight meets your path. There we'll be."
    
    contactDiv.appendChild(mapH3);
    mapDiv.appendChild(contactIMG);
    mapDiv.appendChild(directions);
    contactDiv.appendChild(mapDiv);
    

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("text-center");
    // infoDiv.classList.add("grid");
    const infoH3 = document.createElement("h3");
    infoH3.classList.add("text-center", "heading");
    infoH3.textContent = "Call us!"
    // const infoContent = document.createElement("div");
    const infoP = document.createElement("p");
    infoP.innerHTML = "It's simple to call upon the goddess, Gaia.<br>Just recite the following prayer: <br>,<br> <span class='italic'>Oh Goddess Gaia, Spirit of the Earth, <br> Please reserve a table for me at your lounge,<br>And guide my steps so that I may arrive before the kitchen closes.</span>";
    
    contactDiv.appendChild(infoH3);
    infoDiv.appendChild(infoP);
    
    // infoDiv.appendChild(infoContent);

    contactDiv.appendChild(infoDiv);

    div.appendChild(contactH2);
    div.appendChild(contactDiv);
        
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(div);



}