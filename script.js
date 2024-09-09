// load the page
document.addEventListener("DOMContentLoaded", () => {
    BreakfastItemHandler();
});

//Showing and hiding menu items------------------------------------->

const MenuHandler = e => {
    console.log("menu handler was called", e.target.innerText);

    // Define a mapping of menu item texts to their corresponding menu element IDs
    const menuMapping = {
        "Breakfast": "breakfastMenuList",
        "Pizza": "pizzasMenu",
        "Sandwiches": "sandwichesMenu",
        "Appetizers": "appetizersMenu",
        "Salads": "saladsMenu",
        "Burgers": "burgersMenu"
    };

    // Hide all menus
    Object.values(menuMapping).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show the selected menu
    const selectedMenuId = menuMapping[e.target.innerText];
    if (selectedMenuId) {
        document.getElementById(selectedMenuId).style.display = "grid";
    }
};


const ShowItemHandler = (e, id) => {
    console.log("Show item handler was called", e.target.innerText, id);

    // toggle the item info display
    const itemInfo = document.getElementById(id + "Info");
    if (itemInfo) {
        itemInfo.style.display = itemInfo.style.display === "block" ? "none" : "block";
    }
}


const BreakfastItemHandler = e => {
    console.log("Breakfast item handler",);

    // object for breakfast menu with random items {Name : description, price}
    const breakfastMenu = {
        "Good Morning": {
            id: "breakfast1",
            description: "1 egg, 2 bacon strips, 2 sausage links, hash browns and 2 pancakes.",
            price: "$5.00"
        },
        "Healthy Start": {
            id: "breakfast2",
            description: "Egg white omelette with spinach, mushrooms, and tomatoes. Served with fresh fruit.",
            price: "$6.50"
        },
        "Classic Pancakes": {
            id: "breakfast3",
            description: "Three fluffy pancakes served with butter and maple syrup.",
            price: "$4.50"
        },
        "French Toast": {
            id: "breakfast4",
            description: "Thick slices of bread dipped in a mixture of eggs, milk, and cinnamon, then cooked until golden brown.",
            price: "$5.50"
        },
        "Breakfast Burrito": {
            id: "breakfast5",
            description: "Scrambled eggs, cheese, bacon, and salsa wrapped in a warm tortilla.",
            price: "$6.00"
        }
    };

    const breakfastMenuList = document.getElementById("breakfastMenuList");
    // clear the list
    breakfastMenuList.innerHTML = "";
    Object.entries(breakfastMenu).forEach(([name, item]) => {
        const { description, price, id} = item;
        breakfastMenuList.innerHTML += `
        <li class="item-container">
            <div class="item-headding" id="${id}">
            <h4 onclick="ShowItemHandler(event, '${id}')">${name}</h4>
            <img src="Assests/menuDopts.png" alt="" />
            </div>
            <div class="item-info" id="${id}Info">
            <p>${description}</p>
            <p>${price} </p>
            </div>
        </li>
        `;
    });

};




const PizzaItemHandler = e => {
    console.log("Food item handler was called", e.target.innerText);

    // Define a mapping of pizza names to their corresponding info element IDs
    const pizzaToInfoId = {
        "Cheese Lovers": "CheeseLoversInfo",
        "Pepperoni": "PepperoniInfo",
        "Hawaiian": "HawaiianInfo",
        "Meat Lovers": "MeatLoversInfo",
        "Veggie Delta": "VeggieDeltaInfo",
        "Chicken Florentine": "ChickenFlorentineInfo",
        "Combination": "CombinationInfo",
        "Margherita": "MargheritaInfo",
        "BBQ Chicken": "BBQChickenInfo",
        "Build Your Own": "PizzaBuildYourOwnInfo"
    };

    // Hide all info elements
    Object.values(pizzaToInfoId).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show the clicked item's info element
    const clickedItemInfoId = pizzaToInfoId[e.target.innerText];
    if (clickedItemInfoId) {
        document.getElementById(clickedItemInfoId).style.display = "block";
    }
};


