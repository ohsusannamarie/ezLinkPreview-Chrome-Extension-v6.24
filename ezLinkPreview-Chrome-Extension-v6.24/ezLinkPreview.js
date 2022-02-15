(function() {

  injectJs = function(js) {
    var script;
    script = document.createElement("script");
    script.type = "text/javascript";
    script.text = '(' + js + ')()';
    return document.documentElement.appendChild(script);
  };


	  if (top != self){
		var theDomain = location.hostname.toLowerCase();
		//	injectJs('window.alert = function(){}');
		if (theDomain.indexOf('talkgadget') < 0 && theDomain.indexOf('google') < 0 ) {

			js = function() {
				var facebook, oldSelf, topCount;
				oldSelf = self;
				topCount = 1;
				facebook = window.location.hostname === "www.facebook.com";
				return Object.defineProperty(window, 'self', {
				  get: function() {
					if (facebook) {
					  if (!!window.si_cj) {
						return top;
					  }
					} else if (topCount) {
					  topCount--;
					  return top;
					}
					return oldSelf;
				  }
				});
			};
			injectJs(js);
		}

		/*
		//handle google plus
		problemDomains = {
			'plus.google.com': 1
		};
		if (problemDomains[document.domain]) {
			window.stop();
			httpRequest = new XMLHttpRequest();
			alertContents = function() {
				var newHtml;
				if (httpRequest.readyState === 4) {
					if (httpRequest.status === 200) {
						document.open();
					try {
						newHtml = httpRequest.responseText.replace("==top", "==window").replace("top==", "window==");
						return document.write(newHtml);
					} finally {
						document.close();
					}
					} else {
						return console.log('ez Ajax error');
					}
				}
			};
			httpRequest.onreadystatechange = alertContents;
			httpRequest.open('GET', location.href);
			httpRequest.send();
		}
		*/


  }


}).call(this);


var gview_URL = 'http://docs.google.com/viewer?url=';
var gmail_URL = 'https://mail.google.com';
var pattern = new RegExp('^[^\\?#]+\\.(pdf|ppt|pps|tif|xls|xlsx|pptx|pages|ai|psd|dxf|svg|eps|ps|ttf|xps)((#|\\?).*)?$', 'i');
var patternNOPDF = new RegExp('^[^\\?#]+\\.(ppt|pps|tif|xls|xlsx|pptx|pages|ai|psd|dxf|svg|eps|ps|ttf|xps)((#|\\?).*)?$', 'i');
var patternIMG = new RegExp('^[^\\?#]+\\.(png|jpg|jpeg|gif|bmp)((#|\\?).*)?$', 'i');
var $ezDiv;
var $ezDivSearch;
var $ezDialog;
var $ezPlusOne;
var IsShown = false;
var originalTop;
var originalLeft;
var defPinned = false;
var myport;
var IsClosing = false;
var JustClosed = false;
var clTimeoutID;
var enteredOnce = false;
var DefWidth = 0;
var DefHeight = 0;
var moTimeoutID;
var muTimeoutID;
var searchTitleText = 'Search Selected Text';
var DraggingNow = false;
var DefaultPreview = '2';
var DefaultIconLoc = '2';
var DefaultTabClose = '2';
var filterUrls = [];
var newtabUrls = [];
var DelayTimeEZ = 700;
var DefaultReader = '2';
var DefaultBookmark = '2';
var ezGReaderWIN;
var DefaultPloc = '0';
var SelGReaderText = '';
var DefaultAction = '2';
var DefaultSelText = '2'
var DefaultSearch = '0';
var DefaultPreviewType = '2';
var DefaultPDF = '2';
var IsLeftFrame = false;
var currentExtLink = '';
var currentExtLinkTitle = '';
var currentExtLinkDesc = '';
var DefaultKS = '2';
var IsRightFrame = false;
var DefLeft = '50';
var IsHistorized = false;
var HideEZIcon = false;
var DefaultVis = '2';
var IconSize = '16';
var CustSearch = '';
var AutosplitUrls = [];
var ViewTextUrls = [];
var DefTitlebar = '2';
var ezx = 4;
var ezy = 6;
var CloseOnLeave = '2';
var DefaultImage = '2';
var DefaultShortcuts = '2';
var DefaultClickOutside = '2';
var DefaultPinp = '2';
var DefaultGoogbar = '2';
var DefaultPioh = '2';

