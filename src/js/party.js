const partyRoles = ["player"];
const partyRoleValues = {};
const partyInputs = {};
const partyInputFeedbacks = {};
const partyAllValid = document.getElementById("party-all-valid");
const partyFormGroup = document.getElementById("party-form-group");

partyRoles.forEach((role) => {
    let label = document.createElement("label");
    label.classList.add("form-control-label");
    label.setAttribute("for", `party-input-${role}`);
    // capitalize is defined in the index.js file
    // eslint-disable-next-line no-undef
    label.innerText = capitalize(role);
    partyFormGroup.appendChild(label);

    partyInputs[role] = document.createElement("input");
    partyInputs[role].id = label.getAttribute("for");
    partyInputs[role].type = "text";
    partyInputs[role].classList.add("form-control");
    partyInputs[role].classList.add("is-invalid");
    partyFormGroup.appendChild(partyInputs[role]);

    partyInputFeedbacks[role] = document.createElement("div");
    partyInputFeedbacks[role].id = `party-input-feedback-${role}`;
    partyInputFeedbacks[role].innerText = "Please enter a name.";
    partyInputFeedbacks[role].classList.add("invalid-feedback");
    partyFormGroup.appendChild(partyInputFeedbacks[role]);
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

document
    .getElementById("party-save")
    .addEventListener("click", handlePartySave);
