/* Copyright 2007-2010 Richard Jones
This work (apart from the Yui library from Yahoo!) is licensed under the Creative Commons [insert description] License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/2.5/au/
*/
/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=(""+A[C]).split(".");E=YAHOO;for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};YAHOO.log=function(D,A,C){var B=YAHOO.widget.Logger;if(B&&B.log){return B.log(D,A,C);}else{return false;}};YAHOO.register=function(A,E,D){var I=YAHOO.env.modules,B,H,G,F,C;if(!I[A]){I[A]={versions:[],builds:[]};}B=I[A];H=D.version;G=D.build;F=YAHOO.env.listeners;B.name=A;B.version=H;B.build=G;B.versions.push(H);B.builds.push(G);B.mainClass=E;for(C=0;C<F.length;C=C+1){F[C](B);}if(E){E.VERSION=H;E.BUILD=G;}else{YAHOO.log("mainClass is undefined for module "+A,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(A){return YAHOO.env.modules[A]||null;};YAHOO.env.ua=function(){var D=function(H){var I=0;return parseFloat(H.replace(/\./g,function(){return(I++==1)?"":".";}));},G=navigator,F={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,caja:G.cajaVersion,secure:false,os:null},C=navigator&&navigator.userAgent,E=window&&window.location,B=E&&E.href,A;F.secure=B&&(B.toLowerCase().indexOf("https")===0);if(C){if((/windows|win32/i).test(C)){F.os="windows";}else{if((/macintosh/i).test(C)){F.os="macintosh";}}if((/KHTML/).test(C)){F.webkit=1;}A=C.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){F.webkit=D(A[1]);if(/ Mobile\//.test(C)){F.mobile="Apple";}else{A=C.match(/NokiaN[^\/]*/);if(A){F.mobile=A[0];}}A=C.match(/AdobeAIR\/([^\s]*)/);if(A){F.air=A[0];}}if(!F.webkit){A=C.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){F.opera=D(A[1]);A=C.match(/Opera Mini[^;]*/);if(A){F.mobile=A[0];}}else{A=C.match(/MSIE\s([^;]*)/);if(A&&A[1]){F.ie=D(A[1]);}else{A=C.match(/Gecko\/([^\s]*)/);if(A){F.gecko=1;A=C.match(/rv:([^\s\)]*)/);if(A&&A[1]){F.gecko=D(A[1]);}}}}}}return F;}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;if(B){for(C=0;C<A.length;C++){if(A[C]==B){D=false;break;}}if(D){A.push(B);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var B=YAHOO.lang,A=Object.prototype,H="[object Array]",C="[object Function]",G="[object Object]",E=[],F=["toString","valueOf"],D={isArray:function(I){return A.toString.apply(I)===H;},isBoolean:function(I){return typeof I==="boolean";},isFunction:function(I){return(typeof I==="function")||A.toString.apply(I)===C;},isNull:function(I){return I===null;},isNumber:function(I){return typeof I==="number"&&isFinite(I);},isObject:function(I){return(I&&(typeof I==="object"||B.isFunction(I)))||false;},isString:function(I){return typeof I==="string";},isUndefined:function(I){return typeof I==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(K,J){var I,M,L;for(I=0;I<F.length;I=I+1){M=F[I];L=J[M];if(B.isFunction(L)&&L!=A[M]){K[M]=L;}}}:function(){},extend:function(L,M,K){if(!M||!L){throw new Error("extend failed, please check that "+"all dependencies are included.");}var J=function(){},I;J.prototype=M.prototype;L.prototype=new J();L.prototype.constructor=L;L.superclass=M.prototype;if(M.prototype.constructor==A.constructor){M.prototype.constructor=M;}if(K){for(I in K){if(B.hasOwnProperty(K,I)){L.prototype[I]=K[I];}}B._IEEnumFix(L.prototype,K);}},augmentObject:function(M,L){if(!L||!M){throw new Error("Absorb failed, verify dependencies.");}var I=arguments,K,N,J=I[2];if(J&&J!==true){for(K=2;K<I.length;K=K+1){M[I[K]]=L[I[K]];}}else{for(N in L){if(J||!(N in M)){M[N]=L[N];}}B._IEEnumFix(M,L);}},augmentProto:function(L,K){if(!K||!L){throw new Error("Augment failed, verify dependencies.");}var I=[L.prototype,K.prototype],J;for(J=2;J<arguments.length;J=J+1){I.push(arguments[J]);}B.augmentObject.apply(this,I);},dump:function(I,N){var K,M,P=[],Q="{...}",J="f(){...}",O=", ",L=" => ";if(!B.isObject(I)){return I+"";}else{if(I instanceof Date||("nodeType" in I&&"tagName" in I)){return I;}else{if(B.isFunction(I)){return J;}}}N=(B.isNumber(N))?N:3;if(B.isArray(I)){P.push("[");for(K=0,M=I.length;K<M;K=K+1){if(B.isObject(I[K])){P.push((N>0)?B.dump(I[K],N-1):Q);}else{P.push(I[K]);}P.push(O);}if(P.length>1){P.pop();}P.push("]");}else{P.push("{");for(K in I){if(B.hasOwnProperty(I,K)){P.push(K+L);if(B.isObject(I[K])){P.push((N>0)?B.dump(I[K],N-1):Q);}else{P.push(I[K]);}P.push(O);}}if(P.length>1){P.pop();}P.push("}");}return P.join("");},substitute:function(Y,J,R){var N,M,L,U,V,X,T=[],K,O="dump",S=" ",I="{",W="}",Q,P;for(;;){N=Y.lastIndexOf(I);if(N<0){break;}M=Y.indexOf(W,N);if(N+1>=M){break;}K=Y.substring(N+1,M);U=K;X=null;L=U.indexOf(S);if(L>-1){X=U.substring(L+1);U=U.substring(0,L);}V=J[U];if(R){V=R(U,V,X);}if(B.isObject(V)){if(B.isArray(V)){V=B.dump(V,parseInt(X,10));}else{X=X||"";Q=X.indexOf(O);if(Q>-1){X=X.substring(4);}P=V.toString();if(P===G||Q>-1){V=B.dump(V,parseInt(X,10));}else{V=P;}}}else{if(!B.isString(V)&&!B.isNumber(V)){V="~-"+T.length+"-~";T[T.length]=K;}}Y=Y.substring(0,N)+V+Y.substring(M+1);}for(N=T.length-1;N>=0;N=N-1){Y=Y.replace(new RegExp("~-"+N+"-~"),"{"+T[N]+"}","g");}return Y;},trim:function(I){try{return I.replace(/^\s+|\s+$/g,"");}catch(J){return I;}},merge:function(){var L={},J=arguments,I=J.length,K;for(K=0;K<I;K=K+1){B.augmentObject(L,J[K],true);}return L;},later:function(P,J,Q,L,M){P=P||0;J=J||{};var K=Q,O=L,N,I;if(B.isString(Q)){K=J[Q];}if(!K){throw new TypeError("method undefined");}if(O&&!B.isArray(O)){O=[L];}N=function(){K.apply(J,O||E);};I=(M)?setInterval(N,P):setTimeout(N,P);return{interval:M,cancel:function(){if(this.interval){clearInterval(I);}else{clearTimeout(I);}}};},isValue:function(I){return(B.isObject(I)||B.isString(I)||B.isNumber(I)||B.isBoolean(I));}};B.hasOwnProperty=(A.hasOwnProperty)?function(I,J){return I&&I.hasOwnProperty(J);}:function(I,J){return !B.isUndefined(I[J])&&I.constructor.prototype[J]!==I[J];};D.augmentObject(B,D,true);YAHOO.util.Lang=B;B.augment=B.augmentProto;YAHOO.augment=B.augmentProto;YAHOO.extend=B.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.8.1",build:"19"});
(function(){YAHOO.env._id_counter=YAHOO.env._id_counter||0;var E=YAHOO.util,L=YAHOO.lang,m=YAHOO.env.ua,A=YAHOO.lang.trim,d={},h={},N=/^t(?:able|d|h)$/i,X=/color$/i,K=window.document,W=K.documentElement,e="ownerDocument",n="defaultView",v="documentElement",t="compatMode",b="offsetLeft",P="offsetTop",u="offsetParent",Z="parentNode",l="nodeType",C="tagName",O="scrollLeft",i="scrollTop",Q="getBoundingClientRect",w="getComputedStyle",a="currentStyle",M="CSS1Compat",c="BackCompat",g="class",F="className",J="",B=" ",s="(?:^|\\s)",k="(?= |$)",U="g",p="position",f="fixed",V="relative",j="left",o="top",r="medium",q="borderLeftWidth",R="borderTopWidth",D=m.opera,I=m.webkit,H=m.gecko,T=m.ie;E.Dom={CUSTOM_ATTRIBUTES:(!W.hasAttribute)?{"for":"htmlFor","class":F}:{"htmlFor":"for","className":g},DOT_ATTRIBUTES:{},get:function(z){var AB,x,AA,y,Y,G;if(z){if(z[l]||z.item){return z;}if(typeof z==="string"){AB=z;z=K.getElementById(z);G=(z)?z.attributes:null;if(z&&G&&G.id&&G.id.value===AB){return z;}else{if(z&&K.all){z=null;x=K.all[AB];for(y=0,Y=x.length;y<Y;++y){if(x[y].id===AB){return x[y];}}}}return z;}if(YAHOO.util.Element&&z instanceof YAHOO.util.Element){z=z.get("element");}if("length" in z){AA=[];for(y=0,Y=z.length;y<Y;++y){AA[AA.length]=E.Dom.get(z[y]);}return AA;}return z;}return null;},getComputedStyle:function(G,Y){if(window[w]){return G[e][n][w](G,null)[Y];}else{if(G[a]){return E.Dom.IE_ComputedStyle.get(G,Y);}}},getStyle:function(G,Y){return E.Dom.batch(G,E.Dom._getStyle,Y);},_getStyle:function(){if(window[w]){return function(G,y){y=(y==="float")?y="cssFloat":E.Dom._toCamel(y);var x=G.style[y],Y;if(!x){Y=G[e][n][w](G,null);if(Y){x=Y[y];}}return x;};}else{if(W[a]){return function(G,y){var x;switch(y){case"opacity":x=100;try{x=G.filters["DXImageTransform.Microsoft.Alpha"].opacity;}catch(z){try{x=G.filters("alpha").opacity;}catch(Y){}}return x/100;case"float":y="styleFloat";default:y=E.Dom._toCamel(y);x=G[a]?G[a][y]:null;return(G.style[y]||x);}};}}}(),setStyle:function(G,Y,x){E.Dom.batch(G,E.Dom._setStyle,{prop:Y,val:x});},_setStyle:function(){if(T){return function(Y,G){var x=E.Dom._toCamel(G.prop),y=G.val;if(Y){switch(x){case"opacity":if(L.isString(Y.style.filter)){Y.style.filter="alpha(opacity="+y*100+")";if(!Y[a]||!Y[a].hasLayout){Y.style.zoom=1;}}break;case"float":x="styleFloat";default:Y.style[x]=y;}}else{}};}else{return function(Y,G){var x=E.Dom._toCamel(G.prop),y=G.val;if(Y){if(x=="float"){x="cssFloat";}Y.style[x]=y;}else{}};}}(),getXY:function(G){return E.Dom.batch(G,E.Dom._getXY);},_canPosition:function(G){return(E.Dom._getStyle(G,"display")!=="none"&&E.Dom._inDoc(G));},_getXY:function(){if(K[v][Q]){return function(y){var z,Y,AA,AF,AE,AD,AC,G,x,AB=Math.floor,AG=false;if(E.Dom._canPosition(y)){AA=y[Q]();AF=y[e];z=E.Dom.getDocumentScrollLeft(AF);Y=E.Dom.getDocumentScrollTop(AF);AG=[AB(AA[j]),AB(AA[o])];if(T&&m.ie<8){AE=2;AD=2;AC=AF[t];if(m.ie===6){if(AC!==c){AE=0;AD=0;}}if((AC===c)){G=S(AF[v],q);x=S(AF[v],R);if(G!==r){AE=parseInt(G,10);}if(x!==r){AD=parseInt(x,10);}}AG[0]-=AE;AG[1]-=AD;}if((Y||z)){AG[0]+=z;AG[1]+=Y;}AG[0]=AB(AG[0]);AG[1]=AB(AG[1]);}else{}return AG;};}else{return function(y){var x,Y,AA,AB,AC,z=false,G=y;if(E.Dom._canPosition(y)){z=[y[b],y[P]];x=E.Dom.getDocumentScrollLeft(y[e]);Y=E.Dom.getDocumentScrollTop(y[e]);AC=((H||m.webkit>519)?true:false);while((G=G[u])){z[0]+=G[b];z[1]+=G[P];if(AC){z=E.Dom._calcBorders(G,z);}}if(E.Dom._getStyle(y,p)!==f){G=y;while((G=G[Z])&&G[C]){AA=G[i];AB=G[O];if(H&&(E.Dom._getStyle(G,"overflow")!=="visible")){z=E.Dom._calcBorders(G,z);}if(AA||AB){z[0]-=AB;z[1]-=AA;}}z[0]+=x;z[1]+=Y;}else{if(D){z[0]-=x;z[1]-=Y;}else{if(I||H){z[0]+=x;z[1]+=Y;}}}z[0]=Math.floor(z[0]);z[1]=Math.floor(z[1]);}else{}return z;};}}(),getX:function(G){var Y=function(x){return E.Dom.getXY(x)[0];};return E.Dom.batch(G,Y,E.Dom,true);},getY:function(G){var Y=function(x){return E.Dom.getXY(x)[1];};return E.Dom.batch(G,Y,E.Dom,true);},setXY:function(G,x,Y){E.Dom.batch(G,E.Dom._setXY,{pos:x,noRetry:Y});},_setXY:function(G,z){var AA=E.Dom._getStyle(G,p),y=E.Dom.setStyle,AD=z.pos,Y=z.noRetry,AB=[parseInt(E.Dom.getComputedStyle(G,j),10),parseInt(E.Dom.getComputedStyle(G,o),10)],AC,x;if(AA=="static"){AA=V;y(G,p,AA);}AC=E.Dom._getXY(G);if(!AD||AC===false){return false;}if(isNaN(AB[0])){AB[0]=(AA==V)?0:G[b];}if(isNaN(AB[1])){AB[1]=(AA==V)?0:G[P];}if(AD[0]!==null){y(G,j,AD[0]-AC[0]+AB[0]+"px");}if(AD[1]!==null){y(G,o,AD[1]-AC[1]+AB[1]+"px");}if(!Y){x=E.Dom._getXY(G);if((AD[0]!==null&&x[0]!=AD[0])||(AD[1]!==null&&x[1]!=AD[1])){E.Dom._setXY(G,{pos:AD,noRetry:true});}}},setX:function(Y,G){E.Dom.setXY(Y,[G,null]);},setY:function(G,Y){E.Dom.setXY(G,[null,Y]);},getRegion:function(G){var Y=function(x){var y=false;if(E.Dom._canPosition(x)){y=E.Region.getRegion(x);}else{}return y;};return E.Dom.batch(G,Y,E.Dom,true);},getClientWidth:function(){return E.Dom.getViewportWidth();},getClientHeight:function(){return E.Dom.getViewportHeight();},getElementsByClassName:function(AB,AF,AC,AE,x,AD){AF=AF||"*";AC=(AC)?E.Dom.get(AC):null||K;if(!AC){return[];}var Y=[],G=AC.getElementsByTagName(AF),z=E.Dom.hasClass;for(var y=0,AA=G.length;y<AA;++y){if(z(G[y],AB)){Y[Y.length]=G[y];}}if(AE){E.Dom.batch(Y,AE,x,AD);}return Y;},hasClass:function(Y,G){return E.Dom.batch(Y,E.Dom._hasClass,G);},_hasClass:function(x,Y){var G=false,y;if(x&&Y){y=E.Dom._getAttribute(x,F)||J;if(Y.exec){G=Y.test(y);}else{G=Y&&(B+y+B).indexOf(B+Y+B)>-1;}}else{}return G;},addClass:function(Y,G){return E.Dom.batch(Y,E.Dom._addClass,G);},_addClass:function(x,Y){var G=false,y;if(x&&Y){y=E.Dom._getAttribute(x,F)||J;if(!E.Dom._hasClass(x,Y)){E.Dom.setAttribute(x,F,A(y+B+Y));G=true;}}else{}return G;},removeClass:function(Y,G){return E.Dom.batch(Y,E.Dom._removeClass,G);},_removeClass:function(y,x){var Y=false,AA,z,G;if(y&&x){AA=E.Dom._getAttribute(y,F)||J;E.Dom.setAttribute(y,F,AA.replace(E.Dom._getClassRegex(x),J));z=E.Dom._getAttribute(y,F);if(AA!==z){E.Dom.setAttribute(y,F,A(z));Y=true;if(E.Dom._getAttribute(y,F)===""){G=(y.hasAttribute&&y.hasAttribute(g))?g:F;
y.removeAttribute(G);}}}else{}return Y;},replaceClass:function(x,Y,G){return E.Dom.batch(x,E.Dom._replaceClass,{from:Y,to:G});},_replaceClass:function(y,x){var Y,AB,AA,G=false,z;if(y&&x){AB=x.from;AA=x.to;if(!AA){G=false;}else{if(!AB){G=E.Dom._addClass(y,x.to);}else{if(AB!==AA){z=E.Dom._getAttribute(y,F)||J;Y=(B+z.replace(E.Dom._getClassRegex(AB),B+AA)).split(E.Dom._getClassRegex(AA));Y.splice(1,0,B+AA);E.Dom.setAttribute(y,F,A(Y.join(J)));G=true;}}}}else{}return G;},generateId:function(G,x){x=x||"yui-gen";var Y=function(y){if(y&&y.id){return y.id;}var z=x+YAHOO.env._id_counter++;if(y){if(y[e]&&y[e].getElementById(z)){return E.Dom.generateId(y,z+x);}y.id=z;}return z;};return E.Dom.batch(G,Y,E.Dom,true)||Y.apply(E.Dom,arguments);},isAncestor:function(Y,x){Y=E.Dom.get(Y);x=E.Dom.get(x);var G=false;if((Y&&x)&&(Y[l]&&x[l])){if(Y.contains&&Y!==x){G=Y.contains(x);}else{if(Y.compareDocumentPosition){G=!!(Y.compareDocumentPosition(x)&16);}}}else{}return G;},inDocument:function(G,Y){return E.Dom._inDoc(E.Dom.get(G),Y);},_inDoc:function(Y,x){var G=false;if(Y&&Y[C]){x=x||Y[e];G=E.Dom.isAncestor(x[v],Y);}else{}return G;},getElementsBy:function(Y,AF,AB,AD,y,AC,AE){AF=AF||"*";AB=(AB)?E.Dom.get(AB):null||K;if(!AB){return[];}var x=[],G=AB.getElementsByTagName(AF);for(var z=0,AA=G.length;z<AA;++z){if(Y(G[z])){if(AE){x=G[z];break;}else{x[x.length]=G[z];}}}if(AD){E.Dom.batch(x,AD,y,AC);}return x;},getElementBy:function(x,G,Y){return E.Dom.getElementsBy(x,G,Y,null,null,null,true);},batch:function(x,AB,AA,z){var y=[],Y=(z)?AA:window;x=(x&&(x[C]||x.item))?x:E.Dom.get(x);if(x&&AB){if(x[C]||x.length===undefined){return AB.call(Y,x,AA);}for(var G=0;G<x.length;++G){y[y.length]=AB.call(Y,x[G],AA);}}else{return false;}return y;},getDocumentHeight:function(){var Y=(K[t]!=M||I)?K.body.scrollHeight:W.scrollHeight,G=Math.max(Y,E.Dom.getViewportHeight());return G;},getDocumentWidth:function(){var Y=(K[t]!=M||I)?K.body.scrollWidth:W.scrollWidth,G=Math.max(Y,E.Dom.getViewportWidth());return G;},getViewportHeight:function(){var G=self.innerHeight,Y=K[t];if((Y||T)&&!D){G=(Y==M)?W.clientHeight:K.body.clientHeight;}return G;},getViewportWidth:function(){var G=self.innerWidth,Y=K[t];if(Y||T){G=(Y==M)?W.clientWidth:K.body.clientWidth;}return G;},getAncestorBy:function(G,Y){while((G=G[Z])){if(E.Dom._testElement(G,Y)){return G;}}return null;},getAncestorByClassName:function(Y,G){Y=E.Dom.get(Y);if(!Y){return null;}var x=function(y){return E.Dom.hasClass(y,G);};return E.Dom.getAncestorBy(Y,x);},getAncestorByTagName:function(Y,G){Y=E.Dom.get(Y);if(!Y){return null;}var x=function(y){return y[C]&&y[C].toUpperCase()==G.toUpperCase();};return E.Dom.getAncestorBy(Y,x);},getPreviousSiblingBy:function(G,Y){while(G){G=G.previousSibling;if(E.Dom._testElement(G,Y)){return G;}}return null;},getPreviousSibling:function(G){G=E.Dom.get(G);if(!G){return null;}return E.Dom.getPreviousSiblingBy(G);},getNextSiblingBy:function(G,Y){while(G){G=G.nextSibling;if(E.Dom._testElement(G,Y)){return G;}}return null;},getNextSibling:function(G){G=E.Dom.get(G);if(!G){return null;}return E.Dom.getNextSiblingBy(G);},getFirstChildBy:function(G,x){var Y=(E.Dom._testElement(G.firstChild,x))?G.firstChild:null;return Y||E.Dom.getNextSiblingBy(G.firstChild,x);},getFirstChild:function(G,Y){G=E.Dom.get(G);if(!G){return null;}return E.Dom.getFirstChildBy(G);},getLastChildBy:function(G,x){if(!G){return null;}var Y=(E.Dom._testElement(G.lastChild,x))?G.lastChild:null;return Y||E.Dom.getPreviousSiblingBy(G.lastChild,x);},getLastChild:function(G){G=E.Dom.get(G);return E.Dom.getLastChildBy(G);},getChildrenBy:function(Y,y){var x=E.Dom.getFirstChildBy(Y,y),G=x?[x]:[];E.Dom.getNextSiblingBy(x,function(z){if(!y||y(z)){G[G.length]=z;}return false;});return G;},getChildren:function(G){G=E.Dom.get(G);if(!G){}return E.Dom.getChildrenBy(G);},getDocumentScrollLeft:function(G){G=G||K;return Math.max(G[v].scrollLeft,G.body.scrollLeft);},getDocumentScrollTop:function(G){G=G||K;return Math.max(G[v].scrollTop,G.body.scrollTop);},insertBefore:function(Y,G){Y=E.Dom.get(Y);G=E.Dom.get(G);if(!Y||!G||!G[Z]){return null;}return G[Z].insertBefore(Y,G);},insertAfter:function(Y,G){Y=E.Dom.get(Y);G=E.Dom.get(G);if(!Y||!G||!G[Z]){return null;}if(G.nextSibling){return G[Z].insertBefore(Y,G.nextSibling);}else{return G[Z].appendChild(Y);}},getClientRegion:function(){var x=E.Dom.getDocumentScrollTop(),Y=E.Dom.getDocumentScrollLeft(),y=E.Dom.getViewportWidth()+Y,G=E.Dom.getViewportHeight()+x;return new E.Region(x,y,G,Y);},setAttribute:function(Y,G,x){E.Dom.batch(Y,E.Dom._setAttribute,{attr:G,val:x});},_setAttribute:function(x,Y){var G=E.Dom._toCamel(Y.attr),y=Y.val;if(x&&x.setAttribute){if(E.Dom.DOT_ATTRIBUTES[G]){x[G]=y;}else{G=E.Dom.CUSTOM_ATTRIBUTES[G]||G;x.setAttribute(G,y);}}else{}},getAttribute:function(Y,G){return E.Dom.batch(Y,E.Dom._getAttribute,G);},_getAttribute:function(Y,G){var x;G=E.Dom.CUSTOM_ATTRIBUTES[G]||G;if(Y&&Y.getAttribute){x=Y.getAttribute(G,2);}else{}return x;},_toCamel:function(Y){var x=d;function G(y,z){return z.toUpperCase();}return x[Y]||(x[Y]=Y.indexOf("-")===-1?Y:Y.replace(/-([a-z])/gi,G));},_getClassRegex:function(Y){var G;if(Y!==undefined){if(Y.exec){G=Y;}else{G=h[Y];if(!G){Y=Y.replace(E.Dom._patterns.CLASS_RE_TOKENS,"\\$1");G=h[Y]=new RegExp(s+Y+k,U);}}}return G;},_patterns:{ROOT_TAG:/^body|html$/i,CLASS_RE_TOKENS:/([\.\(\)\^\$\*\+\?\|\[\]\{\}\\])/g},_testElement:function(G,Y){return G&&G[l]==1&&(!Y||Y(G));},_calcBorders:function(x,y){var Y=parseInt(E.Dom[w](x,R),10)||0,G=parseInt(E.Dom[w](x,q),10)||0;if(H){if(N.test(x[C])){Y=0;G=0;}}y[0]+=G;y[1]+=Y;return y;}};var S=E.Dom[w];if(m.opera){E.Dom[w]=function(Y,G){var x=S(Y,G);if(X.test(G)){x=E.Dom.Color.toRGB(x);}return x;};}if(m.webkit){E.Dom[w]=function(Y,G){var x=S(Y,G);if(x==="rgba(0, 0, 0, 0)"){x="transparent";}return x;};}if(m.ie&&m.ie>=8&&K.documentElement.hasAttribute){E.Dom.DOT_ATTRIBUTES.type=true;}})();YAHOO.util.Region=function(C,D,A,B){this.top=C;this.y=C;this[1]=C;this.right=D;this.bottom=A;this.left=B;this.x=B;this[0]=B;
this.width=this.right-this.left;this.height=this.bottom-this.top;};YAHOO.util.Region.prototype.contains=function(A){return(A.left>=this.left&&A.right<=this.right&&A.top>=this.top&&A.bottom<=this.bottom);};YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left));};YAHOO.util.Region.prototype.intersect=function(E){var C=Math.max(this.top,E.top),D=Math.min(this.right,E.right),A=Math.min(this.bottom,E.bottom),B=Math.max(this.left,E.left);if(A>=C&&D>=B){return new YAHOO.util.Region(C,D,A,B);}else{return null;}};YAHOO.util.Region.prototype.union=function(E){var C=Math.min(this.top,E.top),D=Math.max(this.right,E.right),A=Math.max(this.bottom,E.bottom),B=Math.min(this.left,E.left);return new YAHOO.util.Region(C,D,A,B);};YAHOO.util.Region.prototype.toString=function(){return("Region {"+"top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+", height: "+this.height+", width: "+this.width+"}");};YAHOO.util.Region.getRegion=function(D){var F=YAHOO.util.Dom.getXY(D),C=F[1],E=F[0]+D.offsetWidth,A=F[1]+D.offsetHeight,B=F[0];return new YAHOO.util.Region(C,E,A,B);};YAHOO.util.Point=function(A,B){if(YAHOO.lang.isArray(A)){B=A[1];A=A[0];}YAHOO.util.Point.superclass.constructor.call(this,B,A,B,A);};YAHOO.extend(YAHOO.util.Point,YAHOO.util.Region);(function(){var B=YAHOO.util,A="clientTop",F="clientLeft",J="parentNode",K="right",W="hasLayout",I="px",U="opacity",L="auto",D="borderLeftWidth",G="borderTopWidth",P="borderRightWidth",V="borderBottomWidth",S="visible",Q="transparent",N="height",E="width",H="style",T="currentStyle",R=/^width|height$/,O=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i,M={get:function(X,Z){var Y="",a=X[T][Z];if(Z===U){Y=B.Dom.getStyle(X,U);}else{if(!a||(a.indexOf&&a.indexOf(I)>-1)){Y=a;}else{if(B.Dom.IE_COMPUTED[Z]){Y=B.Dom.IE_COMPUTED[Z](X,Z);}else{if(O.test(a)){Y=B.Dom.IE.ComputedStyle.getPixel(X,Z);}else{Y=a;}}}}return Y;},getOffset:function(Z,e){var b=Z[T][e],X=e.charAt(0).toUpperCase()+e.substr(1),c="offset"+X,Y="pixel"+X,a="",d;if(b==L){d=Z[c];if(d===undefined){a=0;}a=d;if(R.test(e)){Z[H][e]=d;if(Z[c]>d){a=d-(Z[c]-d);}Z[H][e]=L;}}else{if(!Z[H][Y]&&!Z[H][e]){Z[H][e]=b;}a=Z[H][Y];}return a+I;},getBorderWidth:function(X,Z){var Y=null;if(!X[T][W]){X[H].zoom=1;}switch(Z){case G:Y=X[A];break;case V:Y=X.offsetHeight-X.clientHeight-X[A];break;case D:Y=X[F];break;case P:Y=X.offsetWidth-X.clientWidth-X[F];break;}return Y+I;},getPixel:function(Y,X){var a=null,b=Y[T][K],Z=Y[T][X];Y[H][K]=Z;a=Y[H].pixelRight;Y[H][K]=b;return a+I;},getMargin:function(Y,X){var Z;if(Y[T][X]==L){Z=0+I;}else{Z=B.Dom.IE.ComputedStyle.getPixel(Y,X);}return Z;},getVisibility:function(Y,X){var Z;while((Z=Y[T])&&Z[X]=="inherit"){Y=Y[J];}return(Z)?Z[X]:S;},getColor:function(Y,X){return B.Dom.Color.toRGB(Y[T][X])||Q;},getBorderColor:function(Y,X){var Z=Y[T],a=Z[X]||Z.color;return B.Dom.Color.toRGB(B.Dom.Color.toHex(a));}},C={};C.top=C.right=C.bottom=C.left=C[E]=C[N]=M.getOffset;C.color=M.getColor;C[G]=C[P]=C[V]=C[D]=M.getBorderWidth;C.marginTop=C.marginRight=C.marginBottom=C.marginLeft=M.getMargin;C.visibility=M.getVisibility;C.borderColor=C.borderTopColor=C.borderRightColor=C.borderBottomColor=C.borderLeftColor=M.getBorderColor;B.Dom.IE_COMPUTED=C;B.Dom.IE_ComputedStyle=M;})();(function(){var C="toString",A=parseInt,B=RegExp,D=YAHOO.util;D.Dom.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(E){if(!D.Dom.Color.re_RGB.test(E)){E=D.Dom.Color.toHex(E);}if(D.Dom.Color.re_hex.exec(E)){E="rgb("+[A(B.$1,16),A(B.$2,16),A(B.$3,16)].join(", ")+")";}return E;},toHex:function(H){H=D.Dom.Color.KEYWORDS[H]||H;if(D.Dom.Color.re_RGB.exec(H)){var G=(B.$1.length===1)?"0"+B.$1:Number(B.$1),F=(B.$2.length===1)?"0"+B.$2:Number(B.$2),E=(B.$3.length===1)?"0"+B.$3:Number(B.$3);H=[G[C](16),F[C](16),E[C](16)].join("");}if(H.length<6){H=H.replace(D.Dom.Color.re_hex3,"$1$1");}if(H!=="transparent"&&H.indexOf("#")<0){H="#"+H;}return H.toLowerCase();}};}());YAHOO.register("dom",YAHOO.util.Dom,{version:"2.8.1",build:"19"});YAHOO.util.CustomEvent=function(D,C,B,A,E){this.type=D;this.scope=C||window;this.silent=B;this.fireOnce=E;this.fired=false;this.firedWith=null;this.signature=A||YAHOO.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var F="_YUICEOnSubscribe";if(D!==F){this.subscribeEvent=new YAHOO.util.CustomEvent(F,this,true);}this.lastError=null;};YAHOO.util.CustomEvent.LIST=0;YAHOO.util.CustomEvent.FLAT=1;YAHOO.util.CustomEvent.prototype={subscribe:function(B,C,D){if(!B){throw new Error("Invalid callback for subscriber to '"+this.type+"'");}if(this.subscribeEvent){this.subscribeEvent.fire(B,C,D);}var A=new YAHOO.util.Subscriber(B,C,D);if(this.fireOnce&&this.fired){this.notify(A,this.firedWith);}else{this.subscribers.push(A);}},unsubscribe:function(D,F){if(!D){return this.unsubscribeAll();}var E=false;for(var B=0,A=this.subscribers.length;B<A;++B){var C=this.subscribers[B];if(C&&C.contains(D,F)){this._delete(B);E=true;}}return E;},fire:function(){this.lastError=null;var H=[],A=this.subscribers.length;var D=[].slice.call(arguments,0),C=true,F,B=false;if(this.fireOnce){if(this.fired){return true;}else{this.firedWith=D;}}this.fired=true;if(!A&&this.silent){return true;}if(!this.silent){}var E=this.subscribers.slice();for(F=0;F<A;++F){var G=E[F];if(!G){B=true;}else{C=this.notify(G,D);if(false===C){if(!this.silent){}break;}}}return(C!==false);},notify:function(F,C){var B,H=null,E=F.getScope(this.scope),A=YAHOO.util.Event.throwErrors;if(!this.silent){}if(this.signature==YAHOO.util.CustomEvent.FLAT){if(C.length>0){H=C[0];}try{B=F.fn.call(E,H,F.obj);}catch(G){this.lastError=G;if(A){throw G;}}}else{try{B=F.fn.call(E,this.type,C,F.obj);}catch(D){this.lastError=D;if(A){throw D;}}}return B;},unsubscribeAll:function(){var A=this.subscribers.length,B;for(B=A-1;B>-1;B--){this._delete(B);}this.subscribers=[];return A;},_delete:function(A){var B=this.subscribers[A];if(B){delete B.fn;delete B.obj;}this.subscribers.splice(A,1);},toString:function(){return"CustomEvent: "+"'"+this.type+"', "+"context: "+this.scope;}};YAHOO.util.Subscriber=function(A,B,C){this.fn=A;this.obj=YAHOO.lang.isUndefined(B)?null:B;this.overrideContext=C;};YAHOO.util.Subscriber.prototype.getScope=function(A){if(this.overrideContext){if(this.overrideContext===true){return this.obj;}else{return this.overrideContext;}}return A;};YAHOO.util.Subscriber.prototype.contains=function(A,B){if(B){return(this.fn==A&&this.obj==B);}else{return(this.fn==A);}};YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", overrideContext: "+(this.overrideContext||"no")+" }";};if(!YAHOO.util.Event){YAHOO.util.Event=function(){var G=false,H=[],J=[],A=0,E=[],B=0,C={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9},D=YAHOO.env.ua.ie,F="focusin",I="focusout";return{POLL_RETRYS:500,POLL_INTERVAL:40,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:D,_interval:null,_dri:null,_specialTypes:{focusin:(D?"focusin":"focus"),focusout:(D?"focusout":"blur")},DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){this._interval=YAHOO.lang.later(this.POLL_INTERVAL,this,this._tryPreloadAttach,null,true);}},onAvailable:function(Q,M,O,P,N){var K=(YAHOO.lang.isString(Q))?[Q]:Q;for(var L=0;L<K.length;L=L+1){E.push({id:K[L],fn:M,obj:O,overrideContext:P,checkReady:N});}A=this.POLL_RETRYS;this.startInterval();},onContentReady:function(N,K,L,M){this.onAvailable(N,K,L,M,true);},onDOMReady:function(){this.DOMReadyEvent.subscribe.apply(this.DOMReadyEvent,arguments);},_addListener:function(M,K,V,P,T,Y){if(!V||!V.call){return false;}if(this._isValidCollection(M)){var W=true;for(var Q=0,S=M.length;Q<S;++Q){W=this.on(M[Q],K,V,P,T)&&W;}return W;}else{if(YAHOO.lang.isString(M)){var O=this.getEl(M);if(O){M=O;}else{this.onAvailable(M,function(){YAHOO.util.Event._addListener(M,K,V,P,T,Y);});return true;}}}if(!M){return false;}if("unload"==K&&P!==this){J[J.length]=[M,K,V,P,T];return true;}var L=M;if(T){if(T===true){L=P;}else{L=T;}}var N=function(Z){return V.call(L,YAHOO.util.Event.getEvent(Z,M),P);};var X=[M,K,V,N,L,P,T,Y];var R=H.length;H[R]=X;try{this._simpleAdd(M,K,N,Y);}catch(U){this.lastError=U;this.removeListener(M,K,V);return false;}return true;},_getType:function(K){return this._specialTypes[K]||K;},addListener:function(M,P,L,N,O){var K=((P==F||P==I)&&!YAHOO.env.ua.ie)?true:false;return this._addListener(M,this._getType(P),L,N,O,K);},addFocusListener:function(L,K,M,N){return this.on(L,F,K,M,N);},removeFocusListener:function(L,K){return this.removeListener(L,F,K);},addBlurListener:function(L,K,M,N){return this.on(L,I,K,M,N);},removeBlurListener:function(L,K){return this.removeListener(L,I,K);},removeListener:function(L,K,R){var M,P,U;K=this._getType(K);if(typeof L=="string"){L=this.getEl(L);}else{if(this._isValidCollection(L)){var S=true;for(M=L.length-1;M>-1;M--){S=(this.removeListener(L[M],K,R)&&S);}return S;}}if(!R||!R.call){return this.purgeElement(L,false,K);}if("unload"==K){for(M=J.length-1;M>-1;M--){U=J[M];if(U&&U[0]==L&&U[1]==K&&U[2]==R){J.splice(M,1);return true;}}return false;}var N=null;var O=arguments[3];if("undefined"===typeof O){O=this._getCacheIndex(H,L,K,R);}if(O>=0){N=H[O];}if(!L||!N){return false;}var T=N[this.CAPTURE]===true?true:false;try{this._simpleRemove(L,K,N[this.WFN],T);}catch(Q){this.lastError=Q;return false;}delete H[O][this.WFN];delete H[O][this.FN];H.splice(O,1);return true;},getTarget:function(M,L){var K=M.target||M.srcElement;return this.resolveTextNode(K);},resolveTextNode:function(L){try{if(L&&3==L.nodeType){return L.parentNode;}}catch(K){}return L;},getPageX:function(L){var K=L.pageX;if(!K&&0!==K){K=L.clientX||0;if(this.isIE){K+=this._getScrollLeft();}}return K;},getPageY:function(K){var L=K.pageY;if(!L&&0!==L){L=K.clientY||0;if(this.isIE){L+=this._getScrollTop();}}return L;},getXY:function(K){return[this.getPageX(K),this.getPageY(K)];},getRelatedTarget:function(L){var K=L.relatedTarget;if(!K){if(L.type=="mouseout"){K=L.toElement;
}else{if(L.type=="mouseover"){K=L.fromElement;}}}return this.resolveTextNode(K);},getTime:function(M){if(!M.time){var L=new Date().getTime();try{M.time=L;}catch(K){this.lastError=K;return L;}}return M.time;},stopEvent:function(K){this.stopPropagation(K);this.preventDefault(K);},stopPropagation:function(K){if(K.stopPropagation){K.stopPropagation();}else{K.cancelBubble=true;}},preventDefault:function(K){if(K.preventDefault){K.preventDefault();}else{K.returnValue=false;}},getEvent:function(M,K){var L=M||window.event;if(!L){var N=this.getEvent.caller;while(N){L=N.arguments[0];if(L&&Event==L.constructor){break;}N=N.caller;}}return L;},getCharCode:function(L){var K=L.keyCode||L.charCode||0;if(YAHOO.env.ua.webkit&&(K in C)){K=C[K];}return K;},_getCacheIndex:function(M,P,Q,O){for(var N=0,L=M.length;N<L;N=N+1){var K=M[N];if(K&&K[this.FN]==O&&K[this.EL]==P&&K[this.TYPE]==Q){return N;}}return -1;},generateId:function(K){var L=K.id;if(!L){L="yuievtautoid-"+B;++B;K.id=L;}return L;},_isValidCollection:function(L){try{return(L&&typeof L!=="string"&&L.length&&!L.tagName&&!L.alert&&typeof L[0]!=="undefined");}catch(K){return false;}},elCache:{},getEl:function(K){return(typeof K==="string")?document.getElementById(K):K;},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",YAHOO,0,0,1),_load:function(L){if(!G){G=true;var K=YAHOO.util.Event;K._ready();K._tryPreloadAttach();}},_ready:function(L){var K=YAHOO.util.Event;if(!K.DOMReady){K.DOMReady=true;K.DOMReadyEvent.fire();K._simpleRemove(document,"DOMContentLoaded",K._ready);}},_tryPreloadAttach:function(){if(E.length===0){A=0;if(this._interval){this._interval.cancel();this._interval=null;}return;}if(this.locked){return;}if(this.isIE){if(!this.DOMReady){this.startInterval();return;}}this.locked=true;var Q=!G;if(!Q){Q=(A>0&&E.length>0);}var P=[];var R=function(T,U){var S=T;if(U.overrideContext){if(U.overrideContext===true){S=U.obj;}else{S=U.overrideContext;}}U.fn.call(S,U.obj);};var L,K,O,N,M=[];for(L=0,K=E.length;L<K;L=L+1){O=E[L];if(O){N=this.getEl(O.id);if(N){if(O.checkReady){if(G||N.nextSibling||!Q){M.push(O);E[L]=null;}}else{R(N,O);E[L]=null;}}else{P.push(O);}}}for(L=0,K=M.length;L<K;L=L+1){O=M[L];R(this.getEl(O.id),O);}A--;if(Q){for(L=E.length-1;L>-1;L--){O=E[L];if(!O||!O.id){E.splice(L,1);}}this.startInterval();}else{if(this._interval){this._interval.cancel();this._interval=null;}}this.locked=false;},purgeElement:function(O,P,R){var M=(YAHOO.lang.isString(O))?this.getEl(O):O;var Q=this.getListeners(M,R),N,K;if(Q){for(N=Q.length-1;N>-1;N--){var L=Q[N];this.removeListener(M,L.type,L.fn);}}if(P&&M&&M.childNodes){for(N=0,K=M.childNodes.length;N<K;++N){this.purgeElement(M.childNodes[N],P,R);}}},getListeners:function(M,K){var P=[],L;if(!K){L=[H,J];}else{if(K==="unload"){L=[J];}else{K=this._getType(K);L=[H];}}var R=(YAHOO.lang.isString(M))?this.getEl(M):M;for(var O=0;O<L.length;O=O+1){var T=L[O];if(T){for(var Q=0,S=T.length;Q<S;++Q){var N=T[Q];if(N&&N[this.EL]===R&&(!K||K===N[this.TYPE])){P.push({type:N[this.TYPE],fn:N[this.FN],obj:N[this.OBJ],adjust:N[this.OVERRIDE],scope:N[this.ADJ_SCOPE],index:Q});}}}}return(P.length)?P:null;},_unload:function(R){var L=YAHOO.util.Event,O,N,M,Q,P,S=J.slice(),K;for(O=0,Q=J.length;O<Q;++O){M=S[O];if(M){K=window;if(M[L.ADJ_SCOPE]){if(M[L.ADJ_SCOPE]===true){K=M[L.UNLOAD_OBJ];}else{K=M[L.ADJ_SCOPE];}}M[L.FN].call(K,L.getEvent(R,M[L.EL]),M[L.UNLOAD_OBJ]);S[O]=null;}}M=null;K=null;J=null;if(H){for(N=H.length-1;N>-1;N--){M=H[N];if(M){L.removeListener(M[L.EL],M[L.TYPE],M[L.FN],N);}}M=null;}L._simpleRemove(window,"unload",L._unload);},_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var K=document.documentElement,L=document.body;if(K&&(K.scrollTop||K.scrollLeft)){return[K.scrollTop,K.scrollLeft];}else{if(L){return[L.scrollTop,L.scrollLeft];}else{return[0,0];}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(M,N,L,K){M.addEventListener(N,L,(K));};}else{if(window.attachEvent){return function(M,N,L,K){M.attachEvent("on"+N,L);};}else{return function(){};}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(M,N,L,K){M.removeEventListener(N,L,(K));};}else{if(window.detachEvent){return function(L,M,K){L.detachEvent("on"+M,K);};}else{return function(){};}}}()};}();(function(){var EU=YAHOO.util.Event;EU.on=EU.addListener;EU.onFocus=EU.addFocusListener;EU.onBlur=EU.addBlurListener;
/* DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller/Diego Perini */
if(EU.isIE){if(self!==self.top){document.onreadystatechange=function(){if(document.readyState=="complete"){document.onreadystatechange=null;EU._ready();}};}else{YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);var n=document.createElement("p");EU._dri=setInterval(function(){try{n.doScroll("left");clearInterval(EU._dri);EU._dri=null;EU._ready();n=null;}catch(ex){}},EU.POLL_INTERVAL);}}else{if(EU.webkit&&EU.webkit<525){EU._dri=setInterval(function(){var rs=document.readyState;if("loaded"==rs||"complete"==rs){clearInterval(EU._dri);EU._dri=null;EU._ready();}},EU.POLL_INTERVAL);}else{EU._simpleAdd(document,"DOMContentLoaded",EU._ready);}}EU._simpleAdd(window,"load",EU._load);EU._simpleAdd(window,"unload",EU._unload);EU._tryPreloadAttach();})();}YAHOO.util.EventProvider=function(){};YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(A,C,F,E){this.__yui_events=this.__yui_events||{};var D=this.__yui_events[A];if(D){D.subscribe(C,F,E);}else{this.__yui_subscribers=this.__yui_subscribers||{};var B=this.__yui_subscribers;if(!B[A]){B[A]=[];}B[A].push({fn:C,obj:F,overrideContext:E});}},unsubscribe:function(C,E,G){this.__yui_events=this.__yui_events||{};var A=this.__yui_events;if(C){var F=A[C];if(F){return F.unsubscribe(E,G);}}else{var B=true;for(var D in A){if(YAHOO.lang.hasOwnProperty(A,D)){B=B&&A[D].unsubscribe(E,G);}}return B;}return false;},unsubscribeAll:function(A){return this.unsubscribe(A);
},createEvent:function(B,G){this.__yui_events=this.__yui_events||{};var E=G||{},D=this.__yui_events,F;if(D[B]){}else{F=new YAHOO.util.CustomEvent(B,E.scope||this,E.silent,YAHOO.util.CustomEvent.FLAT,E.fireOnce);D[B]=F;if(E.onSubscribeCallback){F.subscribeEvent.subscribe(E.onSubscribeCallback);}this.__yui_subscribers=this.__yui_subscribers||{};var A=this.__yui_subscribers[B];if(A){for(var C=0;C<A.length;++C){F.subscribe(A[C].fn,A[C].obj,A[C].overrideContext);}}}return D[B];},fireEvent:function(B){this.__yui_events=this.__yui_events||{};var D=this.__yui_events[B];if(!D){return null;}var A=[];for(var C=1;C<arguments.length;++C){A.push(arguments[C]);}return D.fire.apply(D,A);},hasEvent:function(A){if(this.__yui_events){if(this.__yui_events[A]){return true;}}return false;}};(function(){var A=YAHOO.util.Event,C=YAHOO.lang;YAHOO.util.KeyListener=function(D,I,E,F){if(!D){}else{if(!I){}else{if(!E){}}}if(!F){F=YAHOO.util.KeyListener.KEYDOWN;}var G=new YAHOO.util.CustomEvent("keyPressed");this.enabledEvent=new YAHOO.util.CustomEvent("enabled");this.disabledEvent=new YAHOO.util.CustomEvent("disabled");if(C.isString(D)){D=document.getElementById(D);}if(C.isFunction(E)){G.subscribe(E);}else{G.subscribe(E.fn,E.scope,E.correctScope);}function H(O,N){if(!I.shift){I.shift=false;}if(!I.alt){I.alt=false;}if(!I.ctrl){I.ctrl=false;}if(O.shiftKey==I.shift&&O.altKey==I.alt&&O.ctrlKey==I.ctrl){var J,M=I.keys,L;if(YAHOO.lang.isArray(M)){for(var K=0;K<M.length;K++){J=M[K];L=A.getCharCode(O);if(J==L){G.fire(L,O);break;}}}else{L=A.getCharCode(O);if(M==L){G.fire(L,O);}}}}this.enable=function(){if(!this.enabled){A.on(D,F,H);this.enabledEvent.fire(I);}this.enabled=true;};this.disable=function(){if(this.enabled){A.removeListener(D,F,H);this.disabledEvent.fire(I);}this.enabled=false;};this.toString=function(){return"KeyListener ["+I.keys+"] "+D.tagName+(D.id?"["+D.id+"]":"");};};var B=YAHOO.util.KeyListener;B.KEYDOWN="keydown";B.KEYUP="keyup";B.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};})();YAHOO.register("event",YAHOO.util.Event,{version:"2.8.1",build:"19"});YAHOO.register("yahoo-dom-event", YAHOO, {version: "2.8.1", build: "19"});/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
(function(){var B=YAHOO.util;var A=function(D,C,E,F){if(!D){}this.init(D,C,E,F);};A.NAME="Anim";A.prototype={toString:function(){var C=this.getEl()||{};var D=C.id||C.tagName;return(this.constructor.NAME+": "+D);},patterns:{noNegatives:/width|height|opacity|padding/i,offsetAttribute:/^((width|height)|(top|left))$/,defaultUnit:/width|height|top$|bottom$|left$|right$/i,offsetUnit:/\d+(em|%|en|ex|pt|in|cm|mm|pc)$/i},doMethod:function(C,E,D){return this.method(this.currentFrame,E,D-E,this.totalFrames);},setAttribute:function(C,F,E){var D=this.getEl();if(this.patterns.noNegatives.test(C)){F=(F>0)?F:0;}if(C in D&&!("style" in D&&C in D.style)){D[C]=F;}else{B.Dom.setStyle(D,C,F+E);}},getAttribute:function(C){var E=this.getEl();var G=B.Dom.getStyle(E,C);if(G!=="auto"&&!this.patterns.offsetUnit.test(G)){return parseFloat(G);}var D=this.patterns.offsetAttribute.exec(C)||[];var H=!!(D[3]);var F=!!(D[2]);if("style" in E){if(F||(B.Dom.getStyle(E,"position")=="absolute"&&H)){G=E["offset"+D[0].charAt(0).toUpperCase()+D[0].substr(1)];}else{G=0;}}else{if(C in E){G=E[C];}}return G;},getDefaultUnit:function(C){if(this.patterns.defaultUnit.test(C)){return"px";}return"";},setRuntimeAttribute:function(D){var I;var E;var F=this.attributes;this.runtimeAttributes[D]={};var H=function(J){return(typeof J!=="undefined");};if(!H(F[D]["to"])&&!H(F[D]["by"])){return false;}I=(H(F[D]["from"]))?F[D]["from"]:this.getAttribute(D);if(H(F[D]["to"])){E=F[D]["to"];}else{if(H(F[D]["by"])){if(I.constructor==Array){E=[];for(var G=0,C=I.length;G<C;++G){E[G]=I[G]+F[D]["by"][G]*1;}}else{E=I+F[D]["by"]*1;}}}this.runtimeAttributes[D].start=I;this.runtimeAttributes[D].end=E;this.runtimeAttributes[D].unit=(H(F[D].unit))?F[D]["unit"]:this.getDefaultUnit(D);return true;},init:function(E,J,I,C){var D=false;var F=null;var H=0;E=B.Dom.get(E);this.attributes=J||{};this.duration=!YAHOO.lang.isUndefined(I)?I:1;this.method=C||B.Easing.easeNone;this.useSeconds=true;this.currentFrame=0;this.totalFrames=B.AnimMgr.fps;this.setEl=function(M){E=B.Dom.get(M);};this.getEl=function(){return E;};this.isAnimated=function(){return D;};this.getStartTime=function(){return F;};this.runtimeAttributes={};this.animate=function(){if(this.isAnimated()){return false;}this.currentFrame=0;this.totalFrames=(this.useSeconds)?Math.ceil(B.AnimMgr.fps*this.duration):this.duration;if(this.duration===0&&this.useSeconds){this.totalFrames=1;}B.AnimMgr.registerElement(this);return true;};this.stop=function(M){if(!this.isAnimated()){return false;}if(M){this.currentFrame=this.totalFrames;this._onTween.fire();}B.AnimMgr.stop(this);};var L=function(){this.onStart.fire();this.runtimeAttributes={};for(var M in this.attributes){this.setRuntimeAttribute(M);}D=true;H=0;F=new Date();};var K=function(){var O={duration:new Date()-this.getStartTime(),currentFrame:this.currentFrame};O.toString=function(){return("duration: "+O.duration+", currentFrame: "+O.currentFrame);};this.onTween.fire(O);var N=this.runtimeAttributes;for(var M in N){this.setAttribute(M,this.doMethod(M,N[M].start,N[M].end),N[M].unit);}H+=1;};var G=function(){var M=(new Date()-F)/1000;var N={duration:M,frames:H,fps:H/M};N.toString=function(){return("duration: "+N.duration+", frames: "+N.frames+", fps: "+N.fps);};D=false;H=0;this.onComplete.fire(N);};this._onStart=new B.CustomEvent("_start",this,true);this.onStart=new B.CustomEvent("start",this);this.onTween=new B.CustomEvent("tween",this);this._onTween=new B.CustomEvent("_tween",this,true);this.onComplete=new B.CustomEvent("complete",this);this._onComplete=new B.CustomEvent("_complete",this,true);this._onStart.subscribe(L);this._onTween.subscribe(K);this._onComplete.subscribe(G);}};B.Anim=A;})();YAHOO.util.AnimMgr=new function(){var C=null;var B=[];var A=0;this.fps=1000;this.delay=1;this.registerElement=function(F){B[B.length]=F;A+=1;F._onStart.fire();this.start();};this.unRegister=function(G,F){F=F||E(G);if(!G.isAnimated()||F===-1){return false;}G._onComplete.fire();B.splice(F,1);A-=1;if(A<=0){this.stop();}return true;};this.start=function(){if(C===null){C=setInterval(this.run,this.delay);}};this.stop=function(H){if(!H){clearInterval(C);for(var G=0,F=B.length;G<F;++G){this.unRegister(B[0],0);}B=[];C=null;A=0;}else{this.unRegister(H);}};this.run=function(){for(var H=0,F=B.length;H<F;++H){var G=B[H];if(!G||!G.isAnimated()){continue;}if(G.currentFrame<G.totalFrames||G.totalFrames===null){G.currentFrame+=1;if(G.useSeconds){D(G);}G._onTween.fire();}else{YAHOO.util.AnimMgr.stop(G,H);}}};var E=function(H){for(var G=0,F=B.length;G<F;++G){if(B[G]===H){return G;}}return -1;};var D=function(G){var J=G.totalFrames;var I=G.currentFrame;var H=(G.currentFrame*G.duration*1000/G.totalFrames);var F=(new Date()-G.getStartTime());var K=0;if(F<G.duration*1000){K=Math.round((F/H-1)*G.currentFrame);}else{K=J-(I+1);}if(K>0&&isFinite(K)){if(G.currentFrame+K>=J){K=J-(I+1);}G.currentFrame+=K;}};this._queue=B;this._getIndex=E;};YAHOO.util.Bezier=new function(){this.getPosition=function(E,D){var F=E.length;var C=[];for(var B=0;B<F;++B){C[B]=[E[B][0],E[B][1]];}for(var A=1;A<F;++A){for(B=0;B<F-A;++B){C[B][0]=(1-D)*C[B][0]+D*C[parseInt(B+1,10)][0];C[B][1]=(1-D)*C[B][1]+D*C[parseInt(B+1,10)][1];}}return[C[0][0],C[0][1]];};};(function(){var A=function(F,E,G,H){A.superclass.constructor.call(this,F,E,G,H);};A.NAME="ColorAnim";A.DEFAULT_BGCOLOR="#fff";var C=YAHOO.util;YAHOO.extend(A,C.Anim);var D=A.superclass;var B=A.prototype;B.patterns.color=/color$/i;B.patterns.rgb=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i;B.patterns.hex=/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;B.patterns.hex3=/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i;B.patterns.transparent=/^transparent|rgba\(0, 0, 0, 0\)$/;B.parseColor=function(E){if(E.length==3){return E;}var F=this.patterns.hex.exec(E);if(F&&F.length==4){return[parseInt(F[1],16),parseInt(F[2],16),parseInt(F[3],16)];}F=this.patterns.rgb.exec(E);if(F&&F.length==4){return[parseInt(F[1],10),parseInt(F[2],10),parseInt(F[3],10)];}F=this.patterns.hex3.exec(E);if(F&&F.length==4){return[parseInt(F[1]+F[1],16),parseInt(F[2]+F[2],16),parseInt(F[3]+F[3],16)];
}return null;};B.getAttribute=function(E){var G=this.getEl();if(this.patterns.color.test(E)){var I=YAHOO.util.Dom.getStyle(G,E);var H=this;if(this.patterns.transparent.test(I)){var F=YAHOO.util.Dom.getAncestorBy(G,function(J){return !H.patterns.transparent.test(I);});if(F){I=C.Dom.getStyle(F,E);}else{I=A.DEFAULT_BGCOLOR;}}}else{I=D.getAttribute.call(this,E);}return I;};B.doMethod=function(F,J,G){var I;if(this.patterns.color.test(F)){I=[];for(var H=0,E=J.length;H<E;++H){I[H]=D.doMethod.call(this,F,J[H],G[H]);}I="rgb("+Math.floor(I[0])+","+Math.floor(I[1])+","+Math.floor(I[2])+")";}else{I=D.doMethod.call(this,F,J,G);}return I;};B.setRuntimeAttribute=function(F){D.setRuntimeAttribute.call(this,F);if(this.patterns.color.test(F)){var H=this.attributes;var J=this.parseColor(this.runtimeAttributes[F].start);var G=this.parseColor(this.runtimeAttributes[F].end);if(typeof H[F]["to"]==="undefined"&&typeof H[F]["by"]!=="undefined"){G=this.parseColor(H[F].by);for(var I=0,E=J.length;I<E;++I){G[I]=J[I]+G[I];}}this.runtimeAttributes[F].start=J;this.runtimeAttributes[F].end=G;}};C.ColorAnim=A;})();
/*
TERMS OF USE - EASING EQUATIONS
Open source under the BSD License.
Copyright 2001 Robert Penner All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
YAHOO.util.Easing={easeNone:function(B,A,D,C){return D*B/C+A;},easeIn:function(B,A,D,C){return D*(B/=C)*B+A;},easeOut:function(B,A,D,C){return -D*(B/=C)*(B-2)+A;},easeBoth:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B+A;}return -D/2*((--B)*(B-2)-1)+A;},easeInStrong:function(B,A,D,C){return D*(B/=C)*B*B*B+A;},easeOutStrong:function(B,A,D,C){return -D*((B=B/C-1)*B*B*B-1)+A;},easeBothStrong:function(B,A,D,C){if((B/=C/2)<1){return D/2*B*B*B*B+A;}return -D/2*((B-=2)*B*B*B-2)+A;},elasticIn:function(C,A,G,F,B,E){if(C==0){return A;}if((C/=F)==1){return A+G;}if(!E){E=F*0.3;}if(!B||B<Math.abs(G)){B=G;var D=E/4;}else{var D=E/(2*Math.PI)*Math.asin(G/B);}return -(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A;},elasticOut:function(C,A,G,F,B,E){if(C==0){return A;}if((C/=F)==1){return A+G;}if(!E){E=F*0.3;}if(!B||B<Math.abs(G)){B=G;var D=E/4;}else{var D=E/(2*Math.PI)*Math.asin(G/B);}return B*Math.pow(2,-10*C)*Math.sin((C*F-D)*(2*Math.PI)/E)+G+A;},elasticBoth:function(C,A,G,F,B,E){if(C==0){return A;}if((C/=F/2)==2){return A+G;}if(!E){E=F*(0.3*1.5);}if(!B||B<Math.abs(G)){B=G;var D=E/4;}else{var D=E/(2*Math.PI)*Math.asin(G/B);}if(C<1){return -0.5*(B*Math.pow(2,10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E))+A;}return B*Math.pow(2,-10*(C-=1))*Math.sin((C*F-D)*(2*Math.PI)/E)*0.5+G+A;},backIn:function(B,A,E,D,C){if(typeof C=="undefined"){C=1.70158;}return E*(B/=D)*B*((C+1)*B-C)+A;},backOut:function(B,A,E,D,C){if(typeof C=="undefined"){C=1.70158;}return E*((B=B/D-1)*B*((C+1)*B+C)+1)+A;},backBoth:function(B,A,E,D,C){if(typeof C=="undefined"){C=1.70158;}if((B/=D/2)<1){return E/2*(B*B*(((C*=(1.525))+1)*B-C))+A;}return E/2*((B-=2)*B*(((C*=(1.525))+1)*B+C)+2)+A;},bounceIn:function(B,A,D,C){return D-YAHOO.util.Easing.bounceOut(C-B,0,D,C)+A;},bounceOut:function(B,A,D,C){if((B/=C)<(1/2.75)){return D*(7.5625*B*B)+A;}else{if(B<(2/2.75)){return D*(7.5625*(B-=(1.5/2.75))*B+0.75)+A;}else{if(B<(2.5/2.75)){return D*(7.5625*(B-=(2.25/2.75))*B+0.9375)+A;}}}return D*(7.5625*(B-=(2.625/2.75))*B+0.984375)+A;},bounceBoth:function(B,A,D,C){if(B<C/2){return YAHOO.util.Easing.bounceIn(B*2,0,D,C)*0.5+A;}return YAHOO.util.Easing.bounceOut(B*2-C,0,D,C)*0.5+D*0.5+A;}};(function(){var A=function(H,G,I,J){if(H){A.superclass.constructor.call(this,H,G,I,J);}};A.NAME="Motion";var E=YAHOO.util;YAHOO.extend(A,E.ColorAnim);var F=A.superclass;var C=A.prototype;C.patterns.points=/^points$/i;C.setAttribute=function(G,I,H){if(this.patterns.points.test(G)){H=H||"px";F.setAttribute.call(this,"left",I[0],H);F.setAttribute.call(this,"top",I[1],H);}else{F.setAttribute.call(this,G,I,H);}};C.getAttribute=function(G){if(this.patterns.points.test(G)){var H=[F.getAttribute.call(this,"left"),F.getAttribute.call(this,"top")];}else{H=F.getAttribute.call(this,G);}return H;};C.doMethod=function(G,K,H){var J=null;if(this.patterns.points.test(G)){var I=this.method(this.currentFrame,0,100,this.totalFrames)/100;J=E.Bezier.getPosition(this.runtimeAttributes[G],I);}else{J=F.doMethod.call(this,G,K,H);}return J;};C.setRuntimeAttribute=function(P){if(this.patterns.points.test(P)){var H=this.getEl();var J=this.attributes;var G;var L=J["points"]["control"]||[];var I;var M,O;if(L.length>0&&!(L[0] instanceof Array)){L=[L];}else{var K=[];for(M=0,O=L.length;M<O;++M){K[M]=L[M];}L=K;}if(E.Dom.getStyle(H,"position")=="static"){E.Dom.setStyle(H,"position","relative");}if(D(J["points"]["from"])){E.Dom.setXY(H,J["points"]["from"]);
}else{E.Dom.setXY(H,E.Dom.getXY(H));}G=this.getAttribute("points");if(D(J["points"]["to"])){I=B.call(this,J["points"]["to"],G);var N=E.Dom.getXY(this.getEl());for(M=0,O=L.length;M<O;++M){L[M]=B.call(this,L[M],G);}}else{if(D(J["points"]["by"])){I=[G[0]+J["points"]["by"][0],G[1]+J["points"]["by"][1]];for(M=0,O=L.length;M<O;++M){L[M]=[G[0]+L[M][0],G[1]+L[M][1]];}}}this.runtimeAttributes[P]=[G];if(L.length>0){this.runtimeAttributes[P]=this.runtimeAttributes[P].concat(L);}this.runtimeAttributes[P][this.runtimeAttributes[P].length]=I;}else{F.setRuntimeAttribute.call(this,P);}};var B=function(G,I){var H=E.Dom.getXY(this.getEl());G=[G[0]-H[0]+I[0],G[1]-H[1]+I[1]];return G;};var D=function(G){return(typeof G!=="undefined");};E.Motion=A;})();(function(){var D=function(F,E,G,H){if(F){D.superclass.constructor.call(this,F,E,G,H);}};D.NAME="Scroll";var B=YAHOO.util;YAHOO.extend(D,B.ColorAnim);var C=D.superclass;var A=D.prototype;A.doMethod=function(E,H,F){var G=null;if(E=="scroll"){G=[this.method(this.currentFrame,H[0],F[0]-H[0],this.totalFrames),this.method(this.currentFrame,H[1],F[1]-H[1],this.totalFrames)];}else{G=C.doMethod.call(this,E,H,F);}return G;};A.getAttribute=function(E){var G=null;var F=this.getEl();if(E=="scroll"){G=[F.scrollLeft,F.scrollTop];}else{G=C.getAttribute.call(this,E);}return G;};A.setAttribute=function(E,H,G){var F=this.getEl();if(E=="scroll"){F.scrollLeft=H[0];F.scrollTop=H[1];}else{C.setAttribute.call(this,E,H,G);}};B.Scroll=D;})();YAHOO.register("animation",YAHOO.util.Anim,{version:"2.8.1",build:"19"});/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
if(!YAHOO.util.DragDropMgr){YAHOO.util.DragDropMgr=function(){var A=YAHOO.util.Event,B=YAHOO.util.Dom;return{useShim:false,_shimActive:false,_shimState:false,_debugShim:false,_createShim:function(){var C=document.createElement("div");C.id="yui-ddm-shim";if(document.body.firstChild){document.body.insertBefore(C,document.body.firstChild);}else{document.body.appendChild(C);}C.style.display="none";C.style.backgroundColor="red";C.style.position="absolute";C.style.zIndex="99999";B.setStyle(C,"opacity","0");this._shim=C;A.on(C,"mouseup",this.handleMouseUp,this,true);A.on(C,"mousemove",this.handleMouseMove,this,true);A.on(window,"scroll",this._sizeShim,this,true);},_sizeShim:function(){if(this._shimActive){var C=this._shim;C.style.height=B.getDocumentHeight()+"px";C.style.width=B.getDocumentWidth()+"px";C.style.top="0";C.style.left="0";}},_activateShim:function(){if(this.useShim){if(!this._shim){this._createShim();}this._shimActive=true;var C=this._shim,D="0";if(this._debugShim){D=".5";}B.setStyle(C,"opacity",D);this._sizeShim();C.style.display="block";}},_deactivateShim:function(){this._shim.style.display="none";this._shimActive=false;},_shim:null,ids:{},handleIds:{},dragCurrent:null,dragOvers:{},deltaX:0,deltaY:0,preventDefault:true,stopPropagation:true,initialized:false,locked:false,interactionInfo:null,init:function(){this.initialized=true;},POINT:0,INTERSECT:1,STRICT_INTERSECT:2,mode:0,_execOnAll:function(E,D){for(var F in this.ids){for(var C in this.ids[F]){var G=this.ids[F][C];if(!this.isTypeOfDD(G)){continue;}G[E].apply(G,D);}}},_onLoad:function(){this.init();A.on(document,"mouseup",this.handleMouseUp,this,true);A.on(document,"mousemove",this.handleMouseMove,this,true);A.on(window,"unload",this._onUnload,this,true);A.on(window,"resize",this._onResize,this,true);},_onResize:function(C){this._execOnAll("resetConstraints",[]);},lock:function(){this.locked=true;},unlock:function(){this.locked=false;},isLocked:function(){return this.locked;},locationCache:{},useCache:true,clickPixelThresh:3,clickTimeThresh:1000,dragThreshMet:false,clickTimeout:null,startX:0,startY:0,fromTimeout:false,regDragDrop:function(D,C){if(!this.initialized){this.init();}if(!this.ids[C]){this.ids[C]={};}this.ids[C][D.id]=D;},removeDDFromGroup:function(E,C){if(!this.ids[C]){this.ids[C]={};}var D=this.ids[C];if(D&&D[E.id]){delete D[E.id];}},_remove:function(E){for(var D in E.groups){if(D){var C=this.ids[D];if(C&&C[E.id]){delete C[E.id];}}}delete this.handleIds[E.id];},regHandle:function(D,C){if(!this.handleIds[D]){this.handleIds[D]={};}this.handleIds[D][C]=C;},isDragDrop:function(C){return(this.getDDById(C))?true:false;},getRelated:function(H,D){var G=[];for(var F in H.groups){for(var E in this.ids[F]){var C=this.ids[F][E];if(!this.isTypeOfDD(C)){continue;}if(!D||C.isTarget){G[G.length]=C;}}}return G;},isLegalTarget:function(G,F){var D=this.getRelated(G,true);for(var E=0,C=D.length;E<C;++E){if(D[E].id==F.id){return true;}}return false;},isTypeOfDD:function(C){return(C&&C.__ygDragDrop);},isHandle:function(D,C){return(this.handleIds[D]&&this.handleIds[D][C]);},getDDById:function(D){for(var C in this.ids){if(this.ids[C][D]){return this.ids[C][D];}}return null;},handleMouseDown:function(E,D){this.currentTarget=YAHOO.util.Event.getTarget(E);this.dragCurrent=D;var C=D.getEl();this.startX=YAHOO.util.Event.getPageX(E);this.startY=YAHOO.util.Event.getPageY(E);this.deltaX=this.startX-C.offsetLeft;this.deltaY=this.startY-C.offsetTop;this.dragThreshMet=false;this.clickTimeout=setTimeout(function(){var F=YAHOO.util.DDM;F.startDrag(F.startX,F.startY);F.fromTimeout=true;},this.clickTimeThresh);},startDrag:function(C,E){if(this.dragCurrent&&this.dragCurrent.useShim){this._shimState=this.useShim;this.useShim=true;}this._activateShim();clearTimeout(this.clickTimeout);var D=this.dragCurrent;if(D&&D.events.b4StartDrag){D.b4StartDrag(C,E);D.fireEvent("b4StartDragEvent",{x:C,y:E});}if(D&&D.events.startDrag){D.startDrag(C,E);D.fireEvent("startDragEvent",{x:C,y:E});}this.dragThreshMet=true;},handleMouseUp:function(C){if(this.dragCurrent){clearTimeout(this.clickTimeout);if(this.dragThreshMet){if(this.fromTimeout){this.fromTimeout=false;this.handleMouseMove(C);}this.fromTimeout=false;this.fireEvents(C,true);}else{}this.stopDrag(C);this.stopEvent(C);}},stopEvent:function(C){if(this.stopPropagation){YAHOO.util.Event.stopPropagation(C);}if(this.preventDefault){YAHOO.util.Event.preventDefault(C);}},stopDrag:function(E,D){var C=this.dragCurrent;if(C&&!D){if(this.dragThreshMet){if(C.events.b4EndDrag){C.b4EndDrag(E);C.fireEvent("b4EndDragEvent",{e:E});}if(C.events.endDrag){C.endDrag(E);C.fireEvent("endDragEvent",{e:E});}}if(C.events.mouseUp){C.onMouseUp(E);C.fireEvent("mouseUpEvent",{e:E});}}if(this._shimActive){this._deactivateShim();if(this.dragCurrent&&this.dragCurrent.useShim){this.useShim=this._shimState;this._shimState=false;}}this.dragCurrent=null;this.dragOvers={};},handleMouseMove:function(F){var C=this.dragCurrent;if(C){if(YAHOO.util.Event.isIE&&!F.button){this.stopEvent(F);return this.handleMouseUp(F);}else{if(F.clientX<0||F.clientY<0){}}if(!this.dragThreshMet){var E=Math.abs(this.startX-YAHOO.util.Event.getPageX(F));var D=Math.abs(this.startY-YAHOO.util.Event.getPageY(F));if(E>this.clickPixelThresh||D>this.clickPixelThresh){this.startDrag(this.startX,this.startY);}}if(this.dragThreshMet){if(C&&C.events.b4Drag){C.b4Drag(F);C.fireEvent("b4DragEvent",{e:F});}if(C&&C.events.drag){C.onDrag(F);C.fireEvent("dragEvent",{e:F});}if(C){this.fireEvents(F,false);}}this.stopEvent(F);}},fireEvents:function(V,L){var a=this.dragCurrent;if(!a||a.isLocked()||a.dragOnly){return;}var N=YAHOO.util.Event.getPageX(V),M=YAHOO.util.Event.getPageY(V),P=new YAHOO.util.Point(N,M),K=a.getTargetCoord(P.x,P.y),F=a.getDragEl(),E=["out","over","drop","enter"],U=new YAHOO.util.Region(K.y,K.x+F.offsetWidth,K.y+F.offsetHeight,K.x),I=[],D={},Q=[],c={outEvts:[],overEvts:[],dropEvts:[],enterEvts:[]};for(var S in this.dragOvers){var d=this.dragOvers[S];if(!this.isTypeOfDD(d)){continue;
}if(!this.isOverTarget(P,d,this.mode,U)){c.outEvts.push(d);}I[S]=true;delete this.dragOvers[S];}for(var R in a.groups){if("string"!=typeof R){continue;}for(S in this.ids[R]){var G=this.ids[R][S];if(!this.isTypeOfDD(G)){continue;}if(G.isTarget&&!G.isLocked()&&G!=a){if(this.isOverTarget(P,G,this.mode,U)){D[R]=true;if(L){c.dropEvts.push(G);}else{if(!I[G.id]){c.enterEvts.push(G);}else{c.overEvts.push(G);}this.dragOvers[G.id]=G;}}}}}this.interactionInfo={out:c.outEvts,enter:c.enterEvts,over:c.overEvts,drop:c.dropEvts,point:P,draggedRegion:U,sourceRegion:this.locationCache[a.id],validDrop:L};for(var C in D){Q.push(C);}if(L&&!c.dropEvts.length){this.interactionInfo.validDrop=false;if(a.events.invalidDrop){a.onInvalidDrop(V);a.fireEvent("invalidDropEvent",{e:V});}}for(S=0;S<E.length;S++){var Y=null;if(c[E[S]+"Evts"]){Y=c[E[S]+"Evts"];}if(Y&&Y.length){var H=E[S].charAt(0).toUpperCase()+E[S].substr(1),X="onDrag"+H,J="b4Drag"+H,O="drag"+H+"Event",W="drag"+H;if(this.mode){if(a.events[J]){a[J](V,Y,Q);a.fireEvent(J+"Event",{event:V,info:Y,group:Q});}if(a.events[W]){a[X](V,Y,Q);a.fireEvent(O,{event:V,info:Y,group:Q});}}else{for(var Z=0,T=Y.length;Z<T;++Z){if(a.events[J]){a[J](V,Y[Z].id,Q[0]);a.fireEvent(J+"Event",{event:V,info:Y[Z].id,group:Q[0]});}if(a.events[W]){a[X](V,Y[Z].id,Q[0]);a.fireEvent(O,{event:V,info:Y[Z].id,group:Q[0]});}}}}}},getBestMatch:function(E){var G=null;var D=E.length;if(D==1){G=E[0];}else{for(var F=0;F<D;++F){var C=E[F];if(this.mode==this.INTERSECT&&C.cursorIsOver){G=C;break;}else{if(!G||!G.overlap||(C.overlap&&G.overlap.getArea()<C.overlap.getArea())){G=C;}}}}return G;},refreshCache:function(D){var F=D||this.ids;for(var C in F){if("string"!=typeof C){continue;}for(var E in this.ids[C]){var G=this.ids[C][E];if(this.isTypeOfDD(G)){var H=this.getLocation(G);if(H){this.locationCache[G.id]=H;}else{delete this.locationCache[G.id];}}}}},verifyEl:function(D){try{if(D){var C=D.offsetParent;if(C){return true;}}}catch(E){}return false;},getLocation:function(H){if(!this.isTypeOfDD(H)){return null;}var F=H.getEl(),K,E,D,M,L,N,C,J,G;try{K=YAHOO.util.Dom.getXY(F);}catch(I){}if(!K){return null;}E=K[0];D=E+F.offsetWidth;M=K[1];L=M+F.offsetHeight;N=M-H.padding[0];C=D+H.padding[1];J=L+H.padding[2];G=E-H.padding[3];return new YAHOO.util.Region(N,C,J,G);},isOverTarget:function(K,C,E,F){var G=this.locationCache[C.id];if(!G||!this.useCache){G=this.getLocation(C);this.locationCache[C.id]=G;}if(!G){return false;}C.cursorIsOver=G.contains(K);var J=this.dragCurrent;if(!J||(!E&&!J.constrainX&&!J.constrainY)){return C.cursorIsOver;}C.overlap=null;if(!F){var H=J.getTargetCoord(K.x,K.y);var D=J.getDragEl();F=new YAHOO.util.Region(H.y,H.x+D.offsetWidth,H.y+D.offsetHeight,H.x);}var I=F.intersect(G);if(I){C.overlap=I;return(E)?true:C.cursorIsOver;}else{return false;}},_onUnload:function(D,C){this.unregAll();},unregAll:function(){if(this.dragCurrent){this.stopDrag();this.dragCurrent=null;}this._execOnAll("unreg",[]);this.ids={};},elementCache:{},getElWrapper:function(D){var C=this.elementCache[D];if(!C||!C.el){C=this.elementCache[D]=new this.ElementWrapper(YAHOO.util.Dom.get(D));}return C;},getElement:function(C){return YAHOO.util.Dom.get(C);},getCss:function(D){var C=YAHOO.util.Dom.get(D);return(C)?C.style:null;},ElementWrapper:function(C){this.el=C||null;this.id=this.el&&C.id;this.css=this.el&&C.style;},getPosX:function(C){return YAHOO.util.Dom.getX(C);},getPosY:function(C){return YAHOO.util.Dom.getY(C);},swapNode:function(E,C){if(E.swapNode){E.swapNode(C);}else{var F=C.parentNode;var D=C.nextSibling;if(D==E){F.insertBefore(E,C);}else{if(C==E.nextSibling){F.insertBefore(C,E);}else{E.parentNode.replaceChild(C,E);F.insertBefore(E,D);}}}},getScroll:function(){var E,C,F=document.documentElement,D=document.body;if(F&&(F.scrollTop||F.scrollLeft)){E=F.scrollTop;C=F.scrollLeft;}else{if(D){E=D.scrollTop;C=D.scrollLeft;}else{}}return{top:E,left:C};},getStyle:function(D,C){return YAHOO.util.Dom.getStyle(D,C);},getScrollTop:function(){return this.getScroll().top;},getScrollLeft:function(){return this.getScroll().left;},moveToEl:function(C,E){var D=YAHOO.util.Dom.getXY(E);YAHOO.util.Dom.setXY(C,D);},getClientHeight:function(){return YAHOO.util.Dom.getViewportHeight();},getClientWidth:function(){return YAHOO.util.Dom.getViewportWidth();},numericSort:function(D,C){return(D-C);},_timeoutCount:0,_addListeners:function(){var C=YAHOO.util.DDM;if(YAHOO.util.Event&&document){C._onLoad();}else{if(C._timeoutCount>2000){}else{setTimeout(C._addListeners,10);if(document&&document.body){C._timeoutCount+=1;}}}},handleWasClicked:function(C,E){if(this.isHandle(E,C.id)){return true;}else{var D=C.parentNode;while(D){if(this.isHandle(E,D.id)){return true;}else{D=D.parentNode;}}}return false;}};}();YAHOO.util.DDM=YAHOO.util.DragDropMgr;YAHOO.util.DDM._addListeners();}(function(){var A=YAHOO.util.Event;var B=YAHOO.util.Dom;YAHOO.util.DragDrop=function(E,C,D){if(E){this.init(E,C,D);}};YAHOO.util.DragDrop.prototype={events:null,on:function(){this.subscribe.apply(this,arguments);},id:null,config:null,dragElId:null,handleElId:null,invalidHandleTypes:null,invalidHandleIds:null,invalidHandleClasses:null,startPageX:0,startPageY:0,groups:null,locked:false,lock:function(){this.locked=true;},unlock:function(){this.locked=false;},isTarget:true,padding:null,dragOnly:false,useShim:false,_domRef:null,__ygDragDrop:true,constrainX:false,constrainY:false,minX:0,maxX:0,minY:0,maxY:0,deltaX:0,deltaY:0,maintainOffset:false,xTicks:null,yTicks:null,primaryButtonOnly:true,available:false,hasOuterHandles:false,cursorIsOver:false,overlap:null,b4StartDrag:function(C,D){},startDrag:function(C,D){},b4Drag:function(C){},onDrag:function(C){},onDragEnter:function(C,D){},b4DragOver:function(C){},onDragOver:function(C,D){},b4DragOut:function(C){},onDragOut:function(C,D){},b4DragDrop:function(C){},onDragDrop:function(C,D){},onInvalidDrop:function(C){},b4EndDrag:function(C){},endDrag:function(C){},b4MouseDown:function(C){},onMouseDown:function(C){},onMouseUp:function(C){},onAvailable:function(){},getEl:function(){if(!this._domRef){this._domRef=B.get(this.id);
}return this._domRef;},getDragEl:function(){return B.get(this.dragElId);},init:function(F,C,D){this.initTarget(F,C,D);A.on(this._domRef||this.id,"mousedown",this.handleMouseDown,this,true);for(var E in this.events){this.createEvent(E+"Event");}},initTarget:function(E,C,D){this.config=D||{};this.events={};this.DDM=YAHOO.util.DDM;this.groups={};if(typeof E!=="string"){this._domRef=E;E=B.generateId(E);}this.id=E;this.addToGroup((C)?C:"default");this.handleElId=E;A.onAvailable(E,this.handleOnAvailable,this,true);this.setDragElId(E);this.invalidHandleTypes={A:"A"};this.invalidHandleIds={};this.invalidHandleClasses=[];this.applyConfig();},applyConfig:function(){this.events={mouseDown:true,b4MouseDown:true,mouseUp:true,b4StartDrag:true,startDrag:true,b4EndDrag:true,endDrag:true,drag:true,b4Drag:true,invalidDrop:true,b4DragOut:true,dragOut:true,dragEnter:true,b4DragOver:true,dragOver:true,b4DragDrop:true,dragDrop:true};if(this.config.events){for(var C in this.config.events){if(this.config.events[C]===false){this.events[C]=false;}}}this.padding=this.config.padding||[0,0,0,0];this.isTarget=(this.config.isTarget!==false);this.maintainOffset=(this.config.maintainOffset);this.primaryButtonOnly=(this.config.primaryButtonOnly!==false);this.dragOnly=((this.config.dragOnly===true)?true:false);this.useShim=((this.config.useShim===true)?true:false);},handleOnAvailable:function(){this.available=true;this.resetConstraints();this.onAvailable();},setPadding:function(E,C,F,D){if(!C&&0!==C){this.padding=[E,E,E,E];}else{if(!F&&0!==F){this.padding=[E,C,E,C];}else{this.padding=[E,C,F,D];}}},setInitPosition:function(F,E){var G=this.getEl();if(!this.DDM.verifyEl(G)){if(G&&G.style&&(G.style.display=="none")){}else{}return;}var D=F||0;var C=E||0;var H=B.getXY(G);this.initPageX=H[0]-D;this.initPageY=H[1]-C;this.lastPageX=H[0];this.lastPageY=H[1];this.setStartPosition(H);},setStartPosition:function(D){var C=D||B.getXY(this.getEl());this.deltaSetXY=null;this.startPageX=C[0];this.startPageY=C[1];},addToGroup:function(C){this.groups[C]=true;this.DDM.regDragDrop(this,C);},removeFromGroup:function(C){if(this.groups[C]){delete this.groups[C];}this.DDM.removeDDFromGroup(this,C);},setDragElId:function(C){this.dragElId=C;},setHandleElId:function(C){if(typeof C!=="string"){C=B.generateId(C);}this.handleElId=C;this.DDM.regHandle(this.id,C);},setOuterHandleElId:function(C){if(typeof C!=="string"){C=B.generateId(C);}A.on(C,"mousedown",this.handleMouseDown,this,true);this.setHandleElId(C);this.hasOuterHandles=true;},unreg:function(){A.removeListener(this.id,"mousedown",this.handleMouseDown);this._domRef=null;this.DDM._remove(this);},isLocked:function(){return(this.DDM.isLocked()||this.locked);},handleMouseDown:function(J,I){var D=J.which||J.button;if(this.primaryButtonOnly&&D>1){return;}if(this.isLocked()){return;}var C=this.b4MouseDown(J),F=true;if(this.events.b4MouseDown){F=this.fireEvent("b4MouseDownEvent",J);}var E=this.onMouseDown(J),H=true;if(this.events.mouseDown){H=this.fireEvent("mouseDownEvent",J);}if((C===false)||(E===false)||(F===false)||(H===false)){return;}this.DDM.refreshCache(this.groups);var G=new YAHOO.util.Point(A.getPageX(J),A.getPageY(J));if(!this.hasOuterHandles&&!this.DDM.isOverTarget(G,this)){}else{if(this.clickValidator(J)){this.setStartPosition();this.DDM.handleMouseDown(J,this);this.DDM.stopEvent(J);}else{}}},clickValidator:function(D){var C=YAHOO.util.Event.getTarget(D);return(this.isValidHandleChild(C)&&(this.id==this.handleElId||this.DDM.handleWasClicked(C,this.id)));},getTargetCoord:function(E,D){var C=E-this.deltaX;var F=D-this.deltaY;if(this.constrainX){if(C<this.minX){C=this.minX;}if(C>this.maxX){C=this.maxX;}}if(this.constrainY){if(F<this.minY){F=this.minY;}if(F>this.maxY){F=this.maxY;}}C=this.getTick(C,this.xTicks);F=this.getTick(F,this.yTicks);return{x:C,y:F};},addInvalidHandleType:function(C){var D=C.toUpperCase();this.invalidHandleTypes[D]=D;},addInvalidHandleId:function(C){if(typeof C!=="string"){C=B.generateId(C);}this.invalidHandleIds[C]=C;},addInvalidHandleClass:function(C){this.invalidHandleClasses.push(C);},removeInvalidHandleType:function(C){var D=C.toUpperCase();delete this.invalidHandleTypes[D];},removeInvalidHandleId:function(C){if(typeof C!=="string"){C=B.generateId(C);}delete this.invalidHandleIds[C];},removeInvalidHandleClass:function(D){for(var E=0,C=this.invalidHandleClasses.length;E<C;++E){if(this.invalidHandleClasses[E]==D){delete this.invalidHandleClasses[E];}}},isValidHandleChild:function(F){var E=true;var H;try{H=F.nodeName.toUpperCase();}catch(G){H=F.nodeName;}E=E&&!this.invalidHandleTypes[H];E=E&&!this.invalidHandleIds[F.id];for(var D=0,C=this.invalidHandleClasses.length;E&&D<C;++D){E=!B.hasClass(F,this.invalidHandleClasses[D]);}return E;},setXTicks:function(F,C){this.xTicks=[];this.xTickSize=C;var E={};for(var D=this.initPageX;D>=this.minX;D=D-C){if(!E[D]){this.xTicks[this.xTicks.length]=D;E[D]=true;}}for(D=this.initPageX;D<=this.maxX;D=D+C){if(!E[D]){this.xTicks[this.xTicks.length]=D;E[D]=true;}}this.xTicks.sort(this.DDM.numericSort);},setYTicks:function(F,C){this.yTicks=[];this.yTickSize=C;var E={};for(var D=this.initPageY;D>=this.minY;D=D-C){if(!E[D]){this.yTicks[this.yTicks.length]=D;E[D]=true;}}for(D=this.initPageY;D<=this.maxY;D=D+C){if(!E[D]){this.yTicks[this.yTicks.length]=D;E[D]=true;}}this.yTicks.sort(this.DDM.numericSort);},setXConstraint:function(E,D,C){this.leftConstraint=parseInt(E,10);this.rightConstraint=parseInt(D,10);this.minX=this.initPageX-this.leftConstraint;this.maxX=this.initPageX+this.rightConstraint;if(C){this.setXTicks(this.initPageX,C);}this.constrainX=true;},clearConstraints:function(){this.constrainX=false;this.constrainY=false;this.clearTicks();},clearTicks:function(){this.xTicks=null;this.yTicks=null;this.xTickSize=0;this.yTickSize=0;},setYConstraint:function(C,E,D){this.topConstraint=parseInt(C,10);this.bottomConstraint=parseInt(E,10);this.minY=this.initPageY-this.topConstraint;this.maxY=this.initPageY+this.bottomConstraint;if(D){this.setYTicks(this.initPageY,D);
}this.constrainY=true;},resetConstraints:function(){if(this.initPageX||this.initPageX===0){var D=(this.maintainOffset)?this.lastPageX-this.initPageX:0;var C=(this.maintainOffset)?this.lastPageY-this.initPageY:0;this.setInitPosition(D,C);}else{this.setInitPosition();}if(this.constrainX){this.setXConstraint(this.leftConstraint,this.rightConstraint,this.xTickSize);}if(this.constrainY){this.setYConstraint(this.topConstraint,this.bottomConstraint,this.yTickSize);}},getTick:function(I,F){if(!F){return I;}else{if(F[0]>=I){return F[0];}else{for(var D=0,C=F.length;D<C;++D){var E=D+1;if(F[E]&&F[E]>=I){var H=I-F[D];var G=F[E]-I;return(G>H)?F[D]:F[E];}}return F[F.length-1];}}},toString:function(){return("DragDrop "+this.id);}};YAHOO.augment(YAHOO.util.DragDrop,YAHOO.util.EventProvider);})();YAHOO.util.DD=function(C,A,B){if(C){this.init(C,A,B);}};YAHOO.extend(YAHOO.util.DD,YAHOO.util.DragDrop,{scroll:true,autoOffset:function(C,B){var A=C-this.startPageX;var D=B-this.startPageY;this.setDelta(A,D);},setDelta:function(B,A){this.deltaX=B;this.deltaY=A;},setDragElPos:function(C,B){var A=this.getDragEl();this.alignElWithMouse(A,C,B);},alignElWithMouse:function(C,G,F){var E=this.getTargetCoord(G,F);if(!this.deltaSetXY){var H=[E.x,E.y];YAHOO.util.Dom.setXY(C,H);var D=parseInt(YAHOO.util.Dom.getStyle(C,"left"),10);var B=parseInt(YAHOO.util.Dom.getStyle(C,"top"),10);this.deltaSetXY=[D-E.x,B-E.y];}else{YAHOO.util.Dom.setStyle(C,"left",(E.x+this.deltaSetXY[0])+"px");YAHOO.util.Dom.setStyle(C,"top",(E.y+this.deltaSetXY[1])+"px");}this.cachePosition(E.x,E.y);var A=this;setTimeout(function(){A.autoScroll.call(A,E.x,E.y,C.offsetHeight,C.offsetWidth);},0);},cachePosition:function(B,A){if(B){this.lastPageX=B;this.lastPageY=A;}else{var C=YAHOO.util.Dom.getXY(this.getEl());this.lastPageX=C[0];this.lastPageY=C[1];}},autoScroll:function(J,I,E,K){if(this.scroll){var L=this.DDM.getClientHeight();var B=this.DDM.getClientWidth();var N=this.DDM.getScrollTop();var D=this.DDM.getScrollLeft();var H=E+I;var M=K+J;var G=(L+N-I-this.deltaY);var F=(B+D-J-this.deltaX);var C=40;var A=(document.all)?80:30;if(H>L&&G<C){window.scrollTo(D,N+A);}if(I<N&&N>0&&I-N<C){window.scrollTo(D,N-A);}if(M>B&&F<C){window.scrollTo(D+A,N);}if(J<D&&D>0&&J-D<C){window.scrollTo(D-A,N);}}},applyConfig:function(){YAHOO.util.DD.superclass.applyConfig.call(this);this.scroll=(this.config.scroll!==false);},b4MouseDown:function(A){this.setStartPosition();this.autoOffset(YAHOO.util.Event.getPageX(A),YAHOO.util.Event.getPageY(A));},b4Drag:function(A){this.setDragElPos(YAHOO.util.Event.getPageX(A),YAHOO.util.Event.getPageY(A));},toString:function(){return("DD "+this.id);}});YAHOO.util.DDProxy=function(C,A,B){if(C){this.init(C,A,B);this.initFrame();}};YAHOO.util.DDProxy.dragElId="ygddfdiv";YAHOO.extend(YAHOO.util.DDProxy,YAHOO.util.DD,{resizeFrame:true,centerFrame:false,createFrame:function(){var B=this,A=document.body;if(!A||!A.firstChild){setTimeout(function(){B.createFrame();},50);return;}var F=this.getDragEl(),E=YAHOO.util.Dom;if(!F){F=document.createElement("div");F.id=this.dragElId;var D=F.style;D.position="absolute";D.visibility="hidden";D.cursor="move";D.border="2px solid #aaa";D.zIndex=999;D.height="25px";D.width="25px";var C=document.createElement("div");E.setStyle(C,"height","100%");E.setStyle(C,"width","100%");E.setStyle(C,"background-color","#ccc");E.setStyle(C,"opacity","0");F.appendChild(C);A.insertBefore(F,A.firstChild);}},initFrame:function(){this.createFrame();},applyConfig:function(){YAHOO.util.DDProxy.superclass.applyConfig.call(this);this.resizeFrame=(this.config.resizeFrame!==false);this.centerFrame=(this.config.centerFrame);this.setDragElId(this.config.dragElId||YAHOO.util.DDProxy.dragElId);},showFrame:function(E,D){var C=this.getEl();var A=this.getDragEl();var B=A.style;this._resizeProxy();if(this.centerFrame){this.setDelta(Math.round(parseInt(B.width,10)/2),Math.round(parseInt(B.height,10)/2));}this.setDragElPos(E,D);YAHOO.util.Dom.setStyle(A,"visibility","visible");},_resizeProxy:function(){if(this.resizeFrame){var H=YAHOO.util.Dom;var B=this.getEl();var C=this.getDragEl();var G=parseInt(H.getStyle(C,"borderTopWidth"),10);var I=parseInt(H.getStyle(C,"borderRightWidth"),10);var F=parseInt(H.getStyle(C,"borderBottomWidth"),10);var D=parseInt(H.getStyle(C,"borderLeftWidth"),10);if(isNaN(G)){G=0;}if(isNaN(I)){I=0;}if(isNaN(F)){F=0;}if(isNaN(D)){D=0;}var E=Math.max(0,B.offsetWidth-I-D);var A=Math.max(0,B.offsetHeight-G-F);H.setStyle(C,"width",E+"px");H.setStyle(C,"height",A+"px");}},b4MouseDown:function(B){this.setStartPosition();var A=YAHOO.util.Event.getPageX(B);var C=YAHOO.util.Event.getPageY(B);this.autoOffset(A,C);},b4StartDrag:function(A,B){this.showFrame(A,B);},b4EndDrag:function(A){YAHOO.util.Dom.setStyle(this.getDragEl(),"visibility","hidden");},endDrag:function(D){var C=YAHOO.util.Dom;var B=this.getEl();var A=this.getDragEl();C.setStyle(A,"visibility","");C.setStyle(B,"visibility","hidden");YAHOO.util.DDM.moveToEl(B,A);C.setStyle(A,"visibility","hidden");C.setStyle(B,"visibility","");},toString:function(){return("DDProxy "+this.id);}});YAHOO.util.DDTarget=function(C,A,B){if(C){this.initTarget(C,A,B);}};YAHOO.extend(YAHOO.util.DDTarget,YAHOO.util.DragDrop,{toString:function(){return("DDTarget "+this.id);}});YAHOO.register("dragdrop",YAHOO.util.DragDropMgr,{version:"2.8.1",build:"19"});/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(A){this._msxml_progid.unshift(A);},setDefaultPostHeader:function(A){if(typeof A=="string"){this._default_post_header=A;}else{if(typeof A=="boolean"){this._use_default_post_header=A;}}},setDefaultXhrHeader:function(A){if(typeof A=="string"){this._default_xhr_header=A;}else{this._use_default_xhr_header=A;}},setPollingInterval:function(A){if(typeof A=="number"&&isFinite(A)){this._polling_interval=A;}},createXhrObject:function(F){var D,A,B;try{A=new XMLHttpRequest();D={conn:A,tId:F,xhr:true};}catch(C){for(B=0;B<this._msxml_progid.length;++B){try{A=new ActiveXObject(this._msxml_progid[B]);D={conn:A,tId:F,xhr:true};break;}catch(E){}}}finally{return D;}},getConnectionObject:function(A){var C,D=this._transaction_id;try{if(!A){C=this.createXhrObject(D);}else{C={tId:D};if(A==="xdr"){C.conn=this._transport;C.xdr=true;}else{if(A==="upload"){C.upload=true;}}}if(C){this._transaction_id++;}}catch(B){}return C;},asyncRequest:function(G,D,F,A){var E,C,B=(F&&F.argument)?F.argument:null;if(this._isFileUpload){C="upload";}else{if(F.xdr){C="xdr";}}E=this.getConnectionObject(C);if(!E){return null;}else{if(F&&F.customevents){this.initCustomEvents(E,F);}if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(E,F,D,A);return E;}if(G.toUpperCase()=="GET"){if(this._sFormData.length!==0){D+=((D.indexOf("?")==-1)?"?":"&")+this._sFormData;}}else{if(G.toUpperCase()=="POST"){A=A?this._sFormData+"&"+A:this._sFormData;}}}if(G.toUpperCase()=="GET"&&(F&&F.cache===false)){D+=((D.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString();}if(this._use_default_xhr_header){if(!this._default_headers["X-Requested-With"]){this.initHeader("X-Requested-With",this._default_xhr_header,true);}}if((G.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){this.initHeader("Content-Type",this._default_post_header);}if(E.xdr){this.xdr(E,G,D,F,A);return E;}E.conn.open(G,D,true);if(this._has_default_headers||this._has_http_headers){this.setHeader(E);}this.handleReadyState(E,F);E.conn.send(A||"");if(this._isFormSubmit===true){this.resetFormState();}this.startEvent.fire(E,B);if(E.startEvent){E.startEvent.fire(E,B);}return E;}},initCustomEvents:function(A,C){var B;for(B in C.customevents){if(this._customEvents[B][0]){A[this._customEvents[B][0]]=new YAHOO.util.CustomEvent(this._customEvents[B][1],(C.scope)?C.scope:null);A[this._customEvents[B][0]].subscribe(C.customevents[B]);}}},handleReadyState:function(C,D){var B=this,A=(D&&D.argument)?D.argument:null;if(D&&D.timeout){this._timeOut[C.tId]=window.setTimeout(function(){B.abort(C,D,true);},D.timeout);}this._poll[C.tId]=window.setInterval(function(){if(C.conn&&C.conn.readyState===4){window.clearInterval(B._poll[C.tId]);delete B._poll[C.tId];if(D&&D.timeout){window.clearTimeout(B._timeOut[C.tId]);delete B._timeOut[C.tId];}B.completeEvent.fire(C,A);if(C.completeEvent){C.completeEvent.fire(C,A);}B.handleTransactionResponse(C,D);}},this._polling_interval);},handleTransactionResponse:function(B,I,D){var E,A,G=(I&&I.argument)?I.argument:null,C=(B.r&&B.r.statusText==="xdr:success")?true:false,H=(B.r&&B.r.statusText==="xdr:failure")?true:false,J=D;try{if((B.conn.status!==undefined&&B.conn.status!==0)||C){E=B.conn.status;}else{if(H&&!J){E=0;}else{E=13030;}}}catch(F){E=13030;}if((E>=200&&E<300)||E===1223||C){A=B.xdr?B.r:this.createResponseObject(B,G);if(I&&I.success){if(!I.scope){I.success(A);}else{I.success.apply(I.scope,[A]);}}this.successEvent.fire(A);if(B.successEvent){B.successEvent.fire(A);}}else{switch(E){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:A=this.createExceptionObject(B.tId,G,(D?D:false));if(I&&I.failure){if(!I.scope){I.failure(A);}else{I.failure.apply(I.scope,[A]);}}break;default:A=(B.xdr)?B.response:this.createResponseObject(B,G);if(I&&I.failure){if(!I.scope){I.failure(A);}else{I.failure.apply(I.scope,[A]);}}}this.failureEvent.fire(A);if(B.failureEvent){B.failureEvent.fire(A);}}this.releaseObject(B);A=null;},createResponseObject:function(A,G){var D={},I={},E,C,F,B;try{C=A.conn.getAllResponseHeaders();F=C.split("\n");for(E=0;E<F.length;E++){B=F[E].indexOf(":");if(B!=-1){I[F[E].substring(0,B)]=YAHOO.lang.trim(F[E].substring(B+2));}}}catch(H){}D.tId=A.tId;D.status=(A.conn.status==1223)?204:A.conn.status;D.statusText=(A.conn.status==1223)?"No Content":A.conn.statusText;D.getResponseHeader=I;D.getAllResponseHeaders=C;D.responseText=A.conn.responseText;D.responseXML=A.conn.responseXML;if(G){D.argument=G;}return D;},createExceptionObject:function(H,D,A){var F=0,G="communication failure",C=-1,B="transaction aborted",E={};E.tId=H;if(A){E.status=C;E.statusText=B;}else{E.status=F;E.statusText=G;}if(D){E.argument=D;}return E;},initHeader:function(A,D,C){var B=(C)?this._default_headers:this._http_headers;B[A]=D;if(C){this._has_default_headers=true;}else{this._has_http_headers=true;}},setHeader:function(A){var B;if(this._has_default_headers){for(B in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,B)){A.conn.setRequestHeader(B,this._default_headers[B]);}}}if(this._has_http_headers){for(B in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,B)){A.conn.setRequestHeader(B,this._http_headers[B]);
}}this._http_headers={};this._has_http_headers=false;}},resetDefaultHeaders:function(){this._default_headers={};this._has_default_headers=false;},abort:function(E,G,A){var D,B=(G&&G.argument)?G.argument:null;E=E||{};if(E.conn){if(E.xhr){if(this.isCallInProgress(E)){E.conn.abort();window.clearInterval(this._poll[E.tId]);delete this._poll[E.tId];if(A){window.clearTimeout(this._timeOut[E.tId]);delete this._timeOut[E.tId];}D=true;}}else{if(E.xdr){E.conn.abort(E.tId);D=true;}}}else{if(E.upload){var C="yuiIO"+E.tId;var F=document.getElementById(C);if(F){YAHOO.util.Event.removeListener(F,"load");document.body.removeChild(F);if(A){window.clearTimeout(this._timeOut[E.tId]);delete this._timeOut[E.tId];}D=true;}}else{D=false;}}if(D===true){this.abortEvent.fire(E,B);if(E.abortEvent){E.abortEvent.fire(E,B);}this.handleTransactionResponse(E,G,true);}return D;},isCallInProgress:function(A){A=A||{};if(A.xhr&&A.conn){return A.conn.readyState!==4&&A.conn.readyState!==0;}else{if(A.xdr&&A.conn){return A.conn.isCallInProgress(A.tId);}else{if(A.upload===true){return document.getElementById("yuiIO"+A.tId)?true:false;}else{return false;}}}},releaseObject:function(A){if(A&&A.conn){A.conn=null;A=null;}}};(function(){var G=YAHOO.util.Connect,H={};function D(I){var J='<object id="YUIConnectionSwf" type="application/x-shockwave-flash" data="'+I+'" width="0" height="0">'+'<param name="movie" value="'+I+'">'+'<param name="allowScriptAccess" value="always">'+"</object>",K=document.createElement("div");document.body.appendChild(K);K.innerHTML=J;}function B(L,I,J,M,K){H[parseInt(L.tId)]={"o":L,"c":M};if(K){M.method=I;M.data=K;}L.conn.send(J,M,L.tId);}function E(I){D(I);G._transport=document.getElementById("YUIConnectionSwf");}function C(){G.xdrReadyEvent.fire();}function A(J,I){if(J){G.startEvent.fire(J,I.argument);if(J.startEvent){J.startEvent.fire(J,I.argument);}}}function F(J){var K=H[J.tId].o,I=H[J.tId].c;if(J.statusText==="xdr:start"){A(K,I);return;}J.responseText=decodeURI(J.responseText);K.r=J;if(I.argument){K.r.argument=I.argument;}this.handleTransactionResponse(K,I,J.statusText==="xdr:abort"?true:false);delete H[J.tId];}G.xdr=B;G.swf=D;G.transport=E;G.xdrReadyEvent=new YAHOO.util.CustomEvent("xdrReady");G.xdrReady=C;G.handleXdrResponse=F;})();(function(){var D=YAHOO.util.Connect,F=YAHOO.util.Event;D._isFormSubmit=false;D._isFileUpload=false;D._formNode=null;D._sFormData=null;D._submitElementValue=null;D.uploadEvent=new YAHOO.util.CustomEvent("upload"),D._hasSubmitListener=function(){if(F){F.addListener(document,"click",function(J){var I=F.getTarget(J),H=I.nodeName.toLowerCase();if((H==="input"||H==="button")&&(I.type&&I.type.toLowerCase()=="submit")){D._submitElementValue=encodeURIComponent(I.name)+"="+encodeURIComponent(I.value);}});return true;}return false;}();function G(T,O,J){var S,I,R,P,W,Q=false,M=[],V=0,L,N,K,U,H;this.resetFormState();if(typeof T=="string"){S=(document.getElementById(T)||document.forms[T]);}else{if(typeof T=="object"){S=T;}else{return;}}if(O){this.createFrame(J?J:null);this._isFormSubmit=true;this._isFileUpload=true;this._formNode=S;return;}for(L=0,N=S.elements.length;L<N;++L){I=S.elements[L];W=I.disabled;R=I.name;if(!W&&R){R=encodeURIComponent(R)+"=";P=encodeURIComponent(I.value);switch(I.type){case"select-one":if(I.selectedIndex>-1){H=I.options[I.selectedIndex];M[V++]=R+encodeURIComponent((H.attributes.value&&H.attributes.value.specified)?H.value:H.text);}break;case"select-multiple":if(I.selectedIndex>-1){for(K=I.selectedIndex,U=I.options.length;K<U;++K){H=I.options[K];if(H.selected){M[V++]=R+encodeURIComponent((H.attributes.value&&H.attributes.value.specified)?H.value:H.text);}}}break;case"radio":case"checkbox":if(I.checked){M[V++]=R+P;}break;case"file":case undefined:case"reset":case"button":break;case"submit":if(Q===false){if(this._hasSubmitListener&&this._submitElementValue){M[V++]=this._submitElementValue;}Q=true;}break;default:M[V++]=R+P;}}}this._isFormSubmit=true;this._sFormData=M.join("&");this.initHeader("Content-Type",this._default_form_header);return this._sFormData;}function C(){this._isFormSubmit=false;this._isFileUpload=false;this._formNode=null;this._sFormData="";}function B(H){var I="yuiIO"+this._transaction_id,J;if(YAHOO.env.ua.ie){J=document.createElement('<iframe id="'+I+'" name="'+I+'" />');if(typeof H=="boolean"){J.src="javascript:false";}}else{J=document.createElement("iframe");J.id=I;J.name=I;}J.style.position="absolute";J.style.top="-1000px";J.style.left="-1000px";document.body.appendChild(J);}function E(H){var K=[],I=H.split("&"),J,L;for(J=0;J<I.length;J++){L=I[J].indexOf("=");if(L!=-1){K[J]=document.createElement("input");K[J].type="hidden";K[J].name=decodeURIComponent(I[J].substring(0,L));K[J].value=decodeURIComponent(I[J].substring(L+1));this._formNode.appendChild(K[J]);}}return K;}function A(K,V,L,J){var Q="yuiIO"+K.tId,R="multipart/form-data",T=document.getElementById(Q),M=(document.documentMode&&document.documentMode===8)?true:false,W=this,S=(V&&V.argument)?V.argument:null,U,P,I,O,H,N;H={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};this._formNode.setAttribute("action",L);this._formNode.setAttribute("method","POST");this._formNode.setAttribute("target",Q);if(YAHOO.env.ua.ie&&!M){this._formNode.setAttribute("encoding",R);}else{this._formNode.setAttribute("enctype",R);}if(J){U=this.appendPostData(J);}this._formNode.submit();this.startEvent.fire(K,S);if(K.startEvent){K.startEvent.fire(K,S);}if(V&&V.timeout){this._timeOut[K.tId]=window.setTimeout(function(){W.abort(K,V,true);},V.timeout);}if(U&&U.length>0){for(P=0;P<U.length;P++){this._formNode.removeChild(U[P]);}}for(I in H){if(YAHOO.lang.hasOwnProperty(H,I)){if(H[I]){this._formNode.setAttribute(I,H[I]);}else{this._formNode.removeAttribute(I);}}}this.resetFormState();N=function(){if(V&&V.timeout){window.clearTimeout(W._timeOut[K.tId]);delete W._timeOut[K.tId];}W.completeEvent.fire(K,S);if(K.completeEvent){K.completeEvent.fire(K,S);
}O={tId:K.tId,argument:V.argument};try{O.responseText=T.contentWindow.document.body?T.contentWindow.document.body.innerHTML:T.contentWindow.document.documentElement.textContent;O.responseXML=T.contentWindow.document.XMLDocument?T.contentWindow.document.XMLDocument:T.contentWindow.document;}catch(X){}if(V&&V.upload){if(!V.scope){V.upload(O);}else{V.upload.apply(V.scope,[O]);}}W.uploadEvent.fire(O);if(K.uploadEvent){K.uploadEvent.fire(O);}F.removeListener(T,"load",N);setTimeout(function(){document.body.removeChild(T);W.releaseObject(K);},100);};F.addListener(T,"load",N);}D.setForm=G;D.resetFormState=C;D.createFrame=B;D.appendPostData=E;D.uploadFile=A;})();YAHOO.register("connection",YAHOO.util.Connect,{version:"2.8.1",build:"19"});PgnViewer=function(_1,_2){
var _3=new BoardConfig();
if(_1){
_3.applyConfig(_1);
}
if(!window._pvObject){
window._pvObject=new Array();
}
window._pvObject[_3.boardName]=this;
_1=_3;
_1.pgnMode=true;
_1.scrollVariations=true;
this.chessapp=new ChessApp(_1);
this.finishedCallback=_2;
if(_1.loadImmediately){
this.chessapp.init();
this.board=this.chessapp.board;
this.board.addUpdatePieceListener(this);
}else{
YAHOO.util.Event.onDOMReady(this.setup,this,true);
}
};
PgnViewer.prototype.setup=function(){
this.chessapp.init();
this.board=this.chessapp.board;
this.board.addUpdatePieceListener(this);
};
PgnViewer.prototype.updatePieceCallback=function(_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){
var _10=new Object();
var _11=_e;
var _12=false;
var _13=Board.getVarMove(_11,_7,_6,_5,_4);
if(_11.fromColumn==_5.column&&_11.fromRow==_5.row&&_11.toRow==_7&&_11.toColumn==_6&&(_4==""||(_4==_11.promotion))){
_12=true;
}else{
if(_13){
_11=_13;
_12=true;
}
}
_10.move=_11;
_10.allowMove=_12;
_10.dontMakeOpponentMove=false;
return _10;
};
PgnViewer.prototype.setupFromPgn=function(pgn,_15){
this.chessapp.pgn.setupFromPGN(pgn,_15);
};
PgnViewer.prototype.setupFromFen=function(fen,_17,_18,_19){
this.chessapp.pgn.board.setupFromFen(fen,_17,_18,_19);
};
PGNGame=function(_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23){
this.movesseq=_1a;
this.startFen=_1b;
this.blackPlayer=_1c;
this.whitePlayer=_1d;
this.pgn_result=_1e;
this.event=_1f;
this.site=_20;
this.date=_21;
this.round=_22;
this.start_movenum=_23;
};
PGN=function(_24){
this.board=_24;
this.pgnGames=new Array();
this.lastShownGame=0;
};
PGN.prototype.pollPGNFromURL=function(url,_26,_27){
var _28=this;
this.getPGNFromURL(url,_26);
if(this.foundResult){
_27=this.board.pollPGNMillisecondsPostResult;
this.foundResultPolls++;
}
if(this.foundResultPolls>=this.board.numberPollsAfterResult){
return;
}
setTimeout(function(){
_28.pollPGNFromURL(url,_26,_27);
},_27);
};
PGN.prototype.getPGNFromURL=function(url,_2a){
var _2b=(new Date()).getTime()+"-"+parseInt(Math.random()*99999);
YAHOO.util.Connect.asyncRequest("GET",url+"?rs="+_2b,{success:function(o){
if(this.currentPGNText==o.responseText){
return;
}
this.currentPGNText=o.responseText;
this.setupFromPGN(o.responseText,_2a);
},failure:function(o){
alert("pgn load failed:"+o.statusText+" for file:"+url);
},scope:this},"rs2="+_2b);
};
PGN.prototype.getMoveFromPGNMove=function(_2e,_2f,_30){
var _31=false;
var _32=false;
var _33=false;
var _34;
var _35=null;
var _36=false;
var _37=null;
if(_2e.charAt(_2e.length-1)=="#"){
_32=true;
_31=true;
_2e=_2e.substr(0,_2e.length-1);
}else{
if(_2e.charAt(_2e.length-1)=="+"){
_32=true;
if(_2e.length>1&&_2e.charAt(_2e.length-2)=="+"){
_31=true;
_2e=_2e.substr(0,_2e.length-2);
}else{
_2e=_2e.substr(0,_2e.length-1);
}
}
}
if(_2e=="O-O-O"){
if(_2f=="w"){
return this.board.createMoveFromString("e1c1");
}else{
return this.board.createMoveFromString("e8c8");
}
}else{
if(_2e=="O-O"){
if(_2f=="w"){
return this.board.createMoveFromString("e1g1");
}else{
return this.board.createMoveFromString("e8g8");
}
}
}
var _38=_2e.indexOf("=");
if(_38>=0){
var _39;
_35=_2e.substr(_38+1,1);
_39=_35.charAt(0);
_34=this.board.pieceCharToPieceNum(_39);
_33=true;
_2e=_2e.substr(0,_38);
}
var _3a=_2e.substr(_2e.length-2,2);
var _3b=_3a.charCodeAt(0)-"a".charCodeAt(0);
var _3c=_3a.charCodeAt(1)-"1".charCodeAt(0);
if(_3b>7||_3b<0||_3c>7||_3c<0){
this.lastMoveFromError=__js("Error processing to Square:{TO_SQUARE} on move:{MOVE}",[["TO_SQUARE",_3a],["MOVE",_2e]]);
return null;
}
if(_2e.length>2){
if(_2e.charAt(_2e.length-3)=="x"){
_36=true;
_37=_2e.substr(0,_2e.length-3);
}else{
_37=_2e.substr(0,_2e.length-2);
}
}
var _3d=new Array();
var _3e=0;
var _3f=null;
var _40=(_2f=="w")?ChessPiece.WHITE:ChessPiece.BLACK;
switch(_2e.charAt(0)){
case "K":
case "k":
_3f=ChessPiece.KING;
break;
case "Q":
case "q":
_3f=ChessPiece.QUEEN;
break;
case "R":
case "r":
_3f=ChessPiece.ROOK;
break;
case "B":
_3f=ChessPiece.BISHOP;
break;
case "N":
case "n":
_3f=ChessPiece.KNIGHT;
break;
case "P":
case "p":
_3f=ChessPiece.PAWN;
break;
default:
_3f=ChessPiece.PAWN;
}
var _41=null;
var _42=null;
if(_37){
var _43=_37.toLowerCase().charAt(0);
if(_43==_37.charAt(0)&&_43>="a"&&_43<="h"){
_42=_43;
if(_37.length==2){
_41=_37.charAt(1);
}
}else{
if(_37.length>1){
if(_37.length==2){
var c=_37.charAt(1);
if(c>="1"&&c<="8"){
_41=c;
}else{
_42=c;
}
}else{
if(_37.length==3){
_42=_37.charAt(1);
_41=_37.charAt(2);
if(_42>="1"&&_42<="9"){
var tmp=_42;
_42=_41;
_41=tmp;
}
}else{
this.lastMoveFromError=__js("Error: unhandled fromChars:{FROM_CHARS}",[["FROM_CHARS",_37]]);
return null;
}
}
}
}
}
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var bp=this.board.boardPieces[i][j];
if(bp!=null&&bp.colour==_40&&bp.piece==_3f){
if(this.board.canMove(bp,_3b,_3c,_30,true)){
var _49=String.fromCharCode("a".charCodeAt(0)+i).charAt(0);
var _4a=String.fromCharCode("1".charCodeAt(0)+j).charAt(0);
if((_42==null||_42==_49)&&(_41==null||_41==_4a)){
_3d[_3e++]=bp;
}else{
}
}
}
}
}
if(_3e==0){
this.lastMoveFromError=__js("no candidate pieces for:{MOVE}",[["MOVE",_2e]]);
return null;
}
if(_3e>1){
this.lastMoveFromError=__js("Ambiguous:{MOVE} with fromChars:{FROM_CHARS} disambigRow:{DISAMBIG_ROW} disambigCol:{DISAMBIG_COL}",[["MOVE",_2e],["FROM_CHARS",_37],["DISAMBIG_ROW",_41],["DISAMBIG_COL",_42]]);
return null;
}
var _4b=_3d[0];
var _4c="";
_4c+=String.fromCharCode("a".charCodeAt(0)+_4b.column);
_4c+=String.fromCharCode("1".charCodeAt(0)+_4b.row);
if(_36){
_4c+="x";
}
_4c+=_3a;
if(_35){
_4c+=_35;
}
var _4d=this.board.createMoveFromString(_4c);
return _4d;
};
PGN.prototype.parseTag=function(_4e,pgn,_50){
if(pgn.substr(_50,_4e.length+3)=="["+_4e+" \""){
var _51=pgn.indexOf("\"",_50+_4e.length+3);
if(_51>=0){
return pgn.substring(_50+_4e.length+3,_51);
}
}
return null;
};
PGN.prototype.parsePGN=function(pgn,_53,_54){
if(ctime){
console.time("parsePGN");
}
pgn=pgn.replace(/^\s+|\s+$/g,"");
var _55=0;
this.pgn=pgn;
var _56=new Array();
var _57=1;
var _58=0;
this.pgnGames=new Array();
this.finishedParseCallback=_53;
this.startParseTime=new Date().getTime();
var ret=this.parsePGN_cont(_56,_57,_58,_55,_54);
var _5a=new Object();
if(!ret){
_5a.parsedOk=true;
_5a.pgnGames=this.pgnGames;
}else{
_5a.parsedOk=false;
_5a.errorString=ret;
_5a.pgnGames=null;
}
if(ctime){
console.timeEnd("parsePGN");
}
return _5a;
};
PGN.prototype.parsePGN_cont=function(_5b,_5c,_5d,_5e,_5f){
var pgn=this.pgn;
var _61=this.board.boardName+"-progress";
var _62=YAHOO.util.Dom.get(_61);
while(_5e<pgn.length){
var _63="";
var _64="";
var _65="";
var _66="";
var _67="";
var _68="";
var _69="";
var _6a="w";
var _6b=0;
var _6c=0;
var _6d=new Array();
var _6e=0;
var _6f="";
var _70=null;
var _71=null;
var _72=new Array();
var _73=new Array();
var _74=new Array();
var _75=new Array();
var _76=new Array();
this.board.pieceMoveDisabled=true;
if(this.board.initialFen){
this.board.startFen=this.board.initialFen;
}else{
this.board.startFen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
}
var i=0;
for(i=_5e;i<pgn.length;i++){
var tag=this.parseTag("FEN",pgn,i);
if(tag&&tag!="?"){
this.board.startFen=tag;
}else{
tag=this.parseTag("White",pgn,i);
if(tag&&tag!="?"){
_69=tag;
}else{
tag=this.parseTag("Black",pgn,i);
if(tag&&tag!="?"){
_64=tag;
}else{
tag=this.parseTag("Result",pgn,i);
if(tag&&tag!="?"){
_63=tag;
}else{
tag=this.parseTag("Event",pgn,i);
if(tag&&tag!="?"){
_65=tag;
}else{
tag=this.parseTag("Site",pgn,i);
if(tag&&tag!="?"){
_66=tag;
}else{
tag=this.parseTag("Date",pgn,i);
if(tag&&tag!="?"){
_67=tag;
}else{
tag=this.parseTag("Round",pgn,i);
if(tag&&tag!="?"){
_68=tag;
}
}
}
}
}
}
}
}
if(pgn.charAt(i)=="["){
var j=pgn.indexOf;
for(j=i+1;j<pgn.length&&pgn.charAt(j)!="]";j++){
}
if(j==pgn.length){
var err=_js("PgnViewer: Error parsing PGN. Found unclosed [");
if(this.finishedParseCallback){
this.finishedParseCallback(_5f,err);
}
return err;
}
i=j-1;
continue;
}
if(pgn.charAt(i)=="{"){
var _7b=pgn.indexOf("}",i+1);
if(_7b>=0){
var _7c=pgn.substring(i+1,_7b);
i=_7b;
_6f+="{ "+_7c+" } ";
}else{
var err=_js("PgnViewer: Error parsing PGN. Found unclosed {");
if(this.finishedParseCallback){
this.finishedParseCallback(_5f,err);
}
return err;
}
continue;
}
if(pgn.substr(i,1)=="."){
var j=i-1;
while(j>=0&&pgn.charAt(j)>="0"&&pgn.charAt(j)<="9"){
j--;
}
j++;
if(pgn.charAt(j)>="0"&&pgn.charAt(j)<="9"){
_5c=parseInt(pgn.substring(j,i));
}
break;
}
}
if(pgn.substr(i,1)!="."){
}
this.board.setupFromFen(this.board.startFen,false,false,true,true);
_70=this.board.prev_move;
var _7d=i;
var _7e=null;
for(i=i;i<pgn.length;i++){
var _7f=-1;
if(pgn.substr(i,3)=="1-0"||pgn.substr(i,3)=="0-1"){
_7f=3;
}else{
if(pgn.substr(i,7)=="1/2-1/2"){
_7f=7;
}else{
if(pgn.substr(i,1)=="*"){
_7f=1;
}
}
}
if(_7f>0){
_7e=pgn.substr(i,_7f);
_5e=i+_7f;
break;
}
if(pgn.charAt(i)=="["){
_5e=i;
break;
}
if(pgn.charAt(i)==" "||pgn.charAt(i)=="\t"||pgn.charAt(i)=="\n"||pgn.charAt(i)=="\r"){
_7d=i+1;
continue;
}
if(pgn.charAt(i)>="0"&&pgn.charAt(i)<="9"){
continue;
}
if(pgn.charAt(i)=="."){
var _80=pgn.substring(_7d,i).replace(/^\s+|\s+$/g,"");
_7d=i;
while(i+1<pgn.length&&pgn.charAt(i+1)=="."){
i++;
}
if(_7d!=i){
_6a="b";
}else{
_6a="w";
}
_7d=i+1;
}else{
if(pgn.charAt(i)=="{"){
var _7b=pgn.indexOf("}",i+1);
if(_7b>=0){
var _7c=pgn.substring(i+1,_7b);
i=_7b;
_6f+="{ "+_7c+" } ";
}
_7d=i+1;
}else{
if(pgn.charAt(i)=="("){
_72[_6b]=this.board.boardPieces;
_73[_6b]=_6a;
_75[_6b]=_70;
_76[_6b]=_71;
this.board.boardPieces=_74[_6b];
this.board.boardPieces=this.board.copyBoardPieces(false);
_70=_71;
_6b++;
_7d=i+1;
_6f+="( ";
}else{
if(pgn.charAt(i)==")"){
boardPool.putObject(_72[_6b]);
_6b--;
this.board.boardPieces=_72[_6b];
_6a=_73[_6b];
_70=_75[_6b];
_71=_76[_6b];
_7d=i+1;
_6f+=") ";
}else{
if(pgn.charAt(i)=="$"){
var j;
for(j=i+1;j<pgn.length&&pgn.charAt(j)>="0"&&pgn.charAt(j)<="9";j++){
}
j--;
if(j>i){
var _81=parseInt(pgn.substr(i+1,j+1));
if(_81<=9){
switch(_81){
case 1:
_6f=_6f.substr(0,_6f.length-1)+"! ";
break;
case 2:
_6f=_6f.substr(0,_6f.length-1)+"? ";
break;
case 3:
_6f=_6f.substr(0,_6f.length-1)+"!! ";
break;
case 4:
_6f=_6f.substr(0,_6f.length-1)+"?? ";
break;
case 5:
_6f=_6f.substr(0,_6f.length-1)+"!? ";
break;
case 6:
_6f=_6f.substr(0,_6f.length-1)+"?! ";
break;
case 7:
case 8:
case 9:
case 0:
default:
}
}else{
_6f+=pgn.substring(i,j+1)+" ";
}
i=j;
}
continue;
}else{
var _82=-1;
for(var j=i+1;j<pgn.length;j++){
if(pgn.charAt(j)==")"||pgn.charAt(j)=="("||pgn.charAt(j)=="{"||pgn.charAt(j)=="}"||pgn.charAt(j)==" "||pgn.charAt(j)=="\t"||pgn.charAt(j)=="\n"||pgn.charAt(j)=="\r"){
_82=j;
break;
}
}
if(_82==-1){
_82=pgn.length;
}
var _83=_7d;
var _84=pgn.substring(_7d,_82).replace(/^\s+|\s+$/g,"");
_7d=_82;
i=_7d-1;
if(_84.length>=4&&_84.substring(0,4)=="e.p."){
continue;
}
if(_84.length==0){
var err=__js("PgnViewer: Error: got empty move endMoveInd:{ENDMOVE_INDEX} upto:{UPTO} from:{FROM}",[["ENDMOVE_INDEX",_82],["UPTO",_83],["FROM",pgn.substr(_83)]]);
if(this.finishedParseCallback){
this.finishedParseCallback(_5f,err);
}
return err;
}
var _85=_84.length-1;
while(_85>=0){
if(_84.charAt(_85)=="?"){
_85--;
}else{
if(_84.charAt(_85)=="!"){
_85--;
}else{
break;
}
}
}
var _86=_84.substring(0,_85+1);
var _87=this.getMoveFromPGNMove(_86,_6a,_70);
if(_87==null){
_6f+="unknown ";
var err=__js("PgnViewer: Error parsing:{MOVE}, {ERROR_REASON}",[["MOVE",_84],["ERROR_REASON",this.lastMoveFromError]]);
if(this.finishedParseCallback){
this.finishedParseCallback(_5f,err);
}
return err;
}
_71=_70;
_70=_87;
var _88=this.board.boardPieces[_87.fromColumn][_87.fromRow];
boardPool.putObject(_74[_6b]);
_74[_6b]=this.board.copyBoardPieces(false);
if(_88){
this.board.makeMove(_87,_88,false,0.5,false,false);
}
_6c=_6b;
_6e++;
_6a=this.board.flipToMove(_6a);
_6f+=_87.moveString+"|"+_84+" ";
}
}
}
}
}
}
if(_5e<i){
_5e=i;
}
var _89=pgn.indexOf("{",_5e);
var _8a=pgn.indexOf("[",_5e);
if(_89>=0){
if(_8a==-1||_89<_8a){
var _8b=pgn.indexOf("}",_89+1);
if(_8b>=0){
var _7c=pgn.substring(_89+1,_8b);
_5e=_8b+1;
_6f+="{ "+_7c+" } ";
}else{
var err=_js("PgnViewer: Error: Unclosed {");
if(this.finishedParseCallback){
this.finishedParseCallback(_5f,err);
}
return err;
}
}
}
_6f=_6f.replace(/^\s+|\s+$/g,"");
this.board.pieceMoveDisabled=false;
if(_7e!=null){
if(_63.length==0||_63=="?"){
_63=_7e;
}
}
this.pgnGames[_5d++]=new PGNGame(_6f,this.board.startFen,_64,_69,_63,_65,_66,_67,_68,_5c);
if(_62){
_62.innerHTML="Loaded "+_5d+" games";
}
if(this.finishedParseCallback&&new Date().getTime()-this.startParseTime>500){
this.startParseTime=new Date().getTime();
setTimeout("window._pvObject[\""+this.board.boardName+"\"].chessapp.pgn.parsePGN_cont(\""+_5b+"\",\""+_5c+"\",\""+_5d+"\",\""+_5e+"\",\""+_5f+"\");",0);
return;
}
}
if(this.finishedParseCallback){
this.finishedParseCallback(_5f);
}
return false;
};
PGN.prototype.setupFromPGN=function(pgn,_8d){
this.parsePGN(pgn,this.setupFromPGNCallback,_8d);
};
PGN.prototype.setupFromPGNCallback=function(_8e,err){
var _90=this.board.boardName+"-progress";
var _91=YAHOO.util.Dom.get(_90);
if(err){
alert(err);
return false;
}
if(this.pgnGames.length==0){
alert("PgnViewer: Error: Unable to find any pgn games in:"+pgn);
return false;
}
if(this.pgnGames.length==1){
var _92=0;
if(_8e){
_92=-1;
}
this.showGame(0,_92);
}else{
var _93=this.board.boardName+"-container";
var _94=YAHOO.util.Dom.get(_93);
var _95=YAHOO.util.Dom.get(this.board.boardName+"-problemSelector");
var _96=document.createElement("div");
var _97="<form id=\""+this.board.boardName+"-problemSelectorForm\" action=\"\" method=\"\">";
var _98="<select id=\""+this.board.boardName+"-problemSelector\" name=\""+this.board.boardName+"-problemSelector\" style=\"width: "+this.board.pieceSize*8+"px;\">";
var _99="";
for(i=0;i<this.pgnGames.length;i++){
var _9a=this.pgnGames[i];
var _9b=this.board.boardName+"-game-"+i;
var _9c=(i+1)+". "+_9a.whitePlayer+" vs "+_9a.blackPlayer;
if(_9a.pgn_result.length>0&&_9a.pgn_result!="?"&&this.board.showResult==1){
_9c+=" "+_9a.pgn_result;
}
if(_9a.event.length>0&&_9a.event!="?"&&this.board.showEvent==1){
_9c+=" "+_9a.event;
}
if(_9a.round.length>0&&_9a.round!="?"&&this.board.showRound==1){
_9c+=" Rnd:"+_9a.round;
}
if(_9a.site.length>0&&_9a.site!="?"&&this.board.showSite==1){
_9c+=" "+_9a.site;
}
if(_9a.date.length>0&&_9a.date!="?"&&this.board.showDate==1){
_9c+=" "+_9a.date;
}
var sel="";
if(i==this.lastShownGame){
sel="selected=\"\"";
}
_99+="<option "+sel+" id=\""+_9b+"\" value=\""+i+"\">"+_9c+"</option>";
}
if(_95){
if(this.board.selectorBody!=_99){
_95.innerHTML=_99;
this.board.selectorBody=_99;
}
}else{
_97+=_98+_99+"</select></form>";
_96.innerHTML=_97;
_94.insertBefore(_96,_94.firstChild);
this.board.selectorBody=_99;
}
var _95=YAHOO.util.Dom.get(this.board.boardName+"-problemSelector");
YAHOO.util.Event.addListener(_95,"change",this.selectGame,this,true);
var _92=0;
var _9e=0;
if(_8e){
_92=-1;
_9e=this.lastShownGame;
}
this.showGame(_9e,_92);
}
if(_91){
YAHOO.util.Dom.setStyle(_91,"visibility","hidden");
}
if(window._pvObject[this.board.boardName].finishedCallback){
window._pvObject[this.board.boardName].finishedCallback();
}
return;
};
PGN.prototype.selectGame=function(e){
var _a0=YAHOO.util.Event.getTarget(e).selectedIndex;
var _a1=0;
if(this.board.gotoEndOnRefresh){
_a1=-1;
}
this.showGame(_a0,_a1);
var _a2=this.board.boardName+"-piecestaken";
var _a3=YAHOO.util.Dom.get(_a2);
if(_a3){
_a3.innerHTML="";
}
this.board.resetMoveListScrollPosition();
};
PGN.prototype.showGame=function(_a4,_a5){
_a5=(typeof _a5=="undefined")?0:_a5;
var _a6=this.lastShownGame;
this.lastShownGame=_a4;
var _a7=this.board.moveArray;
var _a8=this.board.currentMove;
var _a9=false;
if(_a8&&_a8.atEnd){
_a9=true;
}
var _aa=this.pgnGames[_a4];
var _ab=_aa.pgn_result;
if(_ab&&(_ab=="1/2-1/2"||_ab=="0-1"||_ab=="1-0")){
this.foundResult=true;
}else{
this.foundResult=false;
this.foundResultPolls=0;
}
this.board.startFen=_aa.startFen;
this.board.setupFromFen(_aa.startFen,false,false,false);
this.board.setMoveSequence(_aa.movesseq,"NA",_aa.start_movenum,_aa.pgn_result);
var _ac=true;
var _ad=-1;
if(_a4==_a6&&_a9){
_ad=this.board.moveArray.length-1;
}
if(!Move.moveArraysEqual(_a7,this.board.moveArray)){
_ac=false;
}else{
var _ae=Move.findMoveInNewArray(_a7,this.board.moveArray,_a8);
if(_ae&&_ae.prev){
_ad=_ae.prev.index;
}
}
this.board.displayPendingMoveList();
if(this.board.moveArray.length>0){
this.board.setCurrentMove(this.board.moveArray[0]);
}
if(_ac){
if(_ad>0&&_ad<this.board.moveArray.length){
if(clog){
console.log("going to currMoveIndex:"+_ad);
}
this.board.gotoMoveIndex(_ad,false,true);
}else{
}
}else{
if(_a5==-1){
var _af=this.board.moveArray.length-1;
if(_af>=0){
this.board.gotoMoveIndex(_af,false,true);
}
}else{
if(_a5!=0){
this.board.gotoMoveIndex(_a5);
}
}
if(_a5!=-1&&this.board.autoplayFirst){
this.board.forwardMove();
}
}
this.board.displayMode=true;
var _b0=this.board.boardName;
var _b1=YAHOO.util.Dom.get(_b0+"-whitePlayer");
if(_b1){
_b1.innerHTML=_aa.whitePlayer;
}
var _b2=YAHOO.util.Dom.get(_b0+"-blackPlayer");
if(_b2){
_b2.innerHTML=_aa.blackPlayer;
}
var _b3=YAHOO.util.Dom.get(_b0+"-event");
if(_b3){
_b3.innerHTML=_aa.event;
}
var _b4=YAHOO.util.Dom.get(_b0+"-site");
if(_b4){
_b4.innerHTML=_aa.site;
}
var _b5=YAHOO.util.Dom.get(_b0+"-date");
if(_b5){
_b5.innerHTML=_aa.date;
}
var _b6=YAHOO.util.Dom.get(_b0+"-round");
if(_b6){
_b6.innerHTML=_aa.round;
}
if(clog){
if(this.board.currentMove){
console.log("after show game currentMove:"+this.board.currentMove.output());
}else{
console.log("after show game currentMove is null");
}
}
};

var SITE_VERSION=1;
var clog=false;
var ctime=false;
var cprof=false;
var move_obj_id_counter=0;
var activeBoard=null;
var boardSounds=new CTSound({soundPath:"/sounds"});
YAHOO.util.Event.onDOMReady(function(){
boardSounds.createSound("takesounds/78263__SuGu14__Metall01","takePiece1");
boardSounds.createSound("movesounds/77971__SuGu14__Fusta_0_05","movePiece3");
boardSounds.createSound("movesounds/10537__batchku__Hit_knuckle_15_004","movePiece7");
});
function isMouseOver(_1,e){
var el=YAHOO.util.Dom.get(_1);
if(!el){
return false;
}
var _4=YAHOO.util.Dom.getRegion(el);
if(!_4){
return false;
}
var _5=_4.top;
var _6=_4.left;
var _7=_4.bottom;
var _8=_4.right;
var _9=YAHOO.util.Event.getXY(e);
var mX=_9[0];
var mY=_9[1];
var _c=(mX>_6&&mX<_8&&mY>_5&&mY<_7);
}
function trimStr(_d){
if(!_d){
return "";
}
var _d=_d.replace(/^\s\s*/,"");
var ws=/\s/;
var i=_d.length;
while(ws.test(_d.charAt(--i))){
}
return _d.slice(0,i+1);
}
BoardConfig=function(){
this.boardName="board";
this.puzzle=false;
this.showToMoveIndicators=false;
this.scrollVariations=false;
this.pgnString=null;
this.pgnFile=null;
this.pollPGNMilliseconds=0;
this.pollPGNMillisecondsPostResult=30000;
this.numberPollsAfterResult=5;
this.gotoEndOnRefresh=false;
this.pieceSet="merida";
this.pieceSize=46;
this.isEndgame=false;
this.tr=false;
this.ie6FixCoordsOffsetSize=4;
this.allIeFixCoordsOffsetSize=0;
this.addVersion=true;
this.ml=9999;
this.r=false;
this.g=false;
this.canPasteFen=false;
this.makeActive=false;
this.avoidMouseoverActive=false;
this.autoScrollMoves=false;
this.moveAnimationLength=0.5;
this.showBracketsOnVariation=true;
this.hideBracketsOnTopLevelVariation=false;
this.variationStartString=" ( ";
this.variationEndString=" ) ";
this.ignoreCommentRegex=null;
this.newlineForEachMainMove=true;
this.useDivClearForNewline=false;
this.showNPS=false;
this.squareColorClass="";
this.pieceTakenSize=this.pieceSize;
this.pauseBetweenMoves=800;
this.pgnMode=false;
this.previewMode=false;
this.movesFormat="default";
this.boardImagePath="http://chesstempo.com";
this.showCoordinates=false;
this.highlightFromTo=false;
this.highlightValidSquares=false;
this.showResult=1;
this.showEvent=1;
this.showRound=1;
this.showSite=1;
this.showDate=1;
this.ignoreFlipping=false;
this.reverseFlip=false;
this.autoplayFirst=false;
this.dontOutputNavButtons=false;
this.dontCheckLeavingPage=false;
this.whiteMoveSoundName="movePiece3";
this.blackMoveSoundName="movePiece7";
this.whiteTakeSoundName="takePiece1";
this.blackTakeSoundName="takePiece1";
this.soundEnabled=false;
this.gamedb=false;
};
BoardConfig.prototype.applyConfig=function(_10){
for(var _11 in _10){
this[_11]=_10[_11];
}
};
ChessApp=function(_12){
this.displayMode=false;
this.config=_12;
this.board=null;
};
ChessApp.prototype.setDisplayMode=function(_13){
this.displayMode=_13;
};
ChessApp.prototype.setProblemNumber=function(_14,_15){
this.problemNumber=_14;
this.attId=_15;
};
ChessApp.prototype.init=function(us){
ChessPiece.init();
this.board=new Board(this.config.boardName);
this.board.moveArray=new Array();
if(!this.hideOnInit){
YAHOO.util.Dom.setStyle(this.config.boardName+"-container","display","block");
YAHOO.util.Dom.setStyle("toPlaySpan","display","inline");
}
this.tactics=(this.displayMode||this.config.pgnMode||this.config.previewMode||this.config.fenBoard)?null:new TacticsUI(this.board);
this.problem=(this.config.pgnMode||this.config.previewMode||this.config.fenBoard)?null:new ProblemUI(this.board,this.tactics);
this.board.tactics=this.tactics;
this.board.problem=this.problem;
this.board.puzzle=this.config.puzzle;
if(this.problem){
this.problem.autoPlayOpponent=1;
}
this.pgn=(this.config.pgnMode)?new PGN(this.board):null;
var _17=MovesDisplay.DEFAULT_DISPLAY_TYPE;
if(this.config.movesFormat=="main_on_own_line"){
_17=MovesDisplay.MAIN_ON_OWN_LINE;
}
this.movesDisplay=new MovesDisplay(this.board,_17);
this.movesDisplay.variationOnOwnLine=this.config.variationOnOwnLine;
this.board.movesDisplay=this.movesDisplay;
this.board.boardImagePath=this.config.boardImagePath;
this.board.showNPS=this.config.showNPS;
this.board.squareColorClass=this.config.squareColorClass;
this.board.tr=this.config.tr;
this.board.scrollToBoardTop=this.config.scrollToBoardTop;
this.board.ml=this.config.ml;
this.board.r=this.config.r;
this.board.g=this.config.g;
this.board.canPasteFen=this.config.canPasteFen;
this.board.addVersion=this.config.addVersion;
this.board.ie6FixCoordsOffsetSize=this.config.ie6FixCoordsOffsetSize;
this.board.allIeFixCoordsOffsetSize=this.config.allIeFixCoordsOffsetSize;
this.board.allowingFreeMovement=this.config.allowingFreeMovement;
this.board.autoScrollMoves=this.config.autoScrollMoves;
this.board.moveAnimationLength=this.config.moveAnimationLength;
this.board.showBracketsOnVariation=this.config.showBracketsOnVariation;
this.board.hideBracketsOnTopLevelVariation=this.config.hideBracketsOnTopLevelVariation;
this.board.variationStartString=this.config.variationStartString;
this.board.variationEndString=this.config.variationEndString;
this.board.ignoreCommentRegex=this.config.ignoreCommentRegex;
this.board.newlineForEachMainMove=this.config.newlineForEachMainMove;
this.board.useDivClearForNewline=this.config.useDivClearForNewline;
this.board.pieceSize=this.config.pieceSize;
this.board.showToMoveIndicators=this.config.showToMoveIndicators;
this.board.pollPGNMilliseconds=this.config.pollPGNMilliseconds;
this.board.pollPGNMillisecondsPostResult=this.config.pollPGNMillisecondsPostResult;
this.board.numberPollsAfterResult=this.config.numberPollsAfterResult;
this.board.gotoEndOnRefresh=this.config.gotoEndOnRefresh;
this.board.pieceTakenSize=this.config.pieceTakenSize;
this.board.pieceSet=this.config.pieceSet;
this.board.pauseBetweenMoves=this.config.pauseBetweenMoves;
this.board.showCoordinates=this.config.showCoordinates;
this.board.highlightFromTo=this.config.highlightFromTo;
this.board.highlightValidSquares=this.config.highlightValidSquares;
this.board.showDate=this.config.showDate;
this.board.showEvent=this.config.showEvent;
this.board.showGame=this.config.showGame;
this.board.showResult=this.config.showResult;
this.board.showRound=this.config.showRound;
this.board.showSite=this.config.showSite;
this.board.ignoreFlipping=this.config.ignoreFlipping;
this.board.reverseFlip=this.config.reverseFlip;
this.board.autoplayFirst=this.config.autoplayFirst;
this.board.scrollVariations=this.config.scrollVariations;
this.board.dontOutputNavButtons=this.config.dontOutputNavButtons;
this.board.avoidMouseoverActive=this.config.avoidMouseoverActive;
this.board.dontCheckLeavingPage=this.config.dontCheckLeavingPage;
this.board.whiteMoveSoundName=this.config.whiteMoveSoundName;
this.board.whiteTakeSoundName=this.config.whiteTakeSoundName;
this.board.blackMoveSoundName=this.config.blackMoveSoundName;
this.board.blackTakeSoundName=this.config.blackTakeSoundName;
this.board.soundEnabled=this.config.soundEnabled;
this.board.gamedb=this.config.gamedb;
if(this.config.makeActive){
activeBoard=this.board;
}
if(this.problem){
this.problem.isEndgame=this.config.isEndgame;
}
if(!this.board.puzzle&&typeof loginManager!="undefined"){
if(this.tactics){
loginManager.setLoginCallback(this.tactics.loginCallback,this.tactics);
loginManager.setLogoutCallback(this.tactics.logoutCallback,this.tactics);
}
if(this.problem){
loginManager.setSessionCallback(this.problem.sessionCallback,this.problem);
}
}
YAHOO.util.DragDropMgr.clickTimeThresh=50;
YAHOO.util.DragDropMgr.clickPixelThresh=1;
this.board.createBoardUI();
if(!this.board.puzzle){
if(this.problem){
this.problem.createProblemUI();
}
if(this.tactics){
this.tactics.initProblemCompleteOverlay();
}
if(this.problem){
this.problem.initLoadingOverlay();
}
if(this.config.pgnMode){
if(this.config.pgnFile){
this.pgn.getPGNFromURL(this.config.pgnFile,this.config.gotoEndOnRefresh);
if(this.config.pollPGNMilliseconds){
this.pgn.foundResult=false;
this.pgn.foundResultPolls=0;
this.pgn.pollPGNFromURL(this.config.pgnFile,this.config.gotoEndOnRefresh,this.config.pollPGNMilliseconds);
}
}else{
if(this.config.pgnString){
this.pgn.setupFromPGN(this.config.pgnString);
}
}
}else{
if(!this.board.dontCheckLeavingPage&&this.tactics){
YAHOO.util.Event.addListener(window,"beforeunload",this.tactics.checkLeavingPage,this.tactics,true);
YAHOO.util.Event.addListener(window,"unload",this.tactics.leavingPage,this.tactics,true);
this.tactics.updateSessionDisplay(0,0);
if(typeof showingStart!="undefined"&&showingStart){
var _18=this;
var _19="";
if(loggedIn){
if(this.config.isEndgame){
_19=_js("Endgame Problem Set")+": <span id=\"startProblemSetStr\">"+_js(startEndgameSetName)+"</span>";
}else{
_19=_js("Tactics Problem Set")+": <span id=\"startProblemSetStr\">"+_js(startTacticsSetName)+"</span>";
}
}
var _1a=new YAHOO.widget.SimpleDialog("starttacticdialog1",{width:"300px",fixedcenter:true,modal:false,visible:true,draggable:true,close:false,text:"<div style=\"color:black\">"+_19+"</div><br/>"+"<div style=\"color:black\">"+_js("Click start to begin solving problems")+"</div>",icon:YAHOO.widget.SimpleDialog.ICON_INFO,constraintoviewport:true,buttons:[{text:_js("Start"),handler:function(){
this.hide();
_18.problem.getProblem();
},isDefault:true}]});
var _1b=YAHOO.util.Dom.get("ctb-"+this.board.boardName);
_1a.render(document.body);
}else{
this.problem.getProblem();
}
}else{
if(this.problem){
if(this.problemNumber!=""){
YAHOO.util.Dom.setStyle("boardandmoves","display","block");
this.problem.getProblem(this.problemNumber,this.attId);
}
}
}
}
}
this.board.setupEventHandlers();
if(this.problem){
this.problem.setupEventHandlers();
}
if(this.tactics){
this.tactics.setupEventHandlers();
}
if(this.board.scrollToBoardTop){
var xy=YAHOO.util.Dom.getXY(this.board.boardName+"-boardBorder");
window.scrollTo(xy[0],xy[1]);
}
};
function clearClone(o){
if(o==null){
return;
}
for(prop in o){
if(typeof (o[prop])=="object"&&o[prop]!=null&&o[prop].alreadyCloned){
o[prop].alreadyCloned=false;
clearClone(o[prop]);
}
}
}
function cloneWork(o){
if(o==null){
return null;
}
var _1f=new Object();
for(prop in o){
if(typeof (o[prop])=="object"){
_1f[prop]=o[prop];
}else{
_1f[prop]=o[prop];
}
}
return _1f;
}
function clone(o){
return cloneWork(o);
}
get_image_str=function(_21,_22,_23,_24,_25){
var _26=".vers"+SITE_VERSION;
if(!_25){
_26="";
}
if(check_bad_msie()){
return _22+"/images/"+_23+"/"+_21+_24+_26+".png";
}else{
return _22+"/images/"+_23+"/"+_21+_24+_26+".png";
}
};
check_bad_msie=function(){
var _27=(window.ActiveXObject&&(typeof document.body.style.maxHeight=="undefined"));
return _27;
};
fix_ie_png=function(img){
if(!check_bad_msie()){
return;
}
var _29=(img.id)?"id='"+img.id+"' ":"";
var _2a=(img.className)?"class='"+img.className+"' ":"";
var _2b=(img.title)?"title='"+img.title+"' ":"title='"+img.alt+"' ";
var _2c="display:inline-block;"+img.style.cssText;
if(img.align=="left"){
_2c="float:left;"+_2c;
}
if(img.align=="right"){
_2c="float:right;"+_2c;
}
if(img.parentElement.href){
_2c="cursor:hand;"+_2c;
}
var _2d="<span "+_29+_2a+_2b+" style=\""+"width:"+img.width+"px; height:"+img.height+"px;"+_2c+";"+"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"+"(src='"+img.src+"', sizingMethod='image');\"></span>";
img.outerHTML=_2d;
};
Move=function(_2e,_2f,_30,_31,_32,_33,_34){
this.fromColumn=_2e;
this.fromRow=_2f;
this.toColumn=_30;
this.toRow=_31;
this.take=_32;
this.promotion=_33;
this.moveString=_34;
this.prev=null;
this.next=null;
this.numVars=0;
this.prevMoveEnpassant=false;
this.ravLevel=0;
this.atEnd=false;
this.obj_id=move_obj_id_counter++;
this.beforeComment="";
this.afterComment="";
};
Move.prototype.freeMove=function(){
if(this.taken){
this.taken=null;
}
if(this.vars&&this.vars.length>0){
var i=0;
for(var i=0;i<this.vars.length;i++){
this.vars[i].freeMove();
}
}
};
Move.prototype.clone=function(_36){
var _37=this.take;
if(_36&&_37){
_37=_37.makeLightWeight();
}
var _38=new Move(this.fromColumn,this.fromRow,this.toColumn,this.toRow,_37,this.promotion,this.moveString);
_38.moveNum=this.moveNum;
_38.atEnd=this.atEnd;
_38.beforeComment=this.beforeComment;
_38.afterComment=this.afterComment;
_38.prevMoveEnpassant=this.prevMoveEnpassant;
if(this.vars){
_38.vars=[];
var cnt=0;
for(var i=0;i<this.vars.length;i++){
_38.vars[i]=this.vars[i].clone(_36);
cnt++;
}
_38.numVars=cnt;
}
return _38;
};
Move.columnToChar=function(col){
var a=String.fromCharCode("a".charCodeAt(0)+col);
return a;
};
Move.prototype.output=function(){
return Move.columnToChar(this.fromColumn)+""+(this.fromRow+1)+":"+Move.columnToChar(this.toColumn)+""+(this.toRow+1)+" prom:"+this.promotion+" objid:"+this.obj_id+" dummy:"+this.dummy+" endNode:"+this.endNode+" index:"+this.index+" moveNum:"+this.moveNum+" atEnd:"+this.atEnd+" beforeCom:"+this.beforeComment+" afterCom:"+this.afterComment;
};
Move.prototype.equals=function(m){
return (m&&(this.fromColumn==m.fromColumn&&this.fromRow==m.fromRow&&this.promotion==m.promotion&&this.toColumn==m.toColumn&&this.toRow==m.toRow));
};
Move.moveArraysEqual=function(a1,a2){
if(a1==a2){
return true;
}
if(a1==null||a2==null){
return false;
}
if(a1.length!=a2.length){
return false;
}
for(var i=0;i<a1.length;i++){
if(!a1[i].equals(a2[i])){
return false;
}
if(!Move.moveArraysEqual(a1[i].vars,a2[i].vars)){
return false;
}
}
return true;
};
Move.findMoveInNewArray=function(a1,a2,_43){
if(a1==a2){
return _43;
}
if(a1==null||a2==null){
return null;
}
if(a1.length!=a2.length){
return null;
}
for(var i=0;i<a1.length;i++){
if(!a1[i].equals(a2[i])){
return null;
}
if(!Move.moveArraysEqual(a1[i].vars,a2[i].vars)){
return null;
}
if(a1[i]==_43){
return a2[i];
}
}
return null;
};
Move.prototype.toMoveString=function(){
var _45="";
if(this.promotion){
_45=this.promotion;
}
return Move.columnToChar(this.fromColumn)+""+(this.fromRow+1)+Move.columnToChar(this.toColumn)+""+(this.toRow+1)+_45;
};
function getTagValue(_46,_47){
var _48=_46.getElementsByTagName(_47);
if(_48==null){
YAHOO.log("got null node for tag:"+_47);
return null;
}
if(_48.length==0){
YAHOO.log("got empty array node for tag:"+_47);
return null;
}
if(_48[0].firstChild==null){
YAHOO.log("firstChild is null for tag:"+_47);
return null;
}
if(_48[0].firstChild.nodeValue==null){
YAHOO.log("firstChild.nodeValue is null for tag:"+_47);
return null;
}
if(typeof (_48[0].textContent)!="undefined"){
return _48[0].textContent;
}
return _48[0].firstChild.nodeValue;
}
var ua=navigator.userAgent.toLowerCase();
var isOpera=(ua.indexOf("opera")>-1);
var isIphone=(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i));
var isIpad=(navigator.userAgent.match(/iPad/i));
var isSafari=(ua.indexOf("safari")>-1);
var isGecko=(!isOpera&&!isSafari&&ua.indexOf("gecko")>-1);
var isIE=(!isOpera&&ua.indexOf("msie")>-1);
function unescapeHtml(s){
var n=document.createElement("div");
n.innerHTML=s;
if(n.innerText){
return n.innerText;
}else{
return n.textContent;
}
}
ChessPiece=function(div,_4c,_4d,_4e){
var id=div.id;
this.board=_4e;
this.icon=get_image_str(ChessPiece.pieceIconNames[_4c][_4d],this.board.boardImagePath,this.board.pieceSet,this.board.pieceSize,this.board.addVersion);
this.colour=_4c;
this.piece=_4d;
this.id=id;
this.div=div;
var _50=_4e.getPieceDragDiv();
var _51=false;
var _52="";
if(_50==null){
_50=document.createElement("div");
_50.id="pieceDragDiv";
_51=true;
YAHOO.util.Dom.setStyle(_50,"visibility","hidden");
YAHOO.util.Dom.setStyle(_50,"border","0px");
YAHOO.util.Dom.setStyle(_50,"position","absolute");
}
this.pieceDragEl=_50;
this.pieceDragElId="pieceDragDiv";
if(_51){
var _53=this.board.getDocBody();
if(_53){
_53.appendChild(_50);
}
}
if(YAHOO.util.Event.isIE||isOpera){
var _54=this.div;
_54.innerHTML="<img src=\""+this.icon+"\"/>";
var img=_54.firstChild;
fix_ie_png(img);
}else{
YAHOO.util.Dom.setStyle([this.div],"backgroundImage","url("+this.icon+")");
}
YAHOO.util.Dom.setStyle([this.div],"height",this.board.pieceSize+"px");
YAHOO.util.Dom.setStyle([this.div],"width",this.board.pieceSize+"px");
if(isIphone||isIpad){
initIphone(this.div);
}
YAHOO.util.Dom.setStyle([this.div],"position","relative");
this.init(id,"ct-"+this.board.boardName+"-boardandpieces",{dragElId:this.pieceDragElId,resizeFrame:true,centerFrame:true,isTarget:false});
this.initFrame();
};
ChessPiece.prototype=new YAHOO.util.DDProxy();
ChessPiece.init=function(){
ChessPiece.PAWN=0;
ChessPiece.BISHOP=1;

ChessPiece.KNIGHT=2;
ChessPiece.ROOK=3;
ChessPiece.KING=4;
ChessPiece.QUEEN=5;
ChessPiece.WHITE=0;
ChessPiece.BLACK=1;
ChessPiece.pieceIconNames=new Array(2);
ChessPiece.pieceIconNames[0]=new Array(6);
ChessPiece.pieceIconNames[1]=new Array(6);
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.PAWN]="whitepawn";
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.BISHOP]="whitebishop";
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.KNIGHT]="whiteknight";
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.ROOK]="whiterook";
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.KING]="whiteking";
ChessPiece.pieceIconNames[ChessPiece.WHITE][ChessPiece.QUEEN]="whitequeen";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.PAWN]="blackpawn";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.BISHOP]="blackbishop";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.KNIGHT]="blackknight";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.ROOK]="blackrook";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.KING]="blackking";
ChessPiece.pieceIconNames[ChessPiece.BLACK][ChessPiece.QUEEN]="blackqueen";
};
ChessPiece.materialValue=function(_56){
switch(_56){
case ChessPiece.PAWN:
return 1;
break;
case ChessPiece.BISHOP:
return 3;
break;
case ChessPiece.KNIGHT:
return 3;
break;
case ChessPiece.ROOK:
return 5;
break;
case ChessPiece.KING:
return 0;
break;
case ChessPiece.QUEEN:
return 9;
break;
}
return 0;
};
ChessPiece.prototype.oldIsValidHandleChild=ChessPiece.prototype.isValidHandleChild;
ChessPiece.prototype.oldStartDrag=ChessPiece.prototype.startDrag;
ChessPiece.prototype.free=function(){
this.unreg();
};
ChessPiece.prototype.isValidHandleChild=function(_57){
if(this.board.dragDisabled){
return false;
}
if(this.board.toMove!=this.colour){
return false;
}
return this.oldIsValidHandleChild(_57);
};
ChessPiece.prototype.onDragOut=function(e,id){
this.insideBoard=false;
};
ChessPiece.prototype.onDragEnter=function(e,id){
this.insideBoard=true;
};
ChessPiece.prototype.makeLightWeight=function(){
var cp=this.board.createPiece(this.colour,this.piece,true);
cp.column=this.column;
cp.row=this.row;
cp.enPassant=this.enPassant;
cp.castled=this.castled;
return cp;
};
ChessPiece.prototype.endDrag=function(e){
if(this.board.lastOverSquare){
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-valid-square");
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-invalid-square");
}
this.board.lastOverSquare=null;
if(!this.insideBoard){
this.board.board_xy=null;
this.setPosition(this.column,this.row,false,null,this.board.moveAnimationLength);
}
YAHOO.util.Dom.setStyle(this.getEl(),"visibility","visible");
};
ChessPiece.prototype.startDrag=function(x,y){
this.insideBoard=true;
var _60=null;
if(this.board.currentMove){
if(this.board.currentMove.prev){
_60=this.board.currentMove.prev;
}else{
_60=this.board.prev_move;
}
}else{
_60=this.board.prev_move;
}
if(this.board.highlightValidSquares){
this.candidates=null;
this.candidates=new Array(8);
for(var i=0;i<8;i++){
this.candidates[i]=new Array(8);
for(var j=0;j<8;j++){
this.candidates[i][j]=false;
}
}
}
this.pieceDragEl.innerHTML="<img src=\""+this.icon+"\"/>";
var img=this.pieceDragEl.firstChild;
fix_ie_png(img);
YAHOO.util.Dom.setStyle(this.pieceDragEl,"zIndex",1000);
YAHOO.util.Dom.setStyle(this.pieceDragEl,"height",this.board.pieceSize+"px");
YAHOO.util.Dom.setStyle(this.pieceDragEl,"width",this.board.pieceSize+"px");
YAHOO.util.Dom.setStyle(this.getEl(),"visibility","hidden");
if(this.board.highlightValidSquares){
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var _64=7-i;
var _65=j;
if(this.board.isFlipped){
_64=7-_64;
_65=7-_65;
}
if((_64==this.row&&_65==this.column)||this.board.canMove(this.makeLightWeight(),_65,_64,_60,true)){
this.candidates[j][i]=true;
}
}
}
}
};
ChessPiece.prototype.onDragOver=function(e,id){
var x=YAHOO.util.Event.getPageX(e);
var y=YAHOO.util.Event.getPageY(e);
var _6a=YAHOO.util.Dom.getX("ctb-"+this.board.boardName);
var _6b=YAHOO.util.Dom.getY("ctb-"+this.board.boardName);
var c=parseInt((x-_6a)/this.board.pieceSize);
var r=parseInt((y-_6b)/this.board.pieceSize);
var _6e=this.board.boardName+"-s"+c+""+(7-r);
var _6f=YAHOO.util.Dom.get(_6e);
if(this.board.highlightValidSquares){
if(this.board.lastOverSquare){
if(this.board.lastOverSquare!=_6f){
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-valid-square");
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-invalid-square");
this.board.lastOverSquare=null;
if(this.candidates&&c<8&&c>=0&&r<8&&r>=0&&this.candidates[c][r]){
YAHOO.util.Dom.addClass(_6f,"ct-over-valid-square");
}else{
YAHOO.util.Dom.addClass(_6f,"ct-over-invalid-square");
}
}
}
this.board.lastOverSquare=_6f;
}
};
ChessPiece.prototype.onDragDrop=function(e,id){
if(this.board.blockFowardBack||this.board.deferredBlockForwardBack){
return false;
}
if(this.board.lastOverSquare){
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-valid-square");
YAHOO.util.Dom.removeClass(this.board.lastOverSquare,"ct-over-invalid-square");
}
var x=YAHOO.util.Event.getPageX(e);
var y=YAHOO.util.Event.getPageY(e);
var _74=YAHOO.util.Dom.getX("ctb-"+this.board.boardName);
var _75=YAHOO.util.Dom.getY("ctb-"+this.board.boardName);
var c=parseInt((x-_74)/this.board.pieceSize);
var r=parseInt((y-_75)/this.board.pieceSize);
if(this.board.isFlipped){
r=7-r;
c=7-c;
}
var _78=false;
if(!this.board.currentMove||this.board.currentMove.atEnd){
_78=true;
}
this.board.updatePiece(this,c,7-r,false,false,true);
if(!_78&&this.board.currentMove&&!this.board.allowingFreeMovement&&this.board.currentMove.atEnd){
this.board.toggleToMove();
this.board.updateToPlay();
}
};
ChessPiece.prototype.removeFromParent=function(){
var _79=this.div;
if(_79.parentNode){
_79.parentNode.removeChild(_79);
}
};
ChessPiece.prototype.setVisible=function(_7a){
var _7b;
var _7c;
if(_7a){
_7c="block";
_7b="visible";
}else{
_7c="none";
_7b="hidden";
}
YAHOO.util.Dom.setStyle(this.id,"visibility",_7b);
};
ChessPiece.prototype.moveResponse=function(o){
};
ChessPiece.prototype.getIcon=function(){
return this.icon;
};
ChessPiece.prototype.makeHeavyWeight=function(){
return this.copyPiece();
};
ChessPiece.prototype.copyPiece=function(){
var cp=new ChessPiece(this.div,this.colour,this.piece,this.board);
cp.column=this.column;
cp.row=this.row;
cp.enPassant=this.enPassant;
cp.castled=this.castled;
return cp;
};
ChessPiece.prototype.changePieceKeepImage=function(_7f){
var _80=(_7f+"").toLowerCase().charAt(0);
switch(_80){
case "k":
this.piece=ChessPiece.KING;
break;
case "q":
this.piece=ChessPiece.QUEEN;
break;
case "r":
this.piece=ChessPiece.ROOK;
break;
case "b":
this.piece=ChessPiece.BISHOP;
break;
case "n":
this.piece=ChessPiece.KNIGHT;
break;
case "p":
this.piece=ChessPiece.PAWN;
break;
default:
}
};
ChessPiece.prototype.changePiece=function(_81){
this.changePieceKeepImage(_81);
this.icon=get_image_str(ChessPiece.pieceIconNames[this.colour][this.piece],this.board.boardImagePath,this.board.pieceSet,this.board.pieceSize,this.board.addVersion);
if(YAHOO.util.Event.isIE||isOpera){
var _82=this.div;
_82.innerHTML="<img src=\""+this.icon+"\"/>";
var img=_82.firstChild;
if(!isOpera){
fix_ie_png(img);
}
}else{
YAHOO.util.Dom.setStyle(this.div,"backgroundImage","url("+this.icon+")");
YAHOO.util.Dom.setStyle(this.div,"background-repeat","no-repeat");
}
};
ChessPiece.prototype.getNewXYPosition=function(_84,row){
var _86=this.board.getBoardDiv();
var _87=this.board.getXY();
var _88=_87[0];
var _89=_87[1];
var _8a=[0,0];
if(this.board.isFlipped){
_8a[0]=_88+((7-_84)*this.board.pieceSize);
_8a[1]=_89+((row)*this.board.pieceSize);
}else{
_8a[0]=_88+((_84)*this.board.pieceSize);
_8a[1]=_89+((7-row)*this.board.pieceSize);
}
return _8a;
};
ChessPiece.prototype.setPosition=function(_8b,row,_8d,_8e,_8f,_90,_91){
this.column=_8b;
this.row=row;
if(this.board.pieceMoveDisabled){
return;
}
var _92=this.div;
var _93=null;
if(this.board.isFlipped){
_93=this.board.boardName+"-s"+(7-this.column)+""+(7-this.row);
}else{
_93=this.board.boardName+"-s"+(this.column)+""+(this.row);
}
var _94=this.board.getBoardDivFromId(_93);
var _95=null;
if(!_90){
_95=(this.colour==ChessPiece.WHITE)?this.board.whiteMoveSoundName:this.board.blackMoveSoundName;
}else{
_95=(this.colour==ChessPiece.WHITE)?this.board.whiteTakeSoundName:this.board.blackTakeSoundName;
}
if(!_8d){
if(!this.board.settingUpPosition){
var _96=this.getNewXYPosition(_8b,row);
YAHOO.util.Dom.setXY(_92,_96,false);
}else{
if(_92.parentNode){
_92.parentNode.removeChild(_92);
}
_94.appendChild(_92);
}
this.setVisible(true);
if(_91&&this.board.soundEnabled){
boardSounds.playSound(_95);
}
if(_8e){
_8e();
}
}else{
var _96=this.getNewXYPosition(_8b,row);
if(this.board.oldAnim&&this.board.oldAnim.isAnimated()){
this.board.oldAnim.stop();
YAHOO.util.Dom.setXY(this.board.oldAnimPieceDiv,this.board.old_new_xy,false);
}
var _97=new YAHOO.util.Motion(_92,{points:{to:_96}});
this.board.oldAnim=_97;
this.board.oldAnimPieceDiv=_92;
this.board.old_new_xy=_96;
_97.duration=_8f;
var _98=this;
_97.onComplete.subscribe(function(){
if(_98.board.soundEnabled){
boardSounds.playSound(_95);
}
});
if(_8e){
_97.onComplete.subscribe(_8e);
}
_97.animate();
}
};
ChessPiece.prototype.getFenLetter=function(){
var _99=ChessPiece.pieceTypeToChar(this.piece)+"";
if(this.colour!=ChessPiece.WHITE){
_99=_99.toLowerCase();
}
return _99;
};
ChessPiece.pieceTypeToChar=function(_9a){
switch(_9a){
case ChessPiece.KING:
return "K";
case ChessPiece.QUEEN:
return "Q";
case ChessPiece.ROOK:
return "R";
case ChessPiece.BISHOP:
return "B";
case ChessPiece.KNIGHT:
return "N";
case ChessPiece.PAWN:
return "P";
}
return "?";
};
LightweightChessPiece=function(div,_9c,_9d,_9e){
this.board=_9e;
this.colour=_9c;
this.piece=_9d;
this.div=div;
};
LightweightChessPiece.prototype.getFenLetter=ChessPiece.prototype.getFenLetter;
LightweightChessPiece.prototype.makeLightWeight=function(){
return this.copyPiece();
};
LightweightChessPiece.prototype.makeHeavyWeight=function(){
var cp=this.board.createPiece(this.colour,this.piece,false);
cp.column=this.column;
cp.row=this.row;
cp.enPassant=this.enPassant;
cp.castled=this.castled;
return cp;
};
LightweightChessPiece.prototype.setVisible=function(_a0){
};
LightweightChessPiece.prototype.free=function(){
};
LightweightChessPiece.prototype.setPosition=function(_a1,row,_a3,_a4,_a5){
this.column=_a1;
this.row=row;
};
LightweightChessPiece.prototype.copyPiece=function(){
var cp=new LightweightChessPiece(this.id,this.colour,this.piece,this.board);
cp.column=this.column;
cp.row=this.row;
return cp;
};
LightweightChessPiece.prototype.changePiece=function(_a7){
this.changePieceKeepImage(_a7);
};
LightweightChessPiece.prototype.changePieceKeepImage=function(_a8){
var _a9=(_a8+"").toLowerCase().charAt(0);
switch(_a9){
case "k":
this.piece=ChessPiece.KING;
break;
case "q":
this.piece=ChessPiece.QUEEN;
break;
case "r":
this.piece=ChessPiece.ROOK;
break;
case "b":
this.piece=ChessPiece.BISHOP;
break;
case "n":
this.piece=ChessPiece.KNIGHT;
break;
case "p":
this.piece=ChessPiece.PAWN;
break;
default:
}
};
MovesDisplay=function(_aa,_ab){
this.board=_aa;
this.displayType=_ab;
};
MovesDisplay.DEFAULT_DISPLAY_TYPE=0;
MovesDisplay.MAIN_ON_OWN_LINE=1;
Board=function(_ac){
this.boardName=_ac;
if(_ac){
this.initTarget("ctb-"+_ac,"ct-"+this.boardName+"-boardandpieces");
this.boardPieces=Board.createBoardArray();
}
this.currentMove=null;
this.moveIndex=-1;
this.settingUpPosition=false;
this.pendingLevelZeroCommentaryClose=false;
this.isUserFlipped=false;
this.registeredForwardAtEndListeners=[];
this.registeredPasteFenClickedListeners=[];
this.registeredGotoMoveIndexListeners=[];
this.registeredBackMovePreCurrentListeners=[];
this.registeredForwardMovePostUpdateListeners=[];
this.registeredUpdateListeners=[];
this.registeredUpdatePieceFinishedListeners=[];
this.registeredUpdateEndOfMovesListeners=[];
this.registeredUpdateHaveAltListeners=[];
this.registeredUpdateWrongMoveListeners=[];
this.registeredUpdateAllowMoveListeners=[];
this.moveNumber=1;
this.halfMoveNumber=0;
};
Board.prototype=new YAHOO.util.DDTarget();
Board.invertToMove=function(_ad){
if(_ad==ChessPiece.WHITE){
return ChessPiece.BLACK;
}else{
return ChessPiece.WHITE;
}
};
Board.boardStyleToClassName=function(_ae){
var _af="";
switch(_ae){
case 0:
_af="-lightgrey";
break;
case 1:
_af="-grey";
break;
case 2:
_af="-brown";
break;
case 3:
_af="-green";
break;
case 4:
_af="-woodlight";
break;
case 5:
_af="-wooddark";
break;
case 6:
_af="-metal";
break;
case 7:
_af="-marblebrown";
break;
case 8:
_af="-stucco";
break;
case 9:
_af="-goldsilver";
break;
case 10:
_af="-sandsnow";
break;
case 11:
_af="-crackedstone";
break;
case 12:
_af="-granite";
break;
case 13:
_af="-marblegreen";
break;
case 14:
_af="-greenwhite";
break;
default:
}
return _af;
};
Board.createBoardArray=function(){
var _b0=boardPool.getObject();
if(_b0==null){
_b0=new Array(8);
for(var i=0;i<8;i++){
_b0[i]=new Array(8);
}
}
return _b0;
};
Board.prototype.toggleToMove=function(){
if(this.toMove==ChessPiece.WHITE){
this.toMove=ChessPiece.BLACK;
}else{
this.toMove=ChessPiece.WHITE;
}
};
Board.prototype.setupPieceDivs=function(){
var _b2=this.getBoardDiv();
if(this.availPieceDivs){
for(var i=0;i<32;i++){
if(this.availPieceDivs[i]){
if(this.availPieceDivs[i].parentNode){
this.availPieceDivs[i].parentNode.removeChild(this.availPieceDivs[i]);
}
}
}
}
if(this.pieces){
for(var i=0;i<32;i++){
if(this.pieces[i]){
this.pieces[i].setVisible(false);
this.pieces[i].free();
this.pieces[i]=null;
}
}
}
this.availids=null;
this.availIds=new Array(32);
this.availPieceDivs=null;
this.availPieceDivs=new Array(32);
this.pieces=null;
this.pieces=new Array(32);
this.uptoId=0;
this.uptoPiece=0;
};
Board.prototype.getXY=function(){
if(true||!this.board_xy){
this.board_xy=YAHOO.util.Dom.getXY("ctb-"+this.boardName);
}
return this.board_xy;
};
Board.prototype.updateFromTo=function(_b4,_b5,_b6,_b7,_b8,_b9){
YAHOO.util.Dom.removeClass(this.lastFromSquare,"ct-from-square");
YAHOO.util.Dom.removeClass(this.lastToSquare,"ct-to-square");
if(_b6==null){
return;
}
this.lastFromSquare=_b4;
this.lastToSquare=_b5;
this.lastFromRow=_b6;
this.lastFromColumn=_b7;
this.lastToRow=_b8;
this.lastToColumn=_b9;
if(this.highlightFromTo){
YAHOO.util.Dom.addClass(_b4,"ct-from-square");
YAHOO.util.Dom.addClass(_b5,"ct-to-square");
}
};
Board.prototype.makeMove=function(_ba,_bb,_bc,_bd,_be,_bf,_c0,_c1,_c2){
var _c3;
var _c4;
if(!this.isFlipped){
_c3=YAHOO.util.Dom.get(this.boardName+"-s"+_ba.fromColumn+""+_ba.fromRow);
_c4=YAHOO.util.Dom.get(this.boardName+"-s"+_ba.toColumn+""+_ba.toRow);
}else{
_c3=YAHOO.util.Dom.get(this.boardName+"-s"+(7-_ba.fromColumn)+""+(7-_ba.fromRow));
_c4=YAHOO.util.Dom.get(this.boardName+"-s"+(7-_ba.toColumn)+""+(7-_ba.toRow));
}
if(_bf){
this.updateFromTo(_c3,_c4,_ba.fromRow,_ba.fromColumn,_ba.toRow,_ba.toColumn);
}
var _c5=this.boardPieces[_ba.toColumn][_ba.toRow];
if(_c5!=null){
_c5.enPassant=false;
_c5.castled=false;
}
if(_bb.piece==ChessPiece.PAWN&&_ba.toColumn!=_ba.fromColumn&&this.boardPieces[_ba.toColumn][_ba.toRow]==null){
_c5=this.boardPieces[_ba.toColumn][_ba.fromRow];
this.boardPieces[_ba.toColumn][_ba.fromRow]=null;
if(_c5!=null){
_c5.enPassant=true;
}
}
var _c6=null;
if(_bb.piece==ChessPiece.KING&&Math.abs(_ba.toColumn-_ba.fromColumn)>1){
var _c7;
var _c8;
if(_ba.toColumn>_ba.fromColumn){
_c6=this.boardPieces[7][_ba.fromRow];
_c7=_ba.fromRow;
_c8=5;
this.boardPieces[7][_ba.toRow]=null;
}else{
_c6=this.boardPieces[0][_ba.fromRow];
_c7=_ba.fromRow;
_c8=3;
this.boardPieces[0][_ba.toRow]=null;
}
if(!_c6){
alert("No castle piece");
}else{
_c6.setPosition(_c8,_c7,_bc,null,_bd,null,_c2);
this.boardPieces[_c6.column][_c6.row]=_c6;
_c6.castled=true;
}
}
_ba.taken=_c5;
if(_c5&&_be){
this.processTaken(_c5,true);
}
this.moveNumber++;
this.board_xy=null;
if(_ba.promotion!=null){
_bb.changePieceKeepImage(_ba.promotion);
}
_bb.setPosition(_ba.toColumn,_ba.toRow,_bc,function(){
var tp=_c5;
if(tp){
tp.setVisible(false);
}
if(_ba.promotion!=null){
_bb.changePiece(_ba.promotion);
}
if(_c0){
_c0.call(_c1);
}
},_bd,_c5,_c2);
if(!_bc){
if(_ba.promotion!=null){
_bb.changePiece(_ba.promotion);
}
}
this.boardPieces[_ba.fromColumn][_ba.fromRow]=null;
this.boardPieces[_ba.toColumn][_ba.toRow]=_bb;
if(_c6!=null){
_ba.taken=_c6;
}
_ba.preCastleQueenSide=new Array(2);
_ba.preCastleKingSide=new Array(2);
_ba.preCastleQueenSide[0]=this.canCastleQueenSide[0];
_ba.preCastleQueenSide[1]=this.canCastleQueenSide[1];
_ba.preCastleKingSide[0]=this.canCastleKingSide[0];
_ba.preCastleKingSide[1]=this.canCastleKingSide[1];
if(_bb.piece==ChessPiece.ROOK){
if(_ba.fromColumn==0){
this.canCastleQueenSide[_bb.colour]=false;
}else{
if(_ba.fromColumn==7){
this.canCastleKingSide[_bb.colour]=false;
}
}
}else{
if(_bb.piece==ChessPiece.KING){
this.canCastleQueenSide[_bb.colour]=false;
this.canCastleKingSide[_bb.colour]=false;
}
}
};
Board.prototype.promptPromotion=function(_ca,col,row,_cd,_ce){
_ca.prePromotionColumn=_ca.column;
_ca.prePromotionRow=_ca.row;
_ca.setPosition(col,row,false,null,this.moveAnimationLength);
var _cf=this;
var _d0=new YAHOO.widget.Dialog("promotionDialogId",{width:"300px",fixedcenter:true,visible:true,modal:true,close:false,constraintoviewport:true,buttons:[{text:_js("Queen"),handler:function(){
_d0.hide();
_cf.updatePiece(_ca,col,row,_cd,_ce,false,"q");
},isDefault:true},{text:_js("Rook"),handler:function(){
_d0.hide();
_cf.updatePiece(_ca,col,row,_cd,_ce,false,"r");
},isDefault:false},{text:_js("Bishop"),handler:function(){
_d0.hide();
_cf.updatePiece(_ca,col,row,_cd,_ce,false,"b");
},isDefault:false},{text:_js("Knight"),handler:function(){
_d0.hide();
_cf.updatePiece(_ca,col,row,_cd,_ce,false,"n");
},isDefault:false}]});
_d0.setHeader(_js("Select Promotion Piece"));
_d0.setBody("<div></div>");
_d0.render(document.body);
};
Board.moveToLocale=function(_d1){
if(!_d1||_d1==""){
return _d1;
}
var _d2="";
for(var i=0;i<_d1.length;i++){
var _d4=_d1.charAt(i);
switch(_d4){
case "K":
_d4=_js("K");
break;
case "Q":
_d4=_js("Q");
break;
case "R":
_d4=_js("R");
break;
case "N":
_d4=_js("N");
break;
case "B":
_d4=_js("B");
break;
case "P":
_d4=_js("P");
break;
case "a":
_d4=_js("a");
break;
case "b":
_d4=_js("b");
break;
case "c":
_d4=_js("c");
break;
case "d":
_d4=_js("d");
break;
case "e":
_d4=_js("e");
break;
case "f":
_d4=_js("f");
break;
case "g":
_d4=_js("g");
break;
case "h":
_d4=_js("h");
break;
case "x":
_d4=_js("x");
break;
case "#":
_d4=_js("#");
break;
}
_d2+=_d4;
}
return _d2;
};
Board.prototype.updatePiece=function(_d5,col,row,_d8,_d9,_da,_db,_dc){
if(_db){
this.board_xy=null;
if(_d5.prePromotionRow){
_d5.row=_d5.prePromotionRow;
_d5.column=_d5.prePromotionColumn;
}
}
if(_db==null&&_d5.column==col&&_d5.row==row){
this.board_xy=null;
_d5.setPosition(_d5.column,_d5.row,false,null,this.moveAnimationLength);
if(clog){
console.log("moved piece back to its orig position");
}
return;
}
var _dd=null;
if(this.currentMove){
if(this.currentMove.prev){
_dd=this.currentMove.prev;
}else{
_dd=this.prev_move;
}
}else{
_dd=this.prev_move;
}
if(clog){
if(this.currentMove){
console.log("updatepiece currentMove:"+this.currentMove.output());
}else{
console.log("updatepiece currentmove null");
}
}
if(!_d8&&!this.canMove(_d5.makeLightWeight(),col,row,_dd,true)){
this.board_xy=null;
_d5.setPosition(_d5.column,_d5.row,false,null,0.5);
if(clog){
console.log("move not legal , move back to orig:"+this.toMove);
if(_dd){
console.log("prevMove was:"+_dd.output());
}else{
console.log("prevMove was null");
}
}
return;
}
var _de="";
if(_da&&_d5.piece==ChessPiece.PAWN&&(row==7||row==0)){
this.promptPromotion(_d5,col,row,_d8,_d9);
return;
}else{
if(_db!=null){
_de=_db;
}
}
var _df=true;
var _e0="";
_e0+=Move.columnToChar(_d5.column);
_e0+=String.fromCharCode("1".charCodeAt(0)+_d5.row);
_e0+=Move.columnToChar(col);
_e0+=String.fromCharCode("1".charCodeAt(0)+(row));
if(_de){
_e0+=_de;
}
var _e1=this.createMoveFromString(_e0);
var _e2=this.currentMove;
if(_e2){
_e1.moveNum=_e2.moveNum;
}
var res=null;
for(var i=0;i<this.registeredUpdateListeners.length;i++){
_e5=this.registeredUpdateListeners[i].updatePieceCallback(_de,_d5,col,row,_d8,_d9,_da,_db,_dc,_dd,this.currentMove,_e1);
if(!_e5){
return false;
}
if(!_e5.ignoreRetVal){
res=_e5;
}
}
if(!res){
return false;
}
if(res.allowMove){
var _e2=res.move;
for(var i=0;i<this.registeredUpdateAllowMoveListeners.length;i++){
var _e6=this.registeredUpdateAllowMoveListeners[i].updateAllowMoveCallback(_de,_d5,col,row,_d8,_d9,_da,_db,_dc,_e2);
}
this.makeMove(_e2,_d5,_d9,this.moveAnimationLength,true,true,null,null,true);
var _e7=!res.dontMakeOpponentMove&&!_d8&&(this.currentMove&&this.currentMove.next&&!this.currentMove.next.atEnd);
if(clog){
if(_e2.next){
console.log("setting current move in updatepiece to:"+_e2.next.output());
}else{
console.log("in updatepiece, current move being set to null");
}
}
this.setCurrentMove(_e2.next,false,_e7);
if(this.currentMove.atEnd){
for(var i=0;i<this.registeredUpdateEndOfMovesListeners.length;i++){
var res=this.registeredUpdateEndOfMovesListeners[i].updateEndOfMovesCallback(_de,_d5,col,row,_d8,_d9,_da,_db,_dc);
}
}
if(_e7){
opponentMove=this.currentMove;
if(this.currentMove&&this.currentMove.next.atEnd){
this.toggleToMove();
}
this.updatePiece(this.boardPieces[opponentMove.fromColumn][opponentMove.fromRow],opponentMove.toColumn,opponentMove.toRow,true,true,false);
}
}else{
var _e2=res.move;
var _e8=_d5.column;
var _e9=_d5.row;
this.board_xy=null;
_d5.setPosition(_d5.column,_d5.row,false,null,this.moveAnimationLength);
for(var i=0;i<this.registeredUpdateWrongMoveListeners.length;i++){
var res=this.registeredUpdateWrongMoveListeners[i].updateWrongMoveCallback(_de,_d5,col,row,_d8,_d9,_da,_db,_dc,_e2);
}
}
for(var i=0;i<this.registeredUpdatePieceFinishedListeners.length;i++){
var _e5=this.registeredUpdatePieceFinishedListeners[i].updatePieceFinishedCallback(_de,_d5,col,row,_d8,_d9,_da,_db,_dc,_dd,this.currentMove,_e1);
}
};
Board.prototype.addGotoMoveIndexListener=function(_ea){
this.registeredGotoMoveIndexListeners.push(_ea);
};
Board.prototype.addPasteFenClickedListener=function(_eb){
this.registeredPasteFenClickedListeners.push(_eb);
};
Board.prototype.addBackMovePreCurrentListener=function(_ec){
this.registeredBackMovePreCurrentListeners.push(_ec);
};
Board.prototype.addForwardMovePostUpdateListener=function(_ed){
this.registeredForwardMovePostUpdateListeners.push(_ed);
};
Board.prototype.addForwardAtEndListener=function(_ee){
this.registeredForwardAtEndListeners.push(_ee);
};
Board.prototype.addUpdatePieceListener=function(_ef){
this.registeredUpdateListeners.push(_ef);
};
Board.prototype.addUpdatePieceFinishedListener=function(_f0){
this.registeredUpdatePieceFinishedListeners.push(_f0);
};
Board.prototype.addUpdatePieceEndOfMovesListener=function(_f1){
this.registeredUpdateEndOfMovesListeners.push(_f1);
};
Board.prototype.addUpdatePieceHaveAltListener=function(_f2){
this.registeredUpdateHaveAltListeners.push(_f2);
};
Board.prototype.addUpdatePieceAllowMoveListener=function(_f3){
this.registeredUpdateAllowMoveListeners.push(_f3);
};
Board.prototype.addUpdatePieceWrongMoveListener=function(_f4){
this.registeredUpdateWrongMoveListeners.push(_f4);
};
Board.prototype.scoreToShortString=function(_f5){
if(_f5=="draw"){
return "D";
}
if(_f5>=0){
return "M"+_f5;
}else{
return "L"+(-1*_f5);
}
};
Board.prototype.scoreToLongString=function(_f6){
if(_f6=="draw"){
return _js("Draw");
}
if(_f6==0){
return _js("Mate");
}else{
if(_f6>0){
return __js("Mate in {NUMBER_MOVES}",[["NUMBER_MOVES",_f6]]);
}else{
return __js("Lose in {NUMBER_MOVES}",[["NUMBER_MOVES",(-1*_f6)]]);
}
}
};
Board.prototype.egMoveToScoreString=function(_f7){
var _f8=_f7.score;
var _f9=_f7.optimal_score;
var s=this.scoreToShortString(_f8);
var opt=this.scoreToShortString(_f9);
var _fc=this.scoreToLongString(_f8);
var _fd=this.scoreToLongString(_f9);
if(_f8==_f9){
return ["",_fc];
}else{
var _fe="ct-subopt-move-score";
if(_f8=="draw"||_f8<0){
_fe="ct-bad-move-score";
}
return ["<span class=\""+_fe+"\">"+s+"("+opt+")</span>",_fc+"("+_fd+")"];
}
};
Board.prototype.makeShortAlgabraic=function(_ff,_100,_101,_102,_103){
if(clog){
console.log("fromCol:"+_ff+" fromRow:"+_100+" toCol:"+_101+" toRow:"+_102);
}
var _104=this.boardPieces[_ff][_100];
var _105=_104.piece;
var _106=ChessPiece.pieceTypeToChar(_105);
var move="";
if(_105==ChessPiece.PAWN){
if(_ff==_101){
move=Move.columnToChar(_ff)+""+(_102+1);
}else{
move=Move.columnToChar(_ff)+"x"+Move.columnToChar(_101)+""+(_102+1);
if(!this.boardPieces[_101][_102]){
move+=" e.p.";
}
}
}else{
if(_105==ChessPiece.KING){
var _108=Math.abs(_ff-_101);
if(_108==1||_108==0){
move=_106;
if(this.boardPieces[_101][_102]){
move+="x";
}
move+=Move.columnToChar(_101)+""+(_102+1);
}else{
if(_101==6){
move="O-O";
}else{
move="O-O-O";
}
}
}else{
var _109=[];
for(var row=0;row<8;row++){
for(var col=0;col<8;col++){
var cp=this.boardPieces[col][row];
if(cp&&cp.colour==_104.colour&&cp.piece==_105&&!(_104.column==cp.column&&_104.row==cp.row)){
var prev=null;
if(this.currentMove){
prev=this.currentMove.prev;
}
if(this.canMove(cp.makeLightWeight(),_101,_102,prev,true)){
_109.push(cp);
}
}
}
}
move=_106;
if(_109.length>0){
var _10e=false;
var _10f=false;
for(var i=0;i<_109.length;i++){
if(_109[i].row==_100){
_10f=true;
}
if(_109[i].column==_ff){
_10e=true;
}
}
if(_10f||!(_10f||_10e)){
move+=Move.columnToChar(_ff);
}
if(_10e){
move+=""+(_100+1);
}
}
if(this.boardPieces[_101][_102]){
move+="x";
}
move+=Move.columnToChar(_101)+""+(_102+1);
}
}
var _111="";
var _112="";
if(_103){
var _113=this.cloneBoard();
var _114=ChessPiece.WHITE;
if(_113.boardPieces[_103.fromColumn][_103.fromRow].colour==ChessPiece.WHITE){
_114=ChessPiece.BLACK;
}
_113.makeMove(_103,_113.boardPieces[_103.fromColumn][_103.fromRow],false,_113.moveAnimationLength,false,false);
if(!_113.isKingSafe(_114,_103)){
_111="+";
if(_113.isKingMated(_114,_103)){
_111="#";
}
}
if(_103.promotion){
_112="="+((_103.promotion+"").toUpperCase());
}
}
move+=_112+_111;
return move;
};
Board.getVarMove=function(move,row,col,_118,_119){
if(move.vars&&move.vars.length>0){
var i=0;
for(var i=0;i<move.vars.length;i++){
var _11b=move.vars[i];
if(_11b.fromColumn==_118.column&&_11b.fromRow==_118.row&&_11b.toRow==row&&_11b.toColumn==col&&(_119==""||(_119==_11b.promotion))){
return _11b;
}
}
}
};
Board.prototype.createMoveFromString=function(_11c){
var _11d=0;
var take=false;
var _11f=null;
var _120=_11c.charCodeAt(_11d++);
var _121=_11c.charCodeAt(_11d++);
var _122=_11c.split("|");
var pgn=null;
if(_122.length>1){
pgn=_122[1];
_11c=_122[0];
}else{
_11c=_122[0];
}
if(_11c.charAt(_11d)=="x"){
_11d++;
take=true;
}
var _124=_11c.charCodeAt(_11d++);
var _125=_11c.charCodeAt(_11d++);
if(_11d<_11c.length){
_11f=_11c.charAt(_11d);
}
var move=new Move(_120-("a".charCodeAt(0)),_121-("1".charCodeAt(0)),_124-("a".charCodeAt(0)),_125-("1".charCodeAt(0)),take,_11f,_11c);
move.pgn=pgn;
return move;
};
Board.prototype.getBackButton=function(){
if(!this.backButton){
this.backButton=YAHOO.util.Dom.get(this.boardName+"-back");
}
return this.backButton;
};
Board.prototype.getForwardButton=function(){
if(!this.forwardButton){
this.forwardButton=YAHOO.util.Dom.get(this.boardName+"-forward");
}
return this.forwardButton;
};
Board.prototype.getEndButton=function(){
if(!this.endButton){
this.endButton=YAHOO.util.Dom.get(this.boardName+"-end");
}
return this.endButton;
};
Board.prototype.getStartButton=function(){
if(!this.startButton){
this.startButton=YAHOO.util.Dom.get(this.boardName+"-start");
}
return this.startButton;
};
Board.prototype.setForwardBack=function(){
var back=this.getBackButton();
var _128=this.getForwardButton();
var end=this.getEndButton();
var _12a=this.getStartButton();
if(!this.currentMove){
if(back){
back.src=this.boardImagePath+"/images/resultset_previous_disabled"+this.getVersString()+".gif";
}
if(_12a){
_12a.src=this.boardImagePath+"/images/disabled_resultset_first"+this.getVersString()+".gif";
}
if(_128){
_128.src=this.boardImagePath+"/images/resultset_next_disabled"+this.getVersString()+".gif";
}
if(end){
end.src=this.boardImagePath+"/images/disabled_resultset_last"+this.getVersString()+".gif";
}
return;
}
if(this.currentMove.prev==null){
if(back){
back.src=this.boardImagePath+"/images/resultset_previous_disabled"+this.getVersString()+".gif";
}
if(_12a){
_12a.src=this.boardImagePath+"/images/disabled_resultset_first"+this.getVersString()+".gif";
}
}else{
if(back){
back.src=this.boardImagePath+"/images/resultset_previous"+this.getVersString()+".gif";
}
if(_12a){
_12a.src=this.boardImagePath+"/images/resultset_first"+this.getVersString()+".gif";
}
}
if(this.currentMove.atEnd){
if(_128){
_128.src=this.boardImagePath+"/images/resultset_next_disabled"+this.getVersString()+".gif";
}
if(end){
end.src=this.boardImagePath+"/images/disabled_resultset_last"+this.getVersString()+".gif";
}
}else{
if(_128){
_128.src=this.boardImagePath+"/images/resultset_next"+this.getVersString()+".gif";
}
if(end){
end.src=this.boardImagePath+"/images/resultset_last"+this.getVersString()+".gif";
}
}
};
Board.prototype.convertPiecesFromLightWeight=function(_12b){
var _12c=this.settingUpPosition;
this.settingUpPosition=true;
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
if(this.boardPieces[i][j]!=null){
var _12f=this.boardPieces[i][j];
var p=_12f.makeHeavyWeight();
this.boardPieces[i][j]=p;
p.setPosition(p.column,p.row,false,null,this.moveAnimationLength);
p.setVisible(true);
}
}
}
var move=this.moveArray[_12b];
while(move!=null){
if(move.taken){
move.taken=move.taken.makeHeavyWeight();
}
move=move.prev;
}
this.settingUpPosition=_12c;
};
MovesDisplay.prototype.setToMove=function(_132){
this.toMove=_132;
};
MovesDisplay.prototype.gotoMove=function(e){
if(this.board.tactics&&this.board.tactics.problemActive){
return;
}
var t=e.currentTarget?e.currentTarget:e.targetElement?e.targetElement:false;
if(!t){
t=YAHOO.util.Event.getTarget(e);
}
if(!t.id){
t=t.parentNode;
}
var _135=t.id.substr((this.board.boardName+"-m").length);
if(clog){
console.log("got goto move index:"+_135);
}
this.board.gotoMoveIndex(_135,false,false,false,false);
if(this.board.problem){
if(this.board.currentMove.bestMoves){
this.board.problem.showBestMoves(this.board.currentMove,this.board.currentMove.bestMoves,this.board.currentMove.correctMove,this.board.currentMove.wrongMove);
}else{
this.board.problem.clearBestMoves();
}
}
};
MovesDisplay.prototype.getMovesDisplay=function(){
if(!this.cachedMovesDisplay&&!this.allreadyCachedMovesDisplay){
var name=this.board.boardName+"-moves";
if(this.moveListName){
name=this.moveListName;
}
this.cachedMovesDisplay=YAHOO.util.Dom.get(name);
this.allreadyCachedMovesDisplay=true;
}
return this.cachedMovesDisplay;
};
MovesDisplay.prototype.outputVariationStart=function(_137,_138,_139,_13a){
var _13b="";
if(_138>this.board.ml){
return _13b;
}
if(this.board.ml==1&&_13a>1){
return _13b;
}
var _13c=this.getMovesDisplay();
if(_13c){
if(_137==0&&this.displayType==MovesDisplay.MAIN_ON_OWN_LINE){
if(this.firstNonMove){
if(this.board.useDivClearForNewline){
_13b+="<div style=\"clear:both;\"></div>";
}
_13b+="<div class=\"ct-mainline-commentary\"/>";
this.pendingLevelZeroCommentaryClose=true;
}
}
if(this.variationOnOwnLine){
if(this.board.useDivClearForNewline){
_13b+="<div style=\"clear:both;\"></div>";
}else{
_13b+="<br/>";
}
}
if(this.board.showBracketsOnVariation&&(!this.board.hideBracketsOnTopLevelVariation||_137>0)){
_13b+="<span>"+this.board.variationStartString+"</span>";
}
}
this.firstNonMove=false;
return _13b;
};
MovesDisplay.prototype.outputVariationEnd=function(_13d,_13e,_13f,_140){
var _141=this.getMovesDisplay();
var _142="";
if(this.board.ml==1&&_13e>0&&this.board.outputFirstVar){
return _142;
}
this.board.outputFirstVar=true;
if(_141){
if(this.board.showBracketsOnVariation&&(!this.board.hideBracketsOnTopLevelVariation||_13d>1)){
_142+="<span>"+this.board.variationEndString+"</span>";
}
}
if(_13d==1&&this.displayType==MovesDisplay.MAIN_ON_OWN_LINE){
}
this.firstNonMove=false;
return _142;
};
MovesDisplay.prototype.outputComment=function(_143,_144,_145){
if(this.board.ignoreCommentRegex){
var _146=new RegExp(this.board.ignoreCommentRegex);
if(_146.test(_143)){
return "";
}
}
var _147="";
if(this.board.ml==1){
return _147;
}
var _148=this.getMovesDisplay();
if(_148){
if(_144==0&&this.displayType==MovesDisplay.MAIN_ON_OWN_LINE){
if(this.firstNonMove){
_147+="<br/>";
}
_147+="<div class=\"ct-mainline-commentary\">";
this.pendingLevelZeroCommentaryClose=true;
}
var _149="ct-board-move-comment";
if(_145){
_149="ct-board-move-alt-comment";
}
_147+="<span class=\""+_149+"\"> "+_143+" </span>";
if(_144==0&&this.displayType==MovesDisplay.MAIN_ON_OWN_LINE){
}
}
this.firstNonMove=false;
return _147;
};
MovesDisplay.prototype.outputNag=function(_14a){
var _14b="";
var _14c=this.getMovesDisplay();
if(_14c){
var _14d=null;
switch(_14a){
case 11:
_14d="=";
break;
case 14:
_14d="+=";
break;
case 15:
_14d="=+";
break;
case 16:
_14d="+/-";
break;
case 17:
_14d="-/+";
break;
case 18:
_14d="+-";
break;
case 19:
_14d="-+";
break;
case 20:
_14d="+--";
break;
case 21:
_14d="--+";
break;
default:
}
if(_14d){
_14b+="<span> "+_14d+" </span>";
}
}
return _14b;
};
MovesDisplay.prototype.outputResult=function(_14e){
return "<span class=\"ct-result\">"+_14e+"</span>";
};
MovesDisplay.prototype.outputMove=function(_14f,_150,_151,_152,_153,_154,_155,move,_157,_158){
if(clog){
console.log("outputMove:"+_152+" hideScore:"+_157);
}
var _159="";
var _15a=this.getMovesDisplay();
if(this.board.tr&&_150>0&&(_154>1||_155>3)&&!_153){
return _159;
}
if(this.board.ml==1&&_154>0&&this.board.outputFirstVar){
return _159;
}
if(_15a){
var _15b=""+Math.round(_151/2)+". ";
var _15c=false;
if(_151%2!=1){
if(clog){
console.log("firstRav:"+_153+" firstNonMove:"+this.firstNonMove);
}
if(_153||!this.firstNonMove){
_15b=Math.round(_151/2)+"... ";
_15c=true;
}else{
_15b="";
}
}
if(clog){
console.log("moveNum:"+_151+" moveNumOut:"+_15b);
}
if(this.displayType==MovesDisplay.MAIN_ON_OWN_LINE&&_150==0&&(!this.firstNonMove||_151%2==1)){
if(this.pendingLevelZeroCommentaryClose){
this.pendingLevelZeroCommentaryClose=false;
_159+="</div>";
}
if(this.board.newlineForEachMainMove){
if(this.board.useDivClearForNewline){
_159+="<div style=\"clear:both;\"></div>";
}else{
_159+="<br/>";
}
}
}
var _15d="";
var _15e="";
if(move&&move.eg_move){
var res=this.board.egMoveToScoreString(move.eg_move);
_15d=res[0];
_15e=res[1];
}
var _160="";
if(_157){
_160="initially_hidden";
}
if(_15d!=""){
_15d=" "+_15d;
}
var _161="title";
if(_157){
_161="alt";
}
var _162="";
if(_158){
_162=" rel=\""+_152+"\" ";
_152="___";
}
var _163="";
if(_15c&&_150==0){
_163="<span class=\"ct-board-move-dottedempty\">&nbsp;</span>";
}
var _164="";
if(_15b){
_164="<span class=\"ct-board-move-movenum\">"+_15b+"</span>";
}
_159+="<span "+_162+_161+"=\""+_15e+"\" id=\""+this.board.boardName+"-m"+_14f+"\" class=\""+((_150==0)?"ct-board-move-mainline":"ct-board-move-variation")+"\">"+_164+_163+"<span class=\"ct-board-move-movetext\">"+_152+"</span><span id=\""+this.board.boardName+"-msc"+_14f+"\" class=\""+_160+"\">"+_15d+"</span></span>";
}
this.firstNonMove=true;
return _159;
};
Board.prototype.setMoveSeqLalg=function(_165,_166,_167,_168){
var _169=new Array();
if(_165&&_165.length>0){
_169=_165.replace(/\s+$/g,"").split(" ");
}
this.setupFromLalgArray(_169,_168,_167,_166);
};
Board.prototype.setupFromLalgArray=function(_16a,_16b,_16c,_16d){
this.outputFirstVar=false;
if(this.movesDisplay){
this.movesDisplay.pendingLevelZeroCommentaryClose=false;
var md=this.movesDisplay.getMovesDisplay();
if(md){
YAHOO.util.Event.purgeElement(md,true);
md.innerHTML="";
}
}
if(!_16d){
_16d=new Array();
}
var _16f=this.cloneBoard();
this.movesDisplay.firstNonMove=false;
var _170=new Array();
var _171=new Array();
if(this.prev_move){
_16f.makeMove(this.prev_move,_16f.boardPieces[this.prev_move.fromColumn][this.prev_move.fromRow],false,_16f.moveAnimationLength,false,false);
}
var _172=_16f.cloneBoard();
var _173=null;
var _174=0;
var _175="";
var _176=false;
var _177=false;
var _178=0;
var _179=false;
var _17a=new Array();
var _17b=new Array();
_17b[0]=0;
var _17c=new Array();
var _17d=new Array();
var _17e=_16c*2-1;
var _17f=_16c*2-1;
var _180=new Array();
var _181=ChessPiece.WHITE;
var _182=0;
var eval="";
var _184="";
var _185="";
var time="";
var _187=-1;
var _188=0;
for(var i=0;i<_16a.length;i++){
var _18a=0;
if(_16a[i]=="ALT"){
_177=true;
continue;
}
if(_16a[i].indexOf("EVAL")==0){
eval=_16a[i].split(":")[1];
if(parseInt(eval)>=175&&_178>0&&_17b[_178]>1){
_177=true;
}
continue;
}
if(_16a[i].indexOf("DEPTH")==0){
_184=_16a[i].split(":")[1];
continue;
}
if(_16a[i].indexOf("NODES")==0){
_185=_16a[i].split(":")[1];
continue;
}
if(_16a[i].indexOf("TIME")==0){
time=_16a[i].split(":")[1];
var e=eval;
if(eval.indexOf("mate")!=0){
e=(parseFloat(eval)/100).toFixed(2);
if(e>0){
e="+"+e;
}
}else{
e=e.replace(/_/," ");
var _18c=e.split(" ");
_18a=parseInt(_18c[1]);
e=_js("mate")+" "+_18c[1];
if(_17b[_178]==1){
_187=_18a;
}
}
_188=_18a;
if(_18a<0){
_177=false;
}else{
if(_18a>0&&_18a<8&&_178>0&&_17b[_178]>1){
_177=true;
}
}
var _18d="";
if(_177){
_18d=_js("ALT")+" ";
}
var t=parseInt(time);
var nps=" "+__js("nps:{NODES_PER_SECOND}",[["NODES_PER_SECOND",Math.round(parseInt(_185)/(parseInt(time)/1000))]]);
if(!this.showNPS){
nps="";
}
if(!(_178>0&&_17b[_178]>this.ml)){
_16a[i]=_18d+e+" ("+__js("depth:{DEPTH}",[["DEPTH",_184]])+nps+")";
}else{
_16a[i]="";
}
}
if(_16a[i]=="}"){
_176=false;
if(this.movesDisplay){
_175=_175.replace(/\s+$/g,"");
_180.push(this.movesDisplay.outputComment(_175,_178,_177));
}
continue;
}else{
if(_176){
_175+=_16a[i]+" ";
continue;
}else{
if(_16a[i]=="{"){
_175="";
_176=true;
continue;
}else{
if(_16a[i]=="("){
if(!_17b[_178+1]){
_17b[_178+1]=0;
}
_17b[_178+1]++;
if(this.movesDisplay){
_180.push(this.movesDisplay.outputVariationStart(_178,_17b[_178+1],_17e,_17a[0]));
}
_17a[_178]=_17e;
_17c[_178]=_173;
_17d[_178]=_181;
_170[_178]=_16f;
_171[_178]=_172;
_16f=_172.cloneBoard();
_178++;
_17e--;
_179=true;
continue;
}else{
if(_16a[i]==")"){
if(this.movesDisplay){
_180.push(this.movesDisplay.outputVariationEnd(_178,_17b[_178],_17e,_17a[0]));
}
var _190=new Move();
_190.atEnd=true;
_173.next=_190;
_190.prev=_173;
_178--;
_17e=_17a[_178];
_173=_17c[_178];
_181=_17d[_178];
_16f=_170[_178];
_172=_171[_178];
_177=false;
continue;
}else{
if(_16a[i].charAt(0)=="$"){
if(this.movesDisplay){
_180.push(this.movesDisplay.outputNag(parseInt(_16a[i].substring(1))));
}
continue;
}
}
}
}
}
}
var move=this.createMoveFromString(_16a[i]);
var _192=false;
if(_17e==_17f&&this.boardPieces[move.fromColumn][move.fromRow].colour==ChessPiece.BLACK){
_17e++;
_192=true;
_181=ChessPiece.BLACK;
}
move.index=_174;
var _193=(move.pgn)?move.pgn:move.moveString;
if(move.pgn){
_193=move.pgn;
}else{
_193=_16f.makeShortAlgabraic(move.fromColumn,move.fromRow,move.toColumn,move.toRow,move);
move.SAN=_193;
}
_193=Board.moveToLocale(_193);
if(this.movesDisplay){
this.movesDisplay.setToMove(_181);
_180.push(this.movesDisplay.outputMove(_174,_178,_17e,_193+" ",_179,_17b[_178],_17a[0]));
}
_181=(_181==ChessPiece.BLACK)?ChessPiece.WHITE:ChessPiece.BLACK;
move.moveNum=_17e;
_17e++;
if(_178>0){
if(_179){
var _194=_173;
if(_194==null){
alert("Got no previous move for variation:"+movesArra[i]);
}
if(_194.numVars==0){
_194.vars=new Array();
}
move.isAlt=_177;
move.mateInMoves=_188;
_194.vars[_194.numVars++]=move;
move.prev=_194.prev;
_179=false;
}else{
move.prev=_173;
if(_173!=null){
_173.next=move;
}
}
}else{
move.prev=_173;
if(_173!=null){
_173.next=move;
}
}
_17b[_178+1]=0;
if(_178==0){
_182=_174;
}
_16d[_174++]=move;
_16f.moveArray[_174-1]=move;
_173=move;
_172=_16f.cloneBoard();
_16f.makeMove(move,_16f.boardPieces[move.fromColumn][move.fromRow],false,_16f.moveAnimationLength,false,false);
}
if(this.movesDisplay&&!this.disableMoveOutput){
var _195=this.movesDisplay.getMovesDisplay();
_180.push(this.movesDisplay.outputResult(_16b));
this.pendingMovesOutput=_180.join("");
this.pendingMovesOutputCount=_174;
}
this.lastMoveIndex=_182;
if(_173!=null){
var _190=new Move();
_190.atEnd=true;
_173.next=_190;
_190.prev=_173;
}
this.lastCount=_174;
};
Board.prototype.getMaterialCount=function(){
var _196=0;
var _197=0;
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var _19a=this.boardPieces[i][j];
if(_19a){
if(_19a.colour==ChessPiece.WHITE){
_196+=ChessPiece.materialValue(_19a.piece);
}else{
_197+=ChessPiece.materialValue(_19a.piece);
}
}
}
}
return [_196,_197];
};
Board.prototype.getMaterialBalance=function(){
var cnt=this.getMaterialCount();
return cnt[0]-cnt[1];
};
Board.prototype.getMaterialBalances=function(){
var _19c=this.cloneBoard();
var mv=this.moveArray[0];
_19c.gotoMoveIndex(-1,true,true,true,true);
var _19e=[];
while(mv&&!mv.atEnd){
_19c.makeMove(mv,_19c.boardPieces[mv.fromColumn][mv.fromRow],false,this.moveAnimationLength,false,false);
_19e.push(_19c.getMaterialBalance());
mv=mv.next;
_19c.toggleToMove();
}
return _19e;
};
Board.prototype.lalgToMoveList=function(_19f,_1a0,_1a1,_1a2,_1a3){
if(ctime){
console.time("lalgToMoveList");
}
if(clog){
console.log("startMoveNum:"+_1a1);
}
if(!_1a2){
_1a2=new Array();
}
var _1a4=this.cloneBoard();
var _1a5=new Array();
var _1a6=new Array();
if(!_1a3&&this.prev_move){
_1a4.makeMove(this.prev_move,_1a4.boardPieces[this.prev_move.fromColumn][this.prev_move.fromRow],false,_1a4.moveAnimationLength,false,false);
}
var _1a7=_1a4.cloneBoard();
var nags=[];
var _1a9=null;
var _1aa=0;
var _1ab="";
var _1ac=false;
var _1ad=0;
var _1ae=false;
var _1af=new Array();
var _1b0=new Array();
_1b0[0]=0;
var _1b1=new Array();
var _1b2=new Array();
var _1b3=_1a1*2-1;
var _1b4=new Array();
var _1b5=ChessPiece.WHITE;
var _1b6=0;
var _1b7=true;
for(var i=0;i<_19f.length;i++){
if(_19f[i]=="}"){
_1ac=false;
_1ab=_1ab.replace(/\s+$/g,"");
continue;
}else{
if(_1ac){
_1ab+=_19f[i]+" ";
continue;
}else{
if(_19f[i]=="{"){
if(_1ab){
if(_1a9){
_1a9.afterComment=trimStr(_1ab);
}
}
_1ab="";
_1ac=true;
continue;
}else{
if(_19f[i]=="("){
if(clog){
console.log("var start comment:"+_1ab);
}
if(_1a9){
_1a9.afterComment=trimStr(_1ab);
_1ab="";
}
if(clog){
if(_1a9){
console.log("old:"+_1a9.output());
}else{
console.log("no old move");
}
}
if(!_1b0[_1ad+1]){
_1b0[_1ad+1]=0;
}
_1b0[_1ad+1]++;
_1af[_1ad]=_1b3;
_1b1[_1ad]=_1a9;
_1b2[_1ad]=_1b5;
_1a5[_1ad]=_1a4;
_1a6[_1ad]=_1a7;
_1a4=_1a7.cloneBoard();
_1ad++;
_1b3--;
_1ae=true;
continue;
}else{
if(_19f[i]==")"){
if(_1a9){
if(clog){
console.log("var end comment:"+_1ab);
console.log("var end comment:"+_1a9.output());
}
_1a9.afterComment=trimStr(_1ab);
_1ab="";
}
var _1b9=new Move();
_1b9.atEnd=true;
_1a9.next=_1b9;
_1b9.prev=_1a9;
_1ad--;
_1b3=_1af[_1ad];
_1a9=_1b1[_1ad];
_1b5=_1b2[_1ad];
_1a4=_1a5[_1ad];
_1a7=_1a6[_1ad];
continue;
}else{
if(_19f[i].charAt(0)=="$"){
nags.push(parseInt(_19f[i].substring(1)));
continue;
}
}
}
}
}
}
var move=this.createMoveFromString(_19f[i]);
move.nags=nags;
move.beforeComment=trimStr(_1ab);
_1ab=null;
nags=[];
if(_1b7){
if(this.boardPieces[move.fromColumn][move.fromRow].colour==ChessPiece.BLACK){
_1b3++;
_1b5=ChessPiece.BLACK;
if(clog){
console.log("first move black new movenum:"+_1b3);
}
}
_1b7=false;
}
move.index=_1aa;
var _1bb=(move.pgn)?move.pgn:move.moveString;
if(move.pgn){
_1bb=move.pgn;
move.SAN=move.pgn;
}else{
_1bb=_1a4.makeShortAlgabraic(move.fromColumn,move.fromRow,move.toColumn,move.toRow,move);
move.SAN=_1bb;
}
_1b5=(_1b5==ChessPiece.BLACK)?ChessPiece.WHITE:ChessPiece.BLACK;
move.moveNum=_1b3;
_1b3++;
if(_1ad>0){
if(_1ae){
var _1bc=_1a9;
if(_1bc==null){
alert("Got no previous move for variation:"+movesArra[i]);
}
if(_1bc.numVars==0){
_1bc.vars=new Array();
}
_1bc.vars[_1bc.numVars++]=move;
move.prev=_1bc.prev;
_1ae=false;
}else{
move.prev=_1a9;
if(_1a9!=null){
_1a9.next=move;
}
}
}else{
move.prev=_1a9;
if(_1a9!=null){
_1a9.next=move;
}
}
_1b0[_1ad+1]=0;
if(_1ad==0){
_1b6=_1aa;
}
_1a2[_1aa++]=move;
_1a4.moveArray[_1aa-1]=move;
_1a9=move;
_1a7=_1a4.cloneBoard();
_1a4.makeMove(move,_1a4.boardPieces[move.fromColumn][move.fromRow],false,_1a4.moveAnimationLength,false,false);
}
if(_1a9!=null){
var _1b9=new Move();
_1b9.atEnd=true;
_1a9.next=_1b9;
_1b9.prev=_1a9;
if(_1ab){
_1a9.afterComment=trimStr(_1ab);
}
}
if(ctime){
console.timeEnd("lalgToMoveList");
}
return _1a2;
};
Board.prototype.reset=function(fen){
if(this.lastFromSquare){
YAHOO.util.Dom.removeClass(this.lastFromSquare,"ct-from-square");
}
if(this.lastToSquare){
YAHOO.util.Dom.removeClass(this.lastToSquare,"ct-to-square");
}
this.clearMoveList();
if(fen){
this.startFen=fen;
this.setupFromFen(fen,false,this.isFlipped,false,false,true);
}else{
this.startFen=Board.INITIAL_FEN;
this.setupFromFen(Board.INITIAL_FEN,false,this.isFlipped,false,false,true);
}
this.setForwardBack();
};
Board.prototype.clearMoveList=function(_1be){
this.movesDisplay.firstNonMove=false;
var _1bf=this.movesDisplay.getMovesDisplay();
if(_1bf){
YAHOO.util.Event.purgeElement(_1bf,true);
_1bf.innerHTML="";
}
this.currentMove=null;
this.moveIndex=-1;
this.moveArray=new Array();
if(_1be){
_1be.prev=null;
this.startMoveNum=_1be.moveNum;
}else{
this.startMoveNum=1;
}
};
Board.prototype.insertMovesFromMoveList=function(_1c0,_1c1,_1c2){
var _1c3=!_1c1;
if(ctime&&_1c3){
console.time("insertMovesFromMoveList");
}
if(!this.movesDisplay){
return;
}
if(_1c3){
this.clearMoveList(_1c0);
}
var _1c4=0;
var _1c5=_1c0.moveNum;
var move=_1c0;
while(move!=null&&!move.atEnd){
if(clog){
console.log("move:"+move.output());
}
var _1c7=move.next;
if(clog){
if(this.currentMove){
console.log("current move:"+this.currentMove.output());
}else{
console.log("no current move");
}
if(_1c7){
console.log("next move:"+_1c7.output());
}else{
console.log("no next move");
}
}
if(_1c3||_1c0!=move||_1c2==null){
if(clog){
console.log("about to call insertmoveafter");
}
this.insertMoveAfter(this.currentMove,move);
if(clog){
console.log("finished call to insertmoveafter");
}
}else{
if(clog){
console.log("about to replace variationParent:"+_1c2.output()+" with move:"+move.output()+" and board:"+this.boardToFen());
}
this.replaceMove(_1c2,move,true,true);
}
if(move.beforeComment){
this.insertCommentIntoMoveDisplay(move,move.beforeComment,false);
}
if(move.afterComment){
this.insertCommentIntoMoveDisplay(move,move.afterComment,true);
}
if(clog){
console.log("about to make move:"+move.output()+" with board pos:"+this.boardToFen());
}
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],false,this.moveAnimationLength,false,false);
if(clog){
console.log("made move");
}
this.setCurrentMove(move,true,true);
if(move.numVars>0){
var _1c8=move.index;
var bm=move.prev;
var _1ca=-1;
if(bm){
_1ca=bm.index;
}
var _1cb=move.numVars;
var vars=move.vars;
move.numVars=0;
move.vars=[];
for(var i=0;i<_1cb;i++){
this.gotoMoveIndex(_1ca,true,true,true,true);
if(clog){
console.log("about to call insertMovesFromMoveList with head of variation");
}
this.insertMovesFromMoveList(vars[i],true,move);
if(clog){
console.log("about to reset currentMoveIndex  after variation insert:"+_1c8);
}
}
this.gotoMoveIndex(_1c8,true,true,true,true);
this.backMove();
var cm=this.currentMove;
this.makeMove(cm,this.boardPieces[cm.fromColumn][cm.fromRow],false,this.moveAnimationLength,false,false);
if(clog){
if(this.currentMove){
console.log("popped up from variation, current set back to:"+this.currentMove.output());
}else{
console.log("popped up from variation, current set to null");
}
}
}
move=_1c7;
}
if(_1c3){
this.gotoMoveIndex(-1,false,false,false,false);
}
if(clog){
var m=this.currentMove;
while(m){
console.log("m:"+m.output());
m=m.next;
}
}
if(ctime&&_1c3){
console.timeEnd("insertMovesFromMoveList");
}
};
Board.prototype.setupFromLalgArrayIncremental=function(_1d0,_1d1,_1d2,_1d3){
this.outputFirstVar=false;
if(this.movesDisplay&&this.lastCount){
this.movesDisplay.pendingLevelZeroCommentaryClose=false;
for(var i=0;i<this.lastCount;i++){
var mv=YAHOO.util.Dom.get(this.boardName+"-m"+i);
if(mv){
YAHOO.util.Event.purgeElement(mv);
}
}
}
var _1d6=0;
var _1d7=_1d2*2-1;
var _1d8="";
var _1d9=false;
var _1da=false;
var _1db=ChessPiece.WHITE;
var _1dc=false;
var _1dd=true;
this.currentMove=null;
for(var i=0;i<_1d0.length;i++){
if(_1d0[i]=="}"){
_1dc=false;
if(this.movesDisplay){
_1d8=_1d8.replace(/\s+$/g,"");
}
continue;
}else{
if(_1dc){
_1d8+=_1d0[i]+" ";
continue;
}else{
if(_1d0[i]=="{"){
_1d8="";
_1dc=true;
continue;
}else{
if(_1d0[i]=="("){
_1d9=true;
continue;
}else{
if(_1d0[i]==")"){
_1da=true;
continue;
}else{
if(_1d0[i].charAt(0)=="$"){
continue;
}
}
}
}
}
}
var move=this.createMoveFromString(_1d0[i]);
var _1df=false;
if(_1dd&&this.boardPieces[move.fromColumn][move.fromRow].colour==ChessPiece.BLACK){
_1d7++;
_1df=true;
_1db=ChessPiece.BLACK;
}
this.startMoveNum=_1d7;
_1dd=false;
move.index=_1d6++;
var _1e0=move.moveString;
_1e0=Board.moveToLocale(_1e0);
_1db=(_1db==ChessPiece.BLACK)?ChessPiece.WHITE:ChessPiece.BLACK;
this.insertMoveAfter(this.currentMove,move);
if(clog){
if(move.prev){
if(move.prev.next){
console.log("move.prev.next:"+move.prev.next.output());
}else{
console.log("move.prev:"+move.prev.output()+" next null");
}
}
}
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],false,this.moveAnimationLength,false,false);
this.setCurrentMove(move);
}
this.gotoMoveIndex(-1,false,false,false,false);
};
Board.prototype.displayPendingMoveList=function(){
if(this.pendingMovesOutput&&this.movesDisplay){
var _1e1=this.movesDisplay.getMovesDisplay();
if(_1e1){
_1e1.innerHTML=this.pendingMovesOutput;
var _1e2=new YAHOO.util.Scroll(_1e1,{scroll:{to:[0,0]}},0);
_1e2.animate();
}
if(this.movesDisplay){
for(var i=0;i<this.pendingMovesOutputCount;i++){
var mv1=YAHOO.util.Dom.get(this.boardName+"-m"+i);
if(mv1){
YAHOO.util.Event.addListener(mv1,"click",this.movesDisplay.gotoMove,this.movesDisplay,true);
}
}
}
}
};
Board.prototype.setMoveSequence=function(_1e5,_1e6,_1e7,_1e8){
this.tacticMoveArray=new Array();
this.moveArray=this.tacticMoveArray;
this.setMoveSeqLalg(_1e5,this.tacticMoveArray,_1e7,_1e8);
this.tacticsmoveArrayLastMoveIndex=this.lastMoveIndex;
if(false&&_1e6!="NA"){
this.fullmoveArray=new Array();
this.disableMoveOutput=true;
this.setMoveSeqLalg(_1e6,this.fullmoveArray,_1e7,_1e8);
this.disableMoveOutput=false;
this.fullmoveArrayLastMoveIndex=this.lastMoveIndex;
}else{
this.fullmoveArray=null;
}
this.lastMoveIndex=this.tacticsmoveArrayLastMoveIndex;
};
Board.prototype.resetVariationsPreviousNodes=function(_1e9,_1ea){
if(_1e9.numVars>0){
for(var i=0;i<_1e9.numVars;i++){
_1e9.vars[i].prev=_1ea;
this.resetVariationsPreviousNodes(_1e9.vars[i],_1ea);
}
}
};
Board.prototype.reconnectNextNodeVariations=function(_1ec,_1ed){
if(!_1ed){
return;
}
if(_1ed.numVars>0){
for(var i=0;i<_1ed.numVars;i++){
_1ed.vars[i].prev=_1ec;
this.reconnectNextNodeVariations(_1ec,_1ed.vars[i]);
}
}
};
Board.prototype.findFirstMoveFromList=function(move){
var m=move;
while(m&&m.prev!=null){
m=m.prev;
}
return m;
};
Board.prototype.findVariationHeadFromMove=function(move){
var m=move;
while(m&&m.prev&&m.prev.next==m){
m=m.prev;
}
if(m&&m.prev&&m.prev.next!=m){
return m;
}else{
if(m&&!m.prev){
var _1f3=this.moveArray[0];
if(m!=_1f3){
return m;
}
}
return null;
}
};
Board.prototype.liftVariation=function(_1f4){
if(!_1f4){
return;
}
var _1f5=null;
var _1f6=null;
if(_1f4.prev){
_1f5=_1f4.prev.next;
}else{
_1f5=this.moveArray[0];
_1f6=_1f4;
}
var _1f7=null;
if(this.currentMove&&this.currentMove.prev){
_1f7=this.currentMove.prev;
}
if(_1f5){
var _1f8=_1f5.numVars;
var vars=_1f5.vars;
_1f5.numVars=0;
_1f5.vars=[];
if(_1f4.numVars==0){
_1f4.vars=[];
}
for(var i=0;i<_1f8;i++){
var _1fb=vars[i];
if(clog){
console.log("processing var:"+_1fb.output());
}
if(_1fb==_1f4){
if(clog){
console.log("inserted parent var");
}
_1f4.vars.push(_1f5);
_1f4.numVars++;
}else{
_1f4.vars.push(_1fb);
_1f4.numVars++;
}
}
if(_1f4.prev){
_1f4.prev.next=_1f4;
}
if(clog){
console.log("finished moving variations");
}
if(!_1f6){
_1f6=this.findFirstMoveFromList(_1f4);
}
this.moveArray[0]=_1f6;
this.gotoMoveIndex(-1,true,true,true,true);
if(clog){
console.log("fm:"+_1f6.output());
}
this.insertMovesFromMoveList(_1f6);
}
if(_1f7){
this.gotoMoveIndex(_1f7.index);
}
};
Board.prototype.deleteMoveAndLine=function(move){
var m=move;
var oldM=m;
var _1ff=false;
var _200=null;
var _201=this.moveArray[0];
var _202=null;
if(clog){
console.log("delete line:"+move.output());
}
if(clog){
console.log("delete line prev:"+move.prev);
}
if(clog&&move.prev){
console.log("delete line prev.next:"+move.prev.next);
}
if(move&&move.prev&&move.prev.next!=move){
if(clog){
console.log("var is head and not front of move list");
}
_1ff=true;
_200=move.prev.next;
}else{
if(move&&!move.prev&&move!=this.moveArray[0]){
if(clog){
console.log("var is head and front of move list");
}
_1ff=true;
_200=this.moveArray[0];
}
}
if(clog){
console.log("isVariationHead:"+_1ff);
}
if(clog){
console.log("fm:"+_201.output());
}
var _203=m.prev;
if(_1ff){
_202=_200;
if(_200){
if(clog){
console.log("delete variation from parent:"+_200.output());
}
var _204=[];
for(var i=0;i<_200.numVars;i++){
if(!(_200.vars[i]==oldM)){
if(clog){
console.log("saving var:"+_200.vars[i].output());
}
_204.push(_200.vars[i]);
}else{
if(clog){
console.log("dropping var:"+_200.vars[i].output());
}
}
}
_200.vars=_204;
_200.numVars=_204.length;
}
}else{
if(_203){
_203.next=null;
_202=_203;
}else{
if(clog){
console.log("deleting entire list");
}
if(this.movesDisplay){
this.movesDisplay.firstNonMove=false;
YAHOO.util.Event.purgeElement(this.movesDisplay.getMovesDisplay(),true);
this.movesDisplay.pendingLevelZeroCommentaryClose=false;
}
var _206=this.movesDisplay.getMovesDisplay();
if(_206){
_206.innerHTML="";
}
this.currentMove=null;
this.startMoveNum=_201.moveNum;
if(clog){
console.log("startFen:"+this.startFen);
}
this.moveIndex=-1;
this.moveArray=[];
this.setupFromFen(this.startFen);
if(this.lastFromSquare){
YAHOO.util.Dom.removeClass(this.lastFromSquare,"ct-from-square");
}
if(this.lastToSquare){
YAHOO.util.Dom.removeClass(this.lastToSquare,"ct-to-square");
}
this.setForwardBack();
return;
}
}
this.moveArray[0]=_201;
this.gotoMoveIndex(-1,true,true,true,true);
if(clog){
console.log("fm:"+_201.output());
}
this.insertMovesFromMoveList(_201);
if(_202){
this.gotoMoveIndex(_202.index);
}
};
Board.prototype.insertMoveAfter=function(_207,_208,_209,_20a,_20b,_20c){
addToMovelist=!_209;
if(clog){
console.log("addToMovelist:"+addToMovelist);
}
var _20d="null";
if(_207){
_20d=_207.output();
}
if(clog){
console.log("insert newMove:"+_208.output()+" after:"+_20d);
}
if(_207==null){
this.currentMove=_208;
_208.atEnd=0;
_208.prev=null;
_208.next=null;
this.firstMove=_208;
if(this.startMoveNum>0){
this.currentMove.moveNum=this.startMoveNum;
}else{
if(this.toMove==ChessPiece.WHITE){
this.currentMove.moveNum=1;
}else{
this.currentMove.moveNum=2;
}
}
if(clog){
console.log("startMoveNum:"+this.startMoveNum+" currMoveNum:"+this.currentMove.moveNum);
}
}else{
_208.atEnd=_207.atEnd;
_208.prev=_207;
_207.atEnd=0;
if(clog){
if(_207.next){
console.log("prevMove.next:"+_207.next.output());
}
}
if(_208.equals(_207.next)||_208.equals(_207)){
if(clog){
console.log("inserting move that already exists in variation:"+_207.next.output());
}
var _20e=_207.next;
if(this.firstMove==_20e){
this.firstMove=_208;
}
if(_208.equals(_207)){
_20e=_207;
}
if(_20e.prev&&(_20e.prev.next==_20e)){
_20e.prev.next=_208;
}
if(_20e.next){
_20e.next.prev=_208;
}
addToMovelist=false;
_208.moveNum=_20e.moveNum;
_208.ravLevel=_20e.ravLevel;
_208.index=_20e.index;
_208.fen=_20e.fen;
_208.nextFen=_20e.nextFen;
_208.bestMoves=_20e.bestMoves;
_208.correctMove=_20e.correctMove;
_208.wrongMove=_20e.wrongMove;
_208.next=_20e.next;
_208.vars=_20e.vars;
_208.numVars=_20e.numVars;
this.reconnectNextNodeVariations(_208,_20e.next);
this.moveArray[_208.index]=_208;
if(this.currentMove==_20e){
this.setCurrentMove(_208);
}
}else{
_208.moveNum=_207.moveNum+1;
_208.ravLevel=_207.ravLevel;
_208.next=_207.next;
if(_208.next){
_208.next.prev=_208;
}
}
_207.next=_208;
}
if(addToMovelist){
this.insertIntoMoveDisplay(_207,_208,_20a,_20b,_20c);
}
if(_208.next==null){
var _20f=this.createMoveFromString("i1i2");
_208.next=_20f;
_20f.prev=_208;
_20f.moveNum=_208.moveNum+1;
_20f.ravLevel=_208.ravLevel;
_20f.next=null;
_20f.atEnd=1;
_20f.endNode=true;
if(clog){
console.log("created endmove node in insertAfterMove:"+_20f.output());
}
}else{
if(clog){
console.log("allready had a node at end:"+_208.next.output());
}
_208.next.moveNum=_208.moveNum+1;
}
};
function insertBefore(node,_211){
if(_211){
_211.parentNode.insertBefore(node,_211);
}
}
function insertAfter(node,_213){
var _214=_213.parentNode;
_214.insertBefore(node,_213.nextSibling);
}
Board.prototype.replaceIntoMoveDisplay=function(_215,_216,_217,_218,_219){
var _21a="null";
if(_215){
_21a=_215.output();
}
if(clog){
console.log("replace display newMove:"+_216.output()+" after:"+_21a+" hideScore:"+_218);
}
if(!_215){
if(clog){
console.log("null oldMove");
}
this.insertIntoMoveDisplay(null,_216,false,_218);
}else{
if(clog){
console.log("about to get movesdsiplay in replace into move display:"+this.movesDisplay);
}
var _21b=this.movesDisplay.getMovesDisplay();
if(clog){
console.log("got moves display");
}
if(!_21b){
if(clog){
console.log("no movesd disiplay in replace into move display");
}
return;
}
var san=_216.SAN;
if(!san){
if(clog){
console.log("about to make san");
}
san=this.makeShortAlgabraic(_216.fromColumn,_216.fromRow,_216.toColumn,_216.toRow,_216);
if(clog){
console.log("about to made san:"+san);
}
_216.SAN=san;
}
if(clog){
console.log("oldMove.index:"+_215.index);
}
var _21d=this.boardName+"-ms"+_215.index;
if(clog){
console.log("oldMoveId:"+_21d);
}
var _21e=YAHOO.util.Dom.get(_21d);
if(_217){
this.moveIndex++;
_216.index=this.moveIndex;
this.moveArray[this.moveIndex]=_216;
if(clog){
console.log("replace as variation old:"+_215.output()+" new:"+_216.output());
}
var _21f=document.createElement("span");
var _220=this.movesDisplay.outputVariationStart(0,0,_216.moveNum,0);
_216.ravLevel=_215.ravlevel+1;
var _21a=Board.moveToLocale(san);
if(_216.prev==null){
this.movesDisplay.firstNonMove=false;
}
var _221=this.movesDisplay.outputMove(this.moveIndex,_216.ravLevel,_216.moveNum,_21a,_217,0,_216.moveNum,_216,_218,_219);
var _222=document.createElement("span");
_222.id=(this.boardName+"-ms"+_216.index);
_222.innerHTML=_221+"&nbsp;";
var _223=this.movesDisplay.outputVariationEnd(0,0,_216.moveNum,0);
this.movesDisplay.firstNonMove=true;
var _224=document.createElement("span");
_224.innerHTML=_220;
var _225=document.createElement("span");
_225.innerHTML=_223;
_21f.appendChild(_224);
_21f.appendChild(_222);
_21f.appendChild(_225);
_21e.appendChild(_21f);
}else{
_216.index=_215.index;
this.moveArray[_216.index]=_216;
var _21a=Board.moveToLocale(san);
if(_216.prev==null){
this.movesDisplay.firstNonMove=false;
}
var _221=this.movesDisplay.outputMove(_216.index,_216.ravLevel,_216.moveNum,_21a,_217,0,_216.moveNum,_216,_218,_219);
var _222=document.createElement("span");
_222.innerHTML=_221+"&nbsp;";
_222.id=(this.boardName+"-ms"+_216.index);
var _226=[];
if(_21e&&_21e.childNodes){
for(var i=1;i<_21e.childNodes.length;i++){
_226[i-1]=_21e.childNodes[i];
}
}
if(clog){
console.log("replace as main line not variation old:"+_215.output()+" new:"+_216.output());
}
_21e.parentNode.replaceChild(_222,_21e);
if(_226){
for(var i=0;i<_226.length;i++){
_222.appendChild(_226[i]);
}
}
}
YAHOO.util.Event.removeListener(this.boardName+"-m"+_216.index);
YAHOO.util.Event.addListener((this.boardName+"-m"+_216.index),"click",this.movesDisplay.gotoMove,this.movesDisplay,true);
}
};
Board.prototype.insertCommentIntoMoveDisplay=function(move,_229,_22a){
var _22b=this.movesDisplay.getMovesDisplay();
if(!_22b){
return;
}
var _22c="b";
if(_22a){
_22c="a";
}
if(move){
var _22d=this.boardName+"-mc"+_22c+move.index;
var _22e=YAHOO.util.Dom.get(_22d);
var _22f=false;
if(!_22e){
_22e=document.createElement("span");
_22e.id=_22d;
_22f=true;
}
_22e.innerHTML=this.movesDisplay.outputComment(_229,0);
var _230=YAHOO.util.Dom.get((this.boardName+"-m"+move.index));
if(_230){
if(_22a){
move.afterComment=_229;
if(_22f){
insertAfter(_22e,_230);
}
}else{
move.beforeComment=_229;
if(_22f){
insertBefore(_22e,_230);
}
}
}
}else{
}
};
Board.prototype.insertIntoMoveDisplay=function(_231,_232,_233,_234,_235){
var _236=this.movesDisplay.getMovesDisplay();
if(!_236){
return;
}
var _237="null";
if(_231){
_237=_231.output();
}
if(clog){
console.log("insert display newMove:"+_232.output()+" after:"+_237);
}
var san=_232.SAN;
if(!san){
san=this.makeShortAlgabraic(_232.fromColumn,_232.fromRow,_232.toColumn,_232.toRow,_232);
_232.SAN=san;
}
this.moveIndex++;
_232.index=this.moveIndex;
this.moveArray[this.moveIndex]=_232;
var _237=Board.moveToLocale(san);
var _239=this.movesDisplay.outputMove(this.moveIndex,_232.ravLevel,_232.moveNum,_237,false,0,_232.moveNum,_232,_234,_235);
var _23a=document.createElement("span");
_23a.innerHTML=_239+"&nbsp;";
_23a.id=(this.boardName+"-ms"+this.moveIndex);
if(_233){
YAHOO.util.Dom.setStyle(_23a,"visibility","hidden");
}
if(_231){
if(clog){
console.log("prevMove.index:"+_231.index+"prevMove:"+_231.output());
}
var _23b=YAHOO.util.Dom.get((this.boardName+"-ms"+_231.index));
if(_23b){
insertAfter(_23a,_23b);
}else{
_236.appendChild(_23a);
}
}else{
if(_232.next){
var _23c=YAHOO.util.Dom.get((this.boardName+"-ms"+_232.next.index));
insertBefore(_23a,_23c);
}else{
_236.appendChild(_23a);
}
}
YAHOO.util.Event.removeListener(this.boardName+"-m"+this.moveIndex);
YAHOO.util.Event.addListener((this.boardName+"-m"+this.moveIndex),"click",this.movesDisplay.gotoMove,this.movesDisplay,true);
};
Board.prototype.replaceMove=function(_23d,_23e,_23f,_240,_241,_242){
var _243="null";
if(_23d){
_243=_23d.output();
}
if(clog){
console.log("replace newMove:"+_23e.output()+" after:"+_243+" replace as var"+_23f+" rep move display:"+_240+" hideScore:"+_241);
if(_23d&&_23d.prev){
console.log("replace oldMove.prev:"+_23d.prev.output());
}
if(_23d&&_23d.next){
console.log("replace oldMove.next:"+_23d.next.output());
}
}
var _244=false;
var _245=null;
var _246=0;
if(_23d.endNode){
if(clog){
console.log("asked to replace endNode,inserting before instead");
}
this.insertMoveAfter(_23d.prev,_23e,false,false,_241,_242);
_23e.fen=_23d.fen;
_23e.nextFen=_23d.nextFen;
return;
}
if(_23e.equals(_23d)){
if(clog){
console.log("new move is same as old move so not replacing as variation");
}
_23f=false;
}else{
if(_23d&&_23d.numVars>0){
for(var i=0;i<_23d.numVars;i++){
var _248=_23d.vars[i];
if(_23e.equals(_248)){
if(clog){
console.log("new move is same as an existing variation varNum:"+i);
console.log("variation:"+_248.output());
if(_248.next){
console.log("variation next:"+_248.next.output());
}
}
_244=true;
_245=_23d;
_23d=_248;
_246=i;
break;
}
}
}
}
if(_23d==null){
if(clog){
console.log("replaced new move with null oldmove");
}
this.currentMove=_23e;
_23e.atEnd=1;
_23e.next=null;
_23e.prev=null;
if(this.startPositionAfterOpponentMove){
_23e.fen=this.startPositionAfterOpponentMove;
_23e.nextFen=null;
}
if(this.toMove==ChessPiece.WHITE){
this.currentMove.moveNum=1;
}else{
this.currentMove.moveNum=2;
}
this.firstMove=_23e;
}else{
var _249=false;
if(_23d&&_23d.prev&&_23d.prev.next!=_23d){
_249=true;
}
if(this.currentMove==_23d&&!_23f){
this.currentMove=_23e;
}else{
if(clog){
console.log("not setting current move in replacemove");
}
}
_23e.atEnd=_23d.atEnd;
_23e.prev=_23d.prev;
_23e.next=_23d.next;
_23e.fen=_23d.fen;
_23e.nextFen=_23d.nextFen;
_23e.bestMoves=_23d.bestMoves;
_23e.correctMove=_23d.correctMove;
_23e.wrongMove=_23d.wrongMove;
_23e.moveNum=_23d.moveNum;
_23e.ravLevel=_23d.ravLevel;
_23e.index=_23d.index;
if(clog){
console.log("replacingVariation with var not null:"+_244);
}
if(_244){
_245.vars[_246]=_23e;
_23e.vars=_23d.vars;
_23e.numVars=_23d.numVars;
this.reconnectNextNodeVariations(_23e,_23d.next);
if(_23d.next){
_23d.next.prev=_23e;
}
this.moveArray[_23e.index]=_23e;
if(clog){
console.log("replacing existing sub variation of main line");
if(_23e.next){
console.log("next of replacement variation:"+_23e.next.output());
}
}
return;
}
if(!_23f){
if(clog){
console.log("not replacing as variation");
}
if(!_249&&_23d.prev){
_23d.prev.next=_23e;
}
if(_23d.next){
_23d.next.prev=_23e;
}
_23e.vars=_23d.vars;
_23e.numVars=_23d.numVars;
this.reconnectNextNodeVariations(_23e,_23d.next);
if(this.firstMove==_23d){
this.firstMove=_23e;
}
this.moveArray[_23e.index]=_23e;
}else{
if(clog){
console.log("replacing as variation");
}
if(_23d.numVars==0){
_23d.vars=new Array();
}
_23d.vars[_23d.numVars++]=_23e;
_23d.atEnd=0;
_23e.next=null;
var _24a=this.createMoveFromString("i1i2");
_23e.next=_24a;
_24a.prev=_23e;
_24a.next=null;
_24a.atEnd=1;
_24a.moveNum=_23e.moveNum+1;
_24a.ravLevel=_23e.ravLevel;
_24a.endNode=true;
}
}
if(_240){
this.replaceIntoMoveDisplay(_23d,_23e,_23f,_241,_242);
}
};
Board.prototype.setCurrentMove=function(move,_24c,_24d){
if(!this.cloned&&this.currentMove!=null){
if(this.currentMove.prev!=null){
YAHOO.util.Dom.removeClass(this.boardName+"-m"+this.currentMove.prev.index,"ct-board-move-current");
}
}
this.currentMove=move;
if(!this.cloned&&this.currentMove!=null&&this.currentMove.prev!=null){
var _24e=this.boardName+"-m"+this.currentMove.prev.index;
if(clog){
console.log("setCurrentMove attempted highlight of id:"+_24e+" for move:"+move.output());
}
var span=YAHOO.util.Dom.get(_24e);
if(span){
var cls=span.className;
YAHOO.util.Dom.addClass(span,"ct-board-move-current");
if(this.autoScrollMoves){
if(!_24d&&(this.scrollVariations||cls.indexOf("ct-board-move-variation")==-1)){
var _251=this.movesDisplay.getMovesDisplay();
if(_251){
var y=YAHOO.util.Dom.getY(span)-YAHOO.util.Dom.getY(_251);
var _253=new YAHOO.util.Scroll(_251,{scroll:{by:[0,y]}},this.moveAnimationLength,YAHOO.util.Easing.easeOut);
_253.animate();
}
}
}
}
}else{
if(move==null){
if(clog){
console.log("attempted to set current move on null node");
}
}
}
if(!_24c){
this.setForwardBack();
}
};
Board.INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
Board.prototype.boardToFen=function(_254){
var _255="";
for(var row=7;row>=0;row--){
var _257=0;
var line="";
if(row<7){
line="/";
}
for(var col=0;col<8;col++){
var _25a=this.boardPieces[col][row];
if(_25a){
var _25b="";
if(_257>0){
_25b=_257+"";
}
line+=_25b+_25a.getFenLetter();
_257=0;
}else{
_257++;
}
}
if(_257>0){
line+=_257+"";
}
_255+=line;
}
var fen=_255;
var _25d=" w ";
if(_254){
if(this.toMove==ChessPiece.WHITE){
_25d=" b ";
}
}else{
if(this.toMove==ChessPiece.BLACK){
_25d=" b ";
}
}
fen+=_25d;
var _25e="";
_25e+=Board.getFenCastleChar(this.canCastleKingSide,"K",ChessPiece.WHITE);
_25e+=Board.getFenCastleChar(this.canCastleQueenSide,"Q",ChessPiece.WHITE);
_25e+=Board.getFenCastleChar(this.canCastleKingSide,"K",ChessPiece.BLACK);
_25e+=Board.getFenCastleChar(this.canCastleQueenSide,"Q",ChessPiece.BLACK);
if(_25e==""){
fen+="- ";
}else{
fen+=_25e+" ";
}
var _25f=null;
if(this.currentMove){
if(this.currentMove.prev){
_25f=this.currentMove.prev;
}else{
_25f=this.prev_move;
}
}else{
_25f=this.prev_move;
}
var _260="- ";
if(_25f){
if(_25f){
var _261=this.boardPieces[_25f.toColumn][_25f.toRow];
if(_261){
if(_261.piece==ChessPiece.PAWN){
if(_261.colour==ChessPiece.WHITE){
if(_25f.fromRow==1&&_25f.toRow==3){
_260=Move.columnToChar(_25f.fromColumn)+"3 ";
}
}else{
if(_25f.fromRow==6&&_25f.toRow==4){
_260=Move.columnToChar(_25f.fromColumn)+"6 ";
}
}
}
}
}
}
fen+=_260;
fen+=this.halfMoveNumber+" "+parseInt((this.moveNumber+1)/2);
if(clog){
console.log("moveNumber:"+this.moveNumber+" fen:"+fen);
}
return fen;
};
Board.getFenCastleChar=function(_262,_263,_264){
if(_262[_264]){
if(_264==ChessPiece.WHITE){
return _263.toUpperCase();
}else{
return _263.toLowerCase();
}
}
return "";
};
Board.prototype.getCastlingString=function(_265){
var _266=_js("None");
if(this.canCastleKingSide[_265]){
_266="O-O";
}
if(this.canCastleQueenSide[_265]){
if(_266==_js("None")){
_266="O-O-O";
}else{
_266+=",O-O-O";
}
}
return _266;
};
Board.prototype.updateToPlay=function(){
if(this.disableUpdateToPlay){
return;
}
if(this.showToMoveIndicators){
if(this.isFlipped){
YAHOO.util.Dom.setStyle(this.boardName+"-top-to-move-inner","background-color","white");
YAHOO.util.Dom.setStyle(this.boardName+"-top-to-move-inner","border","1px solid black");
YAHOO.util.Dom.setStyle(this.boardName+"-bottom-to-move-inner","background-color","black");
YAHOO.util.Dom.setStyle(this.boardName+"-bottom-to-move-inner","border","1px solid white");
}else{
YAHOO.util.Dom.setStyle(this.boardName+"-bottom-to-move-inner","background-color","white");
YAHOO.util.Dom.setStyle(this.boardName+"-bottom-to-move-inner","border","1px solid black");
YAHOO.util.Dom.setStyle(this.boardName+"-top-to-move-inner","background-color","black");
YAHOO.util.Dom.setStyle(this.boardName+"-top-to-move-inner","border","1px solid white");
}
if(this.toMove==ChessPiece.WHITE){
if(this.isFlipped){
YAHOO.util.Dom.addClass(this.boardName+"-top-to-move-outer","ct-to-move-active");
YAHOO.util.Dom.removeClass(this.boardName+"-bottom-to-move-outer","ct-to-move-active");
}else{
YAHOO.util.Dom.addClass(this.boardName+"-bottom-to-move-outer","ct-to-move-active");
YAHOO.util.Dom.removeClass(this.boardName+"-top-to-move-outer","ct-to-move-active");
}
}else{
if(this.isFlipped){
YAHOO.util.Dom.addClass(this.boardName+"-bottom-to-move-outer","ct-to-move-active");
YAHOO.util.Dom.removeClass(this.boardName+"-top-to-move-outer","ct-to-move-active");
}else{
YAHOO.util.Dom.addClass(this.boardName+"-top-to-move-outer","ct-to-move-active");
YAHOO.util.Dom.removeClass(this.boardName+"-bottom-to-move-outer","ct-to-move-active");
}
}
}
var _267=YAHOO.util.Dom.get("toPlay");
if(_267==null){
return;
}
if(this.toMove==ChessPiece.WHITE){
_267.src="/images/whiteknight"+this.getVersString()+".gif";
_267.alt=_js("White to play");
}else{
_267.src="/images/blackknight"+this.getVersString()+".gif";
_267.alt=_js("Black to play");
}
var _268=YAHOO.util.Dom.get("fenStatus");
if(_268){
var _269=this.getCastlingString(ChessPiece.BLACK);
var _26a=this.getCastlingString(ChessPiece.WHITE);
var s="<div><span>"+_js("White Castling: ")+"</span><span>"+_26a+"</span></div>"+"<div><span>"+_js("Black Castling: ")+"</span><span>"+_269+"</span></div>";
_268.innerHTML=s;
}
};
Board.prototype.getBoardDivFromId=function(id){
if(!this[id]){
this[id]=YAHOO.util.Dom.get(id);
}
return this[id];
};
Board.prototype.getBoardDiv=function(){
if(!this.boardDiv){
this.boardDiv=YAHOO.util.Dom.get("ctb-"+this.boardName);
}
return this.boardDiv;
};
Board.prototype.getDocBody=function(){
if(!this.docBody){
var _26d=document.getElementsByTagName("body");
if(_26d==null||_26d.length==0){
alert("Could not find body tag");
}else{
this.docBody=_26d[0];
}
}
return this.docBody;
};
Board.prototype.getPieceDragDiv=function(){
if(!this.pieceDragDiv){
this.pieceDragDiv=YAHOO.util.Dom.get("pieceDragDiv");
}
return this.pieceDragDiv;
};
Board.prototype.createBoardCoords=function(){
this.coordinatesShown=false;
var _26e=YAHOO.util.Dom.get(this.boardName+"-fileLabels");
var _26f=YAHOO.util.Dom.get(this.boardName+"-rankLabels");
if(!_26e||!_26f){
return;
}
YAHOO.util.Event.purgeElement(_26e,true);
_26f.innerHTML="";
_26e.innerHTML="";
var _270=YAHOO.util.Dom.get(this.boardName+"-boardBorder");
if(!this.showCoordinates){
YAHOO.util.Dom.setStyle(_26e,"display","none");
YAHOO.util.Dom.setStyle(_26f,"display","none");
var _271=0;
YAHOO.util.Dom.setStyle(_270,"width",(this.pieceSize*8+_271)+"px");
YAHOO.util.Dom.setStyle(_270,"height",(this.pieceSize*8+_271)+"px");
return;
}
YAHOO.util.Dom.setStyle(_26e,"display","block");
YAHOO.util.Dom.setStyle(_26f,"display","block");
var _271=15;
var _272=0;
if(check_bad_msie()){
_272=this.ie6FixCoordsOffsetSize;
}
if(YAHOO.util.Event.isIE){
_272+=this.allIeFixCoordsOffsetSize;
if(document.compatMode!="CSS1Compat"){
_272=8;
}
}
YAHOO.util.Dom.setStyle(_270,"width",(this.pieceSize*8+_271+_272)+"px");
YAHOO.util.Dom.setStyle(_270,"height",(this.pieceSize*8+_271)+"px");
this.coordinatesShown=true;
for(var i=0;i<8;i++){
var _274=document.createElement("div");
YAHOO.util.Dom.setStyle(_274,"height",this.pieceSize+"px");
YAHOO.util.Dom.setStyle(_274,"width","15px");
YAHOO.util.Dom.setStyle(_274,"text-align","center");
YAHOO.util.Dom.setStyle(_274,"line-height",this.pieceSize+"px");
if(this.isFlipped){
_274.innerHTML=""+(i+1);
}else{
_274.innerHTML=""+9-(i+1);
}
_26f.appendChild(_274);
}
for(var i=0;i<9;i++){
var _275=document.createElement("span");
YAHOO.util.Dom.setStyle(_275,"float","left");
YAHOO.util.Dom.setStyle(_275,"height","15px");
if(i==0){
YAHOO.util.Dom.setStyle(_275,"width","15px");
YAHOO.util.Dom.setStyle(_275,"clear","both");
YAHOO.util.Dom.setStyle(_275,"margin-top","-5px");
if(_272){
YAHOO.util.Dom.setStyle(_275,"margin-left","-3px");
}else{
YAHOO.util.Dom.setStyle(_275,"margin-left","-2px");
}
var _276="";
if(this.isFlipped){
_276="whiteblack-flipper"+this.getVersString()+".png";
}else{
_276="blackwhite-flipper"+this.getVersString()+".png";
}
_275.innerHTML="<span><img id=\""+this.boardName+"-flipper\" title=\""+_js("Flip Board")+"\" src=\""+this.boardImagePath+"/images/"+_276+"\"/></span>";
YAHOO.util.Event.addListener(this.boardName+"-flipper","click",this.flipBoard,this,true);
}else{
YAHOO.util.Dom.setStyle(_275,"width",this.pieceSize+"px");
YAHOO.util.Dom.setStyle(_275,"text-align","center");
if(this.isFlipped){
_275.innerHTML=_js(Move.columnToChar(8-(i)));
}else{
_275.innerHTML=_js(Move.columnToChar((i-1)));
}
}
_26e.appendChild(_275);
}
var _277=YAHOO.util.Dom.get(this.boardName+"-flipper");
if(_277){
fix_ie_png(_277);
}
};
Board.prototype.createBoardUI=function(){
var _278=this.boardName+"-container";
var _279=YAHOO.util.Dom.get(_278);
if(_279==null){
alert("Could not find board container:"+_278);
return;
}
YAHOO.util.Dom.addClass(_279,"ct-board-container");
this.boardDiv=null;
var _27a=document.createElement("div");
_27a.id=this.boardName+"-boardBorder";
YAHOO.util.Dom.addClass(_27a,"ct-board-border"+this.squareColorClass);
var _27b=0;
if(this.showCoordinates){
_27b=15;
}
YAHOO.util.Dom.setStyle(_27a,"width",(this.pieceSize*8+_27b)+"px");
YAHOO.util.Dom.setStyle(_27a,"height",(this.pieceSize*8+_27b)+"px");
var _27c=document.createElement("div");
YAHOO.util.Dom.setStyle(_27c,"float","left");
_27c.id=this.boardName+"-rankLabels";
_27a.appendChild(_27c);
var _27d=document.createElement("div");
YAHOO.util.Dom.addClass(_27d,"ct-board");
YAHOO.util.Dom.setStyle(_27d,"width",(this.pieceSize*8)+"px");
YAHOO.util.Dom.setStyle(_27d,"height",(this.pieceSize*8)+"px");
_27d.id="ctb-"+this.boardName;
var _27e="ct-white-square"+this.squareColorClass;
var _27f="";
var _280=[];
for(var i=7;i>=0;i--){
var s="<div>";
for(var j=0;j<8;j++){
var _284=document.createElement("div");
var _285=this.boardName+"-s"+j+""+i;
var _286=(((j+1)*(i+1))%19/19*100);
var _287=((65-((j+1)*(i+1)))%19/19*100);
s+="<div id=\""+_285+"\" class=\""+_27e+"\" style=\"width:"+this.pieceSize+"px;height:"+this.pieceSize+"px;background-position:"+_286+"% "+_287+"%\"></div>";
_280.push(_285);
_27e=(_27e=="ct-black-square"+this.squareColorClass)?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass;
}
_27e=(_27e=="ct-black-square"+this.squareColorClass)?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass;
s+="</div>";
_27f+=s;
}
_27d.innerHTML=_27f;
var _288=document.createElement("div");
_288.id=this.boardName+"-fileLabels";
_27a.appendChild(_27d);
_27a.appendChild(_288);
_279.appendChild(_27a);
if(this.showToMoveIndicators){
var _289=document.createElement("div");
_289.id=this.boardName+"-moveIndicators";
YAHOO.util.Dom.addClass(_289,"ct-move-indicators");
_289.innerHTML="<div class=\"ct-top-to-move-outer\" id=\""+this.boardName+"-top-to-move-outer\"><div  class=\"ct-top-to-move-inner\" id=\""+this.boardName+"-top-to-move-inner\"></div></div><div class=\"ct-bottom-to-move-outer\"  id=\""+this.boardName+"-bottom-to-move-outer\"><div class=\"ct-bottom-to-move-inner\" id=\""+this.boardName+"-bottom-to-move-inner\" ></div>";
_279.appendChild(_289);
YAHOO.util.Dom.setStyle(_27a,"float","left");
YAHOO.util.Dom.setStyle(_289,"float","left");
YAHOO.util.Dom.setStyle(_289,"margin-left","4px");
YAHOO.util.Dom.setStyle(_289,"height",((this.pieceSize*8)+2)+"px");
YAHOO.util.Dom.setStyle(_289,"position","relative");
var _28a=document.createElement("div");
YAHOO.util.Dom.setStyle(_28a,"clear","both");
_279.appendChild(_28a);
}
this.createBoardCoords();
var _28b=YAHOO.util.Dom.get(this.boardName+"-ct-nav-container");
if(!_28b){
_28b=document.createElement("div");
}else{
_28b.innerHTML="";
}
_28b.id=this.boardName+"-ct-nav-container";
if(!this.dontOutputNavButtons||this.r){
var _28c="";
if(!this.dontOutputNavButtons){
if(!this.problem||!this.problem.isEndgame){
_28c="<span id=\"playStopSpan\"><img class=\"ct-end\" id=\""+this.boardName+"-end\" src=\""+this.boardImagePath+"/images/resultset_last"+this.getVersString()+".gif\" alt=\""+_js("End position")+"\" title=\""+_js("Go to final position")+"\"/>"+"<img class=\"ct-play\" id=\""+this.boardName+"-play\" src=\""+this.boardImagePath+"/images/control_play_blue"+this.getVersString()+".gif\" alt=\""+_js("Play moves")+"\" title=\""+_js("Play sequence of moves")+"\"/>"+"<img class=\"ct-stop\" id=\""+this.boardName+"-stop\" src=\""+this.boardImagePath+"/images/control_stop_blue"+this.getVersString()+".gif\" alt=\""+_js("Stop playing")+"\" title=\""+_js("Stop playing move sequence")+"\"/></span>";
}
}
var _28d="<div class=\"ct-nav-buttons\" id=\""+this.boardName+"-navButtons\"><span id=\""+this.boardName+"-nav-buttons-only\">";
if(!this.dontOutputNavButtons){
var size="";
if(isIphone){
size=" width=\"50px\" height=\"34px\" ";
_28c="";
}
if(!isIphone){
_28d+="<img class=\"ct-start\" id=\""+this.boardName+"-start\" src=\""+this.boardImagePath+"/images/resultset_first"+this.getVersString()+".gif\" alt=\""+_js("Start position")+"\" title=\""+_js("Go to starting position")+"\"/>";
}
_28d+="<img class=\"ct-back\" id=\""+this.boardName+"-back\" "+size+" src=\""+this.boardImagePath+"/images/resultset_previous"+this.getVersString()+".gif\" alt=\""+_js("Previous Move")+"\" title=\""+_js("Go back a move")+"\"/>"+"<img class=\"ct-forward\" id=\""+this.boardName+"-forward\" "+size+" src=\""+this.boardImagePath+"/images/resultset_next"+this.getVersString()+".gif\" alt=\""+_js("Next Move")+"\" title=\""+_js("Go forward a move")+"\"/>"+_28c;
}
if(this.r){
_28d+="<img class=\"ct-forward\" id=\""+this.boardName+"-analyse\" src=\""+this.boardImagePath+"/images/anboard"+this.getVersString()+".gif\" alt=\""+_js("Analyse")+"\" title=\""+_js("Launch analysis board to explore different lines in this position")+"\"/>";
if(!this.g){
_28d+="<img class=\"ct-forward\" id=\""+this.boardName+"-showfen\" src=\""+this.boardImagePath+"/images/copy_fen"+this.getVersString()+".gif\" alt=\""+_js("Copy FEN")+"\" title=\""+_js("Show FEN for current position")+"\"/>";
}
}
if(this.canPasteFen){
_28d+="<img class=\"ct-forward\" id=\""+this.boardName+"-pastefen\" src=\""+this.boardImagePath+"/images/paste_fen"+this.getVersString()+".gif\" alt=\""+_js("Input FEN")+"\" title=\""+_js("Setup position from user supplied FEN or move list")+"\"/>";
}
_28d+="</span>";
_28d+="</div>";
if(this.puzzle){
var _28f="";
var _290="";
var _291="";
var _292="";
if(this.pieceSize>=29){
_28f=_js("Easy");
_290=_js("Medium");
_291=_js("Hard");
_292=_js("Help");
}else{
_28f=_js("D1");
_290=_js("D2");
_291=_js("D3");
_292=_js("?");
}
_28d+="<div><form action=\"\"><button type=\"button\" id=\""+this.boardName+"-puzzleSolution\" class=\"asolution-button\">"+_js("Show")+"</button><button id=\""+this.boardName+"-easyPuzzle\" type=\"button\" class=\"puzzle-difficulty\">"+_28f+"</button>"+"<button id=\""+this.boardName+"-mediumPuzzle\" type=\"button\" class=\"puzzle-difficulty\">"+_290+"</button>"+"<button id=\""+this.boardName+"-hardPuzzle\" type=\"button\" class=\"puzzle-difficulty\">"+_291+"</button>"+"<button id=\""+this.boardName+"-puzzleHelp\" type=\"button\" class=\"puzzle-difficulty\">"+_292+"</button>"+"<img alt=\"\" class=\"ct-forward\" id=\""+this.boardName+"-problemState\"></img><span id=\""+this.boardName+"-puzzleResult\"></span></form></div>";
_28d+="<div class=\"initially_hidden initially_invisible\" id=\""+this.boardName+"-moves\"></div>";
_28d+="<div class=\"initially_hidden initially_invisible\" id=\""+this.boardName+"-moves\"></div>";
}
_28b.innerHTML=_28d;
}
_279.appendChild(_28b);
if(this.problem){
var body=YAHOO.util.Dom.get("body");
if(body){
YAHOO.util.Dom.setStyle(body,"min-width",((this.pieceSize*8+_27b)+300+200+120)+"px");
}
}
};
Board.prototype.getPieceDiv=function(){
var _294=this.getBoardDiv();
var _295=document.createElement("div");
this.availPieceDivs[this.uptoId]=_295;
this.availIds[this.uptoId]=YAHOO.util.Dom.generateId(_295);
YAHOO.util.Dom.setStyle(_295,"visibility","hidden");
YAHOO.util.Dom.addClass(_295,"board-piece-start-style");
_294.appendChild(_295);
this.uptoId++;
return _295;
};
Board.prototype.flipToMove=function(_296){
return (_296=="w")?"b":"w";
};
Board.prototype.pieceCharToPieceNum=function(_297){
var _298;
switch(_297){
case "K":
_298=ChessPiece.KING;
break;
case "Q":
_298=ChessPiece.QUEEN;
break;
case "R":
_298=ChessPiece.ROOK;
break;
case "B":
_298=ChessPiece.BISHOP;
break;
case "N":
_298=ChessPiece.KNIGHT;
break;
case "P":
_298=ChessPiece.PAWN;
break;
}
return _298;
};
Board.prototype.pieceTypeToChar=function(_299){
switch(_299){
case ChessPiece.KING:
return "K";
case ChessPiece.QUEEN:
return "Q";
case ChessPiece.ROOK:
return "R";
case ChessPiece.BISHOP:
return "B";
case ChessPiece.KNIGHT:
return "N";
case ChessPiece.PAWN:
return "P";
}
return "?";
};
Board.prototype.canMoveKnight=function(_29a,_29b,_29c,_29d){
if(_29a+2==_29c&&_29b+1==_29d){
return true;
}
if(_29a+2==_29c&&_29b-1==_29d){
return true;
}
if(_29a-2==_29c&&_29b+1==_29d){
return true;
}
if(_29a-2==_29c&&_29b-1==_29d){
return true;
}
if(_29a+1==_29c&&_29b+2==_29d){
return true;
}
if(_29a-1==_29c&&_29b+2==_29d){
return true;
}
if(_29a+1==_29c&&_29b-2==_29d){
return true;
}
if(_29a-1==_29c&&_29b-2==_29d){
return true;
}
return false;
};
Board.prototype.canMovePawn=function(_29e,_29f,_2a0,_2a1,_2a2){
var _2a3=this.boardPieces[_2a0][_2a1];
var _2a4=this.boardPieces[_29e][_29f];
if(_2a2){
var _2a5=this.boardPieces[_2a2.toColumn][_2a2.toRow];
if(_2a5.piece==ChessPiece.PAWN){
if(_2a5.colour==ChessPiece.WHITE){
if(_2a2.fromRow==1&&_2a2.toRow==3){
if(_2a0==_2a2.fromColumn&&_29f==3&&_2a1==2&&(_29e==_2a0+1||_29e==_2a0-1)){
return true;
}
}
}else{
if(_2a2.fromRow==6&&_2a2.toRow==4){
if(_2a0==_2a2.fromColumn&&_29f==4&&_2a1==5&&(_29e==_2a0+1||_29e==_2a0-1)){
return true;
}
}
}
}
}
if(_2a3){
if(_2a4.colour==ChessPiece.WHITE){
if((_29e==_2a0+1||_29e==_2a0-1)&&(_29f==_2a1-1)){
return true;
}
}else{
if((_29e==_2a0+1||_29e==_2a0-1)&&(_29f==_2a1+1)){
return true;
}
}
}else{
if(_29e==_2a0){
if(_2a4.colour==ChessPiece.WHITE){
if(_29f==1){
if(_2a1==2){
return true;
}else{
if(_2a1==3&&this.boardPieces[_2a0][2]==null){
return true;
}
}
}else{
if(_29f+1==_2a1){
return true;
}
}
}else{
if(_29f==6){
if(_2a1==5){
return true;
}else{
if(_2a1==4&&this.boardPieces[_2a0][5]==null){
return true;
}
}
}else{
if(_29f-1==_2a1){
return true;
}
}
}
}
}
return false;
};
Board.prototype.canMoveStraight=function(_2a6,_2a7,_2a8,_2a9,_2aa,_2ab){
var _2ac=_2a6;
var _2ad=_2a7;
var _2ae=0;
var _2af=0;
if(_2a8>_2a6){
_2ae=1;
}else{
if(_2a8<_2a6){
_2ae=-1;
}
}
if(_2a9>_2a7){
_2af=1;
}else{
if(_2a9<_2a7){
_2af=-1;
}
}
if(clog){
console.log("deltaRow:"+_2af+" deltaCol:"+_2ae+" fromCol:"+_2a6+" fromRow:"+_2a7+" toCol:"+_2a8+" toRow:"+_2a9);
}
if(_2aa==ChessPiece.ROOK&&(_2ae!=0&&_2af!=0)){
return false;
}
if(_2aa==ChessPiece.BISHOP&&(_2ae==0||_2af==0)){
return false;
}
var _2b0=0;
while(true){
_2b0++;
_2a6+=_2ae;
_2a7+=_2af;
if(_2aa==ChessPiece.KING&&_2b0>1){
if(clog){
console.log("king count:"+_2b0+" toCol:"+_2a8+" toRow:"+_2a9);
}
if(_2b0!=2){
return false;
}
if(_2af!=0){
return false;
}
if(!(_2a8==6||_2a8==2)){
return false;
}
if(_2a8==2){
if(this.boardPieces[1][_2a7]||this.boardPieces[2][_2a7]||this.boardPieces[3][_2a7]){
return false;
}
if(!this.canCastleQueenSide[_2ab.colour]){
return false;
}
}else{
if(_2a8==6){
if(this.boardPieces[5][_2a7]||this.boardPieces[6][_2a7]){
if(clog){
console.log("king can't castle intervening piece");
}
return false;
}
if(!this.canCastleKingSide[_2ab.colour]){
if(clog){
console.log("king can't castle king side (made previously invalid) colour:"+_2ab.colour);
}
return false;
}
}else{
if(clog){
console.log("king not in col 2 or 6");
}
return false;
}
}
var _2b1="";
_2b1+=Move.columnToChar(_2ac);
_2b1+=String.fromCharCode("1".charCodeAt(0)+_2ad);
_2b1+=Move.columnToChar((_2ac+_2ae));
_2b1+=String.fromCharCode("1".charCodeAt(0)+(_2ad+_2af));
var move=this.createMoveFromString(_2b1);
var _2b3=this.boardPieces;
var _2b4=this.toMove;
var _2b5=this.saveCastling();
this.boardPieces=this.copyBoardPieces(true);
this.makeMove(move,this.boardPieces[_2ac][_2ad],false,this.moveAnimationLength,false,false);
this.restoreCastling(_2b5);
kingSafe=this.isKingSafe(_2ab.colour,move);
boardPool.putObject(this.boardPieces);
this.boardPieces=_2b3;
_2b3.count--;
this.toMove=_2b4;
if(clog){
console.log("kingSafe1:"+kingSafe);
}
if(!kingSafe){
return false;
}
var _2b1="";
_2b1+=Move.columnToChar(_2ac);
_2b1+=String.fromCharCode("1".charCodeAt(0)+_2ad);
_2b1+=Move.columnToChar(_2ac);
_2b1+=String.fromCharCode("1".charCodeAt(0)+_2ad);
var move=this.createMoveFromString(_2b1);
var _2b3=this.boardPieces;
var _2b4=this.toMove;
var _2b5=this.saveCastling();
this.boardPieces=this.copyBoardPieces(true);
this.makeMove(move,this.boardPieces[_2ac][_2ad],false,this.moveAnimationLength,false,false);
this.restoreCastling(_2b5);
kingSafe=this.isKingSafe(_2ab.colour,move);
boardPool.putObject(this.boardPieces);
this.boardPieces=_2b3;
_2b3.count--;
this.toMove=_2b4;
if(clog){
console.log("kingSafe2:"+kingSafe);
}
if(!kingSafe){
return false;
}
}
if(_2a6==_2a8&&_2a7==_2a9){
return true;
}
if(_2a6<0||_2a6>7||_2a7<0||_2a7>7){
return false;
}
if(this.boardPieces[_2a6][_2a7]!=null){
return false;
}
}
};
Board.prototype.canMove=function(_2b6,_2b7,_2b8,_2b9,_2ba){
var _2bb=_2b6.column;
var _2bc=_2b6.row;
if(_2b7>7||_2b7<0||_2b8>7||_2b8<0){
if(clog){
console.log("can't move coz out of bounds");
}
return false;
}
var _2bd=this.boardPieces[_2b7][_2b8];
var _2be=this.boardPieces[_2bb][_2bc];
if(_2be==null){
return false;
}
if(_2bd&&_2bd.colour==_2be.colour){
return false;
}
var _2bf=false;
if(_2b6.piece==ChessPiece.PAWN){
_2bf=this.canMovePawn(_2bb,_2bc,_2b7,_2b8,_2b9);
}else{
if(_2b6.piece==ChessPiece.KNIGHT){
_2bf=this.canMoveKnight(_2bb,_2bc,_2b7,_2b8);
}else{
_2bf=this.canMoveStraight(_2bb,_2bc,_2b7,_2b8,_2b6.piece,_2b6);
}
}
if(clog){
console.log("moveOk:"+_2bf);
}
var _2c0=true;
if(_2bf&&_2ba){
var _2c1="";
_2c1+=Move.columnToChar(_2bb);
_2c1+=String.fromCharCode("1".charCodeAt(0)+_2bc);
_2c1+=Move.columnToChar(_2b7);
_2c1+=String.fromCharCode("1".charCodeAt(0)+_2b8);
var move=this.createMoveFromString(_2c1);
var _2c3=this.cloneBoard();
_2c3.makeMove(move,_2c3.boardPieces[_2bb][_2bc],false,this.moveAnimationLength,false,false);
_2c0=_2c3.isKingSafe(_2b6.colour,move);
}
return _2bf&&_2c0;
};
Board.prototype.isKingMated=function(_2c4,_2c5){
var _2c6=null;
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var bp=this.boardPieces[i][j];
if(bp!=null&&bp.piece==ChessPiece.KING&&bp.colour==_2c4){
_2c6=bp;
break;
}
}
}
var _2ca=[[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[0,1],[0,-1],[2,0],[-2,0]];
var bp=_2c6;
for(var k=0;k<_2ca.length;k++){
if(this.canMove(bp,bp.column+_2ca[k][0],bp.row+_2ca[k][1],_2c5,true)){
return false;
}
}
var _2cc=this.getCandidateMoves(_2c4,_2c5,true,true);
if(_2cc.length>0){
return false;
}
return true;
};
Board.prototype.getCandidateMoves=function(_2cd,_2ce,_2cf,_2d0){
var _2d1=new Array();
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var bp=this.boardPieces[i][j];
var _2d5=[];
if(!bp||bp.colour!=_2cd){
continue;
}
switch(bp.piece){
case ChessPiece.KING:
if(_2d0){
continue;
}
_2d5=[[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[0,1],[0,-1],[2,0],[-2,0]];
break;
case ChessPiece.KNIGHT:
_2d5=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
break;
case ChessPiece.BISHOP:
for(var k=0;k<8;k++){
_2d5.push([1+k,1+k]);
_2d5.push([1+k,-1-k]);
_2d5.push([-1-k,1+k]);
_2d5.push([-1-k,-1-k]);
}
break;
case ChessPiece.QUEEN:
for(var k=0;k<8;k++){
_2d5.push([1+k,0]);
_2d5.push([1+k,1+k]);
_2d5.push([1+k,-1-k]);
_2d5.push([-1-k,0]);
_2d5.push([-1-k,1+k]);
_2d5.push([-1-k,-1-k]);
_2d5.push([0,-1-k]);
_2d5.push([0,1+k]);
}
break;
case ChessPiece.ROOK:
for(var k=0;k<8;k++){
_2d5.push([1+k,0]);
_2d5.push([-1-k,0]);
_2d5.push([0,-1-k]);
_2d5.push([0,1+k]);
}
break;
case ChessPiece.PAWN:
if(_2cd==ChessPiece.BLACK){
_2d5=[[0,-1],[1,-1],[-1,-1]];
if(j==6){
_2d5.push([0,-2]);
}
}else{
_2d5=[[0,1],[1,1],[-1,1]];
if(j==1){
_2d5.push([0,2]);
}
}
break;
}
for(var k=0;k<_2d5.length;k++){
if(this.canMove(bp,bp.column+_2d5[k][0],bp.row+_2d5[k][1],_2ce,true)){
_2d1.push(new Move(bp.column,bp.row,bp.column+_2d5[k][0],bp.row+_2d5[k][1]));
if(_2cf){
return _2d1;
}
}
}
}
}
return _2d1;
};
Board.prototype.isKingSafe=function(_2d7,_2d8){
var _2d9=null;
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var bp=this.boardPieces[i][j];
if(bp!=null&&bp.piece==ChessPiece.KING&&bp.colour==_2d7){
_2d9=bp;
break;
}
}
}
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var bp=this.boardPieces[i][j];
if(bp!=null&&bp.colour!=_2d7){
if(this.canMove(bp,_2d9.column,_2d9.row,_2d8,false)){
return false;
}
}
}
}
return true;
};
Board.prototype.freeBoardPieces=function(_2dd){
if(this.boardPieces){
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
if(this.boardPieces[i][j]!=null){
this.boardPieces[i][j].free();
this.boardPieces[i][j]=null;
}
}
if(_2dd){
this.boardPieces[i]=null;
}
}
}
if(_2dd){
this.boardPieces=null;
}
};
Board.prototype.freeBoard=function(){
this.freeBoardPieces(true);
this.freeMoveArray();
};
Board.prototype.freeMoveArray=function(){
if(this.moveArray){
for(var i=0;i<this.moveArray.length;i++){
var m=this.moveArray[i];
if(m){
m.freeMove();
this.moveArray[i]=null;
}
}
}
};
Board.prototype.cloneBoard=function(){
var _2e2=new Board();
_2e2.boardName=this.boardName;
_2e2.cloned=true;
_2e2.boardPieces=this.copyBoardPieces(true);
_2e2.moveArray=this.copyMoveArray(false);
_2e2.canCastleQueenSide=this.copyCastleQueenSide();
_2e2.canCastleKingSide=this.copyCastleKingSide();
_2e2.toMove=this.toMove;
_2e2.opponentColour=this.opponentColour;
_2e2.isFlipped=this.isFlipped;
_2e2.isUserFlipped=this.isUserFlipped;
_2e2.ignoreFlipping=this.ignoreFlipping;
_2e2.reverseFlip=this.reverseFlip;
_2e2.moveAnimationLength=this.moveAnimationLength;
_2e2.moveNumber=this.moveNumber;
_2e2.halfMoveNumber=this.halfMoveNumber;
_2e2.startFen=this.startFen;
_2e2.boardImagePath=this.boardImagePath;
if(this.prev_move){
_2e2.prev_move=this.prev_move.clone();
}else{
_2e2.prev_move=null;
}
return _2e2;
};
Board.prototype.copyCastleQueenSide=function(){
return [this.canCastleQueenSide[0],this.canCastleQueenSide[1]];
};
Board.prototype.copyCastleKingSide=function(){
return [this.canCastleKingSide[0],this.canCastleKingSide[1]];
};
Board.prototype.copyMoveArray=function(_2e3){
var _2e4=new Array();
if(!_2e3){
if(this.moveArray.length>0){
_2e4=this.moveArray.slice(0);
}
return _2e4;
}else{
for(var i=0;i<this.moveArray.length;i++){
var m=_2e4[i];
if(m){
var newM=m.clone(true);
_2e4[i]=newM;
}
}
return _2e4;
}
};
Board.prototype.copyBoardPieces=function(_2e8){
var _2e9=Board.createBoardArray();
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
if(this.boardPieces[i][j]!=null){
if(_2e8){
_2e9[i][j]=this.boardPieces[i][j].makeLightWeight();
}else{
_2e9[i][j]=this.boardPieces[i][j].copyPiece();
}
}else{
_2e9[i][j]=null;
}
}
}
return _2e9;
};
Board.prototype.createPiece=function(_2ec,_2ed,_2ee){
if(_2ee){
return new LightweightChessPiece(null,_2ec,_2ed,this);
}else{
return new ChessPiece(this.getPieceDiv(),_2ec,_2ed,this);
}
};
Board.prototype.restoreCastling=function(_2ef){
this.canCastleKingSide=_2ef.kingSide;
this.canCastleQueenSide=_2ef.queenSide;
};
Board.prototype.saveCastling=function(){
var _2f0=[this.canCastleQueenSide[0],this.canCastleQueenSide[1]];
var _2f1=[this.canCastleKingSide[0],this.canCastleKingSide[1]];
return {queenSide:_2f0,kingSide:_2f1};
};
var firstLightProf=true;
var firstHeavyProf=true;
Board.prototype.setupFromFenLightweight=function(fen,_2f3,flip,_2f5,_2f6){
var _2f7=false&&firstLightProf;
if(_2f7){
console.profile("setupFromFenLight");
}
this.setupFromFenGeneric(fen,_2f3,flip,true,_2f5,_2f6);
if(_2f7){
console.profileEnd();
}
};
Board.prototype.setupFromFenHeavyWeight=function(fen,_2f9,flip,_2fb,_2fc){
var _2fd=false&&firstHeavyProf;
if(_2fd){
console.profile("setupFromFenHeavy");
}
this.setupFromFenGeneric(fen,_2f9,flip,false,_2fb,_2fc);
if(_2fd){
console.profileEnd();
}
};
Board.prototype.setupFromFen=function(fen,_2ff,flip,_301,_302,_303){
if(_301){
this.setupFromFenLightweight(fen,_2ff,flip,_302,_303);
}else{
this.setupFromFenHeavyWeight(fen,_2ff,flip,_302,_303);
}
};
Board.prototype.setupFromFenGeneric=function(fen,_305,flip,_307,_308,_309){
if(ctime){
console.time("setupFromFen"+_307);
}
this.settingUpPosition=true;
var _30a=fen.split(" ");
var _30b=_30a[0].split("/");
this.halfMoveNumber=parseInt(_30a[4]);
this.moveNumber=parseInt(_30a[5])*2;
var _30c=0;
var row=8;
this.uptoId=0;
this.board_xy=null;
var _30e=_30a[2];
var _30f=null;
this.canCastleQueenSide=[false,false];
this.canCastleKingSide=[false,false];
if(_30e!="-"){
if(_30e.indexOf("K")>=0){
this.canCastleKingSide[ChessPiece.WHITE]=true;
}
if(_30e.indexOf("Q")>=0){
this.canCastleQueenSide[ChessPiece.WHITE]=true;
}
if(_30e.indexOf("k")>=0){
this.canCastleKingSide[ChessPiece.BLACK]=true;
}
if(_30e.indexOf("q")>=0){
this.canCastleQueenSide[ChessPiece.BLACK]=true;
}
}
if(_309){
this.startMoveNum=this.moveNumber;
}
if(_30a[1]=="w"){
if(_309){
this.startMoveNum--;
}
this.toMove=ChessPiece.WHITE;
this.opponentColour=ChessPiece.WHITE;
this.isFlipped=false;
this.moveNumber--;
}else{
this.toMove=ChessPiece.BLACK;
this.opponentColour=ChessPiece.BLACK;
this.isFlipped=true;
}
if(_308){
var _310=_30a[3];
if(_310!="-"&&_310.length==2){
var _311=_310[0];
var _312=parseInt(_310[1]);
if(_312==3){
_30f=this.createMoveFromString(_311+"2"+_311+"4");
}else{
_30f=this.createMoveFromString(_311+"7"+_311+"5");
}
_30f.prevMoveEnpassant=true;
this.prev_move=_30f;
}
}
if(_305){
this.toMove=(ChessPiece.BLACK==this.toMove)?ChessPiece.WHITE:ChessPiece.BLACK;
this.isFlipped=!this.isFlipped;
}
if(flip){
this.isFlipped=true;
}
if(this.reverseFlip){
this.isFlipped=!this.isFlipped;
}
if(this.ignoreFlipping){
this.isFlipped=false;
}
if(this.isUserFlipped){
this.isFlipped=!this.isFlipped;
}
this.updateToPlay();
this.setupPieceDivs();
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
this.boardPieces[i][j]=null;
}
}
for(var i=0;i<8;i++){
var line=_30b[i];
row--;
_30c=0;
for(var j=0;j<line.length;j++){
var c=line.charAt(j);
var code=line.charCodeAt(j);
var num=code-"0".charCodeAt(0);
if(num>0&&num<9){
while(num--){
var _319=this.boardPieces[_30c][row];
this.boardPieces[_30c][row]=null;
_30c++;
}
}else{
var _31a=(c+"").toLowerCase().charAt(0);
var _31b=ChessPiece.WHITE;
if(_31a==c){
_31b=ChessPiece.BLACK;
}
var cp;
switch(_31a){
case "k":
cp=this.createPiece(_31b,ChessPiece.KING,_307);
break;
case "q":
cp=this.createPiece(_31b,ChessPiece.QUEEN,_307);
break;
case "r":
cp=this.createPiece(_31b,ChessPiece.ROOK,_307);
break;
case "b":
cp=this.createPiece(_31b,ChessPiece.BISHOP,_307);
break;
case "n":
cp=this.createPiece(_31b,ChessPiece.KNIGHT,_307);
break;
case "p":
cp=this.createPiece(_31b,ChessPiece.PAWN,_307);
break;
default:
alert("unknown piece letter:"+_31a+" for fen:"+fen);
}
if(isGecko||isOpera){
cp.setPosition(_30c,row,false,null,this.moveAnimationLength);
cp.setVisible(true);
}
this.boardPieces[_30c][row]=cp;
this.pieces[this.uptoPiece]=cp;
this.pieces[this.uptoPiece].column=_30c;
this.pieces[this.uptoPiece].row=row;
this.uptoPiece++;
_30c++;
}
}
}
if(!isGecko){
for(var i=0;i<this.uptoPiece;i++){
this.pieces[i].setPosition(this.pieces[i].column,this.pieces[i].row,false,null,0);
}
}
if(!_307){
for(var i=0;i<this.uptoPiece;i++){
this.pieces[i].setVisible(true);
}
}
if(!_307){
this.createBoardCoords();
}
this.settingUpPosition=false;
if(ctime){
console.timeEnd("setupFromFen"+_307);
}
};
Board.prototype.resetMoveListScrollPosition=function(){
var _31d=this.movesDisplay.getMovesDisplay();
if(_31d){
var _31e=new YAHOO.util.Scroll(_31d,{scroll:{to:[0,0]}},0);
_31e.animate();
}
};
Board.prototype.changePieceSet=function(_31f,_320){
if(!this.showedIE6Warning){
var str=_js("Depending on your browser you may need to reload the<br/> page for piece size changes to properly take effect.");
alert(str.replace("<br/>","\n"));
}
this.showedIE6Warning=true;
if(check_bad_msie()){
if(!this.showedIE6Warning){
var str=_js("Internet Explorer version 6 is old and busted and does not support dynamic piece size changes.<br/> Please reload page to view new settings.");
alert(str.replace("<br/>","\n"));
}
this.showedIE6Warning=true;
return;
}
var _322=this.pieceSize;
this.pieceSet=_31f;
this.pieceSize=_320;
var _323=YAHOO.util.Dom.get(this.boardName+"-boardBorder");
var _324=0;
if(this.showCoordinates){
_324=15;
}
_323.className="";
YAHOO.util.Dom.addClass(_323,"ct-board-border"+this.squareColorClass);
YAHOO.util.Dom.setStyle(_323,"width",(this.pieceSize*8+_324)+"px");
YAHOO.util.Dom.setStyle(_323,"height",(this.pieceSize*8+_324)+"px");
var _325=YAHOO.util.Dom.get("ctb-"+this.boardName);
YAHOO.util.Dom.setStyle(_325,"width",(this.pieceSize*8)+"px");
YAHOO.util.Dom.setStyle(_325,"height",(this.pieceSize*8)+"px");
var _326="ct-white-square"+this.squareColorClass;
for(var i=7;i>=0;i--){
for(var j=0;j<8;j++){
var _329=this.getBoardDivFromId(this.boardName+"-s"+j+""+i);
_329.className="";
YAHOO.util.Dom.addClass(_329,_326);
YAHOO.util.Dom.setStyle(_329,"width",this.pieceSize+"px");
YAHOO.util.Dom.setStyle(_329,"height",this.pieceSize+"px");
var _32a=(((j+1)*(i+1))%19/19*100);
var _32b=((65-((j+1)*(i+1)))%19/19*100);
YAHOO.util.Dom.setStyle(_329,"background-position",_32a+"% "+_32b+"%");
_326=(_326=="ct-black-square"+this.squareColorClass)?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass;
}
_326=(_326=="ct-black-square"+this.squareColorClass)?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass;
}
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var cp=this.boardPieces[i][j];
if(cp){
cp.icon=get_image_str(ChessPiece.pieceIconNames[cp.colour][cp.piece],cp.board.boardImagePath,cp.board.pieceSet,cp.board.pieceSize,cp.board.addVersion);
if(YAHOO.util.Event.isIE||isOpera){
var _32d=cp.div;
_32d.innerHTML="<img src=\""+cp.icon+"\"/>";
var img=_32d.firstChild;
if(!isOpera){
fix_ie_png(img);
}
}else{
YAHOO.util.Dom.setStyle([cp.div],"backgroundImage","url("+cp.icon+")");
YAHOO.util.Dom.setStyle([cp.div],"background-repeat","no-repeat");
}
YAHOO.util.Dom.setStyle([cp.div],"height",this.pieceSize+"px");
YAHOO.util.Dom.setStyle([cp.div],"width",this.pieceSize+"px");
YAHOO.util.Dom.setStyle([cp.div],"left","");
YAHOO.util.Dom.setStyle([cp.div],"top","");
var xy=cp.getNewXYPosition(cp.column,cp.row);
YAHOO.util.Dom.setXY(cp.div,xy,false);
}
}
}
if(this.moveArray){
var move=this.moveArray[0];
while(move!=null){
if(move.taken){
var cp=move.taken;
if(cp.getNewXYPosition){
cp.icon=get_image_str(ChessPiece.pieceIconNames[cp.colour][cp.piece],cp.board.boardImagePath,cp.board.pieceSet,cp.board.pieceSize,cp.board.addVersion);
if(YAHOO.util.Event.isIE||isOpera){
var _32d=cp.div;
_32d.innerHTML="<img src=\""+cp.icon+"\"/>";
YAHOO.util.Dom.setStyle([cp.div],"position","relative");
var img=_32d.firstChild;
if(!isOpera){
fix_ie_png(img);
}
}else{
YAHOO.util.Dom.setStyle([cp.div],"backgroundImage","url("+cp.icon+")");
YAHOO.util.Dom.setStyle([cp.div],"background-repeat","no-repeat");
}
YAHOO.util.Dom.setStyle([cp.div],"height",this.pieceSize+"px");
YAHOO.util.Dom.setStyle([cp.div],"width",this.pieceSize+"px");
YAHOO.util.Dom.setStyle([cp.div],"left","");
YAHOO.util.Dom.setStyle([cp.div],"top","");
var xy=cp.getNewXYPosition(cp.column,cp.row);
YAHOO.util.Dom.setXY(cp.div,xy,false);
}
}
move=move.next;
}
}
if(this.problem){
var body=YAHOO.util.Dom.get("body");
if(body){
YAHOO.util.Dom.setStyle(body,"min-width",((this.pieceSize*8+_324)+300+200+120)+"px");
}
}
this.createBoardCoords();
};
Board.prototype.forwardMove=function(e){
if(this.blockFowardBack||this.deferredBlockForwardBack){
if(clog){
console.log("returning early from forward due to block forward on");
}
return;
}
var _333=false;
if(this.tactics&&this.tactics.problemActive){
if(clog){
console.log("not forwarding, tactic is active");
}
return;
}
this.blockForwardBack=true;
if(this.currentMove&&!this.currentMove.atEnd){
move=this.currentMove;
if(move){
if(clog){
console.log("forward move:"+move.output());
}
}else{
if(clog){
console.log("forward move with currentmove null");
}
}
if(move.endNode){
if(clog){
console.log("calling processendgame from forward move");
}
if(!_333){
this.problem.processEndgame("",true);
}
this.toggleToMove();
this.updateToPlay();
}else{
if(clog){
console.log("forwarding move:"+move.output());
}
var _334=null;
piece=this.boardPieces[move.fromColumn][move.fromRow];
if(move.promotion){
_334=move.promotion;
piece.prePromotionColumn=null;
piece.prePromotionRow=null;
}
this.updatePiece(piece,move.toColumn,move.toRow,true,true,false,_334,true);
this.toggleToMove();
this.updateToPlay();
var _335=this.currentMove;
if(clog){
if(_335){
console.log("after forward curmove:"+_335.output());
}else{
console.log("after forward cur move null");
}
}
for(var i=0;i<this.registeredForwardMovePostUpdateListeners.length;i++){
var _337=this.registeredForwardMovePostUpdateListeners[i].forwardMovePostUpdateCallback(move);
}
}
}else{
if(clog){
console.log("already at end");
}
for(var i=0;i<this.registeredForwardAtEndListeners.length;i++){
var _337=this.registeredForwardAtEndListeners[i].forwardAtEndCallback();
}
}
this.blockForwardBack=false;
};
Board.prototype.setupEventHandlers=function(){
this.timesLostFocus=0;
YAHOO.util.Event.addListener(document,"blur",this.lostFocus,this,true);
if(!this.avoidMouseoverActive){
YAHOO.util.Event.addListener(this.boardName+"-container","mouseover",function(e){
activeBoard=this;
},this,true);
}
var _339="keydown";
if(isGecko){
_339="keypress";
}
YAHOO.util.Event.addListener(document,_339,function(e){
var _33b=(e.target)?e.target:e.srcElement;
if(_33b.form){
return true;
}
if(activeBoard!=this){
return true;
}
switch(YAHOO.util.Event.getCharCode(e)){
case 37:
this.backMove();
break;
case 39:
this.forwardMove();
break;
default:
}
return true;
},this,true);
YAHOO.util.Event.addListener(this.boardName+"-forward","click",this.forwardMove,this,true);
YAHOO.util.Event.addListener(this.boardName+"-back","click",this.backMove,this,true);
YAHOO.util.Event.addListener(this.boardName+"-start","click",this.gotoStart,this,true);
YAHOO.util.Event.addListener(this.boardName+"-end","click",this.gotoEnd,this,true);
YAHOO.util.Event.addListener(this.boardName+"-play","click",this.playMoves,this,true);
YAHOO.util.Event.addListener(this.boardName+"-stop","click",this.stopPlayingMoves,this,true);
if(this.r){
YAHOO.util.Event.addListener(this.boardName+"-analyse","click",this.analysePosition,this,true);
YAHOO.util.Event.addListener(this.boardName+"-showfen","click",this.showBoardFen,this,true);
}
if(this.canPasteFen){
YAHOO.util.Event.addListener(this.boardName+"-pastefen","click",this.pasteFen,this,true);
}
};
Board.prototype.flipBoard=function(){
this.isUserFlipped=!this.isUserFlipped;
this.isFlipped=!this.isFlipped;
this.redrawBoard();
this.updateToPlay();
};
Board.prototype.lostFocus=function(){
this.timesLostFocus++;
};
Board.prototype.redrawBoard=function(){
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
var cp=this.boardPieces[i][j];
if(cp){
var xy=cp.getNewXYPosition(cp.column,cp.row);
YAHOO.util.Dom.setXY(cp.div,xy,false);
}
}
}
if(this.moveArray){
var move=this.moveArray[0];
while(move!=null){
if(move.taken){
var cp=move.taken;
if(cp.getNewXYPosition){
var xy=cp.getNewXYPosition(cp.column,cp.row);
YAHOO.util.Dom.setXY(cp.div,xy,false);
}
}
move=move.next;
}
}
this.createBoardCoords();
if(this.highlightFromTo){
if(!this.isFlipped){
var _341=YAHOO.util.Dom.get(this.boardName+"-s"+this.lastFromColumn+""+this.lastFromRow);
var _342=YAHOO.util.Dom.get(this.boardName+"-s"+this.lastToColumn+""+this.lastToRow);
}else{
var _341=YAHOO.util.Dom.get(this.boardName+"-s"+(7-this.lastFromColumn)+""+(7-this.lastFromRow));
var _342=YAHOO.util.Dom.get(this.boardName+"-s"+(7-this.lastToColumn)+""+(7-this.lastToRow));
}
this.updateFromTo(_341,_342,this.lastFromRow,this.lastFromColumn,this.lastToRow,this.lastToColumn);
}
};
Board.fenPositionOnly=function(fen){
var _344=fen.split(" ");
return _344[0]+" "+_344[1];
};
Board.fenStripMoveClock=function(fen){
var _346=fen.split(" ");
return _346[0]+" "+_346[1]+" "+_346[2]+" "+_346[3];
};
Board.fenSamePosition=function(fen1,fen2,_349){
if(!fen1||!fen2){
return false;
}
var f1=null;
var f2=null;
if(_349){
f1=Board.fenPositionOnly(fen1);
f2=Board.fenPositionOnly(fen2);
}else{
f1=Board.fenStripMoveClock(fen1);
f2=Board.fenStripMoveClock(fen2);
}
return (f1==f2);
};
Board.prototype.findFen=function(mv,brd,fen,_34f){
var res=this.findFen2(mv,brd,fen,true);
if(res.move){
return res.move;
}else{
if(_34f){
if(res.clockStrip){
return res.clockStrip;
}else{
if(res.fullStrip){
return res.fullStrip;
}
}
}
}
return null;
};
Board.prototype.findFen2=function(mv,brd,fen,_354){
var _355=brd.cloneBoard();
var res=Object();
var _357=null;
var _358=null;
res.move=null;
if(_354){
_355.gotoMoveIndex(-1,true,true,true,true);
}
var _359=null;
while(mv){
var _35a=_355.boardToFen();
if(_35a==fen){
res.move=_359;
res.clockStrip=null;
res.fullStrip=null;
return res;
}else{
if(Board.fenSamePosition(fen,_35a)){
_357=_359;
}else{
if(Board.fenSamePosition(fen,_35a,true)){
_358=_359;
}
}
}
if(mv.atEnd){
break;
}
if(mv.vars&&mv.vars.length>0){
for(var i=0;i<mv.vars.length;i++){
var _35c=findFen(mv.vars[i],_355,fen,false);
if(_35c.move){
return _35c;
}else{
if(_35c.clockStrip){
_357=_35c.clockStrip;
}else{
if(_35c.fullStrip){
_358=_35c.fullStrip;
}
}
}
}
}
if(clog){
console.log("about to make mv:"+mv.output());
}
_355.makeMove(mv,_355.boardPieces[mv.fromColumn][mv.fromRow],false,this.moveAnimationLength,false,false);
if(clog){
console.log("finished making mv");
}
_359=mv;
mv=mv.next;
if(clog){
console.log("toMove:"+_355.toMove);
}
_355.setCurrentMove(mv);
_355.toggleToMove();
}
if(_357){
res.clockStrip=_357;
}
if(_358){
res.fullStrip=_358;
}
return res;
};
Board.prototype.gotoFen=function(fen,_35e){
if(clog){
console.log("about to find fen for:"+fen);
}
var _35f=this.findFen(this.moveArray[0],this,fen,_35e);
if(_35f){
if(clog){
console.log("found move:"+_35f.output()+" for fen:"+fen);
}
this.gotoMoveIndex(_35f.index);
}else{
if(clog){
console.log("didn't find move for fen:"+fen);
}
}
};
Board.prototype.getMaxMoveIndex=function(){
return this.moveArray.length-1;
};
Board.prototype.gotoMoveIndex=function(_360,_361,_362,_363,_364){
if(clog){
console.log("going to move index:"+_360);
}
var _365=!_362;
if(!this.moveArray||this.moveArray.length<=_360||(_360==-1&&this.moveArray.length==0)){
return;
}
var _366=this.boardName+"-piecestaken";
var _367=YAHOO.util.Dom.get(_366);
if(_367){
_367.innerHTML="";
}
if(_360==-1){
var flip=false;
if(this.prev_move&&!this.prev_move.prevMoveEnpassant){
flip=true;
}
this.setupFromFen(this.startFen,flip,false,_364);
if(this.prev_move&&!this.prev_move.prevMoveEnpassant){
this.makeMove(this.prev_move,this.boardPieces[this.prev_move.fromColumn][this.prev_move.fromRow],!_362,this.moveAnimationLength,true,true);
this.updateToPlay();
}
if(this.moveArray&&this.moveArray.length>0){
this.setCurrentMove(this.moveArray[0],_361);
}else{
this.setCurrentMove(this.firstMove,_361);
}
if(!_361){
this.setForwardBack();
}
if(!_363){
for(var i=0;i<this.registeredGotoMoveIndexListeners.length;i++){
var _36a=this.registeredGotoMoveIndexListeners[i].gotoMoveIndexCallback(_360);
}
}
return;
}
var _36b=new Array();
var move=this.moveArray[_360];
if(clog&&move){
console.log("gotomoveindex move:"+move.output());
if(move.next){
console.log("gotomoveindex move.next:"+move.next.output());
}
if(move.prev){
console.log("gotomoveindex move.prev:"+move.prev.output());
}
}
var _36d=0;
if(move.next!=null){
this.setCurrentMove(move.next,_361);
}else{
if(clog){
console.log("move next null with move:"+move.output());
}
}
while(move!=null&&!move.dummy){
_36b[_36d++]=move;
move=move.prev;
}
var flip=false;
if(this.prev_move&&!this.prev_move.prevMoveEnpassant){
flip=true;
}
this.setupFromFen(this.startFen,flip,false,true);
if(this.prev_move&&!this.prev_move.prevMoveEnpassant){
if(clog){
console.log("gotomoveindex prev_move:"+this.prev_move.output());
}
this.makeMove(this.prev_move,this.boardPieces[this.prev_move.fromColumn][this.prev_move.fromRow],false,this.moveAnimationLength,true,true);
this.updateToPlay();
}
for(var i=_36d-1;i>=1;i--){
var move=_36b[i];
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],false,this.moveAnimationLength,true,false);
this.toggleToMove();
}
if(!_361){
this.convertPiecesFromLightWeight(_360);
}
var move=_36b[0];
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],_365,this.moveAnimationLength,true,true);
this.toggleToMove();
this.updateToPlay();
if(!_361){
this.setForwardBack();
}
if(!_363){
for(var i=0;i<this.registeredGotoMoveIndexListeners.length;i++){
var _36a=this.registeredGotoMoveIndexListeners[i].gotoMoveIndexCallback(_360);
}
}
};
Board.prototype.gotoStart=function(e){
if(this.lastFromSquare){
YAHOO.util.Dom.removeClass(this.lastFromSquare,"ct-from-square");
}
if(this.lastToSquare){
YAHOO.util.Dom.removeClass(this.lastToSquare,"ct-to-square");
}
this.gotoMoveIndex(-1);
if(this.problem){
if(this.currentMove&&this.currentMove.bestMoves){
this.problem.showBestMoves(this.currentMove,this.currentMove.bestMoves,this.currentMove.correctMove,this.currentMove.wrongMove);
}else{
this.problem.clearBestMoves();
}
}
};
Board.prototype.gotoEnd=function(e){
if(clog){
console.log("goto end called");
}
if(this.tactics&&this.tactics.problemActive){
this.tactics.autoForward=false;
this.tactics.markProblem(false,false,"NULL","NULL");
}
if(clog){
console.log("jumping to start");
}
this.gotoMoveIndex(-1,true,true,true);
var _370=0;
while(this.currentMove&&this.currentMove.next!=null){
var move=this.currentMove;
if(clog){
console.log("going to end move:"+move.output());
}
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],false,this.moveAnimationLength,true,true);
_370=move.index;
this.toggleToMove();
this.setCurrentMove(move.next);
}
for(var i=0;i<this.registeredGotoMoveIndexListeners.length;i++){
var _373=this.registeredGotoMoveIndexListeners[i].gotoMoveIndexCallback(_370);
}
};
Board.prototype.gotoPly=function(_374,_375){
if(clog){
console.log("goto ply called");
}
this.gotoMoveIndex(-1,true,true,true);
var cnt=1;
var _377=0;
while(cnt<=_374&&this.currentMove&&this.currentMove.next!=null){
var move=this.currentMove;
if(clog){
console.log("going to end move:"+move.output());
}
this.makeMove(move,this.boardPieces[move.fromColumn][move.fromRow],false,this.moveAnimationLength,true,true);
_377=move.index;
this.toggleToMove();
this.setCurrentMove(move.next);
cnt++;
}
if(_375){
for(var i=0;i<this.registeredGotoMoveIndexListeners.length;i++){
var _37a=this.registeredGotoMoveIndexListeners[i].gotoMoveIndexCallback(_377);
}
}
};
Board.prototype.playMove=function(self){
if(!self.keepPlayingMoves||!self.currentMove||!self.currentMove.next){
var play=YAHOO.util.Dom.get(this.boardName+"-play");
play.src=this.boardImagePath+"/images/control_play_blue"+this.getVersString()+".gif";
self.keepPlayingMoves=false;
return;
}
self.forwardMove();
setTimeout(function(){
self.playMove(self);
},self.pauseBetweenMoves);
};
Board.prototype.getVersString=function(){
var _37d=".vers"+SITE_VERSION;
if(!this.addVersion){
_37d="";
}
return _37d;
};
Board.prototype.playMoves=function(e){
this.keepPlayingMoves=true;
var play=YAHOO.util.Dom.get(this.boardName+"-play");
play.src=this.boardImagePath+"/images/disabled_control_play_blue"+this.getVersString()+".gif";
this.playMove(this);
};
Board.prototype.stopPlayingMoves=function(e){
this.keepPlayingMoves=false;
};
Board.prototype.pasteFen=function(e){
for(var i=0;i<this.registeredPasteFenClickedListeners.length;i++){
var _383=this.registeredPasteFenClickedListeners[i].pasteFenClickedCallback();
}
};
Board.prototype.showBoardFen=function(e){
var fen=this.boardToFen();
var _386=new YAHOO.widget.SimpleDialog("fenDialog",{fixedcenter:true,visible:true,draggable:false,constraintoviewport:true,buttons:[{id:"linkbutton4",text:"Test"},{text:_js("Ok"),handler:function(){
_386.hide();
},isDefault:true}]});
_386.setHeader(_js("Position FEN"));
_386.setBody("<textarea class=\"showPgn\" id=\"fenText\" rows=\"1\" readonly=\"true\" cols=\""+(fen.length+9)+"\">"+fen+"</textarea>");
_386.render(document.body);
_386.setFooter("<span id=\"copyToComment\"></span><span id=\"fenok\"></span>");
var _387=this;
if(this.problem&&this.problem.comments){
var _388=new YAHOO.widget.Button({type:"button",label:_js("Copy To Comment"),container:"fenok",onclick:{fn:function(){
_387.copyFenToComment(fen,Board.COPY_COMMENT_PROBLEM);
_386.hide();
}}});
}
if(this.gameComments){
var _389=new YAHOO.widget.Button({type:"button",label:_js("Copy To Game Comment"),container:"fenok",onclick:{fn:function(){
_387.copyFenToComment(fen,Board.COPY_COMMENT_GAME);
_386.hide();
}}});
}
if(this.playerComments){
var _38a=new YAHOO.widget.Button({type:"button",label:_js("Copy To Player Comment"),container:"fenok",onclick:{fn:function(){
_387.copyFenToComment(fen,Board.COPY_COMMENT_PLAYER);
_386.hide();
}}});
}
if(this.openingComments){
var _38b=new YAHOO.widget.Button({type:"button",label:_js("Copy To Opening Comment"),container:"fenok",onclick:{fn:function(){
_387.copyFenToComment(fen,Board.COPY_COMMENT_OPENING);
_386.hide();
}}});
}
var _38c=new YAHOO.widget.Button({type:"button",label:_js("Ok"),container:"fenok",onclick:{fn:function(){
_386.hide();
}}});
};
Board.prototype.copyFenToComment=function(fen,_38e){
switch(_38e){
case (Board.COPY_COMMENT_PROBLEM):
if(this.problem){
var flip=false;
var col=fen.split(" ")[1];
var col2=this.startFen.split(" ")[1];
if(col==col2){
flip=true;
}
this.problem.comments.copyFenToComment(fen,flip);
}
break;
case (Board.COPY_COMMENT_GAME):
this.gameComments.copyFenToComment(fen);
break;
case (Board.COPY_COMMENT_PLAYER):
this.playerComments.copyFenToComment(fen);
break;
case (Board.COPY_COMMENT_OPENING):
this.openingComments.copyFenToComment(fen);
break;
}
};
Board.COPY_COMMENT_PROBLEM=0;
Board.COPY_COMMENT_PLAYER=1;
Board.COPY_COMMENT_GAME=2;
Board.COPY_COMMENT_OPENING=3;
Board.prototype.copyAnalysisToComment=function(_392,fen,flip,_395){
switch(_395){
case (Board.COPY_COMMENT_PROBLEM):
if(this.problem){
this.problem.comments.copyAnalysisToComment(_392,fen,flip);
}
break;
case (Board.COPY_COMMENT_GAME):
this.gameComments.copyAnalysisToComment(_392,fen,flip);
break;
case (Board.COPY_COMMENT_PLAYER):
this.playerComments.copyAnalysisToComment(_392,fen,flip);
break;
case (Board.COPY_COMMENT_OPENING):
this.openingComments.copyAnalysisToComment(_392,fen,flip);
break;
}
};
Board.prototype.analysePosition=function(e){
window.parentBoard=this;
var _397=(this.pieceSize*8)+450+50;
var _398=(this.pieceSize*8)+250;
var _399=window.open("/windows/analyse.html","analysis_window","width="+_397+",height="+_398+",resizable=1,scrollbars=1,location=0,copyhistory=0,status=0,toolbar=0,menubar=0");
_399.focus();
};
Board.prototype.backMove=function(e){
if(this.blockFowardBack||this.deferredBlockForwardBack){
return;
}
var _39b=this.currentMove;
if(this.tactics){
if(this.tactics.problemActive){
return;
}
}
this.blockForwardBack=true;
if(this.currentMove&&this.currentMove.prev!=null){
YAHOO.util.Dom.removeClass(this.lastFromSquare,"ct-from-square");
YAHOO.util.Dom.removeClass(this.lastToSquare,"ct-to-square");
this.lastFromRow=null;
this.toggleToMove();
this.updateToPlay();
move=this.currentMove.prev;
if(move){
if(clog){
console.log("backwards moving to prev move:"+move.output()+" from current move:"+this.currentMove.output());
}
}
this.setCurrentMove(move);
piece=this.boardPieces[move.toColumn][move.toRow];
if(!piece){
if(clog){
console.log("got empty piece in backMove");
}
}
takenPiece=move.taken;
this.board_xy=null;
piece.setPosition(move.fromColumn,move.fromRow,true,null,this.moveAnimationLength);
this.boardPieces[move.fromColumn][move.fromRow]=piece;
if(move.promotion){
piece.changePiece("p");
}
piece.setVisible(true);
this.canCastleQueenSide[0]=move.preCastleQueenSide[0];
this.canCastleQueenSide[1]=move.preCastleQueenSide[1];
this.canCastleKingSide[0]=move.preCastleKingSide[0];
this.canCastleKingSide[1]=move.preCastleKingSide[1];
var _39c=false;
if(piece.piece==ChessPiece.KING&&Math.abs(move.fromColumn-move.toColumn)>1){
_39c=true;
}
this.moveNumber--;
if(this.moveNumber<=0){
this.moveNumber=1;
}
if(takenPiece&&!_39c){
this.board_xy=null;
var _39d=move.toColumn;
var _39e=move.toRow;
if(piece.piece==ChessPiece.PAWN&&move.fromColumn!=move.toColumn&&takenPiece.enPassant){
_39e=move.fromRow;
this.boardPieces[move.toColumn][move.toRow]=null;
}
takenPiece.setPosition(_39d,_39e,false,null,this.moveAnimationLength);
this.boardPieces[_39d][_39e]=takenPiece;
move.taken=null;
this.processTaken(takenPiece,false);
}else{
this.boardPieces[move.toColumn][move.toRow]=null;
}
if(_39c){
var _39f=move.toRow;
var _3a0;
var _3a1;
if(move.fromColumn>move.toColumn){
_3a0=0;
_3a1=3;
}else{
_3a0=7;
_3a1=5;
}
var _3a2=this.boardPieces[_3a1][_39f];
_3a2.setPosition(_3a0,_39f,true,null,this.moveAnimationLength);
this.boardPieces[_3a0][_39f]=_3a2;
this.boardPieces[_3a1][_39f]=null;
}
if(move!=null&&move.prev!=null&&move.prev.next!=move){
move=move.prev.next;
if(clog){
if(move){
console.log("moving backwards out of variation moving to:"+move.output());
}else{
console.log("jumping out of variation to null move");
}
}
}
for(var i=0;i<this.registeredBackMovePreCurrentListeners.length;i++){
var _3a4=this.registeredBackMovePreCurrentListeners[i].backMovePreCurrentCallback(move,_39b);
}
this.setCurrentMove(move);
this.setForwardBack();
}
this.blockForwardBack=false;
};
Board.prototype.getMovesToCurrent=function(){
var mvs=[];
var res=[];
var mv=this.currentMove;
if(!mv||!mv.prev){
return res;
}
mv=mv.prev;
while(mv){
mvs.push(mv);
mv=mv.prev;
}
for(var i=mvs.length-1;i>=0;i--){
res.push(mvs[i].toMoveString());
}
return res;
};
Board.prototype.processTaken=function(_3a9,_3aa){
var _3ab=this.boardName+"-piecestaken";
var _3ac=YAHOO.util.Dom.get(_3ab);
if(_3ac){
if(_3aa){
var _3ad=get_image_str(ChessPiece.pieceIconNames[_3a9.colour][_3a9.piece],this.boardImagePath,this.pieceSet,this.pieceTakenSize,this.addVersion);
_3ac.innerHTML=_3ac.innerHTML+"<img src=\""+_3ad+"\"/>";
}else{
var _3ae=_3ac.innerHTML.split("<");
_3ac.innerHTML="";
for(var i=1;i<_3ae.length-1;i++){
_3ac.innerHTML=_3ac.innerHTML+"<"+_3ae[i];
}
}
}
};
Pool=function(){
this.pool=new Array();
this.count=-1;
this.numGot=0;
this.numPut=0;
};
Pool.prototype.getObject=function(){
var o=null;
if(this.count>=0){
this.numGot++;
o=this.pool[this.count--];
}
return o;
};
Pool.prototype.putObject=function(o){
if(o!=null){
this.numPut++;
this.pool[++this.count]=o;
}
};
var boardPool=new Pool();
function touchHandler(_3b2){
var _3b3=_3b2.changedTouches,_3b4=_3b3[0],type="";
switch(_3b2.type){
case "touchstart":
type="mousedown";
break;
case "touchmove":
type="mousemove";
break;
case "touchend":
type="mouseup";
break;
default:
return;
}
var _3b6=document.createEvent("MouseEvent");
_3b6.initMouseEvent(type,true,true,window,1,_3b4.screenX,_3b4.screenY,_3b4.clientX,_3b4.clientY,false,false,false,false,0,null);
_3b4.target.dispatchEvent(_3b6);
_3b2.preventDefault();
}
function initIphone(_3b7){
_3b7.addEventListener("touchstart",touchHandler,true);
_3b7.addEventListener("touchmove",touchHandler,true);
_3b7.addEventListener("touchend",touchHandler,true);
_3b7.addEventListener("touchcancel",touchHandler,true);
}
FenBoard=function(fen,_3b9){
if(typeof _3b9.pieceSize=="undefined"){
_3b9.pieceSize=24;
}
_3b9.fenBoard=true;
_3b9.dontOutputNavButtons=true;
_3b9.avoidMouseoverActive=true;
this.chessapp=new ChessApp(_3b9);
this.chessapp.init();
this.chessapp.board.disableUpdateToPlay=true;
this.chessapp.board.setupFromFen(fen,false,false,false);
this.board=this.chessapp.board;
this.board.startFen=fen;
};