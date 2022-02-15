//*** EZ  ***
// google reader code that changes
//**************************


function g(a) {
    throw a;
}
var i = void 0,
j = true,
k = null,
n = false,
o,
aa = /["^<>?&\\/,
] + /,ba="/reader / api / 0 / token ",ca=" / reader / api / 0 / scrub - html ",da=" / reader / js - load - error ",ea=" / reader / logging ",fa="token - fetch ",ga="mozilla ",ha="ie ",ia="ie6 ",ja="ie7 ",ka="ie8 ",la="safari ",ma="android ",na="chrome ",oa="opera ",pa="unknown ",qa="bad - json ";var ra={z:"Read items ",r:"Your read items ",w:"You have no read items.",O:"Items read by % 1 ",X:" % 1 hasn & #39;
t yet read anything."},sa={z:"All items ",r:"Your reading list ",w:"Your reading list is empty.",J:"Your reading list has no unread items.",O:"The reading list of % 1 ",X:"The reading list of % 1 is currently empty.",sa:"You have no unread items from the reading list of % 1 "},ta={z:"Starred items ",r:"Your starred items ",w:"You have no starred items.",J:"You have no unread starred items.",O:"Items starred by % 1 ",
X:" % 1 has no starred items.",sa:"You have read all of the items starred by % 1."},ua={z:"Liked items ",r:"Your liked items ",w:"You have no liked items.",J:"You have no unread liked items.",O:"Items liked by % 1 ",X:" % 1 has no liked items.",sa:"You have read all of the items liked by % 1."},va={z:"Items you & #39;
re not interested in ",r:"Items you & #39;
re not interested in ",w:"There are no items you & #39;
re not interested in ."},wa={r:"Your & quot; % 1 & quot;
items ",w:"You have no & quot; % 1 & quot;
items.",J:"You have no unread & quot; % 1 & quot;
items.",
O:" & quot; % 1 & quot;
via % 2 ",X:"There are currently no & quot; % 1 & quot;
via % 2 items.",sa:"You have read all of the & quot; % 1 & quot;
via % 2 items."},xa={r:"Your & quot;
kept unread & quot;
items ",z:" & quot;
Kept unread & quot;
items ",w:"You have no & quot;
kept unread & quot;
items."},ya={r:"Your shared items ",z:"Shared items ",w:"You have no shared items.",O:"Items shared by % 1 ",X:" % 1 has no shared items."},za={r:"Blogs I & #39;
m following ",z:"Blogs I & #39;
m following ",w:"The blogs you & #39;
re following have no items.",
J:"The blogs you & #39;
re following have no unread items."},Aa={r:"People you follow ",z:"People you follow ",w:'The people you follow haven&#39;t shared any items. <span class="friends - empty - msg ">You can see more about following and your profile on the <span class="link friends - settings ">settings page</span>.</span>',J:'You have no unread items from the people you follow. <span class="friends - empty - msg ">You can see more about following and your profile on the <span class="link friends - settings ">settings page</span>.</span>'},
Ba={r:"Comment view ",z:"Comment view "},Ca={r:"Your posts ",z:"Posts ",w:"You have no posts. & lt;
span class = &quot;
post - empty - msg & quot; & gt;...but you can add updates to your Shared Items using the form above or share links from the web by using the bookmarklet. & lt;
/span&gt;",J:"You have no unread posts.",O:"Posts by %1",X:"%1 has no posts.",sa:"You have read all of the posts by %1."},Da={r:"Your links",z:"Links",w:"You have no links.",J:"You have no unread links.",O:"Links by %1",X:"%1 has no links.",
sa:"You have read all of the links posted by %1."},Ea={r:"Your notes",z:"Notes",w:"You have no notes.",J:"You have no unread notes."},Fa={r:"Your stuff",z:"Your stuff",w:"You haven&#39;t created any stuff yet.",J:"None of your stuff is unread."};var Ga=Ga||{},q=this;function r(){}
function Ha(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function s(a){return a!==i}function t(a){return Ha(a)=="array"}function Ia(a){var b=Ha(a);return b=="array"||b=="object"&&typeof a.length=="number"}function v(a){return typeof a=="string"}function Ja(a){return Ha(a)=="function"}function Ka(a){a=Ha(a);return a=="object"||a=="array"||a=="function"}function w(a){return a[La]||(a[La]=++Ma)}var La="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),Ma=0;
function Na(a,b,c){return a.call.apply(a.Vb,arguments)}function Pa(a,b,c){a||g(Error());if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}else return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.Vb&&Function.prototype.Vb.toString().indexOf("native code")!=-1?Na:Pa;return x.apply(k,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=Array.prototype.slice.call(arguments);d.unshift.apply(d,c);return a.apply(this,d)}}var Ra=Date.now||function(){return+new Date};function y(a,b){function c(){}c.prototype=b.prototype;a.d=b.prototype;a.prototype=new c}function Sa(a){return a.replace(/ [\s\xa0] + /g," ").replace(/^\s + |\s + $ / g,
"")
}
function z(a) {
    return / ^ [\s\xa0] * $ / .test(a == k ? "": String(a))
    }
function Ta(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
var Ua = /^[a-zA-Z0-9\-_.!~*'()]*$/;function Va(a) {
    a = String(a);
    return ! Ua.test(a) ? encodeURIComponent(a) : a
}
function Wa(a, b) {
    if (b)
        return a.replace(Xa, "&amp;").replace(Ya, "&lt;").replace(Za, "&gt;").replace($a, "&quot;");
    else {
        if (!ab.test(a))
            return a;
        a.indexOf("&") != -1 && (a = a.replace(Xa, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Ya, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Za, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace($a, "&quot;"));
        return a
    }
}
var Xa = /&/g,
Ya = /</g,
Za = />/g,
$a = /\"/g,
ab = /[&<>\"]/;function bb(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    },
    c = document.createElement("div");
    return a.replace(cb, function(d, e) {
        var f = b[d];
        if (f)
            return f;
        if (e.charAt(0) == "#") {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
            }
        if (!f)
            c.innerHTML = d + " ",
        f = c.firstChild.nodeValue.slice(0, -1);
        return b[d] = f
    })
    }
function db(a) {
    return a.replace(/&([^;]+);/g, function(b, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if (c.charAt(0) == "#") {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d))
                    return String.fromCharCode(d)
                }
            return b
        }
    })
    }
var cb = /&([^;\s<&]+);?/g;function eb(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
function fb(a, b) {
    if (a < b)
        return - 1;
    else if (a > b)
        return 1;
    return 0
}
var A = Array.prototype,
gb = A.indexOf ? function(a, b, c) {
    return A.indexOf.call(a, b, c)
    }: function(a, b, c) {
    c = c == k ? 0: c < 0 ? Math.max(0, a.length + c) : c;
    if (v(a))
        return ! v(b) || b.length != 1 ? -1: a.indexOf(b, c);
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
        return c;
    return - 1
},
hb = A.forEach ? function(a, b, c) {
    A.forEach.call(a, b, c)
    }: function(a, b, c) {
    for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
    },
ib = A.filter ? function(a, b, c) {
    return A.filter.call(a, b, c)
    }: function(a, b, c) {
    for (var d = a.length, e = [], f = 0, h = v(a) ? a.split("") : a, l = 0; l < d; l++)
        if (l in h) {
        var m = h[l];
        b.call(c, m, l, a) && (e[f++] = m)
        }
    return e
},
jb = A.map ? function(a, b, c) {
    return A.map.call(a, b, c)
    }: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, h = 0; h < d; h++)
        h in f && (e[h] = b.call(c, f[h], h, a));
    return e
};function kb(a, b) {
    return gb(a, b) >= 0
}
function lb(a, b) {
    var c = gb(a, b),
    d; (d = c >= 0) && A.splice.call(a, c, 1);
    return d
}
function mb(a) {
    return A.concat.apply(A, arguments)
    }
function nb(a) {
    if (t(a))
        return mb(a);
    else {
        for (var b = [], c = 0, d = a.length; c < d; c++)
            b[c] = a[c];
        return b
    }
}
function ob(a, b, c, d) {
    return A.splice.apply(a, pb(arguments, 1))
    }
function pb(a, b, c) {
    return arguments.length <= 2 ? A.slice.call(a, b) : A.slice.call(a, b, c)
    }
