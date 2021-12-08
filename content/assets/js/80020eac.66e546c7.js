"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62250],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(h,a(a({ref:e},p),{},{components:n})):r.createElement(h,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32869:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},u=void 0,s={unversionedId:"concepts-authentication",id:"version-2.6.1/concepts-authentication",isDocsHomePage:!1,title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants.",source:"@site/versioned_docs/version-2.6.1/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/docs/2.6.1/concepts-authentication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.1/concepts-authentication.md",tags:[],version:"2.6.1",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Multi Tenancy",permalink:"/docs/2.6.1/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/docs/2.6.1/concepts-topic-compaction"}},p=[],l={toc:p};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar supports a pluggable ",(0,i.kt)("a",{parentName:"p",href:"security-overview"},"authentication")," mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants."))}d.isMDXComponent=!0}}]);