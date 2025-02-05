function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");   
    const diceImages = document.getElementById("diceImages");
    const values = [];  
    const images = [];  
    let total = 0;

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; 
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);           
        total += value;
        console.log(total);
    }
  

    diceResult.innerHTML = `You Rolled: ${values.join(", ")} which = ${total}`;
    diceImages.innerHTML = images.join("");
}
