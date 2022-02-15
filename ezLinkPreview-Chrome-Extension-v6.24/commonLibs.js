/*
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

/*
 * urlInternal - v1.0 - 10/7/2009
 * http://benalman.com/projects/jquery-urlinternal-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var g,i=!0,r=!1,m=window.location,h=Array.prototype.slice,b=m.href.match(/^((https?:\/\/.*?\/)?[^#]*)#?.*$/),u=b[1]+"#",t=b[2],e,l,f,q,c,j,x="elemUrlAttr",k="href",y="src",p="urlInternal",d="urlExternal",n="urlFragment",a,s={};function w(A){var z=h.call(arguments,1);return function(){return A.apply(this,z.concat(h.call(arguments)))}}$.isUrlInternal=q=function(z){if(!z||j(z)){return g}if(a.test(z)){return i}if(/^(?:https?:)?\/\//i.test(z)){return r}if(/^[a-z\d.-]+:/i.test(z)){return g}return i};$.isUrlExternal=c=function(z){var A=q(z);return typeof A==="boolean"?!A:A};$.isUrlFragment=j=function(z){var A=(z||"").match(/^([^#]?)([^#]*#).*$/);return !!A&&(A[2]==="#"||z.indexOf(u)===0||(A[1]==="/"?t+A[2]===u:!/^https?:\/\//i.test(z)&&$('<a href="'+z+'"/>')[0].href.indexOf(u)===0))};function v(A,z){return this.filter(":"+A+(z?"("+z+")":""))}$.fn[p]=w(v,p);$.fn[d]=w(v,d);$.fn[n]=w(v,n);function o(D,C,B,A){var z=A[3]||e()[(C.nodeName||"").toLowerCase()]||"";return z?!!D(C.getAttribute(z)):r}$.expr[":"][p]=w(o,q);$.expr[":"][d]=w(o,c);$.expr[":"][n]=w(o,j);$[x]||($[x]=function(z){return $.extend(s,z)})({a:k,base:k,iframe:y,img:y,input:y,form:"action",link:k,script:y});e=$[x];$.urlInternalHost=l=function(B){B=B?"(?:(?:"+Array.prototype.join.call(arguments,"|")+")\\.)?":"";var A=new RegExp("^"+B+"(.*)","i"),z="^(?:"+m.protocol+")?//"+m.hostname.replace(A,B+"$1").replace(/\\?\./g,"\\.")+(m.port?":"+m.port:"")+"/";return f(z)};$.urlInternalRegExp=f=function(z){if(z){a=typeof z==="string"?new RegExp(z,"i"):z}return a};l("www")})(jQuery);

/*!
 * jQuery blockUI plugin
 * Version 2.33 (29-MAR-2010)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

var noOp = function() {};

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.33; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		backgroundColor: '#000',
		opacity:	  	 0.6,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px',
		'border-radius': 		 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  200,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  400,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,
	
	// callback method invoked when fadeIn has completed and blocking message is visible
	onBlock: null,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
	var lyr3, s;
	if (opts.theme && full) {
		s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (opts.theme) {
		s = '<div class="blockUI blockMsg blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:absolute">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (full) {
		s = '<div class="blockUI blockMsg blockPage" style="z-index:'+z+';display:none;position:fixed"></div>';
	}			
	else {
		s = '<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>';
	}
	lyr3 = $(s);

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		var cb = opts.onBlock ? opts.onBlock : noOp;
		var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
		var cb2 = msg ? cb : noOp;
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn, cb1);
		if (msg)
			lyr3._fadeIn(opts.fadeIn, cb2);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
		if (opts.onBlock)
			opts.onBlock();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target == els[els.length-1];
			var back = e.shiftKey && e.target == els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	// allow events within the message content
	if ($(e.target).parents('div.blockMsg').length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);

/*
* jQuery.splitter.js - two-pane splitter window plugin
*
* version 1.51 (2009/01/09) 
* 
* Dual licensed under the MIT and GPL licenses: 
*   http://www.opensource.org/licenses/mit-license.php 
*   http://www.gnu.org/licenses/gpl.html 
*/

