function(){return function(){var f=null,h=this;
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a,b){function c(){}c.prototype=b.prototype;a.c=b.prototype;a.prototype=new c};function n(a){Error.captureStackTrace?Error.captureStackTrace(this,n):this.stack=Error().stack||"";a&&(this.message=String(a))}l(n,Error);function p(a,b){for(var c=1;c<arguments.length;c++)var e=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,e);return a};function q(a,b){b.unshift(a);n.call(this,p.apply(f,b));b.shift();this.b=a}l(q,n);function r(a,b,c){var e=typeof a;if(!("object"==e&&a!=f||"function"==e)){var m=[k(a),a],d=Array.prototype.slice.call(arguments,2),e="Assertion failed";b?(e+=": "+b,m=d):e+=": Expected object but got %s: %s.";throw new q(""+e,m||[]);}};var s,t,u,v;function w(){return h.navigator?h.navigator.userAgent:f}v=u=t=s=!1;var x;if(x=w()){var y=h.navigator;s=0==x.indexOf("Opera");t=!s&&-1!=x.indexOf("MSIE");u=!s&&-1!=x.indexOf("WebKit");v=!s&&!u&&"Gecko"==y.product}var z=s,A=t,B=v,C=u;function D(){var a=h.document;return a?a.documentMode:void 0}var E;
a:{var F="",G;if(z&&h.opera)var H=h.opera.version,F="function"==typeof H?H():H;else if(B?G=/rv\:([^\);]+)(\)|;)/:A?G=/MSIE\s+([^\);]+)(\)|;)/:C&&(G=/WebKit\/(\S+)/),G)var I=G.exec(w()),F=I?I[1]:"";if(A){var J=D();if(J>parseFloat(F)){E=String(J);break a}}E=F}var K={};
function L(a){if(!K[a]){for(var b=0,c=String(E).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),m=Math.max(c.length,e.length),d=0;0==b&&d<m;d++){var g=c[d]||"",X=e[d]||"",Y=RegExp("(\\d*)(\\D*)","g"),Z=RegExp("(\\d*)(\\D*)","g");do{var i=Y.exec(g)||["","",""],j=Z.exec(X)||["","",""];if(0==i[0].length&&0==j[0].length)break;b=((0==i[1].length?0:parseInt(i[1],10))<(0==j[1].length?0:parseInt(j[1],10))?-1:(0==i[1].length?0:parseInt(i[1],10))>
(0==j[1].length?0:parseInt(j[1],10))?1:0)||((0==i[2].length)<(0==j[2].length)?-1:(0==i[2].length)>(0==j[2].length)?1:0)||(i[2]<j[2]?-1:i[2]>j[2]?1:0)}while(0==b)}K[a]=0<=b}}var M=h.document,N=!M||!A?void 0:D()||("CSS1Compat"==M.compatMode?parseInt(E,10):5);var O;!B&&!A||A&&A&&9<=N||B&&L("1.9.1");A&&L("9");function P(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}P.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function Q(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function R(a){this.a=a||h.document||document};function S(a){var b;a:{b=Q(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,f))){b=b.position||b.getPropertyValue("position")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.position:f)||a.style&&a.style.position}
function T(a){if(A&&!(A&&8<=N))return a.offsetParent;for(var b=Q(a),c=S(a),e="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=S(a),e=e&&"static"==c&&a!=b.documentElement&&a!=b.body,!e&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return f};function U(a){var b,c=Q(a),e=S(a);r(a,"Parameter is required");var m=B&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==e&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),d=new P(0,0),g;b=c?Q(c):document;if(g=A)if(g=!(A&&9<=N))g="CSS1Compat"!=(b?new R(Q(b)):O||(O=new R)).a.compatMode;g=g?b.body:b.documentElement;if(a==g)return d;if(a.getBoundingClientRect)b=a.getBoundingClientRect(),A&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+
a.body.clientTop),a=(c?new R(Q(c)):O||(O=new R)).a,c=!C&&"CSS1Compat"==a.compatMode?a.documentElement:a.body,a=a.parentWindow||a.defaultView,c=new P(a.pageXOffset||c.scrollLeft,a.pageYOffset||c.scrollTop),d.x=b.left+c.x,d.y=b.top+c.y;else if(c.getBoxObjectFor&&!m)b=c.getBoxObjectFor(a),c=c.getBoxObjectFor(g),d.x=b.screenX-c.screenX,d.y=b.screenY-c.screenY;else{b=a;do{d.x+=b.offsetLeft;d.y+=b.offsetTop;b!=a&&(d.x+=b.clientLeft||0,d.y+=b.clientTop||0);if(C&&"fixed"==S(b)){d.x+=c.body.scrollLeft;d.y+=
c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(z||C&&"absolute"==e)d.y-=c.body.offsetTop;for(b=a;(b=T(b))&&b!=c.body&&b!=g;)if(d.x-=b.scrollLeft,!z||"TR"!=b.tagName)d.y-=b.scrollTop}return d}var V=["_"],W=h;!(V[0]in W)&&W.execScript&&W.execScript("var "+V[0]);for(var $;V.length&&($=V.shift());)!V.length&&void 0!==U?W[$]=U:W=W[$]?W[$]:W[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
