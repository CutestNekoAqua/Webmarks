import{d as b,u as y,r as $,m as f,h as g,c as i,a as t,w as h,b as n,v as u,n as e,t as l,l as m,i as k,j as C,F as A,o as d,e as V,f as q}from"./index-b961a72b.js";import{u as B,r as c,e as P,s as U}from"./index-5dd8270f.js";const N=t("div",{class:"mx-auto max-w-screen-xl mt-3 mb-5"},[t("div",{class:"sm:flex sm:items-center sm:justify-between"},[t("div",{class:"text-center sm:text-left"},[t("h1",{class:"text-2xl font-bold text-gray-900 sm:text-3xl"}," Create Admin User ")])])],-1),S={class:"text-left border-t my-8 text-sm"},E=["onSubmit"],j={class:"w-full"},R=t("label",{for:"Email",class:"w-full text-sm font-medium text-gray-700"}," Email ",-1),T={key:0,class:"text-sm text-red-700"},D={key:1,class:"text-sm text-red-700"},F={class:"mt-5"},M=t("label",{for:"Password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),z={key:0,class:"text-sm text-red-700"},I={class:"mt-5"},J=t("label",{for:"Password",class:"block text-sm font-medium text-gray-700"}," Password Confirmation ",-1),O={key:0,class:"text-sm text-red-700"},G={key:1,class:"text-sm text-red-700"},H={class:"mt-5 flex w-full items-center"},K=["disabled"],X=b({__name:"AdminUserCreate",setup(L){const _=y(),o=$({email:"",password:"",confirm_password:""}),x=f(()=>({email:{required:c,email:P},password:{required:c},confirm_password:{required:c,sameAs:U(f(()=>o.value.password))}})),s=B(x,o),v=async()=>{const p={email:o.value.email,password:o.value.password},a=localStorage.getItem("token");(await q.post("/api/admin-users",JSON.stringify(p),{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}})).data.id&&_.push({name:"admin-users-list"})};return(p,a)=>{const w=g("router-link");return d(),i(A,null,[N,t("div",S,[t("form",{onSubmit:h(v,["prevent"]),action:"#",class:"mt-3 w-full"},[t("div",j,[R,n(t("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=r=>o.value.email=r),autofocus:"",id:"Email",name:"email",onBlur:a[1]||(a[1]=r=>e(s).email.$touch()),class:"mt-1 block w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"},null,544),[[u,o.value.email]]),e(s).email.$error&&e(s).email.required.$invalid?(d(),i("div",T,l(e(s).email.required.$message),1)):m("",!0),e(s).email.$error&&e(s).email.email.$invalid?(d(),i("div",D,l(e(s).email.email.$message),1)):m("",!0)]),t("div",F,[M,n(t("input",{type:"password",id:"Password","onUpdate:modelValue":a[2]||(a[2]=r=>o.value.password=r),name:"password",onBlur:a[3]||(a[3]=r=>e(s).password.$touch()),class:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"},null,544),[[u,o.value.password]]),e(s).password.$error&&e(s).password.required.$invalid?(d(),i("div",z,l(e(s).password.required.$message),1)):m("",!0)]),t("div",I,[J,n(t("input",{type:"password",id:"Password","onUpdate:modelValue":a[4]||(a[4]=r=>o.value.confirm_password=r),name:"confirm_password",onBlur:a[5]||(a[5]=r=>e(s).confirm_password.$touch()),class:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"},null,544),[[u,o.value.confirm_password]]),e(s).confirm_password.$error&&e(s).confirm_password.required.$invalid?(d(),i("div",O,l(e(s).confirm_password.required.$message),1)):m("",!0),e(s).confirm_password.$error&&e(s).confirm_password.sameAs.$invalid?(d(),i("div",G,l(e(s).confirm_password.sameAs.$message),1)):m("",!0)]),t("div",H,[k(w,{class:"mr-auto btn btn-default",to:{name:"admin-users-list"}},{default:C(()=>[V("Cancel")]),_:1}),t("button",{type:"submit",disabled:!e(s).$dirty||e(s).$error,class:"btn btn-primary"}," Create Admin User ",8,K)])],40,E)])],64)}}});export{X as default};