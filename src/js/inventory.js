const inventory = [];
const inventoryButtonGroup = document.getElementById("inventory-button-group");
const inventoryButtons = [];
const inventoryDisplayCardHeader = document.getElementById(
    "inventory-display-card-header"
);
const inventoryDisplayCardBody = document.getElementById(
    "inventory-display-card-body"
);

const refreshInventory = function () {
    // clearChildren declared globally
    // eslint-disable-next-line no-undef
    clearChildren(inventoryButtonGroup);
    inventoryButtons.splice(0);
    inventory.forEach((item, index) => {
        let button = document.createElement("button");
        button.classList.add("btn", "btn-secondary", "inventory-item-button");
        button.setAttribute("type", "button");
        button.innerHTML = item.name;
        button.addEventListener("click", () => {
            handleInventoryClick(index);
        });
        inventoryButtonGroup.appendChild(button);
        inventoryButtons.push(button);
    });
    handleInventoryClick(0);
};

const addItem = function (name, description = "") {
    if (description === "") {
        description = `A ${name} you picked up during your travels.  It's sure to come in handy!  ...maybe.`;
    }
    inventory.push({
        name: name,
        description: description,
    });
    refreshInventory();
};

// Used by story page
// eslint-disable-next-line no-unused-vars
const removeItem = function (name) {
    for (let i = 0; i < inventory.length; i++) {
        // equalsIgnoreCase is declared globally
        // eslint-disable-next-line no-undef
        if (equalsIgnoreCase(name, inventory[i].name)) {
            inventory.splice(i, 1);
            break;
        }
    }
    refreshInventory();
};

// Used by story page
// eslint-disable-next-line no-unused-vars
const hasItem = function (name) {
    for (let i = 0; i < inventory.length; i++) {
        // equalsIgnoreCase is declared globally
        // eslint-disable-next-line no-undef
        if (equalsIgnoreCase(name, inventory[i].name)) {
            return true;
        }
    }
    return false;
};

const handleInventoryClick = function (index) {
    for (let i = 0; i < inventoryButtons.length; i++) {
        if (i == index) {
            inventoryButtons[i].classList.remove("btn-secondary");
            inventoryButtons[i].classList.add("btn-primary");
            inventoryDisplayCardHeader.innerHTML = inventory[i].name;
            inventoryDisplayCardBody.innerHTML = inventory[i].description;
        } else {
            inventoryButtons[i].classList.remove("btn-primary");
            inventoryButtons[i].classList.add("btn-secondary");
        }
    }
    // we use this to replace role names in text.
    // eslint-disable-next-line no-undef
    handlePartySave();
};

addItem(
    "Gumption",
    "No matter where the adventure takes you, your initiative and resourcefulness will see you through."
);
