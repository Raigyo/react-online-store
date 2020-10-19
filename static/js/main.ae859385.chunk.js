(this["webpackJsonpecommerce-react-graphql-stripe"]=this["webpackJsonpecommerce-react-graphql-stripe"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(1),o=a.n(r),i=a(19),c=a.n(i),s=a(45),l=a(122),d=a(123),m=a(125),u=function(e){return"$".concat(e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2))},p=function(e){return Number(e.reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cart";localStorage&&localStorage.setItem(t,JSON.stringify(e))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";localStorage&&localStorage.removeItem(e)},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jwt";localStorage&&localStorage.setItem(t,JSON.stringify(e))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";localStorage&&localStorage.removeItem(e)},v=(a(54),a(4)),S=a.n(v),w=a(13),C=a(9),O=a(10),x=a(12),_=a(11),k=a(2),j=a(28),I=a(42),T=function(e){return e.show&&o.a.createElement(k.a,{position:"fixed",dangerouslySetInlineStyle:{__style:{bottom:300,left:"50%",transform:"translateX(-50%)"}}},o.a.createElement(I.GridLoader,{color:"darkorange",size:25,margin:"3px"}))},P=(a(85),a(15)),A=a.n(P),B=Object({NODE_ENV:"production",PUBLIC_URL:"/react-online-store",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://strapi-server-raigyobeer.herokuapp.com",W=new A.a(B),D=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={brands:[],searchTerm:"",loadingBrands:!0},e.handleChange=function(t){var a=t.value;e.setState({searchTerm:a},(function(){return e.searchBrands()}))},e.searchBrands=Object(w.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.request("POST","/graphql",{data:{query:'query {\n          brands(where: {\n            name_contains: "'.concat(e.state.searchTerm,'"\n          }) {\n            _id\n              name\n              description\n              image {\n                url\n              }\n          }\n        }')}});case 2:a=t.sent,e.setState({brands:a.data.brands,loadingBrands:!1});case 4:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.request("POST","/graphql",{data:{query:"query {\n            brands {\n              _id\n              name\n              description\n              image {\n                url\n              }\n            }\n          }"}});case 3:t=e.sent,this.setState({brands:t.data.brands,loadingBrands:!1}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),this.setState({loadingBrands:!1});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.loadingBrands,n=e.brands;return o.a.createElement(k.d,null,o.a.createElement(k.a,{display:"flex",justifyContent:"center",marginTop:4},o.a.createElement(k.k,{id:"searchfield",accessibilityLabel:"Brand Search Field",onChange:this.handleChange,value:t,placeholder:"Search Brands"}),o.a.createElement(k.a,{margin:3},o.a.createElement(k.f,{icon:"filter",color:t?"orange":"gray",size:20,accessibilityLabel:"Filter"}))),o.a.createElement(k.a,{display:"flex",justifyContent:"center",marginBottom:2},o.a.createElement(k.e,{color:"midnight",size:"md"},"Brew Brands")),o.a.createElement(k.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#d6c8ec"}},shape:"rounded",wrap:!0,display:"flex",justifyContent:"around"},n.map((function(e){return o.a.createElement(k.a,{paddingY:4,margin:2,width:200,key:e._id},o.a.createElement(k.c,{image:o.a.createElement(k.a,{height:200,width:200},o.a.createElement(k.h,{fit:"cover",alt:"Logo brand: ".concat(e.name),naturalHeight:1,naturalWidth:1,src:"".concat(B).concat(e.image[0].url)}))},o.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column"},o.a.createElement(k.m,{bold:!0,size:"xl"},e.name),o.a.createElement(k.m,null,e.description),o.a.createElement(k.m,{bold:!0,size:"xl"},o.a.createElement(j.a,{to:"/".concat(e._id)},"See Brews")))))}))),o.a.createElement(T,{show:a}))}}]),a}(r.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=a(16),U=function(e){var t=e.show,a=e.message;return t&&o.a.createElement(k.a,{dangerouslySetInlineStyle:{__style:{bottom:250,left:"50%",transform:"translateX(-50%)"}},position:"fixed"},o.a.createElement(k.o,{color:"orange",text:a}))},q=Object({NODE_ENV:"production",PUBLIC_URL:"/react-online-store",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://strapi-server-raigyobeer.herokuapp.com/",M=new A.a(q),R=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",toast:!1,toastMessage:""},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(z.a)({},a.target.name,n))},e.handleSubmit=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.username,o=n.password,!e.isFormEmpty(e.state)){t.next=5;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 5:return t.prev=5,e.setState({loading:!0}),t.next=9,M.login(r,o);case 9:i=t.sent,e.setState({loading:!1}),E(i.jwt),e.redirectUser("/"),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(5),e.setState({loading:!1}),console.log(t.t0.message),e.showToast("New user, please sign up first!");case 20:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.redirectUser=function(t){return e.props.history.push(t)},e.isFormEmpty=function(e){var t=e.username,a=e.password;return!t||!a},e.showToast=function(t){e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""})}),5e3)},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.loading;return o.a.createElement(k.d,null,o.a.createElement(k.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#d6a3b1"}},margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center"},o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleSubmit},o.a.createElement(k.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},o.a.createElement(k.e,{color:"midnight"},"Welcome back!")),o.a.createElement(k.n,{id:"username",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange}),o.a.createElement(k.n,{id:"password",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),o.a.createElement(k.b,{inline:!0,color:"blue",text:"Submit",type:"submit",disabled:n}))),o.a.createElement(U,{show:a,message:t}))}}]),a}(o.a.Component),F=Object({NODE_ENV:"production",PUBLIC_URL:"/react-online-store",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://strapi-server-raigyobeer.herokuapp.com/",K=new A.a(F),H=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",toast:!1,toastMessage:""},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(z.a)({},a.target.name,n))},e.handleSubmit=function(){var t=Object(w.a)(S.a.mark((function t(a){var n,r,o,i,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.username,o=n.email,i=n.password,!e.isFormEmpty(e.state)){t.next=5;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 5:return t.prev=5,e.setState({loading:!0}),t.next=9,K.register(r,o,i);case 9:c=t.sent,e.setState({loading:!1}),E(c.jwt),e.redirectUser("/"),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(5),e.setState({loading:!1}),console.log(t.t0.message),e.showToast("User already registered!");case 20:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.redirectUser=function(t){return e.props.history.push(t)},e.isFormEmpty=function(e){var t=e.username,a=e.email,n=e.password;return!t||!a||!n},e.showToast=function(t){e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""})}),5e3)},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toastMessage,a=e.toast,n=e.loading;return o.a.createElement(k.d,null,o.a.createElement(k.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#ebe2da"}},margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center"},o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleSubmit},o.a.createElement(k.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},o.a.createElement(k.e,{color:"midnight"},"Let's Get Started"),o.a.createElement(k.m,{italic:!0,color:"orchid"},"Sign up to order some brews!")),o.a.createElement(k.n,{id:"username",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange}),o.a.createElement(k.n,{id:"email",type:"email",name:"email",placeholder:"Email Adress",onChange:this.handleChange}),o.a.createElement(k.n,{id:"password",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),o.a.createElement(k.b,{inline:!0,color:"blue",text:"Submit",type:"submit",disabled:n}))),o.a.createElement(U,{show:a,message:t}))}}]),a}(o.a.Component),J=a(20),Y=a(124),V=Object({NODE_ENV:"production",PUBLIC_URL:"/react-online-store",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://strapi-server-raigyobeer.herokuapp.com",$=new A.a(V),X=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cartItems:[],address:"",postalcode:"",city:"",confirmationEmailAddress:"",toast:!1,toastMessage:"",orderProcessing:!1,modal:!1},e.handleChange=function(t){var a=t.event,n=t.value;a.persist(),e.setState(Object(z.a)({},a.target.name,n))},e.handleConfirmOrder=function(){var t=Object(w.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!e.isFormEmpty(e.state)){t.next=4;break}return e.showToast("Fill in all fields"),t.abrupt("return");case 4:e.setState({modal:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmitOrder=Object(w.a)(S.a.mark((function t(){var a,n,r,o,i,c,s,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.cartItems,r=a.city,o=a.address,i=a.postalcode,a.confirmationEmailAddress,c=p(n),e.setState({orderProcessing:!0}),t.prev=3,t.next=6,e.props.stripe.createToken();case 6:return l=t.sent,s=l.token.id,t.next=10,$.createEntry("orders",{amount:c,brews:n,city:r,postalcode:i,address:o,token:s});case 10:e.setState({orderProcessing:!1,modal:!1}),f(),e.showToast("Your order has been successfully submitted!",!0),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),e.setState({orderProcessing:!1,modal:!1}),e.showToast(t.t0.message),console.log(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[3,15]])}))),e.isFormEmpty=function(e){var t=e.address,a=e.postalcode,n=e.city,r=e.confirmationEmailAddress;return!t||!a||!n||!r},e.showToast=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({toast:!0,toastMessage:t}),setTimeout((function(){return e.setState({toast:!1,toastMessage:""},(function(){return a&&e.props.history.push("/")}))}),5e3)},e.closeModal=function(){return e.setState({modal:!1})},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.setState({cartItems:h()})}},{key:"render",value:function(){var e=this.state,t=e.toast,a=e.toastMessage,n=e.cartItems,r=e.modal,i=e.orderProcessing;return o.a.createElement(k.d,null,o.a.createElement(k.a,{color:"darkWash",margin:4,padding:4,shape:"rounded",display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},o.a.createElement(k.e,{color:"midnight"},"Checkout"),n.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column",marginTop:2,marginBottom:6},o.a.createElement(k.m,{color:"darkGray",italic:!0},n.length," Items for Checkout"),o.a.createElement(k.a,{padding:2},n.map((function(e){return o.a.createElement(k.a,{key:e._id,padding:1},o.a.createElement(k.m,{color:"midnight"},e.name," x ",e.quantity," - $",e.quantity*e.price))}))),o.a.createElement(k.m,{bold:!0},"Total Amount: ",u(n))),o.a.createElement("form",{style:{display:"inlineBlock",textAlign:"center",maxWidth:450},onSubmit:this.handleConfirmOrder},o.a.createElement(k.n,{id:"address",type:"text",name:"address",placeholder:"Shipping Address",onChange:this.handleChange}),o.a.createElement(k.n,{id:"postalcode",type:"text",name:"postalcode",placeholder:"Postal Code",onChange:this.handleChange}),o.a.createElement(k.n,{id:"city",type:"text",name:"city",placeholder:"City of Residence",onChange:this.handleChange}),o.a.createElement(k.n,{id:"confirmationEmailAddress",type:"email",name:"confirmationEmailAddress",placeholder:"Confirmation Email Address",onChange:this.handleChange}),o.a.createElement(J.CardElement,{id:"stripe__input",onReady:function(e){return e.focus()}}),o.a.createElement(k.b,{inline:!0,id:"stripe__button",color:"blue",text:"Submit",type:"submit"}))):o.a.createElement(k.a,{color:"darkWash",shape:"rounded",padding:4},o.a.createElement(k.e,{align:"center",color:"watermelon",size:"xs"},"Your Cart is Empty"),o.a.createElement(k.m,{align:"center",italic:!0,color:"green"},"Add some brews!"))),r&&o.a.createElement(G,{orderProcessing:i,cartItems:n,closeModal:this.closeModal,handleSubmitOrder:this.handleSubmitOrder}),o.a.createElement(U,{show:t,message:a}))}}]),a}(o.a.Component),G=function(e){var t=e.orderProcessing,a=e.cartItems,n=e.closeModal,r=e.handleSubmitOrder;return o.a.createElement(k.j,{accessibilityCloseLabel:"close",accessibilityModalLabel:"Confirm your order",heading:"Confirm your order",onDismiss:n,footer:o.a.createElement(k.a,{display:"flex",marginRight:-1,marginLeft:-1,justifyContent:"center"},o.a.createElement(k.a,{padding:1},o.a.createElement(k.b,{size:"lg",color:"red",text:"Submit",disabled:t,onClick:r})),o.a.createElement(k.a,{padding:1},o.a.createElement(k.b,{size:"lg",text:"Cancel",disabled:t,onClick:n}))),role:"alertdialog",size:"sm"},!t&&o.a.createElement(k.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column",padding:2,color:"lightWash"},a.map((function(e){return o.a.createElement(k.a,{key:e._id,padding:1},o.a.createElement(k.m,{size:"lg",color:"red"},e.name," x ",e.quantity," - $",e.quantity*e.price))})),o.a.createElement(k.a,{paddingY:2},o.a.createElement(k.m,{size:"lg",bold:!0},"Total: ",u(a)))),o.a.createElement(k.l,{show:t,accessibilityLabel:"Order Processing Spinner"}),t&&o.a.createElement(k.m,{align:"center",italic:!0},"Submitting Order..."))},Q=Object(Y.a)(Object(J.injectStripe)(X)),Z=function(){return o.a.createElement(J.StripeProvider,{apiKey:"pk_test_51HD8PbKXuUXB2CzNtyeX3uWQ4bDgDHoMweFwT7vnY705d56aHB5z4edoc5amUu4NJB9zYsV78tIyJDgghBCt5K5A00WAF8rACN"},o.a.createElement(J.Elements,null,o.a.createElement(Q,null)))},ee=a(121),te=a(29),ae=a.n(te),ne=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSignout=function(){b(),f(),e.props.history.push("/")},e}return Object(O.a)(a,[{key:"render",value:function(){return null!==y()?o.a.createElement(re,{handleSignout:this.handleSignout}):o.a.createElement(oe,null)}}]),a}(o.a.Component),re=function(e){var t=e.handleSignout;return o.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"around",height:70,color:"midnight",padding:1,shape:"roundedBottom"},o.a.createElement(ee.a,{activeClassName:"active",to:"/checkout"},o.a.createElement(k.m,{size:"xl",color:"white"},"Checkout")),o.a.createElement(ee.a,{activeClassName:"active",exact:!0,to:"/"},o.a.createElement(k.a,{display:"flex",alignItems:"center"},o.a.createElement(k.a,{height:50,width:50,margin:2},o.a.createElement(k.h,{alt:"Sop logo",naturalHeight:1,naturalWidth:1,src:ae.a})),o.a.createElement("div",{className:"main-title"},o.a.createElement(k.e,{size:"xs",color:"orange"},"Raigyo shop")))),o.a.createElement(k.b,{onClick:t,color:"transparent",text:"Sign Out",inline:!0,size:"md"}))},oe=function(){return o.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"around",height:70,color:"midnight",padding:1,shape:"roundedBottom"},o.a.createElement(ee.a,{activeClassName:"active",to:"/signin"},o.a.createElement(k.m,{size:"xl",color:"white"},"Signin")),o.a.createElement(ee.a,{activeClassName:"active",exact:!0,to:"/"},o.a.createElement(k.a,{display:"flex",alignItems:"center"},o.a.createElement(k.a,{height:50,width:50,margin:2},o.a.createElement(k.h,{alt:"Sop logo",naturalHeight:1,naturalWidth:1,src:ae.a})),o.a.createElement(k.e,{size:"xs",color:"orange"},"Raigyo shop"))),o.a.createElement(ee.a,{activeClassName:"active",to:"/signup"},o.a.createElement(k.m,{size:"xl",color:"white"},"Signup")))},ie=Object(Y.a)(ne),ce=a(46),se=a(30),le=Object({NODE_ENV:"production",PUBLIC_URL:"/react-online-store",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://strapi-server-raigyobeer.herokuapp.com",de=new A.a(le),me=function(e){Object(x.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={brews:[],brand:"",cartItems:[]},e.addToCart=function(t){var a=e.state.cartItems.findIndex((function(e){return e._id===t._id}));if(-1===a){var n=e.state.cartItems.concat(Object(se.a)(Object(se.a)({},t),{},{quantity:1}));e.setState({cartItems:n},(function(){return g(n)}))}else{var r=Object(ce.a)(e.state.cartItems);r[a].quantity+=1,e.setState({cartItems:r},(function(){return g(r)}))}},e.deleteItemFromCart=function(t){var a=e.state.cartItems.filter((function(e){return e._id!==t}));e.setState({cartItems:a},(function(){return g(a)}))},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.request("POST","/graphql",{data:{query:'query {\n            brand(id: "'.concat(this.props.match.params.brandId,'") {\n              _id\n              name\n              brews {\n                _id\n                name\n                description\n                image {\n                  url\n                }\n                price\n              }\n            }\n          }')}});case 3:t=e.sent,this.setState({brews:t.data.brand.brews,brand:t.data.brand.name,cartItems:h()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.brand,n=t.brews,r=t.cartItems;return o.a.createElement(k.a,{marginTop:4,display:"flex",justifyContent:"center",alignItems:"start",dangerouslySetInlineStyle:{__style:{flexWrap:"wrap-reverse"}}},o.a.createElement(k.a,{display:"flex",direction:"column",alignItems:"center"},o.a.createElement(k.a,{margin:2},o.a.createElement(k.e,{color:"orchid"},a)),o.a.createElement(k.a,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#bdcdd9"}},wrap:!0,shape:"rounded",display:"flex",justifyContent:"center",padding:4},n.map((function(t){return o.a.createElement(k.a,{paddingY:4,margin:2,width:210,key:t._id},o.a.createElement(k.c,{image:o.a.createElement(k.a,{height:250,width:200},o.a.createElement(k.h,{fit:"cover",alt:"Brand",naturalHeight:1,naturalWidth:1,src:"".concat(le).concat(t.image.url)}))},o.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column"},o.a.createElement(k.a,{marginBottom:2},o.a.createElement(k.m,{bold:!0,size:"xl"},t.name)),o.a.createElement(k.m,null,t.description),o.a.createElement(k.m,{color:"orchid"},"$",t.price),o.a.createElement(k.a,{marginTop:2},o.a.createElement(k.m,{bold:!0,size:"xl"},o.a.createElement(k.b,{onClick:function(){return e.addToCart(t)},color:"blue",text:"Add to Cart"}))))))})))),o.a.createElement(k.a,{alignSelf:"end",marginTop:2,marginLeft:8},o.a.createElement(k.i,{shape:"rounded",wash:!0},o.a.createElement(k.a,{display:"flex",direction:"column",alignItems:"center",padding:2},o.a.createElement(k.e,{align:"center",size:"sm"},"Your cart"),o.a.createElement(k.m,{color:"gray",italic:!0},r.length," items selected"),r.map((function(t){return o.a.createElement(k.a,{key:t._id,display:"flex",alignItems:"center"},o.a.createElement(k.m,null,t.name," x ",t.quantity," - $",(t.quantity*t.price).toFixed(2)),o.a.createElement(k.g,{accessibilityLabel:"Delete Item",icon:"cancel",size:"sm",iconColor:"red",onClick:function(){return e.deleteItemFromCart(t._id)}}))})),o.a.createElement(k.a,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column"},o.a.createElement(k.a,{margin:2},0===r.length&&o.a.createElement(k.m,null,"Please select some items")),o.a.createElement(k.m,{size:"lg"},"Total: ",u(r)),o.a.createElement(k.m,null,o.a.createElement(j.a,{to:"/checkout"},"Checkout")))))))}}]),a}(o.a.Component),ue=function(e){var t=e.component,a=Object(n.a)(e,["component"]);return o.a.createElement(s.a,Object.assign({},a,{render:function(e){return null!==y()?o.a.createElement(t,e):o.a.createElement(l.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},pe=function(){return o.a.createElement(d.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,null),o.a.createElement(m.a,null,o.a.createElement(s.a,{component:D,exact:!0,path:"/"}),o.a.createElement(s.a,{component:R,path:"/signin"}),o.a.createElement(s.a,{component:H,path:"/signup"}),o.a.createElement(ue,{component:Z,path:"/checkout"}),o.a.createElement(s.a,{component:me,path:"/:brandId"}))))};c.a.render(o.a.createElement(pe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-online-store",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-online-store","/service-worker.js");L?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()},29:function(e,t,a){e.exports=a.p+"static/media/logo.c0039328.svg"},49:function(e,t,a){e.exports=a(119)},85:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.ae859385.chunk.js.map