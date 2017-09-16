document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('button1').addEventListener('click', startClick)
});

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('button2').addEventListener('click', endClick)
});



let curTab;

let startTime;
let endTime;

let variable = 30;

document.getElementById('URLlabel').innerHTML = variable;

function startClick() {
	startTime = new Date();
	
	/*chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		document.getElementById('URLlabel').innerHTML = extractHostname(tabs[0].url);
	});;*/
	
	document.getElementById('URLlabel').innerHTML = variable;
}


function endClick() {
	endTime = new Date();
	
	let timeElapsed = (endTime - startTime) / 1000;
	timeElapsed = Math.round(timeElapsed);
	document.getElementById('label1').innerHTML = 'Time Elapsed(s) = ' + timeElapsed;

}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
