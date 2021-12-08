"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56250],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},32005:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",original_id:"cookbooks-bookkeepermetadata"},p=void 0,c={unversionedId:"cookbooks-bookkeepermetadata",id:"version-2.7.3/cookbooks-bookkeepermetadata",isDocsHomePage:!1,title:"BookKeeper Ledger Metadata",description:"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger.",source:"@site/versioned_docs/version-2.7.3/cookbooks-bookkeepermetadata.md",sourceDirName:".",slug:"/cookbooks-bookkeepermetadata",permalink:"/docs/2.7.3/cookbooks-bookkeepermetadata",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.3/cookbooks-bookkeepermetadata.md",tags:[],version:"2.7.3",frontMatter:{id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",original_id:"cookbooks-bookkeepermetadata"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Message queue",permalink:"/docs/2.7.3/cookbooks-message-queue"},next:{title:"Simulation tools",permalink:"/docs/2.7.3/develop-tools"}},d=[],u={toc:d};function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger.\nSuch metadata are stored on ZooKeeper and they are readable using BookKeeper APIs."),(0,o.kt)("p",null,"Description of current metadata:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Metadata name"),(0,o.kt)("th",{parentName:"tr",align:null},"Metadata value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"application"),(0,o.kt)("td",{parentName:"tr",align:null},"'pulsar'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"component"),(0,o.kt)("td",{parentName:"tr",align:null},"'managed-ledger', 'schema', 'compacted-topic'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Managed ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/managed-ledger"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the ledger")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/cursor"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the cursor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTopic"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the original topic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTo"),(0,o.kt)("td",{parentName:"tr",align:null},"id of the last compacted message")))))}s.isMDXComponent=!0}}]);