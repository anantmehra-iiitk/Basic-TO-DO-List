(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),o=n.n(i),r=(n(12),n(7)),l=n(4),s=(n(13),n(0)),u=function(t){return Object(s.jsx)("li",{className:"goal-item",onClick:function(){t.onDelete(t.id)},children:t.children})},d=(n(15),function(t){return Object(s.jsx)("ul",{className:"goal-list",children:t.items.map((function(e){return Object(s.jsx)(u,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)}))})}),a=(n(16),function(t){return Object(s.jsx)("button",{type:t.type,className:"button",onClick:t.onClick,children:t.children})}),j=(n(17),function(t){var e=Object(c.useState)(""),n=Object(l.a)(e,2),i=n[0],o=n[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onAddGoal(i)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"To Do :"}),Object(s.jsx)("input",{type:"text",onChange:function(t){o(t.target.value)}})]}),Object(s.jsx)(a,{type:"submit",children:"Add Task"})]})}),b=(n(18),function(){var t=Object(c.useState)([{text:"1",id:"g1"},{text:"2",id:"g2"}]),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(s.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return n.length>0&&(o=Object(s.jsx)(d,{items:n,onDeleteItem:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(s.jsxs)("div",{children:[Object(s.jsx)("section",{id:"goal-form",children:Object(s.jsx)(j,{onAddGoal:function(t){i((function(e){var n=Object(r.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(s.jsx)("section",{id:"goals",children:o})]})});o.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c73cb411.chunk.js.map