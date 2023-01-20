//Showing and hiding menu items------------------------------------->

const MenuHandler = e =>{
    console.log("menu hanndler was called", e.target.innerText);
    if(e.target.innerText === "Pizza"){
        document.getElementById("pizzasMenu").style.display = "grid";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
        return
    }

    if(e.target.innerText === "Sandwiches"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "grid";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
        return
    }

    if(e.target.innerText === "Appetizers"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "grid";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
        return
    }


    if(e.target.innerText === "Salads"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "grid";
        document.getElementById("burgersMenu").style.display = "none";
        return
    }

    if(e.target.innerText === "Burgers"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "grid";
        return
    }
}




const PizzaItemHandler = e => {
    console.log("Food item handler was called", e.target.innerText)

    if(e.target.innerText === "Cheese Lovers"){
        document.getElementById("CheeseLoversInfo").style.display = "block";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Pepperoni"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "block";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Hawaiian"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "block";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Meat Lovers"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "block";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Veggie Delta"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "block";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Chicken Florentine"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "block";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }

    if(e.target.innerText === "Combination"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "block";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }
    
    if(e.target.innerText === "Margherita"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "block";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }
    if(e.target.innerText === "BBQ Chicken"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "block";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "none";

    }
    

    if(e.target.innerText === "Build Your Own"){
        document.getElementById("CheeseLoversInfo").style.display = "none";
        document.getElementById("PepperoniInfo").style.display = "none";
        document.getElementById("HawaiianInfo").style.display = "none";
        document.getElementById("MeatLoversInfo").style.display = "none";
        document.getElementById("VeggieDeltaInfo").style.display = "none";
        document.getElementById("ChickenFlorentineInfo").style.display = "none";
        document.getElementById("CombinationInfo").style.display = "none";
        document.getElementById("MargheritaInfo").style.display = "none";
        document.getElementById("BBQChickenInfo").style.display = "none";
        document.getElementById("PizzaBuildYourOwnInfo").style.display = "block";
    }
}


const SandwichItemHandler = e => {
    console.log("Sandwich item handler", e.target.innerText);

    if(e.target.innerText === "Prime Rib Dip"){
        document.getElementById("PrimeRibDipInfo").style.display = "block";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";


    }

    if(e.target.innerText === "Delta Cheese Steak"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "block";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";


    }

    if(e.target.innerText === "Delta BLT"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "block";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";

    }

    if(e.target.innerText === "Delta Club"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "block";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";


    }

    if(e.target.innerText === "Ruben"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "block";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";

    }

    if(e.target.innerText === "Bacon & Ranch Chicken"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "block";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";

    }

    if(e.target.innerText === "Ribeye Steak Sandwich"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "block";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";

    }

    
    if(e.target.innerText === "Turkey Bacon Avocado Wrap"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "block";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";


    }

    if(e.target.innerText === "Fried Shrimp Basket"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "block";
        document.getElementById("FishChipsInfo").style.display = "none";

    }

    if(e.target.innerText === "Fish & Chips"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "block";


    }

    if(e.target.innerText === "Ribeye Steak Sandwich"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("RibeyeSteakInfo").style.display = "none";
        document.getElementById("TurkeyBaconAvocadoWrapInfo").style.display = "none";
        document.getElementById("FriedShrimpBasketInfo").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";
        document.getElementById("RibeySteakInfo").style.display = "block";



    }
}



const AppetizerItemHandler = e =>{
    console.log("Appetizer item handler", e.target.innerText);
    if(e.target.innerText === "Delta Indian Roll"){
        document.getElementById("DeltaIndianRollInfo").style.display = "block";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return

    };

    if(e.target.innerText === "Spinach & Artichoke Dip"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "block";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    if(e.target.innerText === "BBQ Pulled Pork Sliders"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "block";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    
    if(e.target.innerText === "BBQ Pulled Pork Nachos"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "block";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    if(e.target.innerText === "Mozzarella Sticks"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "block";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    if(e.target.innerText === "Onion Rings"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "block";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };


    
    if(e.target.innerText === "Potato Skins"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "block";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };


    if(e.target.innerText === "Jalapeno Poppers"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "block";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    
    if(e.target.innerText === "Stuffed Mushrooms"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "block";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };


        
    if(e.target.innerText === "Calamari"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "block";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };
    
    if(e.target.innerText === "Chicken Wings"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "block";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };

    if(e.target.innerText === "Chicken Tenders"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "block";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        return
    };


    if(e.target.innerText === "French Fries"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
    
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
    
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "block";
        return
    };
 
 
 
   
}


const SaladItemHandler = e => {
    console.log("Salad Item handler", e.target.innerText)

    if(e.target.innerText === "House Salad"){
        document.getElementById("HouseSaladInfo").style.display = "block";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "none";
        return
    }

    if(e.target.innerText === "Side Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "block";
        document.getElementById("CaesarSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "none";
        return
    }

    
    if(e.target.innerText === "Caesar Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "block";
        document.getElementById("ChefSaladInfo").style.display = "none";
        return
    }


      
    if(e.target.innerText === "Chef Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "block";
        return
    }

}


const BurgerItemHandler = e =>{
    console.log("Burger Item handler", e.target.innerText);
    if(e.target.innerText === "Patty Melt"){
        document.getElementById("burgerItem1Info").style.display = "block";
        document.getElementById("burgerItem2Info").style.display = "none";
        document.getElementById("burgerItem3Info").style.display = "none";
        document.getElementById("burgerItem4Info").style.display = "none";
        document.getElementById("burgerItem5Info").style.display = "none";
        return
    }


    if(e.target.innerText === "Classic Burger"){
        document.getElementById("burgerItem1Info").style.display = "none";
        document.getElementById("burgerItem2Info").style.display = "block";
        document.getElementById("burgerItem3Info").style.display = "none";
        document.getElementById("burgerItem4Info").style.display = "none";
        document.getElementById("burgerItem5Info").style.display = "none";
        return
    }

    if(e.target.innerText === "Teriyaki Burger"){
        document.getElementById("burgerItem1Info").style.display = "none";
        document.getElementById("burgerItem2Info").style.display = "none";
        document.getElementById("burgerItem3Info").style.display = "block";
        document.getElementById("burgerItem4Info").style.display = "none";
        document.getElementById("burgerItem5Info").style.display = "none";
        return
    }

    if(e.target.innerText === "Rodeo Burger"){
        document.getElementById("burgerItem1Info").style.display = "none";
        document.getElementById("burgerItem2Info").style.display = "none";
        document.getElementById("burgerItem3Info").style.display = "none";
        document.getElementById("burgerItem4Info").style.display = "block";
        document.getElementById("burgerItem5Info").style.display = "none";
        return
    }

    
 

    if(e.target.innerText === "Veggie Burger"){
        document.getElementById("burgerItem1Info").style.display = "none";
        document.getElementById("burgerItem2Info").style.display = "none";
        document.getElementById("burgerItem3Info").style.display = "none";
        document.getElementById("burgerItem4Info").style.display = "none";
        document.getElementById("burgerItem5Info").style.display = "block";
        return
    }

}