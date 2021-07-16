var url = "";
function download() {
    setTimeout(() => {
        console.log("Started");
        url = "https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg";
        var img = document.createElement('img');
        img.src = url;
        img.alt = "no img";
        document.body.append(img);
        console.log('finished');
    },5000)
}
download();