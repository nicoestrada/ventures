(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{314:function(t,e,n){},317:function(t,e,n){var a=n(19),i=Date.prototype,r=i.toString,s=i.getTime;"Invalid Date"!=String(new Date(NaN))&&a(i,"toString",(function(){var t=s.call(this);return t==t?r.call(this):"Invalid Date"}))},318:function(t,e,n){"use strict";n(314)},342:function(t,e,n){"use strict";n.r(e);n(31),n(32),n(317),n(166),n(69),n(30);var a={props:{page:Object},computed:{description:function(){return this.page.frontmatter.description},updatedAt:function(){return console.log("this.page",this.page),this.page.frontmatter&&this.page.frontmatter.date?new Date(this.page.frontmatter.date).toDateString():this.page.lastUpdated},headers:function(){return this.page.headers?this.page.headers.filter((function(t){return 2===t.level})).map((function(t){return t.title})).join(", "):""}}},i=(n(318),n(45)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"last-updated"},[t._v(t._s(t.updatedAt))]),t._v(" "),n("h3",[n("a",{attrs:{href:t.page.path}},[t._v(t._s(t.page.title))])]),t._v(" "),n("p",[t.description?[t._v("\n      "+t._s(t.description)+"\n      "),n("br")]:t._e()],2),t._v(" "),n("hr")])}),[],!1,null,"2492500e",null);e.default=r.exports}}]);