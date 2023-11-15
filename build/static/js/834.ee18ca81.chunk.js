"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[834],{4834:function(e,n,t){t.d(n,{rA:function(){return H},Ej:function(){return j},ZP:function(){return T},_o:function(){return W},Gx:function(){return P}});var o=t(70885),r=t(4942),i=t(63366),a=t(87462),l=t(46189),u=t(72791),d=t(28182),s=t(94419),c=t(54164),p=t(47563),f=t(27979),m=t(93981),h=t(75721),v=t(80184),b=["onChange","maxRows","minRows","style","value"];function y(e,n){return parseInt(e[n],10)||0}var w={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function g(e){return void 0===e||null===e||0===Object.keys(e).length}var Z=u.forwardRef((function(e,n){var t=e.onChange,r=e.maxRows,l=e.minRows,d=void 0===l?1:l,s=e.style,Z=e.value,S=(0,i.Z)(e,b),x=u.useRef(null!=Z).current,C=u.useRef(null),A=(0,p.Z)(n,C),R=u.useRef(null),k=u.useRef(0),z=u.useState({}),E=(0,o.Z)(z,2),F=E[0],B=E[1],L=u.useCallback((function(){var n=C.current,t=(0,f.Z)(n).getComputedStyle(n);if("0px"===t.width)return{};var o=R.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var i=t["box-sizing"],a=y(t,"padding-bottom")+y(t,"padding-top"),l=y(t,"border-bottom-width")+y(t,"border-top-width"),u=o.scrollHeight;o.value="x";var s=o.scrollHeight,c=u;return d&&(c=Math.max(Number(d)*s,c)),r&&(c=Math.min(Number(r)*s,c)),{outerHeightStyle:(c=Math.max(c,s))+("border-box"===i?a+l:0),overflow:Math.abs(c-u)<=1}}),[r,d,e.placeholder]),M=function(e,n){var t=n.outerHeightStyle,o=n.overflow;return k.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==o)?(k.current+=1,{overflow:o,outerHeightStyle:t}):e},N=u.useCallback((function(){var e=L();g(e)||B((function(n){return M(n,e)}))}),[L]);u.useEffect((function(){var e,n=(0,m.Z)((function(){k.current=0,C.current&&function(){var e=L();g(e)||(0,c.flushSync)((function(){B((function(n){return M(n,e)}))}))}()})),t=(0,f.Z)(C.current);return t.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(n)).observe(C.current),function(){n.clear(),t.removeEventListener("resize",n),e&&e.disconnect()}})),(0,h.Z)((function(){N()})),u.useEffect((function(){k.current=0}),[Z]);return(0,v.jsxs)(u.Fragment,{children:[(0,v.jsx)("textarea",(0,a.Z)({value:Z,onChange:function(e){k.current=0,x||N(),t&&t(e)},ref:A,rows:d,style:(0,a.Z)({height:F.outerHeightStyle,overflow:F.overflow?"hidden":null},s)},S)),(0,v.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:R,tabIndex:-1,style:(0,a.Z)({},w,s,{padding:0})})]})})),S=t(20627),x=t(76147),C=t(93840),A=t(52930),R=t(66934),k=t(31402),z=t(14036),E=t(42071),F=t(40162),B=t(25502),L=t(35470),M=t(55891),N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],P=function(e,n){var t=e.ownerState;return[n.root,t.formControl&&n.formControl,t.startAdornment&&n.adornedStart,t.endAdornment&&n.adornedEnd,t.error&&n.error,"small"===t.size&&n.sizeSmall,t.multiline&&n.multiline,t.color&&n["color".concat((0,z.Z)(t.color))],t.fullWidth&&n.fullWidth,t.hiddenLabel&&n.hiddenLabel]},W=function(e,n){var t=e.ownerState;return[n.input,"small"===t.size&&n.inputSizeSmall,t.multiline&&n.inputMultiline,"search"===t.type&&n.inputTypeSearch,t.startAdornment&&n.inputAdornedStart,t.endAdornment&&n.inputAdornedEnd,t.hiddenLabel&&n.inputHiddenLabel]},j=(0,R.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:P})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},n.typography.body1,(0,r.Z)({color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(M.Z.disabled),{color:(n.vars||n).palette.text.disabled,cursor:"default"}),t.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})})),H=(0,R.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:W})((function(e){var n,t=e.theme,o=e.ownerState,i="light"===t.palette.mode,l=(0,a.Z)({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),u={opacity:"0 !important"},d=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return(0,a.Z)((n={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,r.Z)(n,"label[data-shrink=false] + .".concat(M.Z.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d}),(0,r.Z)(n,"&.".concat(M.Z.disabled),{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled}),(0,r.Z)(n,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),n),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),I=(0,v.jsx)(B.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),O=u.forwardRef((function(e,n){var t,r=(0,k.Z)({props:e,name:"MuiInputBase"}),c=r["aria-describedby"],p=r.autoComplete,f=r.autoFocus,m=r.className,h=r.components,b=void 0===h?{}:h,y=r.componentsProps,w=void 0===y?{}:y,g=r.defaultValue,R=r.disabled,B=r.disableInjectingGlobalStyles,P=r.endAdornment,W=r.fullWidth,O=void 0!==W&&W,T=r.id,K=r.inputComponent,D=void 0===K?"input":K,V=r.inputProps,q=void 0===V?{}:V,G=r.inputRef,U=r.maxRows,_=r.minRows,J=r.multiline,Q=void 0!==J&&J,X=r.name,Y=r.onBlur,$=r.onChange,ee=r.onClick,ne=r.onFocus,te=r.onKeyDown,oe=r.onKeyUp,re=r.placeholder,ie=r.readOnly,ae=r.renderSuffix,le=r.rows,ue=r.slotProps,de=void 0===ue?{}:ue,se=r.slots,ce=void 0===se?{}:se,pe=r.startAdornment,fe=r.type,me=void 0===fe?"text":fe,he=r.value,ve=(0,i.Z)(r,N),be=null!=q.value?q.value:he,ye=u.useRef(null!=be).current,we=u.useRef(),ge=u.useCallback((function(e){0}),[]),Ze=(0,E.Z)(we,G,q.ref,ge),Se=u.useState(!1),xe=(0,o.Z)(Se,2),Ce=xe[0],Ae=xe[1],Re=(0,A.Z)();var ke=(0,x.Z)({props:r,muiFormControl:Re,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ke.focused=Re?Re.focused:Ce,u.useEffect((function(){!Re&&R&&Ce&&(Ae(!1),Y&&Y())}),[Re,R,Ce,Y]);var ze=Re&&Re.onFilled,Ee=Re&&Re.onEmpty,Fe=u.useCallback((function(e){(0,L.vd)(e)?ze&&ze():Ee&&Ee()}),[ze,Ee]);(0,F.Z)((function(){ye&&Fe({value:be})}),[be,Fe,ye]);u.useEffect((function(){Fe(we.current)}),[]);var Be=D,Le=q;Q&&"input"===Be&&(Le=le?(0,a.Z)({type:void 0,minRows:le,maxRows:le},Le):(0,a.Z)({type:void 0,maxRows:U,minRows:_},Le),Be=Z);u.useEffect((function(){Re&&Re.setAdornedStart(Boolean(pe))}),[Re,pe]);var Me=(0,a.Z)({},r,{color:ke.color||"primary",disabled:ke.disabled,endAdornment:P,error:ke.error,focused:ke.focused,formControl:Re,fullWidth:O,hiddenLabel:ke.hiddenLabel,multiline:Q,size:ke.size,startAdornment:pe,type:me}),Ne=function(e){var n=e.classes,t=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,u=e.fullWidth,d=e.hiddenLabel,c=e.multiline,p=e.readOnly,f=e.size,m=e.startAdornment,h=e.type,v={root:["root","color".concat((0,z.Z)(t)),o&&"disabled",r&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===f&&"sizeSmall",c&&"multiline",m&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel",p&&"readOnly"],input:["input",o&&"disabled","search"===h&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",i&&"inputAdornedEnd",p&&"readOnly"]};return(0,s.Z)(v,M.u,n)}(Me),Pe=ce.root||b.Root||j,We=de.root||w.root||{},je=ce.input||b.Input||H;return Le=(0,a.Z)({},Le,null!=(t=de.input)?t:w.input),(0,v.jsxs)(u.Fragment,{children:[!B&&I,(0,v.jsxs)(Pe,(0,a.Z)({},We,!(0,S.Z)(Pe)&&{ownerState:(0,a.Z)({},Me,We.ownerState)},{ref:n,onClick:function(e){we.current&&e.currentTarget===e.target&&we.current.focus(),ee&&ee(e)}},ve,{className:(0,d.Z)(Ne.root,We.className,m),children:[pe,(0,v.jsx)(C.Z.Provider,{value:null,children:(0,v.jsx)(je,(0,a.Z)({ownerState:Me,"aria-invalid":ke.error,"aria-describedby":c,autoComplete:p,autoFocus:f,defaultValue:g,disabled:ke.disabled,id:T,onAnimationStart:function(e){Fe("mui-auto-fill-cancel"===e.animationName?we.current:{value:"x"})},name:X,placeholder:re,readOnly:ie,required:ke.required,rows:le,value:be,onKeyDown:te,onKeyUp:oe,type:me},Le,!(0,S.Z)(je)&&{as:Be,ownerState:(0,a.Z)({},Me,Le.ownerState)},{ref:Ze,className:(0,d.Z)(Ne.input,Le.className),onBlur:function(e){Y&&Y(e),q.onBlur&&q.onBlur(e),Re&&Re.onBlur?Re.onBlur(e):Ae(!1)},onChange:function(e){if(!ye){var n=e.target||we.current;if(null==n)throw new Error((0,l.Z)(1));Fe({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];q.onChange&&q.onChange.apply(q,[e].concat(o)),$&&$.apply(void 0,[e].concat(o))},onFocus:function(e){ke.disabled?e.stopPropagation():(ne&&ne(e),q.onFocus&&q.onFocus(e),Re&&Re.onFocus?Re.onFocus(e):Ae(!0))}}))}),P,ae?ae((0,a.Z)({},ke,{startAdornment:pe})):null]}))]})})),T=O},55891:function(e,n,t){t.d(n,{u:function(){return i}});var o=t(75878),r=t(21217);function i(e){return(0,r.Z)("MuiInputBase",e)}var a=(0,o.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);n.Z=a},35470:function(e,n,t){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}t.d(n,{B7:function(){return i},vd:function(){return r}})}}]);
//# sourceMappingURL=834.ee18ca81.chunk.js.map