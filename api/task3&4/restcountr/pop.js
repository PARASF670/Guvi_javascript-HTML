var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function () {
    var sum = 0;
    var countrydata = JSON.parse(this.response);
    var country = countrydata.filter(function (item) {
        return item.population<200000;
    })
    console.log(country);


}
