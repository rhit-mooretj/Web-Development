let currentOwl = "Hedwig";

main = function () {
    console.log("Ready");
    document.querySelector("#selectorButton").onclick = (event) => {
        console.log("Selector Hit");
        currentOwl == "Hedwig" ? currentOwl = "Pigwidgeon" : currentOwl = "Hedwig";
        console.log(`Current Owl: ${currentOwl}`);
        updateView();
    }
}

updateView = function () {
    document.querySelector("#owlName").innerHTML = `${currentOwl}`;
    const img = document.getElementById('owl');
    let filePath = "";
    currentOwl == "Hedwig" ? filePath = "images/hedwig.png" : filePath = "images/pigwidgeon.png";
    img.src = `${filePath}`;
    console.log(img)
}

main();