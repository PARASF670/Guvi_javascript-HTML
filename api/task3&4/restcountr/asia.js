var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function () {
    var sum = 0;
    var countrydata = JSON.parse(this.response);
    countrydata.forEach((element) => {
        if (element.currencies[0].symbol === '$')
            console.log(element);
    })



}

