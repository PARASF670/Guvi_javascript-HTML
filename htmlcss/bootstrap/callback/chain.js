fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        var word = result[0];
        console.log(word);
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=sZpnyaDvnKSp6TpWF8C9sQmtKTEPyFEx&q=${result[0]}&limit=1&offset=0&rating=g&lang=en
        `)
    })
    .then((fres) => {
        return fres.json();
    })
    .then((fresult) => {
        console.log(fresult);
    })
    .catch((err) => {
        console.log(err);
    })
    