/**
* The splitter() plugin implements a two-pane resizable splitter window.
* The selected elements in the jQuery object are converted to a splitter;
* each selected element should have two child elements, used for the panes
* of the splitter. The plugin adds a third child element for the splitbar.
* 
* For more details see: http://methvin.com/splitter/
*
*
* @example $('#MySplitter').splitter();
* @desc Create a vertical splitter with default settings 
*
* @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
* @desc Create a horizontal splitter resizable via Alt+Shift+M
*
* @name splitter
* @type jQuery
* @param Object options Options for the splitter (not required)
* @cat Plugins/Splitter
* @return jQuery
* @author Dave Methvin (dave.methvin@gmail.com)
*/
; (function($) {

    $.fn.splitter = function(args) {
        args = args || {};
        return this.each(function() {
            var zombie; 	// left-behind splitbar for outline resizes
            function startSplitMouse(evt) {
                if (opts.outline)
                    zombie = zombie || bar.clone(false).insertAfter(A);
                panes.css("-webkit-user-select", "none"); // Safari selects A/B text on a move
                bar.addClass(opts.activeClass);
                A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
                $(document)
				.bind("mousemove", doSplitMouse)
				.bind("mouseup", endSplitMouse);

                //blockui the panes to cover any iframes...
                A.block({ message: null });
                B.block({ message: null });
            }
            function doSplitMouse(evt) {
                var newPos = A._posSplit + evt[opts.eventPos];
                if (opts.outline) {
                    newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
                    bar.css(opts.origin, newPos);
                } else
                    resplit(newPos);
            }
            function endSplitMouse(evt) {
                bar.removeClass(opts.activeClass);
                var newPos = A._posSplit + evt[opts.eventPos];
                if (opts.outline) {
                    zombie.remove(); zombie = null;
                    resplit(newPos);
                }
                panes.css("-webkit-user-select", "text"); // let Safari select text again
                $(document)
				.unbind("mousemove", doSplitMouse)
				.unbind("mouseup", endSplitMouse);

                A.unblock();
                B.unblock(); 
            }
            function resplit(newPos) {
                // Constrain new splitbar position to fit pane size limits
                newPos = Math.max(A._min, splitter._DA - B._max,
					Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
                // Resize/position the two panes
                bar._DA = bar[0][opts.pxSplit]; 	// bar size may change during dock
                bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
                A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed, splitter._DF);
                B.css(opts.origin, newPos + bar._DA)
				.css(opts.split, splitter._DA - bar._DA - newPos).css(opts.fixed, splitter._DF);
                // IE fires resize for us; all others pay cash
                if (!$.browser.msie)
                    panes.trigger("resize");
            }
            function dimSum(jq, dims) {
                // Opera returns -1 for missing min/max width, turn into 0
                var sum = 0;
                for (var i = 1; i < arguments.length; i++)
                    sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
                return sum;
            }

            // Determine settings based on incoming opts, element classes, and defaults
            var vh = (args.splitHorizontal ? 'h' : args.splitVertical ? 'v' : args.type) || 'v';
            var opts = $.extend({
                activeClass: 'active', // class name for active splitter
                pxPerKey: 8, 		// splitter px moved per keypress
                tabIndex: 0, 		// tab order indicator
                accessKey: ''			// accessKey for splitbar
            }, {
                v: {					// Vertical splitters:
                    keyLeft: 39, keyRight: 37, cursor: "e-resize",
                    splitbarClass: "vsplitbar", outlineClass: "voutline",
                    type: 'v', eventPos: "pageX", origin: "left",
                    split: "width", pxSplit: "offsetWidth", side1: "Left", side2: "Right",
                    fixed: "height", pxFixed: "offsetHeight", side3: "Top", side4: "Bottom"
                },
                h: {					// Horizontal splitters:
                    keyTop: 40, keyBottom: 38, cursor: "n-resize",
                    splitbarClass: "hsplitbar", outlineClass: "houtline",
                    type: 'h', eventPos: "pageY", origin: "top",
                    split: "height", pxSplit: "offsetHeight", side1: "Top", side2: "Bottom",
                    fixed: "width", pxFixed: "offsetWidth", side3: "Left", side4: "Right"
                }
}[vh], args);

                // Create jQuery object closures for splitter and both panes
                var splitter = $(this).css({ position: "relative" });
                var panes = $(">*", splitter[0]).css({
                    position: "absolute", 			// positioned inside splitter container
                    "z-index": "1", 				// splitbar is positioned above
                    "-moz-outline-style": "none"	// don't show dotted outline
                });
                var A = $(panes[0]); 	// left  or top
                var B = $(panes[1]); 	// right or bottom

                // Focuser element, provides keyboard support; title is shown by Opera accessKeys
                var focuser = $('<a href="javascript:void(0)"></a>')
			.attr({ accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass })
			.bind($.browser.opera ? "click" : "focus", function() { this.focus(); bar.addClass(opts.activeClass) })
			.bind("keydown", function(e) {
			    var key = e.which || e.keyCode;
			    var dir = key == opts["key" + opts.side1] ? 1 : key == opts["key" + opts.side2] ? -1 : 0;
			    if (dir)
			        resplit(A[0][opts.pxSplit] + dir * opts.pxPerKey, false);
			})
			.bind("blur", function() { bar.removeClass(opts.activeClass) });

                // Splitbar element, can be already in the doc or we create one
                var bar = $(panes[2] || '<div></div>')
			.insertAfter(A).css("z-index", "100").append(focuser)
			.attr({ "class": opts.splitbarClass, unselectable: "on" })
			.css({ position: "absolute", "user-select": "none", "-webkit-user-select": "none",
			    "-khtml-user-select": "none", "-moz-user-select": "none"
			})
			.bind("mousedown", startSplitMouse);
                // Use our cursor unless the style specifies a non-default cursor
                if (/^(auto|default|)$/.test(bar.css("cursor")))
                    bar.css("cursor", opts.cursor);

                // Cache several dimensions for speed, rather than re-querying constantly
                bar._DA = bar[0][opts.pxSplit];
                splitter._PBF = $.boxModel ? dimSum(splitter, "border" + opts.side3 + "Width", "border" + opts.side4 + "Width") : 0;
                splitter._PBA = $.boxModel ? dimSum(splitter, "border" + opts.side1 + "Width", "border" + opts.side2 + "Width") : 0;
                A._pane = opts.side1;
                B._pane = opts.side2;
                $.each([A, B], function() {
                    this._min = opts["min" + this._pane] || dimSum(this, "min-" + opts.split);
                    this._max = opts["max" + this._pane] || dimSum(this, "max-" + opts.split) || 9999;
                    this._init = opts["size" + this._pane] === true ?
				parseInt($.curCSS(this[0], opts.split)) : opts["size" + this._pane];
                });

                // Determine initial position, get from cookie if specified
                var initPos = A._init;
                if (!isNaN(B._init))	// recalc initial B size as an offset from the top or left side
                    initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
                if (opts.cookie) {
                    if (!$.cookie)
                        alert('jQuery.splitter(): jQuery cookie plugin required');
                    var ckpos = parseInt($.cookie(opts.cookie));
                    if (!isNaN(ckpos))
                        initPos = ckpos;
                    $(window).bind("unload", function() {
                        var state = String(bar.css(opts.origin)); // current location of splitbar
                        $.cookie(opts.cookie, state, { expires: opts.cookieExpires || 365,
                            path: opts.cookiePath || document.location.pathname
                        });
                    });
                }
                if (isNaN(initPos))	// King Solomon's algorithm
                    initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA) / 2);

                // Resize event propagation and splitter sizing
                if (opts.anchorToWindow) {
                    // Account for margin or border on the splitter container and enforce min height
                    splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
                    splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
                    $(window).bind("resize", function() {
                        var top = splitter.offset().top;
                        var wh = $(window).height();
                        splitter.css("height", Math.max(wh - top - splitter._hadjust - 20, splitter._hmin) + "px");
                        if (!$.browser.msie) splitter.trigger("resize");
                    }).trigger("resize");
                }
                else if (opts.resizeToWidth && !$.browser.msie)
                    $(window).bind("resize", function() {
                        splitter.trigger("resize");
                    });
					
									
                // Resize event handler; triggered immediately to set initial position
                splitter.bind("resize", function(e, size) {
                    // Custom events bubble in jQuery 1.3; don't get into a Yo Dawg
                    if (e.target != this) return;
                    // Determine new width/height of splitter container
                    splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
                    splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
                    // Bail if splitter isn't visible or content isn't there yet
                    if (splitter._DF <= 0 || splitter._DA <= 0) return;
                    // Re-divvy the adjustable dimension; maintain size of the preferred pane
                    resplit(!isNaN(size) ? size : (!(opts.sizeRight || opts.sizeBottom) ? A[0][opts.pxSplit] :
				splitter._DA - B[0][opts.pxSplit] - bar._DA));
                }).trigger("resize", [initPos]);
				
				
            });
        };

    })(jQuery);