var engineJSON = { "engines": [
		{ "type": "Dogpile", "name": "", "url": "", "img": "" },
		{ "type": "Bing", "name": "", "url": "", "img": "" },
		{ "type": "Yahoo", "name": "", "url": "", "img": "" },
		{ "type": "Wiki", "name": "", "url": "", "img": "" },
		{ "type": "Video", "name": "", "url": "", "img": "" },
		{ "type": "Amazon", "name": "", "url": "", "img": "" },
		{ "type": "Dictionary", "name": "", "url": "", "img": "" },
		{ "type": "Baidu", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "Urbandictionary", "url": "https://www.textise.net/showText.aspx?strURL=http://www.urbandictionary.com/define.php?term={0}", "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABEElEQVQoz2N8kaTEQApgYSAR0EADl9lHHrv3//8wvp4gT5SGnze52eR/sKt/Rdggkv2YifPv+5USvx9ziBY8ZGBggBjGKvuD3+81M/+fP69ZUZz0Zb8gf8BrVsmfvx9zfL/Ey231ASInGP3871vWjxtEed3eomj4cY2Hz+sNhP9lnxBEA6vsD0aW/x9WSfz9yMLE8xeuB90PHFpfIAxm3j8MDAx/P7LgDCUu00/fTvGzKX1nYGBg5v/z4xoPf8BrPp/Xn7aIwn3MwMDACIlpLrOPvC7vGJj+///BxMjxj4GB4c1kOU7jT9wWHxkYGP7/YoQIvmxRYkROGhxaX35c48F0JLIgihMxVWMKDoa0hAYASMtjsxfzB1oAAAAASUVORK5CYII=" },
		{ "type": "Custom", "name": "DuckDuckGo", "url": "http://duckduckgo.com/?q={0}", "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACRklEQVQ4y42SP0xTURTGv/t4VCkCioNxURZorUKMCw7EBSUxREedlEVJbBTjQOImmoigEVKwNaEiNS6m8c+gCYmJDIQEm2hSStJEMA4Oksorr63A68O+9zmUvva1DJ7kDPfec373+3KOIInSyMQiDzj96bYZX4IZXwYASJ5mSJ4WSGc7n9a1tXtL60UpIBUYozH2DNC3sGPsckDuu4IGb5+oAKiXemjORfA/IXW0Y9/LF8ICpALjNB75AQD1oSCq3C5QVaFNhqC/frcjpKrfi73ePiFIIuluY0G2dPgQnN5eVJ/pBLI6tPEAsuE3gGFU2KkOB0fl1PAgSz3XjTyEfOK4da4dvAexpxZacMoO0LdgTs/ckhlfsks74rafr3+Efu1cJQAA498gF0ZlXWYykPtnYTzpAgAYo8dgrs3AeVVBVYsOrEv4c/cgAMCML0Mup+YWYlYzf90Ek4G85W4gt+DE5tR+W70seZphziaLgNgiHF2n8wDtC7heg43xBuRiNeCGZGsWnmbIwtMCzH4uUbBYnHfTe2hvj8LpXYVwEMZPBzZHDsBYkbcBLoj0wvydvxd6BwqTEPX1aIxGAJFfNvXkKZiJ3xC7TTArlY1xYgokofp9VJpcVoaiQ0xoCZLkj4vnOeDrtr0rTS6qfh9J7rzKj8MdUAwZK9k0PFINvkPHRM/XoveOdjRurzJIWqn6fVRcrXz+4QYVTSFJrs3NFBW4Wq2fC2kDkEQ6Ov8qMxlkTs/SNE0aqwqTl3uoDt1nOjo/XF7/D4vVW1hGKL2vAAAAAElFTkSuQmCC" },
		{ "type": "Custom", "name": "StartPage", "url": "https://startpage.com/do/search?q={0}", "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACdklEQVQoz02SS0hVURSG/73PPr6lo+alojQ1owIzy4yCdJKVPRQibRD2wqRB9JhkUQ1KZ2lRCTWQSKWESwRJSEUQKCIJRVcsIiufFFnWDe/Vc89+rAZmuSZr/QvWx7/gZ429ntYABwCY2QHMmumgWc2gSdgQEQVjCAA0AEAzWOAgBbJCwZiBPjc7FwmONmQB0BBSQipwNgfHwAWlPGlZ1FxnhYIAxveeGNt/kQtognA9SAP23wzBwJJYeLduMnN1aNmaBc9afA9uIBj8XN1goiA8TZIA8/cBDkr81Jf6sh1A/6kmFe98Kapce77Y97zl24bSUF6hkJJcxWbQM8Zy2mpT+jtlvOMpSJeUk/b2SH3uzarYj4FfKwuFKxGRBDDG4YuFAeutbtrYUO4MB7Lu1QYO1HNASgCQCi6BHfW7UiE+CocK7PwlfMpDTUdETQQLr1ckjQTCqelj60ozOlvDqendp/3McdjB+66WuLzT9iWyFx/M0IQZDJIvjn0d/VlwrSJ5NODFOW/KLozk79Yxji1IKEk7VomMFH623fs+SWU51vEiG8Dgj9RL0/7i2xUpowFnKPC+oJJ5IA0hFZYmMwAF6XzrCishmoUiFPaQMZ9nZiV1HPOX3Cpf3tNKQHf5FdIQSqJrwGzKtPbkCgBP3+nmHpm72KrZZmsPYXveo8P+0jsVxkAqgmBsV+O0VMhL49k+3jWgGJAQw86VRIUjdLLNIwaAYqZ/R2IdgOxosC0NU5itfetF1WYbwMC4OfPQC00RrNkAzISGQUiP/u2Mwath83pIPw6oSZcMGBQ4BwBmAAAcbPvVKalpDmJuqhkBbM5BVDT7A9g1I3p6751XAAAAAElFTkSuQmCC" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" },
		{ "type": "Custom", "name": "", "url": "", "img": "" }
	]
};

var outerLayout, middleLayout, leftLayout;
function resizeAllLayouts() {
	middleLayout.resizeAll();
	leftLayout.resizeAll();
}


function ezPostLocationJS(pmsg) {
   if (document.readyState !== "complete") {
       //setTimeout("ezPostLocationJS('" + pmsg + "');", 100);
	   setTimeout('location.href = "javascript:' + pmsg + '";',400);
   } else {
       setTimeout('location.href = "javascript:' + pmsg + '";',40);
   }
}
function ezPostLocationFullJS(pmsg) {
   if (document.readyState !== "complete") {
       //setTimeout("ezPostLocationFullJS('" + pmsg + "');", 100);
	   setTimeout('location.href = "' + pmsg + '";',400);
   } else {
       setTimeout('location.href = "' + pmsg + '";',40);
   }
}

function ezNotify(msg) {
	try {
		chrome.extension.connect().postMessage({
			message: 'ezNotify', text: msg
		});
	} catch (err) {
		$.jGrowl(msg);
	}
}

String.prototype.ezStartsWith = function(t, i) {
    if (i==false)
        return (t == this.substring(0, t.length));
    else
        return (t.toLowerCase() == this.substring(0, t.length).toLowerCase());
}

function ezPresizeImage(){
	var $ezi = $('#ezLinkPreviewIMG');
	var iw = $ezi.width();
	var ih = $ezi.height();

	var dw = $ezDialog.width() - 28;
	var dh = $ezDialog.height() - 14;

	if (iw > dw || ih > dh){

		var diffW = dw / iw;
		var diffH = dh / ih;

		if (diffW > diffH){
			iw *= diffH;
			ih *= diffH;
		} else {
			iw *= diffW;
			ih *= diffW;
		}

		$ezi.stop(true,true).animate({ 'width': iw, 'height': ih}, 350, 'swing');
	}
}

function ezZoomImage(IsZoomIn){
	var $ezi = $('#ezLinkPreviewIMG');
	var cw = $ezi.width();
	var ch = $ezi.height();
	if (IsZoomIn){
		cw *= 1.2;
		ch *= 1.2;
	}
	else {
		cw *= 0.8;
		ch *= 0.8;
	}
	$ezi.stop(true,true).animate({ 'width': cw, 'height': ch}, 350, 'swing');
}

function ConvertNineToTwenty() {
	var tempEngineJSON = { "engines": [
			{ "type": engineJSON.engines[0].type, "name": engineJSON.engines[0].name, "url": engineJSON.engines[0].url, "img": engineJSON.engines[0].img },
			{ "type": engineJSON.engines[1].type, "name": engineJSON.engines[1].name, "url": engineJSON.engines[1].url, "img": engineJSON.engines[1].img },
			{ "type": engineJSON.engines[2].type, "name": engineJSON.engines[2].name, "url": engineJSON.engines[2].url, "img": engineJSON.engines[2].img },
			{ "type": engineJSON.engines[3].type, "name": engineJSON.engines[3].name, "url": engineJSON.engines[3].url, "img": engineJSON.engines[3].img },
			{ "type": engineJSON.engines[4].type, "name": engineJSON.engines[4].name, "url": engineJSON.engines[4].url, "img": engineJSON.engines[4].img },
			{ "type": engineJSON.engines[5].type, "name": engineJSON.engines[5].name, "url": engineJSON.engines[5].url, "img": engineJSON.engines[5].img },
			{ "type": engineJSON.engines[6].type, "name": engineJSON.engines[6].name, "url": engineJSON.engines[6].url, "img": engineJSON.engines[6].img },
			{ "type": engineJSON.engines[7].type, "name": engineJSON.engines[7].name, "url": engineJSON.engines[7].url, "img": engineJSON.engines[7].img },
			{ "type": engineJSON.engines[8].type, "name": engineJSON.engines[8].name, "url": engineJSON.engines[8].url, "img": engineJSON.engines[8].img },
			{ "type": "Custom", "name": "DuckDuckGo", "url": "http://duckduckgo.com/?q={0}", "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACRklEQVQ4y42SP0xTURTGv/t4VCkCioNxURZorUKMCw7EBSUxREedlEVJbBTjQOImmoigEVKwNaEiNS6m8c+gCYmJDIQEm2hSStJEMA4Oksorr63A68O+9zmUvva1DJ7kDPfec373+3KOIInSyMQiDzj96bYZX4IZXwYASJ5mSJ4WSGc7n9a1tXtL60UpIBUYozH2DNC3sGPsckDuu4IGb5+oAKiXemjORfA/IXW0Y9/LF8ICpALjNB75AQD1oSCq3C5QVaFNhqC/frcjpKrfi73ePiFIIuluY0G2dPgQnN5eVJ/pBLI6tPEAsuE3gGFU2KkOB0fl1PAgSz3XjTyEfOK4da4dvAexpxZacMoO0LdgTs/ckhlfsks74rafr3+Efu1cJQAA498gF0ZlXWYykPtnYTzpAgAYo8dgrs3AeVVBVYsOrEv4c/cgAMCML0Mup+YWYlYzf90Ek4G85W4gt+DE5tR+W70seZphziaLgNgiHF2n8wDtC7heg43xBuRiNeCGZGsWnmbIwtMCzH4uUbBYnHfTe2hvj8LpXYVwEMZPBzZHDsBYkbcBLoj0wvydvxd6BwqTEPX1aIxGAJFfNvXkKZiJ3xC7TTArlY1xYgokofp9VJpcVoaiQ0xoCZLkj4vnOeDrtr0rTS6qfh9J7rzKj8MdUAwZK9k0PFINvkPHRM/XoveOdjRurzJIWqn6fVRcrXz+4QYVTSFJrs3NFBW4Wq2fC2kDkEQ6Ov8qMxlkTs/SNE0aqwqTl3uoDt1nOjo/XF7/D4vVW1hGKL2vAAAAAElFTkSuQmCC" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" },
			{ "type": "Custom", "name": "", "url": "", "img": "" }
		]
	};
	return tempEngineJSON;
}



function ezSplitScreen(pUrl, TextToSearch){

	if (IsLeftFrame) {
		//post message to parent
		var msg = 'ezLink,'+ pUrl;
		if (TextToSearch && TextToSearch.length > 0)
			msg += ',' + TextToSearch;

		//location.href="javascript:top.postMessage('" + msg + "','*')";
		var fullpost = "javascript:top.postMessage('" + msg + "','*')";
		ezPostLocationFullJS(fullpost);
		return;
	}

	var curLoc = window.location.href;

	var sbStr1 = '<table cellpadding="0" cellspacing="0"  id="ezSearchBarSP" style="border: 0; vertical-align:bottom; padding-bottom: 2px;">';
    sbStr1 += '<tr>';
    sbStr1 += '<td style="padding-right: 1px; padding-left: 8px;" ><input id="eztxtSearchSP" type="text" style="width: 120px; font-size: 8pt; -webkit-border-radius: 8px; border: 0; padding-right: 4px; padding-left: 4px;" title="enter search term and click desired search engine" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss01" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[0]) + '" title="' + GetNameForEngine(engineJSON.engines[0]) + '" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss02" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[1]) + '" title="' + GetNameForEngine(engineJSON.engines[1]) + '" /> </td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss03" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[2]) + '" title="' + GetNameForEngine(engineJSON.engines[2]) + '" /> </td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss04" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[3]) + '" title="' + GetNameForEngine(engineJSON.engines[3]) + '" /> </td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss05" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[4]) + '" title="' + GetNameForEngine(engineJSON.engines[4]) + '" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss06" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[5]) + '" title="' + GetNameForEngine(engineJSON.engines[5]) + '" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss07" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[6]) + '" title="' + GetNameForEngine(engineJSON.engines[6]) + '" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss08" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[7]) + '" title="' + GetNameForEngine(engineJSON.engines[7]) + '" /></td>';
    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss09" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[8]) + '" title="' + GetNameForEngine(engineJSON.engines[8]) + '" /></td>';

	if (IsEngineDefined(engineJSON.engines[9]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss10" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[9]) + '" title="' + GetNameForEngine(engineJSON.engines[9]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[10]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss11" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[10]) + '" title="' + GetNameForEngine(engineJSON.engines[10]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[11]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss12" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[11]) + '" title="' + GetNameForEngine(engineJSON.engines[11]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[12]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss13" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[12]) + '" title="' + GetNameForEngine(engineJSON.engines[12]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[13]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss14" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[13]) + '" title="' + GetNameForEngine(engineJSON.engines[13]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[14]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss15" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[14]) + '" title="' + GetNameForEngine(engineJSON.engines[14]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[15]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss16" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[15]) + '" title="' + GetNameForEngine(engineJSON.engines[15]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[16]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss17" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[16]) + '" title="' + GetNameForEngine(engineJSON.engines[16]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[17]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss18" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[17]) + '" title="' + GetNameForEngine(engineJSON.engines[17]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[18]))
	    sbStr1 += '<td style="padding-right: 1px; "><img id="ezsss19" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[18]) + '" title="' + GetNameForEngine(engineJSON.engines[18]) + '" /></td>';
	if (IsEngineDefined(engineJSON.engines[19]))
	    sbStr1 += '<td style="padding-right: 2px; "><img id="ezsss20" width="14px" height="14px" class="ezSearchSplitClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[19]) + '" title="' + GetNameForEngine(engineJSON.engines[19]) + '" /></td>';

	sbStr1 += '</tr>';
    sbStr1 += '</table>';

/*
	var sbStr = '<div id="ezLPSplitter">';
	sbStr += '<div id="ezLPSplitterLeft" class="Pane">';
	sbStr += '<iframe id="ezLPSplitterLeftIF" name="ezLPSplitterLeftIF" width="100%" height="100%" border="0" src="about:blank"></iframe>';
	sbStr += '</div>';
	sbStr += '<div id="ezLPSplitterRight" class="Pane" >   <div id="ezLPSplitTITLEROW" style="position:absolute; left: 0; right: 0; top:0; width: 100%; height: 3px; opacity: 0.3;background-color: #111111"></div>';
	sbStr += '<table style="width: 100%; height: 100%; border: 0" cellpadding="0" cellspacing="0" >';
	sbStr += '<tr>';
	sbStr += '<td  style="height: 0.1%;" >';
	sbStr += '<table id="ezLPSplitTITLE" class="ezui-dialog-titlebar ezui-widget-header ezui-helper-clearfix" style="width: 100%; border: 0" cellpadding="0" cellspacing="0">';
	sbStr += '<tr><td >' + sbStr1 + '</td>';
	sbStr += '<td style="width: 95%; padding-left: 16px; padding-right: 16px;"><span class="ezui-dialog-title" id="ezui-dialog-title-ezLinkPreviewSPLIT" unselectable="on">URL</span></td>';

	sbStr += '<td><a id="ezLPSplitGBOOK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Send preview to Google Bookmarks" ><span class="ezui-icon-gbookmarks" unselectable="on">gbookmark</span></a></td>';
	sbStr += '<td><a id="ezLPSplitGREAD" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="+1 preview and/or share to Google+" ><span class="ezui-icon-greader" unselectable="on">greader</span></a></td>';
	sbStr += '<td><a id="ezLPSplitVIEWTEXT" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Send preview to ViewText.org for increased readability" ><span class="ezui-icon-viewtext" unselectable="on">ViewText</span></a></td>';

	sbStr += '<td><a id="ezLPSplitBACK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Back" ><span class="ezui-icon ezui-icon-triangle-1-w" unselectable="on">Back</span></a></td>';
	sbStr += '<td><a id="ezLPSplitFORWARD" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Forward" ><span class="ezui-icon ezui-icon-triangle-1-e" unselectable="on">Forward</span></a></td>';
	sbStr += '<td><a id="ezLPSplitEXTLINK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Open to new tab" ><span class="ezui-icon ezui-icon-extlink" unselectable="on">Link</span></a></td>';
	sbStr += '<td><a id="ezLPSplitCLOSE"  href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Close ezSplitView" ><span  class="ezui-icon ezui-icon-closethick" unselectable="on">Close</span></a></td>';
	sbStr += '</tr></table></td></tr>';
	sbStr += '<tr><td style="height: 99.9%;"><iframe id="ezLPSplitterRightIF" name="ezLPSplitterRightIF" width="100%" height="100%" border="0" src="about:blank"></iframe></td></tr></table>';
	sbStr += '</div>';
	sbStr += '</div> ';
*/


	var sbStr = '<div id="ezLPSplitterLeft" class="outer-west layout-content-container layout-child-container">';
	sbStr += '<iframe class="left-center" id="ezLPSplitterLeftIF" name="ezLPSplitterLeftIF" width="100%" height="100%" border="0" src="about:blank"></iframe>';
	sbStr += '</div>';

	sbStr += '<div id="ezLPSplitterRight" class="outer-center layout-child-container" >   <div id="ezLPSplitTITLEROW" style="position:absolute; left: 0; right: 0; top:0; width: 100%; height: 3px; opacity: 0.3;background-color: #111111"></div>';

	sbStr += '<div class="ui-layout-north layout-content-container layout-child-container">';
	sbStr += '<table id="ezLPSplitTITLE" class="ezui-dialog-titlebar ezui-widget-header ezui-helper-clearfix" style="width: 100%; border: 0" cellpadding="0" cellspacing="0">';
	sbStr += '<tr><td >' + sbStr1 + '</td>';
	sbStr += '<td style="width: 95%; padding-left: 16px; padding-right: 16px;"><span class="ezui-dialog-title" id="ezui-dialog-title-ezLinkPreviewSPLIT" unselectable="on">URL</span></td>';

	if (DefaultGoogbar != '1') {
		sbStr += '<td><a id="ezLPSplitGBOOK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Send preview to Google Bookmarks" ><span class="ezui-icon-gbookmarks" unselectable="on">gbookmark</span></a></td>';
		sbStr += '<td><a id="ezLPSplitGREAD" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Make a donation to support development of this extension" ><span class="ezui-icon-greader" unselectable="on">greader</span></a></td>';
	}

	sbStr += '<td><a id="ezLPSplitEMAIL" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Send link by email" ><span class="ezui-icon-email" unselectable="on">Email</span></a></td>';
	sbStr += '<td><a id="ezLPSplitVIEWTEXT" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Send preview to textise for increased readability" ><span class="ezui-icon-viewtext" unselectable="on">ViewText</span></a></td>';

	sbStr += '<td><a id="ezLPSplitBACK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Back" ><span class="ezui-icon ezui-icon-triangle-1-w" unselectable="on">Back</span></a></td>';
	sbStr += '<td><a id="ezLPSplitFORWARD" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Forward" ><span class="ezui-icon ezui-icon-triangle-1-e" unselectable="on">Forward</span></a></td>';
	sbStr += '<td><a id="ezLPSplitEXTLINK" href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Open to new tab" ><span class="ezui-icon ezui-icon-extlink" unselectable="on">Link</span></a></td>';
	sbStr += '<td><a id="ezLPSplitCLOSE"  href="#"  unselectable="on" class="ezui-corner-all" role="button" title="Close ezSplitView" ><span  class="ezui-icon ezui-icon-closethick" unselectable="on">Close</span></a></td>';
	sbStr += '</tr></table></div>';

	sbStr += '<iframe class="middle-center" id="ezLPSplitterRightIF" name="ezLPSplitterRightIF" width="100%" height="100%" border="0" src="about:blank"></iframe>';
	sbStr += '</div>';




	$ezSplitTbl = jQuery(sbStr);

	$('body').empty();
	$('body').append($ezSplitTbl);

	$('body').css({ 'overflow': 'hidden', 'padding': '0px', 'margin': '0px' });
	$('#ezLPSplitterRightIF').attr('src', pUrl);
	$('#ezLPSplitterLeftIF').attr('src', curLoc);

/*
	//initial left panel size
	try {
		var wid = $(window).width() * DefLeft / 100;
		if (wid < 20) wid = 20;
		$('#ezLPSplitterLeft').css('width', wid);
	}
	catch (errrr)
	{
		$('#ezLPSplitterLeft').css('width', $(window).width() / 2);
	}

	$("#ezLPSplitter").splitter({
		splitVertical: true,
		outline: true,
		anchorToWindow: true,
		sizeLeft: true
	});

*/

	var initWidthWest = Math.floor(screen.availWidth * 0.5);
	try{
		initWidthWest = Math.floor(screen.availWidth * DefLeft / 100);
	} catch (errrrr) {}
	if (initWidthWest < 25) initWidthWest = 25;

	outerLayout = $('body').layout({
		center__paneSelector: ".outer-center"
		, west__paneSelector: ".outer-west"
		, west__size: initWidthWest // % screen width
		, spacing_open: 11 // ALL panes
		, spacing_closed: 16 // ALL panes
		, maskIframesOnResize: false
		, center__onresize: function () { resizeAllLayouts(); }
		, onresize_end: function () { $('#ezLPSplitterRight').unblock(); $('#ezLPSplitterLeft').unblock(); }
	});
	middleLayout = $('div.outer-center').layout({
		center__paneSelector: ".middle-center"
		, north__spacing_open: 0
		, north__resizable: false
		, maskIframesOnResize: false

	});
	leftLayout = $('div.outer-west').layout({
		center__paneSelector: ".left-center"
		, maskIframesOnResize: false
	});

	$('.ui-layout-resizer').mouseup(function () {
		$('#ezLPSplitterRight').unblock();
		$('#ezLPSplitterLeft').unblock();
	}).mousedown(function () {
		$('#ezLPSplitterRight').block({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.1, fadeIn: 0 } });
		$('#ezLPSplitterLeft').block({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.1, fadeIn: 0} });
	});








	var $lastSearchButtonSP = $('#ezsss01');
	$("#eztxtSearchSP").keyup(function(e) {
		if(e.keyCode == 13) {
			$lastSearchButtonSP.click();
		}
	});


	/*
	$('#ezLPSplitTITLE').click(function() {
		try {

		if ($('#ezLPSplitTITLE').attr('height') == '2px') {
			$('#ezLPSplitTITLE').removeAttr('height');
		} else {
			$('#ezLPSplitTITLE').attr('height', '2px');
		}

		} catch (eeee) { }
	});
	*/

	$('#ezLPSplitTITLEROW').hide();
	$('#ezLPSplitTITLEROW').css("z-index","10000");
	$('#ezLPSplitTITLEROW').css('cursor', 'pointer');
	if (DefTitlebar == '1'){
		//hide the titlebar
		middleLayout.hide('north');
		//$('#ezLPSplitTITLE').hide();
		$('#ezLPSplitTITLEROW').show();
		$('#ezLPSplitTITLEROW').click(function() {
			try {
				middleLayout.show('north');
				//$('#ezLPSplitTITLE').show(500);
				$('#ezLPSplitTITLEROW').hide();
			} catch (eeee) { }
		});
	}

	$('.ezSearchSplitClickClass').click(function() {
		try {

			var currentId = $(this).attr('id');
			var lastTwo = currentId.substring(currentId.length - 2, currentId.length)
			var idx = parseInt(lastTwo, 10);
			idx--;

			$lastSearchButtonSP = $(this);
			var s = $('#eztxtSearchSP').val();
			var url = GetSearchURLForEngine(engineJSON.engines[idx], s);

			$('#ezLPSplitterRightIF').attr('src', url);

			DefaultSearch = idx + '';
			chrome.extension.connect().postMessage({
				message: 'SaveSearchEngine', SelectedText: idx + ''
			});
		} catch (eeee) { }
	});



	$('#ezLPSplitCLOSE').click(function(e) {
		e.preventDefault();
		window.top.location.reload();
		return false;
	});
	$('#ezLPSplitBACK').click(function(e) {
		e.preventDefault();
		try {
			history.back();
		} catch (eee) { }
		return false;
	});
	$('#ezLPSplitFORWARD').click(function(e) {
		e.preventDefault();
		try {
			history.forward();
		} catch (eee) { }
		return false;
	});

	$('#ezLPSplitEXTLINK').click(function(e) {
		e.preventDefault();
		try {
			var extURL = currentExtLink || $('#ezLPSplitterRightIF').attr('src');
			if (extURL && extURL.length > 0) {
				var IsFG = (e.which != 2);
				chrome.extension.connect().postMessage({
					message: 'tab', values: extURL, sel: IsFG
				});
			}
		} catch (eee) { }
		return false;
	});

	if (DefaultGoogbar != '1') {
		$('#ezLPSplitGBOOK').click(function(e) {
			e.preventDefault();
			try{
				ezGBookmarkPreview();
			} catch (eee) {}
			return false;
		});

		$('#ezLPSplitGREAD').click(function(e) {
			e.preventDefault();
			try{
				ezNoteInReaderPreview();
			} catch (eee) {}
			return false;
		});
	}

	$('#ezLPSplitVIEWTEXT').click(function(e) {
		e.preventDefault();
		try{
			var extURL = currentExtLink;
			var vtLoc = 'https://www.textise.net/showText.aspx?strURL=' + encodeURIComponent(extURL);
			if (document.getElementById("ezLPSplitterRightIF")){
				$('#ezLPSplitterRightIF').attr('src', vtLoc);
			}
			if (document.getElementById("ezLinkPreviewIFRAME")){
				$('#ezLinkPreviewIFRAME').attr('src', vtLoc);
			}

		} catch (eee) {}
		return false;
	});

	$('#ezLPSplitEMAIL').click(function(e) {
		e.preventDefault();
		try{
			var extURL = currentExtLink;
			var vtLoc = encodeURIComponent(extURL);
			window.open('mailto:?subject=ezLinkPreview+email+link&body=' + vtLoc);

		} catch (eee) {}
		return false;
	});

	//location.href="javascript:window.history.pushState({foo: 'ezLinkPreview'}, 'ezLP', 'ezLP.html');";

}



