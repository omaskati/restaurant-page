const menu = [{name: "Big Orange Carrot", price: "$7.50", desc: "One whole 3-pound orange carrot, fresh from the earth"},
{name: "BoilYOBeet", price: "$8.00", desc: "Two pounds of beets, one pot of boiling water"},
{name: "Lettuce Be", price: "$5.95", desc: "One 3 pound head of lettuce, served on a wooden slab"}];



export default function initMenu(){
    const div = document.createElement("div");

    const menuH2 = document.createElement("h2");
    menuH2.classList.add("text-center");
    menuH2.id="menu-title";
    menuH2.textContent = "Menu";

    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
    
    menu.forEach(item=>{
        const li = document.createElement("li");
        li.classList.add("text-center");

        const name = document.createElement("h3");
        name.textContent = item.name;
        const price = document.createElement("h4");
        price.textContent = item.price;
        const desc = document.createElement("p");
        desc.textContent = item.desc;

        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(desc);

        menuList.appendChild(li);
    })

        
        div.appendChild(menuH2);
        div.appendChild(menuList);
        
        const contentDiv = document.querySelector("#content");
        contentDiv.appendChild(div);
}


{/* <h2 class="text-center">Menu</h2>
        <ul class="menu-list">
            <li class="text-center">
                <h3>Good Food Item</h3>
                <h4>$9.50</h4>
                <p>A deliciously earthy piece of vegetable</p>
            </li>
            <li class="text-center">
                <h3>Good Food Item</h3>
                <h4>$9.50</h4>
                <p>A deliciously earthy piece of vegetable</p>
            </li>
            <li class="text-center">
                <h3>Good Food Item</h3>
                <h4>$9.50</h4>
                <p>A deliciously earthy piece of vegetable</p>
            </li>
            <li class="text-center">
                <h3>Good Food Item</h3>
                <h4>$9.50</h4>
                <p>A deliciously earthy piece of vegetable</p>
            </li>
            <li class="text-center">
                <h3>Good Food Item</h3>
                <h4>$9.50</h4>
                <p>A deliciously earthy piece of vegetable</p>
            </li>
        </ul> */}