/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY = {};
(function(window, $, undefined) {

     if (!("console" in window)) {
         var c = window.console = {};
         c.log = c.warn = c.error = c.debug = function(){};
     }

     if ($ === NO_JQUERY) {
         // jQuery is optional
         $ = {
             fn: {},
             extend: function() {
                 var a = arguments[0];
                 for (var i=1,len=arguments.length; i<len; i++) {
                     var b = arguments[i];
                     for (var prop in b) {
                         a[prop] = b[prop];
                     }
                 }
                 return a;
             }
         };
     }

     $.fn.pm = function() {
         console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])");
         return this;
     };

     // send postmessage
     $.pm = window.pm = function(options) {
         pm.send(options);
     };

     // bind postmessage handler
     $.pm.bind = window.pm.bind = function(type, fn, origin, hash) {
         pm.bind(type, fn, origin, hash);
     };

     // unbind postmessage handler
     $.pm.unbind = window.pm.unbind = function(type, fn) {
         pm.unbind(type, fn);
     };

     // default postmessage origin on bind
     $.pm.origin = window.pm.origin = null;

     // default postmessage polling if using location hash to pass postmessages
     $.pm.poll = window.pm.poll = 200;

     var pm = {

         send: function(options) {
             var o = $.extend({}, pm.defaults, options),
             target = o.target;
             if (!o.target) {
                 console.warn("postmessage target window required");
                 return;
             }
             if (!o.type) {
                 console.warn("postmessage type required");
                 return;
             }
             var msg = {data:o.data, type:o.type};
             if (o.success) {
                 msg.callback = pm._callback(o.success);
             }
             if (o.error) {
                 msg.errback = pm._callback(o.error);
             }
             if (("postMessage" in target) && !o.hash) {
                 pm._bind();
                 target.postMessage(JSON.stringify(msg), o.origin || '*');
             }
             else {
                 pm.hash._bind();
                 pm.hash.send(o, msg);
             }
         },

         bind: function(type, fn, origin, hash) {
             if (("postMessage" in window) && !hash) {
                 pm._bind();
             }
             else {
                 pm.hash._bind();
             }
             var l = pm.data("listeners.postmessage");
             if (!l) {
                 l = {};
                 pm.data("listeners.postmessage", l);
             }
             var fns = l[type];
             if (!fns) {
                 fns = [];
                 l[type] = fns;
             }
             fns.push({fn:fn, origin:origin || $.pm.origin});
         },

         unbind: function(type, fn) {
             var l = pm.data("listeners.postmessage");
             if (l) {
                 if (type) {
                     if (fn) {
                         // remove specific listener
                         var fns = l[type];
                         if (fns) {
                             var m = [];
                             for (var i=0,len=fns.length; i<len; i++) {
                                 var o = fns[i];
                                 if (o.fn !== fn) {
                                     m.push(o);
                                 }
                             }
                             l[type] = m;
                         }
                     }
                     else {
                         // remove all listeners by type
                         delete l[type];
                     }
                 }
                 else {
                     // unbind all listeners of all type
                     for (var i in l) {
                       delete l[i];
                     }
                 }
             }
         },

         data: function(k, v) {
             if (v === undefined) {
                 return pm._data[k];
             }
             pm._data[k] = v;
             return v;
         },

         _data: {},

         _CHARS: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),

         _random: function() {
             var r = [];
             for (var i=0; i<32; i++) {
                 r[i] = pm._CHARS[0 | Math.random() * 32];
             };
             return r.join("");
         },

         _callback: function(fn) {
             var cbs = pm.data("callbacks.postmessage");
             if (!cbs) {
                 cbs = {};
                 pm.data("callbacks.postmessage", cbs);
             }
             var r = pm._random();
             cbs[r] = fn;
             return r;
         },

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("listening.postmessage")) {
                 if (window.addEventListener) {
                     window.addEventListener("message", pm._dispatch, false);
                 }
                 else if (window.attachEvent) {
                     window.attachEvent("onmessage", pm._dispatch);
                 }
                 pm.data("listening.postmessage", 1);
             }
         },

         _dispatch: function(e) {
             //console.log("$.pm.dispatch", e, this);
             try {
                 var msg = JSON.parse(e.data);
             }
             catch (ex) {
                 console.warn("postmessage data invalid json: ", ex);
                 return;
             }
             if (!msg.type) {
                 console.warn("postmessage message type required");
                 return;
             }
             var cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin && e.origin !== o.origin) {
                         console.warn("postmessage message origin mismatch", e.origin, o.origin);
                         if (msg.errback) {
                             // notify post message errback
                             var error = {
                                 message: "postmessage origin mismatch",
                                 origin: [e.origin, o.origin]
                             };
                             pm.send({target:e.source, data:error, type:msg.errback});
                         }
                         continue;
                     }
                     try {
                         var r = o.fn(msg.data);
                         if (msg.callback) {
                             pm.send({target:e.source, data:r, type:msg.callback});
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:e.source, data:ex, type:msg.errback});
                         }
                     }
                 };
             }
         }
     };

     // location hash polling
     pm.hash = {

         send: function(options, msg) {
             //console.log("hash.send", target_window, options, msg);
             var target_window = options.target,
             target_url = options.url;
             if (!target_url) {
                 console.warn("postmessage target window url is required");
                 return;
             }
             target_url = pm.hash._url(target_url);
             var source_window,
             source_url = pm.hash._url(window.location.href);
             if (window == target_window.parent) {
                 source_window = "parent";
             }
             else {
                 try {
                     for (var i=0,len=parent.frames.length; i<len; i++) {
                         var f = parent.frames[i];
                         if (f == window) {
                             source_window = i;
                             break;
                         }
                     };
                 }
                 catch(ex) {
                     // Opera: security error trying to access parent.frames x-origin
                     // juse use window.name
                     source_window = window.name;
                 }
             }
             if (source_window == null) {
                 console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");
                 return;
             }
             var hashmessage = {
                 "x-requested-with": "postmessage",
                 source: {
                     name: source_window,
                     url: source_url
                 },
                 postmessage: msg
             };
             var hash_id = "#x-postmessage-id=" + pm._random();
             target_window.location = target_url + hash_id + encodeURIComponent(JSON.stringify(hashmessage));
         },

         _regex: /^\#x\-postmessage\-id\=(\w{32})/,

         _regex_len: "#x-postmessage-id=".length + 32,

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("polling.postmessage")) {
                 setInterval(function() {
                                 var hash = "" + window.location.hash,
                                 m = pm.hash._regex.exec(hash);
                                 if (m) {
                                     var id = m[1];
                                     if (pm.hash._last !== id) {
                                         pm.hash._last = id;
                                         pm.hash._dispatch(hash.substring(pm.hash._regex_len));
                                     }
                                 }
                             }, $.pm.poll || 200);
                 pm.data("polling.postmessage", 1);
             }
         },

         _dispatch: function(hash) {
             if (!hash) {
                 return;
             }
             try {
                 hash = JSON.parse(decodeURIComponent(hash));
                 if (!(hash['x-requested-with'] === 'postmessage' &&
                       hash.source && hash.source.name != null && hash.source.url && hash.postmessage)) {
                     // ignore since hash could've come from somewhere else
                     return;
                 }
             }
             catch (ex) {
                 // ignore since hash could've come from somewhere else
                 return;
             }
             var msg = hash.postmessage,
             cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var source_window;
                 if (hash.source.name === "parent") {
                     source_window = window.parent;
                 }
                 else {
                     source_window = window.frames[hash.source.name];
                 }
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin) {
                         var origin = /https?\:\/\/[^\/]*/.exec(hash.source.url)[0];
                         if (origin !== o.origin) {
                             console.warn("postmessage message origin mismatch", origin, o.origin);
                             if (msg.errback) {
                                 // notify post message errback
                                 var error = {
                                     message: "postmessage origin mismatch",
                                     origin: [origin, o.origin]
                                 };
                                 pm.send({target:source_window, data:error, type:msg.errback, hash:true, url:hash.source.url});
                             }
                             continue;
                         }
                     }
                     try {
                         var r = o.fn(msg.data);
                         if (msg.callback) {
                             pm.send({target:source_window, data:r, type:msg.callback, hash:true, url:hash.source.url});
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:source_window, data:ex, type:msg.errback, hash:true, url:hash.source.url});
                         }
                     }
                 };
             }
         },

         _url: function(url) {
             // url minus hash part
             return (""+url).replace(/#.*$/, "");
         }

     };

     $.extend(pm, {
                  defaults: {
                      target: null,  /* target window (required) */
                      url: null,     /* target window url (required if no window.postMessage or hash == true) */
                      type: null,    /* message type (required) */
                      data: null,    /* message data (required) */
                      success: null, /* success callback (optional) */
                      error: null,   /* error callback (optional) */
                      origin: "*",   /* postmessage origin (optional) */
                      hash: false    /* use location hash for message passing (optional) */
                  }
              });

 })(this, typeof jQuery === "undefined" ? NO_JQUERY : jQuery);

/**
 * http://www.JSON.org/json2.js
 **/
if (! ("JSON" in window && window.JSON)){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());


/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);



/*
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");



/*
 * jquery.layout 1.2.0
 *
 * Copyright (c) 2008 
 *   Fabrizio Balliano (http://www.fabrizioballiano.net)
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * $Date: 2008-12-27 02:17:22 +0100 (sab, 27 dic 2008) $
 * $Rev: 203 $
 * 
 * NOTE: For best code readability, view this with a fixed-space font and tabs equal to 4-chars
 */
