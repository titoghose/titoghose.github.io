import{r as n,u as W,j as t,F as d,B as A,L,R as M,N as H}from"./index-C3yGMlw-.js";import{I,T as h,B as a}from"./text-9t2yFLYy.js";import{H as B}from"./heading-X0FaK6m0.js";/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...e)=>e.filter((o,r,i)=>!!o&&o.trim()!==""&&i.indexOf(o)===r).join(" ").trim();/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,r,i)=>i?i.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>{const o=_(e);return o.charAt(0).toUpperCase()+o.slice(1)};/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1},R=n.createContext({}),$=()=>n.useContext(R),E=n.forwardRef(({color:e,size:o,strokeWidth:r,absoluteStrokeWidth:i,className:c="",children:s,iconNode:w,...m},C)=>{const{size:l=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:j="currentColor",className:k=""}=$()??{},v=i??g?Number(r??p)*24/Number(o??l):r??p;return n.createElement("svg",{ref:C,...x,width:o??l??x.width,height:o??l??x.height,stroke:e??j,strokeWidth:v,className:b("lucide",k,c),...!s&&!S(m)&&{"aria-hidden":"true"},...m},[...w.map(([y,z])=>n.createElement(y,z)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,o)=>{const r=n.forwardRef(({className:i,...c},s)=>n.createElement(E,{ref:s,iconNode:o,className:b(`lucide-${N(f(e))}`,`lucide-${e}`,i),...c}));return r.displayName=f(e),r};/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],F=u("book",V);/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],G=u("file-text",D);/**
 * @license lucide-react v1.20.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],q=u("mail",T),P=({width:e})=>t.jsx("svg",{width:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"})}),U=({width:e})=>t.jsx("svg",{width:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),J=()=>{const{data:e}=W();return t.jsxs(d,{my:{base:0,md:4},w:"100%",gap:{base:4,md:8},h:"100%",flexDirection:{base:"column",md:"row"},children:[t.jsx(d,{justifyContent:"center",flex:"0.3",children:t.jsx(I,{w:{base:"250px",md:"400px"},h:{base:"250px",md:"400px"},objectFit:"cover",src:e.picture,borderRadius:{base:"50%",md:"xl"}})}),t.jsxs(A,{flex:"0.7",children:[t.jsx(B,{fontSize:"4xl",textAlign:{base:"center",md:"left"},children:e.name}),t.jsx(h,{fontWeight:"600",textAlign:{base:"center",md:"left"},color:"gray",pt:"1",children:e.title}),t.jsxs(d,{mt:"8",gap:"4",flexDirection:{base:"column",md:"row"},children:[t.jsx(a,{variant:"outline",leftIcon:t.jsx(P,{width:"8pt"}),onClick:()=>window.open(e.github),borderWidth:"2px",size:{base:"lg",md:"md"},children:"GitHub"}),t.jsx(a,{variant:"outline",leftIcon:t.jsx(U,{width:"8pt"}),onClick:()=>window.open(e.linkedin),borderWidth:"2px",size:{base:"lg",md:"md"},children:"LinkedIn"}),t.jsx(a,{variant:"outline",leftIcon:t.jsx(F,{width:"8pt"}),onClick:()=>window.open(e.google_scholar),borderWidth:"2px",size:{base:"lg",md:"md"},children:"G-Scholar"}),t.jsx(a,{variant:"outline",leftIcon:t.jsx(q,{width:"8pt"}),onClick:()=>window.open(e.email),borderWidth:"2px",size:{base:"lg",md:"md"},children:"Mail"}),t.jsx(a,{leftIcon:t.jsx(G,{width:"8pt"}),onClick:()=>window.open(e.cv),borderWidth:"2px",borderColor:"brand",size:{base:"lg",md:"md"},children:"CV"})]}),t.jsx(h,{mt:"4",align:"justify",fontWeight:"500",children:e.about}),t.jsxs(h,{mt:"4",align:"justify",fontWeight:"500",children:[e.life.description,t.jsx(L,{as:H,to:M.Life,color:"brand",children:e.life.link})]})]})]})};export{J as default};
