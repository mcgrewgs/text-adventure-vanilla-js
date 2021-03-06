// not sure how I feel about keeping "uses up" in... seems kinda feels-bad-y

// "Anything to declare before we let you in?"  Disclose to the guards that you have a sword.  "Good; no one should come into Riften unarmed."
// My rattata is in the top percent of all rattata
// I like shorts; they're comfy and easy to wear!
// It's dangerous to go alone; take this!

const role = function (roleName) {
    return `<abbr title="${roleName}'s name"></abbr>`;
};

const story = {
    stage_000_startingEquipment: {
        title: "Family Heirloom",
        text: [
            `Welcome, ${role(
                "player"
            )}!  Before you get started on your journey, a little housekeeping.`,
            "Your family has passed down a precious heirloom for generations, and it may help you on your journey.  What was it again?",
        ],
        choices: [
            {
                text: `A sword.  It might get you out of a sticky situation; of course, it might get you into one, too.  Also perfect for threatening ${role(
                    "arch rival"
                )}.`,
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
                text: `A flask.  It may help you deal with everything that's about to come your way, especially the crap ${role(
                    "arch rival"
                )} tends to fling.`,
                adds: [
                    {
                        name: "Flask",
                        description: `A flask.  It may help you deal with everything that's about to come your way, especially the crap ${role(
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
        text: [
            "Awesome, I'm sure that'll come in handy later!",
            `Are you ready, ${role(
                "player"
            )}?  Your very own adventure is about to unfold!`, // Pokemon
        ],
        choices: [
            {
                text: "Let's do this!",
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
        text: [
            "You awaken to see you're sitting in a cart, hands bound, with a few others.",
            `A man across from you says "Hey, you; you're finally awake.  The name's ${role(
                "male friend"
            )}.  Everybody should have a friend like me."`, // Skyrim, Starship Troopers
        ],
        choices: [
            {
                text: `Where is ${role(
                    "female friend"
                )}?  Is she safe?  Is she alright?`, // Star Wars
                next: "stage_022_who",
            },
            {
                text: `Call me ${role("player")}.`, // Moby Dick
                next: "stage_024_niceToMeetYou",
            },
            {
                text: "I need a drink.",
                requires: ["flask"],
                next: "stage_026_needADrink",
            },
        ],
    },
    stage_022_who: {
        text: `${role(
            "male friend"
        )} gives you a blank look.  "Who?  Never heard of her.  Well, anyways."`,
        choices: [
            {
                text: "So, uh... what are we doing here, exactly?",
                next: "stage_040_soWhatAreWeDoingHere",
            },
        ],
    },
    stage_024_niceToMeetYou: {
        text: `"${role(
            "player"
        )}, eh?  Cool, that'll be easy to remember; my father's brother's nephew's cousin's former roommate is named ${role(
            "player"
        )}, too."`, // Spaceballs
        choices: [
            {
                text: "So, uh... what are we doing here, exactly?",
                next: "stage_040_soWhatAreWeDoingHere",
            },
        ],
    },
    stage_026_needADrink: {
        text: `"Me too, man; say, you wouldn't happen to have a flask squirreled away somewhere, would you?  I've had ${role(
            "arch rival"
        )} on my mind lately and could really use a distraction."`,
        choices: [
            {
                text: "(Lie) Sadly, no; I wish I did.",
                next: "stage_037_dontHaveADrink",
            },
            {
                text: "I do, but I'm saving it.",
                requires: ["flask"],
                next: "stage_038_savingIt",
            },
            {
                text: "Sure do!  Help yourself.",
                requires: ["flask"],
                next: "stage_039_gaveADrink",
            },
        ],
    },
    stage_037_dontHaveADrink: {
        text: `"That's too bad..." ${role(
            "male friend"
        )}'s face saddens for a moment before he perks back up.  "Oh well."`,
        choices: [
            {
                text: "So, uh... what are we doing here, exactly?",
                next: "stage_040_soWhatAreWeDoingHere",
            },
        ],
    },
    stage_038_savingIt: {
        text: [
            `"For today, I guarantee it.  They're carting us off to be executed; no point saving it any longer."`, // Jurassic Park
            `${role(
                "male friend"
            )}'s face saddens for a moment before he perks back up and retrieves your flask.`,
            `"Oh well, nothing else to be done about it now, right?  Cheers!"`,
        ],
        choices: [
            {
                text: "So, uh... what are we doing here, exactly?",
                next: "stage_040_soWhatAreWeDoingHere",
            },
        ],
    },
    stage_039_gaveADrink: {
        text: [
            `${role(
                "male friend"
            )}'s face lights up and he retrieves your flask.  "Cheers!"`,
            `He takes a sip, then aggressively wipes his lips.  "Ahh, that's the good stuff."`,
            `He then offers you a sip.`, // Zelda (drinking from a bottle)
        ],
        choices: [
            {
                text: "So, uh... what are we doing here, exactly?",
                next: "stage_040_soWhatAreWeDoingHere",
            },
        ],
    },
    stage_040_soWhatAreWeDoingHere: {
        text: [
            `"Oh, right!  Uh... so, you've met me, ${role(
                "male friend"
            )}.  This here's, uh..."`,
            `He motions to a man's corpse seated next to you.`,
            `"What was his name again?  Jim-Bob?  Bob-Joe?  Who cares; dude's dead.  And that there's the leader of the resistance, Tommy Oliver.  Say hi, Tommy."`, // Power Rangers
            `${role(
                "male friend"
            )} motions to a gagged man, who makes a grunt of acknowledgement.  "We're all on our way to... wherever they're taking us to execute us, I guess."`, // Football on your phone (who cares; dude's dead)
        ],
        choices: [
            {
                text: "Shouldn't we, you know... try to escape?",
                next: "stage_045_shouldntWeTryToEscape",
            },
        ],
    },
    stage_045_shouldntWeTryToEscape: {
        text: `"No, I thought we'd just sit here chatting and twiddling our thumbs forever, if that's alright with you... Of course we'd better start working on a way out of here; somebody's gotta save ${role(
            "love interest"
        )}!"`,
        choices: [
            {
                text: "Wait... who?",
                next: "stage_048_explainLoveInterest",
            },
        ],
    },
    stage_048_explainLoveInterest: {
        text: `"Oh, right, you're new here.  ${role(
            "love interest"
        )} has been taken prisoner by ${role(
            "arch rival"
        )}, and it's our job to rescue them!  Well, my job anyways, but you seem like good people; I'll take you with me!"`,
    },
};
let currentStage = {};

const storyPromptHeader = document.getElementById("story-prompt-header");
const storyPromptBody = document.getElementById("story-prompt-body");
const storyButtonGroup = document.getElementById("story-button-group");

window.onpopstate = function () {
    // eslint-disable-next-line no-undef
    handleNavClick("story");
    setStoryStage(window.location.hash.substring(1));
};

const makeMultiLine = function (str) {
    if (Array.isArray(str)) {
        return "<p>" + str.join("</p><p>") + "</p>";
    } else {
        return makeMultiLine([str]);
    }
};

// Good thing you grabbed that ____ earlier!
// Too bad you don't have a ____...
// Default outline-primary.  If requires an item you have, outline-success.  If uses up an item you have, outline-danger.  If requires or uses up an item you don't have, outline-secondary disabled.
const setStoryStage = function (stage) {
    currentStage = story[stage];
    window.location.hash = `${stage}`;
    if (currentStage.title) {
        storyPromptHeader.innerHTML = currentStage.title;
    }
    storyPromptBody.innerHTML = makeMultiLine(currentStage.text);
    // declared globally
    // eslint-disable-next-line no-undef
    clearChildren(storyButtonGroup);
    if (currentStage.choices) {
        currentStage.choices.forEach((choice, index) => {
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("href", `#${choice.next}`);
            button.classList.add("btn");
            let type = "outline-primary";
            let missingItems = [];
            let requiresSome = false;
            let usesUpSome = false;
            if (choice.requires && choice.requires.length > 0) {
                requiresSome = true;
                choice.requires.forEach((req) => {
                    // hasItem defined globally
                    // eslint-disable-next-line no-undef
                    if (!hasItem(req)) {
                        missingItems.push(req);
                    }
                });
            }
            if (choice.usesUp && choice.usesUp.length > 0) {
                usesUpSome = true;
                choice.usesUp.forEach((use) => {
                    // hasItem defined globally
                    // eslint-disable-next-line no-undef
                    if (!hasItem(use)) {
                        missingItems.push(use);
                    }
                });
            }
            button.innerHTML = choice.text;
            if (missingItems.length > 0) {
                type = "outline-secondary";
                button.classList.add("disabled");
                button.innerHTML = `${
                    button.innerHTML
                }  If only you'd grabbed that <b>${missingItems.join(
                    "</b> and that <b>"
                )}</b> earlier...`;
            } else if (requiresSome) {
                type = "outline-success";
            } else if (usesUpSome) {
                type = "outline-danger";
            }
            button.classList.add(`btn-${type}`);

            if (missingItems.length === 0) {
                button.addEventListener("click", () => {
                    handleStoryClick(index);
                });
            }
            storyButtonGroup.appendChild(button);
        });
    }
    // we use this to replace role names in text.
    // eslint-disable-next-line no-undef
    handlePartySave();
};

const handleStoryClick = function (index) {
    if (currentStage.choices[index].usesUp) {
        currentStage.choices[index].usesUp.forEach((use) => {
            // eslint-disable-next-line no-undef
            removeItem(use);
        });
    }
    if (currentStage.choices[index].adds) {
        currentStage.choices[index].adds.forEach((add) => {
            // eslint-disable-next-line no-undef
            addItem(add.name, add.description);
        });
    }
    setStoryStage(currentStage.choices[index].next);
};

setStoryStage("stage_000_startingEquipment");
