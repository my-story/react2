(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7pwT":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("q1tI"),a=e.n(i).a.createContext(),r=a.Provider;a.Consumer;n.b=a},GS0l:function(t,n,e){"use strict";var i=e("SyM2");n.a={getKit:function(t){return i.a.get("/kit/survival/".concat(t)).then((function(t){return t.data}))},kitCreate:function(t){return i.a.post("/kit/create",t).then((function(t){return t.data}))},kitProductBacked:function(t){return i.a.get("/kit/popular",t).then((function(t){return t.data}))},getKitAdmin:function(t){return i.a.get("/kit/admin/".concat(t)).then((function(t){return t.data}))},updateKit:function(t,n){return i.a.post("/kit/update/kit/".concat(n),t).then((function(t){return t.data}))},createTechnique:function(t){return i.a.post("/kit/create/technique",t).then((function(t){return t.data}))},getListTechnique:function(){return i.a.get("/kit/list/techniques").then((function(t){return t.data}))},createSurvivalProduct:function(t){return i.a.post("/kit/create/product",t).then((function(t){return t.data}))},getListProducts:function(){return i.a.get("/kit/list/products").then((function(t){return t.data}))},createSurvivalTip:function(t){return i.a.post("/kit/create/tip",t).then((function(t){return t.data}))},getListTips:function(){return i.a.get("/kit/list/tips").then((function(t){return t.data}))},getProductSurvival:function(t){return i.a.get("/kit/product/".concat(t)).then((function(t){return t.data}))},getTipAdmin:function(t){return i.a.get("kit/admin/tip/".concat(t)).then((function(t){return t.data}))},getTechniqueAdmin:function(t){return i.a.get("kit/admin/technique/".concat(t)).then((function(t){return t.data}))},getSurvivalProductAdmin:function(t){return i.a.get("kit/admin/survival-product/".concat(t)).then((function(t){return t.data}))},getSurvivalProductEdit:function(t){return i.a.get("kit/admin/survival-product/1/".concat(t)).then((function(t){return t.data}))},editSurvivalKit:function(t,n){return i.a.post("kit/update/product/".concat(t),n).then((function(t){return t.data}))},editTipKit:function(t,n){return i.a.post("kit/update/tip/".concat(t),n).then((function(t){return t.data}))},editTechniqueKit:function(t,n){return i.a.post("kit/update/technique/".concat(t),n).then((function(t){return t.data}))},getTipEdit:function(t){return i.a.get("kit/admin/tip/1/".concat(t)).then((function(t){return t.data}))},getTechniqueEdit:function(t){return i.a.get("kit/admin/technique/1/".concat(t)).then((function(t){return t.data}))},getKitProfile:function(t){return i.a.get("/kit/profile/".concat(t)).then((function(t){return t.data}))},getAll:function(){return i.a.get("/kit/all").then((function(t){return t.data}))},searchKit:function(t){return i.a.get("/kit/filter?search=".concat(t)).then((function(t){return t.data}))},getLast:function(){return i.a.get("/kit/last").then((function(t){return t.data}))}}},TFCD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/tip-update/[id]",function(){return e("pgab")}])},pgab:function(t,n,e){"use strict";e.r(n);var i=e("1OyB"),a=e("vuIU"),r=e("JX7q"),u=e("md7G"),c=e("foSv"),o=e("Ji7U"),d=e("rePB"),f=e("q1tI"),p=e.n(f),s=e("5rEg"),h=e("nOHt"),l=e.n(h),g=e("7pwT"),v=e("GS0l"),k=p.a.createElement;function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var T=function(t){Object(o.a)(f,t);var n,e=(n=f,function(){var t,e=Object(c.a)(n);if(m()){var i=Object(c.a)(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return Object(u.a)(this,t)});function f(){var t;Object(i.a)(this,f);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a)),Object(d.a)(Object(r.a)(t),"state",{tip:"",updateTip:!1}),Object(d.a)(Object(r.a)(t),"onChange",(function(n){var e=t.state.tip;e[n.target.name]=n.target.value,t.setState({tip:e})})),Object(d.a)(Object(r.a)(t),"updateTip",(function(){var n=t.state.tip;v.a.editTipKit(n._id,n).then((function(){return t.setState({updateTip:!0})})).catch((function(t){return console.log(t)}))})),t}return Object(a.a)(f,[{key:"componentDidMount",value:function(){var t=this;v.a.getTipEdit(this.props.id).then((function(n){return t.setState({tip:n})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state,n=t.tip,e=t.updateTip;return console.log(n),""===n?k("div",null,"Loading..."):"Admin"===this.context.user.role&&!1===e?k("div",null,k(s.a,{name:"influencer",defaultValue:n.influencer,type:"text",placeholder:"Add influencer id",onChange:this.onChange}),k(s.a,{name:"header",defaultValue:n.header,type:"text",placeholder:"Add tip header",onChange:this.onChange}),k(s.a,{name:"description",defaultValue:n.description,type:"text",placeholder:"Add tip description",onChange:this.onChange}),k("button",{onClick:this.updateTip}," Add tips ")):(l.a.push("/admin/influencer-chart"),null)}}],[{key:"getInitialProps",value:function(t){return{id:t.query.id}}}]),f}(f.Component);Object(d.a)(T,"contextType",g.b),n.default=T}},[["TFCD",0,1,5,2,3,4,6]]]);