chrome.browserAction.onClicked.addListener(checkIfBgRun);

function checkIfBgRun {
	var popups = chrome.extension.getViews({type: "popup"});
	if (0 < popups.length)
		popups[0].variable = 42;
}
