// Menu Renderer - Handles dynamic rendering of menu items
class MenuRenderer {
    constructor() {
        this.currentlyOpenItem = null;
        this.init();
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.renderAllMenus();
            this.hideAllMenus();
            this.setupEventListeners();
        });
    }

    // Hide all menus by default
    hideAllMenus() {
        const menuIds = [
            'breakfastMenuList',
            'pizzasMenu',
            'sandwichesMenu',
            'appetizersMenu',
            'saladsMenu',
            'burgersMenu'
        ];

        // Check screen width to determine behavior
        const isDesktop = window.innerWidth >= 1024; // Adjust breakpoint as needed

        menuIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = isDesktop ? "grid" : "none";
            }
        });
    }

    // Render all menu categories
    renderAllMenus() {
        this.renderRecommendedMenu();
        this.renderBreakfastMenu();
        this.renderPizzaMenu();
        this.renderSandwichesMenu();
        this.renderAppetizersMenu();
        this.renderSaladsMenu();
        this.renderBurgersMenu();
    }

    // Generic method to render menu items
    renderMenuItems(containerId, menuCategory, handlerName) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = "";
        
        Object.entries(menuData[menuCategory]).forEach(([name, item]) => {
            const { description, price, id } = item;
            container.innerHTML += `
                <li class="item-container">
                    <div class="item-headding" id="${id}">
                        <h4 onclick="${handlerName}(event)">${name}</h4>
                        <img src="Assests/menuDopts.png" alt="" />
                    </div>
                    <div class="item-info" id="${id}Info">
                        <p>${description}</p>
                        <p>${price}</p>
                    </div>
                </li>
            `;
        });
    }

    // Specific menu renderers
    renderRecommendedMenu() {
        this.renderMenuItems('recommendedMenu', 'recommended', 'menuRenderer.handleItemClick');
    }

    renderBreakfastMenu() {
        this.renderMenuItems('breakfastMenuList', 'breakfast', 'menuRenderer.handleItemClick');
    }

    renderPizzaMenu() {
        this.renderMenuItems('pizzasMenu', 'pizza', 'menuRenderer.handleItemClick');
    }

    renderSandwichesMenu() {
        this.renderMenuItems('sandwichesMenu', 'sandwiches', 'menuRenderer.handleItemClick');
    }

    renderAppetizersMenu() {
        this.renderMenuItems('appetizersMenu', 'appetizers', 'menuRenderer.handleItemClick');
    }

    renderSaladsMenu() {
        this.renderMenuItems('saladsMenu', 'salads', 'menuRenderer.handleItemClick');
    }

    renderBurgersMenu() {
        this.renderMenuItems('burgersMenu', 'burgers', 'menuRenderer.handleItemClick');
    }

    // Generic item click handler
    handleItemClick(event) {
        const clickedElement = event.target;
        const parentDiv = clickedElement.closest('.item-headding');
        const itemId = parentDiv.id;
        const infoElement = document.getElementById(itemId + 'Info');

        // Close currently open item if it's different from the clicked one
        if (this.currentlyOpenItem && this.currentlyOpenItem !== infoElement) {
            this.currentlyOpenItem.style.display = "none";
        }

        // Toggle the clicked item
        if (infoElement) {
            const isCurrentlyOpen = infoElement.style.display === "block";
            infoElement.style.display = isCurrentlyOpen ? "none" : "block";
            this.currentlyOpenItem = isCurrentlyOpen ? null : infoElement;
        }
    }

    // Menu category handler
    handleMenuClick(event) {
        const menuMapping = {
            "Recommended": "recommendedMenu",
            "Breakfast": "breakfastMenuList",
            "Pizza": "pizzasMenu",
            "Sandwiches": "sandwichesMenu",
            "Appetizers": "appetizersMenu",
            "Salads": "saladsMenu",
            "Burgers": "burgersMenu"
        };

        // Hide all menus
        Object.values(menuMapping).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = "none";
            }
        });

        // Close any open item info
        if (this.currentlyOpenItem) {
            this.currentlyOpenItem.style.display = "none";
            this.currentlyOpenItem = null;
        }

        // Show the selected menu
        const selectedMenuId = menuMapping[event.target.innerText];
        if (selectedMenuId) {
            const selectedElement = document.getElementById(selectedMenuId);
            if (selectedElement) {
                selectedElement.style.display = "grid";
            }
        }
    }

    setupEventListeners() {
        // Setup menu category click handlers
        const menuItems = ['MenuRecommended', 'MenuBreakfast', 'MenuPizza', 'MenuSandwiches', 'MenuAppetizers', 'MenuSalads', 'MenuBurgers'];
        
        menuItems.forEach(itemId => {
            const element = document.getElementById(itemId);
            if (element) {
                element.addEventListener('click', (e) => this.handleMenuClick(e));
            }
        });
    }
}

// Create global instance
const menuRenderer = new MenuRenderer();

// Legacy function handlers for backward compatibility
const MenuHandler = (e) => menuRenderer.handleMenuClick(e);
const PizzaItemHandler = (e) => menuRenderer.handleItemClick(e);
const SandwichItemHandler = (e) => menuRenderer.handleItemClick(e);
const AppetizerItemHandler = (e) => menuRenderer.handleItemClick(e);
const SaladItemHandler = (e) => menuRenderer.handleItemClick(e);
const BurgerItemHandler = (e) => menuRenderer.handleItemClick(e);
const ShowItemHandler = (e) => menuRenderer.handleItemClick(e);
