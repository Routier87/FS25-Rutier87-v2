/* ==========================================
FS25 MANAGER V2
DASHBOARD JS
========================================== */


function updateDashboard(){


let maps=getMaps();


let money=0;


let fields=0;


let animals=0;



maps.forEach(map=>{


money += Number(map.argent);


fields += map.champs?.length || 0;


animals += map.animaux?.length || 0;


});



if(document.getElementById("nombreMaps"))

document.getElementById("nombreMaps").innerText=
maps.length;



if(document.getElementById("argentTotal"))

document.getElementById("argentTotal").innerText=
money.toLocaleString("fr-FR")+" €";



if(document.getElementById("nombreChamps"))

document.getElementById("nombreChamps").innerText=
fields;



if(document.getElementById("nombreAnimaux"))

document.getElementById("nombreAnimaux").innerText=
animals;


}



updateDashboard();