var qb;function rb(a) {
    return (a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
    }
function B(a, b) {
    var c = rb(a),
    d = pb(arguments, 1),
    e;
    e = c;
    for (var f = 0, h = 0; h < d.length; h++)
        kb(e, d[h]) || (e.push(d[h]), f++);
    e = f == d.length;
    a.className = c.join(" ");
    return e
}
function C(a, b) {
    var c = rb(a),
    d = pb(arguments, 1),
    e;
    e = c;
    for (var f = 0, h = 0; h < e.length; h++)
        kb(d, e[h]) && (ob(e, h--, 1), f++);
    e = f == d.length;
    a.className = c.join(" ");
    return e
}
var sb = "StopIteration" in q ? q.StopIteration: Error("StopIteration");function tb() {}
tb.prototype.$a = function() {
    g(sb)
    };tb.prototype.jb = function() {
    return this
};function ub(a) {
    if (a instanceof tb)
        return a;
    if (typeof a.jb == "function")
        return a.jb(n);
    if (Ia(a)) {
        var b = 0,
        c = new tb;
        c.$a = function() {
            for (;;)
                if (b >= a.length && g(sb), b in a)
                return a[b++];
            else
                b++
        };
        return c
    }
    g(Error("Not implemented"))
    }
function vb(a, b, c) {
    if (Ia(a))
        try {
        hb(a, b, c)
        } catch(d) {
        d !== sb && g(d)
        } else {
        a = ub(a);
        try {
            for (;;)
                b.call(c, a.$a(), i, a)
            } catch(e) {
            e !== sb && g(e)
            }
    }
}
function wb(a, b, c) {
    a = ub(a);
    try {
        for (;;)
            if (b.call(c, a.$a(), i, a))
            return j
    } catch(d) {
        d !== sb && g(d)
        }
    return n
}
function xb(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
    }
function yb(a) {
    var b = [],
    c = 0,
    d;
    for (d in a)
        b[c++] = a[d];
    return b
}
function zb(a) {
    var b = [],
    c = 0,
    d;
    for (d in a)
        b[c++] = d;
    return b
}
function Ab(a) {
    for (var b in a)
        return n;
    return j
}
var Bb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function Cb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Bb.length; f++)
            c = Bb[f],
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
}
function Db(a) {
    if (typeof a.Oa == "function")
        return a.Oa();
    if (v(a))
        return a.split("");
    if (Ia(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return yb(a)
    }
function Eb(a, b, c) {
    if (typeof a.forEach == "function")
        a.forEach(b, c);
    else if (Ia(a) || v(a))
        hb(a, b, c);
    else {
        var d;
        if (typeof a.tb == "function")
            d = a.tb();
        else if (typeof a.Oa != "function")
            if (Ia(a) || v(a)) {
            d = [];
            for (var e = a.length, f = 0; f < e; f++)
                d.push(f)
            } else
            d = zb(a);
        else
            d = i;
        for (var e = Db(a), f = e.length, h = 0; h < f; h++)
            b.call(c, e[h], d && d[h], a)
        }
}
function Fb(a, b) {
    this.V = {};
    this.h = [];
    var c = arguments.length;
    if (c > 1) {
        c % 2 && g(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
        } else if (a) {
        a instanceof Fb ? (c = a.tb(), d = a.Oa()) : (c = zb(a), d = yb(a));
        for (var e = 0; e < c.length; e++)
            this.set(c[e], d[e])
        }
}
o = Fb.prototype;o.m = 0;o.Qb = 0;o.Oa = function() {
    Gb(this);
    for (var a = [], b = 0; b < this.h.length; b++)
        a.push(this.V[this.h[b]]);
    return a
};o.tb = function() {
    Gb(this);
    return this.h.concat()
    };o.qb = function(a, b) {
    if (this === a)
        return j;
    if (this.m != a.m)
        return n;
    var c = b || Hb;
    Gb(this);
    for (var d, e = 0; d = this.h[e]; e++)
        if (!c(this.xa(d), a.xa(d)))
        return n;
    return j
};function Hb(a, b) {
    return a === b
}
o.mc = function() {
    return this.m == 0
};function Gb(a) {
    if (a.m != a.h.length) {
        for (var b = 0, c = 0; b < a.h.length;) {
            var d = a.h[b];
            Object.prototype.hasOwnProperty.call(a.V, d) && (a.h[c++] = d);
            b++
        }
        a.h.length = c
    }
    if (a.m != a.h.length) {
        for (var e = {}, c = b = 0; b < a.h.length;)
            d = a.h[b],
        Object.prototype.hasOwnProperty.call(e, d) || (a.h[c++] = d, e[d] = 1),
        b++;
        a.h.length = c
    }
}
o.xa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(this.V, a) ? this.V[a] : b
};o.set = function(a, b) {
    Object.prototype.hasOwnProperty.call(this.V, a) || (this.m++, this.h.push(a), this.Qb++);
    this.V[a] = b
};o.Ka = function() {
    return new Fb(this)
    };o.jb = function(a) {
    Gb(this);
    var b = 0,
    c = this.h,
    d = this.V,
    e = this.Qb,
    f = this,
    h = new tb;
    h.$a = function() {
        for (;;) {
            e != f.Qb && g(Error("The map has changed since the iterator was created"));
            b >= c.length && g(sb);
            var l = c[b++];
            return a ? l: d[l]
            }
    };
    return h
};
var Ib,
Jb,
Kb,
Lb,
Mb;function Nb() {
    return q.navigator ? q.navigator.userAgent: k
}
function Ob() {
    return q.navigator
}
Lb = Kb = Jb = Ib = n;
var Pb;
if (Pb = Nb()) {
    var Qb = Ob();
    Ib = Pb.indexOf("Opera") == 0;
    Jb = !Ib && Pb.indexOf("MSIE") != -1;
    Kb = !Ib && Pb.indexOf("WebKit") != -1;
    Lb = !Ib && !Kb && Qb.product == "Gecko"
}
var Rb = Ib,
D = Jb,
E = Lb,
F = Kb,
Sb = Ob();Mb = (Sb && Sb.platform || "").indexOf("Mac") != -1;
var Tb;
if (Tb = !!Ob())
    Tb = (Ob().appVersion || "").indexOf("X11") != -1;
var Ub = Tb,
Vb;a: {
    var Wb = "",
    Xb;
    if (Rb && q.opera)
        var Yb = q.opera.version,
    Wb = typeof Yb == "function" ? Yb() : Yb;
    else if (E ? Xb = /rv\:([^\);]+)(\)|;)/: D ? Xb = /MSIE\s+([^\);]+)(\)|;)/: F && (Xb = /WebKit\/(\S+)/), Xb)
        var Zb = Xb.exec(Nb()),
    Wb = Zb ? Zb[1] : "";
    if (D) {
        var $b,
        ac = q.document;
        $b = ac ? ac.documentMode: i;
        if ($b > parseFloat(Wb)) {
            Vb = String($b);
            break a
        }
    }
    Vb = Wb
}
var bc = Vb,
cc = {};function G(a) {
    var b;
    if (! (b = cc[a])) {
        b = 0;
        for (var c = Ta(String(bc)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; b == 0 && f < e; f++) {
            var h = c[f] || "",
            l = d[f] || "",
            m = RegExp("(\\d*)(\\D*)", "g"),
            p = RegExp("(\\d*)(\\D*)", "g");
            do {
                var J = m.exec(h) || ["", "", ""],
                u = p.exec(l) || ["", "", ""];
                if (J[0].length == 0 && u[0].length == 0)
                    break;
                b = fb(J[1].length == 0 ? 0: parseInt(J[1], 10), u[1].length == 0 ? 0: parseInt(u[1], 10)) || fb(J[2].length == 0, u[2].length == 0) || fb(J[2], u[2])
                }
            while (b == 0)
            }
        b = cc[a] = b >= 0
    }
    return b
}
var dc = {};function ec(a) {
    return dc[a] || (dc[a] = D && document.documentMode && document.documentMode >= a)
    }
function fc(a) {
    fc[" "](a);
    return a
}
fc[" "] = r;
var gc; ! D || ec(9);
var hc = D && !G("8");function ic() {}
ic.prototype.ac = n;ic.prototype.p = function() {
    if (!this.ac)
        this.ac = j,
    this.e()
    };ic.prototype.e = function() {
    this.fd && jc.apply(k, this.fd)
    };function kc(a) {
    a && typeof a.p == "function" && a.p()
    }
function jc(a) {
    for (var b = 0, c = arguments.length; b < c;++b) {
        var d = arguments[b];
        Ia(d) ? jc.apply(k, d) : kc(d)
        }
}
function H(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
y(H, ic);o = H.prototype;o.e = function() {
    delete this.type;
    delete this.target;
    delete this.currentTarget
};o.ea = n;o.Da = j;o.stopPropagation = function() {
    this.ea = j
};o.preventDefault = function() {
    this.Da = n
};function lc(a, b) {
    a && this.za(a, b)
    }
y(lc, H);o = lc.prototype;o.target = k;o.relatedTarget = k;o.offsetX = 0;o.offsetY = 0;o.clientX = 0;o.clientY = 0;o.screenX = 0;o.screenY = 0;o.button = 0;o.keyCode = 0;o.charCode = 0;o.ctrlKey = n;o.altKey = n;o.shiftKey = n;o.metaKey = n;o.Od = n;o.aa = k;o.za = function(a, b) {
    var c = this.type = a.type;
    H.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (E) {
            var e;
            a: {
                try {
                    fc(d.nodeName);
                    e = j;
                    break a
                } catch(f) {}
                e = n
            }
            e || (d = k)
            }
    } else if (c == "mouseover")
        d = a.fromElement;
    else if (c == "mouseout")
        d = a.toElement;
    this.relatedTarget = d;
    this.offsetX = a.offsetX !== i ? a.offsetX: a.layerX;
    this.offsetY = a.offsetY !== i ? a.offsetY: a.layerY;
    this.clientX = a.clientX !== i ? a.clientX: a.pageX;
    this.clientY = a.clientY !== i ? a.clientY: a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || (c == "keypress" ? a.keyCode: 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Od = Mb ? a.metaKey: a.ctrlKey;
    this.state = a.state;
    this.aa = a;
    delete this.Da;
    delete this.ea
};o.stopPropagation = function() {
    lc.d.stopPropagation.call(this);
    this.aa.stopPropagation ? this.aa.stopPropagation() : this.aa.cancelBubble = j
};o.preventDefault = function() {
    lc.d.preventDefault.call(this);
    var a = this.aa;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = n, hc)
        try {
        if (a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123)
            a.keyCode = -1
    } catch(b) {}
};o.e = function() {
    lc.d.e.call(this);
    this.relatedTarget = this.currentTarget = this.target = this.aa = k
};
"ScriptEngine" in q && q.ScriptEngine() == "JScript" && (q.ScriptEngineMajorVersion(), q.ScriptEngineMinorVersion(), q.ScriptEngineBuildVersion());function mc() {}
var nc = 0;o = mc.prototype;o.key = 0;o.fa = n;o.ob = n;o.za = function(a, b, c, d, e, f) {
    Ja(a) ? this.nc = j: a && a.handleEvent && Ja(a.handleEvent) ? this.nc = n: g(Error("Invalid listener argument"));
    this.la = a;
    this.Gc = b;
    this.src = c;
    this.type = d;
    this.ta = !!e;
    this.Qa = f;
    this.ob = n;
    this.key = ++nc;
    this.fa = n
};o.handleEvent = function(a) {
    return this.nc ? this.la.call(this.Qa || this.src, a) : this.la.handleEvent.call(this.la, a)
    };
var oc,
pc,
qc,
rc,
sc,
tc,
uc,
vc,
wc,
xc,
yc; (function() {
    var a;
    tc = function(b) {
        a = b
    };
    oc = function() {
        return {
            m: 0,
            D: 0
        }
    };
    pc = r;
    qc = function() {
        return []
        };
    rc = r;
    sc = function() {
        function b(c) {
            c = a.call(b.src, b.key, c);
            if (!c)
                return c
        }
        return b
    };
    uc = r;
    vc = function() {
        return new mc
    };
    wc = r;
    xc = function() {
        return new lc
    };
    yc = r
})();
var zc = {},
I = {},
L = {},
Ac = {};function M(a, b, c, d, e) {
    if (b)
        if (t(b)) {
        for (var f = 0; f < b.length; f++)
            M(a, b[f], c, d, e);
        return k
    } else {
        var d = !!d,
        h = I;
        b in h || (h[b] = oc());
        h = h[b];
        d in h || (h[d] = oc(), h.m++);
        var h = h[d],
        l = w(a),
        m;
        h.D++;
        if (h[l]) {
            m = h[l];
            for (f = 0; f < m.length; f++)
                if (h = m[f], h.la == c && h.Qa == e) {
                if (h.fa)
                    break;
                return m[f].key
            }
        } else
            m = h[l] = qc(),
        h.m++;
        f = sc();
        f.src = a;
        h = vc();
        h.za(c, f, a, b, d, e);
        c = h.key;
        f.key = c;
        m.push(h);
        zc[c] = h;
        L[l] || (L[l] = qc());
        L[l].push(h);
        a.addEventListener ? (a == q || !a.Yb) && a.addEventListener(b, f, d) : a.attachEvent(b in Ac ? Ac[b] : Ac[b] = "on" + b, f);
        return c
    } else
        g(Error("Invalid event type"))
    }
function Bc(a, b, c, d, e) {
    if (t(b)) {
        for (var f = 0; f < b.length; f++)
            Bc(a, b[f], c, d, e);
        return k
    }
    a = M(a, b, c, d, e);
    zc[a].ob = j;
    return a
}
function Cc(a, b, c, d, e) {
    if (t(b)) {
        for (var f = 0; f < b.length; f++)
            Cc(a, b[f], c, d, e);
        return k
    }
    d = !!d;
    a = Dc(a, b, d);
    if (!a)
        return n;
    for (f = 0; f < a.length; f++)
        if (a[f].la == c && a[f].ta == d && a[f].Qa == e)
        return N(a[f].key);
    return n
}
function N(a) {
    if (!zc[a])
        return n;
    var b = zc[a];
    if (b.fa)
        return n;
    var c = b.src,
    d = b.type,
    e = b.Gc,
    f = b.ta;
    c.removeEventListener ? (c == q || !c.Yb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Ac ? Ac[d] : Ac[d] = "on" + d, e);
    c = w(c);
    e = I[d][f][c];
    if (L[c]) {
        var h = L[c];
        lb(h, b);
        h.length == 0 && delete L[c]
        }
    b.fa = j;
    e.wc = j;
    Ec(d, f, c, e);
    delete zc[a];
    return j
}
function Ec(a, b, c, d) {
    if (!d.Ya && d.wc) {
        for (var e = 0, f = 0; e < d.length; e++)
            if (d[e].fa) {
            var h = d[e].Gc;
            h.src = k;
            uc(h);
            wc(d[e])
            } else
            e != f && (d[f] = d[e]),
        f++;
        d.length = f;
        d.wc = n;
        f == 0 && (rc(d), delete I[a][b][c], I[a][b].m--, I[a][b].m == 0 && (pc(I[a][b]), delete I[a][b], I[a].m--), I[a].m == 0 && (pc(I[a]), delete I[a]))
        }
}
function Fc(a, b, c) {
    var d = 0,
    e = a == k,
    f = b == k,
    h = c == k,
    c = !!c;
    if (e)
        xb(L, function(m) {
        for (var p = m.length - 1; p >= 0; p--) {
            var J = m[p];
            if ((f || b == J.type) && (h || c == J.ta))
                N(J.key),
            d++
        }
    });
    else if (a = w(a), L[a]) {
        a = L[a];
        for (e = a.length - 1; e >= 0; e--) {
            var l = a[e];
            if ((f || b == l.type) && (h || c == l.ta))
                N(l.key),
            d++
        }
    }
    return d
}
function Dc(a, b, c) {
    var d = I;
    return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : k
}
function Gc(a, b, c, d, e) {
    var f = 1,
    b = w(b);
    if (a[b]) {
        a.D--;
        a = a[b];
        a.Ya ? a.Ya++:a.Ya = 1;
        try {
            for (var h = a.length, l = 0; l < h; l++) {
                var m = a[l];
                m && !m.fa && (f & =Hc(m, e) !== n)
                }
        } finally {
            a.Ya--,
            Ec(c, d, b, a)
            }
    }
    return Boolean(f)
    }
function Hc(a, b) {
    var c = a.handleEvent(b);
    a.ob && N(a.key);
    return c
}
tc(function(a, b) {
    if (!zc[a])
        return j;
    var c = zc[a],
    d = c.type,
    e = I;
    if (! (d in e))
        return j;
    var e = e[d],
    f,
    h;
    gc === i && (gc = D && !q.addEventListener);
    if (gc) {
        var l;
        if (! (l = b))
            a: {
            l = "window.event".split(".");
            for (var m = q; f = l.shift();)
                if (m[f] != k)
                m = m[f];
            else {
                l = k;
                break a
            }
            l = m
        }
        f = l;
        l = j in e;
        m = n in e;
        if (l) {
            if (f.keyCode < 0 || f.returnValue != i)
                return j;
            a: {
                var p = n;
                if (f.keyCode == 0)
                    try {
                    f.keyCode = -1;
                    break a
                } catch(J) {
                    p = j
                }
                if (p || f.returnValue == i)
                    f.returnValue = j
            }
        }
        p = xc();
        p.za(f, this);
        f = j;
        try {
            if (l) {
                for (var u = qc(), Z = p.currentTarget; Z; Z = Z.parentNode)
                    u.push(Z);
                h = e[j];
                h.D = h.m;
                for (var K = u.length - 1; ! p.ea && K >= 0 && h.D; K--)
                    p.currentTarget = u[K],
                f & =Gc(h, u[K], d, j, p);
                if (m) {
                    h = e[n];
                    h.D = h.m;
                    for (K = 0; ! p.ea && K < u.length && h.D; K++)
                        p.currentTarget = u[K],
                    f & =Gc(h, u[K], d, n, p)
                    }
            } else
                f = Hc(c, p)
            } finally {
            if (u)
                u.length = 0,
            rc(u);
            p.p();
            yc(p)
            }
        return f
    }
    d = new lc(b, this);
    try {
        f = Hc(c, d)
        } finally {
        d.p()
        }
    return f
});
var Ic = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function Jc(a) {
    if (a[1]) {
        var b = a[0],
        c = b.indexOf("#");
        c >= 0 && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        c < 0 ? a[1] = "?": c == b.length - 1 && (a[1] = i)
        }
    return a.join("")
    }
function Kc(a, b, c) {
    Math.max(b.length - (c || 0), 0);
    for (c = c || 0; c < b.length; c += 2) {
        var d = b[c],
        e = b[c + 1],
        f = a;
        if (t(e))
            for (var h = 0; h < e.length; h++)
            f.push("&", d),
        e[h] !== "" && f.push("=", Va(e[h]));
        else
            e != k && (f.push("&", d), e !== "" && f.push("=", Va(e)))
        }
    return a
}
function Lc(a, b) {
    return Jc(arguments.length == 2 ? Kc([a], arguments[1], 0) : Kc([a], arguments, 1))
    }
function O(a, b, c) {
    return Jc([a, "&", b, "=", Va(c)])
    }
var Mc = /#|$/;function Nc(a, b) {
    this.x = s(a) ? a: 0;
    this.y = s(b) ? b: 0
}
Nc.prototype.Ka = function() {
    return new Nc(this.x, this.y)
    };function Oc(a, b) {
    this.width = a;
    this.height = b
}
Oc.prototype.Ka = function() {
    return new Oc(this.width, this.height)
    };Oc.prototype.mc = function() {
    return ! (this.width * this.height)
    };Oc.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};Oc.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Pc = !D || ec(9); ! E && !D || D && ec(9) || E && G("1.9.1");
var Qc = D && !G("9");function Rc(a) {
    return a ? new Sc(P(a)) : qb || (qb = new Sc)
    }
function Q(a) {
    return v(a) ? document.getElementById(a) : a
}
function Tc(a, b) {
    xb(b, function(c, d) {
        d == "style" ? a.style.cssText = c: d == "class" ? a.className = c: d == "for" ? a.htmlFor = c: d in Uc ? a.setAttribute(Uc[d], c) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
    })
    }
