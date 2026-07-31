/* ==========================================
   FS25 MANAGER V2
   CALCULATOR JS
========================================== */


function addMoney(){


let value =
Number(document.getElementById("moneyInput").value);



if(value<=0)return;



currentMap.argent += value;



addHistory(
"Gain",
value
);



refreshMoney();



}



function removeMoney(){


let value =
Number(document.getElementById("moneyInput").value);



if(value<=0)return;



currentMap.argent -= value;



addHistory(
"Dépense",
-value
);



refreshMoney();



}




function addHistory(type,value){



if(!currentMap.historique){

currentMap.historique=[];

}



currentMap.historique.push({


type:type,


montant:value,


date:new Date()
.toLocaleDateString()


});



saveCurrentMap();



}
