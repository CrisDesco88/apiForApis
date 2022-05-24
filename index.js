/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/
const mainContainerEl = document.getElementById("apis-container");
const categoriesEl = document.getElementById("categories");

async function getAPIs() {
    let response = await fetch('https://api.publicapis.org/entries');
    let data = await response.json();
    return data
}

function getApiHtml(myAPI) {
    return `
        <div class="my-api">
            <div class="my-api-name">
                <a class="api-link" href="${myAPI.Link}" target="_blank">${myAPI.API}</a>
            </div>
            <div class="my-api-category">
                <h2>Categoría</h2>
                <p>${myAPI.Category}</p> 
            </div>
            <div class="my-api-description">
                <h2>Descripción</h2>
                <p>${myAPI.Description}</p>
            </div>
            <div class="my-api-auth">Tipo de Auth: ${myAPI.Auth ? "🔐 " + myAPI.Auth : "🔓 Ninguna"}</div>
            <div class="my-api-https">HTTPS: ${myAPI.HTTPS ? "✅" : "❌"}</div>
        </div>
    `
}

function displayAPIs(myAPIs) {
    myAPIs =  myAPIs.entries.slice(0, 642);
    mainContainerEl.innerHTML = `
        <div class="apis-container">
            ${myAPIs.map(getApiHtml).join('')}
        </div>
    `  
}




getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))