var log = function(str) {
	chrome.tabs.executeScript({code: "console.log('" + str +"');"});
}
/*
document.getElementById('sc').onclick = function() {
	var ACCESS_TOKEN = "f3b7ca48e223e45ba106e9c44ff9e31466fb26ca";
	var requestUrl = "https://api.github.com/users/"+localStorage['name']+"/following?access_token="+ACCESS_TOKEN;
	log(requestUrl);
	//Javascript変数定義
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.onreadystatechange = function() {
	    var READYSTATE_COMPLETED = 4;
	    var HTTP_STATUS_OK = 200;

	    if( xmlHttpRequest.readyState == READYSTATE_COMPLETED
	     && xmlHttpRequest.status == HTTP_STATUS_OK )
	    {
			log("result");
	        var data = eval( '(' + xmlHttpRequest.responseText + ')' );

	        if( xmlHttpRequest.getResponseHeader( 'Content-Type' ) == 'application/json' ) {
	            // JavaScriptオブジェクトとしてJSONデータを取得する
	        }
	    }
	}

	xmlHttpRequest.open( 'GET', requestUrl );
	xmlHttpRequest.send( null );
}
*/

var saveSettings = function() {
	log("saveSettings");
    var name = document.getElementById('name').value;
    localStorage['name'] = name;
    var password = document.getElementById('password').value;
    localStorage['password'] = password;
};

//document.getElementById('authorize').onclick = function() {
var authorize = function() {
	// location.href = 'https://github.com/login/oauth/authorize?client_id=cd00dee9bd0f2d50ea8b&scope=user,public_repo';
	window.open('https://github.com/login/oauth/authorize?client_id=cd00dee9bd0f2d50ea8b&scope=user,public_repo','windowname','width=350,height=450');
	return false;
}

// OK
document.getElementById('ok_btn').onclick = function() {
	log("ok");
	authorize();
	saveSettings();
	document.getElementById('settings').style.visibility = "hidden";
	document.getElementById('settings').style.height = "0px";
	document.getElementById('popup').style.visibility = "";
}

document.getElementById('settings_btn').onclick = function() {
	log("settings");
	document.getElementById('settings').style.visibility = "";
	var popup = document.getElementById('popup');
	popup.style.visibility = "hidden";
	popup.style.height = "0px";

	document.getElementById('name').value = localStorage['name'] || "";
	document.getElementById('password').value = localStorage['password'] || "";
};

/*
//Javascript変数定義
var content ="";
$(document).ready(function(){
$.ajax({
    url: 'http://www.yahoo.co.jp/',//　http://から始まるURLを指定
    type: 'GET',
    success: function(res) {
		content = $(res.responseText);//○○.responseTextで取得
		console.log(content);
	}
	});
});
*/