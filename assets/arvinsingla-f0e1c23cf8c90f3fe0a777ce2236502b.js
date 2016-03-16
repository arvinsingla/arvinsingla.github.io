"use strict";define("arvinsingla/app",["exports","ember","arvinsingla/resolver","ember-load-initializers","arvinsingla/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("arvinsingla/components/app-version",["exports","ember-cli-app-version/components/app-version","arvinsingla/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("arvinsingla/components/transition-group",["exports","ember-css-transitions/components/transition-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("arvinsingla/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("arvinsingla/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("arvinsingla/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("arvinsingla/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("arvinsingla/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","arvinsingla/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("arvinsingla/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("arvinsingla/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("arvinsingla/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("arvinsingla/initializers/export-application-global",["exports","ember","arvinsingla/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("arvinsingla/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("arvinsingla/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("arvinsingla/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("arvinsingla/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("arvinsingla/mixins/google-pageview",["exports","ember","arvinsingla/config/environment"],function(e,t,a){e["default"]=t["default"].Mixin.create({beforePageviewToGA:function(e){},pageviewToGA:t["default"].on("didTransition",function(e,n){var e=e?e:this.get("url"),n=n?n:this.get("url");if(null!=t["default"].get(a["default"],"googleAnalytics.webPropertyId")){var r=t["default"].getWithDefault(a["default"],"googleAnalytics.tracker","analytics.js");if("analytics.js"===r){var i=t["default"].getWithDefault(a["default"],"googleAnalytics.globalVariable","ga");this.beforePageviewToGA(window[i]),window[i]("send","pageview",{page:e,title:n})}else"ga.js"===r&&window._gaq.push(["_trackPageview"])}})})}),define("arvinsingla/mixins/transition-mixin",["exports","ember-css-transitions/mixins/transition-mixin"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("arvinsingla/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("arvinsingla/router",["exports","ember","arvinsingla/config/environment","arvinsingla/mixins/google-pageview"],function(e,t,a,n){var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){this.route("blog"),this.route("cv")}),e["default"]=r}),define("arvinsingla/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){var e=new Date;return{year:e.getFullYear()}}})}),define("arvinsingla/routes/blog",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("arvinsingla/routes/cv",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("arvinsingla/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("arvinsingla/services/transition-events",["exports","ember-css-transitions/services/transition-events"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("arvinsingla/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:2},end:{line:62,column:2}},moduleName:"arvinsingla/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("header");e.setAttribute(a,"class","header");var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("h1");e.setAttribute(n,"class","header__title");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("img");e.setAttribute(n,"class","header__avatar"),e.setAttribute(n,"src","images/arvin-avatar-e3cce9ae276bf09092fa176b4f0d86af.jpg"),e.setAttribute(n,"title","Arvin"),e.setAttribute(n,"alt","Arvin's Avatar"),e.appendChild(a,n);var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("nav");e.setAttribute(n,"class","header__nav");var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("ul");e.setAttribute(r,"class","header__nav__list");var i=e.createTextNode("\n\n");e.appendChild(r,i);var i=e.createTextNode("\n          ");e.appendChild(r,i);var i=e.createElement("li");e.setAttribute(i,"class","header__nav__list__item");var d=e.createTextNode("\n            ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode("\n          ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n          ");e.appendChild(r,i);var i=e.createElement("li");e.setAttribute(i,"class","header__nav__list__item");var d=e.createTextNode("\n            ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","http://www.github.com/arvinsingla"),e.setAttribute(d,"title","View my github profile"),e.setAttribute(d,"target","_BLANK");var l=e.createTextNode("github");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n          ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n          ");e.appendChild(r,i);var i=e.createElement("li");e.setAttribute(i,"class","header__nav__list__item");var d=e.createTextNode("\n            ");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"href","http://www.twitter.com/arvinsingla"),e.setAttribute(d,"title","Read my thougths on twitter"),e.setAttribute(d,"target","_BLANK");var l=e.createTextNode("twitter");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n          ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n    ");e.appendChild(t,a);var a=e.createElement("section");e.setAttribute(a,"class","intro");var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("h2");e.setAttribute(n,"class","intro__title");var r=e.createTextNode("\n        A Toronto based Software Engineer");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n        crafting things in ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","color--blue");var i=e.createTextNode("Drupal");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(" and ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","color--green");var i=e.createTextNode("Javascript");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n    ");e.appendChild(t,a);var a=e.createElement("section");e.setAttribute(a,"class","content");var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","content__wrapper");var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n    ");e.appendChild(t,a);var a=e.createElement("footer");e.setAttribute(a,"class","footer");var n=e.createTextNode("\n\n      ");e.appendChild(a,n);var n=e.createElement("span"),r=e.createTextNode("© ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" Arvin Singla");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(n,[1]),1,1),r[1]=e.createMorphAt(e.childAt(n,[5,1,2]),1,1),r[2]=e.createMorphAt(e.childAt(t,[5,1]),1,1),r[3]=e.createMorphAt(e.childAt(t,[7,1]),1,1),r},statements:[["inline","link-to",["Arvin Singla","index"],[],["loc",[null,[6,8],[6,42]]]],["inline","link-to",["CV","cv"],[],["loc",[null,[20,12],[20,33]]]],["content","outlet",["loc",[null,[50,8],[50,18]]]],["content","content.year",["loc",[null,[58,19],[58,35]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:62,column:23}},moduleName:"arvinsingla/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","transition-group",[],["transition-class","root"],0,null,["loc",[null,[1,2],[62,23]]]]],locals:[],templates:[e]}}())}),define("arvinsingla/templates/blog",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"arvinsingla/templates/blog.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("This is the blog!\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,a),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("arvinsingla/templates/components/transition-group",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"arvinsingla/templates/components/transition-group.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("arvinsingla/templates/cv",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:72,column:10}},moduleName:"arvinsingla/templates/cv.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","cv__intro");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Personal Profile");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("Hi! I am a web developer who loves the challenge of taking many different pieces and putting them together into a cohesive, functional, and robust product. I work with teams of all sizes to build software for a wide range of organizations including startups, not-for-profits, and fortune 500 companies.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","cv__resume");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Career History");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","cv__resume__item");var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Software Engineer @ ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","color--blue"),e.setAttribute(i,"href","http://www.acquia.com");var d=e.createTextNode("Acquia");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div"),i=e.createTextNode("Sept 2015 - Present");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("I joined Acquia as part of their Cloud UI Team building the next generation interface for their cloud services in AngularJS. During my time on this team I have spearheaded the initiative to implement flexible and robust charting using open source libraries integrated into our Angular pipeline and have participated in a number of sprints creating new features working towards public beta.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","cv__resume__item");var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Web Developer @ ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","color--orange"),e.setAttribute(i,"href","http://www.myplanet.com");var d=e.createTextNode("Myplanet");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div"),i=e.createTextNode("Nov 2011 - Sept 2015");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("At Myplanet I have been responsible for leading and participating in the execution of large web and application development projects as part of an agile team.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("These projects have run the gamut of large scale Drupal sites, application prototyping in IOS, Backbone, and AngularJS, server side development in PHP and Node.js, front end user experience implementation in HTML, CSS and Javascript, API design, third party service integrations, and modern production ready AngularJS applications.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("The client base I have worked with has included Wyndham Worldwide, Centurylink, SpartanNash, and a bunch of fortune 500 companies I can't talk about ;)");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","cv__resume__item");var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Web Developer @ ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","color--green"),e.setAttribute(i,"href","http://www.freeform.ca");var d=e.createTextNode("Freeform Solutions");e.appendChild(i,d),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div"),i=e.createTextNode("Nov 2009 - Sept 2011");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Working on an agile team I was responsible for leading development on a number of large Drupal and CiviCRM projects for not-for-profit organizations. Coordinating with all parties to ensure successful customer happiness on limited budgets. I championed initiatives for introducing devops principles to the development teams to improve the developer experience.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","cv__resume__item");var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("h4"),i=e.createTextNode("Freelance Drupal Developer");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("div"),i=e.createTextNode("Jun 2007 - Jun 2013");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("As a freelance Drupal developer I have taken part in a variety of solo and team development projects. My focus has been working with Not-for-profit organizations and small businesses. Planning, architecting, design, theming, development, implementation, deployment, and training represent the wide range of services I have provided.");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","cv__education");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Education");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h4"),r=e.createTextNode("University of Windsor");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    BSc, Computer Science");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n    2000 – 2005\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,6,6,a),e.insertBoundary(t,null),n},statements:[["content","outlet",["loc",[null,[72,0],[72,10]]]]],locals:[],templates:[]}}())}),define("arvinsingla/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:26,column:6}},moduleName:"arvinsingla/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","info-pane info-pane--drupal");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Drupal is my jam");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("Ten years of experience, ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://ca.linkedin.com/in/arvinsingla\n"),e.setAttribute(r,"target","_BLANK");var i=e.createTextNode("dozens of projects");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(", a handful of ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","http://www.drupal.org/u/arvinsingla"),e.setAttribute(r,"target","_BLANK");var i=e.createTextNode("open source modules");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(", and a few great presentations. I ♥ Drupal");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","info-pane info-pane--javascript");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Full time Javascript");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("I've spent the last 2 years building web applications with all the major frameworks including AngularJS, Ember.js, and Node.js");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","info-pane info-pane--medium");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Latest Medium post");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createElement("a");e.setAttribute(r,"href","https://medium.com/@arvinsingla/apple-homekit-hacking-3d2902e7a1df"),e.setAttribute(r,"target","_BLANK");var i=e.createTextNode("Apple HomeKit hacking");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode(": DIY inside the walled garden");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("I had a simple goal: turn the lights on and off in my house using my voice and finally live in the future Star Trek had promised me so many years ago.");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("arvinsingla/config/environment",["ember"],function(e){var t="arvinsingla";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("arvinsingla/app")["default"].create({name:"arvinsingla",version:"0.0.0+174d59a9"});