function bestBear() {
    let favBear = prompt("What type of bear is best?");
    if (favBear == "black bear"){
        return "...It's true"
    }
    else {
        return "Wrong! Black bear."
    }
}

function tryAgain() {
    let favAnimal = prompt("Guess my favorite land animal? wolf bear tiger");
    while (favAnimal != "wolf"){
        answer = prompt("Nope! Try again!");
        console.log("Nope! Try again!")
        if (answer == "wolf"){
            return "WOW! You're great at this!"
        }
    }
    return "WOW! You're great at this!"
}

function incCount() {
    console.log ("incCount()");
}

function ratePage(){
    let starRate = prompt("Rate my page! 1-5");
    for (let i = 1; i <= starRate; i++){
        document.write("<img class='wolf-pic' src='wolf.jpg'/>");
    }
}