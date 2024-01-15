const apiUrl = "https://official-joke-api.appspot.com/random_joke";

async function getJokeData() {
    try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        return jsonData;
    }
    catch (error) {
        console.error("Network error: ", error);
    }
}
const apiData = await getJokeData();
const result1El = document.querySelector("#result1");
const result2El  = document.querySelector("#result2");

result1El.textContent = apiData.setup;
result2El.textContent = apiData.punchline;