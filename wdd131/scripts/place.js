var temp = 10;
var wSpeed = 5;
var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);

if (temp == 10 && wSpeed > 4.8){
    document.getElementById("windChill").innerHTML = windChill
  } else {
    document.getElementById("windChill").innerHTML = "N/A";
}




const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;
document.getElementById('lastModified').innerText = modifiedYear;