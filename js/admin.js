/* ==========================================
   FS25 MANAGER V2
   ADMIN JS
========================================== */


// ===============================
// VARIABLES
// ===============================


let adminUser = localStorage.getItem("adminUser") || "Routier87";

let adminPass = localStorage.getItem("adminPass") || "878787";


let maps = JSON.parse(localStorage.getItem("maps")) || [];


let editIndex = null;



// ===============================
// CONNEXION ADMIN
// ===============================


function connectAdmin(){


    let user = document.getElementById("adminUsername").value;

    let pass = document.getElementById("adminPassword").value;


    if(user === adminUser && pass === adminPass){


        document.getElementById("loginPage").style.display="none";


        document.getElementById("adminPanel").style.display="block";


        chargerDashboard();


        afficherMaps();



    }

    else{


        document.getElementById("loginMessage").innerHTML =
        "❌ Identifiant incorrect";


    }


}





// ===============================
// DASHBOARD
// ===============================


function chargerDashboard(){


    document.getElementById("totalMaps").innerHTML =
    maps.length;



    let argent = 0;


    let champs = 0;


    let animaux = 0;



    maps.forEach(map=>{


        argent += Number(map.argent || 0);


        champs += (map.champs || []).length;


        animaux += (map.animaux || []).length;


    });



    document.getElementById("totalMoney").innerHTML =
    argent.toLocaleString("fr-FR")+" €";


    document.getElementById("totalFields").innerHTML =
    champs;


    document.getElementById("totalAnimals").innerHTML =
    animaux;


}







// ===============================
// AFFICHAGE MAPS
// ===============================


function afficherMaps(){


let zone = document.getElementById("mapsList");


zone.innerHTML="";



maps.forEach((map,index)=>{



zone.innerHTML += `


<div class="mapAdminCard">


<div>

<h3>${map.nom}</h3>

<p>
💰 ${map.argent.toLocaleString("fr-FR")} €
</p>


</div>



<div>


<button onclick="editMap(${index})">

✏️

</button>



<button onclick="deleteMap(${index})">

🗑️

</button>


</div>


</div>


`;



});


}







// ===============================
// AJOUT MAP
// ===============================


function showAddMap(){


editIndex=null;



document.getElementById("mapName").value="";

document.getElementById("mapMoney").value="20000";

document.getElementById("mapDescription").value="";



window.scrollTo({

top:document.getElementById("mapEditor").offsetTop,

behavior:"smooth"

});


}









// ===============================
// MODIFIER MAP
// ===============================


function editMap(index){


editIndex=index;


let map = maps[index];



document.getElementById("mapName").value =
map.nom;


document.getElementById("mapMoney").value =
map.argent;


document.getElementById("mapDescription").value =
map.description || "";



window.scrollTo({

top:document.getElementById("mapEditor").offsetTop,

behavior:"smooth"

});



}









// ===============================
// SAUVEGARDER MAP
// ===============================


function saveMap(){


let nom =
document.getElementById("mapName").value;



let argent =
Number(document.getElementById("mapMoney").value);



let description =
document.getElementById("mapDescription").value;



let objectifs=[];


document.querySelectorAll(
"#mapEditor input[type='checkbox']"
)

.forEach(box=>{


if(box.checked){


objectifs.push(
box.parentElement.innerText.trim()
);


}



});






let nouvelleMap = {


nom:nom,


argent:argent,


image:"../images/maps/default.jpg",


description:description,


objectifs:objectifs,


animaux:[],


cultures:[],


champs:[],


historique:[]


};







if(editIndex===null){


maps.push(nouvelleMap);


}

else{


maps[editIndex]=nouvelleMap;


}






sauvegarder();


afficherMaps();


chargerDashboard();



alert("✅ Map enregistrée");


}









// ===============================
// SUPPRESSION
// ===============================


function deleteMap(index){


if(confirm("Supprimer cette map ?")){


maps.splice(index,1);


sauvegarder();


afficherMaps();


chargerDashboard();


}



}









// ===============================
// IDENTIFIANT
// ===============================


function changeUsername(){


let nouveau =
prompt(
"Nouvel identifiant :",
adminUser
);



if(nouveau){


adminUser=nouveau;


localStorage.setItem(
"adminUser",
adminUser
);


}


}









// ===============================
// MOT DE PASSE
// ===============================


function changePassword(){


let nouveau =
prompt(
"Nouveau mot de passe :"
);



if(nouveau){


adminPass=nouveau;


localStorage.setItem(
"adminPass",
adminPass
);


}



}









// ===============================
// SAUVEGARDE
// ===============================


function sauvegarder(){


localStorage.setItem(
"maps",
JSON.stringify(maps)
);


}






console.log(
"FS25 Manager Admin V2 chargé"
);
