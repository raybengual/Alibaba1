"use strict";(self.webpackChunkApp_Alib=self.webpackChunkApp_Alib||[]).push([[882],{16882:function(a,t,r){r.r(t);var d=r(4942),n=r(1413),e=r(15671),o=r(43144),i=r(60136),c=r(48347),s=r(72791),l=(r(77632),r(57307)),u=r(80184),h=[{Id:1,Producto:"Shawarma",Cantidad:0},{Id:2,Producto:"Torta/keila",Cantidad:0},{Id:3,Producto:"Taco Arabe",Cantidad:0},{Id:4,Producto:"Taco oriental",Cantidad:0},{Id:5,Producto:"Quesadilla arabe",Cantidad:0},{Id:6,Producto:"Quesadilla natural arabe",Cantidad:0},{Id:7,Producto:"Quesadilla Oriental",Cantidad:0},{Id:8,Producto:"Orden de jocoque",Cantidad:0},{Id:9,Producto:"Queso fundido",Cantidad:0},{Id:10,Producto:"Queso fundido con carne",Cantidad:0},{Id:11,Producto:"Pan Pita extra",Cantidad:0},{Id:12,Producto:"Orden Tzatziqui",Cantidad:0},{Id:13,Producto:"Orden Toum",Cantidad:0},{Id:14,Producto:"Agua",Cantidad:0},{Id:15,Producto:"Refresco",Cantidad:0},{Id:16,Producto:"De Buen Diente",Cantidad:0},{Id:17,Producto:"El Light",Cantidad:0},{Id:18,Producto:"El Sencillito",Cantidad:0},{Id:19,Producto:"Sin Nombre 1",Cantidad:0},{Id:20,Producto:"Sin Nombre 2",Cantidad:0},{Id:21,Producto:"Para Todos",Cantidad:0}],x=function(a){(0,i.Z)(r,a);var t=(0,c.Z)(r);function r(){var a;(0,e.Z)(this,r);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(a=t.call.apply(t,[this].concat(i))).state={data:h,modalActualizar:!1,modalInsertar:!1,form:{Id:"",Producto:"",Cantidad:""}},a.mostrarModalActualizar=function(t){a.setState({form:t,modalActualizar:!0})},a.cerrarModalActualizar=function(){a.setState({modalActualizar:!1})},a.mostrarModalInsertar=function(){a.setState({modalInsertar:!0})},a.cerrarModalInsertar=function(){a.setState({modalInsertar:!1})},a.editar=function(t){var r=0,d=a.state.data;d.map((function(a){t.Id==a.Id&&(d[r].Producto=t.Producto,d[r].Cantidad=t.Cantidad),r++})),a.setState({data:d,modalActualizar:!1})},a.eliminar=function(t){if(1==window.confirm("Est\xe1s Seguro que deseas Eliminar el elemento "+t.Id)){var r=0,d=a.state.data;d.map((function(a){t.Id==a.Id&&d.splice(r,1),r++})),a.setState({data:d,modalActualizar:!1})}},a.insertar=function(){var t=(0,n.Z)({},a.state.form);t.Id=a.state.data.length+1;var r=a.state.data;r.push(t),a.setState({modalInsertar:!1,data:r})},a.handleChange=function(t){a.setState({form:(0,n.Z)((0,n.Z)({},a.state.form),{},(0,d.Z)({},t.target.name,t.target.value))})},a}return(0,o.Z)(r,[{key:"render",value:function(){var a=this;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(l.W2,{children:[(0,u.jsx)("br",{}),(0,u.jsx)("center",{children:(0,u.jsx)("h1",{children:"Compra en efectivo"})}),(0,u.jsx)("br",{}),(0,u.jsx)(l.zx,{color:"success",onClick:function(){return a.mostrarModalInsertar()},children:"Crear"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(l.iA,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"ID"}),(0,u.jsx)("th",{children:"Producto"}),(0,u.jsx)("th",{children:"Cantidad"}),(0,u.jsx)("th",{children:"Acci\xf3n"})]})}),(0,u.jsx)("tbody",{children:this.state.data.map((function(t){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:t.Id}),(0,u.jsx)("td",{children:t.Producto}),(0,u.jsx)("td",{children:t.Cantidad}),(0,u.jsxs)("td",{children:[(0,u.jsx)(l.zx,{color:"primary",onClick:function(){return a.mostrarModalActualizar(t)},children:"Editar"})," ",(0,u.jsx)(l.zx,{color:"danger",onClick:function(){return a.eliminar(t)},children:"Eliminar"})]})]},t.Id)}))})]})]}),(0,u.jsxs)(l.u_,{isOpen:this.state.modalActualizar,children:[(0,u.jsx)(l.xB,{children:(0,u.jsx)("div",{children:(0,u.jsx)("h3",{children:"Editar Registro"})})}),(0,u.jsxs)(l.fe,{children:[(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Id:"}),(0,u.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.Id})]}),(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Producto:"}),(0,u.jsx)("input",{className:"form-control",name:"Producto",type:"text",onChange:this.handleChange,value:this.state.form.Producto})]}),(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Cantidad:"}),(0,u.jsx)("input",{className:"form-control",name:"Cantidad",type:"number",onChange:this.handleChange,value:this.state.form.Cantidad})]})]}),(0,u.jsxs)(l.mz,{children:[(0,u.jsx)(l.zx,{color:"primary",onClick:function(){return a.editar(a.state.form)},children:"Editar"}),(0,u.jsx)(l.zx,{color:"danger",onClick:function(){return a.cerrarModalActualizar()},children:"Cancelar"})]})]}),(0,u.jsxs)(l.u_,{isOpen:this.state.modalInsertar,children:[(0,u.jsx)(l.xB,{children:(0,u.jsx)("div",{children:(0,u.jsx)("h3",{children:"Insertar Producto"})})}),(0,u.jsxs)(l.fe,{children:[(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Id:"}),(0,u.jsx)("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.data.length+1})]}),(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Producto:"}),(0,u.jsx)("input",{className:"form-control",name:"Producto",type:"text",onChange:this.handleChange})]}),(0,u.jsxs)(l.cw,{children:[(0,u.jsx)("label",{children:"Cantidad:"}),(0,u.jsx)("input",{className:"form-control",name:"Cantidad",type:"number",onChange:this.handleChange})]})]}),(0,u.jsxs)(l.mz,{children:[(0,u.jsx)(l.zx,{color:"primary",onClick:function(){return a.insertar()},children:"Insertar"}),(0,u.jsx)(l.zx,{className:"btn btn-danger",onClick:function(){return a.cerrarModalInsertar()},children:"Cancelar"})]})]})]})}}]),r}(s.Component);t.default=x}}]);
//# sourceMappingURL=882.be2a45a0.chunk.js.map