var Uc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
    maxlength: "maxLength",
    type: "type"
};function Vc(a, b, c, d) {
    function e(h) {
        h && b.appendChild(v(h) ? a.createTextNode(h) : h)
        }
    for (; d < c.length; d++) {
        var f = c[d];
        Ia(f) && !(Ka(f) && f.nodeType > 0) ? hb(Wc(f) ? nb(f) : f, e) : e(f)
        }
}
function Xc(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : k
}
function P(a) {
    return a.nodeType == 9 ? a: a.ownerDocument || a.document
}
var Yc = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
},
Zc = {
    IMG: " ",
    BR: "\n"
};function $c(a, b, c) {
    if (! (a.nodeName in Yc))
        if (a.nodeType == 3)
        c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    else if (a.nodeName in Zc)
        b.push(Zc[a.nodeName]);
    else
        for (a = a.firstChild; a;)
        $c(a, b, c),
    a = a.nextSibling
}
function Wc(a) {
    if (a && typeof a.length == "number")
        if (Ka(a))
        return typeof a.item == "function" || typeof a.item == "string";
    else if (Ja(a))
        return typeof a.item == "function";
    return n
}
function Sc(a) {
    this.L = a || q.document || document
}
o = Sc.prototype;o.sb = Rc;o.b = function(a) {
    return v(a) ? this.L.getElementById(a) : a
};o.Z = function(a, b, c) {
    var d = this.L,
    e = arguments,
    f = e[0],
    h = e[1];
    if (!Pc && h && (h.name || h.type)) {
        f = ["<", f];
        h.name && f.push(' name="', Wa(h.name), '"');
        if (h.type) {
            f.push(' type="', Wa(h.type), '"');
            var l = {};
            Cb(l, h);
            h = l;
            delete h.type
        }
        f.push(">");
        f = f.join("")
        }
    f = d.createElement(f);
    if (h)
        v(h) ? f.className = h: t(h) ? B.apply(k, [f].concat(h)) : Tc(f, h);
    e.length > 2 && Vc(d, f, e, 2);
    return f
};o.createElement = function(a) {
    return this.L.createElement(a)
    };o.createTextNode = function(a) {
    return this.L.createTextNode(a)
    };o.appendChild = function(a, b) {
    a.appendChild(b)
    };o.Jc = function(a) {
    for (var b; b = a.firstChild;)
        a.removeChild(b)
    };o.removeNode = Xc;D && G(8);s(window._LOGIN_URL) || (_LOGIN_URL = ad(j));function bd(a, b) {
    if (b instanceof Array) {
        for (var c = 0; c < b.length; c++)
            a = a.replace("%" + (c + 1), b[c]);
        return a
    } else
        return a.replace("%1", b)
    }
var cd = RegExp("<(/s*(blockquote|body|center|dd|dir|div|dl|dt|form|h1|h2|h3|h4|h5|h6|head|html|hr|isindex|li|menu|noframes|ol|p|table|td|th|tr|title|ul)[^>]*|s*br[^>]*)>", "gi"),
dd = /<[^>]*>/gi,
ed = /</g,
fd = />/g;function gd(a, b) {
    if (!a)
        return "";
    b && (a = a.replace(cd, " "));
    a = a.replace(dd, "");
    return a.replace(ed, "&lt;").replace(fd, "&gt;")
    }
function R() {
    return (new Date).getTime()
    }
function hd(a) {
    for (var b = [], c = 0, d; d = a[c]; c++)
        b.push(d[0] + "=" + Va(d[1]));
    return b.join("&")
    }
var id = {};function jd(a) {
    if (! (a in id)) {
        var b = id,
        c;
        c = window.location.search;
        var d = c.search(Mc),
        e;
        b: {
            e = 0;
            for (var f = a.length; (e = c.indexOf(a, e)) >= 0 && e < d;) {
                var h = c.charCodeAt(e - 1);
                if (h == 38 || h == 63)
                    if (h = c.charCodeAt(e + f), !h || h == 61 || h == 38 || h == 35)
                    break b;
                e += f + 1
            }
            e = -1
        }
        if (e < 0)
            c = k;
        else {
            f = c.indexOf("&", e);
            if (f < 0 || f > d)
                f = d;
            e += a.length + 1;
            c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
            }
        b[a] = c
    }
    return id[a]
    }
function kd(a, b) {
    var c = "https://www.google.com/accounts/" + a + "?service=reader&passive=true&nui=1&ltmpl=default";
    if (b) {
        var d;
        try {
            d = window.top.location.href
        } catch(e) {
            d = window.location.href
        }
        c += "&continue=" + encodeURIComponent(d) + "&followup=" + encodeURIComponent(d)
        }
    return c
}
function ad(a) {
    window._IS_MULTILOGIN_ENABLED ? (a = kd("AddSession", a), a += "&Email=" + encodeURIComponent(_USER_EMAIL)) : a = kd("ServiceLogin", a);
    return a
}
function ld(a) {
    this.streamId = a;
    this.Ic = k;
    this.cc = [];
    if (! (this.F && this.F instanceof S))
        this.F = a = this instanceof md ? nd: od(this.streamId) ? pd(this) : this.streamId.lastIndexOf("builtinbundle/", 0) == 0 ? qd: rd;
    this.Xb = n;
    if (this.F.pc) {
        for (var a = sd(this.streamId), b = 0; b < a.oa.length; b++) {
            for (var c = a.oa, d = b, e = a.oa[b]; e.search(aa) != -1;)
                e = e.replace(aa, " ");
            c[d] = e
        }
        this.streamId = td(a)
        }
    this.ze = n
}
function S(a, b, c, d) {
    this.qe = a;
    this.pc = b;
    this.oc = c;
    this.Uc = d
}
var nd,
ud,
qd,
rd,
vd,
wd,
xd,
yd,
zd,
Ad,
Bd,
Cd,
Dd,
Ed,
Fd,
Gd,
Hd,
Id,
Jd,
Kd,
Ld;vd = new S(n, j, j, n);wd = new S(n, j, j, n);xd = new S(j, j, j, j);nd = new S(n, n, n, j);yd = new S(n, j, j, n);zd = new S(n, j, j, j);ud = new S(j, j, n, j);Ad = new S(j, j, n, j);Bd = new S(n, j, j, n);Cd = new S(n, j, j, n);Dd = new S(n, j, j, j);Ed = new S(n, j, j, j);Fd = new S(j, j, j, j);rd = new S(j, n, j, n);Gd = new S(j, n, j, n);Hd = new S(n, n, n, n);new S(n, n, n, j);Id = new S(n, j, n, j);Jd = new S(n, j, n, n);qd = new S(n, n, n, n);new S(n, j, n, n);Kd = new S(n, j, n, j);Ld = new S(n, j, n, n);function pd(a) {
    try {
        var b = sd(a.streamId),
        c = b.getName();
        if (b.type == "state" && c && c == "alerts")
            return Gd;
        if (b.type == "bundle")
            return Jd;
        if (b.type == "state" || b.type == "source")
            switch (c) {
        case "read":
            return vd;
        case "kept-unread":
            return wd;
        case "starred":
            return yd;
        case "reading-list":
            return xd;
        case "broadcast":
            return zd;
        case "post":
            return Bd;
        case "link":
            return Cd;
        case "created":
            return Dd;
        case "self":
            return Ed;
        case "broadcast-friends":
            return Ad;
        case "broadcast-friends-comments":
            return Id;
        case "like":
            return Kd;
        case "dislike":
            return Ld
        }
        return Fd
    } catch(d) {
        return k
    }
}
function Md(a) {
    for (var a = a.lastIndexOf("search/", 0) == 0 ? new md(a.substring(7)) : (a.lastIndexOf("splice/", 0) != 0 ? k: new Nd(a)) || new ld(a), b = 0, c; c = Od[b]; b++)
        a = c(a);
    return a
}
var Od = [];function Pd(a) {
    return Qd(a) ? k: a.streamId.substring(0, a.streamId.indexOf("/", 1) + 1) + Va(a.streamId.substring(a.streamId.indexOf("/", 1) + 1, a.streamId.length))
    }
function Rd(a, b) {
    if (Qd(a))
        return k;
    var c;
    a.streamId.lastIndexOf("/reader/api/0/stream/contents/", 0) == 0 ? c = Pd(a) : a.F.pc ? (c = sd(a.streamId), c = c.type == "pref" || c.type == "state" ? "/reader/api/0/stream/contents/" + td(c) : "/reader/api/0/stream/contents/" + Va(td(c))) : c = "/reader/api/0/stream/contents/" + Pd(a);
    if (!b)
        if (c) {
        a.Xd && (c = O(c, "scr", a.Xd));
        a.translate && (c = O(c, "trans", a.translate));
        a.F == Id && a.Xb && (c = O(c, "co", a.Xb));
        a.Gd && (c = O(c, "ot", a.Gd));
        a.Ic && (c = O(c, "r", a.Ic));
        for (var d = 0; d < a.cc.length; d++)
            c = O(c, "xt", td(a.cc[d]))
        } else
        c = k;
    return c
}
ld.prototype.qb = function(a) {
    return ! (a instanceof ld) ? n: (Qd(this) ? this.Hc: Rd(this, j)) == (Qd(a) ? a.Hc: Rd(a, j))
    };function Qd(a) {
    return a.F == nd || a.F == Hd
}
ld.prototype.oc = function() {
    return this.F.oc
};ld.prototype.Uc = function() {
    return this.F.Uc || n
};function md(a, b) {
    this.Hc = a;
    this.Ae = b || [];
    ld.call(this, "search/" + a)
    }
y(md, ld);
var Sd = RegExp("splice/(?:" + eb("|") + ")*$");function Nd(a, b, c) {
    a = v(a) ? a: Td(a);
    ld.call(this, a);
    this.title = b;
    this.se = c;
    this.mc = Sd.test(a)
    }
y(Nd, ld);
var Ud = RegExp("([\\\\|])", "g");function Td(a) {
    function b(f) {
        return f.replace(Ud, "\\$1")
        }
    for (var c = [], d = 0, e; e = a[d]; d++)
        e.lastIndexOf("splice/", 0) == 0 ? c.push(e.replace("splice/", "")) : c.push(b(e));
    return "splice/" + c.join("|")
    }
new function() {
    this.he = {};
    if (Vd) {
        var a = this;
        Wd(Vd, function() {
            a.he = {}
        })
        }
};
var Xd = /^[\d+]+$/;function Yd(a, b, c) {
    a == "-" ? this.userId = _USER_ID: Xd.test(a) || !a ? this.userId = a: g('Malformed user ID "' + a + '"');
    this.type = b;
    this.oa = c
}
function td(a) {
    var b = [];
    b.push("user");
    b.push(a.userId);
    b.push(a.type);
    b = b.concat(a.oa);
    return b.join("/")
    }
Yd.prototype.qb = function(a) {
    return ! (a instanceof Yd) ? n: td(a) == td(this)
    };function sd(a) {
    var b = od(a);
    if (b)
        return new Yd(b[1], b[2], b.slice(3));
    else
        g('Malformed tag from "' + a + '"')
    }
function od(a) {
    a = a.split("/");
    return a.length < 3 ? k: a[0] == "user" ? a: k
}
function Zd(a) {
    if (! (a.userId != _USER_ID && a.userId != "-"))
        return k;
    var b = Md(td(a));
    return b.F == ud ? b.ue.ve() : !(a.userId in $d) ? Wa(a.userId) : $d[a.userId]
    }
Yd.prototype.Pc = function(a) {
    this.userId = a
};
var $d = {},
ae = [function(a) {
    return a.r
}, function(a) {
    return a.O
}];function be(a, b) {
    var c = b[a.userId != _USER_ID && a.userId != "-" ? 1: 0];
    if (a.type == "state" || a.type == "source") {
        var d = a.getName(),
        e = k;
        d == "read" ? e = ra: d == "starred" ? e = ta: d == "like" ? e = ua: d == "dislike" ? e = va: d == "reading-list" ? e = sa: d == "kept-unread" ? e = xa: d == "broadcast" ? e = ya: d == "broadcast-friends" ? e = Aa: d == "broadcast-friends-comments" ? e = Ba: d == "post" ? e = Ca: d == "link" ? e = Da: d == "created" ? e = Ea: d == "self" ? e = Fa: a.qb(new Yd(ce.userId, "state", ["com.blogger", "blogger-following"])) && (e = za);
        if (!e)
            return d;
        c = c(e);
        return ! c ? d: bd(c.indexOf("&") != -1 ? "document" in q ? bb(c) : db(c) : c, Zd(a))
        } else
        return bd(c(wa), [a.getName(), Zd(a)])
    }
Yd.prototype.getName = function() {
    if (this.type == "label")
        return this.oa[0];
    else if (this.type == "state" || this.type == "source")
        return this.oa[1];
    return k
};function de(a) {
    this.Pc(a)
    }
de.prototype.Pc = function(a) {
    this.userId = a
};
var ce,
ee,
fe,
ge,
he,
ie;ie = he = ge = fe = ee = n;
var je = Nb();je && (je.indexOf("Firefox") != -1 || je.indexOf("Camino") != -1 || (je.indexOf("iPhone") != -1 || je.indexOf("iPod") != -1 ? ee = j: je.indexOf("iPad") != -1 ? fe = j: je.indexOf("Android") != -1 ? ge = j: je.indexOf("Chrome") != -1 ? he = j: je.indexOf("Safari") != -1 && (ie = j)));
var ke = ee,
le = fe,
me = ge,
ne = he,
oe = ie;function pe(a, b) {
    try {
        return eval("(" + a + ")")
        } catch(c) {
        var d = a;
        d.length > 256 && (d = d.substring(0, 256));
        qe(qa, (b || "") + " " + d + " (" + c + ")");
        return k
    }
}
function re(a, b, c, d) {
    if (d && window[d])
        b(window[d]),
    window[d] = k;
    else {
        var e = O(a, "output", "json"),
        f = new se;
        te(f, function() {
            var h = pe(f.text, e);
            h ? b(h) : c && c()
            });
        if (c)
            f.ba = c;
        f.xa(e)
        }
}
function ue(a, b, c, d, e) {
    if (_USER_ID || e)
        if (b = b || 1, !(Math.random() > (c || 0.05))) {
        e = pa;
        E ? e = ga: D ? e = G("8") ? ka: G("7") ? ja: G("6") ? ia: ha: F ? e = ne ? na: me ? ma: la: Rb && (e = oa);
        var f = "opmsg";
        typeof b == "number" && (b = Math.round(b), f = "opusec");
        c = new se;
        a = [["op", a], [f, b], ["browser", e]];
        d && a.push(["experiment", d]);
        c.bb(ea, hd(a))
        }
}
function qe(a, b) { (new Image).src = Lc(da, "src", "link-bookmarklet-form", "u", _USER_ID, "type", a, "msg", b, "ck", R())
    }
