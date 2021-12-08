"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94692],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(87462),o=t(67294),a=t(72389),i=t(79443);var u=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(89521),c=t(86010),s="tabItem_vU9c";function f(e){var n,t,r,a=e.lazy,i=e.block,f=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===f?f:null!=(n=null!=f?f:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),w=g.tabGroupChoices,O=g.setTabGroupChoices,E=(0,o.useState)(h),x=E[0],T=E[1],P=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var k=w[d];null!=k&&k!==x&&b.some((function(e){return e.value===k}))&&T(k)}var C=function(e){var n=e.currentTarget,t=P.indexOf(n),r=b[t].value;r!==x&&(j(n),T(r),null!=d&&O(d,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;t=P[o]||P[P.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},b.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":x===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=t?t:n)}))),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function p(e){var n=(0,a.Z)();return o.createElement(f,(0,r.Z)({key:String(n)},e))}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},20553:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),u={id:"functions-metrics",title:"Metrics for Pulsar Functions",sidebar_label:"Metrics",original_id:"functions-metrics"},l=void 0,c={unversionedId:"functions-metrics",id:"version-2.7.0/functions-metrics",isDocsHomePage:!1,title:"Metrics for Pulsar Functions",description:"",source:"@site/versioned_docs/version-2.7.0/functions-metrics.md",sourceDirName:".",slug:"/functions-metrics",permalink:"/docs/2.7.0/functions-metrics",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.0/functions-metrics.md",tags:[],version:"2.7.0",frontMatter:{id:"functions-metrics",title:"Metrics for Pulsar Functions",sidebar_label:"Metrics",original_id:"functions-metrics"}},s=[],f={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);