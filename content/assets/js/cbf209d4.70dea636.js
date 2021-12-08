"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86042],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15408:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},s=void 0,u={unversionedId:"helm-install",id:"version-2.6.1/helm-install",isDocsHomePage:!1,title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/versioned_docs/version-2.6.1/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/docs/2.6.1/helm-install",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.1/helm-install.md",tags:[],version:"2.6.1",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Prepare",permalink:"/docs/2.6.1/helm-prepare"},next:{title:"Deployment",permalink:"/docs/2.6.1/helm-deploy"}},p=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Environment setup",id:"environment-setup",children:[{value:"Tools",id:"tools",children:[],level:3}],level:2},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",children:[],level:2},{value:"Pulsar deployment",id:"pulsar-deployment",children:[],level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,a.kt)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,a.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.6.1/helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"helm"))," and ",(0,a.kt)("a",{parentName:"p",href:"helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,a.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Kubernetes 1.14 or higher is required."))),(0,a.kt)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.6.1/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,a.kt)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,a.kt)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,a.kt)("a",{parentName:"p",href:"helm-deploy"},"deployment of Pulsar"),"."),(0,a.kt)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,a.kt)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,a.kt)("a",{parentName:"p",href:"helm-upgrade"},"upgrade documentation"),"."))}d.isMDXComponent=!0}}]);