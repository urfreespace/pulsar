"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86260],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),l=a(72389),i=a(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(89521),u=a(86010),c="tabItem_vU9c";function p(e){var t,a,n,l=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),N=g.tabGroupChoices,y=g.setTabGroupChoices,P=(0,r.useState)(b),w=P[0],T=P[1],C=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=N[d];null!=S&&S!==w&&v.some((function(e){return e.value===S}))&&T(S)}var x=function(e){var t=e.currentTarget,a=C.indexOf(t),n=v[a].value;n!==w&&(I(t),T(n),null!=d&&y(d,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:x,onClick:x},null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},85669:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(26396),o=a(58215),s=["components"],u={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},c=void 0,p={unversionedId:"admin-api-overview",id:"version-2.7.1/admin-api-overview",isDocsHomePage:!1,title:"The Pulsar admin interface",description:"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.",source:"@site/versioned_docs/version-2.7.1/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/2.7.1/admin-api-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.1/admin-api-overview.md",tags:[],version:"2.7.1",frontMatter:{id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},sidebar:"version-2.7.1/docsSidebar",previous:{title:"C#",permalink:"/docs/2.7.1/client-libraries-dotnet"},next:{title:"Clusters",permalink:"/docs/2.7.1/admin-api-clusters"}},m=[{value:"Admin setup",id:"admin-setup",children:[],level:2},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",children:[],level:2}],d={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#instance"},"instance"),", such as ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#tenant"},"tenants"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#topic"},"topics"),", and ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#namespace"},"namespaces"),"."),(0,l.kt)("p",null,"You can currently interact with the admin interface via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Making HTTP calls against the admin ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API provided by Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#broker"},"brokers"),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"},(0,l.kt)("inlineCode",{parentName:"a"},"307 Temporary Redirect")),", hence the HTTP callers should handle ",(0,l.kt)("inlineCode",{parentName:"p"},"307 Temporary Redirect"),". If you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"curl"),", you should specify ",(0,l.kt)("inlineCode",{parentName:"p"},"-L"),"\nto handle redirections.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, which is available in the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," folder of your ",(0,l.kt)("a",{parentName:"p",href:"getting-started-standalone"},"Pulsar installation"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin\n\n")),(0,l.kt)("p",{parentName:"li"},"For the complete commands and descriptions of ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.7.0-SNAPSHOT/"},"here"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A Java client interface."))),(0,l.kt)("blockquote",null,(0,l.kt)("h4",{parentName:"blockquote",id:"the-rest-api-is-the-admin-interface"},"The REST API is the admin interface"),(0,l.kt)("p",{parentName:"blockquote"},"Under the hood, both the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here.")),(0,l.kt)("p",null,"In this document, examples from each of the three available interfaces will be shown."),(0,l.kt)("h2",{id:"admin-setup"},"Admin setup"),(0,l.kt)("p",null,"Each of Pulsar's three admin interfaces---the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool, the ",(0,l.kt)("a",{parentName:"p",href:"/api/admin/2.7.0-SNAPSHOT"},"Java admin API"),", and the ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API ---requires some special setup if you have ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/security-overview#authentication-providers"},"authentication")," enabled in your Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#instance"},"instance"),"."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"If you have ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/security-overview#authentication-providers"},"authentication")," enabled, you will need to provide an auth configuration to use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool. By default, the configuration for the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is found in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-configuration#client"},(0,l.kt)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. Here are the available parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authPlugin"),(0,l.kt)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authParams"),(0,l.kt)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useTls"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"You can find documentation for the REST API exposed by Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#broker"},"brokers")," in this reference ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),".")),(0,l.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"To use the Java admin API, instantiate a ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, specifying a URL for a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.7.1/reference-terminology#broker"},"broker")," and a ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder"),". Here's a minimal example using ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')),(0,l.kt)("p",null,"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')))),(0,l.kt)("h2",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,l.kt)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,l.kt)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Truncate to 63 characters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Underscores (_)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Dots (.) ")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,l.kt)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#configure-kubernetes-runtime"},"here"),".")))))}h.isMDXComponent=!0}}]);