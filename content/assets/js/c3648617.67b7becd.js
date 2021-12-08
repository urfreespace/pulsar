"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2287],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50398:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"},s=void 0,u={unversionedId:"helm-overview",id:"version-2.5.0/helm-overview",isDocsHomePage:!1,title:"Apache Pulsar Helm Chart",description:"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's Helm Chart.",source:"@site/versioned_docs/version-2.5.0/helm-overview.md",sourceDirName:".",slug:"/helm-overview",permalink:"/docs/2.5.0/helm-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.0/helm-overview.md",tags:[],version:"2.5.0",frontMatter:{id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"},sidebar:"version-2.5.0/docsSidebar",previous:{title:"REST APIs",permalink:"/docs/2.5.0/sql-rest-api"},next:{title:"Prepare",permalink:"/docs/2.5.0/helm-prepare"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Pulsar Helm chart quick start",id:"pulsar-helm-chart-quick-start",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Upgrading",id:"upgrading",children:[],level:2},{value:"Uninstall",id:"uninstall",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamnative/charts"},"Helm Chart"),"."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The Apache Pulsar Helm chart is one of the most convenient ways\nto operate Pulsar on Kubernetes. This chart contains all the required components to get started and can scale to large deployments."),(0,l.kt)("p",null,"This chart includes all the components for a complete experience, but each part can be configured to install separately."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pulsar core components:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZooKeeper"),(0,l.kt)("li",{parentName:"ul"},"Bookies"),(0,l.kt)("li",{parentName:"ul"},"Brokers"),(0,l.kt)("li",{parentName:"ul"},"Function workers"),(0,l.kt)("li",{parentName:"ul"},"Proxies"))),(0,l.kt)("li",{parentName:"ul"},"Control Center:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pulsar Manager"),(0,l.kt)("li",{parentName:"ul"},"Prometheus"),(0,l.kt)("li",{parentName:"ul"},"Grafana"),(0,l.kt)("li",{parentName:"ul"},"Alert Manager")))),(0,l.kt)("p",null,"It includes support for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Security",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automatically provisioned TLS certs, using ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetstack.io/"},"Jetstack"),"'s ",(0,l.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/"},"cert-manager"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"self-signed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt")))),(0,l.kt)("li",{parentName:"ul"},"TLS Encryption",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Proxy"),(0,l.kt)("li",{parentName:"ul"},"Broker"),(0,l.kt)("li",{parentName:"ul"},"Toolset"),(0,l.kt)("li",{parentName:"ul"},"Bookie"),(0,l.kt)("li",{parentName:"ul"},"ZooKeeper"))),(0,l.kt)("li",{parentName:"ul"},"Authentication",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JWT"))),(0,l.kt)("li",{parentName:"ul"},"Authorization"))),(0,l.kt)("li",{parentName:"ul"},"Storage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Non-persistence storage"),(0,l.kt)("li",{parentName:"ul"},"Persistence Volume"),(0,l.kt)("li",{parentName:"ul"},"Local Persistent Volumes"))),(0,l.kt)("li",{parentName:"ul"},"Functions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes Runtime"),(0,l.kt)("li",{parentName:"ul"},"Process Runtime"),(0,l.kt)("li",{parentName:"ul"},"Thread Runtime"))),(0,l.kt)("li",{parentName:"ul"},"Operations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Independent Image Versions for all components, enabling controlled upgrades")))),(0,l.kt)("h2",{id:"pulsar-helm-chart-quick-start"},"Pulsar Helm chart quick start"),(0,l.kt)("p",null,"For those looking to get up and running with these charts as fast\nas possible, in a ",(0,l.kt)("strong",{parentName:"p"},"non-production")," use case, we provide\na ",(0,l.kt)("a",{parentName:"p",href:"getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,l.kt)("p",null,"This guide walks the user through deploying these charts with default\nvalues & features, but ",(0,l.kt)("em",{parentName:"p"},"does not")," meet production ready requirements.\nIf you wish to deploy these charts into production under sustained load,\nyou should follow the complete ",(0,l.kt)("a",{parentName:"p",href:"helm-install"},"Installation Guide"),"."),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"We've done our best to make these charts as seamless as possible,\noccasionally troubles do surface outside of our control. We've collected\ntips and tricks for troubleshooting common issues. Please examine these first before raising an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/new/choose"},"issue"),", and feel free to add to them by raising a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare"},"Pull Request"),"!"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"The Apache Pulsar Helm chart contains all required dependencies."),(0,l.kt)("p",null,"If you are just looking to deploy a Proof of Concept for testing,\nwe strongly suggest you follow our ",(0,l.kt)("a",{parentName:"p",href:"getting-started-helm"},"Quick Start Guide")," for your first iteration."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"helm-prepare"},"Preparation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"helm-deploy"},"Deployment"))),(0,l.kt)("h2",{id:"upgrading"},"Upgrading"),(0,l.kt)("p",null,"Once your Pulsar Chart is installed, configuration changes and chart\nupdates should be done using ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> charts/pulsar -f pulsar.yaml\n\n")),(0,l.kt)("p",null,"For more detailed information, see ",(0,l.kt)("a",{parentName:"p",href:"helm-upgrade"},"Upgrading"),"."),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"To uninstall the Pulsar Chart, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm delete <pulsar-release-name>\n\n")),(0,l.kt)("p",null,"For the purposes of continuity, these charts have some Kubernetes objects that are not removed when performing ",(0,l.kt)("inlineCode",{parentName:"p"},"helm delete"),".\nThese items we require you to ",(0,l.kt)("em",{parentName:"p"},"consciously")," remove them, as they affect re-deployment should you choose to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PVCs for stateful data, which you must ",(0,l.kt)("em",{parentName:"li"},"consciously")," remove",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZooKeeper: This is your metadata."),(0,l.kt)("li",{parentName:"ul"},"BookKeeper: This is your data."),(0,l.kt)("li",{parentName:"ul"},"Prometheus: This is your metrics data, which can be safely removed."))),(0,l.kt)("li",{parentName:"ul"},"Secrets, if generated by our ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare release script"),". They contain secret keys, tokens, etc. You can use ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh"},"cleanup release script")," to remove these secrets and tokens as needed.")))}m.isMDXComponent=!0}}]);