"use strict";

function rolldice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
    const numOfDice = document.getElementById("numOfDice").value;
    const diceresult = document.getElementById("diceresult");   
    const diceimages = document.getElementById("diceimages");
    const values = [];  
    const images = [];  

    for (let i = 0; i < numOfDice; i++) {
        values.push(rolldice());
        images.push(`<img src="images/dice${values[i]}.png" alt="dice${values[i]}">`);
    }
    diceresult.innerHTML = `You rolled: ${values.join(", ")}`;
    diceimages.innerHTML = images.join("");
}
