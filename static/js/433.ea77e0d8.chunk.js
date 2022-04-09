"use strict";(self.webpackChunkApp_Alib=self.webpackChunkApp_Alib||[]).push([[433],{66996:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var o=t(72791),a=t(1413),s=t(16871),r=o.lazy((function(){return t.e(494).then(t.bind(t,50494))})),c=o.lazy((function(){return Promise.all([t.e(663),t.e(805)]).then(t.bind(t,6805))})),i=o.lazy((function(){return Promise.all([t.e(663),t.e(557)]).then(t.bind(t,99557))})),m=o.lazy((function(){return Promise.all([t.e(663),t.e(722)]).then(t.bind(t,15722))})),l=o.lazy((function(){return Promise.all([t.e(663),t.e(692)]).then(t.bind(t,96692))})),u=o.lazy((function(){return Promise.all([t.e(663),t.e(857)]).then(t.bind(t,76857))})),d=o.lazy((function(){return Promise.all([t.e(663),t.e(310)]).then(t.bind(t,45310))})),h=o.lazy((function(){return Promise.all([t.e(663),t.e(182)]).then(t.bind(t,47182))})),p=o.lazy((function(){return Promise.all([t.e(663),t.e(882)]).then(t.bind(t,16882))})),b=o.lazy((function(){return Promise.all([t.e(663),t.e(866)]).then(t.bind(t,13866))})),f=o.lazy((function(){return Promise.all([t.e(663),t.e(644)]).then(t.bind(t,30644))})),x=o.lazy((function(){return Promise.all([t.e(663),t.e(17)]).then(t.bind(t,74017))})),j=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:r},{path:"/theme",name:"Theme",element:c,exact:!0},{path:"/theme/colors",name:"Colors",element:c},{path:"/theme/typography",name:"Typography",element:i},{path:"/base",name:"Base",element:u,exact:!0},{path:"/base/accordion",name:"Accordion",element:m},{path:"/base/breadcrumbs",name:"Breadcrumbs",element:l},{path:"/base/cards",name:"Cards",element:u},{path:"/base/carousels",name:"Carousel",element:d},{path:"/base/collapses",name:"Collapse",element:h},{path:"/buttons",name:"Buttons",element:p,exact:!0},{path:"/buttons/buttons",name:"Buttons",element:p},{path:"/buttons/dropdowns",name:"Dropdowns",element:f},{path:"/buttons/button-groups",name:"Button Groups",element:b},{path:"/icons",exact:!0,name:"Icons",element:x},{path:"/icons/coreui-icons",name:"CoreUI Icons",element:x}],v=t(78983),y=t(80184),g=function(){var e=(0,s.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,t,o,a){var s="".concat(e,"/").concat(t),r=function(e,n){var t=n.find((function(n){return n.path===e}));return!!t&&t.name}(s,j);return r&&n.push({pathname:s,name:r,active:o+1===a.length}),s})),n}(e);return(0,y.jsxs)(v.fj,{className:"m-0 ms-2",children:[(0,y.jsx)(v.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,o.createElement)(v.Sd,(0,a.Z)((0,a.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},C=o.memo(g),Z=function(){return(0,y.jsx)(v.KB,{lg:!0,children:(0,y.jsx)(o.Suspense,{fallback:(0,y.jsx)(v.LQ,{color:"primary"}),children:(0,y.jsxs)(s.Z5,{children:[j.map((function(e,n){return e.element&&(0,y.jsx)(s.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,y.jsx)(e.element,{})},n)})),(0,y.jsx)(s.AW,{path:"/",element:(0,y.jsx)(s.Fg,{to:"dashboard",replace:!0})})]})})})},N=o.memo(Z),z=t(43504),P=t(16030),U=t(24846),w=t(31389),k=function(){var e=(0,P.I0)(),n=(0,P.v9)((function(e){return e.sidebarShow}));return(0,y.jsxs)(v.PO,{position:"sticky",className:"mb-4",children:[(0,y.jsxs)(v.KB,{fluid:!0,children:[(0,y.jsx)(v.X4,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!n})},children:(0,y.jsx)(U.Z,{icon:w.N,size:"lg"})}),(0,y.jsx)(v.qy,{className:"mx-auto d-md-none",to:"/"}),(0,y.jsx)(v.g3,{className:"d-none d-md-flex me-auto",children:(0,y.jsx)(v.U6,{children:(0,y.jsx)(v.AQ,{to:"/dashboard",component:z.OL,children:"Dashboard"})})})]}),(0,y.jsx)(v.rc,{}),(0,y.jsx)(v.KB,{fluid:!0,children:(0,y.jsx)(C,{})})]})},A=t(45987),B=["component","name","badge","icon"],I=["component","name","icon","to"],S=function(e){var n=e.items,t=(0,s.TH)(),r=function(e,n,t){return(0,y.jsxs)(y.Fragment,{children:[n&&n,e&&e,t&&(0,y.jsx)(v.C_,{color:t.color,className:"ms-auto",children:t.text})]})},c=function(e,n){var t=e.component,s=e.name,c=e.badge,i=e.icon,m=(0,A.Z)(e,B),l=t;return(0,o.createElement)(l,(0,a.Z)((0,a.Z)({},m.to&&!m.items&&{component:z.OL}),{},{key:n},m),r(s,i,c))},i=function e(n,o){var s,i=n.component,m=n.name,l=n.icon,u=n.to,d=(0,A.Z)(n,I),h=i;return(0,y.jsx)(h,(0,a.Z)((0,a.Z)({idx:String(o),toggler:r(m,l),visible:t.pathname.startsWith(u)},d),{},{children:null===(s=n.items)||void 0===s?void 0:s.map((function(n,t){return n.items?e(n,t):c(n,t)}))}),o)};return(0,y.jsx)(o.Fragment,{children:n&&n.map((function(e,n){return e.items?i(e,n):c(e,n)}))})},T=t(34358),D=(t(82454),t(28865)),E=t(20484),F=t(90014),H=t(35425),L=t(19428),G=t(86166),K=[{component:v.U6,name:"Inicio",to:"/dashboard",icon:(0,y.jsx)(U.Z,{icon:D.E,customClassName:"nav-icon"})},{component:v.fd,name:"Inventario"},{component:v.U6,name:"Cocina",to:"/theme/colors",icon:(0,y.jsx)(U.Z,{icon:E.s,customClassName:"nav-icon"})},{component:v.U6,name:"Produccion",to:"/theme/typography",icon:(0,y.jsx)(U.Z,{icon:F.o,customClassName:"nav-icon"})},{component:v.fd,name:"Fiananzas"},{component:v.dw,name:"Gastos",to:"/base",icon:(0,y.jsx)(U.Z,{icon:H.T,customClassName:"nav-icon"}),items:[{component:v.U6,name:"Proovedores",to:"/base/accordion"},{component:v.U6,name:"Desechable",to:"/base/breadcrumbs"},{component:v.U6,name:"Insumos",to:"/base/cards"},{component:v.U6,name:"Gastos Local",to:"/base/carousels"},{component:v.U6,name:"Empleados",to:"/base/collapses"}]},{component:v.dw,name:"Ventas",to:"/buttons",icon:(0,y.jsx)(U.Z,{icon:L.A,customClassName:"nav-icon"}),items:[{component:v.U6,name:"Efectivo",to:"/buttons/buttons"},{component:v.U6,name:"Tarjeta",to:"/buttons/button-groups"},{component:v.U6,name:"Plataforma Digital",to:"/buttons/dropdowns"}]},{component:v.U6,name:"Notas",to:"/icons",icon:(0,y.jsx)(U.Z,{icon:G.M,customClassName:"nav-icon"})}],O=function(){var e=(0,P.I0)(),n=(0,P.v9)((function(e){return e.sidebarUnfoldable})),t=(0,P.v9)((function(e){return e.sidebarShow}));return(0,y.jsx)(v.z3,{position:"fixed",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:(0,y.jsx)(v.Xk,{children:(0,y.jsx)(T.Z,{children:(0,y.jsx)(S,{items:K})})})})},W=o.memo(O),_=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(W,{}),(0,y.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,y.jsx)(k,{}),(0,y.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,y.jsx)(N,{})})]})]})}}}]);
//# sourceMappingURL=433.ea77e0d8.chunk.js.map