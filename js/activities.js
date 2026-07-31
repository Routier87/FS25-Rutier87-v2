/* ==========================================
FS25 MANAGER V2
ACTIVITIES JS
========================================== */


function saveActivities(){


let activities=[];



document
.querySelectorAll(".activities input:checked")
.forEach(box=>{


activities.push(box.value);


});



currentMap.objectifs=activities;


saveCurrentMap();


}
