"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[64045],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),i=n(67294),s=n(72389),a=n(79443);var o=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),u=n(86010),c="tabItem_vU9c";function p(e){var t,n,r,s=e.lazy,a=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),k=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,i.useState)(g),S=w[0],N=w[1],P=[],q=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=k[m];null!=_&&_!==S&&v.some((function(e){return e.value===_}))&&N(_)}var E=function(e){var t=e.currentTarget,n=P.indexOf(t),r=v[n].value;r!==S&&(q(t),N(r),null!=m&&T(m,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;n=P[r]||P[0];break;case"ArrowLeft":var i=P.indexOf(e.currentTarget)-1;n=P[i]||P[P.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},h)},v.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":S===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:O,onFocus:E,onClick:E},null!=n?n:t)}))),s?(0,i.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,s.Z)();return i.createElement(p,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a=(n(26396),n(58215),["components"]),o={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},l=void 0,u={unversionedId:"sql-rest-api",id:"version-2.7.0/sql-rest-api",isDocsHomePage:!1,title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Presto REST API v1.",source:"@site/versioned_docs/version-2.7.0/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/docs/2.7.0/sql-rest-api",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.0/sql-rest-api.md",tags:[],version:"2.7.0",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Configuration and deployment",permalink:"/docs/2.7.0/sql-deployment-configurations"},next:{title:"Overview",permalink:"/docs/2.7.0/tiered-storage-overview"}},c=[{value:"Request for Presto services",id:"request-for-presto-services",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section lists resources that make up the Presto REST API v1. "),(0,s.kt)("h2",{id:"request-for-presto-services"},"Request for Presto services"),(0,s.kt)("p",null,"All requests for Presto services should use Presto REST API v1 version. "),(0,s.kt)("p",null,"To request services, use explicit URL ",(0,s.kt)("inlineCode",{parentName:"p"},"http://presto.service:8081/v1"),". You need to update ",(0,s.kt)("inlineCode",{parentName:"p"},"presto.service:8081")," with your real Presto address before sending requests."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,s.kt)("inlineCode",{parentName:"p"},"X-Presto-User")," header. If you use authentication, you must use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,s.kt)("inlineCode",{parentName:"p"},"username"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"\nX-Presto-User: username\n\n")),(0,s.kt)("p",null,"For more information about headers, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/trinodb/trino"},"PrestoHeaders"),"."),(0,s.kt)("h2",{id:"schema"},"Schema"),(0,s.kt)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,s.kt)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,s.kt)("p",null,"The following is an example of ",(0,s.kt)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,s.kt)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,s.kt)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,s.kt)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'\n\u279c  ~ curl --header "X-Presto-User: test-user" --request POST --data \'show catalogs\' http://localhost:8081/v1/statement\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes."))),(0,s.kt)("p",null,"For more information about Presto REST API, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prestosql/presto/wiki/HTTP-Protocol"},"Presto HTTP Protocol"),"."))}d.isMDXComponent=!0}}]);