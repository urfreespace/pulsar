"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63263],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69683:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},p=void 0,s={unversionedId:"helm-upgrade",id:"version-2.5.0/helm-upgrade",isDocsHomePage:!1,title:"Upgrade a Pulsar Helm release",description:"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade",source:"@site/versioned_docs/version-2.5.0/helm-upgrade.md",sourceDirName:".",slug:"/helm-upgrade",permalink:"/docs/2.5.0/helm-upgrade",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.0/helm-upgrade.md",tags:[],version:"2.5.0",frontMatter:{id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},sidebar:"version-2.5.0/docsSidebar",previous:{title:"Deployment",permalink:"/docs/2.5.0/helm-deploy"},next:{title:"Required Tools",permalink:"/docs/2.5.0/helm-tools"}},u=[{value:"Steps",id:"steps",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade\nto and look for any release notes that might pertain to the new Pulsar chart version."),(0,o.kt)("p",null,"We also recommend that you need to provide all values using ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade --set key=value")," syntax or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f values.yml")," instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"--reuse-values")," because some of the current values might be deprecated."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),":"),(0,o.kt)("p",{parentName:"blockquote"},"You can retrieve your previous ",(0,o.kt)("inlineCode",{parentName:"p"},"--set")," arguments cleanly, with ",(0,o.kt)("inlineCode",{parentName:"p"},"helm get values <release-name>"),". If you direct this into a file (",(0,o.kt)("inlineCode",{parentName:"p"},"helm get values <release-name> > pulsar.yml"),"), you can safely\npass this file via ",(0,o.kt)("inlineCode",{parentName:"p"},"-f"),". Thus ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade <release-name> charts/pulsar -f pulsar.yaml"),". This safely replaces the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"--reuse-values"),".")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"The following are the steps to upgrade Apache Pulsar to a newer version:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the change log for the specific version you would like to upgrade to")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go through ",(0,o.kt)("a",{parentName:"p",href:"helm-deploy"},"deployment documentation")," step by step")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract your previous ",(0,o.kt)("inlineCode",{parentName:"p"},"--set")," arguments with"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm get values <release-name> > pulsar.yaml\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decide on all the values you need to set")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Perform the upgrade, with all ",(0,o.kt)("inlineCode",{parentName:"p"},"--set")," arguments extracted in step 4"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm upgrade <release-name> charts/pulsar \\\n    --version <new version> \\\n    -f pulsar.yaml \\\n    --set ...\n\n")))))}m.isMDXComponent=!0}}]);