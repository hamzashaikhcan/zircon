(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{eRvf:function(s,r,e){"use strict";e.r(r);var t=e("o0o1"),a=e.n(t),i=e("ta7f");function o(s,r,e,t,a,i,o){try{var d=s[i](o),n=d.value}catch(s){return void e(s)}d.done?r(n):Promise.resolve(n).then(t,a)}var d={data:function(){return{form:{email:"",code:"",password:"",confirmPassword:""},loading:!1}},validations:{form:{email:{required:i.required,email:i.email},code:{required:i.required},password:{required:i.required,minLength:Object(i.minLength)(6)},confirmPassword:{required:i.required,sameAsPassword:Object(i.sameAs)("password")}}},computed:{emailErrors:function(){var s=[];return this.$v.form.email.$dirty?(!this.$v.form.email.required&&s.push(this.$i18n.t("this_field_is_required")),!this.$v.form.email.email&&s.push(this.$i18n.t("this_field_is_required_a_valid_email")),s):s},codeErrors:function(){var s=[];return this.$v.form.code.$dirty?(!this.$v.form.code.required&&s.push(this.$i18n.t("this_field_is_required")),s):s},passwordErrors:function(){var s=[];return this.$v.form.password.$dirty?(!this.$v.form.password.required&&s.push(this.$i18n.t("this_field_is_required")),!this.$v.form.password.minLength&&s.push(this.$i18n.t("password_must_be_minimum_6_characters")),s):s},confirmPasswordErrors:function(){var s=[];return this.$v.form.confirmPassword.$dirty?(!this.$v.form.confirmPassword.required&&s.push(this.$i18n.t("this_field_is_required")),!this.$v.form.confirmPassword.sameAsPassword&&s.push(this.$i18n.t("password_and_confirm_password_should_match")),s):s}},methods:{resetPassword:function(){var s,r=this;return(s=a.a.mark((function s(){var e;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.$v.form.$touch(),!r.$v.form.$anyError){s.next=3;break}return s.abrupt("return");case 3:return r.loading=!0,s.next=6,r.call_api("post","auth/password/reset",r.form);case 6:(e=s.sent).data.success?(r.$router.push({name:"Login"}),r.snack({message:e.data.message})):r.snack({message:e.data.message,color:"red"}),r.loading=!1;case 9:case"end":return s.stop()}}),s)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var i=s.apply(r,e);function d(s){o(i,t,a,d,n,"next",s)}function n(s){o(i,t,a,d,n,"throw",s)}d(void 0)}))})()}},created:function(){this.$route.params.email&&(this.form.email=this.$route.params.email)}},n=e("KHd+"),l=Object(n.a)(d,(function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"6",md:"8",sm:"10"}},[e("div",{staticClass:"my-5 my-lg-16 rounded-lg pa-5 border overflow-hidden shadow-light"},[e("div",{staticClass:"info--text mb-3"},[s._v("\n                        "+s._s(s.$t("a_verification_code_has_been_sent_to_your_email"))+"\n                    ")]),s._v(" "),e("h1",{staticClass:"text-uppercase lh-1 mb-4"},[e("span",{staticClass:"display-1 primary--text fw-900"},[s._v(s._s(s.$t("reset")))]),s._v(" "),e("span",{staticClass:"d-block display-1 fw-900 grey--text text--darken-3"},[s._v(s._s(s.$t("password")))])]),s._v(" "),e("div",{staticClass:"fs-16 fw-500 mb-6"},[s._v(s._s(s.$t("enter_your_email_address_code__new_password")))]),s._v(" "),e("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(r){return r.preventDefault(),s.resetPassword()}}},[e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[s._v(s._s(s.$t("email")))]),s._v(" "),e("v-text-field",{attrs:{placeholder:s.$t("email_address"),type:"email","error-messages":s.emailErrors,"hide-details":"auto",required:"",outlined:""},model:{value:s.form.email,callback:function(r){s.$set(s.form,"email",r)},expression:"form.email"}})],1),s._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[s._v(s._s(s.$t("code")))]),s._v(" "),e("v-text-field",{attrs:{placeholder:s.$t("code"),type:"text","error-messages":s.codeErrors,"hide-details":"auto",required:"",outlined:""},model:{value:s.form.code,callback:function(r){s.$set(s.form,"code",r)},expression:"form.code"}})],1),s._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[s._v(s._s(s.$t("password")))]),s._v(" "),e("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":s.passwordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(r){return s.$v.form.password.$touch()}},model:{value:s.form.password,callback:function(r){s.$set(s.form,"password",r)},expression:"form.password"}})],1),s._v(" "),e("div",{staticClass:"mb-4"},[e("div",{staticClass:"mb-1 fs-13 fw-500"},[s._v(s._s(s.$t("confirm_password")))]),s._v(" "),e("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":s.confirmPasswordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(r){return s.$v.form.confirmPassword.$touch()}},model:{value:s.form.confirmPassword,callback:function(r){s.$set(s.form,"confirmPassword",r)},expression:"form.confirmPassword"}})],1),s._v(" "),e("v-btn",{staticClass:"px-12 mb-4",attrs:{"x-large":"",elevation:"0",type:"submit",color:"primary",loading:s.loading,disabled:s.loading},on:{click:s.resetPassword}},[s._v(s._s(s.$t("reset_password")))])],1)],1)])],1)],1)],1)}),[],!1,null,null,null);r.default=l.exports}}]);