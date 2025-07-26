// Menu Data - All restaurant menu items organized by category
const menuData = {
    breakfast: {
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
            description: "Diced Ham, bell peppers, onions, and cheese. Served with country potatoes or hash browns.",
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
        }
    },

    pizza: {
        "Cheese Lovers": {
            id: "PizzaCheeseLovers",
            description: "Enjoy a five cheese pizza with traditional red sauce.",
            price: "MED: $17.00 LG: $21.00 XLG: $28.00"
        },
        "Pepperoni": {
            id: "PizzaPepperoni",
            description: "Get a great taste of pepperoni with traditional red sauce.",
            price: "MED: $19.00 LG: $24.00 XLG: $30.00"
        },
        "Hawaiian": {
            id: "PizzaHawaiian",
            description: "Enjoy sweet pineapple topped with ham.",
            price: "MED: $19.00 LG: $25.00 XLG: $32.00"
        },
        "Meat Lovers": {
            id: "PizzaMeatLovers",
            description: "Order a loaded pizza with pepperoni, linguica, ham and sausage.",
            price: "MED: $22.00 LG: $28.00 XLG: $33.00"
        },
        "Veggie Delta": {
            id: "PizzaVeggieDelta",
            description: "Eat a healthy pizza loaded with mushrooms, onions, olives, tomato and bell peppers.",
            price: "MED: $19.00 LG: $24.00 XLG: $30.00"
        },
        "Chicken Florentine": {
            id: "PizzaChickenFlorentine",
            description: "Chicken, fresh spinach, fresh basil blend of homemade alfredo and pesto sauce, garlic, roma tomatoes and mushrooms drizzled with creamy pesto sauce on top.",
            price: "MED: $22.00 LG: $28.00 XLG: $35.00"
        },
        "Combination": {
            id: "PizzaCombination",
            description: "Loaded with pepperoni, ham, sausage, linguica, bell pepper, onion, olive, mushrooms and tomatoes.",
            price: "MED: $23.00 LG: $30.00 XLG: $35.00"
        },
        // "Margherita": {
        //     id: "PizzaMargherita",
        //     description: "Treat Yourself to our Margherita pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
        //     price: "MED: $21.00 LG: $28.00 XLG: $33.00"
        // },
        "Butter Chicken Pizza": {
            id: "PizzaButterChicken",
            description: "Indian Butter chicken, mozzarella cheese, and bell peppers on a traditional crust.",
            price: "MED: $22.00 LG: $28.00 XLG: $35.00"
        },
        "BBQ Chicken": {
            id: "PizzaBBQChicken",
            description: "BBQ sauce, chicken, green onion, and red onion.",
            price: "MED: $21.00 LG: $27.00 XLG: $34.00"
        },
        "Build Your Own": {
            id: "PizzaBuildYourOwn",
            description: "Your choice of any three toppings.",
            price: "MED: $22.00 LG: $27.00 XLG: $38.00"
        }
    },

    sandwiches: {
        "Prime Rib Dip": {
            id: "SandwichPrimeRibDip",
            description: "Tender Sliced Prime Rib on top of a roll served with a side of Au Jus. with cheese +$1.00",
            price: "$18.00"
        },
        "Delta Cheesesteak": {
            id: "SandwichDeltaCheeseSteak",
            description: "Grilled thinly sliced Beef, Steak or Chicken with grilled onion and bell peppers, topped with jack cheese.",
            price: "$16.00"
        },
        "Delta BLT": {
            id: "SandwichDeltaBLT",
            description: "Crispy bacon, lettuce, tomato and mayonnaise on toasted white or wheat bread.",
            price: "$14.00"
        },
        "Delta Club": {
            id: "SandwichDeltaClub",
            description: "Triple Decker Sandwich of sliced ham, turkey, bacon, lettuce, tomato, mayonnaise on toasted white or wheat bread.",
            price: "$16.00"
        },
        "Ruben": {
            id: "SandwichRuben",
            description: "Corned beef, Sauerkraut, thousand island dressing and jack cheese on rye bread.",
            price: "$16.00"
        },
        "Bacon & Ranch Chicken": {
            id: "SandwichBaconRanchChicken",
            description: "Grilled or breaded and fried chicken breast topped with bacon and ranch dressing and served on a bun.",
            price: "$17.00"
        },
        "Ribeye Steak Sandwich": {
            id: "SandwichRibeyeSteak",
            description: "Tender steak sandwich served with fries.",
            price: "$20.00"
        },
        "Turkey Bacon Avocado Wrap": {
            id: "SandwichTurkeyBaconAvocadoWrap",
            description: "A classic Turkey Wrap with bacon and avocado.",
            price: "$17.00"
        },
        "Fried Shrimp Basket": {
            id: "SandwichFriedShrimpBasket",
            description: "Fried Shrimp Basket. Seafood delight.",
            price: "$15.00"
        },
        "Fish & Chips": {
            id: "SandwichFishChips",
            description: "Beer batter fried cod served with fries.",
            price: "$19.00"
        }
    },

    appetizers: {
        "Delta Indian Roll": {
            id: "AppetizerDeltaIndianRoll",
            description: "Grilled butter chicken warp (available in spicy upon request)",
            price: "$10.00"
        },
        "Spinach & Artichoke Dip": {
            id: "AppetizerSpinachArtichokeDip",
            description: "Get our spinach and artichoke dip served with tortilla chips or bread.",
            price: "$19.00"
        },
        "BBQ Pulled Pork Sliders": {
            id: "AppetizerBBQPulledPorkSliders",
            description: "Tender slow-roasted pork on slider buns with barbecue sauce.",
            price: "$13.00"
        },
        "BBQ Pulled Pork Nachos": {
            id: "AppetizerBBQPulledPorkNachos",
            description: "Tender slow-roasted pork. Served over tortilla chips, garnished with green onions, tomatoes, olives, jalapenos, cheese and sour cream.",
            price: "$16.00"
        },
        "Quesadilla": {
            id: "AppetizerQuesadilla",
            description: "Flour tortilla filled with cheese and your choice of chicken or beef. add beef, chicken, or pulled pork for + $4.00",
            price: "$11.00"
        },
        "Mozzarella Sticks": {
            id: "AppetizerMozzarellaSticks",
            description: "Served with a marinara dipping sauce.",
            price: "$13.00"
        },
        "Onion Rings": {
            id: "AppetizerOnionRings",
            description: "Handed breaded onion rings",
            price: "$13.00"
        },
        "Potato Skins": {
            id: "AppetizerPotatoSkins",
            description: "Served with bacon, cheese, green onions and sour cream.",
            price: "$14.00"
        },
        "Jalapeno Poppers": {
            id: "AppetizerJalapenoPoppers",
            description: "Cheddar or cream cheese.",
            price: "$11.00"
        },
        "Stuffed Mushrooms": {
            id: "AppetizerStuffedMushrooms",
            description: "Mushrooms stuffed with cream cheese, spinach, artichokes, and cheese.",
            price: "$13.00"
        },
        "Calamari": {
            id: "AppetizerCalamari",
            description: "Fresh fried calamari served with a marinara dipping sauce.",
            price: "$14.00"
        },
        "Chicken Wings": {
            id: "AppetizerChickenWings",
            description: "Ge our 5 peace chicken wings smothered in your choice of sauce Buffalo, BBQ, Sweet Chile, Golden Serrano BBQ, or Teriyaki. Full order of 10 peace available form 13.00.",
            price: "Half Order (5) $11.00<br>Fill Order (10) $17.00"
        },
        "Chicken Tenders": {
            id: "AppetizerChickenTenders",
            description: "Breaded chicken tenders with fries.",
            price: "$14.00"
        },
        "French Fries": {
            id: "AppetizerFrenchFries",
            description: "Home style seasoned fires.",
            price: "$11.00"
        },
        "Tots": {
            id: "AppetizerTots",
            description: "Crispy tater tots served with your choice of dipping sauce.",
            price: "$11.00"
        },
        "Garlic Fries": {
            id: "AppetizerGarlicFries",
            description: "Home style garlic fries.",
            price: "$12.00"
        }
    },

    salads: {
        "House Salad": {
            id: "SaladHouseSalad",
            description: "Iceberg lettuce bland, cucumbers, tomatoes, red onions and croutons.",
            price: "$7.00"
        },
        "Side Salad": {
            id: "SaladSideSalad",
            description: "Iceberg lettuce bland, cucumbers, tomatoes, red onions and croutons.",
            price: "$5.00"
        },
        "Caesar Salad": {
            id: "SaladCaesarSalad",
            description: "Romaine lettuce, Caesar dressing and croutons.",
            price: "$9.00"
        },
        "Chef Salad": {
            id: "SaladChefSalad",
            description: "Iceberg lettuce blend, turkey, ham, hard boiled egg, tomatoes, onions and cheddar cheese.",
            price: "$13.00"
        }
    },

    burgers: {
        "Classic Burger": {
            id: "burgerItem2",
            description: "Classic burger with lettuce, tomatoes, onion and pickles. Add cheese $2.00",
            price: "$13.00"
        },
        "Patty Melt": {
            id: "burgerItem1",
            description: "Grilled 1/2lb patty with Sliced Rye, Grilled Onion, Swiss Cheese.",
            price: "$17.00"
        },
        "Teriyaki Burger": {
            id: "burgerItem3",
            description: "Grilled Teriyaki glazed beef patty served with sauteed mushrooms and topped with white american cheese.",
            price: "$16.00"
        },
        "Rodeo Burger": {
            id: "burgerItem4",
            description: "Grilled beef patty topped with crispy bacon, fried onion strings, cheddar cheese and bbq sauce.",
            price: "$17.00"
        },
        "Veggie Burger": {
            id: "burgerItem5",
            description: "Looking for veggie burger patty that does not contain meat and has all the great taste. + cheese $1.00 or + avocado for $1.50",
            price: "$15.00"
        }
    }
};
