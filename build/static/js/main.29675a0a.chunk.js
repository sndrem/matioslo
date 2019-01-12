(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a(330)},186:function(e,t,a){},199:function(e,t,a){},305:function(e,t,a){},308:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),s=a.n(l),c=(a(186),a(18)),i=a(19),o=a(22),u=a(20),m=a(21),h=a(354),d=a(353),p=a(43),g=a(152).initializeApp({apiKey:"AIzaSyC14w-B83CrpmAYgZv6yLoFlc58Xs-rDuw",authDomain:"matioslo.firebaseapp.com",databaseURL:"https://matioslo.firebaseio.com",projectId:"840417479946",storageBucket:"",messagingSenderId:"matioslo"}),v=(a(199),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.user;return r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement("div",{className:"menu-item"},r.a.createElement("a",{href:"#/"},"Hjem")),t?r.a.createElement("div",{className:"menu-item"},r.a.createElement("a",{href:"#/opprett"},"Legg til restaurant")):"",t?r.a.createElement("div",{className:"menu-item"},r.a.createElement("a",{href:"#/",onClick:function(){g.auth().signOut(),e.props.history.push("#/")}},"Logg ut")):r.a.createElement("div",{className:"menu-item"},r.a.createElement("a",{href:"#/logginn"},"Logg inn")))}}]),t}(n.Component)),E=a(340),f=a(352),b=g.database().ref("/restaurants"),j={getTopRestaurants:function(e,t,a){b.orderByChild(e).limitToFirst(t).on("value",function(e){var t=[];e.forEach(function(e){t.push(e.val())}),a(t.reverse())})},getAllRestaurants:function(e){b.once("value",function(t){e(t.val())})}},k=a(351),O=a(80),y=a(346),C=(a(305),function(e){var t=e.restaurants,a=e.title,n="";return n=t.length>0?r.a.createElement(y.a.Group,null," ",t.map(function(e){var t=new Date(e.lastVisited).toLocaleDateString();return r.a.createElement(y.a,{key:e.name},r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null,e.name),r.a.createElement(y.a.Meta,null,"Score: ",e.score,", Bes\xf8kt: ",t),r.a.createElement(y.a.Description,null,e.comment?e.comment:"Ingen kommentar lagt inn.")))})):r.a.createElement("p",null,"Det er ingen restauranter i databasen forel\xf8pig. Logg inn og legg til en restaurant!"),r.a.createElement("div",null,r.a.createElement("h1",null,a),n,r.a.createElement("p",null,r.a.createElement("a",{href:"#/restauranter"},"Se alle restauranter")))}),w=a(339),S=(a(308),function(){return r.a.createElement("header",{className:"header"},r.a.createElement(w.a,{className:"header-title",as:"a",to:"/"},r.a.createElement(O.a,{name:"food"}),"Mat i Oslo"))}),D=a(349),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toogleMoods=function(){var e=["sad","shocked","happy","blissful","lovestruck","excited","ko"];a.index>=e.length&&(a.index=0);var t=e[a.index];a.setState({mood:t}),a.index=a.index+1},a.startInterval=function(e){a.interval=setInterval(a.toogleMoods,e)},a.index=0,a.state={mood:"blissful"},a.startInterval(1200),a.interval=null,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.mood;return r.a.createElement(D.a,{size:300,mood:e,color:"#FDA7DC"})}}]),t}(n.Component),R=function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]},L=5,T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTopRestaurants=function(){j.getTopRestaurants("score",L,function(e){a.setState(Object(p.a)({},a.state,{topRestaurants:R(e),active:!1}))})},a.getLastVisitedRestaurants=function(){j.getTopRestaurants("lastVisited",L,function(e){a.setState(Object(p.a)({},a.state,{lastVisitedRestaurants:R(e),active:!1}))})},a.state={topRestaurants:[],lastVisitedRestaurants:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getTopRestaurants(),this.getLastVisitedRestaurants()}},{key:"render",value:function(){var e=this.state,t=e.topRestaurants,a=e.lastVisitedRestaurants;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(v,{user:this.props.user,history:this.props.history}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Row,{columns:2},r.a.createElement(f.a.Column,null,r.a.createElement(I,null)),r.a.createElement(f.a.Column,null,r.a.createElement("div",{className:"forside"},r.a.createElement(C,{restaurants:t,title:"Topp ".concat(L," restauranter")})))),r.a.createElement(f.a.Row,{columns:2},r.a.createElement(f.a.Column,null,r.a.createElement("div",{className:"forside"},r.a.createElement(C,{restaurants:a,title:"Siste ".concat(L," bes\xf8kte")}))),r.a.createElement(f.a.Column,null,r.a.createElement(I,null))))))}}]),t}(n.Component),x=a(53),A=a(350),F=a(345),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.updateLoggInnState=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(x.a)({},t,n))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=this.props.error,s="";return l&&(s=r.a.createElement(A.a,{warning:!0},r.a.createElement(A.a.Header,null,"Det var et problem med p\xe5loggingen"),r.a.createElement("p",null,l))),r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Brukernavn"),r.a.createElement("input",{placeholder:"Brukernavn",name:"username",onChange:this.updateLoggInnState})),r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Passord"),r.a.createElement("input",{type:"password",placeholder:"Passord",name:"password",onChange:this.updateLoggInnState})),r.a.createElement(k.a,{type:"submit",onClick:function(){return e.props.loggInn(a,n)}},"Logg inn")),s)}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:""},a.loggInn=function(e,t){g.auth().signInWithEmailAndPassword(e,t).then(function(e){a.props.history.push("/")}).catch(function(){a.setState({error:"Det var et problem med innloggingen. Sjekk at du bruker riktig brukernavn og passord."})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(v,null),r.a.createElement(E.a,null,r.a.createElement(N,{loggInn:this.loggInn,error:this.state.error})))}}]),t}(n.Component),V=a(61),H=a(347),M=a(341),P=a(342),q=a(343),W=function(e){return e.map(function(e){return{value:e,text:e,key:e}})},z=W(["Amerikansk","Asiatisk","BBQ","Indisk","Italiensk","Nordisk","Thai"]),K=W(["Billig","Medium","Dyrt"]),J=W(["D\xe5rlig","Helt grei","Bra","Eksemplarisk"]),U=function(e){var t=e.errors;return r.a.createElement(H.a,{celled:!0},t.map(function(e,t){return r.a.createElement(H.a.Item,{key:t},e)}))},G=function(e){var t=e.title,a=e.status;return r.a.createElement(A.a,{info:!0},r.a.createElement(A.a.Header,null,t),r.a.createElement("p",null,a))},Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){var n=t.name,r=t.value;"score"===n&&(r=parseInt(r)),a.setState({data:Object(p.a)({},a.state.data,Object(x.a)({},n,r))},function(){return a.validateForm()})},a.validateForm=function(){var e=a.state.data,t=e.name,n=e.category,r=e.price,l=e.service,s=e.score,c=(e.homepage,[]);return a.empty(t)&&c.push("Navn kan ikke v\xe6re tom"),a.empty(n)&&c.push("Kategori kan ikke v\xe6re tom"),a.empty(r)&&c.push("Pris kan ikke v\xe6re tom"),a.empty(l)&&c.push("Service kan ikke v\xe6re tom"),a.empty(s)&&c.push("Score kan ikke v\xe6re tom"),c.length>0?(a.setState({data:Object(p.a)({},a.state.data),errors:c}),!1):(a.setState({data:Object(p.a)({},a.state.data),errors:[]}),!0)},a.saveToDb=function(){if(a.validateForm()){var e="".concat(a.state.data.name," ble lagret i databasen");a.props.saveToDb(a.state.data,function(t){t&&(e="Det var et problem ved lagring til databasen"),a.setState({data:{name:"",category:"",price:"",service:"",score:3,comment:"",homepage:"",lastVisited:""},errors:[],status:e})})}},a.empty=function(e){return""===e||void 0===e||null===e},a.state={data:{name:"",category:"",price:"",service:"",score:3,comment:"",homepage:"",lastVisited:""},errors:[],status:""},a.handleChange=a.handleChange.bind(Object(V.a)(Object(V.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.status,n=e.data,l=n.name,s=n.price,c=n.service,i=n.comment,o=n.category,u=n.score,m=n.homepage;return r.a.createElement("div",null,a?r.a.createElement(G,{title:"Informasjon",status:a,name:l}):"",t.length>0?r.a.createElement(U,{errors:t}):"",r.a.createElement(F.a,{name:"restaurantform",onSubmit:this.saveToDb},r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Navn p\xe5 restaurant"),r.a.createElement(M.a,{onChange:this.handleChange,placeholder:"Navn p\xe5 restaurant",name:"name",value:l})),r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Type restaurant"),r.a.createElement(P.a,{onChange:this.handleChange,placeholder:"Hvilken type restaurant er dette?",name:"category",options:z,required:!0,value:o})),r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Pris"),r.a.createElement(P.a,{onChange:this.handleChange,placeholder:"Prismessig",name:"price",options:K,required:!0,value:s})),r.a.createElement(F.a.Field,null,r.a.createElement("label",null,"Service"),r.a.createElement(P.a,{onChange:this.handleChange,placeholder:"Hvordan var servicen?",name:"service",options:J,required:!0,value:c})),r.a.createElement(F.a.Field,{name:"score"},r.a.createElement("label",null,"Totalscore"),r.a.createElement(M.a,{onChange:this.handleChange,type:"number",step:"1",name:"score",value:u,min:"1",max:"6",required:!0})),r.a.createElement(F.a.Field,{name:"homepage"},r.a.createElement("label",null,"Hjemmeside"),r.a.createElement(M.a,{type:"text",value:m,name:"homepage",onChange:this.handleChange})),r.a.createElement(F.a.Field,{name:"comment"},r.a.createElement("label",null,"Kommentar"),r.a.createElement(q.a,{name:"comment",cols:"30",rows:"10",onChange:this.handleChange,value:i})),r.a.createElement(k.a,{type:"submit"},"Lagre")))}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).saveRestaurantToDb=function(e,t){e.lastVisited=(new Date).getTime(),a.ref.child(e.name).set(e,function(e){t(e||null)})},a.ref=g.database().ref("restaurants"),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(v,{user:this.props.user,history:this.props.history}),r.a.createElement(E.a,null,r.a.createElement("h1",null,"Legg til en restaurant"),r.a.createElement(Q,{saveToDb:this.saveRestaurantToDb})))}}]),t}(r.a.Component),Y=a(344),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getAllRestaurants=function(){j.getAllRestaurants(function(e){a.setState({restaurants:R(e),loading:!1})})},a.state={restaurants:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllRestaurants()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(v,{user:this.props.user,history:this.props.history}),r.a.createElement(E.a,null,r.a.createElement(Y.a,{active:this.state.loading}),r.a.createElement(C,{restaurants:this.state.restaurants,title:"Alle restaurantene"})))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).authListener=function(){a.firebase.auth().onAuthStateChanged(function(e){e?a.setState({user:e}):a.setState({user:null})})},a.state={user:{}},a.firebase=g,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(d.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(T,Object.assign({},t,{user:e}))}}),r.a.createElement(d.a,{path:"/opprett",exact:!0,render:function(t){return r.a.createElement(X,Object.assign({},t,{user:e}))}}),r.a.createElement(d.a,{path:"/logginn",exact:!0,render:function(t){return r.a.createElement(B,Object.assign({},t,{user:e}))}}),r.a.createElement(d.a,{path:"/restauranter",exact:!0,render:function(t){return r.a.createElement(Z,Object.assign({},t,{user:e}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[181,2,1]]]);
//# sourceMappingURL=main.29675a0a.chunk.js.map