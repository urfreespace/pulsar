"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96776],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(87462),n=a(67294),l=a(72389),s=a(79443);var u=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(89521),o=a(86010),p="tabItem_vU9c";function c(e){var t,a,r,l=e.lazy,s=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),N=g.tabGroupChoices,T=g.setTabGroupChoices,y=(0,n.useState)(b),x=y[0],A=y[1],P=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=N[d];null!=I&&I!==x&&f.some((function(e){return e.value===I}))&&A(I)}var w=function(e){var t=e.currentTarget,a=P.indexOf(t),r=f[a].value;r!==x&&(C(t),A(r),null!=d&&T(d,r))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;a=P[r]||P[0];break;case"ArrowLeft":var n=P.indexOf(e.currentTarget)-1;a=P[n]||P[P.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},f.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,o.Z)("tabs__item",p,{"tabs__item--active":x===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:w,onClick:w},null!=a?a:t)}))),l?(0,n.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},98639:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=a(26396),u=a(58215),i=["components"],o={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},p=void 0,c={unversionedId:"admin-api-clusters",id:"admin-api-clusters",isDocsHomePage:!1,title:"Managing Clusters",description:"Important",source:"@site/docs/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/next/admin-api-clusters",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/admin-api-clusters.md",tags:[],version:"current",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/next/admin-api-overview"},next:{title:"Tenants",permalink:"/docs/next/admin-api-tenants"}},m=[{value:"Clusters resources",id:"clusters-resources",children:[{value:"Provision",id:"provision",children:[],level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",children:[],level:3},{value:"Get configuration",id:"get-configuration",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3},{value:"List",id:"list",children:[],level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",children:[],level:3}],level:2}],d={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.8.0-SNAPSHOT/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#broker"},"brokers"),", one or more ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#bookie"},"bookies"),"), and a ",(0,l.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,l.kt)("p",null,"Clusters can be managed via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"clusters")," command of the ",(0,l.kt)("a",{parentName:"li",href:"%5Breference-pulsar-admin.md%5D(https://pulsar.apache.org/tools/pulsar-admin/)"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,l.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"li",href:"client-libraries-java"},"Java API"))),(0,l.kt)("h2",{id:"clusters-resources"},"Clusters resources"),(0,l.kt)("h3",{id:"provision"},"Provision"),(0,l.kt)("p",null,"New clusters can be provisioned using the admin interface."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note that this operation requires superuser privileges.")),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"You can provision a new cluster using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-create"},(0,l.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/createCluster?version=2.8.0&apiVersion=v2"},"PUT /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n")))),(0,l.kt)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,l.kt)("p",null,"When provision a new cluster, you need to initialize that cluster's ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The name of the cluster"),(0,l.kt)("li",{parentName:"ul"},"The local ZooKeeper connection string for the cluster"),(0,l.kt)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,l.kt)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,l.kt)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/reference-terminology#broker"},"brokers")," in the cluster")),(0,l.kt)("p",null,"You must initialize cluster metadata ",(0,l.kt)("em",{parentName:"p"},"before")," starting up any ",(0,l.kt)("a",{parentName:"p",href:"admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"No cluster metadata initialization through the REST API or the Java admin API")),(0,l.kt)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,l.kt)("p",null,"Here's an example cluster metadata initialization command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --zookeeper zk1.us-west.example.com:2181 \\\n  --configuration-store zk1.us-west.example.com:2184 \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,l.kt)("p",null,"You'll need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,l.kt)("a",{parentName:"p",href:"security-tls-authentication"},"TLS authentication")," in your instance."),(0,l.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,l.kt)("p",null,"You can fetch the ",(0,l.kt)("a",{parentName:"p",href:"reference-configuration"},"configuration")," for an existing cluster at any time."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-get"},(0,l.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n'))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getCluster?version=2.8.0&apiVersion=v2"},"GET /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getCluster(clusterName);\n\n")))),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"You can update the configuration for an existing cluster at any time."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-update"},(0,l.kt)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/updateCluster?version=2.8.0&apiVersion=v2"},"POST /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n")))),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Clusters can be deleted from a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-delete"},(0,l.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin clusters delete cluster-1\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/deleteCluster?version=2.8.0&apiVersion=v2"},"DELETE /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().deleteCluster(clusterName);\n\n")))),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-list"},(0,l.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getClusters?version=2.8.0&apiVersion=v2"},"GET /admin/v2/clusters"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getClusters();\n\n")))),(0,l.kt)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,l.kt)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/pulsar-admin#clusters-update-peer-clusters"},(0,l.kt)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/setPeerClusterNames?version=2.8.0&apiVersion=v2"},"POST /admin/v2/clusters/:cluster/peers"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n")))))}k.isMDXComponent=!0}}]);