(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{qRK9:function(e,t,r){"use strict";r.r(t);var s=r("o0o1"),a=r.n(s),i=r("ta7f"),o=r("L2JU"),n=r("51uj"),l=r("qdzJ");function d(e,t,r,s,a,i,o){try{var n=e[i](o),l=n.value}catch(e){return void r(e)}n.done?t(l):Promise.resolve(l).then(s,a)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={data:function(){return{mobileInputProps:{inputOptions:{type:"tel",placeholder:"phone number"},dropdownOptions:{showDialCodeInSelection:!1,showFlags:!0,showDialCodeInList:!0},autoDefaultCountry:!1,validCharactersOnly:!0,mode:"international"},form:{name:"",phone:"",email:"",password:"",confirmPassword:"",invalidPhone:!0,showInvalidPhone:!1},passwordShow:!1,loading:!1}},components:{snackbar:r("a1Nl").a,VueTelInput:n.VueTelInput,SocialLogin:l.a},validations:{form:{name:{required:i.required},email:{required:i.required,email:i.email},phone:{required:i.required},password:{required:i.required,minLength:Object(i.minLength)(6)},confirmPassword:{required:i.required,sameAsPassword:Object(i.sameAs)("password")}}},computed:m(m(m({},Object(o.c)("app",["generalSettings","availableCountries"])),Object(o.c)("cart",["getTempUserId"])),{},{nameErrors:function(){var e=[];return this.$v.form.name.$dirty?(!this.$v.form.name.required&&e.push(this.$i18n.t("this_field_is_required")),e):e},emailErrors:function(){var e=[];return this.$v.form.email.$dirty?(!this.$v.form.email.required&&e.push(this.$i18n.t("this_field_is_required")),!this.$v.form.email.email&&e.push(this.$i18n.t("this_field_is_required_a_valid_email")),e):e},passwordErrors:function(){var e=[];return this.$v.form.password.$dirty?(!this.$v.form.password.required&&e.push(this.$i18n.t("this_field_is_required")),!this.$v.form.password.minLength&&e.push(this.$i18n.t("password_must_be_minimum_6_characters")),e):e},confirmPasswordErrors:function(){var e=[];return this.$v.form.confirmPassword.$dirty?(!this.$v.form.confirmPassword.required&&e.push(this.$i18n.t("this_field_is_required")),!this.$v.form.confirmPassword.sameAsPassword&&e.push(this.$i18n.t("password_and_confirm_password_should_match")),e):e}}),methods:m(m(m(m({},Object(o.b)("auth",["login"])),Object(o.d)("cart",["removeTempUserId"])),Object(o.d)("auth",["updateChatWindow","showLoginDialog"])),{},{phoneValidate:function(e){this.form.invalidPhone=!e.valid,e.valid&&(this.form.showInvalidPhone=!1)},register:function(){var e,t=this;return(e=a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.form.$touch(),t.form.invalidPhone&&(t.form.showInvalidPhone=!0),!t.$v.form.$anyError){e.next=4;break}return e.abrupt("return");case 4:return t.form.phone=t.form.phone.replace(/\s/g,""),t.getTempUserId&&(t.form.temp_user_id=t.getTempUserId),t.loading=!0,e.next=9,t.call_api("post","auth/signup",t.form);case 9:(r=e.sent).data.success?(t.getTempUserId&&t.removeTempUserId(),1==t.generalSettings.email_verification?(t.$router.push({name:"VerifyAccount",params:{email:t.form.email}}),t.snack({message:r.data.message})):(t.login(r.data),t.showLoginDialog(!1),t.updateChatWindow(!1),t.$router.push(t.$route.query.redirect||{name:"DashBoard"}))):t.snack({message:r.data.message,color:"red"}),t.loading=!1;case 12:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var i=e.apply(t,r);function o(e){d(i,s,a,o,n,"next",e)}function n(e){d(i,s,a,o,n,"throw",e)}o(void 0)}))})()}})},p=r("KHd+"),f=Object(p.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-row",[r("v-col",{staticClass:"mx-auto",attrs:{xl:"10"}},[r("div",{staticClass:"my-5 my-lg-16 rounded-lg pa-5 border overflow-hidden shadow-light"},[r("v-row",{attrs:{"no-gutters":"",align:"start"}},[r("v-col",{staticClass:"lh-0",attrs:{cols:"12",lg:"6",order:"2","order-lg":"1"}},[r("banner",{staticClass:"mt-5 mt-lg-0",attrs:{loading:!1,banner:e.$store.getters["app/banners"].registration_page}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",order:"1","order-lg":"2",lg:"6"}},[r("div",{staticClass:"px-lg-7"},[r("h1",{staticClass:"text-uppercase lh-1 mb-5"},[r("span",{staticClass:"opacity-50 fs-22 fw-400"},[e._v(e._s(e.$t("welcome_to")))]),e._v(" "),r("span",{staticClass:"d-block display-1 fw-900"},[e._v(e._s(e.$store.getters["app/appName"]))])]),e._v(" "),r("v-form",{ref:"loginForm",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.register()}}},[r("div",{staticClass:"mb-4"},[r("div",{staticClass:"mb-1 fs-13 fw-500"},[e._v("\n                                            "+e._s(e.$t("full_name"))+"\n                                        ")]),e._v(" "),r("v-text-field",{attrs:{placeholder:e.$t("full_name"),type:"text","error-messages":e.nameErrors,"hide-details":"auto",required:"",outlined:""},on:{blur:function(t){return e.$v.form.name.$touch()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("div",{staticClass:"mb-1 fs-13 fw-500"},[e._v("\n                                            "+e._s(e.$t("phone_number"))+"\n                                        ")]),e._v(" "),r("vue-tel-input",e._b({attrs:{onlyCountries:e.availableCountries},on:{validate:e.phoneValidate},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}},"vue-tel-input",e.mobileInputProps,!1),[r("template",{slot:"arrow-icon"},[r("span",{staticClass:" vti__dropdown-arrow "},[e._v(" ▼")])])],2),e._v(" "),e.$v.form.phone.$error?r("div",{staticClass:" v-text-field__details mt-2 pl-3 "},[r("div",{staticClass:" v-messages theme--light error--text ",attrs:{role:"alert"}},[r("div",{staticClass:" v-messages__wrapper "},[r("div",{staticClass:" v-messages__message "},[e._v(e._s(e.$t("this_field_is_required")))])])])]):e._e(),e._v(" "),!e.$v.form.phone.$error&&e.form.showInvalidPhone?r("div",{staticClass:" v-text-field__details mt-2 pl-3"},[r("div",{staticClass:" v-messages theme--light error--text ",attrs:{role:"alert"}},[r("div",{staticClass:" v-messages__wrapper "},[r("div",{staticClass:" v-messages__message "},[e._v("\n                                                        "+e._s(e.$t("phone_number_must_be_valid"))+"\n                                                    ")])])])]):e._e()],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("div",{staticClass:"fs-13 fw-500"},[e._v("\n                                            "+e._s(e.$t("email_address"))+"\n                                        ")]),e._v(" "),r("v-text-field",{attrs:{placeholder:e.$t("email_address"),type:"email","error-messages":e.emailErrors,"hide-details":"auto",required:"",outlined:""},on:{blur:function(t){return e.$v.form.email.$touch()}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("div",{staticClass:"mb-1 fs-13 fw-500"},[e._v("\n                                            "+e._s(e.$t("password"))+"\n                                        ")]),e._v(" "),r("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":e.passwordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(t){return e.$v.form.password.$touch()}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[r("div",{staticClass:"mb-1 fs-13 fw-500"},[e._v("\n                                            "+e._s(e.$t("confirm_password"))+"\n                                        ")]),e._v(" "),r("v-text-field",{staticClass:"input-group--focused",attrs:{placeholder:"* * * * * * * *","error-messages":e.confirmPasswordErrors,type:"password","hide-details":"auto",required:"",outlined:""},on:{blur:function(t){return e.$v.form.confirmPassword.$touch()}},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword",t)},expression:"form.confirmPassword"}})],1),e._v(" "),r("div",{staticClass:"mb-4"},[e._v("\n                                        "+e._s(e.$t("by_signing_up_you_agree_to_our"))+"\n                                        "),r("router-link",{staticClass:" primary--text text-decoration-underline ",attrs:{to:{name:"CustomPage",params:{pageSlug:"terms-and-conditions"}}}},[e._v(e._s(e.$t("terms_and_conditions")))])],1),e._v(" "),r("v-btn",{staticClass:"px-12 mb-4",attrs:{"x-large":"",elevation:"0",type:"submit",color:"primary",loading:e.loading,disabled:e.loading},on:{click:e.register}},[e._v(e._s(e.$t("create_account")))])],1),e._v(" "),1==e.generalSettings.social_login.facebook||1==e.generalSettings.social_login.twitter||1==e.generalSettings.social_login.google?r("div",[r("div",{staticClass:"d-flex align-center mb-3"},[r("span",{staticClass:"me-2 fs-13 fw-500 opacity-60 "},[e._v(e._s(e.$t("or"))+", "+e._s(e.$t("join_with")))]),e._v(" "),r("v-divider")],1),e._v(" "),r("SocialLogin",{staticClass:"mb-5"})],1):e._e(),e._v(" "),r("div",[e._v("\n                                    "+e._s(e.$t("already_have_an_account"))+",\n                                    "),r("router-link",{staticClass:"primary--texttext-decoration-underline",attrs:{to:{name:"Login"}}},[e._v(e._s(e.$t("login")))])],1)],1)])],1)],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);