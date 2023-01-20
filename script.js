//Showing and hiding menu items------------------------------------->


const MenuHandler = e =>{
    console.log("menu hanndler was called", e.target.innerText)

    if(e.target.innerText === "Pizza"){
        document.getElementById("pizzasMenu").style.display = "grid";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
    }

    if(e.target.innerText === "Sandwiches"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "grid";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
    }

    if(e.target.innerText === "Appetizers"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "grid";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "none";
    }


    if(e.target.innerText === "Salads"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "grid";
        document.getElementById("burgersMenu").style.display = "none";
    }

    if(e.target.innerText === "Burgers"){
        document.getElementById("pizzasMenu").style.display = "none";
        document.getElementById("sandwichesMenu").style.display = "none";
        document.getElementById("appetizersMenu").style.display = "none";
        document.getElementById("saladsMenu").style.display = "none";
        document.getElementById("burgersMenu").style.display = "grid";
    }
}


//pizza items----------------------------------->
//Varibles------------>

var pizzaItem1V;
var pizzaItem2V;
var pizzaItem3V;
var pizzaItem4V;
var pizzaItem5V;
var pizzaItem6V;
var pizzaItem7V;
var pizzaItem8V;
var pizzaItem9V;


const PizzaMenuHandler = (e) =>{
    console.log(e.target.innerText)
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

//event listeners------>
document.getElementById("PizzaCheeseLovers").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaPepperoni").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaHawaiian").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaMeatLovers").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaVeggieDelta").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaChickenFlorentine").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaCombination").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaMargherita").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaBBQChicken").addEventListener("click", PizzaMenuHandler);
document.getElementById("PizzaBuildYourOwn").addEventListener("click", PizzaMenuHandler);






//Sandwiches items----------------------------------------------------->

const SandwichesMenuHandler = (e) =>{
    console.log(e.target.innerText)
    if(e.target.innerText === "Prime Rib Dip"){
        document.getElementById("PrimeRibDipInfo").style.display = "block";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "none";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("sandwichItem7Info").style.display = "none";
        document.getElementById("FishChipsInfo").style.display = "none";


    }

    if(e.target.innerText === "Delta Cheese Steak"){
        document.getElementById("PrimeRibDipInfo").style.display = "none";
        document.getElementById("DeltaCheeseSteakInfo").style.display = "block";
        document.getElementById("DeltaBLTInfo").style.display = "none";
        document.getElementById("DeltaClubInfo").style.display = "none";
        document.getElementById("RubenInfo").style.display = "none";
        document.getElementById("BaconRanchChickenInfo").style.display = "none";
        document.getElementById("sandwichItem7Info").style.display = "none";
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
        document.getElementById("sandwichItem7Info").style.display = "none";
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
}






//event listeners------>
document.getElementById("SandwichPrimeRibDip").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichDeltaCheeseSteak").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichDeltaBLT").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichDeltaClub").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichRuben").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichBaconRanchChicken").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichRibeyeSteak").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichTurkeyBaconAvocadoWrap").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichFriedShrimpBasket").addEventListener("click", SandwichesMenuHandler);
document.getElementById("SandwichFishChips").addEventListener("click", SandwichesMenuHandler);











//Salads Items------------------------------------------------------->


