//Showing and hiding menu items------------------------------------->

const MenuHandler = e => {
    console.log("menu handler was called", e.target.innerText);

    // Define a mapping of menu item texts to their corresponding menu element IDs
    const menuMapping = {
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