function ve(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = new Yd(ce.userId, "label", [a[c]]);
        b.push(td(d))
        }
    return b
}
function we(a, b) {
    if (z(a))
        b("");
    else {
        var c = new se;
        te(c, function() {
            b(c.text)
            });
        xe(c, function() {
            b(a)
            });
        c.bb(ca, hd([["html", a]]))
        }
}
function ye(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
ye.prototype.Ka = function() {
    return new ye(this.top, this.right, this.bottom, this.left)
    };function ze(a, b) {
    var c = P(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Ae(a, b) {
    return ze(a, b) || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
    }
function Be(a) {
    var a = a ? a.nodeType == 9 ? a: P(a) : document,
    b;
    if (b = D)
        if (b = !ec(9))
        Rc(a),
    b = n;
    return b ? a.body: a.documentElement
}
function Ce(a) {
    var b = a.getBoundingClientRect();
    if (D)
        a = a.ownerDocument,
    b.left -= a.documentElement.clientLeft + a.body.clientLeft,
    b.top -= a.documentElement.clientTop + a.body.clientTop;
    return b
}
function De(a) {
    if (D)
        return a.offsetParent;
    for (var b = P(a), c = Ae(a, "position"), d = c == "fixed" || c == "absolute", a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Ae(a, "position"), d = d && c == "static" && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == "fixed" || c == "absolute" || c == "relative"))
        return a;
    return k
}
function Ee(a) {
    var b,
    c = P(a),
    d = Ae(a, "position"),
    e = E && c.getBoxObjectFor && !a.getBoundingClientRect && d == "absolute" && (b = c.getBoxObjectFor(a)) && (b.screenX < 0 || b.screenY < 0),
    f = new Nc(0, 0),
    h = Be(c);
    if (a == h)
        return f;
    if (a.getBoundingClientRect)
        b = Ce(a),
    c = Rc(c).L,
    a = !F ? c.documentElement: c.body,
    c = c.parentWindow || c.defaultView,
    a = new Nc(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop),
    f.x = b.left + a.x,
    f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e)
        b = c.getBoxObjectFor(a),
    a = c.getBoxObjectFor(h),
    f.x = b.screenX - a.screenX,
    f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (F && Ae(b, "position") == "fixed") {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (Rb || F && d == "absolute")
            f.y -= c.body.offsetTop;
        for (b = a; (b = De(b)) && b != c.body && b != h;)
            if (f.x -= b.scrollLeft, !Rb || b.tagName != "TR")
            f.y -= b.scrollTop
    }
    return f
}
function Fe(a, b) {
    typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function Ge(a) {
    if (Ae(a, "display") != "none")
        return He(a);
    var b = a.style,
    c = b.display,
    d = b.visibility,
    e = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = He(a);
    b.display = c;
    b.position = e;
    b.visibility = d;
    return a
}
function He(a) {
    var b = a.offsetWidth,
    c = a.offsetHeight,
    d = F && !b && !c;
    return (!s(b) || d) && a.getBoundingClientRect ? (a = Ce(a), new Oc(a.right - a.left, a.bottom - a.top)) : new Oc(b, c)
    }
var Ie = E ? "MozUserSelect": F ? "WebkitUserSelect": k;function Je(a, b, c) {
    c = !c ? a.getElementsByTagName("*") : k;
    if (Ie) {
        if (b = b ? "none": "", a.style[Ie] = b, c)
            for (var a = 0, d; d = c[a]; a++)
            d.style[Ie] = b
    } else if (D || Rb)
        if (b = b ? "on": "", a.setAttribute("unselectable", b), c)
        for (a = 0; d = c[a]; a++)
        d.setAttribute("unselectable", b)
    }
var Ke = {
    thin: 2,
    medium: 4,
    thick: 6
};function Le(a, b) {
    if ((a.currentStyle ? a.currentStyle[b + "Style"] : k) == "none")
        return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : k,
    d;
    if (c in Ke)
        d = Ke[c];
    else if (/^\d+px?$/.test(c))
        d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
}
function Me(a, b) {
    try {
        a.location.replace(b)
        } catch(c) {
        a.location = b
    }
}
function Ne() {
   //window.opener ? window.close() : top != window && Le(top) ? window.top.removeLinkFrame() : Je(top, _OPENER_URL.split("#")[0] + "#close=1")
	//*** EZ reload frame instead ***
	location.href="javascript:parent.postMessage('ezGRClose','*')";    }
function _FR_LinkBookmarkletUtil_initCloseLink() {
    M(Q("close-link"), "click", Ne)
    }
function Oe(a) {
    try {
        return s(a._USER_ID) && s(a._USER_EMAIL)
        } catch(b) {
        return n
    }
}
function _finishSignIn() {
    _LINK_BOOKMARKLET_IS_STANDALONE ? window.location.reload(j) : Me(top, _OPENER_URL.split("#")[0] + "#refresh=1")
    }
function Pe() {}
function Qe() {}
y(Qe, Pe);function Re() {}
y(Re, Pe);function Se() {}
y(Se, Pe);new Se;new Qe;new Re;new Pe;
var Te = 10,
Ue = 1;function Ve() {
    Ue > 0 && Ue--;
    Ue == 0 && (B(document.getElementById("loading-area"), "hidden"), C(document.body, "loading"))
    }
var We = "FR_Loading_hide".split("."),
Xe = q; ! (We[0] in Xe) && Xe.execScript && Xe.execScript("var " + We[0]);
for (var Ye; We.length && (Ye = We.shift());) ! We.length && s(Ve) ? Xe[Ye] = Ve: Xe = Xe[Ye] ? Xe[Ye] : Xe[Ye] = {};
var Ze;function T(a, b, c) {
    Ze && window.clearTimeout(Ze);
    var d = document.getElementById("message-area-outer"),
    e = document.getElementById("message-area-inner");
    B(d, "invisible");
    C(d, "hidden");
    e.innerHTML = a;
    $e(d, e);
    d.className = "message-area " + b.className;
    b != af && (Ze = window.setTimeout(function() {
        B(d, "hidden")
        }, (c || 7) * 1E3))
    }
function $e(a, b) {
    var c = b.offsetWidth;
    a.style.marginLeft = Math.round(c / -2) + "px";
    a.style.width = c + Te + "px"
}
var bf = {
    className: "info-message"
},
af = {
    className: "progress-message"
},
cf = {
    className: "error-message"
}; ({
    400: "The feed being requested cannot be found.",
    401: 'You have been signed out of Reader. <a href="%1">Sign back in.</a>',
    403: "You don&#39;t have permission to view this feed.",
    404: "The feed being requested cannot be found.",
    500: "Sorry, an unexpected condition has occurred which is preventing Google Reader from fulfilling the request."
})[701] = bd('You have been signed out of Reader. <a href="%1">Sign back in.</a>', ad(j));function df(a) {
    function b(d) {
        B(c, d)
        }
    var c = a || document.body;
    D && (b("ie"), c.ownerDocument.documentMode == 8 ? b("ie8") : c.ownerDocument.documentMode == 7 ? b("ie7") : G("8") ? b("ie8") : G("7") ? b("ie7") : G("6") && b("ie6"));
    Rb && b("opera");
    E && (b("gecko"), G("1.9.1") && b("gecko191"));
    F && b("webkit")
    }
var ef = 0;function ff() {
    if (! (R() - ef < 36E5))
        ef = R(),
    T('An updated version of Google Reader is available. <span class="link" id="new-version-refresh">Refresh</span>', bf, 30, i),
    document.getElementById("new-version-refresh").onclick = function() {
        window.location.reload(j)
        }
} / \uffff / .test("\uffff");function gf(a, b) {
    a.setAttribute("role", b);
    a.Be = b
}
function hf(a, b, c) {
    a.setAttribute("aria-" + b, c)
    }
function jf(a, b, c, d, e) {
    if (!D && (!F || !G("525")))
        return j;
    if (Mb && e)
        return kf(a);
    if (e && !d)
        return n;
    if (!c && (b == 17 || b == 18))
        return n;
    if (D && d && b == a)
        return n;
    switch (a) {
    case 13:
        return ! (D && ec(9));
    case 27:
        return ! F
    }
    return kf(a)
    }
function kf(a) {
    if (a >= 48 && a <= 57)
        return j;
    if (a >= 96 && a <= 106)
        return j;
    if (a >= 65 && a <= 90)
        return j;
    if (F && a == 0)
        return j;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 189:
    case 187:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return j;
    default:
        return n
    }
}
function lf(a) {
    this.vb = a;
    this.h = []
    }
y(lf, ic);
var mf = [];function U(a, b, c, d, e, f) {
    t(c) || (mf[0] = c, c = mf);
    for (var h = 0; h < c.length; h++)
        a.h.push(M(b, c[h], d || a, e || n, f || a.vb || a));
    return a
}
function nf(a, b, c, d, e, f) {
    if (t(c))
        for (var h = 0; h < c.length; h++)
        nf(a, b, c[h], d, e, f);
    else
        a.h.push(Bc(b, c, d || a, e, f || a.vb || a));
    return a
}
function of(a, b, c, d, e, f) {
    if (t(c))
        for (var h = 0; h < c.length; h++)
        of(a, b, c[h], d, e, f);
    else {
        a: {
            d = d || a;
            f = f || a.vb || a;
            e = !!e;
            if (b = Dc(b, c, e))
                for (c = 0; c < b.length; c++)
                if (!b[c].fa && b[c].la == d && b[c].ta == e && b[c].Qa == f) {
                b = b[c];
                break a
            }
            b = k
        }
        if (b)
            b = b.key,
        N(b),
        lb(a.h, b)
        }
    return a
}
function pf(a) {
    hb(a.h, N);
    a.h.length = 0
}
lf.prototype.e = function() {
    lf.d.e.call(this);
    pf(this)
    };lf.prototype.handleEvent = function() {
    g(Error("EventHandler.handleEvent not implemented"))
    };function V() {}
y(V, ic);o = V.prototype;o.Yb = j;o.ab = k;o.Nb = function(a) {
    this.ab = a
};o.addEventListener = function(a, b, c, d) {
    M(this, a, b, c, d)
    };o.removeEventListener = function(a, b, c, d) {
    Cc(this, a, b, c, d)
    };o.dispatchEvent = function(a) {
    var b = a.type || a,
    c = I;
    if (b in c) {
        if (v(a))
            a = new H(a, this);
        else if (a instanceof H)
            a.target = a.target || this;
        else {
            var d = a,
            a = new H(b, this);
            Cb(a, d)
            }
        var d = 1,
        e,
        c = c[b],
        b = j in c,
        f;
        if (b) {
            e = [];
            for (f = this; f; f = f.ab)
                e.push(f);
            f = c[j];
            f.D = f.m;
            for (var h = e.length - 1; ! a.ea && h >= 0 && f.D; h--)
                a.currentTarget = e[h],
            d & =Gc(f, e[h], a.type, j, a) && a.Da != n
        }
        if (n in c)
            if (f = c[n], f.D = f.m, b)
            for (h = 0; ! a.ea && h < e.length && f.D; h++)
            a.currentTarget = e[h],
        d & =Gc(f, e[h], a.type, n, a) && a.Da != n;
        else
            for (e = this; ! a.ea && e && f.D; e = e.ab)
            a.currentTarget = e,
        d & =Gc(f, e, a.type, n, a) && a.Da != n;
        a = Boolean(d)
        } else
        a = j;
    return a
};o.e = function() {
    V.d.e.call(this);
    Fc(this);
    this.ab = k
};D || E && G("1.9.3");function qf(a, b) {
    this.Ta = a || 1;
    this.Ha = b || rf;
    this.nb = x(this.fe, this);
    this.Eb = Ra()
    }
y(qf, V);qf.prototype.La = n;
var rf = q.window;o = qf.prototype;o.o = k;o.fe = function() {
    if (this.La) {
        var a = Ra() - this.Eb;
        if (a > 0 && a < this.Ta * 0.8)
            this.o = this.Ha.setTimeout(this.nb, this.Ta - a);
        else if (this.dispatchEvent("tick"), this.La)
            this.o = this.Ha.setTimeout(this.nb, this.Ta),
        this.Eb = Ra()
        }
};o.start = function() {
    this.La = j;
    if (!this.o)
        this.o = this.Ha.setTimeout(this.nb, this.Ta),
    this.Eb = Ra()
    };o.stop = function() {
    this.La = n;
    if (this.o)
        this.Ha.clearTimeout(this.o),
    this.o = k
};o.e = function() {
    qf.d.e.call(this);
    this.stop();
    delete this.Ha
};function sf(a, b, c) {
    Ja(a) ? c && (a = x(a, c)) : a && typeof a.handleEvent == "function" ? a = x(a.handleEvent, a) : g(Error("Invalid listener argument"));
    return b > 2147483647 ? -1: rf.setTimeout(a, b || 0)
    }
function tf() {} (function(a) {
    a.Ma = function() {
        return a.wd || (a.wd = new a)
        }
})(tf);tf.prototype.Fd = 0;function uf(a) {
    return ":" + (a.Fd++).toString(36)
    }
tf.Ma();function vf(a) {
    this.i = a || Rc();
    this.Wd = wf
}
y(vf, V);vf.prototype.vd = tf.Ma();
var wf = k;o = vf.prototype;o.lc = k;o.S = n;o.a = k;o.Wd = k;o.Ed = k;o.G = k;o.Q = k;o.ua = k;o.ad = n;o.b = function() {
    return this.a
};o.Nb = function(a) {
    this.G && this.G != a && g(Error("Method not supported"));
    vf.d.Nb.call(this, a)
    };o.sb = function() {
    return this.i
};o.Z = function() {
    this.a = this.i.createElement("div")
    };o.Ib = function(a) {
    this.S && g(Error("Component already rendered"));
    this.a || this.Z();
    a ? a.insertBefore(this.a, k) : this.i.L.body.appendChild(this.a); (!this.G || this.G.S) && this.va()
    };o.Zb = function(a) {
    if (this.S)
        g(Error("Component already rendered"));
    else if (a) {
        this.ad = j;
        if (!this.i || this.i.L != P(a))
            this.i = Rc(a);
        this.pb(a);
        this.va()
        } else
        g(Error("Invalid element to decorate"))
    };o.pb = function(a) {
    this.a = a
};o.va = function() {
    this.S = j;
    xf(this, function(a) { ! a.S && a.b() && a.va()
        })
    };o.wa = function() {
    xf(this, function(a) {
        a.S && a.wa()
        });
    this.Pa && pf(this.Pa);
    this.S = n
};o.e = function() {
    vf.d.e.call(this);
    this.S && this.wa();
    this.Pa && (this.Pa.p(), delete this.Pa);
    xf(this, function(a) {
        a.p()
        }); ! this.ad && this.a && Xc(this.a);
    this.G = this.Ed = this.a = this.ua = this.Q = k
};function xf(a, b, c) {
    a.Q && hb(a.Q, b, c)
    }
o.removeChild = function(a, b) {
    if (a) {
        var c = v(a) ? a: a.lc || (a.lc = uf(a.vd)),
        a = this.ua && c ? (c in this.ua ? this.ua[c] : i) || k: k;
        if (c && a) {
            var d = this.ua;
            c in d && delete d[c];
            lb(this.Q, a);
            b && (a.wa(), a.a && Xc(a.a));
            c = a;
            c == k && g(Error("Unable to set parent component"));
            c.G = k;
            vf.d.Nb.call(c, k)
            }
    }
    a || g(Error("Child is not in parent component"));
    return a
};o.Jc = function(a) {
    for (; this.Q && this.Q.length != 0;)
        this.removeChild(this.Q ? this.Q[0] || k: k, a)
    };function yf(a) {
    this.i = a || Rc();
    Fb.call(this)
    }
y(yf, Fb);o = yf.prototype;o.Wb = "goog-buttonset";o.$b = k;o.a = k;o.dd = k;o.set = function(a, b, c, d) {
    Fb.prototype.set.call(this, a, b);
    if (c)
        this.$b = a;
    if (d)
        this.dd = a;
    return this
};function W(a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
    }
o.Ib = function() {
    if (this.a) {
        this.a.innerHTML = "";
        var a = Rc(this.a);
        Eb(this, function(b, c) {
            var d = a.Z("button", {
                name: c
            }, b);
            if (c == this.$b)
                d.className = this.Wb + "-default";
            this.a.appendChild(d)
            }, this)
        }
};o.Zb = function(a) {
    if (a && a.nodeType == 1) {
        this.a = a;
        for (var a = this.a.getElementsByTagName("button"), b = 0, c, d, e; c = a[b]; b++) {
            d = c.name || c.id;
            e = c;
            var f = i;
            Qc && "innerText" in e ? f = e.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (f = [], $c(e, f, j), f = f.join(""));
            f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            f = f.replace(/\u200B/g, "");
            Qc || (f = f.replace(/ +/g, " "));
            f != " " && (f = f.replace(/^\s*/, ""));
            e = f || c.value;
            d && (f = b == 0, this.set(d, e, f, c.name == "cancel"), f && B(c, this.Wb + "-default"))
            }
    }
};o.b = function() {
    return this.a
};o.sb = function() {
    return this.i
};
var zf = {
    key: "ok",
    caption: "OK"
},
Af = {
    key: "cancel",
    caption: "Cancel"
},
Bf = {
    key: "yes",
    caption: "Yes"
},
Cf = {
    key: "no",
    caption: "No"
},
Df = {
    key: "save",
    caption: "Save"
},
Ef = {
    key: "continue",
    caption: "Continue"
};typeof document != "undefined" && (W(new yf, zf, j, j), W(W(new yf, zf, j), Af, n, j), W(W(new yf, Bf, j), Cf, n, j), W(W(W(new yf, Bf), Cf, j), Af, n, j), W(W(W(new yf, Ef), Df), Af, j, j));function Ff(a) {
    return function() {
        return a
    }
}
Ff(n);Ff(j);Ff(k);function Gf(a) {
    return function() {
        return a.call(this)
        }
}
function Hf() {
    if (E)
        this.Y = {},
    this.ib = {},
    this.pa = []
    }
Hf.prototype.ka = E;function If (a, b) {
    if (a.ka)
        for (var c = w(b), d = 0; d < a.pa.length; d++) {
        var e = a.pa[d];
        Jf(a, a.Y, e, c);
        Jf(a, a.ib, c, e)
        }
}
function Kf(a, b) {
    var c = a.ib[b],
    d = a.Y[b];
    c && d && hb(c, function(e) {
        hb(d, function(f) {
            Jf(this, this.Y, e, f);
            Jf(this, this.ib, f, e)
            }, this)
        }, a)
    }
function Jf(a, b, c, d) {
    b[c] || (b[c] = []);
    kb(b[c], d) || b[c].push(d)
    }
var X = new Hf;function Lf() {}
Lf.prototype.Ja = k;
var Mf;function Nf() {}
y(Nf, Lf);function Of(a) {
    return (a = Pf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Qf(a) {
    var b = {};
    Pf(a) && (b[0] = j, b[1] = j);
    return b
}
Nf.prototype.xb = k;function Pf(a) {
    if (!a.xb && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d),
                a.xb = d
            } catch(e) {}
        }
        g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
        }
    return a.xb
}
Mf = new Nf;function Rf(a) {
    this.headers = new Fb;
    this.ra = a || k
}
y(Rf, V);
var Sf = /^https?:?$/i;o = Rf.prototype;o.P = n;o.c = k;o.hb = k;o.Xa = "";o.zd = "";o.Ca = 0;o.Wa = "";o.rb = n;o.Sa = n;o.zb = n;o.ca = n;o.eb = 0;o.ha = k;o.Kc = "";o.pe = n;o.send = function(a, b, c, d) {
    this.c && g(Error("[goog.net.XhrIo] Object is active with another request"));
    b = b ? b.toUpperCase() : "GET";
    this.Xa = a;
    this.Wa = "";
    this.Ca = 0;
    this.zd = b;
    this.rb = n;
    this.P = j;
    this.c = this.ra ? Of(this.ra) : Of(Mf);
    this.hb = this.ra ? this.ra.Ja || (this.ra.Ja = Qf(this.ra)) : Mf.Ja || (Mf.Ja = Qf(Mf));
    If (X, this.c);
    this.c.onreadystatechange = x(this.Cc, this);
    try {
        this.zb = j,
        this.c.open(b, a, j),
        this.zb = n
    } catch(e) {
        Tf(this, 5, e);
        return
    }
    var a = c || "",
    f = this.headers.Ka();
    d && Eb(d, function(l, m) {
        f.set(m, l)
        });
    b == "POST" && !Object.prototype.hasOwnProperty.call(f.V, "Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Eb(f, function(l, m) {
        this.c.setRequestHeader(m, l)
        }, this);
    if (this.Kc)
        this.c.responseType = this.Kc;
    if ("withCredentials" in this.c)
        this.c.withCredentials = this.pe;
    try {
        if (this.ha)
            rf.clearTimeout(this.ha),
        this.ha = k;
        if (this.eb > 0)
            this.ha = rf.setTimeout(x(this.ge, this), this.eb);
        this.Sa = j;
        this.c.send(a);
        this.Sa = n
    } catch(h) {
        Tf(this, 5, h)
        }
};o.dispatchEvent = function(a) {
    if (this.c) {
        X.ka && X.pa.push(v(this.c) ? this.c: Ka(this.c) ? w(this.c) : "");
        try {
            return Rf.d.dispatchEvent.call(this, a)
            } finally {
            X.ka && Kf(X, X.pa.pop())
            }
    } else
        return Rf.d.dispatchEvent.call(this, a)
    };o.ge = function() {
    if (typeof Ga != "undefined" && this.c)
        this.Wa = "Timed out after " + this.eb + "ms, aborting",
    this.Ca = 8,
    this.dispatchEvent("timeout"),
    this.abort(8)
    };function Tf(a, b, c) {
    a.P = n;
    if (a.c)
        a.ca = j,
    a.c.abort(),
    a.ca = n;
    a.Wa = c;
    a.Ca = b;
    Uf(a);
    Vf(a)
    }
