(()=>{"use strict";var e={799:(e,t,i)=>{var n=i(963),l=i(252),r=i(577);const a={class:"container",id:"display-view"},s=(0,l._)("h1",null,"User profile",-1),o=["src"],u={id:"user-name"},p=(0,l._)("hr",null,null,-1),d={id:"user-email"},f=(0,l._)("hr",null,null,-1),c={id:"user-interests"},m=(0,l._)("hr",null,null,-1),h={class:"container",id:"edit-view"},_=(0,l._)("h1",null,"User profile",-1),v=["src"],w=(0,l._)("span",null," Name: ",-1),y=(0,l._)("hr",null,null,-1),b=(0,l._)("span",null," Email: ",-1),g=(0,l._)("hr",null,null,-1),P=(0,l._)("span",null," Interests: ",-1),O=(0,l._)("hr",null,null,-1);function U(e,t,i,U,k,j){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l._)("div",a,[s,(0,l._)("img",{src:k.image,alt:"a dog's profile picture"},null,8,o),(0,l._)("span",null,[(0,l.Uk)(" Name: "),(0,l._)("b",u,(0,r.zw)(k.name),1)]),p,(0,l._)("span",null,[(0,l.Uk)(" Email: "),(0,l._)("b",d,(0,r.zw)(k.email),1)]),f,(0,l._)("span",null,[(0,l.Uk)(" Interests: "),(0,l._)("b",c,(0,r.zw)(k.interests),1)]),m,(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>j.editProfile&&j.editProfile(...e))},"Edit Profile")],512),[[n.F8,!k.isEditMode]]),(0,l.wy)((0,l._)("div",h,[_,(0,l._)("img",{src:k.image,alt:"a dog's profile picture"},null,8,v),w,(0,l.wy)((0,l._)("input",{type:"text",id:"name-email","onUpdate:modelValue":t[1]||(t[1]=e=>k.name=e)},null,512),[[n.nr,k.name]]),y,b,(0,l.wy)((0,l._)("input",{type:"text",id:"input-email","onUpdate:modelValue":t[2]||(t[2]=e=>k.email=e)},null,512),[[n.nr,k.email]]),g,P,(0,l.wy)((0,l._)("input",{type:"text",id:"input-interests","onUpdate:modelValue":t[3]||(t[3]=e=>k.interests=e)},null,512),[[n.nr,k.interests]]),O,(0,l._)("button",{onClick:t[4]||(t[4]=(...e)=>j.updateProfile&&j.updateProfile(...e))},"Save Profile")],512),[[n.F8,k.isEditMode]])],64)}const k=i.p+"img/profile.314fb5e3.jpeg",j={name:"App",data(){return{image:k,name:"",email:"",interests:"",isEditMode:!1}},async created(){let e=await this.fetchUserProfile();this.name=e.name,this.email=e.email,this.interests=e.interests},methods:{editProfile(){this.isEditMode=!0},async updateProfile(){this.isEditMode=!1;const e={name:this.name,email:this.email,interests:this.interests};let t=await this.updateUserProfile(e);console.log(t)},async fetchUserProfile(){return await(await fetch("get-profile")).json()},async updateUserProfile(e){const t=await fetch("update-profile",{method:"POST",body:JSON.stringify(e)});return await t.json()}}};var E=i(744);const x=(0,E.Z)(j,[["render",U]]),M=x;(0,n.ri)(M).mount("#app")}},t={};function i(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,(()=>{var e=[];i.O=(t,n,l,r)=>{if(!n){var a=1/0;for(p=0;p<e.length;p++){for(var[n,l,r]=e[p],s=!0,o=0;o<n.length;o++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](n[o])))?n.splice(o--,1):(s=!1,r<a&&(a=r));if(s){e.splice(p--,1);var u=l();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,l,r]}})(),(()=>{i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.p="/"})(),(()=>{var e={143:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,[a,s,o]=n,u=0;if(a.some((t=>0!==e[t]))){for(l in s)i.o(s,l)&&(i.m[l]=s[l]);if(o)var p=o(i)}for(t&&t(n);u<a.length;u++)r=a[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(p)},n=self["webpackChunkteamable_vue_app"]=self["webpackChunkteamable_vue_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i.O(void 0,[998],(()=>i(799)));n=i.O(n)})();
//# sourceMappingURL=app.9753d176.js.map