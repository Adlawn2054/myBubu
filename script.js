document.addEventListener("DOMContentLoaded", function () {
    // Rename Inputs
    const bubuInput = document.getElementById("bubuInput");
    const duduInput = document.getElementById("duduInput");
    const bubuText = document.getElementById("bubuText");
    const duduText = document.getElementById("duduText");
  
    // Navigation Buttons
    const startBtn = document.getElementById("startBtn");
    const prevToIntroBtn = document.getElementById("prevToIntroBtn");
    const nextToLoveBtn = document.getElementById("nextToLoveBtn");
    const prevToStoryBtn = document.getElementById("prevToStoryBtn");
    const nextToTravelBtn = document.getElementById("nextToTravelBtn");
    const prevToLoveBtn = document.getElementById("prevToLoveBtn");
    const nextToEatBtn = document.getElementById("nextToEatBtn");
    const prevToTravelBtn = document.getElementById("prevToTravelBtn");
    const nextToCuddleBtn = document.getElementById("nextToCuddleBtn");
    const prevToEatBtn = document.getElementById("prevToEatBtn");
    const nextToFightBtn = document.getElementById("nextToFightBtn");
    const prevToCuddleBtn = document.getElementById("prevToCuddleBtn");
    const nextToArgumentBtn = document.getElementById("nextToArgumentBtn");
    const prevToFightBtn = document.getElementById("prevToFightBtn");
    const nextToHateBtn = document.getElementById("nextToHateBtn");
    const prevToArgumentBtn = document.getElementById("prevToArgumentBtn");
    const nextToSadBtn = document.getElementById("nextToSadBtn");
    const prevToHateBtn = document.getElementById("prevToHateBtn");
    const nextToMissBtn = document.getElementById("nextToMissBtn");
    const prevToSadBtn = document.getElementById("prevToSadBtn");
    const nextToMore2Btn = document.getElementById("nextToMore2Btn"); // You can add more screen logic here
    const prevToMissBtn = document.getElementById("prevToMissBtn");
    const prevToCallBtn = document.getElementById("prevToCallBtn");
    const prevToAngryBtn = document.getElementById("prevToAngryBtn");
    const prevToLonelyBtn = document.getElementById("prevToLonelyBtn");
    const nextToCallBtn = document.getElementById("nextToCallBtn");
    const nextToLonelyBtn = document.getElementById("nextToLonelyBtn");
    const nextToAgainBtn = document.getElementById("nextToAgainBtn");
    const nextToPissBtn = document.getElementById("nextToPissBtn");
    const prevToAgainBtn = document.getElementById("prevToAgainBtn");
    const nextToSorryBtn = document.getElementById("nextToSorryBtn");
    const prevToPissBtn = document.getElementById("prevToPissBtn");
    const nextToPakitpotBtn = document.getElementById("nextToPakitpotBtn");
    const prevToSorryBtn = document.getElementById("prevToSorryBtn");
    const nextToKissBtn = document.getElementById("nextToKissBtn");
    const prevToPakipotBtn = document.getElementById("prevToPakipotBtn");
    const nextToFinalBtn = document.getElementById("nextToFinalBtn");
    const prevToKissBtn = document.getElementById("prevToKissBtn");
    const nextToEndBtn = document.getElementById("nextToEndBtn");
    const prevToFinalBtn = document.getElementById("prevToFinalBtn");

    const nextToAngryBtn = document.getElementById("nextToAngryBtn");
  
    // Screens
    const screens = {
      introScreen: document.getElementById("introScreen"),
      storyScreen: document.getElementById("storyScreen"),
      loveScreen: document.getElementById("loveScreen"),
      travelScreen: document.getElementById("travelScreen"),
      eatScreen: document.getElementById("eatScreen"),
      cuddleScreen: document.getElementById("cuddleScreen"),
      fightScreen: document.getElementById("fightScreen"),
      argumentScreen: document.getElementById("argumentScreen"),
      hateScreen: document.getElementById("hateScreen"),
      sadScreen: document.getElementById("sadScreen"),
      missScreen: document.getElementById("missScreen"),
      callScreen: document.getElementById("callScreen"),
      angryScreen: document.getElementById("angryScreen"),
      lonelyScreen: document.getElementById("lonelyScreen"),
      againScreen: document.getElementById("againScreen"),
      pissScreen: document.getElementById("pissScreen"),
      sorryScreen: document.getElementById("sorryScreen"),
      pakipotScreen: document.getElementById("pakipotScreen"),
      kissScreen: document.getElementById("kissScreen"),
      finalScreen: document.getElementById("finalScreen"),
      endScreen: document.getElementById("endScreen"),
    };
  
    // Function to show specific screen
    function showScreen(screenId) {
      for (let screen in screens) {
        screens[screen].classList.add("hidden");
      }
      screens[screenId].classList.remove("hidden");
    }
  
    // Event Listeners for buttons
    startBtn.addEventListener("click", () => showScreen("storyScreen"));
    prevToIntroBtn.addEventListener("click", () => showScreen("introScreen"));
    nextToLoveBtn.addEventListener("click", () => showScreen("loveScreen"));
    prevToStoryBtn.addEventListener("click", () => showScreen("storyScreen"));
    nextToTravelBtn.addEventListener("click", () => showScreen("travelScreen"));
    prevToLoveBtn.addEventListener("click", () => showScreen("loveScreen"));
    nextToEatBtn.addEventListener("click", () => showScreen("eatScreen"));
    prevToTravelBtn.addEventListener("click", () => showScreen("travelScreen"));
    nextToCuddleBtn.addEventListener("click", () => showScreen("cuddleScreen"));
    prevToEatBtn.addEventListener("click", () => showScreen("eatScreen"));
    nextToFightBtn.addEventListener("click", () => showScreen("fightScreen"));
    prevToCuddleBtn.addEventListener("click", () => showScreen("cuddleScreen"));
    nextToArgumentBtn.addEventListener("click", () => showScreen("argumentScreen"));
    prevToFightBtn.addEventListener("click", () => showScreen("fightScreen"));
    nextToHateBtn.addEventListener("click", () => showScreen("hateScreen"));
    prevToArgumentBtn.addEventListener("click", () => showScreen("argumentScreen"));
    nextToSadBtn.addEventListener("click", () => showScreen("sadScreen"));
    prevToHateBtn.addEventListener("click", () => showScreen("hateScreen"));
    nextToMissBtn.addEventListener("click", () => showScreen("missScreen"));
    prevToSadBtn.addEventListener("click", () => showScreen("sadScreen"));
    prevToMissBtn.addEventListener("click", () => showScreen("missScreen"));
    prevToCallBtn.addEventListener("click", () => showScreen("callScreen"));
    prevToAngryBtn.addEventListener("click", () => showScreen("angryScreen"));
    nextToCallBtn.addEventListener("click", () => showScreen("callScreen"));
    nextToAngryBtn.addEventListener("click", () => showScreen("angryScreen"));
    nextToLonelyBtn.addEventListener("click", () => showScreen("lonelyScreen"));
    prevToLonelyBtn.addEventListener("click", () => showScreen("lonelyScreen"));
    nextToAgainBtn.addEventListener("click", () => showScreen("againScreen"));
    nextToPissBtn.addEventListener("click", () => showScreen("pissScreen"));
    prevToAgainBtn.addEventListener("click", () => showScreen("againScreen"));
    nextToSorryBtn.addEventListener("click", () => showScreen("sorryScreen"));
    prevToPissBtn.addEventListener("click", () => showScreen("pissScreen"));
    nextToPakitpotBtn.addEventListener("click", () => showScreen("pakipotScreen"));
    prevToSorryBtn.addEventListener("click", () => showScreen("sorryScreen"));
    nextToKissBtn.addEventListener("click", () => showScreen("kissScreen"));
    prevToPakipotBtn.addEventListener("click", () => showScreen("pakipotScreen"));
    nextToFinalBtn.addEventListener("click", () => showScreen("finalScreen"));
    prevToKissBtn.addEventListener("click", () => showScreen("kissScreen"));
    nextToEndBtn.addEventListener("click", () => showScreen("endScreen"));
    prevToFinalBtn.addEventListener("click", () => showScreen("FinalScreen"));

  
    // Handle Renaming Bubu and Dudu
    bubuInput.addEventListener("input", function () {
      const name = bubuInput.value.trim() || "Bubu";
      bubuText.textContent = `Hi! I'm ${name}`;
      updateNarrationNames(name, duduInput.value.trim() || "Dudu");
    });
  
    duduInput.addEventListener("input", function () {
      const name = duduInput.value.trim() || "Dudu";
      duduText.textContent = `Hi! I'm ${name}`;
      updateNarrationNames(bubuInput.value.trim() || "Bubu", name);
    });
  
    // Function to update names in narration (optional)
    function updateNarrationNames(bubuName, duduName) {
      const loveNarration = document.getElementById("loveNarration");
      loveNarration.textContent = `${bubuName} and ${duduName} love each other!`;
      // You can add similar updates for other narration texts if needed.
    }
  });
  