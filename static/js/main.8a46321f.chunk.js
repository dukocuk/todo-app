(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(8),r=n.n(i),d=n(5),a=n(7),l=n(21),s=n(2),u=n(1),j=s.a.div({display:"flex",flexDirection:"column",justifyContent:"center",fontFamily:"sans-serif",textAlign:"center",maxWidth:"500px",background:"#b2d5ff",border:"solid 2px"}),b=s.a.div({display:"flex",flexDirection:"row",justifyContent:"center"},(function(e){return{justifyContent:e.jc}})),f=s.a.div({display:"flex",flexDirection:"column",flexWrap:"wrap"}),p=s.a.header({fontFamily:"Arial",padding:10,fontSize:26,background:"#007ed3",color:"white"}),x=s.a.button((function(e){return{background:e.bg}}),{color:"black","&:hover":{color:"white"}}),h=s.a.input({outline:0,padding:.6,border:"1px solid rgba(34, 36, 38, 0.15)",borderRadius:3,minWidth:180,"&:hover,&:focus":{borderColor:"#85b7d9"}}),m=s.a.li({listStyleType:"none"});function O(){var e=c.a.useState([{id:Object(l.a)(),text:"Complete assignment",completed:!1},{id:Object(l.a)(),text:"Go for a walk",completed:!1},{id:Object(l.a)(),text:"Get the job",completed:!1}]),t=Object(a.a)(e,2),n=t[0],o=t[1],i=c.a.useState(""),r=Object(a.a)(i,2),s=r[0],j=r[1];c.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("todos"));console.log(typeof e),console.log(e[0]),o(e)}),[]),c.a.useEffect((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var b=function(e,t){var c=Object(d.a)(n),i=c.findIndex((function(e){return e.id===t}));c.splice(i,1),o(c),e.preventDefault()},f=function(e){var t=Object(d.a)(n),c=t.find((function(t){return t.id===e.target.id})),i=t.findIndex((function(t){return t.id===e.target.id}));c.completed=!c.completed,t[i]=c,o(t)};return Object(u.jsxs)("main",{children:[Object(u.jsx)(v,{onCreate:function(e){""!==s.split(" ").join("")?(o((function(e){return[{id:Object(l.a)(),text:s,completed:!1}].concat(Object(d.a)(e))})),j(""),e.preventDefault()):e.preventDefault()},onChange:function(e){j(e.target.value)},text:s}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(g,{id:e.id,text:e.text,completed:e.completed,onToggleComplete:f,onRemove:b},e.id)}))})]})}function g(e){var t=e.id,n=e.text,o=e.completed,c=e.onRemove,i=e.onToggleComplete;return Object(u.jsx)(m,{children:Object(u.jsxs)(b,{jc:"flex-end",children:[Object(u.jsx)(f,{children:n}),Object(u.jsx)(f,{children:Object(u.jsxs)(b,{jc:"center",children:[Object(u.jsx)("input",{id:t,type:"checkbox",checked:o,onChange:i}),Object(u.jsx)(x,{type:"button",onClick:function(e){return c(e,t)},bg:"#d9534f",children:"Remove"})]})})]})})}function v(e){var t=e.onCreate,n=e.onChange,o=e.text;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)(h,{type:"text",value:o,onChange:n,placeholder:"Create todo"}),Object(u.jsx)(x,{type:"submit",onSubmit:t,bg:"#5cb85c",children:"Add"})]})}function y(){return Object(u.jsx)(b,{jc:"center",children:Object(u.jsxs)(j,{children:[Object(u.jsx)(p,{children:"Todo List"}),Object(u.jsx)(O,{})]})})}r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8a46321f.chunk.js.map