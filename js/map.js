/* ==========================================
   FS25 MANAGER V2
   MAP JS
========================================== */


let selectedMap =
Number(localStorage.getItem("selectedMap")) || 0;


let maps = getMaps();


let currentMap = maps[selectedMap];



if(!currentMap){

    currentMap = createDefaultMap();

    maps.push(currentMap);

    saveMaps(maps);

}




// ===============================
// AFFICHAGE
// ===============================


function loadMap(){


document.getElementById("mapName").innerText =
currentMap.nom;


document.getElementById("mapImage").src =
currentMap.image ||
"../images/maps/default.jpg";


document.getElementById("money").innerText =
currentMap.argent.toLocaleString("fr-FR")+" €";


document.getElementById("currentMoney").innerText =
currentMap.argent.toLocaleString("fr-FR")+" €";


document.getElementById("notes").value =
currentMap.notes || "";



}



loadMap();





// ===============================
// ARGENT
// ===============================


function refreshMoney(){


document.getElementById("money").innerText =
currentMap.argent.toLocaleString("fr-FR")+" €";


document.getElementById("currentMoney").innerText =
currentMap.argent.toLocaleString("fr-FR")+" €";


saveCurrentMap();


}




function saveCurrentMap(){


maps[selectedMap]=currentMap;


saveMaps(maps);


}







// ===============================
// NOTES
// ===============================


document
.getElementById("notes")
.addEventListener("input",function(){


currentMap.notes=this.value;


saveCurrentMap();


});








// ===============================
// FAVORIS
// ===============================


let favorite =
document.getElementById("favoriteButton");


if(favorite){


favorite.onclick=function(){


currentMap.favorite =
!currentMap.favorite;


favorite.innerHTML =
currentMap.favorite ? "⭐" : "☆";


saveCurrentMap();


};


}
