(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{422:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(400),i=(n(114),n(115),n(116),n(177),n(59),n(118),n(120),n(117),n(119),n(91),n(121),n(404)),c=n(401);var l=function(e){var t=e.position,n=e.theta,o=Object(r.useRef)();return Object(c.e)((function(){n+=.05;var e=Math.cos(n);o.current.scale.set(e,e,e)})),a.a.createElement(i.a.mesh,{ref:o,position:t},a.a.createElement("ringGeometry",{attach:"geometry"}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"white",transparent:!0}))};l.defaultProps={position:[0,0,0],theta:0};function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(e){var t=e.position,n=e.theta,o=Object(r.useRef)();return Object(c.e)((function(){n+=.05;var e=Math.cos(n);o.current.scale.set(e,e,e)})),a.a.createElement(i.a.mesh,{ref:o,position:t},a.a.createElement("boxGeometry",{attach:"geometry"}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"red",transparent:!0}))},m=function(){return a.a.createElement(c.a,{style:{background:"black"}},a.a.createElement("ambientLight",{color:"white"}),a.a.createElement("pointLight",{color:"white",intensity:1,position:[10,10,10]}),a.a.createElement(i.a.mesh,null,u(new Array(20)).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},a.a.createElement(s,{position:[0,1.25*t,0],theta:1}),a.a.createElement(s,{position:[0,-1.25*t,0],theta:1}),a.a.createElement(s,{position:[1.25*t,0,0],theta:1}),a.a.createElement(s,{position:[-1.25*t,0,0],theta:1}),a.a.createElement(s,{position:[1.25*t,1.25*t,0],theta:1}),a.a.createElement(s,{position:[-1.25*t,1.25*t,0],theta:1}),a.a.createElement(s,{position:[-1.25*t,-1.25*t,0],theta:1}),a.a.createElement(s,{position:[1.25*t,-1.25*t,0],theta:1}))}))))},h=(n(183),n(180),n(181),n(182),n(184),n(405));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t,n){return(f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&y(a,n.prototype),a}).apply(null,arguments)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){var e=g(Object(r.useState)(!1),2),t=e[0],n=e[1],c=g(Object(r.useState)(!1),2),l=c[0],u=c[1],s=Object(h.c)({color:t?"hotpink":"white",pos:t?[0,0,2]:[0,0,0],"material-opacity":l?.6:.25,scale:t?[1.5,1.5,1.5]:[1,1,1],rotation:t?[o.Math.degToRad(180),0,o.Math.degToRad(45)]:[0,0,0],config:{mass:10,tension:1e3,friction:300,precision:1e-5}}),m=s.color,y=s.pos,d=b(s,["color","pos"]);return a.a.createElement("group",null,a.a.createElement(i.a.line,{position:y},a.a.createElement("geometry",{attach:"geometry",vertices:[[-1,0,0],[0,1,0],[1,0,0],[0,-1,0],[-1,0,0]].map((function(e){return f(o.Vector3,E(e))}))}),a.a.createElement(i.a.lineBasicMaterial,{attach:"material",color:m})),a.a.createElement(i.a.mesh,p({onClick:function(e){return n(!t)},onPointerOver:function(e){return u(!0)},onPointerOut:function(e){return u(!1)}},d),a.a.createElement("octahedronGeometry",{attach:"geometry"}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"grey",transparent:!0})))}function v(){var e=Object(r.useRef)(),t=0;Object(c.e)((function(){var n=5*Math.sin(o.Math.degToRad(t+=.01)),r=Math.cos(o.Math.degToRad(2*t));e.current.rotation.set(n,n,n),e.current.scale.set(r,r,r)}));var n=g(Object(r.useMemo)((function(){return[new o.SphereBufferGeometry(1,10,10),new o.MeshBasicMaterial({color:new o.Color("lightpink")}),E(new Array(1e3)).map((function(e){return[800*Math.random()-400,800*Math.random()-400,800*Math.random()-400]}))]}),[]),3),i=n[0],l=n[1],u=n[2];return a.a.createElement("group",{ref:e},u.map((function(e,t){var n=g(e,3),r=n[0],o=n[1],c=n[2];return a.a.createElement("mesh",{key:t,geometry:i,material:l,position:[r,o,c]})})))}function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{style:{background:"#272727"}},a.a.createElement("ambientLight",{color:"lightblue"}),a.a.createElement("pointLight",{color:"white",intensity:1,position:[10,10,10]}),a.a.createElement(d,null),a.a.createElement(v,null)))}function w(e){var t=e.position,n=e.theta,o=e.animate,l=Object(r.useRef)();return Object(c.e)((function(){if(o){n+=.05;var e=Math.cos(n);l.current.scale.set(e,e,e)}})),a.a.createElement(i.a.mesh,{ref:l,position:t},a.a.createElement("octahedronGeometry",{attach:"geometry"}),a.a.createElement("meshStandardMaterial",{attach:"material",color:"grey",transparent:!0}))}function j(){var e=Object(r.useRef)(),t=0;return Object(c.e)((function(){var n=5*Math.sin(o.Math.degToRad(t+=.01)),r=Math.cos(o.Math.degToRad(2*t));e.current.rotation.set(n,n,n),e.current.scale.set(r,r,r)})),a.a.createElement(i.a.mesh,{ref:e},a.a.createElement(w,{position:[0,0,0],animate:!1}),a.a.createElement(w,{position:[0,.1,0],theta:.5}),a.a.createElement(w,{position:[0,.2,0],theta:.5}),a.a.createElement(w,{position:[0,.3,0],theta:.5}),a.a.createElement(w,{position:[0,-.1,0],theta:.25}),a.a.createElement(w,{position:[0,-.2,0],theta:.25}),a.a.createElement(w,{position:[0,-.3,0],theta:.25}),a.a.createElement(w,{position:[.1,0,0],theta:.75}),a.a.createElement(w,{position:[.2,0,0],theta:.75}),a.a.createElement(w,{position:[.3,0,0],theta:.75}),a.a.createElement(w,{position:[-.1,0,0],theta:1}),a.a.createElement(w,{position:[-.2,0,0],theta:1}),a.a.createElement(w,{position:[-.3,0,0],theta:1}))}function M(){return a.a.createElement(c.a,{style:{background:"#272727"}},a.a.createElement("ambientLight",{color:"lightblue"}),a.a.createElement("pointLight",{color:"white",intensity:1,position:[10,10,10]}),a.a.createElement(j,null))}w.defaultProps={theta:0,position:[0,0,0],animate:!0};t.default=function(e){switch(e.id){case 1:return r.createElement(m,null);case 2:return r.createElement(O,null);case 3:return r.createElement(M,null)}}}}]);