function Uf(a) {
    if (!a.rb)
        a.rb = j,
    a.dispatchEvent("complete"),
    a.dispatchEvent("error")
    }
o.abort = function(a) {
    if (this.c && this.P)
        this.P = n,
    this.ca = j,
    this.c.abort(),
    this.ca = n,
    this.Ca = a || 7,
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Vf(this)
    };o.e = function() {
    if (this.c) {
        if (this.P)
            this.P = n,
        this.ca = j,
        this.c.abort(),
        this.ca = n;
        Vf(this, j)
        }
    Rf.d.e.call(this)
    };o.Cc = function() { ! this.zb && !this.Sa && !this.ca ? this.Id() : Wf(this)
    };o.Id = function() {
    Wf(this)
    };function Wf(a) {
    if (a.P && typeof Ga != "undefined" && (!a.hb[1] || !(Xf(a) == 4 && Yf(a) == 2)))
        if (a.Sa && Xf(a) == 4)
        rf.setTimeout(x(a.Cc, a), 0);
    else if (a.dispatchEvent("readystatechange"), Xf(a) == 4) {
        a.P = n;
        var b;
        a: switch (Yf(a)) {
        case 0:
            b = v(a.Xa) ? a.Xa.match(Ic)[1] || k: a.Xa.we();
            b = !(b ? Sf.test(b) : self.location ? Sf.test(self.location.protocol) : 1);
            break a;
        case 200:
        case 201:
        case 202:
        case 204:
        case 304:
        case 1223:
            b = j;
            break a;
        default:
            b = n
        }
        b ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Ca = 6, a.Wa = a.Na() + " [" + Yf(a) + "]", Uf(a));
        Vf(a)
        }
}
function Vf(a, b) {
    if (a.c) {
        var c = a.c,
        d = a.hb[0] ? r: k;
        a.c = k;
        a.hb = k;
        if (a.ha)
            rf.clearTimeout(a.ha),
        a.ha = k;
        b || (X.ka && X.pa.push(v(c) ? c: Ka(c) ? w(c) : ""), a.dispatchEvent("ready"), X.ka && Kf(X, X.pa.pop()));
        if (X.ka) {
            var e = w(c);
            delete X.ib[e];
            for (var f in X.Y)
                lb(X.Y[f], e),
            X.Y[f].length == 0 && delete X.Y[f]
            }
        try {
            c.onreadystatechange = d
        } catch(h) {}
    }
}
function Xf(a) {
    return a.c ? a.c.readyState: 0
}
function Yf(a) {
    try {
        return Xf(a) > 2 ? a.c.status: -1
    } catch(b) {
        return - 1
    }
}
o.Na = function() {
    try {
        return Xf(this) > 2 ? this.c.statusText: ""
    } catch(a) {
        return ""
    }
};o.getResponseHeader = function(a) {
    return this.c && Xf(this) == 4 ? this.c.getResponseHeader(a) : i
};
var Zf = R() + 18E5,
$f;function se() {
    this.Nd = j;
    this.k = new Rf;
    this.xe = j;
    this.Xc = 0;
    this.tc = n;
    M(this.k, "timeout", this.Kd, n, this);
    M(this.k, "success", this.Jd, n, this);
    M(this.k, "error", this.xc, n, this)
    }
o = se.prototype;o.Kd = function() {
    this.ba && this.ba();
    this.k.p()
    };o.Jd = function(a) {
    ag(this, "END", n, j);
    bg(this);
    this.status == 0 && z(this.text) ? this.xc(a) : (this.k.getResponseHeader("X-Reader-Google-Too-Many-Subscriptions-In-Stream-Graph") == "true" && window.setTimeout(function() {
        T('Your account appears to have too many subscriptions. The "All items" view and unread counts may not be displayed correctly.', bf, i, i)
        }, 2E3), a = this.k.getResponseHeader("X-Reader-Google-Version"), !z(a) && $f != a && (z($f) ? $f = a: window.setTimeout(ff, 5E3)), a = this.k.getResponseHeader("X-Reader-User"), !z(a) && a != _USER_ID ? (this.status = 701, a = bd('You have been signed out of Reader. <a href="%1">Sign back in.</a>', ad(j)), T(a, cf, 60, i), this.ba && this.ba()) : (this.k.p(), this.dc && this.dc(this)))
    };o.xc = function() {
    bg(this);
    var a = this.k.getResponseHeader("X-Reader-User");
    if (this.status == 401 || !z(a) && a != _USER_ID)
        this.status = 701,
    a = bd('You have been signed out of Reader. <a href="%1">Sign back in.</a>', ad(j)),
    T(a, cf, 60, i);
    this.status == 400 && this.k.Na() == 1064 ? (Ve(), T("Your account appears to have too many subscriptions, please remove some before creating any more.", cf, i, i)) : this.k.getResponseHeader("X-Reader-Google-Bad-Token") == "true" ? this.Xc >= 5 || (this.Xc++, Zf = 0, window.setTimeout(x(this.bb, this, this.Md, this.Ld), 0)) : this.k.getResponseHeader("X-Reader-Google-Unverified-Email-Address") == "true" ? T('Your email address is not verified, please <a href="https://www.google.com/accounts/ResendVerifyEmail?service=reader">verify your email address</a>', cf, 60, i) : (this.k.p(), this.ba && this.ba())
    };function cg(a, b) {
    a.tc = j;
    a.Bd = b
}
function te(a, b) {
    a.dc = b
}
function xe(a, b) {
    a.ba = b
}
o.setTimeout = function(a) {
    this.Vc = a
};function bg(a) {
    a.status = Yf(a.k);
    var b;
    var c = a.k;
    try {
        b = c.c ? c.c.responseText: ""
    } catch(d) {
        b = ""
    }
    a.text = b;
    a.ce = a.k.Na()
    }