const SaladsMenuHandler = (e) =>{
    console.log(e.target.innerText)
    if(e.target.innerText === "House Salad"){
        document.getElementById("HouseSaladInfo").style.display = "block";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "none";


    }
     if(e.target.innerText === "Side Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "block";
        document.getElementById("ChefSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "none";


    }

    if(e.target.innerText === "Chef Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "block";
        document.getElementById("CaesarSaladInfo").style.display = "none";


    }
    if(e.target.innerText === "Caesar Salad"){
        document.getElementById("HouseSaladInfo").style.display = "none";
        document.getElementById("SideSaladInfo").style.display = "none";
        document.getElementById("ChefSaladInfo").style.display = "none";
        document.getElementById("CaesarSaladInfo").style.display = "block";


    }
    

}


//event listeners------>
document.getElementById("SaladHouseSalad").addEventListener("click", SaladsMenuHandler);
document.getElementById("SaladSideSalad").addEventListener("click", SaladsMenuHandler);
document.getElementById("SaladChefSalad").addEventListener("click", SaladsMenuHandler);
document.getElementById("SaladCaesarSalad").addEventListener("click", SaladsMenuHandler);

//burger items------------------------------------------------->

var burgerIemt1V;
var burgerIemt2V;
var burgerIemt3V;
var burgerIemt4V;
var burgerIemt5V;



//event listeners------>
document.getElementById("burgerItem1").addEventListener("click", showburgerItem1);
document.getElementById("burgerItem2").addEventListener("click", showburgerItem2);
document.getElementById("burgerItem3").addEventListener("click", showburgerItem3);
document.getElementById("burgerItem4").addEventListener("click", showburgerItem4);
document.getElementById("burgerItem5").addEventListener("click", showburgerItem5);

//Functions------------>

function showburgerItem1(e) {
    document.getElementById("burgerItem1Info").style.display = "block";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "none";
    document.getElementById("burgerItem5Info").style.display = "none";


}

function showburgerItem2(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "block";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "none";
    document.getElementById("burgerItem5Info").style.display = "none";

}

function showburgerItem3(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "block";
    document.getElementById("burgerItem4Info").style.display = "none";
    document.getElementById("burgerItem5Info").style.display = "none";

}

function showburgerItem4(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "block";
    document.getElementById("burgerItem5Info").style.display = "none";

}


function showburgerItem5(e) {
    document.getElementById("burgerItem1Info").style.display = "none";
    document.getElementById("burgerItem2Info").style.display = "none";
    document.getElementById("burgerItem3Info").style.display = "none";
    document.getElementById("burgerItem4Info").style.display = "none";
    document.getElementById("burgerItem5Info").style.display = "block";

}


//burgers items---------------------------------------------------->
var appetizerItem1V;
var appetizerItem2V;
var appetizerItem3V;
var appetizerItem4V;
var appetizerItem5V;
var appetizerItem6V;
var appetizerItem7V;
var appetizerItem8V;
var appetizerItem9V;
var appetizerItem10V;
var appetizerItem11V;
var appetizerItem12V;
var appetizerItem13V;
var appetizerItem14V;
var appetizerItem15V;



const AppetizerMenuHandler = (e) =>{
    console.log(e.target.innerText)
    if(e.target.innerText === "Delta Indian Roll"){
        document.getElementById("DeltaIndianRollInfo").style.display = "block";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Spinach & Artichoke Dip"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "block";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "BBQ Pulled Pork Nachos"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "block";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "BBQ Pulled Pork Sliders"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "block";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    
    if(e.target.innerText === "Mozzarella Sticks"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "block";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Onion Rings"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "block";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }
    

    if(e.target.innerText === "Potato Skins"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "block";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }


    if(e.target.innerText === "Jalapeno Poppers"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "block";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Stuffed Mushrooms"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "block";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Calamari"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "block";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Chicken Wings"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "block";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    if(e.target.innerText === "Chicken Tenders"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "block";
        document.getElementById("FrenchFriesInfo").style.display = "none";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }

    
    if(e.target.innerText === "French Fries"){
        document.getElementById("DeltaIndianRollInfo").style.display = "none";
        document.getElementById("SpinachArtichokeDipInfo").style.display = "none";
        document.getElementById("BBQPulledPorkNachosInfo").style.display = "none";
        document.getElementById("BBQPulledPorkSlidersInfo").style.display = "none";
        document.getElementById("MozzarellaSticksInfo").style.display = "none";
        document.getElementById("OnionRingsInfo").style.display = "none";
        document.getElementById("PotatoSkinsInfo").style.display = "none";
        document.getElementById("JalapenoPoppersInfo").style.display = "none";
        document.getElementById("StuffedMushroomsInfo").style.display = "none";
        document.getElementById("CalamariInfo").style.display = "none";
        document.getElementById("ChickenWingsInfo").style.display = "none";
        document.getElementById("ChickenTendersInfo").style.display = "none";
        document.getElementById("FrenchFriesInfo").style.display = "block";
        document.getElementById("appetizerItem14Info").style.display = "none";
        document.getElementById("appetizerItem15Info").style.display = "none";


    }


    
    
}
//event listeners------>
document.getElementById("AppetizerDeltaIndianRoll").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerSpinachArtichokeDip").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerBBQPulledPorkNachos").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerBBQPulledPorkSliders").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerMozzarellaSticks").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerOnionRings").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerPotatoSkins").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerJalapenoPoppers").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerStuffedMushrooms").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerCalamari").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerChickenWings").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerChickenTenders").addEventListener("click", AppetizerMenuHandler);
document.getElementById("AppetizerFrenchFries").addEventListener("click", AppetizerMenuHandler);
document.getElementById("appetizerItem14").addEventListener("click", AppetizerMenuHandler);
document.getElementById("appetizerItem15").addEventListener("click", AppetizerMenuHandler);





//Functions------------>

function showAppetizerItem1(e) {
    document.getElementById("appetizerItem1Info").style.display = "block";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";

}


function showAppetizerItem2(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "block";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem3(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "block";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem4(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "block";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem5(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "block";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem6(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "block";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem7(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "block";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem8(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "block";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem9(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "block";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem10(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "block";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem11(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "block";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem12(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "block";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}


function showAppetizerItem13(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "block";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem14(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "block";
    document.getElementById("appetizerItem15Info").style.display = "none";
}

function showAppetizerItem15(e) {
    document.getElementById("appetizerItem1Info").style.display = "none";
    document.getElementById("appetizerItem2Info").style.display = "none";
    document.getElementById("appetizerItem3Info").style.display = "none";
    document.getElementById("appetizerItem4Info").style.display = "none";
    document.getElementById("appetizerItem5Info").style.display = "none";
    document.getElementById("appetizerItem6Info").style.display = "none";
    document.getElementById("appetizerItem7Info").style.display = "none";
    document.getElementById("appetizerItem8Info").style.display = "none";
    document.getElementById("appetizerItem9Info").style.display = "none";
    document.getElementById("appetizerItem10Info").style.display = "none";
    document.getElementById("appetizerItem11Info").style.display = "none";
    document.getElementById("appetizerItem12Info").style.display = "none";
    document.getElementById("appetizerItem13Info").style.display = "none";
    document.getElementById("appetizerItem14Info").style.display = "none";
    document.getElementById("appetizerItem15Info").style.display = "block";
}