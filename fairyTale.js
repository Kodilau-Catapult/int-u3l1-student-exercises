// 1. Create a variable named `place` and set the value to a string that says whatever place you want.

// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.

// 3. Create a variable named `color` and set the value to a string that says whatever color you want.

// 4. Create a variable named `color2` and set the value to a string that says a different color you want.

// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.

// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.

// 7. Create a variable named `number` and set the value to a number greater than 1.

// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.

// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.

// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.

// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.

// 12. Create a variable named `number2` and set the value to a number greater than 1.

let place = "The North Tower";
let creatureName = "Bin Laden";
let color = "red";
let color2 = "blue"
let emotion = "happy";
let character = "Steve"
let item = "bomb"
let item2 = "cheeto puff"
let verb = "eat"
let adverb = "happily"
let number2 = "2"
// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "The North Tower";
    document.querySelector(".creature-name").innerHTML = "Bin Laden";
    document.querySelector(".color").innerHTML = "red";
    document.querySelector(".color-2").innerHTML = "blue";
    document.querySelector(".emotion").innerHTML = "happy";
    document.querySelector(".character").innerHTML = "Steve";
    document.querySelector(".creature-name-again").innerHTML = "Bin Laden";
    document.querySelector(".number").innerHTML = "2";
    document.querySelector(".item").innerHTML = "bomb";
    document.querySelector(".character-again").innerHTML = "Steve";
    document.querySelector(".item-2").innerHTML = "Cheeto Puff";
    document.querySelector(".verb").innerHTML = "eat";
    document.querySelector(".adverb").innerHTML = "happily";
    document.querySelector(".number-2").innerHTML = "3";
    document.querySelector(".story-container").style = "display:block";
});
