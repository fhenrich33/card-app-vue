(function(e){function r(r){for(var n,a,i=r[0],u=r[1],s=r[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(r);while(l.length)l.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(n=!1)}n&&(c.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({"pile-info":"pile-info"}[e]||e)+"."+{"pile-info":"1e2d1c85"}[e]+".js"}function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t={"pile-info":1};a[e]?r.push(a[e]):0!==a[e]&&t[e]&&r.push(a[e]=new Promise((function(r,t){for(var n="css/"+({"pile-info":"pile-info"}[e]||e)+"."+{"pile-info":"8fd203bd"}[e]+".css",o=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===o))return r()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===n||d===o)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var n=r&&r.target&&r.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),t(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)r.push(n[2]);else{var c=new Promise((function(r,t){n=o[e]=[r,t]}));r.push(n[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(r){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,t[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/card-app-vue/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=r,s=s.slice();for(var l=0;l<s.length;l++)r(s[l]);var f=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),a=t.n(n);a.a},"163d":function(e,r,t){"use strict";var n=t("f46a"),a=t.n(n);a.a},"43d5":function(e,r,t){"use strict";var n=t("c806"),a=t.n(n);a.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c=(t("034f"),t("2877")),i={},u=Object(c["a"])(i,a,o,!1,null,null,null),s=u.exports,d=(t("d3b7"),t("8c4f")),l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("app-header",[e._v("Cards")]),t("form",{attrs:{novalidate:"true"},on:{submit:e.checkForm}},[e.errors.length?t("h3",{staticClass:"error-message-header"},[t("b",[e._v("Please correct the following error(s):")]),t("ul",{staticClass:"error-message"},e._l(e.errors,(function(r){return t("li",{key:r},[e._v(e._s(r))])})),0)]):e._e(),t("div",[t("ul",e._l(e.cards,(function(e,r){return t("li",{key:r},[t("card-input",{attrs:{card:e,number:r+1,haslabel:!0}})],1)})),0)]),t("div",{staticClass:"rotation-card"},[t("h1",[e._v("Rotation Card")]),t("card-input",{attrs:{card:e.rotationCard}})],1),t("input",{staticClass:"submit",attrs:{type:"submit",disabled:e.loading},domProps:{value:e.loading?"Loading...":"Submit"}})])],1)},f=[],p=(t("4de4"),t("d81d"),t("45fc"),t("96cf"),t("1da1")),h=t("5530"),m=t("2f62"),v=t("a4ce"),b=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.haslabel?t("label",{attrs:{for:"card"}},[e._v("Card "+e._s(e.number?e.number:""))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.card,expression:"card.card"}],class:{error:e.card.error},attrs:{type:"text",name:"card",size:"2",maxlength:"2",placeholder:"Enter card"},domProps:{value:e.card.card},on:{keyup:function(r){e.card.card=e.card.card.toUpperCase()},blur:function(r){e.card.error=!!e.card.card.length&&!/[\d|AKQJ][HDCS]/.test(e.card.card)},input:function(r){r.target.composing||e.$set(e.card,"card",r.target.value)}}})])},g=[],C=(t("a9e3"),{name:"CardInput",props:{card:{type:Object,required:!0},number:{type:Number,required:!1},haslabel:{type:Boolean,required:!1}}}),y=C,k=(t("7308"),Object(c["a"])(y,b,g,!1,null,"d3c5f020",null)),_=k.exports,O={name:"CardSelect",components:{"app-header":v["a"],"card-input":_},data:function(){return{loading:!1,errors:[],rotationCard:{card:"",error:!1},cards:[{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1},{card:"",error:!1}]}},methods:Object(h["a"])({},Object(m["b"])(["newDeck"]),{checkForm:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.preventDefault(),this.errors=[],this.rotationCard.card||this.errors.push("Pick a rotation card."),this.cards.some((function(e){return e.card}))||this.errors.push("Pick at least one valid card."),(this.cards.some((function(e){return e.error}))||this.rotationCard.error)&&this.errors.push("Pick only valid cards with signature RankSuit (e.g. KH 2S 6C)"),this.errors.length){e.next=19;break}return this.loading=!0,t=this.cards.map((function(e){return e.card})).filter((function(e){return e.length})),e.prev=8,e.next=11,this.newDeck({cards:t,rotationCard:this.rotationCard.card});case 11:n=e.sent,this.$router.push("/pile-info/".concat(n)),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](8),this.loading=!1,alert("We couldn't finish setting up your cards, are you offline? 🔌");case 19:case"end":return e.stop()}}),e,this,[[8,15]])})));function r(r){return e.apply(this,arguments)}return r}()})},w=O,j=(t("43d5"),Object(c["a"])(w,l,f,!1,null,"1b8f2782",null)),x=j.exports;n["a"].use(d["a"]);var P,R=[{path:"/",name:"CardSelect",component:x},{path:"/pile-info/:deckId",name:"PileInfo",component:function(){return t.e("pile-info").then(t.bind(null,"1898"))}}],S=new d["a"]({mode:"history",base:"/card-app-vue/",routes:R}),T=S,E={deck:[],rotationCard:"",pickedCards:[],suits:["S","C","D","H"],ranks:["3","4","5","6","7","8","9","10","J","Q","K","A","2"]},A=(t("4160"),t("c975"),t("b64b"),t("ac1f"),t("1276"),t("159b"),t("3835")),D=function(e,r){return e.indexOf(r)},L=function(e,r){return r.sort((function(r,t){return D(e,r)-D(e,t)}))},I=function(e){var r={};e.forEach((function(e){var t=e.split(""),n=Object(A["a"])(t,1),a=n[0];r[a]?r[a].push(e):r[a]=[e]}));var t=Object.keys(r).map((function(e){return r[e].length})),n=t.some((function(e){return e>=3}))&&t.filter((function(e){return e>=2})).length>=2;return n},N=function(e){for(var r=new Array(1<<e.length),t=function(t){r[t]=e.filter((function(e,r){return t&1<<r}))},n=0;n<r.length;n++)t(n);return r},F={sortedPile:function(e){var r=e.deck,t=e.pickedCards;return L(r,t).reverse()},highestCard:function(e,r){var t=r.sortedPile;return t[0]},fullHouseCombo:function(e){var r=e.pickedCards;return N(r).filter((function(e){return 5===e.length})).filter(I)}},K=(t("99af"),t("0481"),t("fb6a"),t("4069"),t("ade3")),H=t("2909"),U="PICK_ROTATION_CARD",$="PICK_CARDS",q="REORDER_WITH_ROTATION_CARD",B="STACK_DECK",J=(P={},Object(K["a"])(P,U,(function(e,r){return e.rotationCard=r})),Object(K["a"])(P,$,(function(e,r){return e.pickedCards=r})),Object(K["a"])(P,q,(function(e){var r=e.rotationCard,t=e.ranks,n=e.suits,a=r.split(""),o=Object(A["a"])(a,2),c=o[0],i=o[1],u=function(e,r){return[].concat(Object(H["a"])(r.slice(r.indexOf(e)+1)),Object(H["a"])(r.slice(0,r.indexOf(e)+1)))};e.ranks=u(c,t),e.suits=u(i,n)})),Object(K["a"])(P,B,(function(e){return e.deck=e.suits.map((function(r){return e.ranks.map((function(e){return e+r}))})).flat()})),P),M=t("bc3a"),Q=t.n(M),W=Q.a.create({baseURL:"https://deckofcardsapi.com/api/deck",headers:{Accept:"application/json","Content-Type":"application/json"}}),z={newDeck:function(){return W.get("/new/draw/?count=52")},addCardsToPile:function(e,r){return W.get("".concat(W.defaults.baseURL,"/").concat(e,"/pile/user_cards/add/?cards=").concat(r))},addRotationCardToPile:function(e,r){return W.get("".concat(W.defaults.baseURL,"/").concat(e,"/pile/rotation_card/add/?cards=").concat(r))},getCardsFromPile:function(e){return W.get("".concat(W.defaults.baseURL,"/").concat(e,"/pile/user_cards/list/"))},getRotationCardFromPile:function(e){return W.get("".concat(W.defaults.baseURL,"/").concat(e,"/pile/rotation_card/list/"))}},G={newDeck:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(r,t){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.cards,a=t.rotationCard,e.next=3,z.newDeck();case 3:if(o=e.sent,c=o.data.deck_id,n.some((function(e){return e===a}))){e.next=10;break}return e.next=8,z.addRotationCardToPile(c,a);case 8:e.next=11;break;case 10:n=[a].concat(Object(H["a"])(n.filter((function(e){return e!==a}))));case 11:return e.next=13,z.addCardsToPile(c,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));function r(r,t){return e.apply(this,arguments)}return r}(),getFromPile:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(r,t){var n,a,o,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.commit,e.next=3,z.getCardsFromPile(t);case 3:return a=e.sent,e.next=6,z.getRotationCardFromPile(t);case 6:o=e.sent,c=a.data.piles.user_cards.cards.map((function(e){return e.code})),i=o.data.piles.rotation_card?o.data.piles.rotation_card.cards[0].code:c[0],n($,c),n(U,i),n(q),n(B);case 13:case"end":return e.stop()}}),e)})));function r(r,t){return e.apply(this,arguments)}return r}()};n["a"].use(m["a"]);var V=new m["a"].Store({state:E,getters:F,mutations:J,actions:G});n["a"].config.productionTip=!1,new n["a"]({router:T,store:V,render:function(e){return e(s)}}).$mount("#app")},7308:function(e,r,t){"use strict";var n=t("f459"),a=t.n(n);a.a},"85ec":function(e,r,t){},a4ce:function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"base-header"},[t("h1",[e._t("default")],2)])},a=[],o={name:"AppHeader"},c=o,i=(t("163d"),t("2877")),u=Object(i["a"])(c,n,a,!1,null,"6d91d250",null);r["a"]=u.exports},c806:function(e,r,t){},f459:function(e,r,t){},f46a:function(e,r,t){}});
//# sourceMappingURL=app.89a9341b.js.map