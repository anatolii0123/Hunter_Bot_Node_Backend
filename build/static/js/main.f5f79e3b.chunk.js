(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(23),i=a.n(r),s=a(75),o=a(16),l=a(14),d=a(68),j=a.n(d),b=a(2);function u(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(b.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(b.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var h=a(319),x=a(318),O=a(320),p=a(99),m=a(307),g=a(321),f=a(308);function v(e){var t=e.logo,a=e.userName,c=e.access,n=Object(o.f)();return Object(b.jsx)(x.a,{sx:{flexGrow:1},children:Object(b.jsx)(h.a,{position:"static",children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(g.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(b.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Discord Bot"}),"unauthorized"==c?Object(b.jsx)(m.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{style:{fontSize:18},children:a}),Object(b.jsx)(g.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(){return n.push("/dashboard")},children:Object(b.jsx)(f.a,{alt:"Logo",src:t})})]})]})})})}var y=a(38),w=a.n(y);function S(){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth",{withCredentials:!0,credentials:"include"})}var C=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),s=i[0],o=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),x=h[0],O=h[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),g=m[0],f=m[1];return Object(c.useEffect)((function(){S().then((function(e){n(e.data.msg),"authorized"===a&&(O(e.data.user.discordTag),f("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){o(!1)}),1e3)}))}),[a]),Object(b.jsx)(b.Fragment,{children:!0===s?Object(b.jsx)(u,{}):Object(b.jsx)("div",{className:"leading-normal tracking-normal text-white h-full",style:{width:"100%",minHeight:"100vh"},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{logo:g,userName:x,access:a}),Object(b.jsx)("div",{className:"pt-36",children:Object(b.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(b.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(b.jsx)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-black",children:"Discord Bot"}),Object(b.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[j.a.botName," is the best customizable bot for discord with a dashboard."]}),Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(b.jsx)("span",{className:"mx-1",children:"Invite Bot"})})})]})})})]})})})},k=a(329),z=a(322),N=a(325),B=a(324),I=a(323),T=a(326),E=a(284),R=a(286);function A(e){var t=e.guild,a=e.permission;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(z.a,{sx:{width:300,m:2},children:[Object(b.jsxs)(I.a,{children:[null!==t.icon?Object(b.jsx)(B.a,{component:"img",height:"140",image:"https://cdn.discordapp.com/icons/".concat(t.id,"/").concat(t.icon,".png"),alt:"green iguana"}):Object(b.jsx)(B.a,{component:"img",height:"140",image:"/assets/image/dashboard/default-server.png",alt:"green iguana"}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(p.a,{gutterBottom:!0,variant:"h6",component:"div",children:t.name.substr(0,20)+(t.name.length>20?"...":"")}),Object(b.jsx)(p.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(b.jsx)(T.a,{children:!0===a?Object(b.jsx)(m.a,{variant:"contained",color:"primary",endIcon:Object(b.jsx)(E.a,{}),onClick:function(){return window.location.href="https://hunter-bot-backend.herokuapp.com/server/".concat(t.id,"/role")},children:" Manage "}):Object(b.jsx)(m.a,{variant:"contained",color:"primary",endIcon:Object(b.jsx)(R.a,{}),onClick:function(){return window.location.href="http://discord.com/oauth2/authorize?client_id=".concat(j.a.clientId,"&scope=bot%20applications.commands&guild_id=").concat(t.id,"&response_type=code&redirect_uri=").concat(encodeURIComponent(j.a.redirect_uri))},children:" Invite "})})]})})}var F=a(110),P=a(5),G=a(36),L=a(309),q=a(327),D=a(289),H=a(138),M=a.n(H),W=a(141),_=a.n(W),$=a(142),J=a.n($),U=a(305),Y=a(290),K=a(291),Q=a(143),V=a.n(Q),X=a(144),Z=a.n(X),ee=a(328),te=a(303),ae=Object(P.a)("div")((function(e){var t=e.theme;return Object(F.a)(Object(F.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function ce(e){var t=e.logo,a=e.userName,n=e.access,r=Object(o.f)(),i=Object(G.a)(),s=c.useState(!1),d=Object(l.a)(s,2),j=d[0],u=d[1],v=c.useState(null),y=Object(l.a)(v,2),S=y[0],C=y[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(x.a,{sx:{flexGrow:1},children:[Object(b.jsx)(h.a,{position:"static",children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(g.a,{size:"large",edge:"start",color:"inherit",onClick:function(){u(!0)},"aria-label":"menu",sx:{mr:2},children:Object(b.jsx)(M.a,{})}),Object(b.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Server Management"}),"unauthorized"==n?Object(b.jsx)(m.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{style:{fontSize:18},children:a}),Object(b.jsx)(g.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(e){C(e.currentTarget)},children:Object(b.jsx)(f.a,{alt:"Logo",src:t})})]}),Object(b.jsx)("div",{children:Object(b.jsx)(te.a,{id:"menu-appbar",anchorEl:S,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},style:{marginTop:40},open:Boolean(S),onClose:function(){C(null)},children:Object(b.jsx)(ee.a,{onClick:function(){(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth/logout",{withCredentials:!0,credentials:"include"})).then((function(e){r.push("/")}))},children:"Logout"})})})]})}),Object(b.jsxs)(L.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:j,children:[Object(b.jsx)(ae,{children:Object(b.jsx)(g.a,{onClick:function(){u(!1)},children:"ltr"===i.direction?Object(b.jsx)(_.a,{}):Object(b.jsx)(J.a,{})})}),Object(b.jsx)(D.a,{}),Object(b.jsxs)(q.a,{children:[Object(b.jsxs)(U.a,{button:!0,children:[Object(b.jsx)(Y.a,{children:Object(b.jsx)(V.a,{})}),Object(b.jsx)(K.a,{primary:"Roles"})]}),Object(b.jsxs)(U.a,{button:!0,children:[Object(b.jsx)(Y.a,{children:Object(b.jsx)(Z.a,{})}),Object(b.jsx)(K.a,{primary:"Messages"})]})]})]})]})})}function ne(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),s=i[0],o=i[1],d=Object(c.useState)([]),j=Object(l.a)(d,2),h=j[0],O=j[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),g=m[0],f=m[1],v=Object(c.useState)(""),y=Object(l.a)(v,2),C=y[0],z=y[1],N=Object(c.useState)(""),B=Object(l.a)(N,2),I=B[0],T=B[1];return Object(c.useEffect)((function(){S().then((function(e){T(e.data.msg),"authorized"===I&&(f(e.data.user.discordTag),z("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[I]),Object(c.useEffect)((function(){"authorized"!=I&&(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/guild",{withCredentials:!0,credentials:"include"})).then((function(e){if("unauthorized"===e.data.msg)return window.location.href="/api/auth/discord/";o(e.data.permissionNoGuilds),O(e.data.permissionHasGuilds),setTimeout((function(){n(!1)}),2e3)}))}),[]),Object(b.jsx)(b.Fragment,{children:!0===a?Object(b.jsx)(u,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ce,{logo:C,userName:g,access:I}),Object(b.jsx)(k.a,{maxWidth:"lg",children:Object(b.jsxs)(x.a,{sx:{display:"flex",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center",p:1,m:1,height:100},children:[h.map((function(e,t){return Object(b.jsx)(A,{guild:e,permission:!0},t)})),s.map((function(e,t){return Object(b.jsx)(A,{guild:e,permission:!1},t)}))]})})]})})}var re=a(299),ie=a(312),se=a(316),oe=a(315),le=a(311),de=a(313),je=a(314),be=a(310),ue=a(145),he=a.n(ue),xe=a(146),Oe=a.n(xe),pe=a(147),me=a.n(pe),ge=a(148),fe=a.n(ge);var ve=Object(re.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t=Object(c.useState)({name:"",price:"",description:""}),a=Object(l.a)(t,2),n=(a[0],a[1],Object(c.useState)(!1)),r=Object(l.a)(n,2),i=r[0],s=r[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),h=(j[0],j[1],Object(c.useState)([])),O=Object(l.a)(h,2),m=O[0],f=O[1],v=Object(c.useState)(""),y=Object(l.a)(v,2),C=(y[0],y[1]),z=Object(c.useState)(""),N=Object(l.a)(z,2),B=(N[0],N[1]),I=Object(c.useState)(""),T=Object(l.a)(I,2),E=T[0],R=T[1],A=(e.classes,Object(o.g)().id);return Object(o.f)(),Object(c.useEffect)((function(){S().then((function(e){R(e.data.msg),"authorized"===E&&(C(e.data.user.discordTag),B("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[E]),Object(c.useEffect)((function(){var e;"authorized"!=E&&(e=A,w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/role?guildId=".concat(e),{withCredentials:!0,credentials:"include"})).then((function(e){f(e.data.roles),setTimeout((function(){s(!1)}),2e3)}))}),[]),Object(b.jsx)(b.Fragment,{children:!0===i?Object(b.jsx)(u,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)(ce,{}),Object(b.jsxs)(k.a,{maxWidth:"lg",children:[Object(b.jsxs)(x.a,{sx:{width:"100%",paddingTop:"50px"},children:[Object(b.jsx)(p.a,{variant:"h4",gutterBottom:!0,component:"div",children:"Roles"}),Object(b.jsx)(p.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Use roles to organize your server members and customize their permissions."})]}),Object(b.jsx)(le.a,{component:be.a,children:Object(b.jsxs)(ie.a,{sx:{minWidth:650,border:0},"aria-label":"simple table",children:[Object(b.jsx)(de.a,{children:Object(b.jsxs)(je.a,{children:[Object(b.jsx)(oe.a,{align:"left",children:"ROLES"}),Object(b.jsx)(oe.a,{align:"right",children:"MEMBERS"}),Object(b.jsx)(oe.a,{align:"right",children:"PRICE"}),Object(b.jsx)(oe.a,{align:"right",children:"ACTIONS"})]})}),Object(b.jsx)(se.a,{children:m.map((function(e){return Object(b.jsxs)(je.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(b.jsxs)(oe.a,{component:"th",scope:"row",align:"left",children:[Object(b.jsx)(he.a,{sx:{color:"#f03434"}}),Object(b.jsx)("span",{className:"ml-3",children:e.name})]}),Object(b.jsxs)(oe.a,{align:"right",children:[" 1 ",Object(b.jsx)(Oe.a,{})," "]}),Object(b.jsx)(oe.a,{align:"right",children:" $17.00 "}),Object(b.jsxs)(oe.a,{align:"right",children:[Object(b.jsx)(g.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",children:Object(b.jsx)(me.a,{})}),Object(b.jsx)(g.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",sx:{marginLeft:"20px"},children:Object(b.jsx)(fe.a,{})})]})]},e.name)}))})]})})]})]})})})),ye=a(71),we=a(72),Se=a(113),Ce=a(112),ke=a(15),ze=a(296),Ne=a(297),Be=a(294),Ie=a(298),Te=a(292),Ee=a(293),Re=a(317),Ae=a(295),Fe=a(301),Pe=a(302),Ge=0;function Le(e,t,a,c){return{id:Ge+=1,name:e,color:a,price:t,summary:c}}function qe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function De(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var c=t(e[0],a[0]);return 0!==c?c:e[1]-a[1]})),a.map((function(e){return e[0]}))}function He(e,t){return"desc"===e?function(e,a){return qe(e,a,t)}:function(e,a){return-qe(e,a,t)}}var Me=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"price",numeric:!0,disablePadding:!1,label:"Price ($)"},{id:"colors",string:!0,disablePadding:!1,label:"Colors"},{id:"summary",string:!0,disablePadding:!1,label:"Summary"}],We=function(e){Object(Se.a)(a,e);var t=Object(Ce.a)(a);function a(){var e;Object(ye.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).createSortHandler=function(t){return function(a){e.props.onRequestSort(a,t)}},e}return Object(we.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,c=t.order,n=t.orderBy,r=t.numSelected,i=t.rowCount,s=t.showstate;return Object(b.jsx)(Te.a,{children:Object(b.jsxs)(Ee.a,{style:{display:s},children:[Object(b.jsx)(Be.a,{padding:"checkbox",children:Object(b.jsx)(Fe.a,{indeterminate:r>0&&r<i,checked:r===i,onChange:a})}),Me.map((function(t){return Object(b.jsx)(Be.a,{align:"center",sortDirection:n===t.id&&c,children:Object(b.jsx)(Pe.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(b.jsx)(Re.a,{active:n===t.id,direction:c,onClick:e.createSortHandler(t.id),children:t.label})})},t.id)}),this)]})})}}]),a}(n.a.Component),_e=function(e){Object(Se.a)(a,e);var t=Object(Ce.a)(a);function a(){var e;Object(ye.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={order:"asc",orderBy:"calories",selected:[],data:[Le("Cupcake",305,"red",67),Le("Donut",452,"yellow",51),Le("Eclair",262,"brown",24),Le("Frozen yoghurt",262,"blue",24),Le("Gingerbread",356,"green",49),Le("Honeycomb",408,"white",87),Le("Cupcake",305,"red",67),Le("Donut",452,"yellow",51),Le("Eclair",262,"brown",24),Le("Frozen yoghurt",33,"blue",24),Le("Gingerbread",356,"green",49),Le("Honeycomb",408,"white",87)],page:0,rowsPerPage:5},e.handleRequestSort=function(t,a){var c=a,n="desc";e.state.orderBy===a&&"desc"===e.state.order&&(n="asc"),e.setState({order:n,orderBy:c})},e.handleSelectAllClick=function(t){t.target.checked?e.setState((function(e){return{selected:e.data.map((function(e){return e.id}))}})):e.setState({selected:[]})},e.handleClick=function(t,a){var c=e.state.selected,n=c.indexOf(a),r=[];-1===n?r=r.concat(c,a):0===n?r=r.concat(c.slice(1)):n===c.length-1?r=r.concat(c.slice(0,-1)):n>0&&(r=r.concat(c.slice(0,n),c.slice(n+1))),console.log(c),e.setState({selected:r})},e.isSelected=function(t){return-1!==e.state.selected.indexOf(t)},e}return Object(we.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,c=a.data,n=a.order,r=a.orderBy,i=a.selected;a.rowsPerPage,a.page;return Object(b.jsxs)("div",{className:"buyrole-main-div",children:[Object(b.jsxs)(Ae.a,{className:"buyrole-root",style:{boxShadow:"none"},children:[Object(b.jsxs)("p",{className:"buyrole-p",children:[" Total price is ",Object(b.jsx)("strong",{}),"$"]}),Object(b.jsxs)("div",{className:"buyrole-tablewrapper-div",children:[Object(b.jsx)("div",{className:"buyrole-tablehead-div",children:Object(b.jsx)(ze.a,{"aria-labelledby":"tableTitle",children:Object(b.jsx)(We,{numSelected:i.length,order:n,orderBy:r,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:c.length})})}),Object(b.jsx)("div",{className:"buyrole-tablewrapper",children:Object(b.jsxs)(ze.a,{"aria-labelledby":"tableTitle",children:[Object(b.jsx)(We,{numSelected:i.length,order:n,orderBy:r,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:c.length}),Object(b.jsx)(Ne.a,{className:"buyrole-table",children:De(c,He(n,r)).map((function(t){var a=e.isSelected(t.id);return Object(b.jsxs)(Ee.a,{hover:!0,onClick:function(a){return e.handleClick(a,t.id)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(b.jsx)(Be.a,{padding:"checkbox",children:Object(b.jsx)(Fe.a,{checked:a})}),Object(b.jsx)(Be.a,{align:"center",component:"th",scope:"row",padding:"none",children:t.name}),Object(b.jsx)(Be.a,{align:"center",children:t.price}),Object(b.jsx)(Be.a,{align:"center",children:Object(b.jsx)("button",{style:{background:t.color},className:"buyrole-colorbtn"})}),Object(b.jsx)(Be.a,{align:"center",children:t.summary})]},t.id)}))})]})})]})]}),Object(b.jsx)("div",{className:"buyrole-paybtn-div",children:Object(b.jsx)(Ie.a,{variant:"extended",size:"large",align:"center",color:"primary","aria-label":"Add",className:t.margin,style:{alignSelf:"center",width:"150px"},children:Object(b.jsx)("p",{className:"buyrole-pay-p",children:"PAY"})})})]})}}]),a}(n.a.Component),$e=Object(ke.a)((function(e){return{}}))(_e);function Je(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{path:"/dashboard",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(o.a,{path:"/server/:id/role",children:Object(b.jsx)(ve,{})}),Object(b.jsx)(o.a,{path:"/buyrole",children:Object(b.jsx)($e,{})})]})})}var Ue=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Je,{})})};a(205);i.a.render(Object(b.jsx)(Ue,{}),document.getElementById("root"))},68:function(e,t){e.exports={botName:"Hunter",clientId:"910229962349486082",redirect_uri:"http://hunter-bot-backend.herokuapp.com/api/auth/discord/redirect"}}},[[206,1,2]]]);
//# sourceMappingURL=main.f5f79e3b.chunk.js.map