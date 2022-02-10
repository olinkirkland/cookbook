window.addEventListener('click', openModal);
document.getElementById('modalCategories').onclick = function () {
    hideModal()
}

function openModal(e){
    
    let targetID = e.target.parentElement.id;

    let link = "#"
    let imgSrc = "data/imgCategories/impress.jpg"

    let tvArray = ["Vikings", "Harry Potter", "Herr der Ringe", "Game of Thrones", "The Walking Dead", "Spiderman"];
    let seasonsArray = ["Frühling", "Ostern", "Sommer", "Herbst", "Winter", "Weihnachten"];
    let countriesArray = ["Deutschland", "Österreich", "Russland", "Amerika", "Spanien", "Mexiko", "Afrika", "Japan", "England"];
    let topHundredArray = ["Top 10", "Top 100", "Top 10 Deutschland", "Top 100 Deutschland"];
    let partiesArray = ["Kindergeburtstag", "Karneval", "18. Geburtstag", "Silvester", "Jubiläum"];
    let impressArray = ["3 Gänge", "4 Gänge", "5 Gänge"];
    let wtfArray = ["GIVE ME MEAT", "Veggie"];
    let healthyArray = ["Diabetiker", "LowCarb", "LowFat", "Low Calories", "HighCarb", "HighProtein"];
    let dataArray = [tvArray, seasonsArray, countriesArray, topHundredArray, partiesArray, impressArray, wtfArray, healthyArray];

    if(targetID != ""){
        if(targetID != "categories"){
            if(document.querySelector(`#${targetID}`)){
                document.getElementById("modalCategories").style.display = "unset";
            }
        }
    }

    switch(targetID){
        case "catergorieTv":
            for(let i = 0; i < dataArray[0].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[0][i]}</a>`
            }
            break;
        case "categorieSeasons":
            for(let i = 0; i < dataArray[1].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[1][i]}</a>`
            }
            break;
        case "categorieCountries":
            for(let i = 0; i < dataArray[2].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[2][i]}</a>`
            }
            break;
        case "categorieTopHoundred":
            for(let i = 0; i < dataArray[3].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[3][i]}</a>`
            }
            break;
        case "categorieParties":
            for(let i = 0; i < dataArray[4].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[4][i]}</a>`
            }
            break;
        case "categorieImpress":
            for(let i = 0; i < dataArray[5].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[5][i]}</a>`
            }
            break;
        case "categorieWTF":
            for(let i = 0; i < dataArray[6].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[6][i]}</a>`
            }
            break;
        case "categorieHealthy":
            for(let i = 0; i < dataArray[7].length; i++){
                document.getElementById("modalCategoriesInnerGrid").innerHTML = document.getElementById("modalCategoriesInnerGrid").innerHTML +
                `<a href="${link}" style="background-image: url('${imgSrc}');" class="modalSecondaryCategories">${dataArray[7][i]}</a>`
            }
            break;
        default:
            break;
    }

    return;

}