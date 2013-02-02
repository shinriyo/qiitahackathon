var changeColor = function (color) {
	chrome.tabs.executeScript(null, { code: "document.body.style.backgroundColor='"+color+"'" });
}

document.getElementById('red').onclick = function() {
	changeColor('red');
};

document.getElementById('blue').onclick = function() {
	changeColor('blue');
};
var saveSettings = function() {
   var name = document.getElementById('name').value;
   localStorage['name'] = name;
   var password = document.getElementById('password').value;
   localStorage['password'] = password;
};

// OK
document.getElementById('ok_btn').onclick = function() {
	saveSettings();
	document.getElementById('settings').style.visibility = "hidden";
	document.getElementById('settings').style.height = "0px";
	document.getElementById('popup').style.visibility = "";
}

document.getElementById('settings_btn').onclick = function() {
	document.getElementById('settings').style.visibility = "";
	var popup = document.getElementById('popup');
	popup.style.visibility = "hidden";
	popup.style.height = "0px";
	document.getElementById('name').value = localStorage['name'] || "";
	document.getElementById('password').value = localStorage['password'] || "";
};