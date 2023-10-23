document.getElementById('fetchData').addEventListener('click', function () {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('dataContainer').innerHTML = `
            <p><strong>Joke:</strong> ${data.value}</p>
            <p><strong>URL:</strong> ${data.url}</p>
            `;
        })
        .catch(error => {
            console.error("There was an error fetching data:", error);
        });
});