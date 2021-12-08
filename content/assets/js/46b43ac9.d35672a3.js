"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35256],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},s=void 0,u={unversionedId:"admin-api-overview",id:"version-2.4.0/admin-api-overview",isDocsHomePage:!1,title:"The Pulsar admin interface",description:"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.",source:"@site/versioned_docs/version-2.4.0/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/2.4.0/admin-api-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.0/admin-api-overview.md",tags:[],version:"2.4.0",frontMatter:{id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"WebSocket",permalink:"/docs/2.4.0/client-libraries-websocket"},next:{title:"Clusters",permalink:"/docs/2.4.0/admin-api-clusters"}},p=[{value:"Admin setup",id:"admin-setup",children:[{value:"pulsar-admin",id:"pulsar-admin",children:[],level:3},{value:"REST API",id:"rest-api",children:[],level:3},{value:"Java admin client",id:"java-admin-client",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#instance"},"instance"),", such as ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#tenant"},"tenants"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#topic"},"topics"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#namespace"},"namespaces"),"."),(0,i.kt)("p",null,"You can currently interact with the admin interface via:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Making HTTP calls against the admin ",(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API provided by Pulsar ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.4.0/reference-terminology#broker"},"brokers"),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"},(0,i.kt)("inlineCode",{parentName:"a"},"307 Temporary Redirect")),", hence the HTTP callers should handle ",(0,i.kt)("inlineCode",{parentName:"li"},"307 Temporary Redirect"),". If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),", you should specify ",(0,i.kt)("inlineCode",{parentName:"li"},"-L"),"\nto handle redirections."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin")," CLI tool, which is available in the ",(0,i.kt)("inlineCode",{parentName:"li"},"bin")," folder of your ",(0,i.kt)("a",{parentName:"li",href:"getting-started-standalone"},"Pulsar installation"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin\n\n")),(0,i.kt)("p",null,"Full documentation for this tool can be found in the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},"Pulsar command-line tools")," doc."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Java client interface.")),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"the-rest-api-is-the-admin-interface"},"The REST API is the admin interface"),(0,i.kt)("p",{parentName:"blockquote"},"Under the hood, both the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here.")),(0,i.kt)("p",null,"In this document, examples from each of the three available interfaces will be shown."),(0,i.kt)("h2",{id:"admin-setup"},"Admin setup"),(0,i.kt)("p",null,"Each of Pulsar's three admin interfaces---the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool, the ",(0,i.kt)("a",{parentName:"p",href:"/api/admin/2.4.0"},"Java admin API"),", and the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API ---requires some special setup if you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/security-overview#authentication-providers"},"authentication")," enabled in your Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#instance"},"instance"),"."),(0,i.kt)("h3",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("p",null,"If you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/security-overview#authentication-providers"},"authentication")," enabled, you will need to provide an auth configuration to use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool. By default, the configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#client"},(0,i.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. Here are the available parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authPlugin"),(0,i.kt)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authParams"),(0,i.kt)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"useTls"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,i.kt)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,i.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"You can find documentation for the REST API exposed by Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#broker"},"brokers")," in this reference ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),"."),(0,i.kt)("h3",{id:"java-admin-client"},"Java admin client"),(0,i.kt)("p",null,"To use the Java admin API, instantiate a ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, specifying a URL for a Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#broker"},"broker")," and a ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/ClientConfiguration"},"ClientConfiguration"),". Here's a minimal example using ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nURL url = new URL("http://localhost:8080");\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass"; \n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\n\nClientConfiguration config = new ClientConfiguration();\nconfig.setAuthentication(authPluginClassName, authParams);\nconfig.setUseTls(useTls);\nconfig.setTlsAllowInsecureConnection(tlsAllowInsecureConnection);\nconfig.setTlsTrustCertsFilePath(tlsTrustCertsFilePath);\n\nPulsarAdmin admin = new PulsarAdmin(url, config);\n\n')),(0,i.kt)("p",null,"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nURL url = new URL("http://localhost:8080,localhost:8081,localhost:8082");\n// Pass auth-plugin class fully-qualified name if Pulsar-security is enabled.\nString authPluginClassName = "com.org.MyAuthPluginClass"; \n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\n\nClientConfiguration config = new ClientConfiguration();\nconfig.setAuthentication(authPluginClassName, authParams);\nconfig.setUseTls(useTls);\nconfig.setTlsAllowInsecureConnection(tlsAllowInsecureConnection);\nconfig.setTlsTrustCertsFilePath(tlsTrustCertsFilePath);\n\nPulsarAdmin admin = new PulsarAdmin(url, config);\n\n')))}m.isMDXComponent=!0}}]);