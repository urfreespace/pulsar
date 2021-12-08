"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22005],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22810:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication",original_id:"concepts-replication"},s=void 0,l={unversionedId:"concepts-replication",id:"version-2.6.1/concepts-replication",isDocsHomePage:!1,title:"Geo Replication",description:"Pulsar enables messages to be produced and consumed in different geo-locations. For instance, your application may be publishing data in one region or market and you would like to process it for consumption in other regions or markets. Geo-replication in Pulsar enables you to do that.",source:"@site/versioned_docs/version-2.6.1/concepts-replication.md",sourceDirName:".",slug:"/concepts-replication",permalink:"/docs/2.6.1/concepts-replication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.1/concepts-replication.md",tags:[],version:"2.6.1",frontMatter:{id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication",original_id:"concepts-replication"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Clients",permalink:"/docs/2.6.1/concepts-clients"},next:{title:"Multi Tenancy",permalink:"/docs/2.6.1/concepts-multi-tenancy"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar enables messages to be produced and consumed in different geo-locations. For instance, your application may be publishing data in one region or market and you would like to process it for consumption in other regions or markets. ",(0,i.kt)("a",{parentName:"p",href:"administration-geo"},"Geo-replication")," in Pulsar enables you to do that."))}d.isMDXComponent=!0}}]);