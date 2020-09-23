const navItemNames = ["home", "party", "inventory", "story"];

const navButtons = {};
const navItems = {};
const navContentSections = {};

navItemNames.forEach((nav) => {
    navButtons[nav] = document.getElementById(`nav-button-${nav}`);
    navItems[nav] = document.getElementById(`nav-item-${nav}`);
    navContentSections[nav] = document.getElementById(`nav-content-${nav}`);
    navButtons[nav].addEventListener("click", () => { handleNavClick(nav); });
});

const handleNavClick = function(clicked) {
    navItemNames.forEach((nav) => {
        if(nav === clicked) {
            navItems[nav].classList.add("active");
            navContentSections[nav].style.display = "inline";
        } else {
            navItems[nav].classList.remove("active");
            navContentSections[nav].style.display = "none";
        }
    });
};
