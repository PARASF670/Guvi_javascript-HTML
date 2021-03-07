var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function () {

    var countrydata = JSON.parse(this.response);
    var pop = countrydata.reduce(function (total, item) {
        total += item.population;
    return total  
    }, 0);
    console.log(pop);


}
