import{n as x,I as l,o as s,c as n,b as h,w as v,a as m,F as _,q as d,E as u,J as y,t as T,K as b,H as B}from"./entry.2691e566.js";import{_ as V}from"./BorderedBox.vue.134a9200.js";import{u as i}from"./fetch.1610c2d0.js";import{f as $}from"./notify.d0277584.js";const g={class:"text-center"},q=m("div",{class:"text-4xl q-pb-md"},"Fitness Tracker",-1),C={class:"min-w-[20rem] flex justify-between q-px-sm"},E=x({__name:"index",async setup(F){let t,o;const p=async c=>{const{data:r,error:e}=await i(`/api/fitnessTracker/startWorkout/${c}`,{method:"post",watch:!1},"$kw03fNlJVU");e&&e.value&&$(e.value.data.message),console.log(r),await b("/fitness/workout/"+r.value.id)},{data:f}=([t,o]=l(()=>i("/api/fitnessTracker/workoutTypes","$sdVWlAieVC")),t=await t,o(),t),{data:w}=([t,o]=l(()=>i("/api/fitnessTracker/workouts","$Vmq8SlJtnQ")),t=await t,o(),t);return(c,r)=>{const e=B,k=V;return s(),n("div",g,[q,h(k,{title:"Start a New Workout"},{default:v(()=>[m("div",C,[(s(!0),n(_,null,d(u(f),a=>(s(),y(e,{label:a.name,key:a.id,onMousedown:N=>p(a.id)},null,8,["label","onMousedown"]))),128))])]),_:1}),(s(!0),n(_,null,d(u(w),a=>(s(),n("div",null,T(a.id),1))),256))])}}});export{E as default};