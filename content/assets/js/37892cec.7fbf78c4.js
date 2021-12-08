"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99610],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],a={id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"},o=void 0,u={unversionedId:"concepts-multiple-advertised-listeners",id:"version-2.6.4/concepts-multiple-advertised-listeners",isDocsHomePage:!1,title:"Multiple advertised listeners",description:"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes.",source:"@site/versioned_docs/version-2.6.4/concepts-multiple-advertised-listeners.md",sourceDirName:".",slug:"/concepts-multiple-advertised-listeners",permalink:"/docs/2.6.4/concepts-multiple-advertised-listeners",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.4/concepts-multiple-advertised-listeners.md",tags:[],version:"2.6.4",frontMatter:{id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"}},c=[{value:"Advertised listeners",id:"advertised-listeners",children:[],level:2},{value:"Use multiple advertised listeners",id:"use-multiple-advertised-listeners",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes."),(0,s.kt)("h2",{id:"advertised-listeners"},"Advertised listeners"),(0,s.kt)("p",null,"To ensure clients in both internal and external networks can connect to a Pulsar cluster, Pulsar introduces ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," configuration options into the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-configuration#broker"},"broker configuration file")," to ensure that the broker supports exposing multiple advertised listeners and support the separation of internal and external network traffic."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is used to specify multiple advertised listeners. The broker uses the listener as the broker identifier in the load manager and the bundle owner data. The ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," is formatted as ",(0,s.kt)("inlineCode",{parentName:"p"},"<listener_name>:pulsar://<host>:<port>, <listener_name>:pulsar+ssl://<host>:<port>"),". You can set up the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners")," like\n",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners=internal:pulsar://192.168.1.11:6660,internal:pulsar+ssl://192.168.1.11:6651"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is used to specify the internal service URL that the broker uses. You can specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," by choosing one of the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),". The broker uses the listener name of the first advertised listener as the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," if the ",(0,s.kt)("inlineCode",{parentName:"p"},"internalListenerName")," is absent."))),(0,s.kt)("p",null,"After setting up the ",(0,s.kt)("inlineCode",{parentName:"p"},"advertisedListeners"),", clients can choose one of the listeners as the service URL to create a connection to the broker as long as the network is accessible. However, if the client creates producers or consumer on a topic, the client must send a lookup requests to the broker for getting the owner broker, then connect to the owner broker to publish messages or consume messages. Therefore, You must allow the client to get the corresponding service URL with the same advertised listener name as the one used by the client. This helps keep client-side simple and secure."),(0,s.kt)("h2",{id:"use-multiple-advertised-listeners"},"Use multiple advertised listeners"),(0,s.kt)("p",null,"This example shows how a Pulsar client uses multiple advertised listeners."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Configure multiple advertised listeners in the broker configuration file.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\nadvertisedListeners={listenerName}:pulsar://xxxx:6650,\n{listenerName}:pulsar+ssl://xxxx:6651\n\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Specify the listener name for the client.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://xxxx:6650")\n    .listenerName("external")\n    .build();\n\n')))}d.isMDXComponent=!0}}]);