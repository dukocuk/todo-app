(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(7),a=n.n(i),r=n(4),d=n(6),u=n(15),j=n(0);function l(){var e=o.a.useState([{id:Object(u.a)(),text:"Complete assignment",completed:!1},{id:Object(u.a)(),text:"Go for a walk",completed:!1},{id:Object(u.a)(),text:"Get the job",completed:!1}]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=o.a.useState(""),a=Object(d.a)(i,2),l=a[0],b=a[1],x=function(e){var t=Object(r.a)(n),o=t.findIndex((function(t){return t.id===e.target.id}));t.splice(o,1),c(t),e.preventDefault()},m=function(e){var t=Object(r.a)(n),o=t.find((function(t){return t.id===e.target.id})),i=t.findIndex((function(t){return t.id===e.target.id}));o.completed=!o.completed,t[i]=o,c(t)};return Object(j.jsxs)("main",{children:[Object(j.jsx)(s,{onCreate:function(e){""!==l.split(" ").join("")?(c((function(e){return[{id:Object(u.a)(),text:l,completed:!1}].concat(Object(r.a)(e))})),b(""),e.preventDefault()):e.preventDefault()},onChange:function(e){b(e.target.value)},text:l}),Object(j.jsx)("ul",{children:n.map((function(e){return Object(j.jsx)(p,{id:e.id,text:e.text,completed:e.completed,onToggleComplete:m,onRemove:x},e.id)}))})]})}function p(e){var t=e.id,n=e.text,c=e.completed,o=e.onRemove,i=e.onToggleComplete;return Object(j.jsxs)("li",{children:[n,Object(j.jsx)("input",{id:t,type:"checkbox",checked:c,onChange:i}),Object(j.jsx)("input",{type:"submit",value:"Remove",onClick:o})]})}function s(e){var t=e.onCreate,n=e.onChange,c=e.text;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("input",{type:"text",value:c,onChange:n,placeholder:"Create todo"}),Object(j.jsx)("input",{type:"submit",value:"Add",onSubmit:t})]})}function b(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Todo List"}),Object(j.jsx)(l,{})]})}a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1e3ce2e6.chunk.js.map