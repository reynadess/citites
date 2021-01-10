var city = document.getElementById("city");
var stat = document.getElementById("state");

var http = new XMLHttpRequest();

http.open("GET", "cities.json", false);

http.send();

var data = JSON.parse(http.responseText);

function states(){
    var state = document.getElementById("state").value;
    var x="";
    for(var i=0; i<data.length; i++){
        if(state == data[i].state){
            x = x + data[i].name + " ,";
        }
        city.innerHTML=x;
    }
   
}
