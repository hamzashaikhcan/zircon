(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"44ku":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n);function s(t,e,a,n,r,s,i){try{var o=t[s](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(n,r)}var i={data:function(){return{loading:!0,page:{}}},created:function(){var t,e=this;return(t=r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.call_api("get","page/".concat(e.$route.params.pageSlug));case 2:(a=t.sent).data.success?e.page=a.data.data:(e.snack({message:a.data.message,color:"red"}),e.$router.push({name:"404"})),e.loading=!1;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function o(t){s(i,n,r,o,c,"next",t)}function c(t){s(i,n,r,o,c,"throw",t)}o(void 0)}))})()}},o=a("KHd+"),c=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pb-6"},[e("v-container",[this.loading?[e("v-skeleton-loader",{attrs:{type:"table-heading, divider, list-item-three-line, image, article"}})]:[e("h1",{staticClass:"mb-7 mt-4"},[this._v(this._s(this.page.title))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.page.content)}})]],2)],1)}),[],!1,null,null,null);e.default=c.exports}}]);