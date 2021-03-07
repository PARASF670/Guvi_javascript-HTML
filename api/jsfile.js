var request = new XMLHttpRequest();
var URL;
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function () {
    var sum = 0;
    var countrydata = JSON.parse(this.response);
    for (i in countrydata) {
        sum = sum + countrydata[i].population;
    }
    console.log('Total poulation ', sum);
}