const SandwichItemHandler = e => {
    console.log("Sandwich item handler", e.target.innerText);

    // Define a mapping of item texts to their corresponding info element IDs
    const itemToInfoId = {
        "Prime Rib Dip": "PrimeRibDipInfo",
        "Delta Cheesesteak": "DeltaCheeseSteakInfo",
        "Delta BLT": "DeltaBLTInfo",
        "Delta Club": "DeltaClubInfo",
        "Ruben": "RubenInfo",
        "Bacon & Ranch Chicken": "BaconRanchChickenInfo",
        "Ribeye Steak Sandwich": "RibeyeSteakInfo",
        "Turkey Bacon Avocado Wrap": "TurkeyBaconAvocadoWrapInfo",
        "Fried Shrimp Basket": "FriedShrimpBasketInfo",
        "Fish & Chips": "FishChipsInfo"
    };

    // Hide all info elements
    Object.values(itemToInfoId).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show the clicked item's info element
    const clickedItemInfoId = itemToInfoId[e.target.innerText];
    if (clickedItemInfoId) {
        document.getElementById(clickedItemInfoId).style.display = "block";
    }
};



const AppetizerItemHandler = e =>{
    console.log("Appetizer item handler", e.target.innerText);

     // Define a mapping of item texts to their corresponding info element IDs
        const itemToInfoId = {
            "Delta Indian Roll": "DeltaIndianRollInfo",
            "Spinach & Artichoke Dip": "SpinachArtichokeDipInfo",
            "BBQ Pulled Pork Sliders": "BBQPulledPorkSlidersInfo",
            "BBQ Pulled Pork Nachos": "BBQPulledPorkNachosInfo",
            "Mozzarella Sticks": "MozzarellaSticksInfo",
            "Onion Rings": "OnionRingsInfo",
            "Potato Skins": "PotatoSkinsInfo",
            "Jalapeno Poppers": "JalapenoPoppersInfo",
            "Stuffed Mushrooms": "StuffedMushroomsInfo",
            "Calamari": "CalamariInfo",
            "Chicken Wings": "ChickenWingsInfo",
            "Chicken Tenders": "ChickenTendersInfo",
            "French Fries": "FrenchFriesInfo"
        };

    // Hide all info elements
    Object.values(itemToInfoId).forEach(id => {
        document.getElementById(id).style.display = "none";
    });
     

    // Show the clicked item's info element
    const clickedItemInfoId = itemToInfoId[e.target.innerText];
    if (clickedItemInfoId) {
        document.getElementById(clickedItemInfoId).style.display = "block";
    }

 
}


const SaladItemHandler = e => {
    console.log("Salad Item handler", e.target.innerText)
     // Define a mapping of item texts to their corresponding info element IDs
        const itemToInfoId = {
            "House Salad": "HouseSaladInfo",
            "Side Salad": "SideSaladInfo",
            "Caesar Salad": "CaesarSaladInfo",
            "Chef Salad": "ChefSaladInfo"
        };

    // Hide all info elements
    Object.values(itemToInfoId).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show the clicked item's info element
    const clickedItemInfoId = itemToInfoId[e.target.innerText];
    if (clickedItemInfoId) {
        document.getElementById(clickedItemInfoId).style.display = "block";
    }


}


const BurgerItemHandler = e =>{
    console.log("Burger Item handler", e.target.innerText);
     // Define a mapping of item texts to their corresponding info element IDs
        const itemToInfoId = {
            "Patty Melt": "burgerItem1Info",
            "Classic Burger": "burgerItem2Info",
            "Teriyaki Burger": "burgerItem3Info",
            "Rodeo Burger": "burgerItem4Info",
            "Veggie Burger": "burgerItem5Info"
        };

    // Hide all info elements
    Object.values(itemToInfoId).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show the clicked item's info element
    const clickedItemInfoId = itemToInfoId[e.target.innerText];
    if (clickedItemInfoId) {    
        document.getElementById(clickedItemInfoId).style.display = "block";
    }


}