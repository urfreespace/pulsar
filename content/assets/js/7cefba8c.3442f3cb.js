"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17634],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},26396:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(87462),o=t(67294),a=t(72389),i=t(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),u=t(86010),c="tabItem_vU9c";function p(e){var r,t,n,a=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,h=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=d?d:y.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),v=(0,s.lx)(m,(function(e,r){return e.value===r.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(r=null!=p?p:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(n=y[0])?void 0:n.props.value;if(null!==b&&!m.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),x=k.tabGroupChoices,g=k.setTabGroupChoices,w=(0,o.useState)(b),P=w[0],N=w[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=x[f];null!=S&&S!==P&&m.some((function(e){return e.value===S}))&&N(S)}var L=function(e){var r=e.currentTarget,t=O.indexOf(r),n=m[t].value;n!==P&&(T(r),N(n),null!=f&&g(f,n))},U=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;t=O[o]||O[O.length-1]}null==(r=t)||r.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},h)},m.map((function(e){var r=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:P===r?0:-1,"aria-selected":P===r,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":P===r}),key:r,ref:function(e){return O.push(e)},onKeyDown:U,onFocus:L,onClick:L},null!=t?t:r)}))),a?(0,o.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==P})}))))}function d(e){var r=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(r)},e))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},21157:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(26396),t(58215),["components"]),l={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},s=void 0,u={unversionedId:"administration-proxy",id:"version-2.7.0/administration-proxy",isDocsHomePage:!1,title:"Pulsar proxy",description:"Pulsar proxy is an optional gateway. Pulsar proxy is used when direction connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.",source:"@site/versioned_docs/version-2.7.0/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/docs/2.7.0/administration-proxy",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.0/administration-proxy.md",tags:[],version:"2.7.0",frontMatter:{id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Load balance",permalink:"/docs/2.7.0/administration-load-balance"},next:{title:"Upgrade",permalink:"/docs/2.7.0/administration-upgrade"}},c=[{value:"Configure the proxy",id:"configure-the-proxy",children:[{value:"Use service discovery",id:"use-service-discovery",children:[],level:3},{value:"Use broker URLs",id:"use-broker-urls",children:[],level:3}],level:2},{value:"Start the proxy",id:"start-the-proxy",children:[],level:2},{value:"Stop the proxy",id:"stop-the-proxy",children:[],level:2},{value:"Proxy frontends",id:"proxy-frontends",children:[],level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",children:[],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar proxy is an optional gateway. Pulsar proxy is used when direction connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, you can run Pulsar proxy."),(0,a.kt)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,a.kt)("p",null,"Before using the proxy, you need to configure it with the brokers addresses in the cluster. You can configure the proxy to connect directly to service discovery, or specify a broker URL in the configuration. "),(0,a.kt)("h3",{id:"use-service-discovery"},"Use service discovery"),(0,a.kt)("p",null,"Pulsar uses ",(0,a.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nzookeeperServers=zk-0,zk-1,zk-2\nconfigurationStoreServers=zk-0:2184,zk-remote:2184\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,a.kt)("inlineCode",{parentName:"p"},"2181"),") and the configuration store client port (port ",(0,a.kt)("inlineCode",{parentName:"p"},"2184"),").")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper. ")),(0,a.kt)("h3",{id:"use-broker-urls"},"Use broker URLs"),(0,a.kt)("p",null,"It is more secure to specify a URL to connect to the brokers."),(0,a.kt)("p",null,"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."),(0,a.kt)("p",null,"You can configure the broker URLs in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n")),(0,a.kt)("p",null,"If you use TLS, configure the broker URLs in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n")),(0,a.kt)("p",null,"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."),(0,a.kt)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,a.kt)("p",null,"Note that if you do not use functions, you do not need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,a.kt)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,a.kt)("p",null,"To start the proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can run multiple instances of the Pulsar proxy in a cluster.")),(0,a.kt)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,a.kt)("p",null,"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."),(0,a.kt)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,a.kt)("p",null,"You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,a.kt)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,a.kt)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,a.kt)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, the connection URL for clients is ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,a.kt)("p",null,"For more information on Proxy configuration, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.7.0/reference-configuration#pulsar-proxy"},"Pulsar proxy"),"."))}d.isMDXComponent=!0}}]);