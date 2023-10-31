// https://64486933e7eb3378ca2e0f51.mockapi.io/api/users

const clientName = document.getElementById('personName');
const testimony = document.getElementById('testimony');
const clientPicture = document.getElementById('clientPicture');

onStartup = function () {
    document.querySelector("#updateButton").onclick = (event) => {
        updateClient();
    }
    updateClient();
}

function getRandomInt() {
    let rand = Math.random();
    rand *= 10;
    return Math.ceil(rand);
}

function clearText() {
    clientName.innerHTML = "";
    testimony.innerHTML = "";
}

function processText(text) {
    text = text.replaceAll(". ", "!!!\n")
    return text.replaceAll(".", "!!!");
}

function textToArray(text) {
    const array = text.split("\n");
    return array;
}

function appendText(textArray) {
    for (let i = 0; i < textArray.length; i++) {
        testimony.innerHTML = testimony.innerHTML + `<span>${textArray[i]} <br></span>`;
    }
}

async function updateClient() {
    let id = getRandomInt();
    console.log(id);
    let response = await fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users?id=${id}`);
    let data = await response.json();
    let testimonyName = data[0].name;
    let avatar = data[0].avatar;
    let message = data[0].message;

    clearText();

    clientName.innerHTML = `${testimonyName}`;
    clientPicture.src = `${avatar}`;
    clientPicture.alt = `${testimonyName}'s Submitted Picture`;

    message = processText(message);
    message = textToArray(message)
    appendText(message);
}

onStartup();