// "Anything to declare before we let you in?"  Disclose to the guards that you have a sword.  "Good; no one should come into Riften unarmed."

const role = function (roleName) {
    return `<abbr title="${roleName}'s name"></abbr>`;
};

const story = {
    stage_000_startingEquipment: {
        title: "Family Heirloom",
        text: `Welcome, ${role(
            "player"
        )}!  Before you get started on your journey, a little housekeeping.  Your family has passed down a precious heirloom for generations, and it may help you on your journey.  What was it again?`,
        choices: [
            {
                text: `A sword.  It might get you out of a sticky situation; of course, it might get you into one, too.  Also perfect for threatening ${role(
                    "arch rival"
                )}.`,
                requires: [],
                usesUp: [],
                adds: [
                    {
                        name: "Sword",
                        description: `A sword.  It might get you out of a sticky situation; of course, it might get you into one, too.  Also perfect for threatening ${role(
                            "arch rival"
                        )}.`,
                    },
                ],
                next: "stage_010_beginning",
            },
            {
                text: `A holy symbol.  It might get you help from the church, if you encounter dire straits.  Also useful for fending off vampires like ${role(
                    "arch rival"
                )}.`,
                requires: [],
                usesUp: [],
                adds: [
                    {
                        name: "Holy Symbol",
                        description: `A holy symbol.  It might get you help from the church, if you encounter dire straits.  Also useful for fending off vampires like ${role(
                            "arch rival"
                        )}.`,
                    },
                ],
                next: "stage_010_beginning",
            },
            {
                text: `A flask.  It may help you deal with everything that's about to head your way, especially the crap ${role(
                    "arch rival"
                )} tends to fling.`,
                requires: [],
                usesUp: [],
                adds: [
                    {
                        name: "Flask",
                        description: `A flask.  It may help you deal with everything that's about to head your way, especially the crap ${role(
                            "arch rival"
                        )} tends to fling.`,
                    },
                ],
                next: "stage_010_beginning",
            },
        ],
    },
    stage_010_beginning: {
        title: "Your Adventure Begins",
        text: `Awesome, I'm sure that'll come in handy later!  Are you ready, ${role(
            "player"
        )}?  Your very own not-Pokemon adventure is about to unfold!`,
        choices: [
            {
                text: "Let's do this!",
                requires: [],
                usesUp: [],
                adds: [
                    {
                        name: "Leeroy Jenkins",
                        description: `A keepsake, commemorating your willingness to jump right into adventure, completely disregarding your own safety, as well as that of ${role(
                            "male friend"
                        )}, ${role("female friend")}, and ${role(
                            "love interest"
                        )}.`,
                    },
                ],
                next: "stage_020_youAwakenInACart",
            },
        ],
    },
    stage_020_youAwakenInACart: {
        title: "Awakening",
        text: `You awaken to see you're sitting in a cart, hands bound, with a few others; a man across from you says "Hey, you; you're finally awake.  The name's ${role(
            "male friend"
        )}."`,
        choices: [],
    },
};
let currentStage = {};

const storyPromptHeader = document.getElementById("story-prompt-header");
const storyPromptBody = document.getElementById("story-prompt-body");
const storyButtonGroup = document.getElementById("story-button-group");

// Good thing you grabbed that ____ earlier!
// Too bad you don't have a ____...
// Default outline-primary.  If requires an item you have, outline-success.  If uses up an item you have, outline-danger.  If requires or uses up an item you don't have, outline-secondary disabled.
const setStoryStage = function (stage) {
    currentStage = story[stage];
    storyPromptHeader.innerHTML = currentStage.title;
    storyPromptBody.innerHTML = currentStage.text;
    // declared globally
    // eslint-disable-next-line no-undef
    clearChildren(storyButtonGroup);
    currentStage.choices.forEach((choice, index) => {
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList.add("btn");
        let type = "outline-primary";
        let missingItems = [];
        let requiresSome = false;
        let usesUpSome = false;
        if (choice.requires.length > 0) {
            requiresSome = true;
            choice.requires.forEach((req) => {
                // hasItem defined globally
                // eslint-disable-next-line no-undef
                if (!hasItem(req)) {
                    missingItems.push(req);
                }
            });
        }
        if (choice.usesUp.length > 0) {
            usesUpSome = true;
            choice.usesUp.forEach((use) => {
                // hasItem defined globally
                // eslint-disable-next-line no-undef
                if (!hasItem(use)) {
                    missingItems.push(use);
                }
            });
        }
        if (missingItems.length > 0) {
            type = "outline-secondary";
            button.classList.add("disabled");
        } else if (requiresSome) {
            type = "outline-success";
        } else if (usesUpSome) {
            type = "outline-danger";
        }
        button.classList.add(`btn-${type}`);

        button.innerHTML = choice.text;
        if (missingItems.length === 0) {
            button.addEventListener("click", () => {
                handleStoryClick(index);
            });
        }
        storyButtonGroup.appendChild(button);
    });
    // we use this to replace role names in text.
    // eslint-disable-next-line no-undef
    handlePartySave();
};

const handleStoryClick = function (index) {
    currentStage.choices[index].usesUp.forEach((use) => {
        // eslint-disable-next-line no-undef
        removeItem(use);
    });
    currentStage.choices[index].adds.forEach((add) => {
        // eslint-disable-next-line no-undef
        addItem(add.name, add.description);
    });
    setStoryStage(currentStage.choices[index].next);
};

setStoryStage("stage_000_startingEquipment");
