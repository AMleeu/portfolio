(function(){"use strict";var t={4084:function(t,e,i){var n=i(6369),s=i(7749),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[0==t.shutdownVal?e("MainContainer",{on:{shutdown:t.shutdown}}):t.shutdownVal?e("ShutDown",{attrs:{shutDownCausedBy:t.shutDownCausedBy},on:{switchOn:t.switchOn}}):t._e()],1)},r=[],a=function(){var t=this,e=t._self._c;return e("div",{class:["main-container",t.hideAside||t.innerWidth<1072?"no-margin-left":""]},[e("AsideSection",{attrs:{"hide-aside":t.hideAside,content:t.content},on:{updateContent:t.updateContent,shutdown:t.shutdown}}),e("div",{class:["fixed-icon-container",this.innerWidth<=508?"w-508":""],on:{click:t.toggleHideAside}},[e("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!t.hideAside,expression:"!hideAside"}],attrs:{icon:"fa-solid fa-chevron-circle-left",id:"close-aside"}})],1),e("div",{staticClass:"fixed-icon-container",on:{click:t.toggleHideAside}},[e("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.hideAside,expression:"hideAside"}],attrs:{icon:"fa-solid fa-chevron-circle-right",id:"open-aside"}})],1),"home"==t.content||"email me"==t.content?e("ContentSection"):t._e()],1)},d=[],h=function(){var t=this,e=t._self._c;return 0==t.hideAside?e("div",{staticClass:"aside-section"},[t._m(0),e("ul",{staticClass:"nav"},[e("li",[e("a",{class:["home"==t.content?"active":""],attrs:{href:"#"},on:{click:function(e){return t.$emit("updateContent","home")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-home-alt"}}),t._v("   home ")],1)]),e("li",[e("a",{attrs:{href:"mailto:albert.m.leeu@gmail.com"},on:{click:function(e){return t.$emit("updateContent","home")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope-circle-check"}}),t._v("   email me ")],1)]),e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.$emit("shutdown")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-power-off"}}),t._v("   shutdown ")],1)])])]):t._e()},u=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"logo"}},[e("a",{attrs:{href:"#"}},[e("span",[t._v("A")]),t._v("lbert")])])}],c=i(8125),l=i(8321);c.vI.add(l.wzO,l.oTz,l.slZ,l.uI9,l.QGx,l.IA$,l.xiG);var f={emits:["updateContent","shutdown"],props:{hideAside:Boolean,content:{type:String,default:"home"}},methods:{selectContent(t){this.updateContent(t)}}},m=f,w=i(1001),p=(0,w.Z)(m,h,u,!1,null,null,null),v=p.exports,_=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"content-section"}},[e("HomeContent")],1)},I=[],g=function(){var t=this,e=t._self._c;return e("section",{staticClass:"home"},[e("div",{staticClass:"content-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"home-details"},[t._m(0),t._m(1),e("p",[t._v(" I build ambitious User Interfaces with peices of "),e("span",{ref:"typedWords"})]),e("a",{staticClass:"btn",attrs:{href:`${t.publicPath}resume.pdf`,download:""}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-file-download"}}),t._v(" download CV ")],1)]),e("div",{staticClass:"home-img"},[e("img",{staticClass:"avatar",attrs:{src:t.avatarUrl,alt:""}})])])])])},O=[function(){var t=this,e=t._self._c;return e("h3",{staticClass:"greeting"},[t._v("Hi, i am "),e("span",[t._v("Albert")])])},function(){var t=this,e=t._self._c;return e("h3",{staticClass:"profession"},[t._v("I am a "),e("span",[t._v("Front-End Developer")])])}],y=i.p+"img/avatar.9f7f09ed.jpg";c.vI.add(l.kwI);var D={data(){return{avatarUrl:y,publicPath:"/portfolio/",words:["modular code.","reusable logic.","composable units."],wordIndex:0,charIndex:0,typeSpeed:200,eraseSpeed:100,betweenWords:500,timeOutID_type1:null,timeOutID_type2:null,timeOutID_type3:null,timeOutID_erase1:null,timeOutID_erase2:null}},methods:{type(){this.charIndex<this.words[this.wordIndex].length?(this.$refs.typedWords.innerHTML+=this.words[this.wordIndex].charAt(this.charIndex),this.charIndex++,this.timeOutID_type1=setTimeout(this.type,this.typeSpeed)):this.timeOutID_erase1=setTimeout(this.erase,this.betweenWords)},erase(){this.charIndex>0?(this.$refs.typedWords.innerHTML=this.words[this.wordIndex].substring(0,this.charIndex-1),this.charIndex--,this.timeOutID_erase2=setTimeout(this.erase,this.eraseSpeed)):(this.wordIndex++,this.wordIndex==this.words.length&&(this.wordIndex=0),this.timeOutID_type2=setTimeout(this.type,this.typeSpeed))}},mounted(){this.timeOutID_type3=setTimeout(this.type,this.betweenWords)},beforeDestroy(){clearTimeout(this.timeOutID_type1),clearTimeout(this.timeOutID_type2),clearTimeout(this.timeOutID_type3),clearTimeout(this.timeOutID_erase1),clearTimeout(this.timeOutID_erase2)}},C=D,x=(0,w.Z)(C,g,O,!1,null,null,null),b=x.exports,A={components:{HomeContent:b}},T=A,L=(0,w.Z)(T,_,I,!1,null,null,null),S=L.exports;c.vI.add(l.jio,l.Bc6);var k={emits:["shutdown"],components:{AsideSection:v,ContentSection:S},data(){return{hideAside:!1,innerWidth:2e3,isShuttingDown:!1,content:"home"}},methods:{toggleHideAside(){this.hideAside?this.hideAside=!1:this.hideAside=!0},updateContent(t="home"){this.content=t,this.hideAside=!0},shutdown(){this.$emit("shutdown","user"),this.$destroy()}},mounted(){this.innerWidth=window.innerWidth,window.innerWidth<1072&&(this.hideAside=!0),window.addEventListener("resize",(()=>{this.innerWidth=window.innerWidth}))}},W=k,$=(0,w.Z)(W,a,d,!1,null,null,null),H=$.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shutdown-container"},[e("h1",{ref:"heading"},[t._v(t._s(t.shutDownMsg))]),e("div",{staticClass:"shutdown-clock"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.timeLeft>0,expression:"timeLeft > 0"}],ref:"seconds"}),e("span",{directives:[{name:"show",rawName:"v-show",value:0==t.timeLeft,expression:"timeLeft == 0"}]},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-power-off"},on:{click:t.switchOn}})],1)])])},M=[];c.vI.add(l.oTz);var j={emits:["switchOn"],props:{shutDownCausedBy:String},data(){return{timeLeft:6,timeOutID_heading:null,timeOutID_seconds:null}},watch:{timeLeft(t){0==t&&(this.timeOutID_heading=setTimeout((()=>{this.$refs.heading.innerHTML="switch on"}),500))}},computed:{shutDownMsg(){return"user"==this.shutDownCausedBy?"good bye":"hello"}},methods:{countDown(){this.timeLeft>0&&this.timeLeft--,this.timeLeft>0&&(this.$refs.seconds.innerHTML=this.timeLeft.toString(),this.timeOutID_seconds=setTimeout(this.countDown,1e3))},switchOn(){this.$emit("switchOn"),this.$destroy()}},mounted(){this.timeLeft=6,this.countDown()},beforeDestroy(){clearTimeout(this.timeOutID_heading),clearTimeout(this.timeOutID_seconds)}},B=j,P=(0,w.Z)(B,Z,M,!1,null,null,null),V=P.exports,N={name:"App",components:{MainContainer:H,ShutDown:V},data(){return{shutdownVal:!0,shutDownCausedBy:"initial load"}},methods:{shutdown(t){this.shutDownCausedBy=t,this.shutdownVal=!0},switchOn(){this.shutdownVal=!1}}},z=N,E=(0,w.Z)(z,o,r,!1,null,null,null),G=E.exports;n.ZP.component("font-awesome-icon",s.GN),n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(G)}).$mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,o){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],o=t[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[d])}))?n.splice(d--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var h=s();void 0!==h&&(e=h)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,s,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/portfolio/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,r=n[0],a=n[1],d=n[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(d)var u=d(i)}for(e&&e(n);h<r.length;h++)o=r[h],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4084)}));n=i.O(n)})();
//# sourceMappingURL=app.d837168b.js.map