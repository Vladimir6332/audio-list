(this["webpackJsonpaudio-list"]=this["webpackJsonpaudio-list"]||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(12),s=c.n(a),r=(c(28),c(8)),i=c(3);c(32),c(33);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}var u=n.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"});function j(e,t){var c=e.title,a=e.titleId,s=o(e,["title","titleId"]);return n.createElement("svg",l({className:"github__icon",height:20,viewBox:"0 0 16 16",width:20,"aria-hidden":"true",ref:t,"aria-labelledby":a},s),c?n.createElement("title",{id:a},c):null,u)}var b,d=n.forwardRef(j),h=(c.p,c(1)),f=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsxs)("div",{className:"footer__info",children:[Object(h.jsxs)("div",{className:"github",children:[Object(h.jsx)(d,{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"https://github.com/Vladimir6332",className:"github__link",children:"Vladimir"})})]}),Object(h.jsx)("div",{className:"classes",children:Object(h.jsx)("span",{className:"classes__year",children:"2021"})})]})})},O=(c(35),c.p+"static/media/big-wheel.d67fe781.svg"),m=c.p+"static/media/small-wheel.69e9f7bc.svg",p=function(){return Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("a",{className:"logo__link",href:"/",children:[Object(h.jsxs)("div",{className:"logo__picture",children:[Object(h.jsx)("img",{className:"wheel wheel_1",src:O,alt:""}),Object(h.jsx)("img",{className:"wheel wheel_2",src:m,alt:""})]}),Object(h.jsx)("h1",{className:"logo__title",children:"Alist"})]})})},v=(c(36),function(){return Object(h.jsx)("div",{className:"navigation",children:Object(h.jsx)("div",{className:"burger",children:Object(h.jsx)("div",{className:"burger__line"})})})}),x=(c(37),function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(p,{}),Object(h.jsx)(v,{})]})}),g=c(14),N=(c(38),c(21)),_=c.n(N),y=(c(39),function(e){var t=e.onChange,c=e.keyboardRef,a=e.defaultValue,s=Object(n.useState)("default"),r=Object(g.a)(s,2),i=r[0],l=r[1];return Object(h.jsx)(_.a,{keyboardRef:function(e){return c.current=e},layoutName:i,onChange:t,onKeyPress:function(e){"{shift}"!==e&&"{lock}"!==e||l("default"===i?"shift":"default")},onInit:function(e){return e.setInput(a)}})}),w=c.p+"static/media/search-icon.30c17b68.svg",k=c.p+"static/media/keyboard.a1659d17.svg";!function(e){e.CHANGE_QUERY="ALIST_CHANGE_QUERY"}(b||(b={}));var C=r.c,E=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),c=t[0],a=t[1],s=Object(n.useRef)(),i=Object(r.b)(),l=C((function(e){return e.query.value})),o=function(e){i({type:b.CHANGE_QUERY,payload:e}),console.log("DISPATCH ".concat(e))};return Object(h.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),console.log("submit")},children:[Object(h.jsx)("button",{className:"search__button",type:"submit",children:Object(h.jsx)("svg",{className:"search__icon",children:Object(h.jsx)("use",{xlinkHref:"".concat(w,"#Capa_3")})})}),Object(h.jsx)("input",{className:"search__input",type:"text",placeholder:"Write query",value:l,onChange:function(e){var t,c=e.target.value;o(c),null===(t=s.current)||void 0===t||t.setInput(c)}}),Object(h.jsx)("button",{className:"keyboard__button ",type:"button",onClick:function(){var e;(a(!c),c)&&(null===(e=s.current)||void 0===e||e.destroy())},children:Object(h.jsx)("svg",{className:"keyboard__icon",children:Object(h.jsx)("use",{xlinkHref:"".concat(k,"#Capa_3")})})}),c&&Object(h.jsx)("div",{className:"keyboard-container",children:Object(h.jsx)(y,{keyboardRef:s,onChange:o,defaultValue:l})})]})};c(40);var R=function(){return Object(h.jsxs)("div",{className:"music-panel",children:[Object(h.jsx)("section",{className:"left-panel"}),Object(h.jsx)("section",{className:"middle-panel",children:Object(h.jsx)("div",{className:"search-wrapper",children:Object(h.jsx)(E,{})})}),Object(h.jsx)("section",{className:"right-panel"})]})},I=function(){var e=Object(r.c)((function(e){return e}));return console.log(e),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{className:"app",children:Object(h.jsx)(i.c,{children:Object(h.jsx)(i.a,{path:"/",exact:!0,component:R})})}),Object(h.jsx)(f,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},A=c(11),H=c(22),P=c(23),T=c(20),q={value:"",request:null};var D=Object(A.combineReducers)({query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.CHANGE_QUERY:var c=Object(T.a)(Object(T.a)({},e),{},{value:t.payload});return console.log(c),c;default:return e}}}),F=Object(A.createStore)(D,Object(H.composeWithDevTools)(Object(A.applyMiddleware)(P.a))),G=c(17);s.a.render(Object(h.jsx)(G.a,{basename:"/audio-list",children:Object(h.jsx)(r.a,{store:F,children:Object(h.jsx)(I,{})})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.c22bc163.chunk.js.map