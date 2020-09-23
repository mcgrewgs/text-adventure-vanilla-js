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

const partyRoles = ["player"];
const partyRoleValues = {};
const partyInputs = {};
const partyInputFeedbacks = {};
const partyAllValid = document.getElementById("party-all-valid");

partyRoles.forEach((role) => {
    partyInputs[role] = document.getElementById(`party-input-${role}`);
    partyInputFeedbacks[role] = document.getElementById(`party-input-feedback-${role}`);
});

const validatePartyInput = function (role) {
    partyRoleValues[role] = partyInputs[role].value;
    if (partyRoleValues[role] != "") {
        partyInputs[role].classList.remove("is-invalid");
        partyInputs[role].classList.add("is-valid");
        partyInputFeedbacks[role].classList.remove("invalid-feedback");
        partyInputFeedbacks[role].classList.add("valid-feedback");
        partyInputFeedbacks[role].innerText = "That's a great name!";
        for (let elem of document.getElementsByTagName("abbr")) {
            if (elem.getAttribute("title").includes(role)) {
                elem.innerText = partyRoleValues[role];
            }
        }
        return true;
    } else {
        partyInputs[role].classList.remove("is-valid");
        partyInputs[role].classList.add("is-invalid");
        partyInputFeedbacks[role].classList.remove("valid-feedback");
        partyInputFeedbacks[role].classList.add("invalid-feedback");
        partyInputFeedbacks[role].innerText = "Please enter a name.";
        return false;
    }
};

const handlePartySave = function () {
    let allValid = true;
    partyRoles.forEach((role) => {
        allValid &= validatePartyInput(role);
    });
    if (allValid) {
        partyAllValid.classList.remove("hidden-content");
    } else {
        partyAllValid.classList.add("hidden-content");
    }
};

document.getElementById("party-save").addEventListener("click", handlePartySave);

handleNavClick(navItemNames[0]);
