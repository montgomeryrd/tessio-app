(this["webpackJsonptessio-app"]=this["webpackJsonptessio-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(6),c=a.n(s),o=a(10),i=a(7),m=a(8),r=a(2),u=a(12),d=a(9),p=a(11),h=(a(4),function(e){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-container",onSubmit:e.handleSubmit},l.a.createElement("textarea",{id:"list",name:"list",rows:"25",cols:"33",autoComplete:"off",value:e.value,onChange:e.handleChange,required:!0,placeholder:"(copy order and paste here)"}),l.a.createElement("button",{className:"submit",type:"submit",onSubmit:e.handleSubmit},"populate list")))}),E=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),s=a[0],c=a[1],o=function(){return c(!s)},i=e.tessio?e.tessio.length?e.tessio.map((function(t,a){return l.a.createElement("div",{className:"item-container",unselectable:"on",key:a},l.a.createElement("div",{className:"blue-line"},l.a.createElement("span",{className:"item-complete",style:{opacity:e.complete.includes(t)?.2:1},onClick:function(){e.completeItem(a)}},l.a.createElement("span",{className:"item"},t))))})):l.a.createElement("div",{className:"supplylist-container"},l.a.createElement(h,{value:e.value,page:e.page,tessio:e.tessio,handleChange:e.handleChange,handleSubmit:e.handleSubmit})):window.location.reload(!0);return l.a.createElement("div",{className:"tessio-container"},l.a.createElement("div",{className:"example-container"},l.a.createElement("span",null,l.a.createElement("span",{className:s?"weak":"strong",onClick:o},"show"),"/",l.a.createElement("span",{className:s?"strong":"weak",onClick:o},"hide")," example"),l.a.createElement("div",{className:"example-modal",style:{display:s?"block":"none"}},l.a.createElement("span",{className:"strong"},"example order"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"(amount) and (item)"),l.a.createElement("br",null),l.a.createElement("li",null,"3 Bags of Basil"),l.a.createElement("li",null,'4 Packs of 10" Pizza Boxes'),l.a.createElement("li",null,"1 Pack of #3 To-Go Boxes"),l.a.createElement("li",null,"5 Fresh Mozzarella"),l.a.createElement("li",null,"40lbs Chicken"),l.a.createElement("li",null,"12x Butterhead Lettuce"),l.a.createElement("li",null,"6x Romaine Lettuce")))),l.a.createElement("div",{className:"list"},i))},b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.addList(n.state),n.setState({value:""})},n.addList=function(e){e=n.state.value.match(/\d(.*)/g),n.setState({tessio:e},(function(){console.log("tessio ",n.state.tessio)}))},n.completeItem=function(e){if(n.state.complete.includes(n.state.tessio[e])){var t=n.state.complete.indexOf(n.state.tessio[e]),a=n.state.complete;a.splice(t,1),n.setState({complete:a},(function(){console.log("complete ",n.state.complete)}))}else{var l=[].concat(Object(o.a)(n.state.complete),[n.state.tessio[e]]);n.setState({complete:l},(function(){console.log("complete ",n.state.complete)}))}},n.removeCompletedItems=function(e){var t=[];n.state.tessio.forEach((function(e){return n.state.complete.includes(e)?e:t.push(e)})),n.setState({tessio:t}),n.setState({complete:[]})},n.state={value:"",tessio:[],complete:[]},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){var e=(new Date).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()];return l.a.createElement("div",{className:"dashboard-container"},l.a.createElement("div",{className:"dashboard-head-container"},l.a.createElement("h1",null,e),l.a.createElement("h2",null,t)),l.a.createElement("div",{className:"dashboard-body-container"},l.a.createElement("div",null,l.a.createElement(E,{value:this.state.value,tessio:this.state.tessio,complete:this.state.complete,completeItem:this.completeItem,handleChange:this.handleChange,handleSubmit:this.handleSubmit}))),l.a.createElement("div",{className:"dashboard-foot-container",style:{display:this.state.tessio.length?"block":"none"}},l.a.createElement("button",{className:"submit",onClick:this.removeCompletedItems},"refresh list")))}}]),a}(l.a.Component);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))};a(18);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))},4:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.fe17a0a5.chunk.js.map