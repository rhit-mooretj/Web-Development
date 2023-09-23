let counter = 0;
let color = "blue";

main = function () {
    console.log("Ready");
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };

    document.querySelector("#blueButton").onclick = (event) => {
        console.log("blue button");
        color = "blue";
        updateColor();
    };
    document.querySelector("#greenButton").onclick = (event) => {
        console.log("green button");
        color = "green";
        updateColor();
    };
    document.querySelector("#redButton").onclick = (event) => {
        console.log("red button");
        color = "red";
        updateColor();
    };
    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("purple button");
        color = "purple";
        updateColor();
    };
}

updateView = function () {
    document.querySelector("#counterText").innerHTML = `${counter}`
}

updateColor = function () {
    document.querySelector("#colorBoxText").innerHTML = `${color}`
    document.getElementById("colorContainer").style.backgroundColor = `${color}`;
}

main();