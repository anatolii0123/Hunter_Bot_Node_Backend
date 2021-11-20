(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{211:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),i=n.n(c),s=n(59),o=n(18),l=n(11),d=n(73),j=n.n(d),b=n(2);function u(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(b.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(b.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var h=n(325),x=n(324),O=n(327),m=n(102),p=n(319),g=n(328),f=n(320);function y(e){var t=e.logo,n=e.userName,r=e.access,a=Object(o.g)();return Object(b.jsx)(x.a,{sx:{flexGrow:1},children:Object(b.jsx)(h.a,{position:"static",children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(g.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(b.jsx)(m.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Discord Bot"}),"unauthorized"==r?Object(b.jsx)(p.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{style:{fontSize:18},children:n}),Object(b.jsx)(g.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(){return a.push("/dashboard")},children:Object(b.jsx)(f.a,{alt:"Logo",src:t})})]})]})})})}var v=n(37),w=n.n(v);function S(){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth",{withCredentials:!0,credentials:"include"})}var k=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),i=Object(l.a)(c,2),s=i[0],o=i[1],d=Object(r.useState)(""),h=Object(l.a)(d,2),x=h[0],O=h[1],m=Object(r.useState)(""),p=Object(l.a)(m,2),g=p[0],f=p[1];return Object(r.useEffect)((function(){S().then((function(e){a(e.data.msg),"authorized"===n&&(O(e.data.user.discordTag),f("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){o(!1)}),1e3)}))}),[n]),Object(b.jsx)(b.Fragment,{children:!0===s?Object(b.jsx)(u,{}):Object(b.jsx)("div",{className:"leading-normal tracking-normal text-white h-full",style:{width:"100%",minHeight:"100vh"},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{logo:g,userName:x,access:n}),Object(b.jsx)("div",{className:"pt-36",children:Object(b.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(b.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(b.jsx)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-black",children:"Discord Bot"}),Object(b.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[j.a.botName," is the best customizable bot for discord with a dashboard."]}),Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(b.jsx)("span",{className:"mx-1",children:"Invite Bot"})})})]})})})]})})})},C=n(53),N=(n(152),n(99),n(209),n(331)),B=n(322),z=n(329),I=n(317),A=n(332),P=n(299),D=n(297),F=n(333),R=n(334),T=n(311),H=n(335),W=n(312),_=n(148),q=n.n(_),E=n(5),G=n(38),L=n(321),M=n(140),J=n.n(M),Y=n(144),U=n.n(Y),V=n(145),$=n.n(V),Q=n(298),K=n(146),X=n.n(K),Z=n(147),ee=n.n(Z),te=n(330),ne=n(151),re=n(141),ae=n.n(re),ce=Object(E.a)("div")((function(e){var t=e.theme;return Object(C.a)(Object(C.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function ie(e){var t=Object(G.a)(),n=r.useState(!1),a=Object(l.a)(n,2),c=a[0],i=a[1],s=r.useState(null),o=Object(l.a)(s,2),d=o[0],j=o[1],u=function(){j(null)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(x.a,{sx:{flexGrow:1},children:[Object(b.jsx)(h.a,{position:"static",children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(g.a,{size:"large",edge:"start",color:"inherit",onClick:function(){i(!0)},"aria-label":"menu",sx:{mr:2},children:Object(b.jsx)(J.a,{})}),Object(b.jsx)(m.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Server Management"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(g.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(b.jsx)(ae.a,{})}),Object(b.jsxs)(ne.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},style:{marginTop:40},open:Boolean(d),onClose:u,children:[Object(b.jsx)(te.a,{onClick:u,children:"Profile"}),Object(b.jsx)(te.a,{onClick:u,children:"Logout"})]})]})]})}),Object(b.jsxs)(L.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:c,children:[Object(b.jsx)(ce,{children:Object(b.jsx)(g.a,{onClick:function(){i(!1)},children:"ltr"===t.direction?Object(b.jsx)(U.a,{}):Object(b.jsx)($.a,{})})}),Object(b.jsx)(D.a,{}),Object(b.jsxs)(z.a,{children:[Object(b.jsxs)(I.a,{button:!0,children:[Object(b.jsx)(Q.a,{children:Object(b.jsx)(X.a,{})}),Object(b.jsx)(P.a,{primary:"Roles"})]}),Object(b.jsxs)(I.a,{button:!0,children:[Object(b.jsx)(Q.a,{children:Object(b.jsx)(ee.a,{})}),Object(b.jsx)(P.a,{primary:"Messages"})]})]})]})]})})}var se=Object(W.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t=Object(r.useState)({name:"",price:"",description:""}),n=Object(l.a)(t,2),c=(n[0],n[1],Object(r.useState)(!1)),i=Object(l.a)(c,2),s=(i[0],i[1],Object(r.useState)([])),d=Object(l.a)(s,2),j=d[0],u=d[1],h=e.classes,x=Object(o.i)().id;return Object(r.useEffect)((function(){var e;(e=x,w.a.get("/api/discord/getguildinfo?id=".concat(e))).then((function(e){u(e.data.roles)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ie,{}),Object(b.jsx)(N.a,{maxWidth:"lg",children:1==j.length?Object(b.jsx)(B.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(b.jsx)("span",{className:h.noRole,children:"No Role"})}):Object(b.jsxs)(B.a,{container:!0,spacing:5,children:[Object(b.jsx)(B.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(b.jsx)(B.a,{container:!0,children:Object(b.jsx)(B.a,{item:!0,children:Object(b.jsxs)(z.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(b.jsxs)(I.a,{alignItems:"flex-start",secondaryAction:Object(b.jsx)(g.a,{edge:"end","aria-label":"delete",children:Object(b.jsx)(q.a,{})}),children:[Object(b.jsx)(A.a,{children:Object(b.jsx)(f.a,{alt:"Remy Sharp",src:"/assets/image/avatar.jpg"})}),Object(b.jsx)(P.a,{primary:"Brunch this weekend?",secondary:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Ali Connors"})," \u2014 I'll be in your neighborhood doing errands this\u2026"]})})]}),Object(b.jsx)(D.a,{variant:"inset",component:"li"}),Object(b.jsxs)(I.a,{alignItems:"flex-start",children:[Object(b.jsx)(A.a,{children:Object(b.jsx)(f.a,{alt:"Travis Howard",src:"/assets/image/avatar.jpg"})}),Object(b.jsx)(P.a,{primary:"Summer BBQ",secondary:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"to Scott, Alex, Jennifer"})," \u2014 Wish I could come, but I'm out of town this\u2026"]})})]}),Object(b.jsx)(D.a,{variant:"inset",component:"li"}),Object(b.jsxs)(I.a,{alignItems:"flex-start",children:[Object(b.jsx)(A.a,{children:Object(b.jsx)(f.a,{alt:"Cindy Baker",src:"/assets/image/avatar.jpg"})}),Object(b.jsx)(P.a,{primary:"Oui Oui",secondary:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Sandra Adams"})," \u2014 Do you have Paris recommendations? Have you ever\u2026"]})})]})]})})})}),Object(b.jsx)(B.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(b.jsx)(F.a,{className:h.card,style:{border:"1px solid green"},children:Object(b.jsxs)(R.a,{children:[Object(b.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Your Public Checkout Link"}),Object(b.jsx)(T.a,{fullWidth:!0,id:"outlined-size-small",size:"sm",style:{marginBottom:"20px"}}),Object(b.jsx)(p.a,{fullWidth:!0,style:{marginBottom:"20px"},variant:"contained",color:"success",children:"View your public store"}),Object(b.jsxs)(m.a,{style:{marginBottom:"20px"},variant:"body1",color:"text.secondary",children:["Share this link anywhere. This is also the link you place on your",Object(b.jsx)(H.a,{href:"#",underline:"none",children:" Medal profile. "}),"Users who buy donations are not required to be in your server."]}),Object(b.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Donations inside Discord"}),Object(b.jsxs)(m.a,{gutterBottom:!0,variant:"body1",component:"div",children:["The roles on the left sync directly with your",Object(b.jsx)(H.a,{href:"#",underline:"none",children:" Discord Roles "}),". To get started, price your roles and set a PayPal email in settings."]}),Object(b.jsxs)(m.a,{gutterBottom:!0,variant:"body1",component:"div",children:["Your users can type ",Object(b.jsx)("strong",{children:'"donate"'}),"  in your Discord Server, they will be sent your donate link."]})]})})})]})})]})}));var oe=n(337),le=n(336),de=n(338),je=n(301),be=n(303);function ue(e){var t=e.guild,n=e.permission;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F.a,{sx:{width:300,m:2},children:[Object(b.jsxs)(le.a,{children:[null!==t.icon?Object(b.jsx)(oe.a,{component:"img",height:"140",image:"/assets/image/dashboard/sample-server.png",alt:"green iguana"}):Object(b.jsx)(oe.a,{component:"img",height:"140",image:"/assets/image/dashboard/default-server.png",alt:"green iguana"}),Object(b.jsxs)(R.a,{children:[Object(b.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"div",children:t.name.substr(0,20)+(t.name.length>20?"...":"")}),Object(b.jsx)(m.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(b.jsx)(de.a,{children:!0===n?Object(b.jsx)(p.a,{variant:"contained",color:"primary",endIcon:Object(b.jsx)(je.a,{}),onClick:function(){return window.location.href="https://hunter-bot-backend.herokuapp.com/server/".concat(t.id,"/role")},children:" Manage "}):Object(b.jsx)(p.a,{variant:"contained",color:"primary",endIcon:Object(b.jsx)(be.a,{}),onClick:function(){return window.location.href="http://discord.com/oauth2/authorize?client_id=".concat(j.a.clientId,"&scope=bot%20applications.commands&guild_id=").concat(t.id,"&response_type=code&redirect_uri=").concat(encodeURIComponent(j.a.redirect_uri))},children:" Invite "})})]})})}var he=[{id:"905608636674473994",name:"guardian's server",icon:null,owner:!0,permissions:2147483647,features:[],permissions_new:"1099511627775"},{id:"907703489780666378",name:"InnovDEVTeam(Blockchain Developers)",icon:"640645ffef0cc61b6abdc5485b270405",owner:!1,permissions:2147483647,features:[],permissions_new:"1099511627775"}],xe=[{id:"910229408248373279",name:"Hunter",icon:null,owner:!0,permissions:2147483647,features:[],permissions_new:"1099511627775"}];function Oe(){var e=Object(r.useState)(he),t=Object(l.a)(e,2),n=t[0],a=(t[1],Object(r.useState)(xe)),c=Object(l.a)(a,2),i=c[0],s=(c[1],Object(r.useState)(!1)),d=Object(l.a)(s,2),j=d[0],h=(d[1],Object(r.useState)("")),O=Object(l.a)(h,2),m=(O[0],O[1],Object(r.useState)("")),p=Object(l.a)(m,2),g=(p[0],p[1],Object(r.useState)("")),f=Object(l.a)(g,2);f[0],f[1],Object(o.g)();return Object(b.jsx)(b.Fragment,{children:!0===j?Object(b.jsx)(u,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ie,{}),Object(b.jsx)(N.a,{maxWidth:"lg",children:Object(b.jsxs)(x.a,{sx:{display:"flex",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center",p:1,m:1,height:100},children:[i.map((function(e,t){return Object(b.jsx)(ue,{guild:e,permission:!0},t)})),n.map((function(e,t){return Object(b.jsx)(ue,{guild:e,permission:!1},t)}))]})})]})})}var me=n(75),pe=n(76),ge=n(116),fe=n(115),ye=n(17),ve=n(308),we=n(309),Se=n(306),ke=n(310),Ce=n(304),Ne=n(305),Be=n(323),ze=n(307),Ie=n(314),Ae=n(315),Pe=0;function De(e,t,n,r){return{id:Pe+=1,name:e,color:n,price:t,summary:r}}function Fe(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Re(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}function Te(e,t){return"desc"===e?function(e,n){return Fe(e,n,t)}:function(e,n){return-Fe(e,n,t)}}var He=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"price",numeric:!0,disablePadding:!1,label:"Price ($)"},{id:"colors",string:!0,disablePadding:!1,label:"Colors"},{id:"summary",string:!0,disablePadding:!1,label:"Summary"}],We=function(e){Object(ge.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(me.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).createSortHandler=function(t){return function(n){e.props.onRequestSort(n,t)}},e}return Object(pe.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onSelectAllClick,r=t.order,a=t.orderBy,c=t.numSelected,i=t.rowCount,s=t.showstate;return Object(b.jsx)(Ce.a,{children:Object(b.jsxs)(Ne.a,{style:{display:s},children:[Object(b.jsx)(Se.a,{padding:"checkbox",children:Object(b.jsx)(Ie.a,{indeterminate:c>0&&c<i,checked:c===i,onChange:n})}),He.map((function(t){return Object(b.jsx)(Se.a,{align:"center",sortDirection:a===t.id&&r,children:Object(b.jsx)(Ae.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(b.jsx)(Be.a,{active:a===t.id,direction:r,onClick:e.createSortHandler(t.id),children:t.label})})},t.id)}),this)]})})}}]),n}(a.a.Component),_e=function(e){Object(ge.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(me.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={order:"asc",orderBy:"calories",selected:[],data:[De("Cupcake",305,"red",67),De("Donut",452,"yellow",51),De("Eclair",262,"brown",24),De("Frozen yoghurt",262,"blue",24),De("Gingerbread",356,"green",49),De("Honeycomb",408,"white",87),De("Cupcake",305,"red",67),De("Donut",452,"yellow",51),De("Eclair",262,"brown",24),De("Frozen yoghurt",33,"blue",24),De("Gingerbread",356,"green",49),De("Honeycomb",408,"white",87)],page:0,rowsPerPage:5},e.handleRequestSort=function(t,n){var r=n,a="desc";e.state.orderBy===n&&"desc"===e.state.order&&(a="asc"),e.setState({order:a,orderBy:r})},e.handleSelectAllClick=function(t){t.target.checked?e.setState((function(e){return{selected:e.data.map((function(e){return e.id}))}})):e.setState({selected:[]})},e.handleClick=function(t,n){var r=e.state.selected,a=r.indexOf(n),c=[];-1===a?c=c.concat(r,n):0===a?c=c.concat(r.slice(1)):a===r.length-1?c=c.concat(r.slice(0,-1)):a>0&&(c=c.concat(r.slice(0,a),r.slice(a+1))),console.log(r),e.setState({selected:c})},e.isSelected=function(t){return-1!==e.state.selected.indexOf(t)},e}return Object(pe.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,r=n.data,a=n.order,c=n.orderBy,i=n.selected;n.rowsPerPage,n.page;return Object(b.jsxs)("div",{className:"buyrole-main-div",children:[Object(b.jsxs)(ze.a,{className:"buyrole-root",style:{boxShadow:"none"},children:[Object(b.jsxs)("p",{className:"buyrole-p",children:[" Total price is ",Object(b.jsx)("strong",{}),"$"]}),Object(b.jsxs)("div",{className:"buyrole-tablewrapper-div",children:[Object(b.jsx)("div",{className:"buyrole-tablehead-div",children:Object(b.jsx)(ve.a,{"aria-labelledby":"tableTitle",children:Object(b.jsx)(We,{numSelected:i.length,order:a,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:r.length})})}),Object(b.jsx)("div",{className:"buyrole-tablewrapper",children:Object(b.jsxs)(ve.a,{"aria-labelledby":"tableTitle",children:[Object(b.jsx)(We,{numSelected:i.length,order:a,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:r.length}),Object(b.jsx)(we.a,{className:"buyrole-table",children:Re(r,Te(a,c)).map((function(t){var n=e.isSelected(t.id);return Object(b.jsxs)(Ne.a,{hover:!0,onClick:function(n){return e.handleClick(n,t.id)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[Object(b.jsx)(Se.a,{padding:"checkbox",children:Object(b.jsx)(Ie.a,{checked:n})}),Object(b.jsx)(Se.a,{align:"center",component:"th",scope:"row",padding:"none",children:t.name}),Object(b.jsx)(Se.a,{align:"center",children:t.price}),Object(b.jsx)(Se.a,{align:"center",children:Object(b.jsx)("button",{style:{background:t.color},className:"buyrole-colorbtn"})}),Object(b.jsx)(Se.a,{align:"center",children:t.summary})]},t.id)}))})]})})]})]}),Object(b.jsx)("div",{className:"buyrole-paybtn-div",children:Object(b.jsx)(ke.a,{variant:"extended",size:"large",align:"center",color:"primary","aria-label":"Add",className:t.margin,style:{alignSelf:"center",width:"150px"},children:Object(b.jsx)("p",{className:"buyrole-pay-p",children:"PAY"})})})]})}}]),n}(a.a.Component),qe=Object(ye.a)((function(e){return{}}))(_e),Ee=function(e){var t=Object(r.useState)(0),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){S().then((function(e){"authorized"===e.data.msg?c(1):c(2)}))}),[]),0===a?Object(b.jsx)(u,{}):1===a?Object(b.jsx)(o.b,Object(C.a)({},e)):Object(b.jsx)(o.a,{to:"/"})};function Ge(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",children:Object(b.jsx)(k,{})}),Object(b.jsx)(Ee,{path:"/dashboard",children:Object(b.jsx)(Oe,{})}),Object(b.jsx)(o.b,{path:"/server/:id/role",children:Object(b.jsx)(se,{})}),Object(b.jsx)(o.b,{path:"/roles",children:Object(b.jsx)(se,{})}),Object(b.jsx)(o.b,{path:"/buyrole",children:Object(b.jsx)(qe,{})})]})})}var Le=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Ge,{})})};n(211);i.a.render(Object(b.jsx)(Le,{}),document.getElementById("root"))},73:function(e,t){e.exports={botName:"Hunter",clientId:"905608828970729482",redirect_uri:"http://discord-bot-backend-app.herokuapp.com/api/auth/discord/redirect"}}},[[212,1,2]]]);
//# sourceMappingURL=main.67ef6240.chunk.js.map