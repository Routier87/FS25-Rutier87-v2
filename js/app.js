/* ==========================================
   FS25 MANAGER V2
   APP JS
========================================== */



// ===============================
// CHARGEMENT
// ===============================


let maps = getMaps();





const container =
document.getElementById("mapsContainer");







// ===============================
// AFFICHAGE DES MAPS
// ===============================


function displayMaps(liste = maps){



container.innerHTML="";



if(liste.length === 0){


container.innerHTML=`

<div class="empty">

<h2>
Aucune map enregistrée
</h2>

<p>
Ajoute ta première map depuis l'administration.
</p>

</div>

`;


return;

}






liste.forEach((map,index)=>{



let animaux =
(map.animaux || [])
.join(" ");



let objectifs =
(map.objectifs || [])
.join(" ");





container.innerHTML += `



<div class="mapCard">



<img 

src="${map.image || 'images/maps/default.jpg'}"

alt="${map.nom}"

>




<div class="mapContent">



<h2>

${map.nom}

</h2>



<div class="money">

💰 
${Number(map.argent).toLocaleString("fr-FR")}
€

</div>





<div class="icons">

${animaux}

${objectifs}

</div>





<button onclick="openMap(${index})">

Voir la partie

</button>



</div>



</div>



`;



});



}









// ===============================
// OUVRIR UNE MAP
// ===============================


function openMap(index){



localStorage.setItem(
"selectedMap",
index
);



window.location.href=
"pages/map.html";



}









// ===============================
// RECHERCHE
// ===============================


const search =
document.getElementById("searchInput");



if(search){



search.addEventListener(
"input",
function(){



let valeur =
this.value.toLowerCase();



let resultat =
maps.filter(map=>



map.nom
.toLowerCase()
.includes(valeur)



);



displayMaps(resultat);



});



}









// ===============================
// STATISTIQUES
// ===============================



function loadStats(){



let argent=0;

let champs=0;

let animaux=0;






maps.forEach(map=>{


argent +=
Number(map.argent || 0);



champs +=
(map.champs || []).length;



animaux +=
(map.animaux || []).length;



});






let mapsElement =
document.getElementById("nombreMaps");


if(mapsElement)
mapsElement.innerHTML =
maps.length;







let moneyElement =
document.getElementById("argentTotal");



if(moneyElement)

moneyElement.innerHTML =
argent.toLocaleString("fr-FR")+" €";







let fieldsElement =
document.getElementById("nombreChamps");


if(fieldsElement)

fieldsElement.innerHTML =
champs;







let animalsElement =
document.getElementById("nombreAnimaux");


if(animalsElement)

animalsElement.innerHTML =
animaux;



}









// ===============================
// MODE SOMBRE / CLAIR
// ===============================


const themeButton =
document.getElementById("themeButton");



if(themeButton){



themeButton.onclick=function(){



document.body.classList.toggle(
"light"
);



localStorage.setItem(

"theme",

document.body.classList.contains("light")

?



"light"

:

"dark"

);



};



}








// ===============================
// ADMIN
// ===============================


const adminButton =
document.getElementById("adminButton");



if(adminButton){



adminButton.onclick=function(){


window.location.href=
"pages/admin.html";



};



}








// ===============================
// AJOUT MAP
// ===============================


const addButton =
document.getElementById("addMapButton");



if(addButton){



addButton.onclick=function(){


window.location.href=
"pages/admin.html";


};



}









// ===============================
// INITIALISATION
// ===============================



displayMaps();

loadStats();





console.log(
"FS25 Manager App V2 chargé"
);
