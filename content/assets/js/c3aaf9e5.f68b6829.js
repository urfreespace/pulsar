"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38391],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79136:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging",original_id:"cookbooks-non-persistent"},p=void 0,l={unversionedId:"cookbooks-non-persistent",id:"version-2.6.1/cookbooks-non-persistent",isDocsHomePage:!1,title:"Non-persistent messaging",description:"Non-persistent topics are Pulsar topics in which message data is never persistently stored and kept only in memory. This cookbook provides:",source:"@site/versioned_docs/version-2.6.1/cookbooks-non-persistent.md",sourceDirName:".",slug:"/cookbooks-non-persistent",permalink:"/docs/2.6.1/cookbooks-non-persistent",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.1/cookbooks-non-persistent.md",tags:[],version:"2.6.1",frontMatter:{id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging",original_id:"cookbooks-non-persistent"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Message deduplication",permalink:"/docs/2.6.1/cookbooks-deduplication"},next:{title:"Partitioned Topics",permalink:"/docs/2.6.1/cookbooks-partitioned"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Using",id:"using",children:[],level:2},{value:"Enabling",id:"enabling",children:[],level:2},{value:"Managing with cli",id:"managing-with-cli",children:[],level:2},{value:"Using with Pulsar clients",id:"using-with-pulsar-clients",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Non-persistent topics")," are Pulsar topics in which message data is ",(0,a.kt)("em",{parentName:"p"},"never")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/concepts-architecture-overview#persistent-storage"},"persistently stored")," and kept only in memory. This cookbook provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A basic ",(0,a.kt)("a",{parentName:"li",href:"#overview"},"conceptual overview")," of non-persistent topics"),(0,a.kt)("li",{parentName:"ul"},"Information about ",(0,a.kt)("a",{parentName:"li",href:"#configuration"},"configurable parameters")," related to non-persistent topics"),(0,a.kt)("li",{parentName:"ul"},"A guide to the ",(0,a.kt)("a",{parentName:"li",href:"#cli"},"CLI interface")," for managing non-persistent topics")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"By default, Pulsar persistently stores ",(0,a.kt)("em",{parentName:"p"},"all")," unacknowledged messages on multiple ",(0,a.kt)("a",{parentName:"p",href:"#persistent-storage"},"BookKeeper")," bookies (storage nodes). Data for messages on persistent topics can thus survive broker restarts and subscriber failover."),(0,a.kt)("p",null,"Pulsar also, however, supports ",(0,a.kt)("strong",{parentName:"p"},"non-persistent topics"),", which are topics on which messages are ",(0,a.kt)("em",{parentName:"p"},"never")," persisted to disk and live only in memory. When using non-persistent delivery, killing a Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-terminology#broker"},"broker")," or disconnecting a subscriber to a topic means that all in-transit messages are lost on that (non-persistent) topic, meaning that clients may see message loss."),(0,a.kt)("p",null,"Non-persistent topics have names of this form (note the ",(0,a.kt)("inlineCode",{parentName:"p"},"non-persistent")," in the name):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"\nnon-persistent://tenant/namespace/topic\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more high-level information about non-persistent topics, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/concepts-messaging#non-persistent-topics"},"Concepts and Architecture")," documentation.")),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to use non-persistent topics, they must be ",(0,a.kt)("a",{parentName:"p",href:"#enabling"},"enabled")," in your Pulsar broker configuration.")),(0,a.kt)("p",null,"In order to use non-persistent topics, you only need to differentiate them by name when interacting with them. This ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools#pulsar-client-produce"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-client produce"))," command, for example, would produce one message on a non-persistent topic in a standalone cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce non-persistent://public/default/example-np-topic \\\n  --num-produce 1 \\\n  --messages "This message will be stored only in memory"\n\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For a more thorough guide to non-persistent topics from an administrative perspective, see the ",(0,a.kt)("a",{parentName:"p",href:"admin-api-non-persistent-topics"},"Non-persistent topics")," guide.")),(0,a.kt)("h2",{id:"enabling"},"Enabling"),(0,a.kt)("p",null,"In order to enable non-persistent topics in a Pulsar broker, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-configuration#broker-enableNonPersistentTopics"},(0,a.kt)("inlineCode",{parentName:"a"},"enableNonPersistentTopics"))," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This is the default, and so you won't need to take any action to enable non-persistent messaging."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"configuration-for-standalone-mode"},"Configuration for standalone mode"),(0,a.kt)("p",{parentName:"blockquote"},"If you're running Pulsar in standalone mode, the same configurable parameters are available but in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-configuration#standalone"},(0,a.kt)("inlineCode",{parentName:"a"},"standalone.conf"))," configuration file. ")),(0,a.kt)("p",null,"If you'd like to enable ",(0,a.kt)("em",{parentName:"p"},"only")," non-persistent topics in a broker, you can set the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-configuration#broker-enablePersistentTopics"},(0,a.kt)("inlineCode",{parentName:"a"},"enablePersistentTopics"))," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableNonPersistentTopics")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"managing-with-cli"},"Managing with cli"),(0,a.kt)("p",null,"Non-persistent topics can be managed using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/pulsar-admin#non-persistent"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-admin non-persistent"))," command-line interface. With that interface you can perform actions like ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/pulsar-admin#non-persistent-create-partitioned-topic"},"create a partitioned non-persistent topic"),", get ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/pulsar-admin#non-persistent-stats"},"stats")," for a non-persistent topic, ",(0,a.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},"list")," non-persistent topics under a namespace, and more."),(0,a.kt)("h2",{id:"using-with-pulsar-clients"},"Using with Pulsar clients"),(0,a.kt)("p",null,"You shouldn't need to make any changes to your Pulsar clients to use non-persistent messaging beyond making sure that you use proper ",(0,a.kt)("a",{parentName:"p",href:"#using"},"topic names")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"non-persistent")," as the topic type."))}m.isMDXComponent=!0}}]);