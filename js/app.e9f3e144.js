(function(t){function s(s){for(var a,o,r=s[0],c=s[1],l=s[2],d=0,p=[];d<r.length;d++)o=r[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/my-element-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"01f3":function(t,s,e){"use strict";var a=e("1052"),i=e.n(a);i.a},"07b0":function(t,s,e){"use strict";var a=e("4bf2"),i=e.n(a);i.a},"080e":function(t,s,e){},1052:function(t,s,e){},"10a4":function(t,s,e){},"14ac":function(t,s,e){"use strict";var a=e("775c"),i=e.n(a);i.a},"191d":function(t,s,e){"use strict";var a=e("84f3"),i=e.n(a);i.a},"36b2":function(t,s,e){},"3a7e":function(t,s,e){"use strict";var a=e("4bee"),i=e.n(a);i.a},"4bee":function(t,s,e){},"4bf2":function(t,s,e){},"4c25":function(t,s,e){"use strict";var a=e("a74d"),i=e.n(a);i.a},"55fe":function(t,s,e){"use strict";var a=e("5ba5"),i=e.n(a);i.a},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"},on:{touchmove:function(t){t.preventDefault()}}},[e("v-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab-wrapper"},[e("tab",{attrs:{tabs:t.tabs}})],1)],1)},n=[],o=(e("386d"),e("72bf")),r=e.n(o),c=e("0e9a"),l={development:"http://47.98.162.231:3000/elm/",production:"http://47.98.162.231:3000/elm/"},u=l["production"],d=0;function p(t){return function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c["a"].get(u+t,{params:s}).then(function(t){var s=t.data,e=s.errno,a=s.data;if(e===d)return a}).catch(function(t){console.log(t)})}}var f=p("seller"),h=p("goods"),v=p("ratings"),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header",on:{click:t.showDetail}},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v("\n         "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t.seller.supports?e("div",{staticClass:"support"},[e("support-ico",{attrs:{size:1,type:t.seller.supports[0].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e(),t.seller.supports?e("div",{staticClass:"support-count"},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()])]),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})])])},C=[],b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"support-ico",class:t.iconCls})},_=[],y=(e("c5f6"),{name:"support-ico",props:{size:{type:Number},type:{type:Number}},computed:{iconCls:function(){var t=["decrease","discount","special","invoice","guarantee"];return"icon-".concat(this.size," ").concat(t[this.type])}}}),g=y,w=(e("bfda"),e("2877")),x=Object(w["a"])(g,b,_,!1,null,"b3235eac",null),k=x.exports,S={name:"v-header",props:{seller:{type:Object,default:function(){return{}}}},methods:{showDetail:function(){this.headerDetailComp=this.headerDetailComp||this.$createHeaderDetail({$props:{seller:"seller"}}),this.headerDetailComp.show()}},components:{SupportIco:k}},$=S,T=(e("84c3"),Object(w["a"])($,m,C,!1,null,"01b09a0a",null)),P=T.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?e("cube-scroll-nav",{attrs:{side:!0,data:t.goods,options:t.scrollOptions},scopedSlots:t._u([{key:"bar",fn:function(s){return[e("cube-scroll-nav-bar",{attrs:{direction:"vertical",labels:s.labels,txts:t.barTxts,current:s.current},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"text"},[s.txt.type>=1?e("support-ico",{attrs:{size:3,type:s.txt.type}}):t._e(),e("span",[t._v(t._s(s.txt.name))]),s.txt.count?e("span",{staticClass:"num"},[e("bubble",{attrs:{num:s.txt.count}})],1):t._e()],1)]}}],null,!0)})]}}],null,!1,3706699198)},t._l(t.goods,function(s){return e("cube-scroll-nav-panel",{key:s.name,attrs:{label:s.name,title:s.name}},[e("ul",t._l(s.foods,function(s){return e("li",{key:s.name,staticClass:"food-item",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])])}),0)])}),1):t._e()],1),e("div",{staticClass:"shop-cart-wrapper"},[e("shop-cart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)])},j=[],F=(e("ac6a"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),t.decrease(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.add(s)}}})],1)}),N=[],E="add",L={name:"cart-control",props:{food:{type:Object}},methods:{add:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit(E,t.target)},decrease:function(){this.food.count&&this.food.count--}}},D=L,B=(e("55fe"),Object(w["a"])(D,F,N,!1,null,"6ad53e16",null)),R=B.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[e("bubble",{attrs:{num:t.totalCount}})],1)]),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),e("div",{staticClass:"content-right",on:{click:t.pay}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("div",{key:a},[e("transition",{on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0)])])},M=[],A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"bubble"},[t._v("\n  "+t._s(t.num)+"\n")])},I=[],Y={name:"bubble",props:{num:{type:Number}}},H=Y,J=(e("3a7e"),Object(w["a"])(H,A,I,!1,null,"6885cdb7",null)),W=J.exports,V=10,X="inner-hook";function q(){for(var t=[],s=0;s<V;s++)t.push({show:!1});return t}var G={name:"shop-cart",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},sticky:{type:Boolean,default:!1},fold:{type:Boolean,default:!0}},data:function(){return{balls:q(),listFold:this.fold}},created:function(){this.dropBalls=[]},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥".concat(this.minPrice,"元起送");if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差￥".concat(t,"元起送")}return"去结算"},payClass:function(){return!this.totalCount||this.totalPrice<this.minPrice?"not-enough":"enough"}},methods:{toggleList:function(){if(this.listFold){if(!this.totalCount)return;this.listFold=!1,this._showShopCartList(),this._showShopCartSticky()}else this.listFold=!0,this._hideShopCartList()},pay:function(t){this.totalPrice<this.minPrice||(this.$createDialog({title:"支付",content:"您需要支付".concat(this.totalPrice,"元")}).show(),t.stopPropagation())},drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){var s=this.dropBalls[this.dropBalls.length-1],e=s.el.getBoundingClientRect(),a=e.left-32,i=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0,".concat(i,"px,0)");var n=t.getElementsByClassName(X)[0];n.style.transform=n.style.webkitTransform="translate3d(".concat(a,"px,0,0)")},dropping:function(t,s){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3d(0,0,0)";var e=t.getElementsByClassName(X)[0];e.style.transform=e.style.webkitTransform="translate3d(0,0,0)",t.addEventListener("transitionend",s)},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},_showShopCartList:function(){var t=this;this.shopCartListComp=this.shopCartListComp||this.$createShopCartList({$props:{selectFoods:"selectFoods"},$events:{leave:function(){t._hideShopCartSticky()},hide:function(){t.listFold=!0},add:function(s){t.shopCartStickyComp.drop(s)}}}),this.shopCartListComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:"deliveryPrice",minPrice:"minPrice",fold:"listFold",list:this.shopCartListComp}}),this.shopCartStickyComp.show()},_hideShopCartList:function(){var t=this.sticky?this.$parent.list:this.shopCartListComp;t.hide&&t.hide()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}},watch:{fold:function(t){this.listFold=t},totalCount:function(t){this.fold||0!==t||this._hideShopCartList()}},components:{Bubble:W}},K=G,Q=(e("4c25"),Object(w["a"])(K,z,M,!1,null,"1bd1729b",null)),U=Q.exports,Z={name:"goods",props:{data:{type:Object,default:function(){return{}}}},data:function(){return{goods:[],selectedFood:{},scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t},barTxts:function(){var t=[];return this.goods.forEach(function(s){var e=s.type,a=s.name,i=s.foods,n=0;i.forEach(function(t){n+=t.count||0}),t.push({type:e,name:a,count:n})}),t}},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,h({id:this.seller.id}).then(function(s){t.goods=s}))},selectFood:function(t){this.selectedFood=t,this._showFood(),this._showShopCartSticky()},onAdd:function(t){this.$refs.shopCart.drop(t)},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"selectedFood"},$events:{add:function(s){t.shopCartStickyComp.drop(s)},leave:function(){t._hideShopCartSticky()}}}),this.foodComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:this.seller.deliveryPrice,minPrice:this.seller.minPrice,fold:!0}}),this.shopCartStickyComp.show()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}},components:{Bubble:W,SupportIco:k,CartControl:R,ShopCart:U}},tt=Z,st=(e("01f3"),Object(w["a"])(tt,O,j,!1,null,"3da13c9a",null)),et=st.exports,at=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{ref:"scroll",staticClass:"ratings",attrs:{options:t.scrollOptions}},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),e("star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("split"),e("rating-select",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,ratings:t.ratings},on:{select:t.onSelect,toggle:t.onToggle}}),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.computedRatings,function(s,a){return e("li",{key:a,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._l(s.recommend,function(s,a){return e("span",{key:a,staticClass:"item"},[t._v("\n                "+t._s(s)+"\n              ")])})],2),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t.format(s.rateTime))+"\n            ")])])])}),0)])],1)])},it=[],nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}),0)},ot=[],rt=5,ct="on",lt="half",ut="off",dt={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,a=Math.floor(s),i=0;i<a;i++)t.push(ct);e&&t.push(lt);while(t.length<rt)t.push(ut);return t}}},pt=dt,ft=(e("5717"),Object(w["a"])(pt,nt,ot,!1,null,null,null)),ht=ft.exports,vt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating-select"},[e("div",{staticClass:"rating-type border-bottom-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},mt=[],Ct=0,bt=1,_t=2,yt="toggle",gt="select",wt={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:_t},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===Ct})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===bt})}},methods:{select:function(t){this.$emit(gt,t)},toggleContent:function(){this.$emit(yt)}}},xt=wt,kt=(e("8f0f"),Object(w["a"])(xt,vt,mt,!1,null,null,null)),St=kt.exports,$t=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"})},Tt=[],Pt={name:"split"},Ot=Pt,jt=(e("6b5e"),Object(w["a"])(Ot,$t,Tt,!1,null,"6a13eb82",null)),Ft=jt.exports,Nt=2,Et={data:function(){return{selectType:Nt,onlyContent:!0}},computed:{computedRatings:function(){var t=this,s=[];return this.ratings.forEach(function(e){t.onlyContent&&!e.text||t.selectType!==Nt&&e.rateType!==t.selectType||s.push(e)}),s}},methods:{onSelect:function(t){this.selectType=t},onToggle:function(){this.onlyContent=!this.onlyContent}}},Lt=e("5a0c"),Dt=e.n(Lt),Bt={name:"ratings",mixins:[Et],props:{data:{type:Object}},data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller||{}}},watch:{sellectType:function(){var t=this;this.$nextTick(function(){t.$refs.scroll.refresh()})}},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,v({id:this.seller.id}).then(function(s){t.ratings=s}))},format:function(t){return Dt()(t).format("YYYY-MM-DD hh:mm")}},components:{Star:ht,Split:Ft,RatingSelect:St}},Rt=Bt,zt=(e("61fd"),Object(w["a"])(Rt,at,it,!1,null,"3bf5b75b",null)),Mt=zt.exports,At=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc border-bottom-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),e("split"),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("div",{staticClass:"content-wrapper border-bottom-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"support-item border-bottom-1px"},[e("support-ico",{attrs:{size:4,type:t.seller.supports[a].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])],1)}),0):t._e()]),e("split"),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("cube-scroll",{staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[e("ul",{staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}),0)])],1),e("split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,function(s,a){return e("li",{key:a,staticClass:"info-item border-bottom-1px"},[t._v("\n          "+t._s(s)+"\n        ")])}),0)])],1)])},It=[],Yt=e("335a"),Ht="__seller__";function Jt(t,s,e){var a=Yt["a"].get(Ht,{});a[t]||(a[t]={}),a[t][s]=e,Yt["a"].set(Ht,a)}function Wt(t,s,e){var a=Yt["a"].get(Ht,{});return a[t]&&a[t][s]||e}var Vt={props:{data:{type:Object,default:function(){return{}}}},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller||{}},favoriteText:function(){return this.favorite?"已收藏":"收藏"}},created:function(){this.favorite=Wt(this.seller.id,"favorite",!1)},methods:{toggleFavorite:function(){this.favorite=!this.favorite,Jt(this.seller.id,"favorite",this.favorite)}},components:{SupportIco:k,Star:ht,Split:Ft}},Xt=Vt,qt=(e("ffa0"),Object(w["a"])(Xt,At,It,!1,null,"53eb3640",null)),Gt=qt.exports,Kt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab"},[e("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{useTransition:!1,showSlider:!0,data:t.tabs},model:{value:t.selectedLabel,callback:function(s){t.selectedLabel=s},expression:"selectedLabel"}}),e("div",{staticClass:"slide-wrapper"},[e("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1,"show-dots":!1,"initial-index":t.index,options:t.slideOptions},on:{scroll:t.onScroll,change:t.onChange}},t._l(t.tabs,function(t,s){return e("cube-slide-item",{key:s},[e(t.component,{ref:"component",refInFor:!0,tag:"component",attrs:{data:t.data}})],1)}),1)],1)],1)},Qt=[],Ut=(e("20d6"),{name:"tab",props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex(function(s){return s.label===t})}}},mounted:function(){this.onChange(this.index)},methods:{onChange:function(t){this.index=t;var s=this.$refs.component[t];s&&s.fetch&&s.fetch()},onScroll:function(t){var s=this.$refs.tabBar.$el.clientWidth,e=this.$refs.slide.slide.scrollerWidth,a=-t.x/e*s;this.$refs.tabBar.setSliderTransform(a)}}}),Zt=Ut,ts=(e("14ac"),Object(w["a"])(Zt,Kt,Qt,!1,null,"be81233a",null)),ss=ts.exports,es={data:function(){return{seller:{id:r.a.parse(location.search).id}}},computed:{tabs:function(){return[{label:"商品",component:et,data:{seller:this.seller}},{label:"评论",component:Mt,data:{seller:this.seller}},{label:"商家",component:Gt,data:{seller:this.seller}}]}},created:function(){this._getSeller()},methods:{_getSeller:function(){var t=this;f({id:this.seller.id}).then(function(s){t.seller=Object.assign({},t.seller,s)})}},components:{Tab:ss,VHeader:P}},as=es,is=(e("9123"),Object(w["a"])(as,i,n,!1,null,"7b5ba6e5",null)),ns=is.exports,os=(e("df49"),e("e7bd")),rs=e("0c29"),cs=e("cd5d"),ls=e("6f24"),us=e("2696"),ds=e("7c8a"),ps=e("ae0c"),fs=e("47fe"),hs=e("4403"),vs=e("1cf7"),ms=e("7add"),Cs=e("84d6"),bs=e("d2c1"),_s=e("291f"),ys=e("7ced"),gs=e("09ad"),ws=e("81c3"),xs=e("6fe1"),ks=e("a801"),Ss=e("031d"),$s=e("63b4"),Ts=e("9173"),Ps=e("8344"),Os=e("664d"),js=e("0124"),Fs=e("9736"),Ns=e("1cc1"),Es=e("e231"),Ls=e("aea1"),Ds=e("5f4e"),Bs=e("0679"),Rs=e("2799"),zs=e("bdd9"),Ms=e("a2d2"),As=e("ba90"),Is=e("36b6"),Ys=e("0f85");a["a"].use(os["a"]),a["a"].use(rs["a"]),a["a"].use(cs["a"]),a["a"].use(ls["a"]),a["a"].use(us["a"]),a["a"].use(ds["a"]),a["a"].use(ps["a"]),a["a"].use(fs["a"]),a["a"].use(hs["a"]),a["a"].use(vs["a"]),a["a"].use(ms["a"]),a["a"].use(Cs["a"]),a["a"].use(bs["a"]),a["a"].use(_s["a"]),a["a"].use(ys["a"]),a["a"].use(gs["a"]),a["a"].use(ws["a"]),a["a"].use(xs["a"]),a["a"].use(ks["a"]),a["a"].use(Ss["a"]),a["a"].use($s["a"]),a["a"].use(Ts["a"]),a["a"].use(Ps["a"]),a["a"].use(Os["a"]),a["a"].use(js["a"]),a["a"].use(Fs["a"]),a["a"].use(Ns["a"]),a["a"].use(Es["a"]),a["a"].use(Ls["a"]),a["a"].use(Ds["a"]),a["a"].use(Bs["a"]),a["a"].use(Rs["a"]),a["a"].use(zs["a"]),a["a"].use(Ms["a"]),a["a"].use(As["a"]),a["a"].use(Is["a"]),a["a"].use(Ys["a"]);var Hs=e("df9a"),Js=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"header-detail",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[e("div",{staticClass:"detail-wrapper clear-fix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("优惠信息")]),e("div",{staticClass:"line"})]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:s.id,staticClass:"support-item"},[e("support-ico",{attrs:{size:2,type:t.seller.supports[a].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])],1)}),0):t._e(),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("商家公告")]),e("div",{staticClass:"line"})]),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),e("div",{staticClass:"detail-close",on:{click:t.hide}},[e("i",{staticClass:"icon-close"})])])])},Ws=[],Vs="show",Xs="hide",qs={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0,this.$emit(Vs)},hide:function(){this.visible=!1,this.$emit(Xs)}}},Gs={name:"header-detail",mixins:[qs],props:{seller:{type:Object,default:function(){return{}}}},components:{SupportIco:k,Star:ht}},Ks=Gs,Qs=(e("191d"),Object(w["a"])(Ks,Js,Ws,!1,null,"373f268b",null)),Us=Qs.exports,Zs=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade",appear:""}},[e("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],attrs:{"mask-closable":!0,position:"bottom",type:"shop-cart-list","z-index":90},on:{"mask-click":t.maskClick}},[e("transition",{attrs:{name:"move",appear:""},on:{"after-leave":t.afterLeave}},[t.visible?e("div",[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),e("cube-scroll",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s,a){return e("li",{key:a,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])}),0)])],1):t._e()])],1)],1)},te=[],se="show",ee="add",ae="leave",ie={name:"shop-cart-list",mixins:[qs],props:{selectFoods:{type:Array,default:function(){return[]}}},created:function(){var t=this;this.$on(se,function(){t.$nextTick(function(){t.$refs.listContent.refresh()})})},methods:{onAdd:function(t){this.$emit(ee,t)},afterLeave:function(){this.$emit(ae)},maskClick:function(){this.hide()},empty:function(){var t=this;this.dialogComp=this.$createDialog({type:"confirm",content:"清空购物车？",$events:{confirm:function(){t.selectFoods.forEach(function(t){t.count=0}),t.hide()}}}),this.dialogComp.show()}},components:{CartControl:R}},ne=ie,oe=(e("d0f6"),Object(w["a"])(ne,Zs,te,!1,null,"c9f18bb4",null)),re=oe.exports,ce=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"shop-cart-sticky"},[e("shop-cart",{ref:"shopCart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.deliveryPrice,minPrice:t.minPrice,fold:t.fold,sticky:!0}})],1)},le=[],ue={name:"shop-cart-sticky",mixins:[qs],props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){return{}}}},methods:{drop:function(t){this.$refs.shopCart.drop(t)}},components:{ShopCart:U}},de=ue,pe=(e("7783"),Object(w["a"])(de,ce,le,!1,null,"935c8998",null)),fe=pe.exports,he=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"},on:{"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"food"},[e("cube-scroll",{ref:"scroll"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:t.food},on:{add:t.addFood}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("\n              加入购物车\n            ")])])],1),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),e("split"),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),e("rating-select",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.ratings},on:{select:t.onSelect,toggle:t.onToggle}}),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.computedRatings&&t.computedRatings.length,expression:"computedRatings && computedRatings.length"}]},t._l(t.computedRatings,function(s,a){return e("li",{key:a,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),e("div",{staticClass:"time"},[t._v(t._s(t.format(s.rateTime)))]),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n                ")])])}),0),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings||!t.computedRatings.length,expression:"!computedRatings || !computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)])},ve=[],me="show",Ce="add",be="leave",_e={name:"food",mixins:[Et,qs],props:{food:{type:Object}},data:function(){return{desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{ratings:function(){return this.food.ratings}},created:function(){var t=this;this.$on(me,function(){t.$nextTick(function(){t.$refs.scroll.refresh()})})},methods:{afterLeave:function(){this.$emit(be)},addFirst:function(t){this.$set(this.food,"count",1),this.$emit(Ce,t.target)},addFood:function(t){this.$emit(Ce,t)},format:function(t){return Dt()(t).format("YYYY-MM-DD hh:mm")}},components:{CartControl:R,RatingSelect:St,Split:Ft}},ye=_e,ge=(e("07b0"),Object(w["a"])(ye,he,ve,!1,null,"34977e73",null)),we=ge.exports;Object(Hs["a"])(a["a"],Us),Object(Hs["a"])(a["a"],re),Object(Hs["a"])(a["a"],fe),Object(Hs["a"])(a["a"],we);e("f867");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(ns)}}).$mount("#app")},5717:function(t,s,e){"use strict";var a=e("080e"),i=e.n(a);i.a},"5ba5":function(t,s,e){},"61fd":function(t,s,e){"use strict";var a=e("b17a"),i=e.n(a);i.a},"6b5e":function(t,s,e){"use strict";var a=e("36b2"),i=e.n(a);i.a},"6f1e":function(t,s,e){},"775c":function(t,s,e){},7783:function(t,s,e){"use strict";var a=e("9e50"),i=e.n(a);i.a},"84c3":function(t,s,e){"use strict";var a=e("d239"),i=e.n(a);i.a},"84f3":function(t,s,e){},"8f0f":function(t,s,e){"use strict";var a=e("10a4"),i=e.n(a);i.a},9123:function(t,s,e){"use strict";var a=e("b999"),i=e.n(a);i.a},"9e50":function(t,s,e){},a74d:function(t,s,e){},b17a:function(t,s,e){},b999:function(t,s,e){},ba8f:function(t,s,e){},bfda:function(t,s,e){"use strict";var a=e("ba8f"),i=e.n(a);i.a},d0f6:function(t,s,e){"use strict";var a=e("dfd3"),i=e.n(a);i.a},d239:function(t,s,e){},dfd3:function(t,s,e){},f867:function(t,s,e){},ffa0:function(t,s,e){"use strict";var a=e("6f1e"),i=e.n(a);i.a}});
//# sourceMappingURL=app.e9f3e144.js.map