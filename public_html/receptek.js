
var receptekTomb = [];

$(function () {

   $("article").on("click", "div", kattintottEtel);
     
   
   $.ajax(
            {url: "recept.json", success: function (result) {
                    console.log(result);
                    receptekTomb = result;
//                   
                    megjelenitRecept();
                     
                    
//                    
                }});
  
    });



    



function megjelenitRecept(){
   $("article").empty();
    for (var elem in receptekTomb) {
        var etelAdatai ="<p><b>Étel megnevezése: </b> "+receptekTomb[elem]["nev"]+"</p>\n\
                          <p><b>Kategória:</b> "+receptekTomb[elem]["kategoria"]+"</p>\n\
                          <p> <b>Elkészítési ideje:</b> "+receptekTomb[elem]["elkeszitesi_ido"]+"</p>\n\
                           <img src='" + receptekTomb[elem]['eleresi_ut'] + "' alt='" + receptekTomb[elem]['eleresi_ut'].slice(6,receptekTomb[elem]['eleresi_ut'].length-4) + "' >\n\
                            <p><b>Ára:</b> "+receptekTomb[elem]["ar"]+" Ft</p>\n\
                           <p><b>Db:</b> <input type='text' id='"+receptekTomb[elem]["nev"]+"_db'></p>\n\
                            <div id=gombok><input type='button' class='modosit' index='"+elem+"' value='Módosít'><input type='button' class='torol' index='"+elem+"' value='Töröl'></div>";
                        $("article").append("<div id='"+receptekTomb[elem]["nev"]+"'>"+etelAdatai+"</div>");
         
                        }    

    }

function kattintottEtel(){
     $("aside").empty();
     $("aside").remove("#kivalasztott_kaja");
    var etelID = $(this).attr("id");
    var i =0;
    kovetkezo = false;
    while(i<receptekTomb.length && !kovetkezo){
      
        if(etelID === receptekTomb[i].nev){
         kovetkezo = true;
         var etelAdatai ="<h3>A kiválasztott étel:</h3><p><b>Étel megnevezése:</b> "+receptekTomb[i].nev+"</p>\n\
                          <p><b>Kategória:</b> "+receptekTomb[i].kategoria+"</p>\n\
                          <p> <b>Elkészítési ideje:</b> "+receptekTomb[i].elkeszitesi_ido+"</p>\n\
                           <img src='" + receptekTomb[i].eleresi_ut + "' alt='" +  receptekTomb[i].eleresi_ut.slice(6, receptekTomb[i].eleresi_ut.length-4) + "' >\n\
                            <p><b>Ára:</b> "+ receptekTomb[i].ar+" Ft</p>";
          $("aside").append("<div id='kivalasztott_kaja'>"+etelAdatai+"</div>");
        }
          i++;
    }
    $("aside img").addClass("asideKepFormazas");   
    
    
    
}

