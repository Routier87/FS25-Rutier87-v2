/* ==========================================
FS25 MANAGER V2
ANIMALS JS
========================================== */


function saveAnimals(){


let animals=[];



document
.querySelectorAll(".animals input:checked")
.forEach(box=>{


animals.push(box.value);


});



currentMap.animaux=animals;


saveCurrentMap();


}
