async function dummy() {
    try {
        var p = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pYoT3yopZbquBOP3kbvTm6CCGUoixskp');
        var resp = await p.json();
        console.log(resp);
    }
    

    catch (error) {
        console.log(error);
    }
}
dummy();