var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function () {
    try {
        var countrydata = JSON.parse(this.response);
        if (countrydata.length == 250)
            throw new ReferenceError("length is 250");
    }
    catch (error) {
        alert(error.name);        
    }
}
