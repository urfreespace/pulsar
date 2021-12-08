"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98317],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),s=n(72389),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_vU9c";function p(e){var t,n,a,s=e.lazy,o=e.block,p=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(b),x=N[0],P=N[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=k[h];null!=E&&E!==x&&y.some((function(e){return e.value===E}))&&P(E)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==x&&(T(t),P(a),null!=h&&w(h,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},m)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:C,onClick:C},null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},20007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=(n(26396),n(58215),["components"]),i={id:"schema-get-started",title:"Get started",sidebar_label:"Get started",original_id:"schema-get-started"},l=void 0,c={unversionedId:"schema-get-started",id:"version-2.7.0/schema-get-started",isDocsHomePage:!1,title:"Get started",description:"This chapter introduces Pulsar schemas and explains why they are important.",source:"@site/versioned_docs/version-2.7.0/schema-get-started.md",sourceDirName:".",slug:"/schema-get-started",permalink:"/docs/2.7.0/schema-get-started",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.0/schema-get-started.md",tags:[],version:"2.7.0",frontMatter:{id:"schema-get-started",title:"Get started",sidebar_label:"Get started",original_id:"schema-get-started"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Multiple advertised listeners",permalink:"/docs/2.7.0/concepts-multiple-advertised-listeners"},next:{title:"Understand schema",permalink:"/docs/2.7.0/schema-understand"}},u=[{value:"Schema Registry",id:"schema-registry",children:[{value:"Note",id:"note",children:[],level:4},{value:"Client-side approach",id:"client-side-approach",children:[],level:3},{value:"Server-side approach",id:"server-side-approach",children:[],level:3}],level:2},{value:"Why use schema",id:"why-use-schema",children:[{value:"Without schema",id:"without-schema",children:[],level:3},{value:"With schema",id:"with-schema",children:[],level:3},{value:"Summary",id:"summary",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This chapter introduces Pulsar schemas and explains why they are important. "),(0,s.kt)("h2",{id:"schema-registry"},"Schema Registry"),(0,s.kt)("p",null,"Type safety is extremely important in any application built around a message bus like Pulsar. "),(0,s.kt)("p",null,"Producers and consumers need some kind of mechanism for coordinating types at the topic level to avoid various potential problems arise. For example, serialization and deserialization issues. "),(0,s.kt)("p",null,"Applications typically adopt one of the following approaches to guarantee type safety in messaging. Both approaches are available in Pulsar, and you're free to adopt one or the other or to mix and match on a per-topic basis."),(0,s.kt)("h4",{id:"note"},"Note"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Currently, the Pulsar schema registry is only available for the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-java"},"Java client"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-cgo"},"CGo client"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-python"},"Python client"),", and ",(0,s.kt)("a",{parentName:"p",href:"client-libraries-cpp"},"C++ client"),".")),(0,s.kt)("h3",{id:"client-side-approach"},"Client-side approach"),(0,s.kt)("p",null,'Producers and consumers are responsible for not only serializing and deserializing messages (which consist of raw bytes) but also "knowing" which types are being transmitted via which topics. '),(0,s.kt)("p",null,"If a producer is sending temperature sensor data on the topic ",(0,s.kt)("inlineCode",{parentName:"p"},"topic-1"),", consumers of that topic will run into trouble if they attempt to parse that data as moisture sensor readings."),(0,s.kt)("p",null,'Producers and consumers can send and receive messages consisting of raw byte arrays and leave all type safety enforcement to the application on an "out-of-band" basis.'),(0,s.kt)("h3",{id:"server-side-approach"},"Server-side approach"),(0,s.kt)("p",null,"Producers and consumers inform the system which data types can be transmitted via the topic. "),(0,s.kt)("p",null,"With this approach, the messaging system enforces type safety and ensures that producers and consumers remain synced."),(0,s.kt)("p",null,"Pulsar has a built-in ",(0,s.kt)("strong",{parentName:"p"},"schema registry")," that enables clients to upload data schemas on a per-topic basis. Those schemas dictate which data types are recognized as valid for that topic."),(0,s.kt)("h2",{id:"why-use-schema"},"Why use schema"),(0,s.kt)("p",null,"When a schema is enabled, Pulsar does parse data, it takes bytes as inputs and sends bytes as outputs. While data has meaning beyond bytes, you need to parse data and might encounter parse exceptions which mainly occur in the following situations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The field does not exist")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The field type has changed (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," is changed to ",(0,s.kt)("inlineCode",{parentName:"p"},"int"),")"))),(0,s.kt)("p",null,"There are a few methods to prevent and overcome these exceptions, for example, you can catch exceptions when parsing errors, which makes code hard to maintain; or you can adopt a schema management system to perform schema evolution, not to break downstream applications, and enforces type safety to max extend in the language you are using, the solution is Pulsar Schema."),(0,s.kt)("p",null,"Pulsar schema enables you to use language-specific types of data when constructing and handling messages from simple types like ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," to more complex application-specific types. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")," "),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\npublic class User {\n    String name;\n    int age;\n}\n\n")),(0,s.kt)("p",null,"When constructing a producer with the ",(0,s.kt)("em",{parentName:"p"},"User")," class, you can specify a schema or not as below."),(0,s.kt)("h3",{id:"without-schema"},"Without schema"),(0,s.kt)("p",null,"If you construct a producer without specifying a schema, then the producer can only produce messages of type ",(0,s.kt)("inlineCode",{parentName:"p"},"byte[]"),". If you have a POJO class, you need to serialize the POJO into bytes before sending messages."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\nProducer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nbyte[] message = \u2026 // serialize the `user` by yourself;\nproducer.send(message);\n\n')),(0,s.kt)("h3",{id:"with-schema"},"With schema"),(0,s.kt)("p",null,"If you construct a producer with specifying a schema, then you can send a class to a topic directly without worrying about how to serialize POJOs into bytes. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"This example constructs a producer with the ",(0,s.kt)("em",{parentName:"p"},"JSONSchema"),", and you can send the ",(0,s.kt)("em",{parentName:"p"},"User")," class to topics directly without worrying about how to serialize it into bytes. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\nProducer<User> producer = client.newProducer(JSONSchema.of(User.class))\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nproducer.send(user);\n\n')),(0,s.kt)("h3",{id:"summary"},"Summary"),(0,s.kt)("p",null,"When constructing a producer with a schema, you do not need to serialize messages into bytes, instead Pulsar schema does this job in the background."))}d.isMDXComponent=!0}}]);