function ezShowDialog(url, title, TextToSearch){

	if (DefaultPreviewType != '2' && top == self){
		ezSplitScreen(url, TextToSearch);
		return;
	}

	if (IsLeftFrame)
	{
		ezSplitScreen(url, TextToSearch);
		return;
	}


	if ($ezDialog.dialog('isOpen') && $('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
		return;
	}

	$ezDialog.siblings('.ezui-dialog-titlebar').css({ paddingRight: '92px', fontSize: '7pt'});
	$('#ezLinkPreviewDIALOG').show();

	//google image search special case
	try{
		if ((url.indexOf('images.google.com') > -1 || url.indexOf('google.com/imgres') > -1) && url.indexOf('?imgurl=') > -1){
			var param = url.substring(url.indexOf('?')+1).split('#')[0].split('&')[0];
			var pair = param.split('=');
			var imgURL = (pair[1])? decodeURIComponent(pair[1]) : '';
			if (imgURL && imgURL.length > 0)
				url = imgURL;
		}
	}catch (eeGIMG) {}

	//bing image search special case
	try{
		if (url.indexOf('bing.com/images') > -1 && url.indexOf('furl=') > -1){
			var param = url.substring(url.indexOf('furl=')+5);
			var imgURL = param ? decodeURIComponent(param) : '';
			if (imgURL && imgURL.length > 0)
				url = imgURL;
		}
	}catch (eeBIMG) {}


	if (patternIMG.test(url)){
		//it is an image
		$ezDialog.siblings('.ezui-dialog-titlebar').css({ paddingRight: '140px'});
		$('#ezLinkPreviewZOOMOUT').show();
		$('#ezLinkPreviewZOOMIN').show();
		$('#ezLinkPreviewZOOMNORM').show();
		$('#ezLinkPreviewSEARCHBUTTON').hide();
		$('#ezLinkPreviewMINIMIZEBUTTON').hide();
		$('#ezLinkPreviewFORWARDBUTTON').hide();
		$('#ezLinkPreviewBACKBUTTON').hide();
		$('#ezLinkPreviewVTBUTTON').hide();
		$('#ezLinkPreviewGRBUTTON').hide();
		$('#ezLinkPreviewGBBUTTON').hide();
		$('#ezSearchBar').hide();
		$('#ezLinkPreviewIFRAME').attr('src', url).hide();
		$('#ezLinkPreviewIMG').attr('src', url).show();
		$('#ezLinkPreviewIMG').css({'width' : '', 'height' : ''});
		setTimeout("ezPresizeImage()", 600);
	} else {
		$('#ezLinkPreviewZOOMOUT').hide();
		$('#ezLinkPreviewZOOMIN').hide();
		$('#ezLinkPreviewZOOMNORM').hide();
		$('#ezLinkPreviewSEARCHBUTTON').show();
		$('#ezLinkPreviewMINIMIZEBUTTON').show(); //HIDE MINIMIZE BUTTON FOR NOW...
		$('#ezLinkPreviewBACKBUTTON').show();
		$('#ezLinkPreviewFORWARDBUTTON').show();
		$('#ezLinkPreviewVTBUTTON').show();
		$('#ezLinkPreviewGRBUTTON').show();
		$('#ezLinkPreviewGBBUTTON').show();
		$('#ezLinkPreviewIFRAME').attr('src', url).show();
		$('#ezLinkPreviewIMG').attr('src', '').hide();
		if (title == searchTitleText){
			$('#ezSearchBar').show();
		}
	}
	$ezDialog.dialog('option', 'title', title);

	//chrome.extension.connect().postMessage({
	//	message: 'GWH', inurl: url
	//});

	if (defPinned){
		if ($('#ezLinkPreviewPINSPAN').hasClass('ezui-icon-pin-w'))
			$('#ezLinkPreviewPINSPAN').removeClass('ezui-icon-pin-w').addClass('ezui-icon-pin-s');
	} else {
		if ($('#ezLinkPreviewPINSPAN').hasClass('ezui-icon-pin-s'))
			$('#ezLinkPreviewPINSPAN').removeClass('ezui-icon-pin-s').addClass('ezui-icon-pin-w');
	}

	if (!IsShown){
		var sWid = DefWidth > 50 ? DefWidth : $(window).width() * 2 / 3;
		var sHei = DefHeight > 50 ? DefHeight : $(window).height() * 2 / 3;

		if (window.parent != self){
			sWid = $(window).width() * 0.85;
			sHei = $(window).height() * 0.8;
		}
		$ezDialog.dialog('option', 'width',  sWid);
		$ezDialog.dialog('option', 'height',  sHei);
		IsShown = true;
	}

	if (!$ezDialog.dialog('isOpen')){
		$ezDialog.dialog('open');
		var $ezParent =  $ezDialog.parent();

		if (DefaultPloc == '1'){
			$ezDialog.dialog('option', 'position', ['right', 'bottom']);
			$ezParent.animate({top: '-=5'}, 500);
		}
		else if (DefaultPloc == '2'){
			$ezDialog.dialog('option', 'position', ['left', 'top']);
			$ezParent.animate({top: '+=5'}, 500);
		}
		else if (DefaultPloc == '3'){
			$ezDialog.dialog('option', 'position', ['left', 'bottom']);
			$ezParent.animate({top: '-=5'}, 500);
		}
		else if (DefaultPloc == '4'){
			$ezDialog.dialog('option', 'position', ['center', 'center']);
			$ezParent.animate({top: '-=5'}, 50).animate({top: '+=5'}, 500);
		}
		else
		{
			$ezDialog.dialog('option', 'position', ['right', 'top']);
			//$ezDialog.dialog('option', 'position', [xCoord, yCoord]);
			//$ezParent.animate({left: '-=10', top: '+=10'}, 500);
			$ezParent.animate({top: '+=4'}, 500);
		}

		setTimeout("adjustIFHeight()", 600);
		setTimeout("ezSavePosition()",600);
	}
}

function adjustIFHeight() {
	var h = $('#ezLinkPreviewDIALOG').height();
	var tht = 0;
	if ($('#ezSearchBar').is(':visible')) {
		tht = $('#ezSearchBar').height();
	}
	var nh = h - tht - 6;
	$('#ezLinkPreviewIFRAME').height(nh);
}

function ezSavePosition(){
	try{
		if ($ezDialog.dialog('isOpen') && !$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
			var st = $(document).scrollTop();
			var sl = $(document).scrollLeft();
			var p = $ezDialog.parent().offset();
			originalTop = p.top - st;
			originalLeft = p.left - sl;
		}
	} catch (eee) {}
}

function GetAbsURL(url){
	var aURL = url;
	//map link hrefs to absolute path
	try{
		var A = document.links;
		for (var i = 0; i < A.length; i++) {
			if ($(A[i]).attr('href') == url){
				aURL = A[i].href;
				break;
			}
		}
	}catch (eee) {}
	return aURL;
}

function SavePinnedValue(){

	if (window.parent != self) {return;}
	if ($ezDialog.dialog('isOpen') && !$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
		DefWidth = $ezDialog.dialog('option', 'width');
		DefHeight = $ezDialog.dialog('option', 'height');
		chrome.extension.connect().postMessage({
			message: 'setprefs', IsPinned: defPinned, DefWidth: DefWidth, DefHeight: DefHeight
		});
	}
}

function searchForText( toFind, frameToSearch ) {
	if( !toFind ) { return; }
	if( frameToSearch.focus ) { frameToSearch.focus(); }
	if( window.find ) {
		//Netscape compatible browsers provide the window.find method
		if( document.layers ) {
			//Against the JS spec, Netscape 4 will produce errors if too many arguments are given
			var ifFound = frameToSearch.find( toFind, false, false );
		} else {
			var ifFound = frameToSearch.find( toFind, false, false, true, false, true, false );
		}
	} else if( frameToSearch.document.body && frameToSearch.document.body.createTextRange ) {
		//IE or compatible use various TextRange features
		if( frameToSearch.document.selection && frameToSearch.document.selection.type != 'None' ) {
			//If some text is selected already (previous search or if they have selected it)
			//make that the text range. Then move to the end of it to search beyond it
			var theRange = frameToSearch.document.selection.createRange();
			theRange.collapse( false );
		} else {
			//If no text is selected, start from the start of the document
			var theRange = frameToSearch.document.body.createTextRange();
		}
		//find the next occurrence of the chosen string
		var ifFound = theRange.findText( toFind );
		if( ifFound ) { theRange.select(); }
	}
}


function ToggleEZIconSetting(port)
{
        port.postMessage(
        {
            message: "toggleIcon"
        });


		if (DefaultPreview == '2'){
			DefaultPreview = '1';
			ezNotify("ezLinkPreview will open on mouseover link.");
		}else{
			DefaultPreview = '2';
			ezNotify("ezLinkPreview will display the EZ icon on mouseover link.");
		}


		$("a").die( 'hover', ezLiveHoverFunc);
		$("a").live( 'hover', ezLiveHoverFunc);
}


var altDown = false;
var ctrlDown = false;
var oneDown = false;
var readerDown = false;
var bookmarkDown = false;
var viewTextDown = false;
var searchDown = false;
var hideIconDown = false;
function BindKeyDownToggleIcon(){

	$(window).keydown(function(event){

		//if (event.which == 27 && IsRightFrame && !JustClosed){ //'Esc'
			//Tell parent to close this dialog
		//	location.href="javascript:parent.postMessage('ezDialogClose','*')";
		//}

		if (DefaultShortcuts != '2')
			return;

		if (event.which == 18)
			altDown = true;
		else if (event.which == 17)
			ctrlDown = true;
		else if (event.which == 49)
			oneDown = true;
		else if (event.which == 219) //'['
			bookmarkDown = true;
		else if (event.which == 220) //'|'
			readerDown = true;
		else if (event.which == 222) // '''
			viewTextDown = true;
		else if (event.which == 83) //'s'
			searchDown = true;
		else if (event.which == 73) //'i' show/hide the ez icon
			hideIconDown = true;
		else if (event.which == 84) //'t' trello
			trelloIconDown = true;

		if (altDown && ctrlDown && oneDown){
			ToggleEZIconSetting(myport);
		}

		if (altDown && ctrlDown && trelloIconDown){
			var desc = '';
			var name = document.title ? document.title : '';
			if (getSelection){
				desc = getSelection().toString();
			}
			var url = window.location.href;

			ezTrelloCard(url, name, desc);

			altDown = false;
			ctrlDown = false;
			oneDown = false;
			readerDown = false;
			bookmarkDown = false;
			viewTextDown = false;
			searchDown = false;
			hideIconDown = false;
			trelloIconDown = false;
		}

		// Toggle whether to show the ez icon on the current page
		if (altDown && ctrlDown && hideIconDown){

			if (HideEZIcon == true){
				HideEZIcon = false;
				ezNotify("The ez icon will be shown on hover again (Press ctrl+alt+i to prevent the icon from being shown).");
			}
			else {
				HideEZIcon = true;
				ezNotify("The ez icon will be hidden until you press ctrl+alt+i again.");
			}

			altDown = false;
			ctrlDown = false;
			oneDown = false;
			readerDown = false;
			bookmarkDown = false;
			viewTextDown = false;
			searchDown = false;
			hideIconDown = false;
			trelloIconDown = false;
		}

		if (altDown && ctrlDown && readerDown){
			$('#ezLinkPreviewGREADER').click();

			altDown = false;
			ctrlDown = false;
			oneDown = false;
			readerDown = false;
			bookmarkDown = false;
			viewTextDown = false;
			searchDown = false;
			hideIconDown = false;
			trelloIconDown = false;
		}

		if (altDown && ctrlDown && bookmarkDown){
			$('#ezLinkPreviewGBOOKMARK').click();

			altDown = false;
			ctrlDown = false;
			oneDown = false;
			readerDown = false;
			bookmarkDown = false;
			viewTextDown = false;
			searchDown = false;
			hideIconDown = false;
			trelloIconDown = false;
		}

		if (altDown && ctrlDown && viewTextDown){

			if (!IsRightFrame){
				window.location = 'https://www.textise.net/showText.aspx?strURL=' + encodeURIComponent(window.location.href) + '#content';
			} else {
				location.href="javascript:parent.postMessage('ezViewText','*')";
			}

			altDown = false;
			ctrlDown = false;
			oneDown = false;
			readerDown = false;
			bookmarkDown = false;
			viewTextDown = false;
			searchDown = false;
			hideIconDown = false;
			trelloIconDown = false;
		}

		if (DefaultKS == '2') {
			if (altDown && ctrlDown && searchDown){

				$('#eztxtSearch').val('');

				var defIdx = 0;
				if (DefaultSearch && DefaultSearch.length > 0){
					try{
						defIdx = parseInt(DefaultSearch) || 0;
					}catch (errrrrr){}
				}
				var sUrl = GetSearchURLForEngine(engineJSON.engines[defIdx], '');
				ezShowDialog(sUrl,searchTitleText);

				altDown = false;
				ctrlDown = false;
				oneDown = false;
				readerDown = false;
				bookmarkDown = false;
				viewTextDown = false;
				searchDown = false;
				hideIconDown = false;
				trelloIconDown = false;
			}
		}

	});

	$(window).keyup(function(event){
		altDown = false;
		ctrlDown = false;
		oneDown = false;
		readerDown = false;
		bookmarkDown = false;
		viewTextDown = false;
		searchDown = false;
		hideIconDown = false;
		trelloIconDown = false;
    });
}


	var ezLiveHoverFunc = function ezLiveHover(e) {

	try{

		if ( e.type === "mouseenter" ) {
			//see if preview within prevew is disabled
			if (IsRightFrame && DefaultPinp != '2')
				return;

			var hrefAbs = '';
			var position = $(this).offset();
			var w = $(this).width();
			var href = $(this).attr('href');
			try {hrefAbs = GetAbsURL(href); } catch (eee1){}

			//twitter data-expanded-url...
			//var hrefEX = $(this).attr('data-expanded-url');
			//if (hrefEX && hrefEX.length > 4){
			//	hrefAbs = hrefEX;
			//}
			var tt = $(this).attr('title') ? $(this).attr('title') : href;

			if (tt.length > 85)
				tt = tt.substring(0, 85) + '...';

			try{
				if (!hrefAbs || hrefAbs.length < 1 || hrefAbs == 'undefined')
					hrefAbs = href;
			} catch (eee2) {}

			//ignore javascript, ftp, mailto, #
			if (href.ezStartsWith("javascript", false) || href.ezStartsWith("ftp", false) || href.ezStartsWith("mailto", false) || href.ezStartsWith("#", false)) {
				$ezDiv.stop(true, true).hide();
				$ezDiv.css({ "top": -20, "left": -20 });
				return;
			}
			//ignore zip files
			if (hrefAbs.substring(hrefAbs.length - 4, hrefAbs.length).toLowerCase() === ".zip"){
				$ezDiv.stop(true, true).hide();
				$ezDiv.css({ "top": -20, "left": -20 });
				return;
			}

			//ignore images according to option
			var IsAnImage = patternIMG.test(href);
			if (DefaultImage == '1' && IsAnImage){
				$ezDiv.stop(true, true).hide();
				$ezDiv.css({ "top": -20, "left": -20 });
				return;
			}

			//see if we need to view image on hover
			var DispOnHover = (DefaultImage != '1' && DefaultPioh == '1' && IsAnImage);


			if($.isUrlInternal(href)){
				$ezDiv.removeClass('ezLinkPreviewExternal').addClass('ezLinkPreviewInternal');
			}else{
				$ezDiv.removeClass('ezLinkPreviewInternal').addClass('ezLinkPreviewExternal');
			}

			if (DefaultPDF == '2') {
				//rewrite href to google docs viewer for pdf, ppt, pps, and tif
				if (!/^https?:\/\/docs.google.com\/viewer/.test(window.location.href) && pattern.test(hrefAbs)){
					hrefAbs = gview_URL + encodeURI(hrefAbs);
				}
			}
			else
			{
				//rewrite href to google docs viewer for ppt, pps, and tif
				if (!/^https?:\/\/docs.google.com\/viewer/.test(window.location.href) && patternNOPDF.test(hrefAbs)){
					hrefAbs = gview_URL + encodeURI(hrefAbs);
				}
			}

			var LoadIntoNewTab = InNewTabList(hrefAbs);

			if (self != top && LoadIntoNewTab){
				$(this).attr('target', '_blank');
			}

			//check if in ViewTextList
			hrefAbs = InViewTextList(hrefAbs);

			if (IsLeftFrame) {
				if (LoadIntoNewTab){
					chrome.extension.connect().postMessage({
						message: 'tab', values: hrefAbs, sel: true
					});
				} else {
					moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')",600);
				}
			}
			else if (defPinned && $ezDialog.dialog('isOpen')) {
				//auto load into open pinned dialog
				if (!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
					if (LoadIntoNewTab){
						chrome.extension.connect().postMessage({
							message: 'tab', values: hrefAbs, sel: true
						});
					} else {
						moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')",600);
					}
				}
			}
			else if (e.altKey) {

				if (LoadIntoNewTab){
					chrome.extension.connect().postMessage({
						message: 'tab', values: hrefAbs, sel: true
					});
				} else {
					if ($ezDialog.dialog('isOpen') && $('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
						$ezMinimizeButton.click();
					}
					ezShowDialog(hrefAbs , tt);
				}
				$ezDiv.stop(true, true).hide();

			}
			else if (DefaultPreview == '1' || DispOnHover){
				if (LoadIntoNewTab){
					chrome.extension.connect().postMessage({
						message: 'tab', values: hrefAbs, sel: true
					});
				} else {
					// show preview on hover without the link (after some delay: DelayTimeEZ)
					//moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')", 600);
					moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')", DelayTimeEZ);
				}
			}
			else {

				$ezDiv.stop(true, true).hide();
				if (!HideEZIcon){
					//$ezDiv.css({ "top": position.top - 6, "left": position.left + w + 4 });
					$ezDiv.css({ "top": position.top - ezy, "left": position.left + w + ezx });
					try{
						if (hrefAbs.indexOf('bing.com/images') > -1 && hrefAbs.indexOf('furl=') > -1){
							//bing image
							$ezDiv.css({ "top": position.top - 16, "left": position.left + w - 16 });
						}
					}catch (eeBIMG) {}


					//set location near the cursor if user selected this option
					if(DefaultIconLoc == '1'){
						var lx = e.pageX;
						var ly = e.pageY;
						$ezDiv.css({ "top": ly - 8, "left": lx + 20 });

					}

					//$ezDiv.fadeIn(500);  DelayTimeEZ
					//$ezDiv.delay(700).fadeIn(700);
					$ezDiv.delay(DelayTimeEZ).fadeIn(700);

					$ezDiv.unbind('click');
					$ezDiv.click(function(e) {
						e.preventDefault();
						if (LoadIntoNewTab){
							chrome.extension.connect().postMessage({
								message: 'tab', values: hrefAbs, sel: true
							});
						} else {
							if ($('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied'))
								$ezMinimizeButton.click();

							ezShowDialog(hrefAbs , tt);
						}
						$ezDiv.stop(true, true).hide();
						return false;
					});

				}
			}

		} else {
			$ezDiv.stop(true, true).delay(4000).fadeOut(2000);
			clearTimeout(moTimeoutID);

			if (DefaultPreview == '1' && CloseOnLeave == '1'){
				//close the preview window automatically
				if ($ezDialog.dialog('isOpen')){
					$ezDialog.dialog('close');
				}
			}
		}

	} catch (eee3) {}

	}

function InExclusionList(){
	var currentURL = location.href.toLowerCase();
	for(var i=0; i<filterUrls.length; i++)
	{
		var excURL = filterUrls[i].toLowerCase();
		if (currentURL.indexOf(excURL) > -1)
			return true;
	}
	return false;
}
function InNewTabList(previewURL) {
	for(var i=0; i<newtabUrls.length; i++)
	{
		var excURL = newtabUrls[i].toLowerCase();
		if (previewURL.indexOf(excURL) > -1)
			return true;
	}
	return false;
}
function InAutosplitList() {
	var currentURL = location.href.toLowerCase();
	for(var i=0; i<AutosplitUrls.length; i++)
	{
		var excURL = AutosplitUrls[i].toLowerCase();
		if (currentURL.indexOf(excURL) > -1)
			return true;
	}
	return false;
}
function InViewTextList(url) {
	var currentURL = url.toLowerCase();
	for(var i=0; i<ViewTextUrls.length; i++)
	{
		var excURL = ViewTextUrls[i].toLowerCase();
		if (currentURL.indexOf(excURL) > -1)
			return 'https://www.textise.net/showText.aspx?strURL=' + encodeURIComponent(url) + '#content';
	}
	return url;
}

function ScrollToSearchResults() {

	//check if we are looking at search results first
	if (location.href.indexOf('http://www.dogpile.com/') > -1){
		$.scrollTo( $('#resultsMainBar'), 500);
		$('a').removeAttr('target');
	}
	else if (location.href.indexOf('http://www.bing.com/search?q=') > -1) {
		$.scrollTo( $('#results_container'), 500);
	}
	else if (location.href.indexOf('http://search.yahoo.com/search?p=') > -1) {
		$.scrollTo( $('#main'), 500);
	}
	else if (location.href.indexOf('http://en.wikipedia.org/wiki/') > -1) {
		$.scrollTo( $('#firstHeading'), 500);
	}
	else if (location.href.indexOf('http://www.bing.com/videos/search?q=') > -1) {
		$.scrollTo( $('#results'), 500);
	}
	else if (location.href.indexOf('http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=') > -1) {
		$.scrollTo( $('#center'), 500);
	}
	else if (location.href.indexOf('http://dictionary.reference.com/browse/') > -1) {
		$.scrollTo( $('#rpane'), 500);
	}
	else if (location.href.indexOf('http://www.baidu.com/s?wd=') > -1) {
		$.scrollTo( $('#tool'), 500);
	}

}


function ezGBookmarkPreview() {

	var pmsg = "";
	var rf = document.getElementById("ezLPSplitterRightIF");
	if (rf){
		pmsg += "frames['ezLPSplitterRightIF'].postMessage('ezGBShow','*');";
	}
	var pf = document.getElementById("ezLinkPreviewIFRAME");
	if (pf){
		pmsg += "frames['ezLinkPreviewIFRAME'].postMessage('ezGBShow','*');";
	}
	if (pmsg.length > 0){
		setTimeout('location.href = "javascript:' + pmsg + '";',100);
	}

}

function ezTrelloCard(url, name, desc) {
	var win = window;
	var host='';

	if (!url){
		url = win.location.href;
		host = win.location.host;
	} else {
		var l = document.createElement("a");
		l.href = url;
		host = l.host;
	}

	var left = (win.screenX+(win.outerWidth-500)/2);
	var top = (win.screenY+(win.outerHeight-740)/2);
	try{
		win.open('https://trello.com/add-card'+
			'?source='+host+'&mode=popup'+
			'&url='+encodeURIComponent(url)+
			(name?'&name='+encodeURIComponent(name):'')+
			(desc?'&desc='+encodeURIComponent(desc):''),
			'add-trello-card',
			'width=500,height=600,left='+left+',top='+top
		);
	} catch (eee) {
		console.log(eee);
	}
}

function ezBookmarkOneClick(url, title) {
	try{
		var a=window;
		var b=url;
		var t = title;
		var c=encodeURIComponent;
		var d=a.open('http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+c(url)+'&title='+c(t),'bkmk_popup','left='+((a.screenX||a.screenLeft)+10)+',top='+((a.screenY||a.screenTop)+10)+',height=480px,width=550px,resizable=1,alwaysRaised=1');
		a.setTimeout(function(){d.focus()},300);
	} catch (eee) {}
}

function ezReaderOneClick(url){

	//var wing = window.open(url,"greader_popup", "location=0,status=0,toolbar=0,menubar=0,resizable=0,width=600,height=480");
	if ($ezPlusOne.dialog('isOpen')){
		$ezPlusOne.dialog('close');
	}
	//var f = 'https://plusone.google.com/_/+1/confirm?hl=en&url=';
	var f = 'https://plus.google.com/share?url=';
	var u = f + encodeURIComponent(url);

	//$('#ezLinkPreviewPOIFRAME').attr('src', u);
	//$ezPlusOne.dialog('open');

	var width = 600;
	var height = width/1.6;
	window.open(u, "_blank", "resizable=yes, scrollbars=yes, titlebar=no, width="+width+", height="+height+"");
}

function ezNoteInReader() {

	//var action_url = "javascript:var%20b=document.body;var%20GR________bookmarklet_domain='http://www.google.com';if(b&&!document.xmlVersion){void(z=document.createElement('script'));void(z.src='http://www.google.com/reader/ui/link-bookmarklet.js');void(b.appendChild(z));}else{}";
	//var action_url = "javascript:var%20d=document,w=window,f='https://plusone.google.com/_/+1/confirm?hl=en&url=',l=d.location,e=encodeURIComponent,u=f+e(l.href);a=function(){if(!w.open(u,'gplusshare','toolbar=0,resizable=1,scrollbars=1,status=1,width=450,height=295'))l.href=u;};a();void(0)"
		//window.setTimeout(function(){window.location.replace(action_url)},600);
	if ($ezPlusOne.dialog('isOpen')){
		$ezPlusOne.dialog('close');
	}

	var d = document,
		w = window,
		//f = 'https://plusone.google.com/_/+1/confirm?hl=en&url=',
		f = 'https://plus.google.com/share?url=',
		l = d.location,
		e = encodeURIComponent,
		u = f + e(l.href);

	//$('#ezLinkPreviewPOIFRAME').attr('src', u);
	//$ezPlusOne.dialog('open');

	var width = 600;
	var height = width/1.6;
	window.open(u, "_blank", "resizable=yes, scrollbars=yes, titlebar=no, width="+width+", height="+height+"");

}

function ezNoteInReaderPreview() {

	var url = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PW7NBGE83BW7Q"
	chrome.extension.connect().postMessage({
		message: 'tab', values: url, sel: true
	});

}

function SetGReaderDefault(){
	//auto submit note in reader without share
	if (window.location == 'http://www.google.com/reader/link-frame')
	{
		try{
			var pmsg = "parent.postMessage('ezIsGRPop','*');";
			setTimeout('location.href = "javascript:' + pmsg + '";',400);

		}catch(exxxx){ alert(exxxx);}

		try{
			//replace close link
			var $closeCont = $('#close-link-container');
			var $ezCloseLink = $('<span id="ezclose-link" class="Link" style="cursor: pointer;">Close</span>');
			$closeCont.append($ezCloseLink);
			$('#close-link').hide();
			$ezCloseLink.click(function() {
				location.href="javascript:parent.postMessage('ezGRClose','*')";
			});



			$grScript = $('script[src*="en-link_bookmarklet_form.js"]');
			$grScript.remove();
			var lUrl = chrome.extension.getURL("link-bookmarklet.js");

			var script   = document.createElement("script");
			script.type  = "text/javascript";
			script.src   = lUrl;
			document.body.appendChild(script);
		}catch(errrrr){}


		var chkShare = document.getElementById('share');
		if (chkShare) {
			chkShare.checked = false;
			//var btnSubmit = document.getElementById('submit-button');
			//if (btnSubmit) {
			  //btnSubmit.click();
			//}
		}

	}
}

	function IsEngineDefined(engine) {
		if (engine.type != "Custom"){
			return true;
		}
		else {
			if (engine.url && engine.url.length > 0){
				return true;
			}
		}
		//if we make it here engine is not defined
		return false;
	}

	function GetImageUrlForEngine(engine) {
		switch (engine.type) {
			case "Dogpile":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABiUlEQVQ4y33TTYhOYRQH8N+rdxDlrkQNC1JDHh/lYzMpC2UjSRYWo1jYyVLJo5RrIxsLi2GjDLMla9nMbizEzaR85pWduooyMa/NmbquO556es495/z/95zz/J+eJVZZ1eexFiVWYBSvcyoWmnn9FqiXUzEsq/owbob7AyZwEKcw1cT0GuBxTOMjbuBhhC7gClbhNq5hBO9yKobNCo5jY+yLGMNoTsXTsqrncQiD+ME8zuFOk2ASBzCHBZzFjrKqr+J5VHIkcpdjy18tNFo5iXvt+cS6hR+xJ3MqvvRa4KN4FJ9vcB0/o9x94T+TU3H3nyEGwSz24it25VQMwr8aL7EpiMcWr7PfAG8OMNxfBENOxfeyqh/gUvS+Fa/aOljXsOc6+n/bsNd3ETQVtqyDYKRh/+pS4ucI9LGzg2BPnEN8WmqIMxjHN+zOqXgf/m14FmqczanY3/kWcBlPsAYzZVVPRzsTAYbc+RYaVZwIIa1shX7jdE7F1H8JgmQ7jmFDuAZ4nFPxop37B9DQeG8bswRYAAAAAElFTkSuQmCC";
				break;
			case "Bing":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4jaWTIUzDUBCGvxJW04THBFWrGAZThSI0GNwcjjkccg4HDodDTqFIHRKFIjRgpoqYqihmM6MkNZ0Y4vLaLm1JWC95uZfL+7939+6dsXrcW9HCttqIAbYB6LrQUbBMYBFuADi8BfsY5gG8nG0AqDNTwa4r+z8yWwd0diSb3gAsp3r66xmmY5i/NQC6rqw0hvAOZoHELQf2hwLuDSDy4X3UUELkw+QGsqQa7w/h6F589gOT65o21onLkMiXff8c0P9AC9K4WawtjcWbqgTQj2I5YHvNYlNJ+iWQAKbjok0nD3BwWRXbHpw+ySVZAq8XABj5LJgK3KtCnCXw/Vlkptu6COFjlF9oVIbJcqRVtpfXmZc5C9b+QD3gn9Z6Gn8BcuVdnjGhH18AAAAASUVORK5CYII=";
				break;
			case "Yahoo":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeklEQVQ4jdWSPUtCYRTHf1fv6HAREQsTAydxkGqqIE2ChgoCl6Al6wM4NBVCIfgRWqRFmqJMwiEiX4IIF0Pk4pKYhJiEREgQhPE0yL1ludXSmQ6H8385L/DvQxJCAJCJFEWn2UFN1fsaXD47VreZQHRc0mrbxrjQclkDX++VBypU8w2NVHwl0Qk08OrRPKP+IQDucg+kwwVaaltvzMZufpC4fDYMj5UnAA6CZ5ys5wCoZZu01Da7ryF2X0OES0G6PFM5ve9Td0wOI1fzDb2gpuo4p2+ZiXjRiC+jJc5jWV5o0FB7fTaPRXcnf58pvXmFfcLCyvEcmUiRZCzxOS8KACZLDxaIjksGl8/+Y3HlwxpAH1hTBlCcJj2XrW5z3+k2LhYYmbLSfXtnp7RD+bBGMpZAwYN7yQHA8r5fX6QkhCATKYrval9DwcPs1pj+C9vGuHD5bKxlFiVZmwUQnWaHer5FtV7oWVa8Ax/J4jTx0u5+OvhNGH6F/guCDw2KlX2TeOe2AAAAAElFTkSuQmCC";
				break;
			case "Wiki":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4ja2Tv2saYRjHP0lBSqCYhECzNNNZhCJ2CMVB9I6TRIKQk6RdbhMzpOAeOpz5E/w/inJTMvSOZnApoZhrKKTlhdMhNFSveg7SwWCHkLexdSnpA+/wPjzfz/PrfefG1+MJ97D5+4j/D8B1XUzTpLBVwHVdAOpv6xS2CliWhRACAMuyME0TIQRCCCqVCqZpMq/rOolnCdqdtqTuvNwBoFFvABB0AxYeLqCpGoqisBRdAkBTtZsWdl/tEg5CbNsm6AYAGEWDcBDitTx83+fy2yXlvfJU+eW98g1AURQyaga7YeP7PgCqppJMJqkeVnEcBzWjSuHZpzN5l0MslUoAOI7DLdQoGoivgvPP57KtoBtw+uGUxeXFaYCu6ySTSZrNphycqqmkUinCfiiz98M+o58jdF2fBgCk02mcdw5ey5vqtd1pyw2dvD9h7cna7zXeDTx4c4DyVKFhNwi6AV7LI/E8wcryCrZtA9Dr9igaRal5YFWtw7uQYTik9bHF1fcrVh+vsm1sMxgOOD46JhKJMBqN2MhvzK4AIBaL0fvRk29AURSy2SwAtVqNXC43LRhfjyd/nvxmfpLfzE8uvlxI3/7r/Uk8Hv8rdm7Wb3Rdl+ijKOsv1qVPCEGn05HTv7WZgH+xX3yx7irlByjQAAAAAElFTkSuQmCC";
				break;
			case "Video":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC3ElEQVQ4jVWTzW4bZRiFn/m+GXtm/DP22In8k6YNIalCyyYCVmwqISGExIYlK6ReABIqoN4CihD3wp2AAkFUVarEduOJnbFn7BnPz8vCKBW7cx6d5XkMSVaCUlAUoDUsl9BowGYDlgVpCrYNsM3V6rtNlmE86XUlDEOKoqDb7QJwObrh6NEeURSRZRm9Xo8/Ll7x/sMhRVFweTXB92pUq1U47fsio9ciSSgnLUeWf/8ukoTytFMXmY1Fgms57fsiSSirV+dy0nJEklBkeiWnfV/Mm/EM2g2IQ1zLoP6gD5JxcxuBYwEwGs9AMpzBLq5lwHIO9TrBeIbxia8kikpsG+YLaLhQqUCn02EyucU0YWeny2w2Y70uWa5hp20Qx0KrVcH47ecfRWuD9Trl7OwXXrz4HpECrS2yLMWyqpRlft/Pzn7l5csfAIVSoOK7gIpRsF7MqFVguOsTBhNqFUWn6dL1athaiOZThrs+DVuRr5fockM0n2J6TRfLVBjkaAU3b685PjokyzLiOCLbJChDeHz8HqPRCFMLWoGpBa9ZR5mmQqTA8xp4Xo1Go8Z0+hbL0riuTVnm1GoOs1lAp9NGa+OelWWOWqcbrkZjvLZPXgp3iyX7jw5QpoVZqdLwWizjFc1Wm3m4AKXZ23/IIopZJSnK6/Y4OP6Afy6vcb0OewdHjIM7bhcrSl1lIxqn6fNmPMX1OvdbbdfZP3yM8fzZh6IU9HoDLi7+ZDDYI46XDIcPmExGVKsO9brLfB7i+y3Oz//i8PCAOF6jFHBSRyQZiSQTef75xyLJRCQZybeffbTl4aV89/WzLY/eyE/ffLnl89fyxdOBqKMnJ6AqsIzxdvqQl4BJpz+EtACnRlIqyAqouGxQkORQa6DsOsZXn56KZVkEQYBt22ityfMc13WJ4xjLsvA8jyAIEBEcxyFJEmzbJk1TDEnD/+tcllt183z7aXinL8BqtdX8P9X/BYLIegJjDTxhAAAAAElFTkSuQmCC";
				break;
			case "Amazon":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAByElEQVQ4jY2Tv2sTYRjHP2+8c7FIwMUSD9xEKJhmE3Rqb2tBNAaXrHbvkEnc/Ads1i4OwaW9UByFbvUHNwXBJIPBoRdqQY2nS8O9X4erR3OXFr/wDO/z8jzP9/t+3wdJWJsE1ib6X1ibyNokkISxNtkzprTOGQyHQ7a3t/kyGmGMYX1tjWazSR6S7ZKfHIahLrmunFy0Wq25TJDsTPLpxoYc19Wq76vf72fnG543T4yMZAUmozUej4miiMlkwq84ptPpEAQBANOTk7wICgwGg4GqtVpBguO6cxkUGjxuNOS4rqq1mqIo0la7fWGDUv5l/9Gt1+ssLi7S6/WyuziOC04UGFSXl7OJq74/48hWu32OhD9RlgrDUBXPk+O6qniettpt1RsNrfi+4u9j2f4r6eNmGpkLb5bg3i6UbxUpnsX+I1i4CZfL8Pk5PLGnEg7fSq+RPmxKcaRz8ftQGu1IP/rSzrXcP/gawPuH6aTyfbjug3sVBBgDR/tw1IW7u2n++ADuPMNYm8iYUzOOQ/j0Ar5100JO6wEWbsPyS6iswjR1Q84VjLVJYEzpwYzWnwM4fgfTSdqhvASVlXkO7qJ0nffydl4Mm63zXyJdNaOVXRf9AAAAAElFTkSuQmCC";
				break;
			case "Dictionary":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABjElEQVQ4jaWTIXCjQBSGv3QiVi6OyD3HueBAIpGJCzIydYmMjOw5cEUWd3GNayS4InGHJG5xt64n2myOZm7mpnlq5735v/3fvn0jtUrfuCHGAN0XxRPg7pbbu1sB/3QQKkWexAjh2NzzOib21LWDx3VMu1sSqkvxt+5ZBIpmO2Pyl+DnaggVwuFum1doY3j5AE2lQ91rnE0BwK90RagU86wCIJsH1n6kJCO1St+6j0S5W1r67GFP3WvyJGYRKO6LiqbTvKxjTr3BlYJTby6Ac8SeIksiAI5NR/pcMY881tGU5tTjuZKiasnLhrZt3wGudGgMGKOvQK4U/DjWTJUkUop5duDQtLaNMcB+M7OWnl4bDnXHse1R23wAKqrWis9TsA787wrlChLfszCAp9eG9mRIFwHf7rPBr7UO6l5Tl+/2t/sSIRwS/xr4+ct3wEj8xzItQ590EeBsisE7CeEwnnBZps+jBHClsGd/IilbPaiPzyRjNK50bM8AndZ0XQ/AbhmQJiHhQ2/FjtH8AYJgtKPDFmHZAAAAAElFTkSuQmCC";
				break;
			case "Baidu":
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUElEQVQ4jZ2Ty0vUURTHP7+Z3/x0tBJEy8zEaKO7SMVdQS+IoEVtsqCEaBFZ9kBaFBUpQYH/QEGr3IhIEAW1axEVRIvykY5j6Izm+JhmtEZ/j3tPi3Fezq4DB845995zvvd7zjHoGRUAtIBo0IBSaV9p0Drtexk7z1ceJoDcbeJ/xDj3Fh9aig5CEzaPHi4y/H0dgMmQzdSkU5xBefjQuiDmOMLzZ0n6X6zQ9zjO1KTDpY55uq7EipMoXYgg8VthWQZaQUW5H8s0iC8rUn81rivEl1VhAk9hotIIZqZdeu4tUhr0cehoGYm4Yl9zCS1tQTouVmTfRGZcdtcHsgjg9lcRERnoT8iemgk50PZTRETCIVvW17RkJByypf10VNpPReTXnCsiIhwfEDPDQcNei111AaqqTd68+kNjk8WNznlKgwadXZUMDa4yFXZYXlBEZ1xqdpqgNSY6/a/9LUGud1eyEPNobLK42Rnjx5hNwPKxtKh40FvNp48pamtNqrb78zjw0gj8fjhxcgtzUY9bV2OMj9m4DriO5sP7Ne50L/CkbwfRiEtDg5XXBS/HbDjkcu1yjNFhB2dTx8ZGHHrvL1FXHwAj00aFL9MFERgaWGHkm43rFg9XMqn58nmdyLSbC2qNicohCAQMbFswjHQRrQUMg4AJAqRSmrlZL2+QJMeBYcDZCxXMRj0mxh22bfVx8EgZAC8HV0kmNM2tJRw+Vl6AAM6/k3xRniPKs8XbpMqzRXlOwV1an4qJ0hhnXufWVOmNVd2wtQJP0tWyKtn1/wch/oXXKOvhAwAAAABJRU5ErkJggg==";
				break;
			case "Custom":
				var cust = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACWklEQVQ4jY2TS0hUURzGf2e8c0fTwNQcX2NFZAThNCpjSFAT07gMt0WCC1e56EGL1kK7hFZhEAT2WgRF0cIoH4tIMRKlJ4QmWlnjA/U649x7zzktJnQmDfzg23yc8/F9/P9/AYimpmOhWCwW9fl8uWwDqVRqrb+/79Xg4MA70dh4tK6n536v319RorXezn+EEMTjs/Ntba0xIxKJREtLy0tcVwIw9XEEd/wBBanvrOYF8AbPEDhYt8mkpMRfHI2eihper5krpUIpzZfnXdTP3ASPgfbmIRbHoO8JY5MX2B87/4+FwjTNXA+AUpqZ96+p/3EL6Q9htTxm+ewQ1ulHyNJagt9uMPd1BKV0FgHWDaqm7kKOyeqJLtzCGrQwcIsOYR2/DjkmFZP3tjQw0gaKHc4Ccmc1Tl4ZSLWRNL8KWVCFSMSRmTpiI4GUGuUrxLMyjZ20UEqtM2kt4VmZQeXuytKlzKqgSAaaETLF/NMrJFcTSKlZtSyWnl1GaJd4wRGk1OtUSmVW0FhVzZiBQQ5P95J42MCssY9KOYHP9AJQOX6Nt3I3FcHY313wZFZQSAW/GzpZCF3FKA+yJz8JZXUs15wDBMIwafhwkZnR3vR7mZHAcSSumxYWAy0sBlqyJu568in63I0wTMKfLjGku6iojW4kcByJbbv/5a+9rcQPtG8kmezEsd10Atu215TSOI7ctK6Z+Fl9DqnAP3GbRHEDSqePSoTDjXXd3XdeaJ1fnD3nraFSFt68AoQnOdfR0d4sABEON4YikZNR0zS3dc62ba8NDAy8HB5+M/oHK2VLOJR8ayMAAAAASUVORK5CYII=";
				if (engine.img && engine.img.length > 0)
					cust = engine.img;
				return cust;
				break;
		}
	}
	function GetNameForEngine(engine) {
		switch (engine.type) {
			case "Dogpile":
				return "Search Dogpile";
				break;
			case "Bing":
				return "Search Bing";
				break;
			case "Yahoo":
				return "Search Yahoo";
				break;
			case "Wiki":
				return "Search Wikipedia";
				break;
			case "Video":
				return "Search Video";
				break;
			case "Amazon":
				return "Search Amazon";
				break;
			case "Dictionary":
				return "Search Dictionary";
				break;
			case "Baidu":
				return "Search Baidu";
				break;
			case "Custom":
				var cust = "Search Custom";
				if (engine.name && engine.name.length > 0)
					cust = engine.name;
				return cust;
				break;
		}
	}
   function GetSearchURLForEngine(engine, selText) {
        switch (engine.type) {
            case "Dogpile":
                return 'http://www.dogpile.com/info.dogpl/search/web?q=' + selText.replace(" ", "+");
                break;
            case "Bing":
                return 'http://www.bing.com/search?q=' + selText.replace(" ", "+");
                break;
            case "Yahoo":
                return 'http://search.yahoo.com/search?p=' + selText.replace(" ", "+");
                break;
            case "Wiki":
                return 'http://en.wikipedia.org/wiki/' + selText.replace(" ", "_");
                break;
            case "Video":
                return 'http://www.bing.com/videos/search?q=' + selText.replace(" ", "+");
                break;
            case "Amazon":
                return 'http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' + selText.replace(" ", "+");
                break;
            case "Dictionary":
                return 'http://dictionary.reference.com/browse/' + selText.replace(" ", "+");
                break;
            case "Baidu":
                return 'http://www.baidu.com/s?wd=' + selText.replace(" ", "+");
                break;
            case "Custom":
                var cust = 'http://www.dogpile.com/info.dogpl/search/web?q=' + selText.replace(" ", "+");
                if (engine.url && engine.url.length > 0)
                    cust = encodeURI(engine.url.replace('{0}', selText));
                return cust;
                break;
        }
    }

$(document).ready(function() {

if (typeof chrome !== "undefined" && chrome.extension) {

	myport = chrome.extension.connect({
		name: "ezlinkpreview"
	});

	myport.onMessage.addListener(function(a){
		if (a.message === "prefs") {
			defPinned = a.IsPinned;
			DefWidth = a.DefWidth;
			DefHeight = a.DefHeight;
			DefaultPreview = a.DefPrev || '2';
			DefaultIconLoc = a.DefLoc || '2';
			DefaultTabClose = a.DefTab || '2';
			DefaultReader = a.DefReader || '2';
			DefaultBookmark = a.DefBookmark || '2';
			DefaultPloc = a.DefPloc || '0';
			SelGReaderText = a.SelectedText || '';
			DefaultAction = a.DefAction || '2';
			DefaultSelText = a.DefSelText || '2';
			DefaultSearch = a.DefSearch || '0';
			DefaultPreviewType = a.DefPreview || '2';
			DefaultPDF = a.DefPDF;
			DefaultKS = a.DefKS;
			DefLeft = a.DefLeftSize;
			DefaultVis = a.DefVis;
			IconSize = a.IconSize;
			CustSearch = a.CustSearch;
			DefTitlebar = a.DefTitlebar;
			CloseOnLeave = a.CloseOnLeave;
			DefaultImage = a.DefaultImage;
			DefaultShortcuts = a.DefAllShortcuts;
			DefaultClickOutside = a.ClickOutside;
			DefaultPinp = a.Pinp;
			DefaultGoogbar = a.Googbar;
			DefaultPioh = a.Pioh;

			engineJSON = JSON.parse(a.SearchEngineJSON);
			if (engineJSON.engines.length == 9) {
				engineJSON = ConvertNineToTwenty();
			}


			if (DefaultVis == '1')
				HideEZIcon = true;

			var eList = a.ExcList;
			if (eList)
			  filterUrls = eList.split(',');

			var ntList = a.NewTabList;
			if (ntList)
			  newtabUrls = ntList.split(',');

			var aList = a.AutosplitList;
			if (aList)
			  AutosplitUrls = aList.split(',');

			var vtList = a.ViewTextList;
			if (vtList)
				ViewTextUrls = vtList.split(',');

			var delTime = a.DelayTime;
			if (!isNaN(parseInt(delTime)))
				DelayTimeEZ = parseInt(delTime);

			var strezx = a.EZX;
			var strezy = a.EZY;

			if (!isNaN(parseInt(strezx)))
				ezx = parseInt(strezx);

			if (!isNaN(parseInt(strezy)))
				ezy = parseInt(strezy);

			var curDomain = location.hostname.toLowerCase();
			if (curDomain.indexOf('feedly.com') > -1)
				setTimeout(function(){InitEzLinkPreview()},2000);
			else
				InitEzLinkPreview();

		} else if (a.message == "msgbox"){
			alert(a.text);
		} else if (a.message == "toggleIconReturn"){
			//DefaultPreview = a.DefPrev || '2';
			//window.location.reload();
			//$("a").die( 'hover', ezLiveHoverFunc);
			//$("a").live( 'hover', ezLiveHoverFunc);

			//ezNotify("EZ Icon Toggled");
		}
	});
	myport.postMessage(
	{
		message: "getprefs"
	});
}


function InitEzLinkPreview() {

window.setTimeout(function(){ SetGReaderDefault() }, 100);

if (window.name == 'greader_popup'){

var Utils = {
  NOT_SUPPORTED : {},
  DOM : {
    getElementWithId : function() {
      var func = function() { return Utils.NOT_SUPPORTED; }
      if(document.getElementById) {
        func = function(id) {
          return document.getElementById(id);
        }
      } else if(document.all) {
        func = function(id) {
          return document.all[id];
        }
      }
      return ( this.getElementWithId = func )();
    }
  },
  Ranges : {
    create : function() {
      var func = function() { return Utils.NOT_SUPPORTED };
      if(document.body && document.body.createTextRange) {
        func = function() { return document.body.createTextRange(); }
      } else if(document.createRange) {
        func = function() { return document.createRange(); }
      }
      return (this.create = func)();
    },
    selectNode : function(node, originalRng) {
      var func = function() { return Utils.NOT_SUPPORTED; };
      var rng = this.create(), method = '';
      if(rng.moveToElementText) { method = 'moveToElementText'; }
      else if(rng.selectNode) { method = 'selectNode'; }
      if(method)
        func = function(node, rng) {
          rng = rng || Utils.Ranges.create();
          rng[method](node);
          return rng;
        }
      return rng = null, (this.selectNode = func)(node, originalRng);
    }
  },
  Selection : {
    clear:function() {
      var func = function() { return Utils.NOT_SUPPORTED };
      if( typeof document.selection !== 'undefined' ) {
        func = function() {
          if(document.selection && document.selection.empty) {
            return (Utils.Selection.clear = function() {
              if(document.selection) { document.selection.empty(); }
            })();
          }
        }
      } else if(window.getSelection) {
        var sel = window.getSelection();
        if(sel.removeAllRanges) {
          func = function() {
            window.getSelection().removeAllRanges();
          }
        }
        sel = null;
      }
      return (this.clear = func)();
    },
    add : function(originalRng) {
      var func = function() { return Utils.NOT_SUPPORTED };
      var rng = Utils.Ranges.create();
      if(rng.select) {
        func = function(rng) { rng.select(); }
      } else if(window.getSelection) {
        var sel = window.getSelection();
        if(sel.addRange) {
          func = function(rng) { window.getSelection().addRange(rng); }
        }
        sel = null;
      }
      return (this.add = func) ( originalRng );
    }
  }
};
(function() {

	if (window.location.href.indexOf('textonly.in') < 0) return;

	 var rng = Utils.Ranges.create();
	 var ele = Utils.DOM.getElementWithId( 'myID' );
	 if(rng !== Utils.NOT_SUPPORTED && ele !== Utils.NOT_SUPPORTED) {
		Utils.Selection.clear();
		Utils.Selection.add(Utils.Ranges.selectNode(Utils.DOM.getElementWithId('toadjaw-article')));
	 }

})();

ezNoteInReader();

}



//if (!/^https?:\/\/mail.google.com\/mail/.test(window.location.href) && !/^https?:\/\/www.google.com\/calendar/.test(window.location.href) && !/^https?:\/\/plusone.google.com\/_\/+1\/confirm/.test(window.location.href))
if (!/^https?:\/\/www.google.com\/calendar/.test(window.location.href) && !/^https?:\/\/plusone.google.com\/_\/+1\/confirm/.test(window.location.href))
{
	//test for known bank domains
	var curDomain = location.hostname.toLowerCase();

	if (curDomain.indexOf('bankofamerica.com') > -1) return;
	if (curDomain.indexOf('usbank.com') > -1) return;
	if (curDomain.indexOf('frostbank.com') > -1) return;
	if (curDomain.indexOf('chase.com') > -1) return;
	if (curDomain.indexOf('wachovia.com') > -1) return;
	if (curDomain.indexOf('wellsfargo.com') > -1) return;
	if (curDomain.indexOf('citibank.com') > -1) return;
	if (curDomain.indexOf('hsbc.com') > -1) return;
	if (curDomain.indexOf('hsbcusa.com') > -1) return;
	if (curDomain.indexOf('icloud.com') > -1) return;
	if (curDomain.indexOf('onedrive.live') > -1) return;
	if (curDomain.indexOf('sharepoint') > -1) return;

	if (curDomain.indexOf('talkgadget.google.com') > -1) return;


	//test for exclusion list
	if (InExclusionList()) return;

	BindKeyDownToggleIcon();
	window.addEventListener("message", function(event) {
		if (event.data == 'Am I Left Frame?'){

			var lf = document.getElementById("ezLPSplitterLeftIF");
			if (lf){
				lf.contentWindow.postMessage('You are left','*');
			}
			var rf = document.getElementById("ezLPSplitterRightIF");
			if (rf){
				rf.contentWindow.postMessage('You are right','*');
			}
			var pf = document.getElementById("ezLinkPreviewIFRAME");
			if (pf){
				pf.contentWindow.postMessage('You are right','*');
			}
		}
		else if (event.data == 'You are left'){
			IsLeftFrame = true;
			$("body").addClass("ezLeftFrame");
			var curUrl = location.href;
			chrome.extension.sendRequest({ message: "GWH", inurl: curUrl }, function(response) {});
			//ezNotify('left frame');
		}
		else if (event.data == 'You are right'){
			IsRightFrame = true;
			$("body").addClass("ezRightFrame");
			var curUrl = location.href;
			chrome.extension.sendRequest({ message: "GWH", inurl: curUrl }, function(response) {});

      //for pubmed and PMC get the abstract
      var trelloDesc = '';
      if (curUrl.toLowerCase().indexOf("nih.gov/pubmed") > -1) {
          var $abstract = $("div.abstr > div");
          if ($abstract.length > 0){
            trelloDesc = encodeURIComponent($abstract.text());
          }
    	} else if (curUrl.toLowerCase().indexOf("nih.gov/pmc/articles") > -1){
          //https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=22925609
          var eutilAPI = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=';
          var uriArray = curUrl.split('/');
          var minusVal = 1;
          if (curUrl.endsWith("/")){
            minusVal = 2;
          }

          var articleID = uriArray[uriArray.length - minusVal];
          var res = articleID.toLowerCase().replace("pmc", "");

          var jqxhr = $.ajax({
              type: "POST",
              url: eutilAPI + res,
          }).done(function (response) {
              //console.log("etools Done: ", response);
              if (response){
                var $xml = $( response );
                var $abstract = $xml.find("abstract");
                //console.log("ABSTRACT:", $abstract.text());
                if ($abstract.length > 0){
                  trelloDesc = encodeURIComponent($abstract.text());
                  var msg = 'ezEXT,'+ location.href + ',' + encodeURIComponent(document.title) + ',' + trelloDesc;
                  parent.postMessage(msg,'*');
                }
              }
          });
      }

			var msg = 'ezEXT,'+ location.href + ',' + encodeURIComponent(document.title) + ',' + trelloDesc;
			parent.postMessage(msg,'*');
			//var fullpost = "javascript:parent.postMessage('" + msg + "','*')";
			//ezPostLocationFullJS(fullpost);

			//if search, scroll to first result
			ScrollToSearchResults();

		}
		else if (event.data && event.data.length > 0 && event.data.indexOf('ezLink') > -1)
		{
			var arr = event.data.split(',');
			if (arr.length > 1){
				var purl = arr[1];
				$('#ezLPSplitterRightIF').attr('src', purl);
				if (arr.length > 2) {
					var tx = arr[2];
					$('#eztxtSearchSP').val(tx);
				}

				var purlShort = purl;
				if (purl.length > 36)
					purlShort = purl.substring(0,36) + '...';
				var $ezsplittitlespan = $('#ezui-dialog-title-ezLinkPreviewSPLIT');
				if ($ezsplittitlespan.length > 0){
					$ezsplittitlespan.html(purlShort);
					$ezsplittitlespan.attr('title', purl);
				}
			}
		}
		//else if (event.data == 'ezDialogClose'){
		//	if ($ezDialog.dialog('isOpen')){
		//		$ezDialog.dialog('close');
		//	}
		//}
		//else if (event.data == 'ezDialogFocus'){
		//	if ($ezDialog.dialog('isOpen')){
		//		$('ezLinkPreviewPIN').focus();
		//	}
		//}
		else if (event.data == 'ezGRClose'){

			$('#GR________link_bookmarklet_node').remove();
			$grScript = $('script[src*="http://www.google.com/reader/ui/link-bookmarklet.js"]');
			if ($grScript.length > 0) {
				$grScript.remove();
			}
			//self.location.reload();
		}
		else if (event.data == 'ezGRShow') {
			ezNoteInReader();
		}
		else if (event.data == 'ezGBShow') {
			$('#ezLinkPreviewGBOOKMARK').click();
		}
		else if (event.data == 'ezIsGRPop') {
			if (window.name == 'greader_popup'){
				var pmsg = "";
				var lf = document.getElementById("GR________link_bookmarklet_frame");
				if (lf){
					pmsg += "frames['GR________link_bookmarklet_frame'].postMessage('ezIsGRPopYES','*');";
				}
				if (pmsg.length > 0){
					setTimeout('location.href = "javascript:' + pmsg + '";',100);

					setTimeout('window.close();', 1800);

				}
			}
		}
		else if (event.data == 'ezIsGRPopYES') {
			var btnSubmit = document.getElementById('submit-button');
			if (btnSubmit) {
			  btnSubmit.click();
			}
		}
		else if (event.data == 'ezViewText') {

			var vtLoc = 'https://www.textise.net/showText.aspx?strURL=' + encodeURIComponent(currentExtLink);
			if (document.getElementById("ezLPSplitterRightIF")){
				$('#ezLPSplitterRightIF').attr('src', vtLoc);
			}
			if (document.getElementById("ezLinkPreviewIFRAME")){
				$('#ezLinkPreviewIFRAME').attr('src', vtLoc);
			}
		}
		else if (event.data && event.data.length > 0 && event.data.indexOf('ezEXT') > -1)
		{
			var arr = event.data.split(',');
			if (arr.length > 1){
				var purl = arr[1];
				currentExtLink = purl;
				currentExtLinkTitle = arr[2] ? decodeURIComponent(arr[2]) : '';
        currentExtLinkDesc = arr[3] ? decodeURIComponent(arr[3]) : '';

				var purlShort = purl;
				if (purl.length > 80)
					purlShort = purl.substring(0,80) + '...';
				//if popup set title bar to current url
				$ezDialog.dialog('option','title', purlShort);
				var $ezdlgtitlespan = $('#ezui-dialog-title-ezLinkPreviewDIALOG');
				if ($ezdlgtitlespan.length > 0){
					$ezdlgtitlespan.attr('title', purl);
				}

				//if split view
				if (purl.length > 36)
					purlShort = purl.substring(0,36) + '...';
				var $ezsplittitlespan = $('#ezui-dialog-title-ezLinkPreviewSPLIT');
				if ($ezsplittitlespan.length > 0){
					$ezsplittitlespan.html(purlShort);
					$ezsplittitlespan.attr('title', purl);
				}


			}

		}


	}, false);



	if (self != top) {
		//find out if i am in the left frame
		//location.href="javascript:parent.postMessage('Am I Left Frame?','*')";

		var fullpost = "javascript:parent.postMessage('Am I Left Frame?','*')";
		ezPostLocationFullJS(fullpost);



	}
	else
	{
		if (InAutosplitList()){
			ezSplitScreen(location.href);
		}
	}


	$(window).scroll(function () {

		if ($ezDialog.dialog('isOpen')){

			if(!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
				if (DraggingNow) return;
				var st = $(document).scrollTop();
				var sl = $(document).scrollLeft();
				var nTop = originalTop + st;
				var nLeft = originalLeft + sl;
				var $ezParent =  $ezDialog.parent();
				$ezParent.stop(true,false).delay(500).animate({left: nLeft, top: nTop}, 350);
			}
			else
			{
				$ezDialog.dialog('option', 'position', ['left','bottom']);
			}
		}
	});

	//create the preview button
	var icSz = IconSize + 'px';
    $ezDiv = jQuery('<div/>', {
        id: 'ezLinkPreviewDIV',
        css: { borderWidth: '0px', position: 'absolute', top: '10px', left: '10px', width: icSz, height: icSz, zindex: '9999999', cursor: 'pointer'}
    });

	$ezDivSearch = jQuery('<div/>', {
        id: 'ezLinkPreviewDIVSEARCH',
        css: { borderWidth: '0', position: 'absolute', top: '10px', left: '10px', zIndex: '9999999', width: '45px'}
    });

	var ezsbStr = '<table cellpadding="0" cellspacing="0"  id="ezSearchBarTABLE" style="background-color: #ffe; border: 2px solid #555; padding: 1px; z-index: 9999999; display: block; vertical-align:bottom;" class="ezui-corner-all">';
	ezsbStr += '<tr style="padding: 0;">';
	ezsbStr += '<td style="padding: 0; padding-right: 2px; "><img id="ezsb01" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[0]) + '" title="' + GetNameForEngine(engineJSON.engines[0]) + '" /></td>';
	ezsbStr += '<td style="padding: 0; padding-right: 2px; "><img id="ezsb02" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[1]) + '" title="' + GetNameForEngine(engineJSON.engines[1]) + '" /> </td>';
	ezsbStr += '<td style="padding: 0; padding-right: 0px; "><img id="ezsb03" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[2]) + '" title="' + GetNameForEngine(engineJSON.engines[2]) + '" /> </td>';
	ezsbStr += '</tr><tr style="padding: 0;">';
	ezsbStr += '<td style="padding: 0; padding-right: 2px; "><img id="ezsb04" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[3]) + '" title="' + GetNameForEngine(engineJSON.engines[3]) + '" /> </td>';
	ezsbStr += '<td style="padding: 0; padding-right: 4px; "><img id="ezsb05" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[4]) + '" title="' + GetNameForEngine(engineJSON.engines[4]) + '" /></td>';
	ezsbStr += '<td style="padding: 0; padding-right: 0px; "><img id="ezsb06" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[5]) + '" title="' + GetNameForEngine(engineJSON.engines[5]) + '" /></td>';
	ezsbStr += '</tr><tr style="padding: 0;">';
	ezsbStr += '<td style="padding: 0; padding-right: 2px; "><img id="ezsb07" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[6]) + '" title="' + GetNameForEngine(engineJSON.engines[6]) + '" /></td>';
	ezsbStr += '<td style="padding: 0; padding-right: 2px; "><img id="ezsb08" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[7]) + '" title="' + GetNameForEngine(engineJSON.engines[7]) + '" /></td>';
	ezsbStr += '<td style="padding: 0; padding-right: 0px; "><img id="ezsb09" width="11px" height="11px" class="ezSearchClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[8]) + '" title="' + GetNameForEngine(engineJSON.engines[8]) + '" /></td>';
	ezsbStr += '</tr>';
	ezsbStr += '</table>';
	$ezDivSearch.append(jQuery(ezsbStr));

    var sbStr = '<table cellpadding="0" cellspacing="0"  id="ezSearchBar" style="border: 0; display: none;vertical-align:bottom; padding-bottom: 2px;">';
    sbStr += '<tr>';
    sbStr += '<td style="padding-right: 4px; " ><input id="eztxtSearch" type="text" style="width: 120px; font-size: 8pt; -webkit-border-radius: 8px; border: 2px solid #ddd; padding-right: 4px; padding-left: 4px;" title="enter search term and click desired search engine" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs01" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[0]) + '" title="' + GetNameForEngine(engineJSON.engines[0]) + '" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs02" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[1]) + '" title="' + GetNameForEngine(engineJSON.engines[1]) + '" /> </td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs03" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[2]) + '" title="' + GetNameForEngine(engineJSON.engines[2]) + '" /> </td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs04" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[3]) + '" title="' + GetNameForEngine(engineJSON.engines[3]) + '" /> </td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs05" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[4]) + '" title="' + GetNameForEngine(engineJSON.engines[4]) + '" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs06" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[5]) + '" title="' + GetNameForEngine(engineJSON.engines[5]) + '" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs07" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[6]) + '" title="' + GetNameForEngine(engineJSON.engines[6]) + '" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs08" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[7]) + '" title="' + GetNameForEngine(engineJSON.engines[7]) + '" /></td>';
    sbStr += '<td style="padding-right: 4px; "><img id="ezs09" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[8]) + '" title="' + GetNameForEngine(engineJSON.engines[8]) + '" /></td>';

    if (IsEngineDefined(engineJSON.engines[9]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs10" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[9]) + '" title="' + GetNameForEngine(engineJSON.engines[9]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[10]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs11" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[10]) + '" title="' + GetNameForEngine(engineJSON.engines[10]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[11]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs12" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[11]) + '" title="' + GetNameForEngine(engineJSON.engines[11]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[12]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs13" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[12]) + '" title="' + GetNameForEngine(engineJSON.engines[12]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[13]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs14" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[13]) + '" title="' + GetNameForEngine(engineJSON.engines[13]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[14]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs15" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[14]) + '" title="' + GetNameForEngine(engineJSON.engines[14]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[15]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs16" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[15]) + '" title="' + GetNameForEngine(engineJSON.engines[15]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[16]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs17" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[16]) + '" title="' + GetNameForEngine(engineJSON.engines[16]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[17]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs18" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[17]) + '" title="' + GetNameForEngine(engineJSON.engines[17]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[18]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs19" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[18]) + '" title="' + GetNameForEngine(engineJSON.engines[18]) + '" /></td>';
    if (IsEngineDefined(engineJSON.engines[19]))
    	sbStr += '<td style="padding-right: 4px; "><img id="ezs20" width="16px" height="16px" class="ezSearchBarClickClass" src="' + GetImageUrlForEngine(engineJSON.engines[19]) + '" title="' + GetNameForEngine(engineJSON.engines[19]) + '" /></td>';



	sbStr += '</tr>';
    sbStr += '</table>';


	//create IFRAME
	//var $ifr = jQuery('<iframe id="ezLinkPreviewIFRAME" frameborder="0" scrolling="yes" width="100%" height="98%"></iframe>');
    var frStr = '<iframe id="ezLinkPreviewIFRAME" frameborder="0" scrolling="yes" style="width: 100%; height: 90%" ></iframe>';

	//create img
	var $ezImg = jQuery('<img id="ezLinkPreviewIMG" src="" style="border-width: 0; display: none;"></img>');

	//create the overlay dialog
    $ezDialog = jQuery('<div/>', {
        id: 'ezLinkPreviewDIALOG',
        css: { borderWidth: '0px' }
    });//.append($ifr);

	$ezDialog.append(jQuery(sbStr));
    $ezDialog.append(jQuery(frStr));
	$ezDialog.append($ezImg);


	$ezPlusOne = jQuery('<div/>', {
        id: 'ezLinkPreviewPLUSONE',
        css: { borderWidth: '0px' }
    });
	var frpoStr = '<iframe id="ezLinkPreviewPOIFRAME" frameborder="0" scrolling="yes" style="width: 100%; height: 90%" ></iframe>';
	$ezPlusOne.append(jQuery(frpoStr));

	//append the button and dialog to the body of the html document and hide them
    $('body').append($ezDiv);
	$('body').append($ezDivSearch);
	$('body').append($ezDialog);
	$('body').append($ezPlusOne);

	$ezDiv.hide();
	$ezDivSearch.hide();
	$ezDialog.hide();
	$ezImg.hide();
	$ezPlusOne.hide();

	$ezDialog.parent().addClass('ezLinkPreviewPARENT');


	$ezDiv.hoverIntent({
		  sensitivity: 2,
		  interval: 400,
		  over: function(){ if (DefaultAction == '2') $(this).click(); },
		  timeout: 0,
		  out: function(){ return true;}
	});

	/*
	$ezDivSearch.hoverIntent({
		  sensitivity: 2,
		  interval: 100,
		  over: function(){ $ezDivSearch.stop(true,true).show(); },
		  timeout: 0,
		  out: function(){ $ezDivSearch.stop(true,true).hide();}
	});
	*/
	$ezDivSearch.hover(
	  function () {
		clearTimeout(muTimeoutID);
	  },
	  function () {
		$ezDivSearch.stop(true, true).fadeOut(1000);
	  }
	);

	//initialize plus one dialog
	$ezPlusOne.dialog({
		autoOpen: false ,
		width: 488,
		height: 580,
		//position: ['right', 'top'] ,
		zIndex: 10000002 ,
		title: '+1',
		modal: true,
		resizeStart: function(event, ui) { $('#ezLinkPreviewPOIFRAME').hide(); },
		resizeStop: function(event, ui) { $('#ezLinkPreviewPOIFRAME').show(); },
		dragStart: function(event, ui) {
			$('#ezLinkPreviewPLUSONE').block({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.3 }});
		},
		dragStop: function(event, ui) {
			$('#ezLinkPreviewPLUSONE').unblock();
		},
		close: function(event, ui) {
			$('#ezLinkPreviewPOIFRAME').attr('src', '');
		}
	});

	//initialize the dialog
	$ezDialog.dialog({
		autoOpen: false ,
		position: ['right', 'top'] ,
		zIndex: 10000001 ,
		resizeStart: function(event, ui) { $('#ezLinkPreviewIFRAME').hide(); },
		resizeStop: function(event, ui) { $('#ezLinkPreviewIFRAME').show(); adjustIFHeight(); SavePinnedValue(); },
		dragStart: function(event, ui) {
			DraggingNow = true;
			if (!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
				//$('#ezLinkPreviewDIALOG').block({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.3 }});
				$ezDialog.block({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.3 }});
				$.blockUI({ message: null, overlayCSS: { backgroundColor: '#555', opacity: 0.2 }, baseZ: 1000000});
				//$('#ezLinkPreviewIFRAME').hide();
			}
		},
		dragStop: function(event, ui) {
			DraggingNow = false;
			if (!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
				//$('#ezLinkPreviewDIALOG').unblock();
				$ezDialog.unblock();
				//$('#ezLinkPreviewIFRAME').show();
				ezSavePosition();
			}

			if (window.getSelection) {
				if (window.getSelection().empty) {  // Chrome
					window.getSelection().empty();
				} else if (window.getSelection().removeAllRanges) {  // Firefox
					window.getSelection().removeAllRanges();
				}
			}

			$.unblockUI();
		},
		beforeclose: function(event, ui) {
			if($('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
				$ezMinimizeButton.click();
			}
			$('#ezLinkPreviewDIALOG').unblock();
		},
		close: function(event, ui) {
			$ezDialog.dialog('option', 'title', '');
			$('#ezLinkPreviewIFRAME').attr('src', '');
			IsClosing = false;
			enteredOnce = false;
			DraggingNow = false;
			//JustClosed = true;
			//setTimeout(function(){JustClosed = false},1000);
			//location.href="javascript:parent.postMessage('ezDialogFocus','*')";
		}
	});

	var $lastSearchButton = $('#ezs01');
	$("#eztxtSearch").keyup(function(e) {
		if(e.keyCode == 13) {
			$lastSearchButton.click();
		}
	});


	$('.ezSearchBarClickClass').click(function() {
        try {
			var currentId = $(this).attr('id');
			var lastTwo = currentId.substring(currentId.length - 2, currentId.length)
			var idx = parseInt(lastTwo, 10);
			idx--;

			$lastSearchButton = $(this);
            var s = $('#eztxtSearch').val();
            var url = GetSearchURLForEngine(engineJSON.engines[idx], s);

            $('#ezLinkPreviewIFRAME').attr('src', url);

			DefaultSearch = idx + '';
			chrome.extension.connect().postMessage({
				message: 'SaveSearchEngine', SelectedText: idx + ''
			});
        } catch (eeee) { }
	});


	//add custom buttons to the dialog titlebar
	var $ezPinButton = jQuery('<a id="ezLinkPreviewPIN" href="#" title="pin to keep overlay open" class="ezui-dialog-titlebar-pin ezui-corner-all" unselectable="on" role="button" ><span id="ezLinkPreviewPINSPAN" class="ezui-icon ezui-icon-pin-w" unselectable="on">pin</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezPinButton);

	$ezPinButton.click(function(e) {
		e.preventDefault();
		try{
			if (defPinned){
				defPinned = false;
				if ($('#ezLinkPreviewPINSPAN').hasClass('ezui-icon-pin-s'))
					$('#ezLinkPreviewPINSPAN').removeClass('ezui-icon-pin-s').addClass('ezui-icon-pin-w');
				SavePinnedValue();

			} else {
				defPinned = true;
				if ($('#ezLinkPreviewPINSPAN').hasClass('ezui-icon-pin-w'))
					$('#ezLinkPreviewPINSPAN').removeClass('ezui-icon-pin-w').addClass('ezui-icon-pin-s');
				SavePinnedValue();

			}
		} catch (eee) {}
		return false;
	});
	$ezPinButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);


	var $ezLinkButton = jQuery('<a id="ezLinkPreviewEXTLINK" href="#" title="open to new tab" class="ezui-dialog-titlebar-ezlink ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-extlink" unselectable="on">pin</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezLinkButton);

	$ezLinkButton.click(function(e) {
		e.preventDefault();
		try{
			var extURL = currentExtLink || $('#ezLinkPreviewIFRAME').attr('src');
			if (extURL && extURL.length > 0){
				var IsFG = (e.which != 2);
				chrome.extension.connect().postMessage({
					message: 'tab', values: extURL, sel: IsFG
				});

				if (DefaultTabClose == '1')
				{
					//close preview
					$ezDialog.dialog('close');
				}
			}
		} catch (eee) {}
		return false;
	});
	$ezLinkButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var $ezSearchButton = jQuery('<a id="ezLinkPreviewSEARCHBUTTON" href="#" title="toggle search bar" class="ezui-dialog-titlebar-ezsearch ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-search" unselectable="on">search</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezSearchButton);

	$ezSearchButton.click(function(e) {
		e.preventDefault();
		try{
			$('#ezSearchBar').toggle();
			adjustIFHeight();
		} catch (eee) {}
		return false;
	});
	$ezSearchButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var HeightBeforeMin;
	var $ezMinimizeButton = jQuery('<a id="ezLinkPreviewMINIMIZEBUTTON" href="#" title="minimize/restore content" class="ezui-dialog-titlebar-ezminimize ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-arrowthick-2-n-s" unselectable="on">minimize</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezMinimizeButton);

	$ezMinimizeButton.click(function(e) {
		e.preventDefault();
		try{

			//if ($('#ezLinkPreviewDIALOG').is(':visible')) {
			if(!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){

				HeightBeforeMin = $ezDialog.dialog('option', 'height');

				$('#ezLinkPreviewDIALOG').stop({clearQueue:true}).hide(100,
						function(){
							$('#ezLinkPreviewDIALOG').removeClass('ezui-widget-maximizied').addClass('ezui-widget-minimizied');
						});


				//$('#ezLinkPreviewDIALOG').hide();
				//disable resize draggable
				$ezDialog.dialog('option', 'resizable', false);
				$ezDialog.dialog('option', 'draggable', false);

				//$ezDialog.parent().attr('height', '30px');
				$ezDialog.dialog('option', 'height', '25px');
				$ezDialog.dialog('option', 'position', ['left', 'bottom']);

			} else {

				//enable resize
				$ezDialog.dialog('option', 'resizable', true);
				$ezDialog.dialog('option', 'draggable', true);

				$('#ezLinkPreviewDIALOG').stop({clearQueue:true}).show(100,
						function(){
							$('#ezLinkPreviewDIALOG').removeClass('ezui-widget-minimizied').addClass('ezui-widget-maximizied');
						});


				//$('#ezLinkPreviewDIALOG').show();
				$ezDialog.dialog('option', 'position', ['right', 'top']);
				//$ezDialog.parent().attr('height', 'auto');
				$ezDialog.dialog('option', 'height', HeightBeforeMin);

			}

		} catch (eee) {}
		return false;
	});
	$ezMinimizeButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var $ezForwardButton = jQuery('<a id="ezLinkPreviewFORWARDBUTTON" href="#" title="forward" class="ezui-dialog-titlebar-ezforward ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-triangle-1-e" unselectable="on">forward</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezForwardButton);

	$ezForwardButton.click(function(e) {
		e.preventDefault();
		try{
			history.forward();
		} catch (eee) {}
		return false;
	});
	$ezForwardButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var $ezBackButton = jQuery('<a id="ezLinkPreviewBACKBUTTON" href="#" title="back" class="ezui-dialog-titlebar-ezback ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-triangle-1-w" unselectable="on">back</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezBackButton);

	$ezBackButton.click(function(e) {
		e.preventDefault();
		try{
			history.back();
		} catch (eee) {}
		return false;
	});
	$ezBackButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);


	// Send to textize from titlebar
	var $ezVTButton = jQuery('<a id="ezLinkPreviewVTBUTTON" href="#" title="Send preview to textise for increased readability" class="ezui-dialog-titlebar-viewtext ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon-viewtext" unselectable="on">ViewText</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezVTButton);

	$ezVTButton.click(function(e) {
		e.preventDefault();
		try{

			var extURL = currentExtLink || $('#ezLinkPreviewIFRAME').attr('src');
			var vtLoc = 'https://www.textise.net/showText.aspx?strURL=' + encodeURIComponent(extURL);
			if (document.getElementById("ezLPSplitterRightIF")){
				$('#ezLPSplitterRightIF').attr('src', vtLoc);
			}
			if (document.getElementById("ezLinkPreviewIFRAME")){
				$('#ezLinkPreviewIFRAME').attr('src', vtLoc);
			}

		} catch (eee) {}
		return false;
	});
	$ezVTButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	// Send link by e-mail
	var $ezEmailButton = jQuery('<a id="ezLinkPreviewVEMAILBUTTON" href="#" title="Send link by email" class="ezui-dialog-titlebar-email ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon-email" unselectable="on">Email</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezEmailButton);

	$ezEmailButton.click(function(e) {
		e.preventDefault();
		try{

			var extURL = currentExtLink || $('#ezLinkPreviewIFRAME').attr('src');
			var vtLoc = encodeURIComponent(extURL);
			window.open('mailto:?subject=ezLinkPreview+email+link&body=' + vtLoc);

		} catch (eee) {}
		return false;
	});
	$ezEmailButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

		// Send link by e-mail
	var $ezTrelloButton = jQuery('<a id="ezLinkPreviewTRELLOBUTTON" href="#" title="Send link by email" class="ezui-dialog-titlebar-trello ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon-trello" unselectable="on">Email</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezTrelloButton);

	$ezTrelloButton.click(function(e) {
		e.preventDefault();
		try{

			var extURL = currentExtLink || $('#ezLinkPreviewIFRAME').attr('src');
			var extName = currentExtLinkTitle || 'From ezLinkPreview';
      var extDesc = currentExtLinkDesc || '';
			ezTrelloCard(extURL, extName, extDesc);

		} catch (eee) {}
		return false;
	});
	$ezTrelloButton.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	if (DefaultGoogbar != '1') {

		var $ezNoteInReaderT = jQuery('<a id="ezLinkPreviewGRBUTTON" href="#" title="Make a donation to support development of this extension" class="ezui-dialog-titlebar-greader ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon-greader" unselectable="on"></span></a>');
		$ezDialog.siblings('.ezui-dialog-titlebar').append($ezNoteInReaderT);

		$ezNoteInReaderT.hover(
			function () {
				$(this).addClass('ezui-state-hover');
			},
			function () {
				$(this).removeClass('ezui-state-hover');
			}
		);

		$ezNoteInReaderT.click(function(e) {
			e.preventDefault();
			try{
				ezNoteInReaderPreview();
			} catch (eee) {}
			return false;
		});


		var $ezGBookmarkT = jQuery('<a id="ezLinkPreviewGBBUTTON" href="#" title="Send preview to Google Bookmarks" class="ezui-dialog-titlebar-gbkmk ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon-gbookmarks" unselectable="on"></span></a>');
		$ezDialog.siblings('.ezui-dialog-titlebar').append($ezGBookmarkT);

		$ezGBookmarkT.hover(
			function () {
				$(this).addClass('ezui-state-hover');
			},
			function () {
				$(this).removeClass('ezui-state-hover');
			}
		);

		$ezGBookmarkT.click(function(e) {
			e.preventDefault();
			try{
				ezGBookmarkPreview();
			} catch (eee) {}
			return false;
		});

	}




	$ezNoteInReader = jQuery('<div/>', {
        id: 'ezLinkPreviewGREADER',
        css: { borderWidth: '0px', position: 'fixed', top: '4px', left: '4px', width: '16px', height: '16px', zindex: '9999999999', cursor: 'pointer', opacity: 0.65}
    });
	$('body').append($ezNoteInReader);
	$ezNoteInReader.css('z-index', 9999999999);
	if (DefaultReader != '1' || window.name == 'greader_popup' || window.name == 'bkmk_popup')
	{
		$ezNoteInReader.hide();
	}

	$ezNoteInReader.hover(
		function () {
			$(this).css({ opacity: 0.95 });
		},
		function () {
			$(this).css({ opacity: 0.65 });
		}
	);

	$ezNoteInReader.click(function(e) {
		e.preventDefault();
		try{
			ezNoteInReader();
		} catch (eee) {}
		return false;
	});



	$ezGBookmark = jQuery('<div/>', {
        id: 'ezLinkPreviewGBOOKMARK',
        css: { borderWidth: '0px', position: 'fixed', top: '4px', left: '20px', width: '16px', height: '16px', zindex: '9999999999', cursor: 'pointer', opacity: 0.65}
    });
	$('body').append($ezGBookmark);
	$ezGBookmark.css('z-index', 9999999999);
	if (DefaultBookmark != '1' || window.name == 'greader_popup' || window.name == 'bkmk_popup')
	{
		$ezGBookmark.hide();
	}

	$ezGBookmark.hover(
		function () {
			$(this).css({ opacity: 0.95 });
		},
		function () {
			$(this).css({ opacity: 0.65 });
		}
	);

	$ezGBookmark.click(function(e) {
		e.preventDefault();
		try{
			var a=window;
			var b=document;
			var c=encodeURIComponent;
			var d=a.open('http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+c(b.location)+'&title='+c(b.title),'bkmk_popup','left='+((a.screenX||a.screenLeft)+10)+',top='+((a.screenY||a.screenTop)+10)+',height=480px,width=550px,resizable=1,alwaysRaised=1');
			a.setTimeout(function(){d.focus()},300);
		} catch (eee) {}
		return false;
	});





	var $ezZoomOut = jQuery('<a id="ezLinkPreviewZOOMOUT" href="#" title="zoom out" class="ezui-dialog-titlebar-ezzoomout ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-zoomout" unselectable="on">zoomout</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezZoomOut);

	$ezZoomOut.click(function(e) {
		e.preventDefault();
		try{
			ezZoomImage(false);
		} catch (eee) {}
		return false;
	});
	$ezZoomOut.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var $ezZoomIn = jQuery('<a id="ezLinkPreviewZOOMIN" href="#" title="zoom in" class="ezui-dialog-titlebar-ezzoomin ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-zoomin" unselectable="on">zoomin</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezZoomIn);

	$ezZoomIn.click(function(e) {
		e.preventDefault();
		try{
			ezZoomImage(true);
		} catch (eee) {}
		return false;
	});
	$ezZoomIn.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);

	var $ezZoomNorm = jQuery('<a id="ezLinkPreviewZOOMNORM" href="#" title="zoom normal" class="ezui-dialog-titlebar-ezzoomnorm ezui-corner-all" unselectable="on" role="button" ><span class="ezui-icon ezui-icon-arrowreturnthick-1-w " unselectable="on">zoomin</span></a>');
	$ezDialog.siblings('.ezui-dialog-titlebar').append($ezZoomNorm);

	$ezZoomNorm.click(function(e) {
		e.preventDefault();
		try{
			$('#ezLinkPreviewIMG').css({'width' : '', 'height' : ''});
		} catch (eee) {}
		return false;
	});
	$ezZoomNorm.hover(
		function () {
			$(this).addClass('ezui-state-hover');
		},
		function () {
			$(this).removeClass('ezui-state-hover');
		}
	);


	$(document).mouseup(function(e) {
		if (e.which == 1 && DefaultSelText == '2' && !DraggingNow){

			if (document.activeElement &&
					(document.activeElement.isContentEditable ||
					 document.activeElement.tagName.toLowerCase () == "textarea" ||
                     document.activeElement.tagName.toLowerCase () == "input")) {

				//var id = $(document.activeElement).attr('ID');
				//if (id == 'eztxtSearch')
					return;
			}

			clearTimeout(muTimeoutID);
			$ezDiv.stop(true, true).fadeOut(400);
			$ezDivSearch.stop(true, true).hide();

			if (window.getSelection && window.getSelection().toString().length > 0) {
				var selText = window.getSelection().toString();
				$('#eztxtSearch').val(selText);
				var defIdx = 0;
				if (DefaultSearch && DefaultSearch.length > 0){
					try{
						defIdx = parseInt(DefaultSearch) || 0;
					}catch (errrrrr){
						defIdx = 0;
					}
				}
				var sUrl = GetSearchURLForEngine(engineJSON.engines[defIdx], selText);



				if (defPinned && $ezDialog.dialog('isOpen')){
					ezShowDialog(sUrl,searchTitleText, selText);
				}
				else if (IsLeftFrame) {
					ezShowDialog(sUrl,searchTitleText, selText);
				}
				else {
					$ezDiv.stop(true, true).hide();
					//$ezDiv.css({ "top": e.pageY - 8, "left": e.pageX + 8 });
					$ezDivSearch.css({ "top": e.pageY + 12, "left": e.pageX + 12 });
					//$ezDiv.delay(DelayTimeEZ).fadeIn(500);
					$ezDivSearch.delay(DelayTimeEZ).fadeIn(500);

					$('.ezSearchClickClass').unbind('click');
					$('.ezSearchClickClass').click(function(e) {
						e.preventDefault();

						var currentId = $(this).attr('id');
						var lastTwo = currentId.substring(currentId.length - 2, currentId.length);
						var idx = parseInt(lastTwo, 10);
						idx--;
						sUrl = GetSearchURLForEngine(engineJSON.engines[idx], selText);

						DefaultSearch = idx + '';
						chrome.extension.connect().postMessage({
							message: 'SaveSearchEngine', SelectedText: idx + ''
						});

						if (e.which == 2) {
							chrome.extension.connect().postMessage({
								message: 'tab', values: sUrl, sel: true
							});
						} else {
							ezShowDialog(sUrl,searchTitleText, selText);
						}
						$ezDivSearch.stop(true, true).hide();
						return false;
					});

					//$ezDiv.unbind('click');
					//$ezDiv.click(function(e) {
					//	e.preventDefault();
					//	ezShowDialog(sUrl,searchTitleText);
					//	$ezDiv.stop(true, true).hide();
					//	return false;
					//});

					//muTimeoutID = setTimeout("$ezDiv.stop(true, true).fadeOut(2000)", 6000);
					muTimeoutID = setTimeout("$ezDivSearch.stop(true, true).fadeOut(2000)", 6000);


				}
			}
		}
	});


	$(document).mousedown(function(e) {

		if (DefaultClickOutside == '2' && $ezDialog.dialog('isOpen') && !$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
			if (e.target)
			{
				var $ezTarg = $(e.target);
				try{
					if ($ezTarg.attr('id') == 'ezLinkPreviewDIV'){
						return;
					}
				}catch (ee) {}

				try{
					if ($(e.target).parents('div').has('#ezLinkPreviewIFRAME').length > 0)
						return;
				}catch (ee) {}
			}
			$ezDialog.dialog('close');
		}
	});

	$(document).mousemove(function(e) {
		try{
			if (!defPinned && $ezDialog.dialog('isOpen')){
				if (e.target)
				{
					var $ezTarg  = $(e.target);
					if ($ezTarg.parents('div').has('#ezLinkPreviewIFRAME').length > 0){
						if (!enteredOnce)
							enteredOnce = true;

						//keep open (cancel pending close)
						if (IsClosing){
							clearTimeout(clTimeoutID);
							IsClosing = false;
						}
					} else {
						var time = 1500;
						if (!enteredOnce)
							time = 3500;
						if (!IsClosing) {
							IsClosing = true;
							clTimeoutID = setTimeout("$ezDialog.dialog('close')", time);
						}
					}
				}

			}
		}catch (ee) {}
	});

	$('#ezLinkPreviewIFRAME').mouseover(function() {
		if (!defPinned && $ezDialog.dialog('isOpen')){
			if (!enteredOnce)
				enteredOnce = true;
			try{
				clearTimeout(clTimeoutID);
				IsClosing = false;
			} catch (eee) {}
		}
	});


	$("a").live( 'hover', ezLiveHoverFunc);


	if (curDomain.indexOf('my.yahoo') > -1) {
		setInterval(ezMyYahooTooltips, 1000);
	}

	function ezMyYahooTooltips(){
	  	 var count = $(".stock-dialog:visible").length;
		 if (count > 0) {

			//$(".stock-dialog a").unbind( 'hover', ezLiveHoverFunc);
			//$(".stock-dialog a").bind( 'hover', ezLiveHoverFunc);

			$('.stock-dialog a').unbind('mouseenter');
			$('.stock-dialog a').bind('mouseenter', function() {
				//$(this).toggleClass('entered');
				var hrefAbs = '';
				var href = $(this).attr('href');
				try {hrefAbs = GetAbsURL(href); } catch (eee1){}
				var tt = $(this).attr('title') ? $(this).attr('title') : href;

				if (tt.length > 85)
					tt = tt.substring(0, 85) + '...';

				try{
					if (!hrefAbs || hrefAbs.length < 1 || hrefAbs == 'undefined')
						hrefAbs = href;
				} catch (eee2) {}

				//ignore javascript, ftp, mailto, #
				if (href.ezStartsWith("javascript", false) || href.ezStartsWith("ftp", false) || href.ezStartsWith("mailto", false) || href.ezStartsWith("#", false)) {
					$ezDiv.stop(true, true).hide();
					$ezDiv.css({ "top": -20, "left": -20 });
					return;
				}

				//ignore images according to option
				var IsAnImage = patternIMG.test(href);
				if (DefaultImage == '1' && IsAnImage){
					$ezDiv.stop(true, true).hide();
					$ezDiv.css({ "top": -20, "left": -20 });
					return;
				}


				var LoadIntoNewTab = InNewTabList(hrefAbs);
				if (self != top && LoadIntoNewTab){
					$(this).attr('target', '_blank');
				}

				if (IsLeftFrame) {
					if (LoadIntoNewTab){
						chrome.extension.connect().postMessage({
							message: 'tab', values: hrefAbs, sel: true
						});
					} else {
						moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')",600);
					}
				}
				else if (defPinned && $ezDialog.dialog('isOpen')) {
					//auto load into open pinned dialog
					if (!$('#ezLinkPreviewDIALOG').hasClass('ezui-widget-minimizied')){
						if (LoadIntoNewTab){
							chrome.extension.connect().postMessage({
								message: 'tab', values: hrefAbs, sel: true
							});
						} else {
							moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')",600);
						}
					}
				}
				else {
					if (LoadIntoNewTab){
						chrome.extension.connect().postMessage({
							message: 'tab', values: hrefAbs, sel: true
						});
					} else {
						// show preview on hover without the link (after some delay: DelayTimeEZ)
						//moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')", 600);
						moTimeoutID = setTimeout("ezShowDialog('" + hrefAbs + "' ,'" +  tt + "')", DelayTimeEZ);
					}
				}







			});


		}

	}




	}
}
});
