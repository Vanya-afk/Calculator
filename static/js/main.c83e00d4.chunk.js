(this["webpackJsonpann-calculator"]=this["webpackJsonpann-calculator"]||[]).push([[0],{70:function(e,c,t){},71:function(e,c,t){},78:function(e,c,t){"use strict";t.r(c);var i=t(0),n=t.n(i),a=t(20),r=t.n(a),o=(t(70),t(10)),d=(t(71),t(107)),b=t(102),l=t(108),s=t(109),j=t(24),h=t(2),p=function(){var e=Object(i.useState)(!1),c=Object(o.a)(e,2),t=c[0],n=c[1],a=Object(i.useState)(0),r=Object(o.a)(a,2),p=r[0],x=r[1],u=Object(j.c)((function(e){return e.boxes})),O=Object.values(u).map((function(e){return e.filter((function(e){return e.checked}))})).flat();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"btn_wrapper",children:[Object(h.jsx)(d.a,{style:O.length<3?{color:"#346ba3",fontWeight:"bold",transform:"scale(1.35)",boxShadow:"2px 2px 2px black"}:{transform:"scale(1.35",boxShadow:"4px 4px 2px #897979"},disabled:O.length<3,onClick:function(){var e=O.reduce((function(e,c){return e+ +c.price}),0);x(e),n(!0)},variant:"contained",children:O.length<3?"\u0412\u044b\u0431\u0440\u0430\u043d\u043e ".concat(O.length," / 3"):"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(h.jsxs)("span",{className:O.length>2?"show_selected_count":"hide_selected_count",children:["\u0412\u044b\u0431\u0440\u0430\u043d\u043e ",O.length," ",O.length>=2&&O.length<5?"\u0437\u043e\u043d\u044b":"\u0437\u043e\u043d"]})]}),Object(h.jsx)(b.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(l.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:200,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3},children:[Object(h.jsx)(s.a,{style:{marginBottom:"20px"},id:"modal-modal-title",variant:"h5",component:"h2",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(h.jsx)(s.a,{id:"modal-modal-description",variant:"h5",component:"h2",children:Math.round(.8*p)+" BYN"})]})})]})},x=t(38),u=t(105),O={box1:[{price:"19",title:"\u041c\u0435\u0436\u0431\u0440\u043e\u0432\u044c\u0435",id:Object(u.a)(),checked:!1},{price:"19",title:"\u041d\u0430\u0434\u0433\u0443\u0431\u043d\u0430\u044f \u0437\u043e\u043d\u0430",id:Object(u.a)(),checked:!1},{price:"27",title:"\u041d\u043e\u0441\u043e\u0433\u0443\u0431\u043d\u044b\u0439 \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",id:Object(u.a)(),checked:!1},{price:"24",title:"\u0429\u0451\u043a\u0438",id:Object(u.a)(),checked:!1},{price:"24",title:"\u0412\u0438\u0441\u043a\u0438",id:Object(u.a)(),checked:!1},{price:"19",title:"\u041f\u043e\u0434\u0431\u043e\u0440\u043e\u0434\u043e\u043a",id:Object(u.a)(),checked:!1},{price:"49",title:"\u041b\u0438\u0446\u043e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",id:Object(u.a)(),checked:!1},{price:"24",title:"\u0428\u0435\u044f",id:Object(u.a)(),checked:!1}],box2:[{price:"29",title:"\u041f\u043e\u0434\u043c\u044b\u0448\u043a\u0438",id:Object(u.a)(),checked:!1},{price:"48",title:"\u041f\u043b\u0435\u0447\u0438",id:Object(u.a)(),checked:!1},{price:"48",title:"\u0420\u0443\u043a\u0438 \u0434\u043e \u043b\u043e\u043a\u0442\u044f (\u043e\u0442 \u043f\u043b\u0435\u0447\u0430/\u043e\u0442 \u043a\u0438\u0441\u0442\u0438 \u0434\u043e \u043b\u043e\u043a\u0442\u044f)",id:Object(u.a)(),checked:!1},{price:"19",title:"\u041a\u0438\u0441\u0442\u0438 \u0440\u0443\u043a",id:Object(u.a)(),checked:!1},{price:"84",title:"\u0420\u0443\u043a\u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",id:Object(u.a)(),checked:!1},{price:"19",title:"\u0410\u0440\u0435\u043e\u043b\u044b",id:Object(u.a)(),checked:!1},{price:"72",title:"\u0413\u0440\u0443\u0434\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",id:Object(u.a)(),checked:!1},{price:"19",title:"\u041f\u043e\u043b\u043e\u0441\u043a\u0430 \u0436\u0438\u0432\u043e\u0442\u0430",id:Object(u.a)(),checked:!1}],box3:[{price:"72",title:"\u0416\u0438\u0432\u043e\u0442",id:Object(u.a)(),checked:!1},{price:"84",title:"\u0421\u043f\u0438\u043d\u0430",id:Object(u.a)(),checked:!1},{price:"48",title:"\u0411\u0438\u043a\u0438\u043d\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0435",id:Object(u.a)(),checked:!1},{price:"68",title:"\u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u0431\u0438\u043a\u0438\u043d\u0438",id:Object(u.a)(),checked:!1},{price:"48",title:"\u042f\u0433\u043e\u0434\u0438\u0446\u044b",id:Object(u.a)(),checked:!1},{price:"78",title:"\u0411\u0451\u0434\u0440\u0430",id:Object(u.a)(),checked:!1},{price:"68",title:"\u0413\u043e\u043b\u0435\u043d\u0438",id:Object(u.a)(),checked:!1},{price:"108",title:"\u041d\u043e\u0433\u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e",id:Object(u.a)(),checked:!1}]},k=Object(x.b)({name:"box",initialState:O,reducers:{SelectService:function(e,c){var t=e[c.payload.boxNumber].findIndex((function(e){return e.id===c.payload.id}));e[c.payload.boxNumber][t].checked=!e[c.payload.boxNumber][t].checked}}}),m=k.reducer,f=k.actions.SelectService,v=t(110),g=t(111),S=t(104),N=n.a.memo((function(e){var c=e.currentBox,t=e.checkboxClick,i=Object(j.c)((function(e){return e.boxes[c]}));return Object(h.jsx)("div",{className:"checkBoxes_wrapper",children:Object(h.jsx)(v.a,{children:i.map((function(e,c){return Object(h.jsx)(g.a,{control:Object(h.jsx)(S.a,{checked:e.checked,id:e.id,onClick:function(){return t(e.id)}}),label:Object(h.jsx)(l.a,{component:"div",fontWeight:500,fontSize:26,children:e.title})},c)}))})})}));var w=function(){document.title="\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440";var e=Object(i.useState)("box1"),c=Object(o.a)(e,2),t=c[0],n=c[1],a=Object(j.b)(),r=Object(i.useState)(!0),d=Object(o.a)(r,2),b=d[0],l=d[1];return Object(i.useEffect)((function(){l(!0)}),[b]),Object(h.jsxs)("div",{className:b?"show":"hide",children:[Object(h.jsxs)("div",{className:"points_container",children:[Object(h.jsxs)("span",{className:"left_arrow",onClick:function(){setTimeout((function(){"box3"===t&&n("box2"),"box2"===t&&n("box1"),"box1"===t&&n("box3")}),0),l(!1)},children:[" ","<"," "]}),Object(h.jsx)(N,{currentBox:t,checkboxClick:function(e){a(f({boxNumber:t,id:e}))}}),Object(h.jsxs)("span",{className:"right_arrow",onClick:function(){setTimeout((function(){"box3"===t&&n("box1"),"box2"===t&&n("box3"),"box1"===t&&n("box2")}),0),l(!1)},children:[" ",">"]})]}),Object(h.jsx)(p,{})]})},y=t(17),_=Object(y.b)({boxes:m}),C=Object(x.a)({reducer:_});r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(j.a,{store:C,children:Object(h.jsx)(w,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c83e00d4.chunk.js.map