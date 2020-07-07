(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{GHge:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create/product-main",function(){return n("cf1T")}])},XJ4O:function(t,e,n){"use strict";var r=n("SyM2");e.a={getAll:function(){return r.a.get("/product/all").then((function(t){return t.data}))},productForm:function(t){return r.a.post("/product/create",t).then((function(t){return t.data}))},productImage:function(t){return r.a.create("/product/upload/picture",t).then((function(t){return t.data}))},productDetail:function(t){return r.a.get("/product/details/".concat(t)).then((function(t){return t.data}))},searchProduct:function(t){return r.a.get("/product/filter?search=".concat(t)).then((function(t){return t.data}))},deleteProduct:function(t){return r.a.post("/product/delete/".concat(t)).then((function(t){return t.data}))},updateProduct:function(t,e){return r.a.post("/product/edit/".concat(t),e).then((function(t){return t.data}))},updateTotal:function(t,e){return r.a.post("/product/update/total/".concat(t),e).then((function(t){return t.data}))},getOneAdmin:function(t){return r.a.get("/product/details/admin/".concat(t)).then((function(t){return t.data}))},filterPriceDecending:function(){return r.a.get("/product/filter/price/decending").then((function(t){return t.data}))},filterPriceAcending:function(){return r.a.get("/product/filter/price/acending").then((function(t){return t.data}))}}},cf1T:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),c=n("vuIU"),a=n("md7G"),o=n("foSv"),u=n("Ji7U"),i=n("q1tI"),l=n.n(i),d=n("JX7q"),p=n("rePB"),s=n("nOHt"),f=n.n(s),h=n("5rEg"),g=n("2fM7"),b=n("hUol"),O=n("7pwT"),m=n("XJ4O"),y=l.a.createElement;function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var P=["Sports","Music","Tech","Clothes"],w=h.a.TextArea,S=function(t){Object(u.a)(i,t);var e,n=(e=i,function(){var t,n=Object(o.a)(e);if(C()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(a.a)(this,t)});function i(){var t;Object(r.a)(this,i);for(var e=arguments.length,c=new Array(e),a=0;a<e;a++)c[a]=arguments[a];return t=n.call.apply(n,[this].concat(c)),Object(p.a)(Object(d.a)(t),"state",{product:{model:"",prize:0,description:"",category:[],images:[],total:""},selectedItems:[],productCreated:null}),Object(p.a)(Object(d.a)(t),"onChange",(function(e){var n=t.state.product;n[e.target.name]=e.target.value,t.setState({product:n})})),Object(p.a)(Object(d.a)(t),"onChangeImage",(function(e){var n=t.state.product,r=e.target.value;n[e.target.name]=r.split(" "),t.setState({product:n})})),Object(p.a)(Object(d.a)(t),"handleChange",(function(e,n){t.setState({product:v({},t.state.product,{category:e})})})),Object(p.a)(Object(d.a)(t),"onSubmit",(function(){var e=t.state.product;0!==e.model.length&&0!==e.prize&&0!==e.description.length&&0!==e.category.length?t.addBackend():b.error("Please complete all required fields")})),t}return Object(c.a)(i,[{key:"addBackend",value:function(){var t=this;m.a.productForm(this.state.product).then((function(e){t.setState({product:e,productCreated:!0})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state,e=t.selectedItems,n=t.product,r=P.filter((function(t){return!e.includes(t)}));return"Admin"!==this.context.user.role&&this.state.productCreated?(f.a.push("/"),null):y("div",null,y("h2",null,"Create Product"),y("div",{className:"create-card"},y(h.a,{name:"model",placeholder:"Please enter product name",onChange:this.onChange}),y(h.a,{name:"prize",type:"number",placeholder:"Please enter product price",onChange:this.onChange}),y(h.a,{name:"total",type:"number",placeholder:"Please enter the amount of products in stock",onChange:this.onChange}),y(w,{name:"images",rows:4,type:"text",placeholder:"Add Cloudinary images url separated by a space",onChange:this.onChangeImage}),y(w,{name:"description",rows:4,placeholder:"Please enter product description",onChange:this.onChange}),y(g.a,{mode:"multiple",placeholder:"Pick Category",value:n.category,onChange:this.handleChange,style:{width:"100%"}},r.map((function(t){return y(g.a.Option,{key:t,value:t},t)}))),y("br",null),y("br",null),y("br",null),y("br",null),y("br",null),y("button",{onClick:this.onSubmit},"Submit")))}}]),i}(i.Component);Object(p.a)(S,"contextType",O.b);var k=S,D=l.a.createElement;function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var T=function(t){Object(u.a)(i,t);var e,n=(e=i,function(){var t,n=Object(o.a)(e);if(R()){var r=Object(o.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(a.a)(this,t)});function i(){return Object(r.a)(this,i),n.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return D("div",null,D(k,null))}}]),i}(i.Component);e.default=T}},[["GHge",0,1,5,7,2,3,4,6,8,9]]]);