"use strict";(self.webpackChunktito_portfolio=self.webpackChunktito_portfolio||[]).push([[737],{3304:function(e,n,t){t.d(n,{$:function(){return l}});var r=t(5580),a=t(1867),i=t(7689),o=t(184),l=function(e){var n=e.nextLink,t=e.nextText,l=e.prevLink,c=e.prevText,s=e.pt,u=void 0===s?"8":s,f=(0,i.s0)();return(0,o.jsxs)(r.kC,{w:"100%",justifyContent:"space-between",alignItems:"center",pt:u,gap:"6",flexDirection:{base:"column",md:"row"},children:[l&&(0,o.jsx)(a.zx,{size:"sm",fontWeight:"500",variant:"link",onClick:function(){return f(l)},children:c}),n?(0,o.jsx)(a.zx,{size:"sm",fontWeight:"500",variant:"link",onClick:function(){return f(n)},children:t}):(0,o.jsx)(o.Fragment,{})]})}},1737:function(e,n,t){t.r(n),t.d(n,{Life:function(){return b}});var r=t(5580),a=t(4828),i=t(2791);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}var c=function(e){var n,t;function r(){return e.apply(this,arguments)||this}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,l(n,t);var a=r.prototype;return a.getColumns=function(){var e=this.props,n=e.children,t=e.columnsCount,r=Array.from({length:t},(function(){return[]}));return i.Children.forEach(n,(function(e,n){e&&i.isValidElement(e)&&r[n%t].push(e)})),r},a.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map((function(n,t){return i.createElement("div",{key:t,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},n.map((function(e){return e})))}))},a.render=function(){var e=this.props,n=e.gutter,t=e.className,r=e.style;return i.createElement("div",{style:o({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:n},r),className:t},this.renderColumns())},r}(i.Component);c.propTypes={},c.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var s=c,u="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,f=function(){var e=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1];return u((function(){t(!0)}),[]),n}(),n=(0,i.useState)(0),t=n[0],r=n[1],a=(0,i.useCallback)((function(){e&&r(window.innerWidth)}),[e]);return u((function(){if(e)return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}}),[e,a]),t},d=function(e){var n=e.columnsCountBreakPoints,t=e.children,r=e.className,a=e.style,o=f(),l=(0,i.useMemo)((function(){var e=Object.keys(n).sort((function(e,n){return e-n})),t=e.length>0?n[e[0]]:1;return e.forEach((function(e){e<o&&(t=n[e])})),t}),[o,n]);return i.createElement("div",{className:r,style:a},i.Children.map(t,(function(e,n){return i.cloneElement(e,{key:n,columnsCount:l})})))};d.propTypes={},d.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var m=d,p=s,h=t(9797),g=t(3304),v=t(4100),y=t(184),b=function(){var e=(0,h.e)().data;return(0,y.jsxs)(r.xu,{my:{base:0,md:4},w:"100%",gap:{base:4,md:8},h:"100%",flexDirection:"column",className:"life",children:[(0,y.jsx)(r.xu,{mb:"8",children:(0,y.jsx)(r.X6,{fontSize:"xl",children:"My life beyond research"})}),(0,y.jsx)(m,{columnsCountBreakPoints:{350:1,500:2,900:3},style:{width:"100%"},children:(0,y.jsx)(p,{gutter:"20px",children:e.life.images.map((function(e){return(0,y.jsxs)(r.xu,{pos:"relative",className:"gallery-box",children:[(0,y.jsx)(a.Ee,{borderRadius:"xl",src:e.src,display:"block",w:"100%"}),(0,y.jsx)(r.xv,{pt:"2",fontWeight:"300",fontStyle:"italic",children:e.caption})]},e.id.toString())}))})}),(0,y.jsx)(g.$,{pt:"16",prevLink:v.x.AboutMe,prevText:"About Me",nextLink:v.x.Research,nextText:"Research & Projects"})]})}},1867:function(e,n,t){t.d(n,{zx:function(){return _}});var r=t(4942),a=t(1413),i=t(4925),o=t(9439),l=t(2791);function c(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){c(n,e)}))}}function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,l.useMemo)((function(){return s.apply(void 0,n)}),n)}var f=t(9610),d=t(2965),m=t(2680),p=t(9194),h=["children","className"],g=["label","placement","spacing","children","className","__css"],v=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],y=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],b=["icon","children","isRound","aria-label"],x=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},E=function(e){return e?"":void 0},k=(0,m.k)({strict:!1,name:"ButtonGroupContext"}),Z=(0,o.Z)(k,2),N=Z[0],S=Z[1];function w(e){var n=e.children,t=e.className,r=(0,i.Z)(e,h),o=(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,c=x("chakra-button__icon",t);return l.createElement(f.m$.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:c}),o)}function C(e){var n=e.label,t=e.placement,o=e.spacing,c=void 0===o?"0.5rem":o,s=e.children,u=void 0===s?l.createElement(p.$,{color:"currentColor",width:"1em",height:"1em"}):s,d=e.className,m=e.__css,h=(0,i.Z)(e,g),v=x("chakra-button__spinner",d),y="start"===t?"marginEnd":"marginStart",b=(0,l.useMemo)((function(){var e;return(0,a.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,r.Z)(e,y,n?c:0),(0,r.Z)(e,"fontSize","1em"),(0,r.Z)(e,"lineHeight","normal"),e),m)}),[m,n,y,c]);return l.createElement(f.m$.div,(0,a.Z)((0,a.Z)({className:v},h),{},{__css:b}),u)}w.displayName="ButtonIcon",C.displayName="ButtonSpinner";var _=(0,f.Gp)((function(e,n){var t=S(),r=(0,f.mq)("Button",(0,a.Z)((0,a.Z)({},t),e)),c=(0,d.Lr)(e),s=c.isDisabled,m=void 0===s?null==t?void 0:t.isDisabled:s,p=c.isLoading,h=c.isActive,g=c.children,y=c.leftIcon,b=c.rightIcon,k=c.loadingText,Z=c.iconSpacing,N=void 0===Z?"0.5rem":Z,w=c.type,_=c.spinner,I=c.spinnerPlacement,z=void 0===I?"start":I,O=c.className,L=c.as,P=(0,i.Z)(c,v),B=(0,l.useMemo)((function(){var e=(0,a.Z)((0,a.Z)({},null==r?void 0:r._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},r),!!t&&{_focus:e})}),[r,t]),A=function(e){var n=(0,l.useState)(!e),t=(0,o.Z)(n,2),r=t[0],a=t[1];return{ref:(0,l.useCallback)((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(L),$=A.ref,D=A.type,R={rightIcon:b,leftIcon:y,iconSpacing:N,children:g};return l.createElement(f.m$.button,(0,a.Z)({disabled:m||p,ref:u(n,$),as:L,type:null!==w&&void 0!==w?w:D,"data-active":E(h),"data-loading":E(p),__css:B,className:x("chakra-button",O)},P),p&&"start"===z&&l.createElement(C,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:N},_),p?k||l.createElement(f.m$.span,{opacity:0},l.createElement(j,(0,a.Z)({},R))):l.createElement(j,(0,a.Z)({},R)),p&&"end"===z&&l.createElement(C,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:N},_))}));function j(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return l.createElement(l.Fragment,null,n&&l.createElement(w,{marginEnd:a},n),r,t&&l.createElement(w,{marginStart:a},t))}_.displayName="Button",(0,f.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,c=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,d=e.isAttached,m=e.isDisabled,p=(0,i.Z)(e,y),h=x("chakra-button__group",c),g=(0,l.useMemo)((function(){return{size:t,colorScheme:r,variant:o,isDisabled:m}}),[t,r,o,m]),v={display:"inline-flex"};return v=d?(0,a.Z)((0,a.Z)({},v),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,a.Z)((0,a.Z)({},v),{},{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),l.createElement(N,{value:g},l.createElement(f.m$.div,(0,a.Z)({ref:n,role:"group",__css:v,className:h,"data-attached":d?"":void 0},p)))})).displayName="ButtonGroup",(0,f.Gp)((function(e,n){var t=e.icon,r=e.children,o=e.isRound,c=e["aria-label"],s=(0,i.Z)(e,b),u=t||r,f=(0,l.isValidElement)(u)?(0,l.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return l.createElement(_,(0,a.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":c},s),f)})).displayName="IconButton"},4828:function(e,n,t){t.d(n,{Ee:function(){return m}});var r=t(1413),a=t(4925),i=t(9439),o=t(7762),l=t(2791),c=t(9610),s=t(8104),u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var d=(0,c.Gp)((function(e,n){var t=e.htmlWidth,i=e.htmlHeight,o=e.alt,c=(0,a.Z)(e,u);return l.createElement("img",(0,r.Z)({width:t,height:i,ref:n,alt:o},c))}));d.displayName="NativeImage";var m=(0,c.Gp)((function(e,n){var t=e.fallbackSrc,u=e.fallback,m=e.src,p=e.srcSet,h=e.align,g=e.fit,v=e.loading,y=e.ignoreFallback,b=e.crossOrigin,x=e.fallbackStrategy,E=void 0===x?"beforeLoadOrError":x,k=e.referrerPolicy,Z=(0,a.Z)(e,f),N=null!=v||y||!(void 0!==t||void 0!==u),S=function(e){var n=e.loading,t=e.src,r=e.srcSet,a=e.onLoad,o=e.onError,c=e.crossOrigin,u=e.sizes,f=e.ignoreFallback,d=(0,l.useState)("pending"),m=(0,i.Z)(d,2),p=m[0],h=m[1];(0,l.useEffect)((function(){h(t?"loading":"pending")}),[t]);var g=(0,l.useRef)(),v=(0,l.useCallback)((function(){if(t){y();var e=new Image;e.src=t,c&&(e.crossOrigin=c),r&&(e.srcset=r),u&&(e.sizes=u),n&&(e.loading=n),e.onload=function(e){y(),h("loaded"),null==a||a(e)},e.onerror=function(e){y(),h("failed"),null==o||o(e)},g.current=e}}),[t,c,r,u,a,o,n]),y=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,s.G)((function(){if(!f)return"loading"===p&&v(),function(){y()}}),[p,v,f]),f?"loaded":p}((0,r.Z)((0,r.Z)({},e),{},{ignoreFallback:N})),w=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(S,E),C=(0,r.Z)({ref:n,objectFit:g,objectPosition:h},N?Z:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=(0,o.Z)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(l){a.e(l)}finally{a.f()}return r}(Z,["onError","onLoad"]));return w?u||l.createElement(c.m$.img,(0,r.Z)({as:d,className:"chakra-image__placeholder",src:t},C)):l.createElement(c.m$.img,(0,r.Z)({as:d,src:m,srcSet:p,crossOrigin:b,loading:v,referrerPolicy:k,className:"chakra-image"},C))}));m.displayName="Image";(0,c.Gp)((function(e,n){return l.createElement(c.m$.img,(0,r.Z)({ref:n,as:d,className:"chakra-image"},e))}))}}]);
//# sourceMappingURL=737.6f557174.chunk.js.map