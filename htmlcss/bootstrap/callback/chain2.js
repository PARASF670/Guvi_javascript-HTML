async function display() {
    try {
        var word = await fetch('https://random-word-api.herokuapp.com/word?number=1')
        var fword = await word.json();
        var originalword = fword[0];
        console.log(originalword);
        var gif=await fetch("https://api.giphy.com/v1/gifs/search?api_key=sZpnyaDvnKSp6TpWF8C9sQmtKTEPyFEx&q=" + originalword + "&limit=5&offset=0&rating=g&lang=en")
        var gifjson = await gif.json();
        console.log(gifjson.data[0])
        var fgif = gifjson.data[0].images.original.url;
        if (fgif) {
            var object = document.createElement('object');
            object.data = fgif;
            document.body.append(object);
        } 
           
    }
    catch(err) {
        console.log(err);
        document.body.append(err);
    }
}
display();
        
