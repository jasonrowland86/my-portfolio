(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(71)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(31),o=a.n(i),l=(a(41),a(1)),c=a(2),r=a(4),m=a(3),p=a(13),d=a(5),h=(a(42),a(43),a(32)),u=Object(n.createContext)(),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={landing:!1,content:{backgroundColor:"#EDFD5D"},label:"web developer"},a.toggleLanding=function(){a.setState({landing:!a.state.landing})},a.toggleLandingH3=function(){"web developer"===a.state.label?a.setState({label:"work",landingH3:{color:"#EDFD5D"}}):a.setState({label:"web developer",landingH3:{color:"white"}})},a.handleLandingTitle=function(e,t){console.log("handle from context"),a.setState({label:e,landingH3:{color:t}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(u.Provider,{value:Object(h.a)({},this.state,{toggleLanding:this.toggleLanding,handleLabel:this.handleLabel,toggleLandingH3:this.toggleLandingH3,handleLandingTitle:this.handleLandingTitle})},this.props.children)}}]),t}(s.a.Component),v=a(10);a(44);var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"nav",style:this.props.nav},s.a.createElement("div",{className:"work-tab",id:"#EDFD5D",label:"work"},s.a.createElement(v.b,{to:"/work"},s.a.createElement("div",{className:"nav-link"}))),s.a.createElement("div",{className:"about-tab",id:"#70DBFB",label:"about"},s.a.createElement(v.b,{to:"/about"},s.a.createElement("div",{className:"nav-link"}))),s.a.createElement("div",{className:"contact-tab",id:"#FF7DEE",label:"contact"},s.a.createElement(v.b,{to:"/contact"},s.a.createElement("div",{className:"nav-link"}))))}}]),t}(s.a.Component);b.contextType=u;var f=b,w=[{id:"1",data:{name:"E and E Automotive Services",isClient:!0,description:"An information website for a local business that needed a web presence. I incorporated the Google Maps Embeded API and the Yelp Reviews API to dynamically display the most current Yelp user reviews.",technologies:"HTML, CSS, Javascript, Node.js, Express",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/eande-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-4.png"],appLink:"https://eandeautomotiveservices.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/eandeautomotiveservices"}},{id:"2",data:{name:"Whole Sky Healing Arts",isClient:!1,description:"A personal business site.",technologies:"HTML, CSS, Javascript, React, Node.js, Express",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-4.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-5.png"],appLink:"http://wholeskyhealingarts.com/",githubLink:"https://github.com/jasonrowland86/WholeSky-React-Express"}},{id:"3",data:{name:"UFC Fight Pick App",isClient:!1,description:"A web app that uses the Express MVC and the isomorphic-fetch API to let users search for and compare two fighters. A user can make and save their fight picks for an up coming event.",technologies:"HTML, CSS, Javascript, Node.js, Express, PostgreSQL",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-2.png"],appLink:"https://fightpickapp.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/Project-2-App"}},{id:"4",data:{name:"Aquarium App",isClient:!1,description:"A Ruby on Rails CRUD web app that uses CSS animations to make an aquarium of fish swim around.",technologies:"HTML, CSS, Javascript, Ruby",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-4.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-5.png"],appLink:"https://aquarium-app.herokuapp.com/",githubLink:"https://github.com/jasonrowland86/Aquarium"}},{id:"5",data:{name:"Okurio Project Managment",isClient:!1,description:"A collaborative project I worked on to build a project management web app. Built with React and Express, an admin can create and manage a project by assigning tasks to project memebers.",technologies:"HTML, CSS, Javascript, React, Node.js, Express, PostgreSQL",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/okurio-app-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/okurio-app.png"],appLink:"",githubLink:"https://github.com/RajisteB/Occurio"}},{id:"6",data:{name:"Simon",isClient:!1,description:"The classic game Simon. Made with Javascript.",technologies:"HTML, CSS, Javascript",thumbnail:"https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon-thumbnail.png",images:["https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-1.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-2.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-3.png","https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-4.png"],appLink:"https://polar-coast-40517.herokuapp.com/index.html",githubLink:"https://github.com/jasonrowland86/simon"}}];a(49);var E;E=w.map(function(e){return e.data.name});var k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={landingHeight:{height:"100vh"}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleLanding",value:function(){var e=this;this.context.landing?(this.context.toggleLanding(),this.context.toggleLandingH3(),this.setState({landingRight:{display:"none"},landingHeight:{height:"auto"},landingH1:{fontSize:"22vw"},landingH3:{fontSize:"10vw"}})):(this.context.toggleLanding(),this.setState({landingH1:{fontSize:"8vw"},landingH3:{fontSize:"5vw"}}),setTimeout(function(){e.setState({nav:{height:"1em",display:"flex",flexDirection:"row"},landingRight:{display:"block"},landingHeight:{height:"auto"}})},400))}},{key:"handleArrow",value:function(){for(var e,t=0;t<E.length;t++)this.context.label===E[t]&&(e="Simon"===E[t]?E[0]:E[t+1]);return"web developer"!==this.context.label&&"work"!==this.context.label&&"about"!==this.context.label&&"contact"!==this.context.label?s.a.createElement("div",{className:"landing-bottom-right",style:this.state.arrow},s.a.createElement("h2",{id:"#EDFD5D",label:e},s.a.createElement(v.b,{to:"/work/"+e.replace(/\s/g,"").toLowerCase()},">"))):s.a.createElement("div",{className:"landing-bottom-right"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"landing",style:this.state.landingHeight},s.a.createElement("div",{className:"landing-top"},s.a.createElement("div",{className:"landing-left",label:"web developer",onClick:function(){e.handleLanding(),e.props.toggleLanding()}},s.a.createElement("h1",{style:this.state.landingH1},"jason"),s.a.createElement("h1",{style:this.state.landingH1},"rowland/")),s.a.createElement("div",{className:"landing-right",style:this.state.landingRight},s.a.createElement("div",null,s.a.createElement(f,{nav:this.state.nav})))),s.a.createElement("div",{className:"landing-bottom"},s.a.createElement("div",{className:"landing-bottom-left"},s.a.createElement("div",{style:this.context.landingH3},s.a.createElement("h3",{style:this.state.landingH3},this.context.label))),this.handleArrow()))}}]),t}(s.a.Component);k.contextType=u;var j=k;a(50);var y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={workSection:{opacity:0,transition:"all .3s ease-in",flex:1},label:"work",color:"#EDFD5D",prvwImg:{opacity:0}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({workSection:{opacity:1,transition:"all .3s ease-in",display:"flex",flexWrap:"wrap",flex:1}})},150)}},{key:"handleImageLoaded",value:function(){this.setState({prvwImg:{opacity:1}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"work-section"},s.a.createElement("div",{style:this.state.workSection},w.map(function(t){return s.a.createElement("div",{key:t.data.name,className:"project-preview",id:"#EDFD5D",label:t.data.name},s.a.createElement(v.b,{to:"/work/"+t.data.name.replace(/\s/g,"").toLowerCase()},s.a.createElement("div",{className:"overlay",id:"#EDFD5D",label:t.data.name},s.a.createElement("div",{className:"project-preview-title",id:"#EDFD5D",label:t.data.name},s.a.createElement("h1",{id:"#EDFD5D",label:t.data.name},t.data.name),s.a.createElement("h2",{id:"#EDFD5D",label:t.data.name,onClick:e.context.handleLabel,className:"overlay-h2"},t.data.technologies)),s.a.createElement("div",{className:"project-preview-image",id:"#EDFD5D",label:t.data.name},s.a.createElement("img",{id:"#EDFD5D",label:t.data.name,className:"overlay-img",src:t.data.images[0],alt:""}))),s.a.createElement("div",{className:"under"},s.a.createElement("div",{className:"project-preview-title"},s.a.createElement("h1",null,t.data.name),s.a.createElement("h2",{className:"project-technologies"},t.data.technologies)),s.a.createElement("div",{style:e.state.prvwImg,className:"project-preview-image"},s.a.createElement("img",{src:t.data.images[0],alt:"",onLoad:e.handleImageLoaded.bind(e)})))))})))}}]),t}(s.a.Component);y.contextType=u;var N=y;a(51);var S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={aboutSection:{opacity:0,transition:"all .3s ease-in",flex:1},label:"about",color:"#70DBFB",prvwImg:{opacity:0}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({aboutSection:{opacity:1,paddingBottom:"3em",transition:"all .3s ease-in",flex:1}})},150)}},{key:"handleImageLoaded",value:function(){this.setState({prvwImg:{opacity:1}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"about-section"},s.a.createElement("div",{className:"about-section-div",style:this.state.aboutSection},s.a.createElement("div",{className:"about-text"},s.a.createElement("p",null,"Born and raised in Houston Texas. I moved to New York City in 2009 where I was a bike messenger and kettlebell trainer before I found web development. I have a proclivity for efficiency and a love for design that create a natural passion for front-end development and user experience."),s.a.createElement("div",{className:"project-skills"},s.a.createElement("h2",null,"skill, skill, skill, skill, skill,")),s.a.createElement("div",{className:"project-links"},s.a.createElement("a",{href:"https://www.linkedin.com/in/jason-rowland86/",target:"blank"},s.a.createElement("div",null,"LinkedIn")),s.a.createElement("a",{href:"https://github.com/jasonrowland86",target:"blank"},s.a.createElement("div",null,"GitHub")))),s.a.createElement("div",{style:this.state.prvwImg,className:"about-image"},s.a.createElement("img",{onLoad:this.handleImageLoaded.bind(this),className:"profile-img",src:"profile-pic.jpg",alt:"Profile"}))))}}]),t}(s.a.Component);S.contextType=u;var L=S,x=a(16),O=a(35),D=a.n(O);a(69);var C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={contactSection:{opacity:0,transition:"all .3s ease-in"},label:"contact",color:"#FF7DEE",response:".",showResponse:{opacity:0},submitButton:!0},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.state.label,this.state.color),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({contactSection:{opacity:1,transition:"all .3s ease-in",display:"flex",flexDirection:"column"},firstName:"",lastName:"",email:"",message:""})},150)}},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"emailIsValid",value:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},{key:"handleSubmit",value:function(e){var t=this;if(console.log("handle submit"),console.log(this.state),e.preventDefault(),""!==this.state.firstName&&""!==this.state.email&&""!==this.state.message)if(this.emailIsValid(this.state.email))this.setState({submitButton:!1}),D()({method:"POST",url:"/",data:{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,messsage:this.state.message}}).then(function(e){console.log(e),200===e.status?(t.clearForm(),t.showResponse(e)):(t.setState({submit:!0}),t.showResponse(e))}).catch(function(e){t.clearForm(),t.showResponse(e)});else{this.showResponse({data:{message:"Email format invalid"}})}else{this.showResponse({data:{message:"Missing field"}})}}},{key:"showResponse",value:function(e){var t=this;this.setState({response:e.data.message,showResponse:{opacity:1}}),setTimeout(function(){t.removeResponse()},3e3)}},{key:"removeResponse",value:function(){this.setState({showResponse:{opacity:0}})}},{key:"clearForm",value:function(){this.setState({firstName:"",lastName:"",email:"",message:"",submitButton:!0});var e=document.querySelectorAll(".input");console.log(e);for(var t=0;t<e.length;t++)e[t].value=""}},{key:"handleSubmitButton",value:function(){return this.state.submitButton?s.a.createElement("div",{className:"submit",onClick:this.handleSubmit},"send"):s.a.createElement("div",{className:"submit sub"},s.a.createElement("div",{className:"submit-loading"},s.a.createElement("div",null,"."),s.a.createElement("div",null,"."),s.a.createElement("div",null,".")))}},{key:"render",value:function(){return s.a.createElement("div",{className:"contact-section"},s.a.createElement("div",{style:this.state.contactSection},s.a.createElement("form",null,s.a.createElement("div",{className:"form-section"},s.a.createElement("div",{className:"form-section-inputs"},s.a.createElement("div",{className:"response",style:this.state.showResponse},this.state.response),s.a.createElement("label",null,"first name*"),s.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"firstName"}),s.a.createElement("label",null,"last name"),s.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"lastName"}),s.a.createElement("label",null,"email*"),s.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,name:"email"}),s.a.createElement("label",null,"message*"),s.a.createElement("textarea",{className:"input",onChange:this.handleChange,name:"message",ows:"8",cols:"80"})),s.a.createElement("div",{className:"form-section-submit"},this.handleSubmitButton())))))}}]),t}(s.a.Component);C.contextType=u;var I=C;a(70);var z=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={projectSection:{opacity:0,transition:"all .3s ease-in",flex:1},label:"work",color:"#EDFD5D",prvwImg:{opacity:0}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.context.handleLandingTitle(this.props.project.data.name,this.state.color),window.scrollTo({top:0,left:0,behavior:"smooth"}),this.fadeIn()}},{key:"fadeIn",value:function(){var e=this;setTimeout(function(){e.setState({projectSection:{opacity:1,transition:"all .3s ease-in",flex:1}})},250)}},{key:"handleImageLoaded",value:function(){this.setState({prvwImg:{opacity:1}})}},{key:"handleProjectLink",value:function(e){return""===e.data.appLink?s.a.createElement("div",{style:{display:"none"}}):e.data.isClient?s.a.createElement("a",{href:e.data.appLink,target:"blank"},s.a.createElement("div",null,"View Site")):s.a.createElement("a",{href:e.data.appLink,target:"blank"},s.a.createElement("div",null,"View App"))}},{key:"render",value:function(){var e=this,t=w.filter(function(t){return t.data.name===e.props.project.data.name});console.log(t[0]);var a=0,n=t[0].data.images.map(function(t){return s.a.createElement("img",{style:e.state.prvwImg,key:a++,className:"project-img",src:t,alt:"",onLoad:e.handleImageLoaded.bind(e)})});return s.a.createElement("div",{className:"project-section"},s.a.createElement("div",{style:this.state.projectSection},s.a.createElement("div",{className:"project"},s.a.createElement("div",{className:"project-info"},s.a.createElement("div",{className:"project-description"},s.a.createElement("p",null,t[0].data.description)),s.a.createElement("div",{className:"project-skills"},s.a.createElement("h2",null,t[0].data.technologies)),s.a.createElement("div",{className:"project-links"},this.handleProjectLink(t[0]),s.a.createElement("a",{href:t[0].data.githubLink,target:"blank"},s.a.createElement("div",null,"View on GitHub")))),s.a.createElement("div",{className:"project-images"},n))))}}]),t}(s.a.Component);z.contextType=u;var T=z,H=a(12),R=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleContent",value:function(){return console.log(this.context),this.context.landing?s.a.createElement("div",{className:"content"},s.a.createElement(H.c,null,s.a.createElement(H.a,{path:"/",exact:!0,component:N}),s.a.createElement(H.a,{path:"/work",exact:!0,component:N}),s.a.createElement(H.a,{path:"/about",exact:!0,component:L}),s.a.createElement(H.a,{path:"/contact",exact:!0,component:I}),w.map(function(e){return s.a.createElement(H.a,{key:e.data.name,path:"/work/"+e.data.name.replace(/\s/g,"").toLowerCase(),render:function(t){return s.a.createElement(T,{project:e})}})}),s.a.createElement(H.a,{component:N}))):s.a.createElement("div",null)}},{key:"render",value:function(){return s.a.createElement("div",{className:"content"},this.handleContent())}}]),t}(s.a.Component);R.contextType=u;var F=R,A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={landing:!1,subtitle:"web developer"},e.toggleLanding=e.toggleLanding.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleLanding",value:function(){this.setState({landing:!this.state.landing})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v.a,null,s.a.createElement(g,null,s.a.createElement(j,{toggleLanding:this.toggleLanding}),s.a.createElement(F,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.03b8cd62.chunk.js.map