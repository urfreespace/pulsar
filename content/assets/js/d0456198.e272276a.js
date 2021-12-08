"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[47965],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"cookbooks-partitioned",title:"Partitioned topics",sidebar_label:"Partitioned Topics",original_id:"cookbooks-partitioned"},p=void 0,l={unversionedId:"cookbooks-partitioned",id:"version-2.6.2/cookbooks-partitioned",isDocsHomePage:!1,title:"Partitioned topics",description:"By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic's maximum throughput. Partitioned topics are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the Partitioned Topics concepts.",source:"@site/versioned_docs/version-2.6.2/cookbooks-partitioned.md",sourceDirName:".",slug:"/cookbooks-partitioned",permalink:"/docs/2.6.2/cookbooks-partitioned",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.2/cookbooks-partitioned.md",tags:[],version:"2.6.2",frontMatter:{id:"cookbooks-partitioned",title:"Partitioned topics",sidebar_label:"Partitioned Topics",original_id:"cookbooks-partitioned"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Non-persistent messaging",permalink:"/docs/2.6.2/cookbooks-non-persistent"},next:{title:"Message retention and expiry",permalink:"/docs/2.6.2/cookbooks-retention-expiry"}},c=[{value:"Publish to partitioned topics",id:"publish-to-partitioned-topics",children:[{value:"Routing mode",id:"routing-mode",children:[],level:3},{value:"Custom message router",id:"custom-message-router",children:[],level:3},{value:"How to choose partitions when using a key",id:"how-to-choose-partitions-when-using-a-key",children:[],level:3}],level:2},{value:"Manage partitioned topics",id:"manage-partitioned-topics",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic's maximum throughput. ",(0,i.kt)("em",{parentName:"p"},"Partitioned topics")," are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#partitioned-topics"},"Partitioned Topics")," concepts."),(0,i.kt)("p",null,"You can publish to partitioned topics using Pulsar client libraries and you can ",(0,i.kt)("a",{parentName:"p",href:"#managing-partitioned-topics"},"create and manage")," partitioned topics using Pulsar ",(0,i.kt)("a",{parentName:"p",href:"admin-api-overview"},"admin API"),"."),(0,i.kt)("h2",{id:"publish-to-partitioned-topics"},"Publish to partitioned topics"),(0,i.kt)("p",null,"When publishing to partitioned topics, you do not need to explicitly specify a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#routing-modes"},"routing mode")," when you create a new producer. If you do not specify a routing mode, the round robin route mode is used. Take ",(0,i.kt)("a",{parentName:"p",href:"#java"},"Java")," as an example."),(0,i.kt)("p",null,"Publishing messages to partitioned topics in the Java client works much like ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-java#using-producers"},"publishing to normal topics"),". The difference is that you need to specify either one of the currently available message routers or a custom router."),(0,i.kt)("h3",{id:"routing-mode"},"Routing mode"),(0,i.kt)("p",null,"You can specify the routing mode in the ProducerConfiguration object that you use to configure your producer. Three options are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SinglePartition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RoundRobinPartition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CustomPartition"))),(0,i.kt)("p",null,"The following is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRoutingMode(MessageRoutingMode.SinglePartition)\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n')),(0,i.kt)("h3",{id:"custom-message-router"},"Custom message router"),(0,i.kt)("p",null,"To use a custom message router, you need to provide an implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageRouter"},"MessageRouter")," interface, which has just one ",(0,i.kt)("inlineCode",{parentName:"p"},"choosePartition")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface MessageRouter extends Serializable {\n    int choosePartition(Message msg);\n}\n\n")),(0,i.kt)("p",null,"The following router routes every message to partition 10:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class AlwaysTenRouter implements MessageRouter {\n    public int choosePartition(Message msg) {\n        return 10;\n    }\n}\n\n")),(0,i.kt)("p",null,"With that implementation in hand, you can send"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-cluster-my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRouter(new AlwaysTenRouter())\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n')),(0,i.kt)("h3",{id:"how-to-choose-partitions-when-using-a-key"},"How to choose partitions when using a key"),(0,i.kt)("p",null,"If a message has a key, it supersedes the round robin routing policy. The following example illustrates how to choose partition when you use a key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n// If the message has a key, it supersedes the round robin routing policy\n        if (msg.hasKey()) {\n            return signSafeMod(hash.makeHash(msg.getKey()), topicMetadata.numPartitions());\n        }\n\n        if (isBatchingEnabled) { // if batching is enabled, choose partition on `partitionSwitchMs` boundary.\n            long currentMs = clock.millis();\n            return signSafeMod(currentMs / partitionSwitchMs + startPtnIdx, topicMetadata.numPartitions());\n        } else {\n            return signSafeMod(PARTITION_INDEX_UPDATER.getAndIncrement(this), topicMetadata.numPartitions());\n        }\n\n")),(0,i.kt)("h2",{id:"manage-partitioned-topics"},"Manage partitioned topics"),(0,i.kt)("p",null,"You can use Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.2/admin-api-overview"},"admin API")," to create and manage ",(0,i.kt)("a",{parentName:"p",href:"admin-api-partitioned-topics"},"partitioned topics"),"."))}d.isMDXComponent=!0}}]);