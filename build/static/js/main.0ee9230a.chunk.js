(this["webpackJsonpread-n-watch-later-store"]=this["webpackJsonpread-n-watch-later-store"]||[]).push([[0],{35:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(29),r=n.n(a),s=(n(35),n(3)),l=n(4),o=n(6),h=n(5),j=n(10),d=n(2),u=n(0),b=function(t){return Object(u.jsx)("div",{children:t.children})},O=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(j.b,{to:"/read",children:"Read"}),Object(u.jsx)(j.b,{to:"/watch",children:"Watch"})]})}}]),n}(i.Component),p=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:t.props.link},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"read_link",children:[Object(u.jsx)("button",{onClick:this.props.deleteLink.bind(this,this.props.link.id),children:"Delete"}),Object(u.jsxs)("a",{href:this.state.link.link,target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("h3",{children:this.state.link.id+1}),Object(u.jsx)("h3",{children:this.state.link.link})]})]})}}]),n}(i.Component),x=n(8),k=n.n(x),m=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:[]},t.deleteLink=function(e){k.a.delete("http://localhost:8000/api/read?id="+e).then((function(e){t.setState({link:e.data})})).catch((function(t){return console.error(t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;k.a.get("http://localhost:8000/api/read").then((function(e){t.setState({link:e.data})}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"sub_heading",children:"Read Later"}),Object(u.jsx)("div",{style:{padding:"45px"}}),Object(u.jsx)("div",{className:"functions",children:Object(u.jsx)(j.b,{to:"/addReadLink",children:Object(u.jsx)("button",{children:"Add Link"})})}),Object(u.jsx)("div",{className:"main",children:this.state.link.map((function(e){return Object(u.jsx)(p,{link:e,deleteLink:t.deleteLink},e.id)}))})]})}}]),n}(i.Component),v=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:t.props.link},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"watch_link",children:[Object(u.jsx)("button",{onClick:this.props.deleteLink.bind(this,this.props.link.id),children:"Delete"}),Object(u.jsxs)("a",{href:this.state.link.link,target:"_blank",rel:"noopener noreferrer",className:"main_link",children:[Object(u.jsx)("h2",{className:"center_id",children:this.state.link.id+1}),Object(u.jsx)("img",{src:this.state.link.thumb,alt:this.state.link.title,width:"150px"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:this.state.link.title}),Object(u.jsx)("span",{children:this.state.link.length})]})]}),Object(u.jsxs)("a",{href:this.state.link.creator_link,rel:"noopener noreferrer",target:"_blank",children:[" ",this.state.link.creator]})]})}}]),n}(i.Component),f=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:[]},t.deleteLink=function(e){var n=document.getElementById("sort").value;console.log(n),k.a.delete("http://localhost:8000/api/watch?id="+e+"&SORTid="+n).then((function(e){t.setState({link:e.data})})).catch((function(t){return console.error(t)}))},t.handleClick=function(e){k.a.get("http://localhost:8000/api/watch",{params:{id:e}}).then((function(e){t.setState({link:e.data})}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;k.a.get("http://localhost:8000/api/watch",{params:{id:0}}).then((function(e){t.setState({link:e.data})}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"sub_heading",children:"Watch Later"}),Object(u.jsx)("div",{style:{padding:"45px"}}),Object(u.jsxs)("div",{className:"functions",children:[Object(u.jsxs)("div",{children:["Sort: ",Object(u.jsxs)("select",{name:"sort",id:"sort",onChange:function(e){t.handleClick(e.target.value)},children:[Object(u.jsx)("option",{hidden:!0,children:"Choose"}),Object(u.jsx)("option",{value:"1",children:"Title"}),Object(u.jsx)("option",{value:"2",children:"Length ASC"}),Object(u.jsx)("option",{value:"3",children:"Length DESC"}),Object(u.jsx)("option",{value:"4",children:"Creator"})]})]}),Object(u.jsx)(j.b,{to:"/addWatchLink",children:Object(u.jsx)("button",{children:"Add Link"})})]}),Object(u.jsx)("div",{className:"main",children:this.state.link.map((function(e){return Object(u.jsx)(v,{link:e,deleteLink:t.deleteLink},e.id)}))})]})}}]),n}(i.Component),g=n(16),y=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:"",redirect:!1},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t.formHandler=function(e){e.preventDefault();var n={id:"",link:t.state.link};k.a.post("http://localhost:8000/api/read",n).then((function(){return t.setState({redirect:!0})})).catch((function(t){return console.error(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(u.jsx)(d.a,{to:"/read"}):Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:this.formHandler,children:[Object(u.jsx)("h2",{children:"Add Link"}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"link",children:"Link: "}),Object(u.jsx)("input",{type:"url",name:"link",id:"link",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"formButtons",children:[Object(u.jsx)("button",{type:"submit",value:"Submit",children:"Submit"}),Object(u.jsx)("button",{id:"cancel",onClick:this.props.history.goBack,children:"Cancel"})]})]})})}}]),n}(i.Component),C=Object(d.g)(y),L=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={link:"",thumb:"",length:"",title:"",creator:"",creator_link:"",redirect:!1},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t.formHandler=function(e){e.preventDefault();var n=t.state,i={id:"",link:n.link,thumb:n.thumb,length:n.length,title:n.title,creator:n.creator,creator_link:n.creator_link};k.a.post("http://localhost:8000/api/watch",i).then((function(){return t.setState({redirect:!0})})).catch((function(t){return console.error(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(u.jsx)(d.a,{to:"/watch"}):Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:this.formHandler,children:[Object(u.jsx)("h2",{children:"Add Link"}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"link",children:"Video Link: "}),Object(u.jsx)("input",{type:"text",name:"link",id:"link",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"thumb",children:"Thumbnail Link: "}),Object(u.jsx)("input",{type:"url",name:"thumb",id:"thumb",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"length",children:"Length: "}),Object(u.jsx)("input",{type:"time",name:"length",id:"length",required:!0,step:"1",onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{type:"text",name:"title",id:"title",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"creator",children:"Creator: "}),Object(u.jsx)("input",{type:"text",name:"creator",id:"creator",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("label",{htmlFor:"creator_link",children:"Creator Link: "}),Object(u.jsx)("input",{type:"url",name:"creator_link",id:"creator_link",required:!0,onChange:this.onChange})]}),Object(u.jsxs)("div",{className:"formButtons",children:[Object(u.jsx)("button",{type:"submit",value:"Submit",children:"Submit"}),Object(u.jsx)("button",{id:"cancel",onClick:this.props.history.goBack,children:"Cancel"})]})]})})}}]),n}(i.Component),S=Object(d.g)(L),w=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;k.a.get("http://localhost:8000/api/WCount",{}).then((function(e){t.setState({count:e.data})}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:["(",this.state.count,")"]})}}]),n}(i.Component),N=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;k.a.get("http://localhost:8000/api/RCount",{}).then((function(e){t.setState({count:e.data})}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:["(",this.state.count,")"]})}}]),n}(i.Component),_=function(t){Object(o.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"main_child",children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("h1",{className:"main_heading",children:[Object(u.jsxs)(j.b,{to:"/read",children:["Read",Object(u.jsx)(N,{})]}),"\xa0n\xa0",Object(u.jsxs)(j.b,{to:"/watch",children:["Watch",Object(u.jsx)(w,{})]}),"\xa0Later Store"]}),Object(u.jsx)("div",{style:{marginTop:"110px"}}),Object(u.jsx)(b,{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{exact:!0,path:"/",children:Object(u.jsx)(O,{})}),Object(u.jsx)(d.b,{path:"/read",children:Object(u.jsx)(m,{})}),Object(u.jsx)(d.b,{path:"/addReadLink",children:Object(u.jsx)(C,{})}),Object(u.jsx)(d.b,{path:"/watch",children:Object(u.jsx)(f,{})}),Object(u.jsx)(d.b,{path:"/addWatchLink",children:Object(u.jsx)(S,{})})]})})]})})}}]),n}(i.Component);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.0ee9230a.chunk.js.map