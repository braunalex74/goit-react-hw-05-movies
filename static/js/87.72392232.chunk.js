"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[87],{713:function(e,t,r){r.d(t,{Df:function(){return u},TP:function(){return i},tx:function(){return s},zv:function(){return o}});var n=r(861),c=r(687),a=r.n(c),u=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=104cb1f11a5d6d55ba8d6504d9bd060a");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Failed to fetch trending movies");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=104cb1f11a5d6d55ba8d6504d9bd060a"));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Failed to fetch movie details");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=104cb1f11a5d6d55ba8d6504d9bd060a"));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Failed to fetch movie credits");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=104cb1f11a5d6d55ba8d6504d9bd060a"));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Failed to fetch movie reviews");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},603:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(861),c=r(439),a=r(687),u=r.n(a),i=r(791),o=r(713),s=r(87),f=r(184),v=function(e){var t=e.movies;return(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})},p=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],s=(0,i.useState)(null),p=(0,c.Z)(s,2),d=p[0],h=p[1];(0,i.useEffect)((function(){l()}),[]);var l=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Df)();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return d?(0,f.jsxs)("div",{children:["Error: ",d]}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Movies"}),(0,f.jsx)(v,{movies:r})]})}},861:function(e,t,r){function n(e,t,r,n,c,a,u){try{var i=e[a](u),o=i.value}catch(s){return void r(s)}i.done?t(o):Promise.resolve(o).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var u=e.apply(t,r);function i(e){n(u,c,a,i,o,"next",e)}function o(e){n(u,c,a,i,o,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=87.72392232.chunk.js.map