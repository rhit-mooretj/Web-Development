const fromIndex = document.getElementById('fromIndex');
const toIndex = document.getElementById('toIndex');

document.addEventListener('DOMContentLoaded', async () => {
    setList();
});

async function setList() {
    try {
        const response = await fetch('http://localhost:3000/api/getmonths');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const months = await response.json();
        const monthsList = document.getElementById('months');
        monthsList.innerHTML = '';
        months.forEach(month => {
            let li = document.createElement('li');
            li.innerText = month;
            monthsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching months:', error);
    }
}

document.getElementById('reset').addEventListener('click', function () {
    fetch(`http://localhost:3000/api/setmonths`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            "months": ["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"

            ]
        })
    })
        .then(response => response.json())
        .then(data => {
            setList();
        })
        .catch(error => {
            console.error("There was an error fetching data:", error);
        });
});

document.getElementById('move').addEventListener('click', function () {
    console.log(toIndex.value);
    fetch(`http://localhost:3000/api/move/${fromIndex.value}/${toIndex.value}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT"
    })
        .then(response => response.json())
        .then(data => {
            setList();
        })
        .catch(error => {
            console.error("There was an error fetching data:", error);
        });
});