o.xa = function(a) {
    dg(this, a, "GET", k)
    };o.bb = function(a, b) {
    this.Ld = b;
    var c = this;
    eg(function(d) {
        dg(c, a, "POST", b + "&T=" + Va(d))
        })
    };function dg(a, b, c, d) {
    a.vc = c;
    if (b) {
        a.Md = b;
        if (a.Nd || me)
            b = O(b, "ck", R());
        b = O(b, "client", "link-bookmarklet-form");
        jd("hl") && (b = O(b, "hl", "en")); (c = jd("gl")) && (b = O(b, "gl", c));
        c = k;
        s(window._GR_USER_TOKEN) && (c = window._GR_USER_TOKEN);
        b = (c = jd("at") || c) ? O(b, "at", c) : b;
        a.je = b
    }
    if (a.Vc)
        a.k.eb = Math.max(0, a.Vc);
    ag(a, a.vc);
    a.be = R();
    a.k.send(a.je, a.vc, d)
    }
o.abort = function() {
    this.k.abort()
    };o.Na = function() {
    return this.ce
};function ag(a, b, c, d) {
    b = R() - a.be;
    d && a.tc && window.setTimeout(Gf(Qa(ue, a.Bd, b * 1E3)), 1E3)
    }
function fg(a) {
    var b = new se;
    cg(b, fa);
    xe(b, function() {
        a && a(_COMMAND_TOKEN)
        });
    te(b, function(c) {
        _COMMAND_TOKEN = c.text;
        Zf = R() + 18E5;
        a && a(_COMMAND_TOKEN)
        });
    b.xa(ba)
    }
function eg(a) {
    R() > Zf ? fg(a) : a && a(_COMMAND_TOKEN)
    }
function gg(a) {
    var b;
    a: {
        var c = 0,
        d = 0;
        if (hg(a))
            c = a.selectionStart,
        d = -1;
        else if (D) {
            var e = ig(a);
            b = e[0];
            e = e[1];
            if (b.inRange(e)) {
                b.setEndPoint("EndToStart", e);
                if (a.type == "textarea") {
                    e.duplicate();
                    c = a = b.text;
                    for (d = n; ! d;)
                        b.compareEndPoints("StartToEnd", b) == 0 ? d = j: (b.moveEnd("character", -1), b.text == a ? c += "\r\n": d = j);
                    b = [c.length, -1];
                    break a
                }
                c = b.text.length;
                d = -1
            }
        }
        b = [c, d]
        }
    return b[0]
    }
function jg(a, b) {
    if (hg(a))
        a.selectionStart = b,
    a.selectionEnd = b;
    else if (D) {
        var b = kg(a, b),
        c = a.createTextRange();
        c.collapse(j);
        c.move("character", b);
        c.select()
        }
}
function ig(a) {
    var b = a.ownerDocument || a.document,
    c = b.selection.createRange();
    a.type == "textarea" ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
    }
function kg(a, b) {
    if (a.type == "textarea")
        b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length;
    return b
}
function hg(a) {
    try {
        return typeof a.selectionStart == "number"
    } catch(b) {
        return n
    }
}
function lg(a, b, c) {
    this.uc = a;
    this.Ea = c;
    this.H = b;
    M(b, ["hilite", "select", "canceldismiss", "dismiss"], this);
    this.B = k;
    this.j = [];
    this.t = -1;
    this.u = 0;
    this.$ = this.l = k
}
y(lg, V);o = lg.prototype;o.Dd = 10;o.cd = j;o.Tb = n;o.bd = n;o.Yc = n;o.handleEvent = function(a) {
    if (a.target == this.H)
        switch (a.type) {
    case "hilite":
        this.C(a.cb);
        break;
    case "select":
        mg(this);
        break;
    case "canceldismiss":
        ng(this);
        break;
    case "dismiss":
        pg(this)
        }
};function qg(a) {
    var b = a.u + a.j.length - 1;
    if (a.t >= a.u && a.t < b)
        return a.C(a.t + 1),
    j;
    else if (a.t == -1)
        return a.C(a.u),
    j;
    else if (a.t == b)
        if (a.Tb)
        a.C( - 1);
    else if (a.bd)
        return a.C(a.u),
    j;
    return n
}
function rg(a) {
    if (a.t > a.u)
        return a.C(a.t - 1),
    j;
    else if (a.Tb && a.t == a.u)
        a.C( - 1);
    else if (a.bd && (a.t == -1 || a.t == a.u))
        return a.C(a.u + a.j.length - 1),
    j;
    return n
}
o.C = function(a) {
    this.t = a;
    this.H.C(a);
    return sg(this, a) != -1
};function mg(a) {
    var b = sg(a, a.t);
    if (b != -1) {
        var b = a.j[b],
        c = a.Ea,
        d = b.toString();
        if (s(i) ? 0: c.ma) {
            var e = tg(c, c.N(), gg(c.g)),
            f = ug(c, c.N());
            c.Yd.test(d) || (d = d.replace(/[\s\xa0]+$/, "") + c.ed);
            c.ne && (e != 0 && !/^[\s\xa0]*$/.test(f[e - 1]) && (d = " " + d), e == f.length - 1 && (d += " "));
            if (d != f[e]) {
                f[e] = d;
                d = c.g;
                E && d.blur();
                d.value = f.join("");
                for (var h = 0, l = 0; l <= e; l++)
                    h += f[l].length;
                d.focus();
                e = h;
                f = c.g;
                d = e;
                hg(f) ? f.selectionStart = d: D && (h = ig(f), l = h[0], l.inRange(h[1]) && (d = kg(f, d), l.collapse(j), l.move("character", d), l.select()));
                f = c.g;
                hg(f) ? f.selectionEnd = e: D && (h = ig(f), d = h[1], h[0].inRange(d) && (e = kg(f, e), f = kg(f, gg(f)), d.collapse(j), d.moveEnd("character", e - f), d.select()))
                }
        } else
            c.Qc(d);
        c.Mb = j;
        a.Yc ? (a.B = k, pg(a)) : a.K();
        a.dispatchEvent({
            type: "update",
            cb: b
        });
        a.Yc && a.Ea.update(j);
        return j
    } else
        return a.K(),
    a.dispatchEvent({
        type: "update",
        cb: k
    }),
    n
}
o.K = function() {
    this.t = -1;
    this.B = k;
    this.u += this.j.length;
    this.j = [];
    window.clearTimeout(this.$);
    this.$ = k;
    this.H.K();
    this.dispatchEvent("suggestionsupdate")
    };function pg(a) {
    if (!a.$)
        a.$ = window.setTimeout(x(a.K, a), 100)
    }
function ng(a) {
    window.setTimeout(x(function() {
        if (this.$)
            window.clearTimeout(this.$),
        this.$ = k
    }, a), 10)
    }
o.e = function() {
    lg.d.e.call(this);
    this.H.p();
    this.Ea.p();
    this.uc = k
};o.Cd = function(a, b, c) {
    this.B == a && this.Kb(b, c)
    };o.Kb = function(a, b) {
    var c = b ? sg(this, this.t) : k;
    this.u += this.j.length;
    this.j = a;
    for (var d = [], e = 0; e < a.length;++e)
        d.push({
        id: this.u + e,
        data: a[e]
        });
    this.H.Kb(d, this.B, this.l);
    this.cd && d.length != 0 && this.B ? this.C(c != k ? this.u + c: this.u) : this.t = -1;
    this.dispatchEvent("suggestionsupdate")
    };function sg(a, b) {
    var c = b - a.u;
    return c < 0 || c >= a.j.length ? -1: c
}
o.mb = function(a) {
    var b = this.Ea;
    b.mb.apply(b, arguments)
    };o.update = function(a) {
    this.Ea.update(a)
    };function vg(a, b) {
    this.j = a;
    this.le = !b
}
function wg(a, b, c) {
    var d = [];
    if (b != "") {
        var b = eb(b),
        e = RegExp("(^|\\W+)" + b, "i");
        wb(a.j, function(f) {
            String(f).match(e) && d.push(f);
            return d.length >= c
        })
        }
    return d
}
function xg(a, b, c) {
    var d = [];
    vb(a.j, function(f, h) {
        var l = b.toLowerCase(),
        m = String(f).toLowerCase(),
        p = 0;
        if (m.indexOf(l) != -1)
            p = parseInt((m.indexOf(l) / 4).toString(), 10);
        else
            for (var J = l.split(""), u = -1, Z = 10, K = 0, Oa; Oa = J[K]; K++)
            Oa = m.indexOf(Oa),
        Oa > u ? (u = Oa - u - 1, u > Z - 5 && (u = Z - 5), p += u, u = Oa) : (p += Z, Z += 5);
        p < l.length * 6 && d.push({
            de: f,
            Mc: p,
            index: h
        })
        });
    d.sort(function(f, h) {
        var l = f.Mc - h.Mc;
        return l != 0 ? l: f.index - h.index
    });
    for (var a = [], e = 0; e < c && e < d.length; e++)
        a.push(d[e].de);
    return a
}
function yg(a, b) {
    a && zg(this, a, b)
    }
