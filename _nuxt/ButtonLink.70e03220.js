import{d as p,ao as _,I as a,a4 as m,b as o,X as i,w as f,f as g,n as x,M as b,a6 as S,E as h,k}from"./entry.e5c80871.js";import"./MDCSlot.b8a5aa46.js";import{r as y}from"./slot.61ad60a6.js";const z=p({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:_("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const s=a(()=>((t=n)=>`{color.${t.color}.600}`)()),r=a(()=>((t=n)=>`{color.${t.color}.500}`)()),n=e,l={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:c}=m(n,l,{_YM9_buttonPrimary:s,_A23_buttonSecondary:r});return(t,H)=>{const u=S,d=h;return o(),i(d,{class:x(["button-link",[b(c)]]),to:e.href,target:e.blank?"_blank":void 0},{default:f(()=>[e.icon?(o(),i(u,{key:0,name:e.icon},null,8,["name"])):g("",!0),y(t.$slots,"default",{unwrap:"p ul li"},void 0,!0)]),_:3},8,["to","target","class"])}}});const C=k(z,[["__scopeId","data-v-62cb4d9e"]]);export{C as default};