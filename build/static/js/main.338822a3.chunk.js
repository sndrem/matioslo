(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,a){e.exports=a(346)},193:function(e,t,a){},208:function(e,t,a){},311:function(e,t,a){},323:function(e,t,a){},325:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),s=a.n(l),i=(a(193),a(22)),o=a(23),c=a(26),u=a(24),m=a(25),d=a(369),g=a(367),h=a(87);h.a.initialize("UA-132749138-1");var p={settSidevisning:function(e){h.a.pageview(e)},settEvent:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Label ikke satt";h.a.event({category:e,action:t,label:a})}},v=a(45),E=a(366),f=a(157).initializeApp({apiKey:"AIzaSyC14w-B83CrpmAYgZv6yLoFlc58Xs-rDuw",authDomain:"matioslo.firebaseapp.com",databaseURL:"https://matioslo.firebaseio.com",projectId:"840417479946",storageBucket:"",messagingSenderId:"matioslo"});a(208);p.settSidevisning("/loggut");var b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return r.a.createElement(E.a,{inverted:!0,fluid:!0},r.a.createElement(E.a.Item,{name:"hjem",href:"/"},"Hjem"),t?r.a.createElement(E.a.Item,{name:"opprett",href:"#/opprett"},"Legg til restaurant"):"",t?r.a.createElement(E.a.Item,{name:"Logg ut",onClick:function(){p.settEvent("User","Bruker logget ut","Utlogging"),f.auth().signOut(),e.props.history.push("#/")}},"Logg ut"):r.a.createElement(E.a.Item,{name:"Logg inn",href:"#/logginn"},"Logg inn"))}}]),t}(n.Component),k=a(355),j=a(370),y=a(368),O=a(356),C=f.database().ref("/restaurants"),R={getTopRestaurants:function(e,t,a){C.orderByChild(e).limitToFirst(t).on("value",function(e){var t=[];e.forEach(function(e){t.push(e.val())}),a(t.reverse())})},getAllRestaurants:function(e){C.once("value",function(t){e(t.val())})}},S=a(361),w=a(371),I=(a(311),function(e){var t=e.restaurants,a=e.title,n=e.loading,l="";return l=t.length>0||n?r.a.createElement(S.a.Group,null," ",t.map(function(e){var t=new Date(e.lastVisited).toLocaleDateString();return r.a.createElement(S.a,{key:e.name},r.a.createElement(S.a.Content,null,r.a.createElement(S.a.Header,null,e.name),r.a.createElement(S.a.Meta,null,"Bes\xf8kt: ",t),r.a.createElement(w.a,{icon:"heart",defaultRating:e.score,maxRating:6,disabled:!0}),r.a.createElement(S.a.Description,null,e.comment?e.comment:"Ingen kommentar lagt inn."),r.a.createElement(S.a.Extra,null,e.homepage?r.a.createElement("a",{href:e.homepage,target:"_blank",rel:"noopener noreferrer"},e.homepage):"Ingen nettside lagt til.")))}),r.a.createElement("p",null,r.a.createElement("a",{href:"#/restauranter"},"Se alle restauranter"))):r.a.createElement("p",null,"Det er ingen restauranter i databasen forel\xf8pig. Logg inn og legg til en restaurant!"),r.a.createElement("div",null,r.a.createElement("h1",null,a),l)}),L=a(354),D=a(80),T=(a(323),function(e){var t=e.user,a=e.history;return r.a.createElement("header",{className:"header"},r.a.createElement(L.a,{className:"header-title",as:"a",to:"/"},r.a.createElement(D.a,{name:"food"}),"Mat i Oslo"),r.a.createElement(b,{user:t,history:a}))}),A=(a(325),function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),F=5,V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTopRestaurants=function(){R.getTopRestaurants("score",F,function(e){a.setState(Object(v.a)({},a.state,{topRestaurants:A(e),loadingTopRestaurants:!1,active:!1}))})},a.getLastVisitedRestaurants=function(){R.getTopRestaurants("lastVisited",F,function(e){a.setState(Object(v.a)({},a.state,{lastVisitedRestaurants:A(e),loadingLastVisitedRestaurants:!1,active:!1}))})},a.state={topRestaurants:[],lastVisitedRestaurants:[],loadingTopRestaurants:!0,loadingLastVisitedRestaurants:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getTopRestaurants(),this.getLastVisitedRestaurants()}},{key:"render",value:function(){var e=this.state,t=e.topRestaurants,a=e.lastVisitedRestaurants,n=e.loadingTopRestaurants,l=e.loadingLastVisitedRestaurants;return r.a.createElement("div",null,r.a.createElement(T,{user:this.props.user,history:this.props.history}),r.a.createElement(k.a,null,r.a.createElement(j.a,{stackable:!0,columns:2},r.a.createElement(j.a.Column,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{active:n}),r.a.createElement("div",{className:"forside"},r.a.createElement(I,{restaurants:t,title:"Topp ".concat(F," restauranter"),loading:n})))),r.a.createElement(j.a.Column,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{active:l}),r.a.createElement("div",{className:"forside"},r.a.createElement(I,{restaurants:a,title:"Siste ".concat(F," bes\xf8kte"),loading:l})))))))}}]),t}(n.Component),B=a(54),x=a(364),H=a(360),N=a(365),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.updateLoggInnState=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(B.a)({},t,n))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=this.props.error,s="";return l&&(s=r.a.createElement(x.a,{warning:!0},r.a.createElement(x.a.Header,null,"Det var et problem med p\xe5loggingen"),r.a.createElement("p",null,l))),r.a.createElement("div",null,r.a.createElement(H.a,null,r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Brukernavn"),r.a.createElement("input",{placeholder:"Brukernavn",name:"username",onChange:this.updateLoggInnState})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Passord"),r.a.createElement("input",{type:"password",placeholder:"Passord",name:"password",onChange:this.updateLoggInnState})),r.a.createElement(N.a,{type:"submit",onClick:function(){return e.props.loggInn(a,n)}},"Logg inn")),s)}}]),t}(r.a.Component);p.settSidevisning("/logginn");var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:""},a.loggInn=function(e,t){f.auth().signInWithEmailAndPassword(e,t).then(function(e){p.settEvent("User","Bruker logget inn.","Innlogging"),a.props.history.push("/")}).catch(function(){a.setState({error:"Det var et problem med innloggingen. Sjekk at du bruker riktig brukernavn og passord."}),p.settEvent("User","Hadde problemer med \xe5 logge inn","Innlogging")})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{user:this.props.user,history:this.props.history}),r.a.createElement(k.a,null,r.a.createElement(U,{loggInn:this.loggInn,error:this.state.error})))}}]),t}(n.Component),P=a(64),q=a(363),z=a(357),K=a(358),W=a(359),J=function(e){return e.map(function(e){return{value:e,text:e,key:e}})},G=J(["Amerikansk","Asiatisk","BBQ","Indisk","Italiensk","Nordisk","Thai"]),Q=J(["Billig","Medium","Dyrt"]),X=J(["D\xe5rlig","Helt grei","Bra","Eksemplarisk"]),Y=function(e){var t=e.errors;return r.a.createElement(q.a,{celled:!0},t.map(function(e,t){return r.a.createElement(q.a.Item,{key:t},e)}))},Z=function(e){var t=e.title,a=e.status;return r.a.createElement(x.a,{info:!0},r.a.createElement(x.a.Header,null,t),r.a.createElement("p",null,a))},$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){var n=t.name,r=t.value;"score"===n&&(r=parseInt(r)),a.setState({data:Object(v.a)({},a.state.data,Object(B.a)({},n,r))},function(){return a.validateForm()})},a.validateForm=function(){var e=a.state.data,t=e.name,n=e.category,r=e.price,l=e.service,s=e.score,i=e.lastVisited,o=[];return a.empty(t)&&o.push("Navn kan ikke v\xe6re tom"),a.empty(n)&&o.push("Kategori kan ikke v\xe6re tom"),a.empty(r)&&o.push("Pris kan ikke v\xe6re tom"),a.empty(l)&&o.push("Service kan ikke v\xe6re tom"),a.empty(s)&&o.push("Score kan ikke v\xe6re tom"),a.empty(i)&&o.push("Dato bes\xf8kt m\xe5 v\xe6re satt"),o.length>0?(a.setState({data:Object(v.a)({},a.state.data),errors:o}),!1):(a.setState({data:Object(v.a)({},a.state.data),errors:[]}),!0)},a.saveToDb=function(){if(a.validateForm()){p.settEvent("User","Restaurant ble lagret i databasen","Opprettelse av restaurant");var e="".concat(a.state.data.name," ble lagret i databasen");a.props.saveToDb(a.state.data,function(t){t&&(e="Det var et problem ved lagring til databasen"),a.setState({data:{name:"",category:"",price:"",service:"",score:3,comment:"",homepage:"",lastVisited:""},errors:[],status:e})})}},a.empty=function(e){return""===e||void 0===e||null===e},a.state={data:{name:"",category:"",price:"",service:"",score:3,comment:"",homepage:"",lastVisited:""},errors:[],status:""},a.handleChange=a.handleChange.bind(Object(P.a)(Object(P.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.status,n=e.data,l=n.name,s=n.price,i=n.service,o=n.comment,c=n.category,u=n.score,m=n.homepage,d=n.lastVisited;return r.a.createElement("div",null,a?r.a.createElement(Z,{title:"Informasjon",status:a,name:l}):"",t.length>0?r.a.createElement(Y,{errors:t}):"",r.a.createElement(H.a,{name:"restaurantform",onSubmit:this.saveToDb},r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Navn p\xe5 restaurant"),r.a.createElement(z.a,{onChange:this.handleChange,placeholder:"Navn p\xe5 restaurant",name:"name",value:l})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Type restaurant"),r.a.createElement(K.a,{onChange:this.handleChange,placeholder:"Hvilken type restaurant er dette?",name:"category",options:G,required:!0,value:c})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Pris"),r.a.createElement(K.a,{onChange:this.handleChange,placeholder:"Prismessig",name:"price",options:Q,required:!0,value:s})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Service"),r.a.createElement(K.a,{onChange:this.handleChange,placeholder:"Hvordan var servicen?",name:"service",options:X,required:!0,value:i})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Totalscore"),r.a.createElement(z.a,{onChange:this.handleChange,type:"number",step:"1",name:"score",value:u,min:"1",max:"6",required:!0})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"N\xe5r var bes\xf8ket?"),r.a.createElement(z.a,{type:"date",name:"lastVisited",value:d,onChange:this.handleChange})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Hjemmeside"),r.a.createElement(z.a,{type:"text",value:m,name:"homepage",onChange:this.handleChange})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Kommentar"),r.a.createElement(W.a,{name:"comment",cols:"30",rows:"10",onChange:this.handleChange,value:o})),r.a.createElement(N.a,{type:"submit"},"Lagre")))}}]),t}(n.Component);p.settSidevisning("/opprettRestaurant");var _=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).saveRestaurantToDb=function(e,t){e.registered=(new Date).getTime(),a.ref.child(e.name).set(e,function(e){t(e||null)})},a.ref=f.database().ref("restaurants"),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{user:this.props.user,history:this.props.history}),r.a.createElement(k.a,null,r.a.createElement("h1",null,"Legg til en restaurant"),r.a.createElement($,{saveToDb:this.saveRestaurantToDb})))}}]),t}(r.a.Component);p.settSidevisning("/alleRestauranter");var ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getAllRestaurants=function(){R.getAllRestaurants(function(e){a.setState({restaurants:A(e),loading:!1})})},a.state={restaurants:[],loading:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getAllRestaurants()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{user:this.props.user,history:this.props.history}),r.a.createElement(k.a,null,r.a.createElement(O.a,{active:this.state.loading}),r.a.createElement(I,{restaurants:this.state.restaurants,title:"Alle restaurantene"})))}}]),t}(n.Component);p.settSidevisning("/forside");var te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).authListener=function(){a.firebase.auth().onAuthStateChanged(function(e){e?a.setState({user:e}):a.setState({user:null})})},a.state={user:{}},a.firebase=f,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(g.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(V,Object.assign({},t,{user:e}))}}),r.a.createElement(g.a,{path:"/opprett",exact:!0,render:function(t){return r.a.createElement(_,Object.assign({},t,{user:e}))}}),r.a.createElement(g.a,{path:"/logginn",exact:!0,render:function(t){return r.a.createElement(M,Object.assign({},t,{user:e}))}}),r.a.createElement(g.a,{path:"/restauranter",exact:!0,render:function(t){return r.a.createElement(ee,Object.assign({},t,{user:e}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,2,1]]]);
//# sourceMappingURL=main.338822a3.chunk.js.map