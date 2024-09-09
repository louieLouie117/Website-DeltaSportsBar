// load the page
document.addEventListener("DOMContentLoaded", () => {
    BreakfastIemGenerator();
});

//Showing and hiding menu items------------------------------------->

const MenuHandler = e => {
    console.log("menu handler was called", e.target.innerText);

    // Define a mapping of menu item texts to their corresponding menu element IDs
    const menuMapping = {
        "Breakfast: 7 am - 11 am": "breakfastMenuList",
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


const BreakfastIemGenerator = e => {
    console.log("Breakfast item handler",);

    // object for breakfast menu with random items {Name : description, price}
    const breakfastMenu = {
        "Good Morning": {
            id: "breakfast1",
            description: "1 egg, 2 slices of bacon or sausage links or ham, with hash browns or country potatoes.",
            price: "$8.00"
        },
        "Biscuits & Gravy": {
            id: "breakfast2",
            description: "Egg white omelette with spinach, mushrooms, and tomatoes. Served with fresh fruit.",
            price: "$10.00"
        },
        "Country Fried Stake & Eggs": {
            id: "breakfast3",
            description: "Three fluffy pancakes served with butter and maple syrup.",
            price: "$15.00"
        },
        "Joe's Skillet": {
            id: "breakfast4",
            description: "Spinach, mushrooms, sausage or bacon with red onions, tomatoes scramble topped with cheese served on a bed of country potatoes on a sizzling skillet.",
            price: "$13.00"
        },
        "Eggs Benedict": {
            id: "breakfast5",
            description: "English muffin topped with a poached egg, ham and hollandaise sauce.",
            price: "$12.00"
        },

        "Breakfast Sandwich": {
            id: "breakfast6",
            description: "2 scrambled eggs with bacon, sausage, or ham. Serve on a english muffin.",
            price: "$6.00"
        },
        "Breakfast Burrito": {
            id: "breakfast7",
            description: "Scrambled eggs, cheese, bacon, sausage, or ham with country potatoes cheddar jack colby cheese wrapped in a flour tortilla.",
            price: "$8.00"
        },
        "Bacon Omelette": {
            id: "breakfast8",
            description: "Loaded with crispy diced bacon and cheddar jack cheese. Served with country potatoes or hash browns.",
            price: "$12.00"
        },
        "Veggie Omelette": {
            id: "breakfast9",
            description: "Mushrooms, Tomatoes, Onions, Spinach and Cheddar Jack Colby Cheeses Blend. Served with country potatoes or hash browns.",
            price: "$12.00"
        },
        "Ham & Cheese Omelette": {
            id: "breakfast10",
            description: "Filled with ham and melted cheese. Served with country potatoes or hash browns.",
            price: "$12.00"
        },
        "Denver Omelette": {
            id: "breakfast11",
            description: "Diced Ham, bell peppers, onions, and cheese.  Served with country potatoes or hash browns.",
            price: "$12.00"
        },
        "Buttermilk Pancakes": {
            id: "breakfast12",
            description: "Pancakes served with butter and maple syrup.",
            price: "(2) $7.00 (4) $10.00"
        },
        "French Toast": {
            id: "breakfast13",
            description: "Thick sliced bread dipped in our special batter and grilled to a golden brown.",
            price: "$8.00"
        },
        "Waffle": {
            id: "breakfast14",
            description: "Golden brown waffle served with butter and maple syrup.",
            price: "$8.00"
        },
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