(function($){$.fn.layout=function(opts){var
prefix="ui-layout-",defaults={paneClass:prefix+"pane",resizerClass:prefix+"resizer",togglerClass:prefix+"toggler",togglerInnerClass:prefix+"",buttonClass:prefix+"button",contentSelector:"."+prefix+"content",contentIgnoreSelector:"."+prefix+"ignore"};var options={name:"",scrollToBookmarkOnLoad:true,defaults:{applyDefaultStyles:false,closable:true,resizable:true,slidable:true,contentSelector:defaults.contentSelector,contentIgnoreSelector:defaults.contentIgnoreSelector,paneClass:defaults.paneClass,resizerClass:defaults.resizerClass,togglerClass:defaults.togglerClass,buttonClass:defaults.buttonClass,resizerDragOpacity:1,maskIframesOnResize:true,minSize:0,maxSize:0,spacing_open:6,spacing_closed:6,togglerLength_open:50,togglerLength_closed:50,togglerAlign_open:"center",togglerAlign_closed:"center",togglerTip_open:"Close",togglerTip_closed:"Open",resizerTip:"Resize",sliderTip:"Slide Open",sliderCursor:"pointer",slideTrigger_open:"click",slideTrigger_close:"mouseout",hideTogglerOnSlide:false,togglerContent_open:"",togglerContent_closed:"",showOverflowOnHover:false,enableCursorHotkey:true,customHotkeyModifier:"SHIFT",fxName:"slide",fxSpeed:null,fxSettings:{},initClosed:false,initHidden:false},north:{paneSelector:"."+prefix+"north",size:"auto",resizerCursor:"n-resize"},south:{paneSelector:"."+prefix+"south",size:"auto",resizerCursor:"s-resize"},east:{paneSelector:"."+prefix+"east",size:200,resizerCursor:"e-resize"},west:{paneSelector:"."+prefix+"west",size:200,resizerCursor:"w-resize"},center:{paneSelector:"."+prefix+"center"}};var effects={slide:{all:{duration:"fast"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},drop:{all:{duration:"slow"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},scale:{all:{duration:"fast"}}};var config={allPanes:"north,south,east,west,center",borderPanes:"north,south,east,west",zIndex:{resizer_normal:1,pane_normal:2,mask:4,sliding:100,resizing:10000,animation:10000},resizers:{cssReq:{position:"absolute",padding:0,margin:0,fontSize:"1px",textAlign:"left",overflow:"hidden",zIndex:1},cssDef:{background:"#DDD",border:"none"}},togglers:{cssReq:{position:"absolute",display:"block",padding:0,margin:0,overflow:"hidden",textAlign:"center",fontSize:"1px",cursor:"pointer",zIndex:1},cssDef:{background:"#AAA"}},content:{cssReq:{overflow:"auto"},cssDef:{}},defaults:{cssReq:{position:"absolute",margin:0,zIndex:2},cssDef:{padding:"10px",background:"#FFF",border:"1px solid #BBB",overflow:"auto"}},north:{edge:"top",sizeType:"height",dir:"horz",cssReq:{top:0,bottom:"auto",left:0,right:0,width:"auto"}},south:{edge:"bottom",sizeType:"height",dir:"horz",cssReq:{top:"auto",bottom:0,left:0,right:0,width:"auto"}},east:{edge:"right",sizeType:"width",dir:"vert",cssReq:{left:"auto",right:0,top:"auto",bottom:"auto",height:"auto"}},west:{edge:"left",sizeType:"width",dir:"vert",cssReq:{left:0,right:"auto",top:"auto",bottom:"auto",height:"auto"}},center:{dir:"center",cssReq:{left:"auto",right:"auto",top:"auto",bottom:"auto",height:"auto",width:"auto"}}};var state={id:Math.floor(Math.random()*10000),container:{},north:{},south:{},east:{},west:{},center:{}};var
altEdge={top:"bottom",bottom:"top",left:"right",right:"left"},altSide={north:"south",south:"north",east:"west",west:"east"};var isStr=function(o){if(typeof o=="string")return true;else if(typeof o=="object"){try{var match=o.constructor.toString().match(/string/i);return(match!==null);}catch(e){}}return false;};var str=function(o){if(typeof o=="string"||isStr(o))return $.trim(o);else return o;};var min=function(x,y){return Math.min(x,y);};var max=function(x,y){return Math.max(x,y);};var transformData=function(d){var json={defaults:{fxSettings:{}},north:{fxSettings:{}},south:{fxSettings:{}},east:{fxSettings:{}},west:{fxSettings:{}},center:{fxSettings:{}}};d=d||{};if(d.effects||d.defaults||d.north||d.south||d.west||d.east||d.center)json=$.extend(json,d);else
$.each(d,function(key,val){a=key.split("__");json[a[1]?a[0]:"defaults"][a[1]?a[1]:a[0]]=val;});return json;};var setFlowCallback=function(action,pane,param){var
cb=action+","+pane+","+(param?1:0),cP,cbPane;$.each(c.borderPanes.split(","),function(i,p){if(c[p].isMoving){bindCallback(p);return false;}});function bindCallback(p,test){cP=c[p];if(!cP.doCallback){cP.doCallback=true;cP.callback=cb;}else{cpPane=cP.callback.split(",")[1];if(cpPane!=p&&cpPane!=pane)bindCallback(cpPane,true);}}};var execFlowCallback=function(pane){var cP=c[pane];c.isLayoutBusy=false;delete cP.isMoving;if(!cP.doCallback||!cP.callback)return;cP.doCallback=false;var
cb=cP.callback.split(","),param=(cb[2]>0?true:false);if(cb[0]=="open")open(cb[1],param);else if(cb[0]=="close")close(cb[1],param);if(!cP.doCallback)cP.callback=null;};var execUserCallback=function(pane,v_fn){if(!v_fn)return;var fn;try{if(typeof v_fn=="function")fn=v_fn;else if(typeof v_fn!="string")return;else if(v_fn.indexOf(",")>0){var
args=v_fn.split(","),fn=eval(args[0]);if(typeof fn=="function"&&args.length>1)return fn(args[1]);}else
fn=eval(v_fn);if(typeof fn=="function")return fn(pane,$Ps[pane],$.extend({},state[pane]),$.extend({},options[pane]),options.name);}catch(ex){}};var cssNum=function($E,prop){var
val=0,hidden=false,visibility="";if(!$.browser.msie){if($.curCSS($E[0],"display",true)=="none"){hidden=true;visibility=$.curCSS($E[0],"visibility",true);$E.css({display:"block",visibility:"hidden"});}}val=parseInt($.curCSS($E[0],prop,true),10)||0;if(hidden){$E.css({display:"none"});if(visibility&&visibility!="hidden")$E.css({visibility:visibility});}return val;};var cssW=function(e,outerWidth){var $E;if(isStr(e)){e=str(e);$E=$Ps[e];}else
$E=$(e);if(outerWidth<=0)return 0;else if(!(outerWidth>0))outerWidth=isStr(e)?getPaneSize(e):$E.outerWidth();if(!$.boxModel)return outerWidth;else
return outerWidth
-cssNum($E,"paddingLeft")-cssNum($E,"paddingRight")-($.curCSS($E[0],"borderLeftStyle",true)=="none"?0:cssNum($E,"borderLeftWidth"))-($.curCSS($E[0],"borderRightStyle",true)=="none"?0:cssNum($E,"borderRightWidth"));};var cssH=function(e,outerHeight){var $E;if(isStr(e)){e=str(e);$E=$Ps[e];}else
$E=$(e);if(outerHeight<=0)return 0;else if(!(outerHeight>0))outerHeight=(isStr(e))?getPaneSize(e):$E.outerHeight();if(!$.boxModel)return outerHeight;else
return outerHeight
-cssNum($E,"paddingTop")-cssNum($E,"paddingBottom")-($.curCSS($E[0],"borderTopStyle",true)=="none"?0:cssNum($E,"borderTopWidth"))-($.curCSS($E[0],"borderBottomStyle",true)=="none"?0:cssNum($E,"borderBottomWidth"));};var cssSize=function(pane,outerSize){if(c[pane].dir=="horz")return cssH(pane,outerSize);else
return cssW(pane,outerSize);};var getPaneSize=function(pane,inclSpace){var
$P=$Ps[pane],o=options[pane],s=state[pane],oSp=(inclSpace?o.spacing_open:0),cSp=(inclSpace?o.spacing_closed:0);if(!$P||s.isHidden)return 0;else if(s.isClosed||(s.isSliding&&inclSpace))return cSp;else if(c[pane].dir=="horz")return $P.outerHeight()+oSp;else
return $P.outerWidth()+oSp;};var setPaneMinMaxSizes=function(pane){var
d=cDims,edge=c[pane].edge,dir=c[pane].dir,o=options[pane],s=state[pane],$P=$Ps[pane],$altPane=$Ps[altSide[pane]],paneSpacing=o.spacing_open,altPaneSpacing=options[altSide[pane]].spacing_open,altPaneSize=(!$altPane?0:(dir=="horz"?$altPane.outerHeight():$altPane.outerWidth())),containerSize=(dir=="horz"?d.innerHeight:d.innerWidth),limitSize=containerSize-paneSpacing-altPaneSize-altPaneSpacing,minSize=s.minSize||0,maxSize=Math.min(s.maxSize||9999,limitSize),minPos,maxPos;switch(pane){case"north":minPos=d.offsetTop+minSize;maxPos=d.offsetTop+maxSize;break;case"west":minPos=d.offsetLeft+minSize;maxPos=d.offsetLeft+maxSize;break;case"south":minPos=d.offsetTop+d.innerHeight-maxSize;maxPos=d.offsetTop+d.innerHeight-minSize;break;case"east":minPos=d.offsetLeft+d.innerWidth-maxSize;maxPos=d.offsetLeft+d.innerWidth-minSize;break;}$.extend(s,{minSize:minSize,maxSize:maxSize,minPosition:minPos,maxPosition:maxPos});};var getPaneDims=function(){var d={top:getPaneSize("north",true),bottom:getPaneSize("south",true),left:getPaneSize("west",true),right:getPaneSize("east",true),width:0,height:0};with(d){width=cDims.innerWidth-left-right;height=cDims.innerHeight-bottom-top;top+=cDims.top;bottom+=cDims.bottom;left+=cDims.left;right+=cDims.right;}return d;};var getElemDims=function($E){var
d={},e,b,p;$.each("Left,Right,Top,Bottom".split(","),function(){e=str(this);b=d["border"+e]=cssNum($E,"border"+e+"Width");p=d["padding"+e]=cssNum($E,"padding"+e);d["offset"+e]=b+p;if($E==$Container)d[e.toLowerCase()]=($.boxModel?p:0);});d.innerWidth=d.outerWidth=$E.outerWidth();d.innerHeight=d.outerHeight=$E.outerHeight();if($.boxModel){d.innerWidth-=(d.offsetLeft+d.offsetRight);d.innerHeight-=(d.offsetTop+d.offsetBottom);}return d;};var setTimer=function(pane,action,fn,ms){var
Layout=window.layout=window.layout||{},Timers=Layout.timers=Layout.timers||{},name="layout_"+state.id+"_"+pane+"_"+action;if(Timers[name])return;else Timers[name]=setTimeout(fn,ms);};var clearTimer=function(pane,action){var
Layout=window.layout=window.layout||{},Timers=Layout.timers=Layout.timers||{},name="layout_"+state.id+"_"+pane+"_"+action;if(Timers[name]){clearTimeout(Timers[name]);delete Timers[name];return true;}else
return false;};var create=function(){initOptions();initContainer();initPanes();initHandles();initResizable();sizeContent("all");if(options.scrollToBookmarkOnLoad)with(self.location)if(hash)replace(hash);initHotkeys();$(window).resize(function(){var timerID="timerLayout_"+state.id;if(window[timerID])clearTimeout(window[timerID]);window[timerID]=null;if(true||$.browser.msie)window[timerID]=setTimeout(resizeAll,100);else
resizeAll();});};var initContainer=function(){try{if($Container[0].tagName=="BODY"){$("html").css({height:"100%",overflow:"hidden"});$("body").css({position:"relative",height:"100%",overflow:"hidden",margin:0,padding:0,border:"none"});}else{var
CSS={overflow:"hidden"},p=$Container.css("position"),h=$Container.css("height");if(!$Container.hasClass("ui-layout-pane")){if(!p||"fixed,absolute,relative".indexOf(p)<0)CSS.position="relative";if(!h||h=="auto")CSS.height="100%";}$Container.css(CSS);}}catch(ex){}cDims=state.container=getElemDims($Container);};var initHotkeys=function(){$.each(c.borderPanes.split(","),function(i,pane){var o=options[pane];if(o.enableCursorHotkey||o.customHotkey){$(document).keydown(keyDown);return false;}});};var initOptions=function(){opts=transformData(opts);if(opts.effects){$.extend(effects,opts.effects);delete opts.effects;}$.each("name,scrollToBookmarkOnLoad".split(","),function(idx,key){if(opts[key]!==undefined)options[key]=opts[key];else if(opts.defaults[key]!==undefined){options[key]=opts.defaults[key];delete opts.defaults[key];}});$.each("paneSelector,resizerCursor,customHotkey".split(","),function(idx,key){delete opts.defaults[key];});$.extend(options.defaults,opts.defaults);c.center=$.extend(true,{},c.defaults,c.center);$.extend(options.center,opts.center);var o_Center=$.extend(true,{},options.defaults,opts.defaults,options.center);$.each("paneClass,contentSelector,contentIgnoreSelector,applyDefaultStyles,showOverflowOnHover".split(","),function(idx,key){options.center[key]=o_Center[key];});var defs=options.defaults;$.each(c.borderPanes.split(","),function(i,pane){c[pane]=$.extend(true,{},c.defaults,c[pane]);o=options[pane]=$.extend(true,{},options.defaults,options[pane],opts.defaults,opts[pane]);if(!o.paneClass)o.paneClass=defaults.paneClass;if(!o.resizerClass)o.resizerClass=defaults.resizerClass;if(!o.togglerClass)o.togglerClass=defaults.togglerClass;$.each(["_open","_close",""],function(i,n){var
sName="fxName"+n,sSpeed="fxSpeed"+n,sSettings="fxSettings"+n;o[sName]=opts[pane][sName]||opts[pane].fxName||opts.defaults[sName]||opts.defaults.fxName||o[sName]||o.fxName||defs[sName]||defs.fxName||"none";var fxName=o[sName];if(fxName=="none"||!$.effects||!$.effects[fxName]||(!effects[fxName]&&!o[sSettings]&&!o.fxSettings))fxName=o[sName]="none";var
fx=effects[fxName]||{},fx_all=fx.all||{},fx_pane=fx[pane]||{};o[sSettings]=$.extend({},fx_all,fx_pane,defs.fxSettings||{},defs[sSettings]||{},o.fxSettings,o[sSettings],opts.defaults.fxSettings,opts.defaults[sSettings]||{},opts[pane].fxSettings,opts[pane][sSettings]||{});o[sSpeed]=opts[pane][sSpeed]||opts[pane].fxSpeed||opts.defaults[sSpeed]||opts.defaults.fxSpeed||o[sSpeed]||o[sSettings].duration||o.fxSpeed||o.fxSettings.duration||defs.fxSpeed||defs.fxSettings.duration||fx_pane.duration||fx_all.duration||"normal";});});};var initPanes=function(){$.each(c.allPanes.split(","),function(){var
pane=str(this),o=options[pane],s=state[pane],fx=s.fx,dir=c[pane].dir,size=o.size=="auto"||isNaN(o.size)?0:o.size,minSize=o.minSize||1,maxSize=o.maxSize||9999,spacing=o.spacing_open||0,sel=o.paneSelector,isIE6=($.browser.msie&&$.browser.version<7),CSS={},$P,$C;$Cs[pane]=false;if(sel.substr(0,1)==="#")$P=$Ps[pane]=$Container.find(sel+":first");else{$P=$Ps[pane]=$Container.children(sel+":first");if(!$P.length)$P=$Ps[pane]=$Container.children("form:first").children(sel+":first");}if(!$P.length){$Ps[pane]=false;return true;}$P.attr("pane",pane).addClass(o.paneClass+" "+o.paneClass+"-"+pane);if(pane!="center"){s.isClosed=false;s.isSliding=false;s.isResizing=false;s.isHidden=false;s.noRoom=false;c[pane].pins=[];}CSS=$.extend({visibility:"visible",display:"block"},c.defaults.cssReq,c[pane].cssReq);if(o.applyDefaultStyles)$.extend(CSS,c.defaults.cssDef,c[pane].cssDef);$P.css(CSS);CSS={};switch(pane){case"north":CSS.top=cDims.top;CSS.left=cDims.left;CSS.right=cDims.right;break;case"south":CSS.bottom=cDims.bottom;CSS.left=cDims.left;CSS.right=cDims.right;break;case"west":CSS.left=cDims.left;break;case"east":CSS.right=cDims.right;break;case"center":}if(dir=="horz"){if(size===0||size=="auto"){$P.css({height:"auto"});size=$P.outerHeight();}size=max(size,minSize);size=min(size,maxSize);size=min(size,cDims.innerHeight-spacing);CSS.height=max(1,cssH(pane,size));s.size=size;s.maxSize=maxSize;s.minSize=max(minSize,size-CSS.height+1);$P.css(CSS);}else if(dir=="vert"){if(size===0||size=="auto"){$P.css({width:"auto",float:"left"});size=$P.outerWidth();$P.css({float:"none"});}size=max(size,minSize);size=min(size,maxSize);size=min(size,cDims.innerWidth-spacing);CSS.width=max(1,cssW(pane,size));s.size=size;s.maxSize=maxSize;s.minSize=max(minSize,size-CSS.width+1);$P.css(CSS);sizeMidPanes(pane,null,true);}else if(pane=="center"){$P.css(CSS);sizeMidPanes("center",null,true);}if(o.initClosed&&o.closable){$P.hide().addClass("closed");s.isClosed=true;}else if(o.initHidden||o.initClosed){hide(pane,true);s.isHidden=true;}else
$P.addClass("open");if(o.showOverflowOnHover)$P.hover(allowOverflow,resetOverflow);if(o.contentSelector){$C=$Cs[pane]=$P.children(o.contentSelector+":first");if(!$C.length){$Cs[pane]=false;return true;}$C.css(c.content.cssReq);if(o.applyDefaultStyles)$C.css(c.content.cssDef);$P.css({overflow:"hidden"});}});};var initHandles=function(){$.each(c.borderPanes.split(","),function(){var
pane=str(this),o=options[pane],s=state[pane],rClass=o.resizerClass,tClass=o.togglerClass,$P=$Ps[pane];$Rs[pane]=false;$Ts[pane]=false;if(!$P||(!o.closable&&!o.resizable))return;var
edge=c[pane].edge,isOpen=$P.is(":visible"),spacing=(isOpen?o.spacing_open:o.spacing_closed),_pane="-"+pane,_state=(isOpen?"-open":"-closed"),$R,$T;$R=$Rs[pane]=$("<span></span>");if(isOpen&&o.resizable);else if(!isOpen&&o.slidable)$R.attr("title",o.sliderTip).css("cursor",o.sliderCursor);$R.attr("id",(o.paneSelector.substr(0,1)=="#"?o.paneSelector.substr(1)+"-resizer":"")).attr("resizer",pane).css(c.resizers.cssReq).css(edge,cDims[edge]+getPaneSize(pane)).addClass(rClass+" "+rClass+_pane+" "+rClass+_state+" "+rClass+_pane+_state).appendTo($Container);if(o.applyDefaultStyles)$R.css(c.resizers.cssDef);if(o.closable){$T=$Ts[pane]=$("<div></div>");$T.attr("id",(o.paneSelector.substr(0,1)=="#"?o.paneSelector.substr(1)+"-toggler":"")).css(c.togglers.cssReq).attr("title",(isOpen?o.togglerTip_open:o.togglerTip_closed)).click(function(evt){toggle(pane);evt.stopPropagation();}).mouseover(function(evt){evt.stopPropagation();}).addClass(tClass+" "+tClass+_pane+" "+tClass+_state+" "+tClass+_pane+_state).appendTo($R);if(o.togglerContent_open)$("<span>"+o.togglerContent_open+"</span>").addClass("content content-open").css("display",s.isClosed?"none":"block").appendTo($T);if(o.togglerContent_closed)$("<span>"+o.togglerContent_closed+"</span>").addClass("content content-closed").css("display",s.isClosed?"block":"none").appendTo($T);if(o.applyDefaultStyles)$T.css(c.togglers.cssDef);if(!isOpen)bindStartSlidingEvent(pane,true);}});sizeHandles("all",true);};var initResizable=function(){var
draggingAvailable=(typeof $.fn.draggable=="function"),minPosition,maxPosition,edge;$.each(c.borderPanes.split(","),function(){var
pane=str(this),o=options[pane],s=state[pane];if(!draggingAvailable||!$Ps[pane]||!o.resizable){o.resizable=false;return true;}var
rClass=o.resizerClass,dragClass=rClass+"-drag",dragPaneClass=rClass+"-"+pane+"-drag",draggingClass=rClass+"-dragging",draggingPaneClass=rClass+"-"+pane+"-dragging",draggingClassSet=false,$P=$Ps[pane],$R=$Rs[pane];if(!s.isClosed)$R.attr("title",o.resizerTip).css("cursor",o.resizerCursor);$R.draggable({containment:$Container[0],axis:(c[pane].dir=="horz"?"y":"x"),delay:200,distance:1,helper:"clone",opacity:o.resizerDragOpacity,zIndex:c.zIndex.resizing,start:function(e,ui){if(false===execUserCallback(pane,o.onresize_start))return false;s.isResizing=true;clearTimer(pane,"closeSlider");$R.addClass(dragClass+" "+dragPaneClass);draggingClassSet=false;var resizerWidth=(pane=="east"||pane=="south"?o.spacing_open:0);setPaneMinMaxSizes(pane);s.minPosition-=resizerWidth;s.maxPosition-=resizerWidth;edge=(c[pane].dir=="horz"?"top":"left");$(o.maskIframesOnResize===true?"iframe":o.maskIframesOnResize).each(function(){$('<div class="ui-layout-mask"/>').css({background:"#fff",opacity:"0.001",zIndex:9,position:"absolute",width:this.offsetWidth+"px",height:this.offsetHeight+"px"}).css($(this).offset()).appendTo(this.parentNode);});},drag:function(e,ui){if(!draggingClassSet){$(".ui-draggable-dragging").addClass(draggingClass+" "+draggingPaneClass).children().css("visibility","hidden");draggingClassSet=true;if(s.isSliding)$Ps[pane].css("zIndex",c.zIndex.sliding);}if(ui.position[edge]<s.minPosition)ui.position[edge]=s.minPosition;else if(ui.position[edge]>s.maxPosition)ui.position[edge]=s.maxPosition;},stop:function(e,ui){var
dragPos=ui.position,resizerPos,newSize;$R.removeClass(dragClass+" "+dragPaneClass);switch(pane){case"north":resizerPos=dragPos.top;break;case"west":resizerPos=dragPos.left;break;case"south":resizerPos=cDims.outerHeight-dragPos.top-$R.outerHeight();break;case"east":resizerPos=cDims.outerWidth-dragPos.left-$R.outerWidth();break;}newSize=resizerPos-cDims[c[pane].edge];sizePane(pane,newSize);$("div.ui-layout-mask").remove();s.isResizing=false;}});});};var hide=function(pane,onInit){var
o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane];if(!$P||s.isHidden)return;if(false===execUserCallback(pane,o.onhide_start))return;s.isSliding=false;if($R)$R.hide();if(onInit||s.isClosed){s.isClosed=true;s.isHidden=true;$P.hide();sizeMidPanes(c[pane].dir=="horz"?"all":"center");execUserCallback(pane,o.onhide_end||o.onhide);}else{s.isHiding=true;close(pane,false);}};var show=function(pane,openPane){var
o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane];if(!$P||!s.isHidden)return;if(false===execUserCallback(pane,o.onshow_start))return;s.isSliding=false;s.isShowing=true;if($R&&o.spacing_open>0)$R.show();if(openPane===false)close(pane,true);else
open(pane);};var toggle=function(pane){var s=state[pane];if(s.isHidden)show(pane);else if(s.isClosed)open(pane);else
close(pane);};var close=function(pane,force,noAnimation){var
$P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],doFX=!noAnimation&&!s.isClosed&&(o.fxName_close!="none"),edge=c[pane].edge,rClass=o.resizerClass,tClass=o.togglerClass,_pane="-"+pane,_open="-open",_sliding="-sliding",_closed="-closed",isShowing=s.isShowing,isHiding=s.isHiding;delete s.isShowing;delete s.isHiding;if(!$P||(!o.resizable&&!o.closable))return;else if(!force&&s.isClosed&&!isShowing)return;if(c.isLayoutBusy){setFlowCallback("close",pane,force);return;}if(!isShowing&&false===execUserCallback(pane,o.onclose_start))return;c[pane].isMoving=true;c.isLayoutBusy=true;s.isClosed=true;if(isHiding)s.isHidden=true;else if(isShowing)s.isHidden=false;syncPinBtns(pane,false);if(!s.isSliding)sizeMidPanes(c[pane].dir=="horz"?"all":"center");if($R){$R.css(edge,cDims[edge]).removeClass(rClass+_open+" "+rClass+_pane+_open).removeClass(rClass+_sliding+" "+rClass+_pane+_sliding).addClass(rClass+_closed+" "+rClass+_pane+_closed);if(o.resizable)$R.draggable("disable").css("cursor","default").attr("title","");if($T){$T.removeClass(tClass+_open+" "+tClass+_pane+_open).addClass(tClass+_closed+" "+tClass+_pane+_closed).attr("title",o.togglerTip_closed);}sizeHandles();}if(doFX){lockPaneForFX(pane,true);$P.hide(o.fxName_close,o.fxSettings_close,o.fxSpeed_close,function(){lockPaneForFX(pane,false);if(!s.isClosed)return;close_2();});}else{$P.hide();close_2();}function close_2(){bindStartSlidingEvent(pane,true);if(!isShowing)execUserCallback(pane,o.onclose_end||o.onclose);if(isShowing)execUserCallback(pane,o.onshow_end||o.onshow);if(isHiding)execUserCallback(pane,o.onhide_end||o.onhide);execFlowCallback(pane);}};var open=function(pane,slide,noAnimation){var
$P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane],o=options[pane],s=state[pane],doFX=!noAnimation&&s.isClosed&&(o.fxName_open!="none"),edge=c[pane].edge,rClass=o.resizerClass,tClass=o.togglerClass,_pane="-"+pane,_open="-open",_closed="-closed",_sliding="-sliding",isShowing=s.isShowing;delete s.isShowing;if(!$P||(!o.resizable&&!o.closable))return;else if(!s.isClosed&&!s.isSliding)return;if(s.isHidden&&!isShowing){show(pane,true);return;}if(c.isLayoutBusy){setFlowCallback("open",pane,slide);return;}if(false===execUserCallback(pane,o.onopen_start))return;c[pane].isMoving=true;c.isLayoutBusy=true;if(s.isSliding&&!slide)bindStopSlidingEvents(pane,false);s.isClosed=false;if(isShowing)s.isHidden=false;setPaneMinMaxSizes(pane);if(s.size>s.maxSize)$P.css(c[pane].sizeType,max(1,cssSize(pane,s.maxSize)));bindStartSlidingEvent(pane,false);if(doFX){lockPaneForFX(pane,true);$P.show(o.fxName_open,o.fxSettings_open,o.fxSpeed_open,function(){lockPaneForFX(pane,false);if(s.isClosed)return;open_2();});}else{$P.show();open_2();}function open_2(){if(!s.isSliding)sizeMidPanes(c[pane].dir=="vert"?"center":"all");if($R){$R.css(edge,cDims[edge]+getPaneSize(pane)).removeClass(rClass+_closed+" "+rClass+_pane+_closed).addClass(rClass+_open+" "+rClass+_pane+_open).addClass(!s.isSliding?"":rClass+_sliding+" "+rClass+_pane+_sliding);if(o.resizable)$R.draggable("enable").css("cursor",o.resizerCursor).attr("title",o.resizerTip);else
$R.css("cursor","default");if($T){$T.removeClass(tClass+_closed+" "+tClass+_pane+_closed).addClass(tClass+_open+" "+tClass+_pane+_open).attr("title",o.togglerTip_open);}sizeHandles("all");}sizeContent(pane);syncPinBtns(pane,!s.isSliding);execUserCallback(pane,o.onopen_end||o.onopen);if(isShowing)execUserCallback(pane,o.onshow_end||o.onshow);execFlowCallback(pane);}};var lockPaneForFX=function(pane,doLock){var $P=$Ps[pane];if(doLock){$P.css({zIndex:c.zIndex.animation});if(pane=="south")$P.css({top:cDims.top+cDims.innerHeight-$P.outerHeight()});else if(pane=="east")$P.css({left:cDims.left+cDims.innerWidth-$P.outerWidth()});}else{if(!state[pane].isSliding)$P.css({zIndex:c.zIndex.pane_normal});if(pane=="south")$P.css({top:"auto"});else if(pane=="east")$P.css({left:"auto"});}};var bindStartSlidingEvent=function(pane,enable){var
o=options[pane],$R=$Rs[pane],trigger=o.slideTrigger_open;if(!$R||!o.slidable)return;if(trigger!="click"&&trigger!="dblclick"&&trigger!="mouseover")trigger="click";$R
[enable?"bind":"unbind"](trigger,slideOpen).css("cursor",(enable?o.sliderCursor:"default")).attr("title",(enable?o.sliderTip:""));};var bindStopSlidingEvents=function(pane,enable){var
o=options[pane],s=state[pane],trigger=o.slideTrigger_close,action=(enable?"bind":"unbind"),$P=$Ps[pane],$R=$Rs[pane];s.isSliding=enable;clearTimer(pane,"closeSlider");$P.css({zIndex:(enable?c.zIndex.sliding:c.zIndex.pane_normal)});$R.css({zIndex:(enable?c.zIndex.sliding:c.zIndex.resizer_normal)});if(trigger!="click"&&trigger!="mouseout")trigger="mouseout";if(enable){$P.bind(trigger,slideClosed);$R.bind(trigger,slideClosed);if(trigger="mouseout"){$P.bind("mouseover",cancelMouseOut);$R.bind("mouseover",cancelMouseOut);}}else{$P.unbind(trigger);$R.unbind(trigger);if(trigger="mouseout"){$P.unbind("mouseover");$R.unbind("mouseover");clearTimer(pane,"closeSlider");}}function cancelMouseOut(evt){clearTimer(pane,"closeSlider");evt.stopPropagation();}};var slideOpen=function(){var pane=$(this).attr("resizer");if(state[pane].isClosed){bindStopSlidingEvents(pane,true);open(pane,true);}};var slideClosed=function(){var
$E=$(this),pane=$E.attr("pane")||$E.attr("resizer"),o=options[pane],s=state[pane];if(s.isClosed||s.isResizing)return;else if(o.slideTrigger_close=="click")close_NOW();else
setTimer(pane,"closeSlider",close_NOW,300);function close_NOW(){bindStopSlidingEvents(pane,false);if(!s.isClosed)close(pane);}};var sizePane=function(pane,size){var
edge=c[pane].edge,dir=c[pane].dir,o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane];setPaneMinMaxSizes(pane);s.minSize=max(s.minSize,o.minSize);if(o.maxSize>0)s.maxSize=min(s.maxSize,o.maxSize);size=max(size,s.minSize);size=min(size,s.maxSize);s.size=size;$R.css(edge,size+cDims[edge]);$P.css(c[pane].sizeType,max(1,cssSize(pane,size)));if(!s.isSliding)sizeMidPanes(dir=="horz"?"all":"center");sizeHandles();sizeContent(pane);execUserCallback(pane,o.onresize_end||o.onresize);};var sizeMidPanes=function(panes,overrideDims,onInit){if(!panes||panes=="all")panes="east,west,center";var d=getPaneDims();if(overrideDims)$.extend(d,overrideDims);$.each(panes.split(","),function(){if(!$Ps[this])return;var
pane=str(this),o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane],hasRoom=true,CSS={};if(pane=="center"){d=getPaneDims();CSS=$.extend({},d);CSS.width=max(1,cssW(pane,CSS.width));CSS.height=max(1,cssH(pane,CSS.height));hasRoom=(CSS.width>1&&CSS.height>1);if($.browser.msie&&(!$.boxModel||$.browser.version<7)){if($Ps.north)$Ps.north.css({width:cssW($Ps.north,cDims.innerWidth)});if($Ps.south)$Ps.south.css({width:cssW($Ps.south,cDims.innerWidth)});}}else{CSS.top=d.top;CSS.bottom=d.bottom;CSS.height=max(1,cssH(pane,d.height));hasRoom=(CSS.height>1);}if(hasRoom){$P.css(CSS);if(s.noRoom){s.noRoom=false;if(s.isHidden)return;else show(pane,!s.isClosed);}if(!onInit){sizeContent(pane);execUserCallback(pane,o.onresize_end||o.onresize);}}else if(!s.noRoom){s.noRoom=true;if(s.isHidden)return;if(onInit){$P.hide();if($R)$R.hide();}else hide(pane);}});};var sizeContent=function(panes){if(!panes||panes=="all")panes=c.allPanes;$.each(panes.split(","),function(){if(!$Cs[this])return;var
pane=str(this),ignore=options[pane].contentIgnoreSelector,$P=$Ps[pane],$C=$Cs[pane],e_C=$C[0],height=cssH($P);;$P.children().each(function(){if(this==e_C)return;var $E=$(this);if(!ignore||!$E.is(ignore))height-=$E.outerHeight();});if(height>0)height=cssH($C,height);if(height<1)$C.hide();else
$C.css({height:height}).show();});};var sizeHandles=function(panes,onInit){if(!panes||panes=="all")panes=c.borderPanes;$.each(panes.split(","),function(){var
pane=str(this),o=options[pane],s=state[pane],$P=$Ps[pane],$R=$Rs[pane],$T=$Ts[pane];if(!$P||!$R||(!o.resizable&&!o.closable))return;var
dir=c[pane].dir,_state=(s.isClosed?"_closed":"_open"),spacing=o["spacing"+_state],togAlign=o["togglerAlign"+_state],togLen=o["togglerLength"+_state],paneLen,offset,CSS={};if(spacing==0){$R.hide();return;}else if(!s.noRoom&&!s.isHidden)$R.show();if(dir=="horz"){paneLen=$P.outerWidth();$R.css({width:max(1,cssW($R,paneLen)),height:max(1,cssH($R,spacing)),left:cssNum($P,"left")});}else{paneLen=$P.outerHeight();$R.css({height:max(1,cssH($R,paneLen)),width:max(1,cssW($R,spacing)),top:cDims.top+getPaneSize("north",true)});}if($T){if(togLen==0||(s.isSliding&&o.hideTogglerOnSlide)){$T.hide();return;}else
$T.show();if(!(togLen>0)||togLen=="100%"||togLen>paneLen){togLen=paneLen;offset=0;}else{if(typeof togAlign=="string"){switch(togAlign){case"top":case"left":offset=0;break;case"bottom":case"right":offset=paneLen-togLen;break;case"middle":case"center":default:offset=Math.floor((paneLen-togLen)/2);}}else{var x=parseInt(togAlign);if(togAlign>=0)offset=x;else offset=paneLen-togLen+x;}}var
$TC_o=(o.togglerContent_open?$T.children(".content-open"):false),$TC_c=(o.togglerContent_closed?$T.children(".content-closed"):false),$TC=(s.isClosed?$TC_c:$TC_o);if($TC_o)$TC_o.css("display",s.isClosed?"none":"block");if($TC_c)$TC_c.css("display",s.isClosed?"block":"none");if(dir=="horz"){var width=cssW($T,togLen);$T.css({width:max(0,width),height:max(1,cssH($T,spacing)),left:offset});if($TC)$TC.css("marginLeft",Math.floor((width-$TC.outerWidth())/2));}else{var height=cssH($T,togLen);$T.css({height:max(0,height),width:max(1,cssW($T,spacing)),top:offset});if($TC)$TC.css("marginTop",Math.floor((height-$TC.outerHeight())/2));}}if(onInit&&o.initHidden){$R.hide();if($T)$T.hide();}});};var resizeAll=function(){var
oldW=cDims.innerWidth,oldH=cDims.innerHeight;cDims=state.container=getElemDims($Container);var
checkH=(cDims.innerHeight<oldH),checkW=(cDims.innerWidth<oldW),s,dir;if(checkH||checkW)$.each(["south","north","east","west"],function(i,pane){s=state[pane];dir=c[pane].dir;if(!s.isClosed&&((checkH&&dir=="horz")||(checkW&&dir=="vert"))){setPaneMinMaxSizes(pane);if(s.size>s.maxSize)sizePane(pane,s.maxSize);}});sizeMidPanes("all");sizeHandles("all");};function keyDown(evt){if(!evt)return true;var code=evt.keyCode;if(code<33)return true;var
PANE={38:"north",40:"south",37:"west",39:"east"},isCursorKey=(code>=37&&code<=40),ALT=evt.altKey,SHIFT=evt.shiftKey,CTRL=evt.ctrlKey,pane=false,s,o,k,m,el;if(!CTRL&&!SHIFT)return true;else if(isCursorKey&&options[PANE[code]].enableCursorHotkey)pane=PANE[code];else
$.each(c.borderPanes.split(","),function(i,p){o=options[p];k=o.customHotkey;m=o.customHotkeyModifier;if((SHIFT&&m=="SHIFT")||(CTRL&&m=="CTRL")||(CTRL&&SHIFT)){if(k&&code==(isNaN(k)||k<=9?k.toUpperCase().charCodeAt(0):k)){pane=p;return false;}}});if(!pane)return true;o=options[pane];s=state[pane];if(!o.enableCursorHotkey||s.isHidden||!$Ps[pane])return true;el=evt.target||evt.srcElement;if(el&&SHIFT&&isCursorKey&&(el.tagName=="TEXTAREA"||(el.tagName=="INPUT"&&(code==37||code==39))))return true;toggle(pane);evt.stopPropagation();evt.returnValue=false;return false;};function allowOverflow(elem){if(this&&this.tagName)elem=this;var $P;if(typeof elem=="string")$P=$Ps[elem];else{if($(elem).attr("pane"))$P=$(elem);else $P=$(elem).parents("div[pane]:first");}if(!$P.length)return;var
pane=$P.attr("pane"),s=state[pane];if(s.cssSaved)resetOverflow(pane);if(s.isSliding||s.isResizing||s.isClosed){s.cssSaved=false;return;}var
newCSS={zIndex:(c.zIndex.pane_normal+1)},curCSS={},of=$P.css("overflow"),ofX=$P.css("overflowX"),ofY=$P.css("overflowY");if(of!="visible"){curCSS.overflow=of;newCSS.overflow="visible";}if(ofX&&ofX!="visible"&&ofX!="auto"){curCSS.overflowX=ofX;newCSS.overflowX="visible";}if(ofY&&ofY!="visible"&&ofY!="auto"){curCSS.overflowY=ofX;newCSS.overflowY="visible";}s.cssSaved=curCSS;$P.css(newCSS);$.each(c.allPanes.split(","),function(i,p){if(p!=pane)resetOverflow(p);});};function resetOverflow(elem){if(this&&this.tagName)elem=this;var $P;if(typeof elem=="string")$P=$Ps[elem];else{if($(elem).hasClass("ui-layout-pane"))$P=$(elem);else $P=$(elem).parents("div[pane]:first");}if(!$P.length)return;var
pane=$P.attr("pane"),s=state[pane],CSS=s.cssSaved||{};if(!s.isSliding&&!s.isResizing)$P.css("zIndex",c.zIndex.pane_normal);$P.css(CSS);s.cssSaved=false;};function getBtn(selector,pane,action){var
$E=$(selector),err="Error Adding Button \n\nInvalid ";if(!$E.length)alert(err+"selector: "+selector);else if(c.borderPanes.indexOf(pane)==-1)alert(err+"pane: "+pane);else{var btn=options[pane].buttonClass+"-"+action;$E.addClass(btn+" "+btn+"-"+pane);return $E;}return false;};function addToggleBtn(selector,pane){var $E=getBtn(selector,pane,"toggle");if($E)$E.attr("title",state[pane].isClosed?"Open":"Close").click(function(evt){toggle(pane);evt.stopPropagation();});};function addOpenBtn(selector,pane){var $E=getBtn(selector,pane,"open");if($E)$E.attr("title","Open").click(function(evt){open(pane);evt.stopPropagation();});};function addCloseBtn(selector,pane){var $E=getBtn(selector,pane,"close");if($E)$E.attr("title","Close").click(function(evt){close(pane);evt.stopPropagation();});};function addPinBtn(selector,pane){var $E=getBtn(selector,pane,"pin");if($E){var s=state[pane];$E.click(function(evt){setPinState($(this),pane,(s.isSliding||s.isClosed));if(s.isSliding||s.isClosed)open(pane);else close(pane);evt.stopPropagation();});setPinState($E,pane,(!s.isClosed&&!s.isSliding));c[pane].pins.push(selector);}};function syncPinBtns(pane,doPin){$.each(c[pane].pins,function(i,selector){setPinState($(selector),pane,doPin);});};function setPinState($Pin,pane,doPin){var updown=$Pin.attr("pin");if(updown&&doPin==(updown=="down"))return;var
root=options[pane].buttonClass,class1=root+"-pin",class2=class1+"-"+pane,UP1=class1+"-up",UP2=class2+"-up",DN1=class1+"-down",DN2=class2+"-down";$Pin.attr("pin",doPin?"down":"up").attr("title",doPin?"Un-Pin":"Pin").removeClass(doPin?UP1:DN1).removeClass(doPin?UP2:DN2).addClass(doPin?DN1:UP1).addClass(doPin?DN2:UP2);};var
$Container=$(this).css({overflow:"hidden"}),$Ps={},$Cs={},$Rs={},$Ts={},c=config,cDims=state.container;create();return{options:options,state:state,panes:$Ps,toggle:toggle,open:open,close:close,hide:hide,show:show,resizeContent:sizeContent,sizePane:sizePane,resizeAll:resizeAll,addToggleBtn:addToggleBtn,addOpenBtn:addOpenBtn,addCloseBtn:addCloseBtn,addPinBtn:addPinBtn,allowOverflow:allowOverflow,resetOverflow:resetOverflow,cssWidth:cssW,cssHeight:cssH};}})(jQuery);

