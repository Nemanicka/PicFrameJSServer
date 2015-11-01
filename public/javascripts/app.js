var socket = new WebSocket("ws://127.0.0.1:8080");


function nextPic()
{
	console.log(socket);
	
	socket.send("next");
//	httpGetAsync("http://localhost:8080", function(text) {console.log(text)}, "xxxdata=lol")
}

function httpGetAsync(theUrl, callback, data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(data);
}
