"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39895],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"io-mongo-sink",title:"MongoDB sink connector",sidebar_label:"MongoDB sink connector",original_id:"io-mongo-sink"},c=void 0,p={unversionedId:"io-mongo-sink",id:"version-2.7.3/io-mongo-sink",isDocsHomePage:!1,title:"MongoDB sink connector",description:"The MongoDB sink connector pulls messages from Pulsar topics",source:"@site/versioned_docs/version-2.7.3/io-mongo-sink.md",sourceDirName:".",slug:"/io-mongo-sink",permalink:"/docs/2.7.3/io-mongo-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.3/io-mongo-sink.md",tags:[],version:"2.7.3",frontMatter:{id:"io-mongo-sink",title:"MongoDB sink connector",sidebar_label:"MongoDB sink connector",original_id:"io-mongo-sink"}},s=[{value:"Configuration",id:"configuration",children:[{value:"Property",id:"property",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The MongoDB sink connector pulls messages from Pulsar topics\nand persists the messages to collections."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The configuration of the MongoDB sink connector has the following properties."),(0,o.kt)("h3",{id:"property"},"Property"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mongoUri")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,o.kt)("td",{parentName:"tr",align:null},"The MongoDB URI to which the connector connects. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"For more information, see ",(0,o.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"connection string URI format"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"database")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,o.kt)("td",{parentName:"tr",align:null},"The database name to which the collection belongs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"collection")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,o.kt)("td",{parentName:"tr",align:null},"The collection name to which the connector writes messages.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},"The batch size of writing messages to collections.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"The batch operation interval in milliseconds.")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Before using the Mongo sink connector, you need to create a configuration file through one of the following methods."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JSON"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "mongoUri": "mongodb://localhost:27017",\n    "database": "pulsar",\n    "collection": "messages",\n    "batchSize": "2",\n    "batchTimeMs": "500"\n}\n\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"YAML"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'\n{\n    mongoUri: "mongodb://localhost:27017"\n    database: "pulsar"\n    collection: "messages"\n    batchSize: 2\n    batchTimeMs: 500\n}\n\n')))))}u.isMDXComponent=!0}}]);