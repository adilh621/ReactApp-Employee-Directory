(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var r=s(0),c=s(1),a=s.n(c),l=s(16),n=s.n(l),i=s(17),o=s(18),d=s(19),h=s(24),j=s(23),u=s(20),m=s.n(u),b=function(){return m.a.get("https://randomuser.me/api/?results=50&nat=us")};s(48);var f=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{class:"row",children:[Object(r.jsx)("div",{class:"col user-images",children:Object(r.jsx)("img",{src:e.user.picture.thumbnail,alt:"User Photo",style:{width:"45%"}})}),Object(r.jsx)("div",{class:"col",children:Object(r.jsxs)("p",{children:[e.user.name.first," ",e.user.name.last]})}),Object(r.jsx)("div",{class:"col",children:Object(r.jsx)("p",{children:e.user.phone})}),Object(r.jsx)("div",{class:"col",children:Object(r.jsx)("p",{children:e.user.email})}),Object(r.jsx)("div",{class:"col",children:Object(r.jsx)("p",{children:e.user.dob.date.substring(0,10)})})]})})},O=s(21),p=s(22),x=function(){return Object(r.jsx)(O.a,{fluid:!0,children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Search for an employee by typing their name or using the buttons to filter"})]})})},v=(s(49),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={allUsers:[],filteredUsers:[],searchTerm:""},e.getRandomUsers=function(){b().then((function(t){e.setState({allUsers:t.data.results,filteredUsers:t.data.results})}))},e.handleSearchChange=function(t){console.log(t.target);var s=t.target,r=s.name,c=s.value;e.setState(Object(i.a)({},r,c),(function(){console.log(e.state.allUsers);var t=e.state.allUsers.filter((function(t){return t.name.first.includes(e.state.searchTerm)}));console.log(t),e.setState({filteredUsers:t})}))},e.handleSubmit=function(t){if(t.preventDefault(),"ascend"!==e.state.trackSort){var s=e.state.allUsers.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));console.log(s),console.log("clicked"),e.setState({filteredUsers:s,trackSort:"ascend"})}else{var r=e.state.allUsers.sort((function(e,t){return t.name.first.localeCompare(e.name.first)}));console.log(r),console.log("clicked"),e.setState({filteredUsers:r,trackSort:"descend"})}},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getRandomUsers()}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsxs)("nav",{className:"navbar navbar-light bg-light mx-auto",style:{height:"100px"},children:[Object(r.jsx)("form",{className:"form-inline",children:Object(r.jsx)("input",{className:"form-control mr-sm-2",name:"searchTerm",type:"text",placeholder:"Search","aria-label":"Search",onChange:this.handleSearchChange,value:this.state.searchTerm})}),Object(r.jsx)("button",{className:"bg-primary sort",onClick:this.handleSubmit,children:"Sort by name"})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"table-title col",children:"Image"}),Object(r.jsx)("div",{className:"table-title click col-3",onClick:this.handleSubmit,children:"Name"}),Object(r.jsx)("div",{className:"table-title col",children:"Phone Number"}),Object(r.jsx)("div",{className:"table-title col",children:"Email"}),Object(r.jsx)("div",{className:"table-title col",children:"DOB"})]}),this.state.filteredUsers.map((function(e,t){return Object(r.jsx)(f,{user:e},t)}))]})}}]),s}(a.a.Component));s(50);n.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.366efcd5.chunk.js.map