(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),s=a.n(n),r=a(35),l=a.n(r),c=a(9),i=a(1),o=function(){return s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement(c.b,{to:"/",className:"brand-logo"},"IT courses"),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",null,s.a.createElement(c.b,{to:"/shop"},"Shop")),s.a.createElement("li",null,s.a.createElement(c.b,{to:"/about"},"About us")))))},u=function(){return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("h1",null,"Selling you great stuff!"),"with the help of the chatbot")},m=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Selling you great stuff!"),"with the help of the chatbot")},d=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Here goes a list of items"))},h=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Shop"),s.a.createElement(d,null))},p=a(37),f=a(8),g=a.n(f),v=a(20),y=a(14),E=a(16),k=a(17),b=a(7),w=a(19),x=a(18),_=a(25),N=a.n(_),O=a(38),S=a(70),j=function(e){return s.a.createElement("div",{className:"col s12 m8 offset-m2 l6 offset-l3"},s.a.createElement("div",{className:"card-panel grey lighten-5 z-depth-1"},s.a.createElement("div",{className:"row valign-wrapper"},"bot"===e.speaks&&s.a.createElement("div",{className:"col s2"},s.a.createElement("a",{href:"/",className:"btn-floating btn-large waves-effect waves-light red"},e.speaks)),s.a.createElement("div",{className:"col s10"},s.a.createElement("span",{className:"black-text"},e.text)),"user"===e.speaks&&s.a.createElement("div",{className:"col s2"},s.a.createElement("a",{href:"/",className:"btn-floating btn-large waves-effect waves-light red"},e.speaks)))))},C=function(e){return s.a.createElement("div",{style:{height:270,paddingRight:30,float:"left"}},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image",style:{width:240}},s.a.createElement("img",{alt:e.payload.header,src:e.payload.image}),s.a.createElement("span",{className:"card-title"},e.payload.header)),s.a.createElement("div",{className:"card-content"},e.payload.description,s.a.createElement("p",null," ",s.a.createElement("a",{href:"/"},e.payload.price))),s.a.createElement("div",{className:"card-action"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.payload.link},"GET NOW"))))},I=function(e){return e.reply.payload?s.a.createElement("a",{style:{margin:3},href:"/",className:"btn-floating btn-large waves-effect waves-light red",onClick:function(t){return e.click(t,e.reply.payload,e.reply.text)}},e.reply.text):s.a.createElement("a",{style:{margin:3},href:e.reply.link,className:"btn-floating btn-large waves-effect waves-light red"},e.reply.text)},q=function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e))._handleClick=n._handleClick.bind(Object(b.a)(n)),n}return Object(k.a)(a,[{key:"_handleClick",value:function(e,t,a){this.props.replyClick(e,t,a)}},{key:"renderQuickReply",value:function(e,t){return s.a.createElement(I,{key:t,click:this._handleClick,reply:e})}},{key:"renderQuickReplies",value:function(e){var t=this;return e?e.map((function(e,a){return t.renderQuickReply(e,a)})):null}},{key:"render",value:function(){return s.a.createElement("div",{className:"col s12 m8 offset-m2 l6 offset-l3"},s.a.createElement("div",{className:"card-panel grey lighten-5 z-depth-1"},s.a.createElement("div",{className:"row valign-wrapper"},s.a.createElement("div",{className:"col s2"},s.a.createElement("a",{href:"/",className:"btn-floating btn-large waves-effect waves-light red"},this.props.speaks)),s.a.createElement("div",{id:"quick-replies",className:"col s10"},this.props.text&&s.a.createElement("p",null,this.props.text.text),this.renderQuickReplies(this.props.payload)))))}}]),a}(n.Component),P=new O.a,T=function(e){Object(w.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e))._handleInputKeyPress=n._handleInputKeyPress.bind(Object(b.a)(n)),n._handleQuickReplyPayload=n._handleQuickReplyPayload.bind(Object(b.a)(n)),n.hide=n.hide.bind(Object(b.a)(n)),n.show=n.show.bind(Object(b.a)(n)),n.state={messages:[],showBot:!0,shopWelcomeSent:!1,clientToken:!1,regenerateToken:0},void 0===P.get("userID")&&P.set("userID",Object(S.a)(),{path:"/"}),n}return Object(k.a)(a,[{key:"df_text_query",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={speaks:"user",msg:{text:{text:t}}},this.setState({messages:[].concat(Object(v.a)(this.state.messages),[a])}),n={queryInput:{text:{text:t,languageCode:"en-US"}}},e.next=5,this.df_client_call(n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"df_event_query",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={queryInput:{event:{name:t,languageCode:"en-US"}}},e.next=3,this.df_client_call(a);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"df_client_call",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n,s,r,l,c,i,o,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==this.state.clientToken){e.next=6;break}return e.next=4,N.a.get("/api/get_client_token");case 4:a=e.sent,this.setState({clientToken:a.data.token});case 6:return n={headers:{Authorization:"Bearer "+this.state.clientToken,"Content-Type":"application/json; charset=utf-8"}},e.next=9,N.a.post("https://dialogflow.googleapis.com/v2/projects/smartbot-dwfbra/agent/sessions/react-bot-session"+P.get("userID")+":detectIntent",t,n);case 9:if(s=e.sent,r={},s.data.queryResult.fulfillmentMessages){l=Object(p.a)(s.data.queryResult.fulfillmentMessages);try{for(l.s();!(c=l.n()).done;)i=c.value,r={speaks:"bot",msg:i},this.setState({messages:[].concat(Object(v.a)(this.state.messages),[r])})}catch(m){l.e(m)}finally{l.f()}}e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),401===e.t0.response.status&&this.state.regenerateToken<1?(this.setState({clientToken:!1,regenerateToken:1}),this.df_client_call(t)):(o={speaks:"bot",msg:{text:{text:"I'm having troubles. I need to terminate. will be back later"}}},this.setState({messages:[].concat(Object(v.a)(this.state.messages),[o])}),u=this,setTimeout((function(){u.setState({showBot:!1})}),2e3));case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"resolveAfterXSeconds",value:function(e){return new Promise((function(t){setTimeout((function(){t(e)}),1e3*e)}))}},{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.df_event_query("Welcome"),"/shop"!==window.location.pathname||this.state.shopWelcomeSent){e.next=6;break}return e.next=4,this.resolveAfterXSeconds(1);case 4:this.df_event_query("WELCOME_SHOP"),this.setState({shopWelcomeSent:!0,showBot:!0});case 6:this.props.history.listen((function(){"/shop"!==t.props.history.location.pathname||t.state.shopWelcomeSent||(t.df_event_query("WELCOME_SHOP"),t.setState({shopWelcomeSent:!0,showBot:!0}))}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"}),this.talkInput&&this.talkInput.focus()}},{key:"show",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({showBot:!0})}},{key:"hide",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({showBot:!1})}},{key:"_handleQuickReplyPayload",value:function(e,t,a){switch(e.preventDefault(),e.stopPropagation(),t){case"recommended_yes":this.df_event_query("SHOW_RECOMMENDATIONS");break;case"training_masterclass":this.df_event_query("MASTERCLASS");break;default:this.df_text_query(a)}}},{key:"renderCards",value:function(e){return e.map((function(e,t){return s.a.createElement(C,{key:t,payload:e})}))}},{key:"renderOneMessage",value:function(e,t){return e.msg&&e.msg.text&&e.msg.text.text?s.a.createElement(j,{key:t,speaks:e.speaks,text:e.msg.text.text}):e.msg&&e.msg.payload&&e.msg.payload.cards?s.a.createElement("div",{key:t},s.a.createElement("div",{className:"card-panel grey lighten-5 z-depth-1"},s.a.createElement("div",{style:{overflow:"hidden"}},s.a.createElement("div",{className:"col s2"},s.a.createElement("a",{href:"/",className:"btn-floating btn-large waves-effect waves-light red"},e.speaks)),s.a.createElement("div",{style:{overflow:"auto",overflowY:"scroll"}},s.a.createElement("div",{style:{height:300,width:270*e.msg.payload.cards.length}},this.renderCards(e.msg.payload.cards)))))):e.msg&&e.msg.payload&&e.msg.payload.quick_replies?s.a.createElement(q,{text:e.msg.payload.text?e.msg.payload.text:null,key:t,replyClick:this._handleQuickReplyPayload,speaks:e.speaks,payload:e.msg.payload.quick_replies}):void 0}},{key:"renderMessages",value:function(e){var t=this;return e?e.map((function(e,a){return t.renderOneMessage(e,a)})):null}},{key:"_handleInputKeyPress",value:function(e){"Enter"===e.key&&(this.df_text_query(e.target.value),e.target.value="")}},{key:"render",value:function(){var e=this;return this.state.showBot?s.a.createElement("div",{style:{minHeight:500,maxHeight:470,width:400,position:"absolute",bottom:0,right:0,border:"1px solid lightgray"}},s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("a",{href:"/",className:"brand-logo"},"ChatBot"),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",null,s.a.createElement("a",{href:"/",onClick:this.hide},"Close"))))),s.a.createElement("div",{id:"chatbot",style:{minHeight:388,maxHeight:388,width:"100%",overflow:"auto"}},this.renderMessages(this.state.messages),s.a.createElement("div",{ref:function(t){e.messagesEnd=t},style:{float:"left",clear:"both"}})),s.a.createElement("div",{className:" col s12"},s.a.createElement("input",{style:{margin:0,paddingLeft:"1%",paddingRight:"1%",width:"98%"},ref:function(t){e.talkInput=t},placeholder:"type a message:",onKeyPress:this._handleInputKeyPress,id:"user_says",type:"text"}))):s.a.createElement("div",{style:{minHeight:40,maxHeight:500,width:400,position:"absolute",bottom:0,right:0,border:"1px solid lightgray"}},s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("a",{href:"/",className:"brand-logo"},"ChatBot"),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",null,s.a.createElement("a",{href:"/",onClick:this.show},"Show"))))),s.a.createElement("div",{ref:function(t){e.messagesEnd=t},style:{float:"left",clear:"both"}}))}}]),a}(n.Component),R=Object(i.e)(T),B=function(){return s.a.createElement("div",null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(o,null),s.a.createElement(i.a,{exact:!0,path:"/",component:u}),s.a.createElement(i.a,{exact:!0,path:"/about",component:m}),s.a.createElement(i.a,{exact:!0,path:"/shop",component:h}),s.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.768ee524.chunk.js.map