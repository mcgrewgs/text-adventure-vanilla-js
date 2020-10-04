const capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const navItemNames = ["home", "party", "inventory", "story"];

const navButtons = {};
const navItems = {};
const navContentSections = {};

const navbarUl = document.getElementById("navbar-ul");

navItemNames.forEach((nav) => {
    navItems[nav] = document.createElement("li");
    navItems[nav].id = `nav-item-${nav}`;
    navItems[nav].classList.add("nav-item");

    navButtons[nav] = document.createElement("a");
    navButtons[nav].id = `nav-button-${nav}`;
    navButtons[nav].href = "#";
    navButtons[nav].innerText = capitalize(nav);
    navButtons[nav].classList.add("nav-link");

    navItems[nav].appendChild(navButtons[nav]);
    navbarUl.appendChild(navItems[nav]);

    navContentSections[nav] = document.getElementById(`nav-content-${nav}`);
    navButtons[nav].addEventListener("click", () => {
        handleNavClick(nav);
    });
});

const handleNavClick = function (clicked) {
    navItemNames.forEach((nav) => {
        if (nav === clicked) {
            navItems[nav].classList.add("active");
            navContentSections[nav].classList.remove("hidden-content");
        } else {
            navItems[nav].classList.remove("active");
            navContentSections[nav].classList.add("hidden-content");
        }
    });
};

handleNavClick(navItemNames[0]);