y(yg, V);o = yg.prototype;o.a = k;o.Ua = k;o.Bb = k;o.Va = k;o.U = -1;o.T = -1;
var Ag = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
},
Bg = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
},
Cg = {
    61: 187,
    59: 186
},
Dg = D || F && G("525");o = yg.prototype;o.qd = function(a) {
    if (F && (this.U == 17 && !a.ctrlKey || this.U == 18 && !a.altKey))
        this.T = this.U = -1;
    Dg && !jf(a.keyCode, this.U, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.T = E && a.keyCode in Cg ? Cg[a.keyCode] : a.keyCode
};o.sd = function() {
    this.T = this.U = -1
};o.handleEvent = function(a) {
    var b = a.aa,
    c,
    d;
    D && a.type == "keypress" ? (c = this.T, d = c != 13 && c != 27 ? b.keyCode: 0) : F && a.type == "keypress" ? (c = this.T, d = b.charCode >= 0 && b.charCode < 63232 && kf(c) ? b.charCode: 0) : Rb ? (c = this.T, d = kf(c) ? b.keyCode: 0) : (c = b.keyCode || this.T, d = b.charCode || 0, Mb && d == 63 && !c && (c = 191));
    var e = c,
    f = b.keyIdentifier;
    c ? c >= 63232 && c in Ag ? e = Ag[c] : c == 25 && a.shiftKey && (e = 9) : f && f in Bg && (e = Bg[f]);
    a = e == this.U;
    this.U = e;
    b = new Eg(e, d, a, b);
    try {
        this.dispatchEvent(b)
        } finally {
        b.p()
        }
};o.b = function() {
    return this.a
};function zg(a, b, c) {
    a.Va && a.detach();
    a.a = b;
    a.Ua = M(a.a, "keypress", a, c);
    a.Bb = M(a.a, "keydown", a.qd, c, a);
    a.Va = M(a.a, "keyup", a.sd, c, a)
    }
o.detach = function() {
    if (this.Ua)
        N(this.Ua),
    N(this.Bb),
    N(this.Va),
    this.Va = this.Bb = this.Ua = k;
    this.a = k;
    this.T = this.U = -1
};o.e = function() {
    yg.d.e.call(this);
    this.detach()
    };function Eg(a, b, c, d) {
    d && this.za(d, i);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
y(Eg, lc);function Fg(a, b, c, d) {
    d = d || 150;
    this.Fa = a != k ? a: ",;";
    this.ed = this.Fa.substring(0, 1);
    a = this.ma ? "[\\s" + this.Fa + "]+": "[\\s]+";
    this.Zc = RegExp("^" + a + "|" + a + "$", "g");
    this.Yd = RegExp("\\s*[" + this.Fa + "]$");
    this.sc = b || "";
    this.Pd = this.ma = c != k ? c: j;
    this.o = d > 0 ? new qf(d) : k;
    this.s = new lf(this);
    this.kb = new lf(this);
    this.Ba = new yg;
    this.qc = -1
}
y(Fg, ic);
var Gg = (ke || le) && !G("533.17.9");o = Fg.prototype;o.ne = j;o.kd = j;o.$c = n;o.Oc = j;o.Nc = j;o.lb = k;o.g = k;o.Db = "";o.W = n;o.Mb = n;o.ie = j;o.N = function() {
    return this.g.value
};o.Qc = function(a) {
    this.g.value = a
};o.mb = function(a) {
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        Ka(c) && c.nodeType == 1 && hf(c, "haspopup", j);
        U(this.s, c, "focus", this.ic);
        U(this.s, c, "blur", this.md);
        if (!this.g && (U(this.kb, c, "keydown", this.Hd), Ka(c) && c.nodeType == 1)) {
            var d = P(c); (d && d.activeElement) == c && Hg(this, c)
            }
    }
};o.e = function() {
    Fg.d.e.call(this);
    this.lb != k && window.clearTimeout(this.lb);
    this.s.p();
    delete this.s;
    this.kb.p();
    this.Ba.p()
    };function Ig(a, b) {
    a.Oc = b;
    a.Nc = b
}
function Jg(a, b) {
    switch (b.keyCode) {
    case 40:
        if (a.f.H.Aa())
            return a.$c ? rg(a.f) : qg(a.f),
        b.preventDefault(),
        j;
        else if (!a.ma)
            return a.update(j),
        b.preventDefault(),
        j;
        break;
    case 38:
        if (a.f.H.Aa())
            return a.$c ? qg(a.f) : rg(a.f),
        b.preventDefault(),
        j;
        break;
    case 9:
        if (a.f.H.Aa() && !b.shiftKey) {
            if (a.update(), mg(a.f) && a.Pd)
                return b.preventDefault(),
            j
        } else
            a.f.K();
        break;
    case 13:
        if (a.f.H.Aa()) {
            if (a.update(), mg(a.f))
                return b.preventDefault(),
            b.stopPropagation(),
            j
        } else
            a.f.K();
        break;
    case 27:
        if (a.f.H.Aa())
            return a.f.K(),
        b.preventDefault(),
        b.stopPropagation(),
        j;
        break;
    case 229:
        if (!a.W) {
            if (!a.W)
                U(a.s, a.g, "keyup", a.Ac),
            U(a.s, a.g, "keypress", a.zc),
            a.W = j;
            return j
        }
        break;
    default:
        a.o && !a.ie && (a.o.stop(), a.o.start())
        }
    return Kg(a, b)
    }
function Kg(a, b) {
    var c = a.ma && b.charCode && a.Fa.indexOf(String.fromCharCode(b.charCode)) != -1;
    a.Oc && c && a.update();
    return a.Nc && c && mg(a.f) ? (b.preventDefault(), j) : n
}
o.rd = function() {
    return n
};o.ic = function(a) {
    Hg(this, a.target || k)
    };function Hg(a, b) {
    pf(a.kb);
    a.f && ng(a.f);
    if (b != a.g)
        a.g = b,
    a.o && (a.o.start(), U(a.s, a.o, "tick", a.Dc)),
    a.Db = a.N(),
    zg(a.Ba, a.g),
    U(a.s, a.Ba, "key", a.Bc),
    D && U(a.s, a.g, "keypress", a.yc)
    }
o.md = function() {
    Gg ? this.lb = window.setTimeout(x(this.Fc, this), 0) : this.Fc()
    };o.Fc = function() {
    if (this.g)
        of(this.s, this.Ba, "key", this.Bc),
    this.Ba.detach(),
    of(this.s, this.g, "keyup", this.rd),
    D && of(this.s, this.g, "keypress", this.yc),
    this.W && Lg(this),
    this.g = k,
    this.o && (this.o.stop(), of(this.s, this.o, "tick", this.Dc)),
    this.f && pg(this.f)
    };o.Dc = function() {
    this.update()
    };o.Hd = function(a) {
    this.ic(a)
    };o.Bc = function(a) {
    this.qc = a.keyCode;
    this.f && Jg(this, a)
    };o.zc = function() {
    this.W && this.qc != 229 && Lg(this)
    };o.Ac = function(a) {
    this.W && (a.keyCode == 13 || a.keyCode == 77 && a.ctrlKey) && Lg(this)
    };function Lg(a) {
    if (a.W)
        a.W = n,
    of(a.s, a.g, "keypress", a.zc),
    of(a.s, a.g, "keyup", a.Ac)
    }
o.yc = function(a) {
    Kg(this, a)
    };o.update = function(a) {
    if (this.g && (a || this.N() != this.Db)) {
        if (a || !this.Mb) {
            var b,
            a = gg(this.g);
            b = this.N();
            a = ug(this, b)[tg(this, b, a)];
            b = this.Zc ? String(a).replace(this.Zc, "") : a;
            if (this.f && (this.f.l = this.g, a = this.f, this.N(), a.B != b)) {
                a.B = b;
                b = a.uc;
                var c = a.B,
                d = a.Dd,
                e = x(a.Cd, a),
                f = wg(b, c, d);
                f.length == 0 && b.le && (f = xg(b, c, d));
                e(c, f);
                ng(a)
                }
        }
        this.Db = this.N()
        }
    this.Mb = n
};function tg(a, b, c) {
    a = ug(a, b);
    if (c == b.length)
        return a.length - 1;
    for (var d = b = 0, e = 0; d < a.length && e <= c; d++)
        e += a[d].length,
    b = d;
    return b
}
function ug(a, b) {
    if (!a.ma)
        return [b];
    for (var c = String(b).split(""), d = [], e = [], f = 0, h = n; f < c.length; f++)
        if (a.sc && a.sc.indexOf(c[f]) != -1) {
        if (a.kd && !h)
            d.push(e.join("")),
        e.length = 0;
        e.push(c[f]);
        h = !h
    } else ! h && a.Fa.indexOf(c[f]) != -1 ? (e.push(c[f]), d.push(e.join("")), e.length = 0) : e.push(c[f]);
    d.push(e.join(""));
    return d
}
function Mg(a, b, c, d) { (!t(a) || !t(b)) && g(Error("Start and end parameters must be arrays"));
    a.length != b.length && g(Error("Start and end points must be the same length"));
    this.Ga = a;
    this.gd = b;
    this.duration = c;
    this.Rb = d;
    this.coords = []
    }
y(Mg, V);
var Ng = {},
Og = k;function Pg() {
    Qg();
    var a = Ra(),
    b;
    for (b in Ng)
        Rg(Ng[b], a);
    Og = Ab(Ng) ? k: rf.setTimeout(Pg, 20)
    }
function Qg() {
    Og && (rf.clearTimeout(Og), Og = k)
    }
function Sg(a) {
    a = w(a);
    delete Ng[a];
    Ab(Ng) && Qg()
    }
o = Mg.prototype;o.I = 0;o.ec = 0;o.A = 0;o.startTime = k;o.bc = k;o.Cb = k;o.play = function(a) {
    if (a || this.I == 0)
        this.A = 0,
    this.coords = this.Ga;
    else if (this.I == 1)
        return n;
    Sg(this);
    this.startTime = a = Ra();
    this.I == -1 && (this.startTime -= this.duration * this.A);
    this.bc = this.startTime + this.duration;
    this.Cb = this.startTime;
    this.A || this.da();
    Tg(this, "play");
    this.I == -1 && Tg(this, "resume");
    this.I = 1;
    var b = w(this);
    b in Ng || (Ng[b] = this);
    Og || (Og = rf.setTimeout(Pg, 20));
    Rg(this, a);
    return j
};o.stop = function(a) {
    Sg(this);
    this.I = 0;
    if (a)
        this.A = 1;
    Ug(this, this.A);
    Tg(this, "stop");
    this.na()
    };o.e = function() {
    this.I != 0 && this.stop(n);
    Tg(this, "destroy");
    Mg.d.e.call(this)
    };function Rg(a, b) {
    a.A = (b - a.startTime) / (a.bc - a.startTime);
    if (a.A >= 1)
        a.A = 1;
    a.ec = 1E3 / (b - a.Cb);
    a.Cb = b;
    Ug(a, a.A);
    a.A == 1 ? (a.I = 0, Sg(a), Tg(a, "finish"), a.na()) : a.I == 1 && a.Hb()
    }
function Ug(a, b) {
    Ja(a.Rb) && (b = a.Rb(b));
    a.coords = Array(a.Ga.length);
    for (var c = 0; c < a.Ga.length; c++)
        a.coords[c] = (a.gd[c] - a.Ga[c]) * b + a.Ga[c]
    }
o.Hb = function() {
    Tg(this, "animate")
    };o.da = function() {
    Tg(this, "begin")
    };o.na = function() {
    Tg(this, "end")
    };function Tg(a, b) {
    a.dispatchEvent(new Vg(b, a))
    }
function Vg(a, b) {
    H.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.Fe = b.coords[2];
    this.duration = b.duration;
    this.A = b.A;
    this.te = b.ec;
    this.state = b.I;
    this.re = b
}
y(Vg, H);function Y(a, b, c, d, e) {
    Mg.call(this, b, c, d, e);
    this.element = a
}
y(Y, Mg);Y.prototype.gb = r;Y.prototype.Hb = function() {
    this.gb();
    Y.d.Hb.call(this)
    };Y.prototype.na = function() {
    this.gb();
    Y.d.na.call(this)
    };Y.prototype.da = function() {
    this.gb();
    Y.d.da.call(this)
    };function Wg(a, b, c, d, e) {
    typeof b == "number" && (b = [b]);
    typeof c == "number" && (c = [c]);
    Y.call(this, a, b, c, d, e); (b.length != 1 || c.length != 1) && g(Error("Start and end points must be 1D"))
    }
y(Wg, Y);Wg.prototype.gb = function() {
    var a = this.coords[0],
    b = this.element.style;
    if ("opacity" in b)
        b.opacity = a;
    else if ("MozOpacity" in b)
        b.MozOpacity = a;
    else if ("filter" in b)
        b.filter = a === "" ? "": "alpha(opacity=" + a * 100 + ")"
};Wg.prototype.db = function() {
    this.element.style.display = ""
};function Xg(a, b, c) {
    Wg.call(this, a, 1, 0, b, c)
    }
y(Xg, Wg);Xg.prototype.da = function() {
    this.db();
    Xg.d.da.call(this)
    };Xg.prototype.na = function() {
    this.element.style.display = "none";
    Xg.d.na.call(this)
    };function Yg(a, b, c) {
    Wg.call(this, a, 0, 1, b, c)
    }
y(Yg, Wg);Yg.prototype.da = function() {
    this.db();
    Yg.d.da.call(this)
    };function Zg(a, b, c, d) {
    this.G = a || document.body;
    this.i = Rc(this.G);
    this.Td = !a;
    this.a = k;
    this.B = "";
    this.j = [];
    this.ga = [];
    this.Sc = this.Ra = -1;
    this.qa = n;
    this.className = "ac-renderer";
    this.Lb = "ac-row";
    this.rc = "active";
    this.Sb = "ac-active";
    this.ud = "ac-highlighted";
    this.ja = b || k;
    this.me = d != k ? d: j;
    this.wb = n;
    this.Vd = c != k ? c: n;
    this.Ab = k;
    this.fb = n;
    this.Za = 0
}
y(Zg, V);o = Zg.prototype;o.b = function() {
    return this.a
};o.Kb = function(a, b, c) {
    this.B = b;
    this.j = a;
    this.Ra = -1;
    this.Sc = Ra();
    this.l = c;
    this.ga = [];
    $g(this)
    };o.K = function() {
    this.l && hf(this.l, "activedescendant", "");
    if (this.qa)
        this.qa = n,
    this.l && hf(this.l, "haspopup", n),
    this.Za > 0 ? (kc(this.ia), this.ia = new Xg(this.a, this.Za), this.ia.play()) : this.a.style.display = "none"
};o.db = function() {
    if (!this.qa)
        this.qa = j,
    this.l && (gf(this.l, "combobox"), hf(this.l, "autocomplete", "list"), hf(this.l, "haspopup", j)),
    this.Za > 0 ? (kc(this.ia), this.ia = new Yg(this.a, this.Za), this.ia.play()) : this.a.style.display = ""
};o.Aa = function() {
    return this.qa
};function ah(a, b) {
    var c = b >= 0 && b < a.ga.length ? a.ga[b] : i;
    if (a.dispatchEvent({
        type: "rowhilite",
        Ce: c
    }) && (bh(a), a.Ra = b, c)) {
        B(c, a.Sb, a.rc);
        a.l && hf(a.l, "activedescendant", c ? c.id: "");
        var d = a.a,
        e = Ee(c),
        f = Ee(d),
        h;
        if (D) {
            var l = Le(d, "borderLeft");
            h = Le(d, "borderRight");
            var m = Le(d, "borderTop"),
            p = Le(d, "borderBottom");
            h = new ye(m, h, p, l)
            } else
            l = ze(d, "borderLeftWidth"),
        h = ze(d, "borderRightWidth"),
        m = ze(d, "borderTopWidth"),
        p = ze(d, "borderBottomWidth"),
        h = new ye(parseFloat(m), parseFloat(h), parseFloat(p), parseFloat(l));
        l = e.x - f.x - h.left;
        e = e.y - f.y - h.top;
        f = d.clientHeight - c.offsetHeight;
        d.scrollLeft += Math.min(l, Math.max(l - (d.clientWidth - c.offsetWidth), 0));
        d.scrollTop += Math.min(e, Math.max(e - f, 0))
        }
}
function bh(a) {
    a.Ra >= 0 && C(a.ga[a.Ra], a.Sb, a.rc)
    }
o.C = function(a) {
    if (a == -1)
        ah(this, -1);
    else
        for (var b = 0; b < this.j.length; b++)
        if (this.j[b].id == a) {
        ah(this, b);
        break
    }
};function ch(a) {
    if (!a.a) {
        var b = a.i.Z("div", {
            style: "display:none"
        });
        a.a = b;
        B(b, a.className);
        gf(b, "listbox");
        b.id = uf(tf.Ma());
        a.i.appendChild(a.G, b);
        M(b, "click", a.gc, n, a);
        M(b, "mousedown", a.jc, n, a);
        M(a.i.L, "mousedown", a.hc, n, a);
        M(b, "mouseover", a.kc, n, a)
        }
}
function $g(a) {
    ch(a);
    if (a.fb)
        a.a.style.visibility = "hidden";
    if (a.oe)
        a.a.style.minWidth = a.oe.clientWidth + "px";
    a.ga.length = 0;
    a.i.Jc(a.a);
    if (a.ja && a.ja.Ib)
        a.ja.Ib(a, a.a, a.j, a.B);
    else {
        var b = k;
        vb(a.j, function(c) {
            c = this.Jb(c, this.B);
            this.fb ? this.a.insertBefore(c, b) : this.i.appendChild(this.a, c);
            b = c
        }, a)
        }
    a.j.length == 0 ? a.K() : (a.db(), a.Sd(), Je(a.a, j))
    }
o.Sd = function() {
    if (this.l && this.Td) {
        var a = Ee(this.l),
        b = Ge(this.l),
        c = Ge(Be(this.l)),
        d = Ge(this.a);
        a.y = this.fb ? a.y - d.height: a.y + b.height; (this.Vd || a.x + d.width > c.width) && this.Ab != "LEFT" ? (a.x = a.x + b.width - d.width, this.Ab = "RIGHT") : this.Ab = "LEFT";
        b = this.a;
        c = i;
        d = Ee(b);
        if (a instanceof Nc)
            c = a.y,
        a = a.x;
        var a = b.offsetLeft + (a - d.x),
        e = b.offsetTop + (c - d.y),
        d = E && (Mb || Ub) && G("1.9");
        a instanceof Nc ? (c = a.x, a = a.y) : (c = a, a = e);
        b.style.left = Fe(c, d);
        b.style.top = Fe(a, d);
        if (this.fb)
            this.a.style.visibility = "visible"
    }
};o.e = function() {
    if (this.a)
        Cc(this.a, "click", this.gc, n, this),
    Cc(this.a, "mousedown", this.jc, n, this),
    Cc(this.i.L, "mousedown", this.hc, n, this),
    Cc(this.a, "mouseover", this.kc, n, this),
    this.i.removeNode(this.a),
    this.a = k,
    this.qa = n;
    kc(this.ia);
    delete this.G;
    Zg.d.e.call(this)
    };function dh(a, b, c) {
    if (b.nodeType == 3) {
        var d = k;
        t(c) && c.length > 1 && !a.wb && (d = pb(c, 1));
        c = eh(a, c);
        if (c.length != 0) {
            for (var e = b.nodeValue, f = RegExp("(.*?)(^|\\W+)(" + c + ")", "gi"), c = [], h = 0, l = f.exec(e), m = 0; l;)
                m++,
            c.push(l[1]),
            c.push(l[2]),
            c.push(l[3]),
            h = f.lastIndex,
            l = f.exec(e);
            c.push(e.substring(h));
            if (c.length > 1) {
                d = !a.wb ? 1: m;
                for (e = 0; e < d; e++)
                    f = 3 * e,
                b.nodeValue = c[f] + c[f + 1],
                h = a.i.createElement("b"),
                h.className = a.ud,
                a.i.appendChild(h, a.i.createTextNode(c[f + 2])),
                h = b.parentNode.insertBefore(h, b.nextSibling),
                b.parentNode.insertBefore(a.i.createTextNode(""), h.nextSibling),
                b = h.nextSibling;
                a = pb(c, d * 3);
                b.nodeValue = a.join("")
                } else
                d && dh(a, b, d)
            }
    } else
        for (b = b.firstChild; b;)
        d = b.nextSibling,
    dh(a, b, c),
    b = d
}
function eh(a, b) {
    var c = "";
    if (!b)
        return c;
    a.wb ? t(b) ? (c = ib(b, function(d) {
        return ! z(d)
        }), c = jb(c, eb), c = c.join("|")) : (c = Sa(b), c = eb(c), c = c.replace(/ /g, "|")) : c = t(b) ? b.length > 0 ? eb(b[0]) : "": eb(b);
    return c
}
o.Jb = function(a, b) {
    var c = this.i.Z("div", {
        className: this.Lb,
        id: uf(tf.Ma())
        });
    gf(c, "option");
    this.ja && this.ja.Rd ? this.ja.Rd(a, b, c) : c.innerHTML = Wa(a.data.toString());
    b && this.me && dh(this, c, b);
    B(c, this.Lb);
    this.ga.push(c);
    return c
};function fh(a, b) {
    for (; b && b != a.a && !kb(rb(b), a.Lb);)
        b = b.parentNode;
    return b ? gb(a.ga, b) : -1
}
o.gc = function(a) {
    var b = fh(this, a.target);
    b >= 0 && this.dispatchEvent({
        type: "select",
        cb: this.j[b].id
    });
    a.stopPropagation()
    };o.jc = function(a) {
    this.dispatchEvent("canceldismiss");
    a.stopPropagation();
    a.preventDefault()
    };o.hc = function(a) {
    this.l == a.target ? (bh(this), a.stopPropagation()) : this.dispatchEvent("dismiss")
    };o.kc = function(a) {
    a = fh(this, a.target);
    a >= 0 && !(Ra() - this.Sc < 300) && this.dispatchEvent({
        type: "hilite",
        cb: this.j[a].id
    })
    };function gh(a) {
    if (z(a))
        return [];
    for (var b = [], a = Sa(a), a = a.split(/\s*,\s*/), c = 0; c < a.length; c++) {
        var d = a[c];
        z(d) || (d.search(aa) != -1 && g(bd('"%1" is not a valid tag name. The following characters are not allowed: ",<,>,?,&,/,\\,^', d)), b.push(d))
        }
    return b
}
function hh(a) {
    if (_USER_ID == k)
        return k;
    var b = [];
    ih.getLabels(function(f) {
        for (var h = 0, l; l = f[h]; h++)
            b.push(l.getName())
        });
    var c = new vg(b),
    d = new jh,
    e = new Fg,
    c = new lg(c, d, e);
    e.f = c;
    e.mb(a);
    Ig(e, n);
    return c
}
function jh() {
    Zg.call(this);
    this.Lc = []
    }
y(jh, Zg);jh.prototype.e = function() {
    hb(this.Lc, N);
    jh.d.e.call(this)
    };jh.prototype.Jb = function(a, b) {
    var c = jh.d.Jb.call(this, a, b);
    this.Lc.push(M(c, "click", r));
    return c
};function kh(a, b) {
    vf.call(this, b);
    this.v = a || ""
}
y(kh, vf);kh.prototype.R = k;
var lh = "placeholder" in document.createElement("input");o = kh.prototype;o.ya = n;o.Z = function() {
    this.a = this.sb().Z("input", {
        type: "text"
    })
    };o.pb = function(a) {
    kh.d.pb.call(this, a);
    if (!this.v)
        this.v = a.getAttribute("label") || "";
    var b = P(a);
    if (b && b.activeElement == a)
        this.ya = j,
    C(this.b(), this.Ia);
    lh ? this.b().placeholder = this.v: hf(this.b(), "label", this.v)
    };o.va = function() {
    kh.d.va.call(this);
    var a = new lf(this);
    U(a, this.b(), "focus", this.ub);
    U(a, this.b(), "blur", this.nd);
    if (lh)
        this.M = a;
    else {
        E && U(a, this.b(), ["keypress", "keydown", "keyup"], this.od);
        var b = P(this.b());
        U(a, b ? b.parentWindow || b.defaultView: window, "load", this.td);
        this.M = a;
        mh(this)
        }
    nh(this);
    this.b().xd = this
};o.wa = function() {
    kh.d.wa.call(this);
    oh(this);
    this.b().xd = k
};function mh(a) {
    if (!a.jd && a.M && a.b().form)
        U(a.M, a.b().form, "submit", a.pd),
    a.jd = j
}
function oh(a) {
    if (a.M)
        a.M.p(),
    a.M = k
}
o.e = function() {
    kh.d.e.call(this);
    oh(this)
    };o.Ia = "label-input-label";o.ub = function() {
    this.ya = j;
    C(this.b(), this.Ia);
    if (!lh && !ph(this) && !this.yb) {
        var a = this,
        b = function() {
            a.b().value = ""
        };
        D ? sf(b, 10) : b()
        }
};o.nd = function() {
    if (!lh)
        of(this.M, this.b(), "click", this.ub),
    this.R = k;
    this.ya = n;
    nh(this)
    };o.od = function(a) {
    if (a.keyCode == 27) {
        if (a.type == "keydown")
            this.R = this.b().value;
        else if (a.type == "keypress")
            this.b().value = this.R;
        else if (a.type == "keyup")
            this.R = k;
        a.preventDefault()
        }
};o.pd = function() {
    if (!ph(this))
        this.b().value = "",
    sf(this.ld, 10, this)
    };o.ld = function() {
    if (!ph(this))
        this.b().value = this.v
};o.td = function() {
    nh(this)
    };function ph(a) {
    return !! a.b() && a.b().value != "" && a.b().value != a.v
}
o.Qc = function(a) {
    if (this.R != k)
        this.R = a;
    this.b().value = a;
    nh(this)
    };o.N = function() {
    return this.R != k ? this.R: ph(this) ? this.b().value: ""
};function nh(a) {
    if (lh) {
        if (a.b().placeholder != a.v)
            a.b().placeholder = a.v
    } else
        mh(a),
    hf(a.b(), "label", a.v);
    ph(a) ? C(a.b(), a.Ia) : (!a.yb && !a.ya && B(a.b(), a.Ia), lh || sf(a.Ud, 10, a))
    }
function qh(a) {
    var b = ph(a);
    a.yb = j;
    a.b().focus();
    if (!b && !lh)
        a.b().value = a.v;
    a.b().select();
    lh || (a.M && nf(a.M, a.b(), "click", a.ub), sf(a.hd, 10, a))
    }
o.hd = function() {
    this.yb = n
};o.Ud = function() {
    if (this.b() && !ph(this) && !this.ya)
        this.b().value = this.v
};
var ih = k,
Vd = k;function rh() {
    this.Ob = [];
    this.Tc = {};
    this.Qd = [];
    this.Gb = this.Fb = n;
    this.yd = 0
}
rh.prototype.fc = function(a) {
    this.Fb ? a(this.Ob) : (this.Gb || sh(this), window.setTimeout(x(this.fc, this, a), 50))
    };function sh(a) {
    a.Fb = n;
    a.Gb = j;
    var b = [];
    th(a, b, function() {
        a.Ob = b;
        a.Tc = {};
        for (var c = 0, d; d = a.Ob[c]; c++)
            a.Tc[d.ee.streamId] = c;
        a.Fb = j;
        a.Gb = n;
        a.yd = R()
        })
    }
function Wd(a, b) {
    a.Qd.push(b)
    }
function uh() {
    rh.call(this)
    }
y(uh, rh);function th(a, b, c) {
    re("/reader/api/0/tag/list", function(d) {
        for (var e = 0, f; f = d.tags[e]; e++) {
            var h = sd(f.id);
            b.push({
                ee: Md(td(h)),
                Wc: h.type == "label" ? h.getName() : be(h, ae),
                v: h,
                De: f.shared == "all",
                Ee: f.sortid
            })
            }
        c()
        }, i, "_STREAM_LIST_TAGS")
    }
uh.prototype.getLabels = function(a) {
    this.fc(function(b) {
        for (var c = [], d = 0, e; e = b[d]; d++)
            e.v.type == "label" && c.push(e.v);
        a(c)
        })
    };
var vh,
wh = RegExp("(<embed[^>]+>)", "g"),
xh = n;function _FR_linkBookmarkletMain() {
    df();
    vh = Q("url").value;
    yh()
    }
	
//*** EZ Prevent double entry ***
var AlreadySubmitted = false;
//*******************************
function yh() {
    _FR_LinkBookmarkletUtil_initCloseLink();
    zh();
    Ah();
    Bh();
    var a = new kh;
    a.Zb(Q("annotation"));
    _LINK_BOOKMARKLET_IS_STANDALONE || qh(a);
    var b = Q("tags");
    M(Q("add-tags"), "click", function() {
        var c = Q("add-tags");
        B(c, "hidden");
        c = Q("tag-table");
        C(c, "hidden");
        ih = new uh;
        hh(b);
        b.focus()
        });
    ce = new de(_USER_ID);
    M(Q("frm"), "submit", function(c) {
		//*** EZ Prevent double entry ***
		if (AlreadySubmitted) return;
		AlreadySubmitted = true;
		//*******************************
        var d = a.N(),
        d = gd(d),
        e = gh(b.value),
        f = new Ch;
        Dh(f, Q("title").value);
        Eh(f, Q("url").value);
        Fh(f, Q("srcUrl").value);
        Gh(f, Q("srcTitle").value);
        Hh(f, ve(e));
        f.Ub = d;
        d = Q("snippet-preview").innerHTML;
        d = d.replace(wh, "$1</embed>");
        Ih(f, d);
        Jh(f, Q("share").checked);
        Kh(f, function() {
            B(Q("frm"), "hidden");
            window.setTimeout(Ne, 1300)
            });
        c.preventDefault()
        })
    }
function Lh(a, b) {
    var c = Q(a),
    d = a + "-on";
    b ? B(c, d) : C(c, d)
    }
function zh() {
    function a() {
        Ta(b.value) || (B(Q("title-container"), "hidden"), Mh())
        }
    var b = Q("title");
    a();
    M(b, "click", Nh);
    M(b, "blur", function() {
        xh = n;
        Lh("title", n);
        a()
        })
    }
function Nh() {
    xh || (Lh("title", j), Q("title").focus(), jg(Q("title"), 0), xh = j)
    }
function Mh() {
    var a = Q("title-empty");
    C(a, "hidden");
    M(Q("title-add-link"), "click", function() {
        C(Q("title-container"), "hidden");
        B(a, "hidden");
        Nh()
        })
    }
function Ah() {
    M(Q("snippet-empty-refresh"), "click", function() {
        Me(window.opener ? window.opener: top, vh.split("#")[0] + "#refresh=1");
        window.opener && window.close()
        });
    var a = Q("snippet"),
    b = Q("snippet-preview");
    M(a, "focus", Qa(Lh, "snippet", j));
    M(a, "blur", function() {
        we(a.value, function(c) {
            a.value = c;
            b.innerHTML = c;
            B(a, "hidden");
            C(b, "hidden")
            })
        })
    }
function Bh() {
    var a = Q("snippet-preview");
    M(a, "click", function() {
        var b = Q("snippet");
        B(a, "hidden");
        C(b, "hidden");
        b.value = a.innerHTML;
        b.focus();
        jg(b, 0)
        }); (Oe(top) || oe) && B(Q("snippet-container-empty"), "hidden");
    M(a, "mouseover", Qa(Lh, "snippet-preview", j));
    M(a, "mouseout", Qa(Lh, "snippet-preview", n))
    }
function Ch() {
    this.Ec = []
    }
function Dh(a, b) {
    a.Wc = b
}
function Eh(a, b) {
    a.ke = b
}
function Fh(a, b) {
    a.ae = b
}
function Gh(a, b) {
    a.$d = b
}
function Hh(a, b) {
    a.Pb = b
}
function Ih(a, b, c) {
    b = Ta(b);
    if (c && !dd.test(b))
        b = b ? b.replace(/(\r\n|\r|\n)/g, "<br>") : "",
    a.Ad = j;
    a.Zd = b
}
function Jh(a, b) {
    a.Rc = b
}
function $(a, b, c) {
    c && a.Ec.push([b, c])
    }
function Kh(a, b, c) {
    T("Adding a note...", af, i, i);
    var d = new se;
    te(d, function() {
        a.Rc ? T("Your note has been added and shared.", bf, i, i) : T("Your note has been added.", bf, i, i);
        b()
        });
    xe(d, function() {
        T("Oops...an error occurred. Please try again in a few seconds.", cf, 7, d.text);
        c && c()
        });
    $(a, "title", a.Wc);
    $(a, "url", a.ke);
    $(a, "srcUrl", a.ae);
    $(a, "srcTitle", a.$d);
    $(a, "annotation", a.Ub ? a.Ub.replace(/(\r\n|\r|\n)/g, "<br>") : "");
    if (a.Pb)
        for (var e in a.Pb)
        $(a, "tags", a.Pb[e]);
    $(a, "snippet", a.Zd);
    $(a, "share", a.Rc ? "true": "false");
    $(a, "i", a.ye);
    $(a, "linkify", a.Ad ? "true": "false");
    d.bb("/reader/api/0/item/edit", hd(a.Ec))
    };



	
	
var _OPENER_URL = "";        
var _LINK_BOOKMARKLET_IS_STANDALONE = false;                
_FR_linkBookmarkletMain();







