(function(){"use strict";var t={5265:function(t,e,n){var i=n(6369),s=n(7749),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[0==t.shutdownVal?e("MainContainer",{on:{shutdown:t.shutdown}}):t.shutdownVal?e("ShutDown",{on:{switchOn:t.switchOn}}):t._e()],1)},r=[],a=function(){var t=this,e=t._self._c;return e("div",{class:["main-container",t.hideAside||t.innerWidth<1072?"no-margin-left":""]},[e("AsideSection",{attrs:{"hide-aside":t.hideAside,content:t.content},on:{updateContent:t.updateContent,shutdown:t.shutdown}}),e("div",{staticClass:"fixed-icon-container",on:{click:t.toggleHideAside}},[e("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!t.hideAside,expression:"!hideAside"}],attrs:{icon:"fa-solid fa-chevron-circle-left",id:"close-aside"}}),e("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.hideAside,expression:"hideAside"}],attrs:{icon:"fa-solid fa-chevron-circle-right",id:"open-aside"}})],1),"home"==t.content||"email me"==t.content?e("ContentSection"):t._e()],1)},d=[],h=function(){var t=this,e=t._self._c;return 0==t.hideAside?e("div",{staticClass:"aside-section"},[t._m(0),e("ul",{staticClass:"nav"},[e("li",[e("a",{class:["home"==t.content?"active":""],attrs:{href:"#"},on:{click:function(e){return t.$emit("updateContent","home")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-home-alt"}}),t._v("   home ")],1)]),e("li",[e("a",{attrs:{href:"mailto:albert.m.leeu@gmail.com"},on:{click:function(e){return t.$emit("updateContent","home")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope-circle-check"}}),t._v("   email me ")],1)]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("shutdown")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-power-off"}}),t._v("   shutdown ")],1)])])]):t._e()},c=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"logo"}},[e("a",{attrs:{href:"#"}},[e("span",[t._v("A")]),t._v("lbert")])])}],l=n(8125),u=n(8321);l.vI.add(u.wzO,u.oTz,u.slZ,u.uI9,u.QGx,u.IA$,u.xiG);var f={emits:["updateContent","shutdown"],props:{hideAside:Boolean,content:{type:String,default:"home"}},methods:{selectContent(t){this.updateContent(t)}}},m=f,w=n(1001),p=(0,w.Z)(m,h,c,!1,null,null,null),v=p.exports,_=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"content-section"}},[e("HomeContent")],1)},g=[],x=function(){var t=this,e=t._self._c;return e("section",{staticClass:"home"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"home-details"},[t._m(0),t._m(1),e("p",[t._v(" I build ambitious User Interfaces with peices of "),e("span",{ref:"typedWords"})]),e("a",{staticClass:"btn",attrs:{href:`${t.publicPath}resume.pdf`,download:""}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-file-download"}}),t._v(" resume ")],1)]),e("div",{staticClass:"home-img"},[e("img",{staticClass:"avatar",attrs:{src:t.avatarUrl,alt:""}})])])])])},C=[function(){var t=this,e=t._self._c;return e("h3",{staticClass:"greeting"},[t._v("Hi, i am "),e("span",[t._v("Albert")])])},function(){var t=this,e=t._self._c;return e("h3",{staticClass:"profession"},[t._v("I am a "),e("span",[t._v("Front-End Developer")])])}],b=n.p+"img/avatar.9f7f09ed.jpg";l.vI.add(u.kwI);var I={data(){return{avatarUrl:b,publicPath:"/portfolio/",words:["modular code.","reusable logic.","composable units."],wordIndex:0,charIndex:0,typeSpeed:200,eraseSpeed:100,betweenWords:500}},methods:{type(){this.charIndex<this.words[this.wordIndex].length?(this.$refs.typedWords.innerHTML+=this.words[this.wordIndex].charAt(this.charIndex),this.charIndex++,setTimeout(this.type,this.typeSpeed)):setTimeout(this.erase,this.betweenWords)},erase(){this.charIndex>0?(this.$refs.typedWords.innerHTML=this.words[this.wordIndex].substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.erase,this.eraseSpeed)):(this.wordIndex++,this.wordIndex==this.words.length&&(this.wordIndex=0),setTimeout(this.type,this.typeSpeed))}},mounted(){setTimeout(this.type,this.betweenWords)}},A=I,y=(0,w.Z)(A,x,C,!1,null,null,null),O=y.exports,L={components:{HomeContent:O}},T=L,$=(0,w.Z)(T,_,g,!1,null,null,null),k=$.exports;l.vI.add(u.jio,u.Bc6);var S={emits:["shutdown"],components:{AsideSection:v,ContentSection:k},data(){return{hideAside:!1,innerWidth:2e3,content:"home"}},methods:{toggleHideAside(){this.hideAside?this.hideAside=!1:this.hideAside=!0},updateContent(t="home"){this.content=t,this.hideAside=!0},shutdown(){this.$emit("shutdown"),this.$destroy()}},mounted(){this.innerWidth=window.innerWidth,window.innerWidth<1072&&(this.hideAside=!0),window.addEventListener("resize",(()=>{this.innerWidth=window.innerWidth}))}},W=S,Z=(0,w.Z)(W,a,d,!1,null,null,null),H=Z.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shutdown-container"},[e("h1",{ref:"heading"},[t._v("please wait")]),e("div",{staticClass:"shutdown-clock"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.timeLeft>0,expression:"timeLeft > 0"}],ref:"seconds"}),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.timeLeft,expression:"timeLeft == 0"}]},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-power-off"},on:{click:t.switchOn}})],1)])])},M=[];l.vI.add(u.oTz);var P={emits:["switchOn"],data(){return{timeLeft:6}},watch:{timeLeft(t){0==t&&setInterval((()=>{this.$refs.heading.innerHTML="switch on"}),500)}},methods:{countDown(){this.timeLeft>0&&this.timeLeft--,this.timeLeft>0&&(this.$refs.seconds.innerHTML=this.timeLeft.toString(),setTimeout(this.countDown,1e3))},switchOn(){this.$emit("switchOn"),this.$destroy()}},mounted(){this.timeLeft=6,this.countDown()}},D=P,N=(0,w.Z)(D,j,M,!1,null,null,null),V=N.exports,z={name:"App",components:{MainContainer:H,ShutDown:V},data(){return{shutdownVal:!0}},methods:{shutdown(){this.shutdownVal=!0},switchOn(){this.shutdownVal=!1}}},E=z,G=(0,w.Z)(E,o,r,!1,null,null,null),U=G.exports;i.ZP.component("font-awesome-icon",s.GN),i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(U)}).$mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,o){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],o=t[c][2];for(var a=!0,d=0;d<i.length;d++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[d])}))?i.splice(d--,1):(a=!1,o<r&&(r=o));if(a){t.splice(c--,1);var h=s();void 0!==h&&(e=h)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/portfolio/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,r=i[0],a=i[1],d=i[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(d)var c=d(n)}for(e&&e(i);h<r.length;h++)o=r[h],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5265)}));i=n.O(i)})();
//# sourceMappingURL=app.06da3763.js.map