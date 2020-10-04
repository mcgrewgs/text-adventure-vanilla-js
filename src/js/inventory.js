// Good thing you grabbed that ____ earlier!
// Too bad you don't have a ____...
// You awaken to see you're sitting in a cart, hands bound, with a few others; a man across from you says "Hey, you; you're finally awake.  The name's <Friend (male)>."
// Family heirloom - sword "Might get you out of a sticky situation.  Of course, it might get you into one, too."
// "Anything to declare before we let you in?"  Disclose to the guards that you have a sword.  "Good; no one should come into Riften unarmed."

const inventory = [];
const inventoryButtonGroup = document.getElementById("inventory-button-group");
const inventoryButtons = [];

const refreshInventory = function () {
    // clearChildren declared globally
    // eslint-disable-next-line no-undef
    clearChildren(inventoryButtonGroup);
    inventoryButtons.splice(0);
    inventory.forEach((item, index) => {
        let button = document.createElement("button");
        button.classList.add("btn", "btn-secondary", "inventory-item-button");
        button.setAttribute("type", "button");
        button.innerText = item.name;
        button.addEventListener("click", () => {
            handleClick(index);
        });
        inventoryButtonGroup.appendChild(button);
        inventoryButtons.push(button);
    });
    handleClick(0);
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

const handleClick = function (index) {
    for (let i = 0; i < inventoryButtons.length; i++) {
        if (i == index) {
            inventoryButtons[i].classList.remove("btn-secondary");
            inventoryButtons[i].classList.add("btn-primary");
        } else {
            inventoryButtons[i].classList.remove("btn-primary");
            inventoryButtons[i].classList.add("btn-secondary");
        }
    }
};

addItem(
    "Gumption",
    "No matter where the adventure takes you, your initiative and resourcefulness will see you through."
);
