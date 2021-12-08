"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41620],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22246:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},l=void 0,u={unversionedId:"concepts-proxy-sni-routing",id:"version-2.7.3/concepts-proxy-sni-routing",isDocsHomePage:!1,title:"Proxy support with SNI routing",description:"Pulsar Proxy with SNI routing",source:"@site/versioned_docs/version-2.7.3/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/docs/2.7.3/concepts-proxy-sni-routing",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.3/concepts-proxy-sni-routing.md",tags:[],version:"2.7.3",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Topic Compaction",permalink:"/docs/2.7.3/concepts-topic-compaction"},next:{title:"Multiple advertised listeners",permalink:"/docs/2.7.3/concepts-multiple-advertised-listeners"}},p=[{value:"Pulsar Proxy with SNI routing",id:"pulsar-proxy-with-sni-routing",children:[{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",children:[{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",children:[],level:4},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",children:[],level:4},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",children:[],level:4}],level:3}],level:2}],c={toc:p};function d(e){var r=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pulsar-proxy-with-sni-routing"},"Pulsar Proxy with SNI routing"),(0,i.kt)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,i.kt)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,i.kt)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,i.kt)("p",null,"Pulsar clients support ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,i.kt)("h3",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,i.kt)("p",null,"To support ",(0,i.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,i.kt)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,i.kt)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection. "),(0,i.kt)("h4",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,i.kt)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar client SNI",src:t(18641).Z})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update TLS port (",(0,i.kt)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,i.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling. "),(0,i.kt)("li",{parentName:"ol"},"Configure server ports (",(0,i.kt)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,i.kt)("inlineCode",{parentName:"li"},"4443")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,i.kt)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,i.kt)("p",null,"The following is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/8.0.x/admin-guide/files/ssl_server_name.yaml.en.html"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,i.kt)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values. "),(0,i.kt)("p",null,"The following example shows mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where request should be redirected. For example, if the client sends the SNI header ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nserver_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n\n")),(0,i.kt)("p",null,"After you configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,i.kt)("h4",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,i.kt)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nString brokerServiceUrl = \u201cpulsar+ssl://pulsar-broker-vip:6651/\u201d;\nString proxyUrl = \u201cpulsar+ssl://ats-proxy:443\u201d;\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n\n')),(0,i.kt)("h4",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,i.kt)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar client SNI",src:t(43397).Z})),(0,i.kt)("p",null,"In this example, a Pulsar cluster is deployed into two separate regions, ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."),(0,i.kt)("p",null,"(a) Configure the cluster metadata for ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,i.kt)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n--url http://east-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://east-ats-proxy:443\n\n")),(0,i.kt)("p",null,"(b) Configure the cluster metadata for ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,i.kt)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n--url http://west-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://west-ats-proxy:443\n\n")))}d.isMDXComponent=!0},18641:function(e,r,t){r.Z=t.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},43397:function(e,r,t){r.Z=t.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);