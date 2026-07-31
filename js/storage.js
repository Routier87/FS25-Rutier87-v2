/* ==========================================
   FS25 MANAGER V2
   STORAGE JS
========================================== */


// ===============================
// CHARGEMENT DES MAPS
// ===============================


function getMaps(){

    let data = localStorage.getItem("maps");


    if(data){

        return JSON.parse(data);

    }


    return [];

}







// ===============================
// SAUVEGARDE DES MAPS
// ===============================


function saveMaps(maps){


    localStorage.setItem(
        "maps",
        JSON.stringify(maps)
    );


}







// ===============================
// AJOUTER UNE MAP
// ===============================


function addMap(map){


    let maps = getMaps();


    maps.push(map);


    saveMaps(maps);


}







// ===============================
// MODIFIER UNE MAP
// ===============================


function updateMap(index,map){


    let maps = getMaps();


    if(maps[index]){


        maps[index]=map;


        saveMaps(maps);


    }


}







// ===============================
// SUPPRIMER UNE MAP
// ===============================


function removeMap(index){


    let maps=getMaps();


    maps.splice(index,1);


    saveMaps(maps);


}







// ===============================
// RECUPERER UNE MAP
// ===============================


function getMap(index){


    let maps=getMaps();


    return maps[index];


}







// ===============================
// CREER UNE MAP PAR DEFAUT
// ===============================


function createDefaultMap(){


return {


nom:"Nouvelle Map",


image:"images/maps/default.jpg",


argent:20000,


description:"",


objectifs:[],


animaux:[],


cultures:[],


champs:[

{


numero:"1",

travail:"",

etat:""

}

],


historique:[

{


type:"Départ",

montant:20000,

date:new Date().toLocaleDateString()

}

],


favorite:false



};


}







// ===============================
// EXPORT SAUVEGARDE
// ===============================


function exportBackup(){


let data=getMaps();



let fichier=new Blob(

[
JSON.stringify(data,null,2)
],

{
type:"application/json"
}

);



let lien=document.createElement("a");


lien.href=
URL.createObjectURL(fichier);



lien.download=
"FS25_Manager_backup.json";



lien.click();


}







// ===============================
// IMPORT SAUVEGARDE
// ===============================


function importBackup(event){


let fichier =
event.target.files[0];



if(!fichier)
return;



let lecteur =
new FileReader();



lecteur.onload=function(e){



let data =
JSON.parse(e.target.result);



saveMaps(data);



alert(
"✅ Sauvegarde importée"
);



location.reload();



};



lecteur.readAsText(fichier);



}







// ===============================
// PARAMETRES ADMIN
// ===============================


function getAdmin(){


return {


username:
localStorage.getItem("adminUser")
||"Routier87",



password:
localStorage.getItem("adminPass")
||"878787"



};


}







function saveAdmin(data){


localStorage.setItem(
"adminUser",
data.username
);



localStorage.setItem(
"adminPass",
data.password
);



}







console.log(
"FS25 Manager Storage chargé"
);
