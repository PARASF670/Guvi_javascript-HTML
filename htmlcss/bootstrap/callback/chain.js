fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        let word = result[0];
        console.log(word);
        return fetch("https://api.giphy.com/v1/gifs/search?api_key=sZpnyaDvnKSp6TpWF8C9sQmtKTEPyFEx&q=" + word + "&limit=5&offset=0&rating=g&lang=en")
        
    })
        .then((fresponse) => {
            return fresponse.json();
    })
    .then((fresult) => {
        console.log(fresult.data[0].images.original.url);
       // var path = fresult.data[0].images.original.url;
        setimage(fresult.data[0].images.original.url);
    })
    .catch((err) => {
        console.log(err);
    })

function setimage(path) {
    console.log("path is " + path);
    document.body.style.backgroundImage = "url(" + path + ")";
    document.body.style.backgroundPosition = "center center" ;
    document.body.style.backgroundRepeat = "repeat";
    // var image=document.createElement("div")
    // image.setAttribute("class",myid)
    // document.getElementsByClassName("myid").src = path;
    // document.getElementsByClassName("myid").alt = "no image";
    // document.body.append(image);
 }