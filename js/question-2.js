const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const infoDiv = document.querySelector(".info");

async function gameInfo() {

    const response = await fetch(url);

    const data = await response.json();
   
    const result = data.results;

    console.log(result)
    
    infoDiv.innerHTML = "";

    for (let i = 0; i < result.length; i++) {

        if (i === 8) {
            break;
        }

        infoDiv.innerHTML += `<p>${result[i].name}</p><p>${result[i].rating}</p><p>${result[i].tags.length}</p>`;
    }
}

gameInfo();