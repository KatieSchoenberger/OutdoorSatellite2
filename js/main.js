//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1Ijoia2F0aWVzY2hvZW5iZXJnZXIiLCJhIjoiY2xhM3l0cGo3MDRlcDNubjhnbnJvdzdnZiJ9.FAtm7NHn8F5b8ADsn5VMQA' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var customeBasemap = L.tileLayer(mbStyleUrl, {id: 'katieschoenberger/cla3zb5h0000314pkoavprsw3', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [29.651634, -82.324829],//Coordinated to center the map
        zoom: 12, //zoom level
        layers:customeBasemap //basemap
    });
    
};

//calling the funcation
$(document).ready(createMap);