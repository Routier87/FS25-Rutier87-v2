/* ==========================================
FS25 MANAGER V2
FIELDS JS
========================================== */


function addField(){


if(!currentMap.champs)

currentMap.champs=[];



let numero =
prompt("Numéro du champ");



let travail =
prompt("Travail à faire");



currentMap.champs.push({


numero:numero,


travail:travail,


etat:"🟠"


});



saveCurrentMap();


location.reload();


}






function displayFields(){


let table =
document.getElementById("fieldsTable");


if(!table)return;



table.innerHTML="";



currentMap.champs.forEach(field=>{


table.innerHTML += `


<tr>

<td>${field.numero}</td>

<td>${field.travail}</td>

<td>${field.etat}</td>

</tr>


`;



});


}



displayFields();
