import{u as m}from"./asyncData.6815cc43.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.63f04c53.js";import f from"./Ellipsis.b0419081.js";import _ from"./ComponentPlaygroundData.875e26be.js";import"./TabsHeader.516d85a2.js";import"./ComponentPlaygroundProps.0dbe118c.js";import"./ProseH4.3e9e20f3.js";import"./ProseCodeInline.ad65a5a6.js";import"./Badge.0d41fa67.js";import"./MDCSlot.11660547.js";import"./slot.5e495b66.js";import"./ProseP.fd61e623.js";import"./index.8521f9ea.js";import"./ComponentPlaygroundSlots.vue.67734512.js";import"./ComponentPlaygroundTokens.vue.1464eda1.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-c6ef11bc"]]);export{V as default};