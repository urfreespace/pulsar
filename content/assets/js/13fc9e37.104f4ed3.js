"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76446],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(67294),o=t(72389),l=t(79443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(89521),u=t(86010),s="tabItem_vU9c";function d(e){var n,t,a,o=e.lazy,l=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:y.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),g=k.tabGroupChoices,C=k.setTabGroupChoices,N=(0,r.useState)(v),I=N[0],x=N[1],w=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var B=g[m];null!=B&&B!==I&&b.some((function(e){return e.value===B}))&&x(B)}var S=function(e){var n=e.currentTarget,t=w.indexOf(n),a=b[t].value;a!==I&&(P(n),x(a),null!=m&&C(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},b.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":I===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=t?t:n)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function p(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},63583:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=(t(26396),t(58215),["components"]),i={id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},c=void 0,u={unversionedId:"security-bouncy-castle",id:"version-2.7.0/security-bouncy-castle",isDocsHomePage:!1,title:"Bouncy Castle Providers",description:"BouncyCastle Introduce",source:"@site/versioned_docs/version-2.7.0/security-bouncy-castle.md",sourceDirName:".",slug:"/security-bouncy-castle",permalink:"/docs/2.7.0/security-bouncy-castle",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.7.0/security-bouncy-castle.md",tags:[],version:"2.7.0",frontMatter:{id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Extending",permalink:"/docs/2.7.0/security-extending"},next:{title:"Pulsar Perf",permalink:"/docs/2.7.0/performance-pulsar-perf"}},s=[{value:"BouncyCastle Introduce",id:"bouncycastle-introduce",children:[],level:2},{value:"How BouncyCastle modules packaged in Pulsar",id:"how-bouncycastle-modules-packaged-in-pulsar",children:[{value:"Include dependencies of BC-non-FIPS",id:"include-dependencies-of-bc-non-fips",children:[],level:3},{value:"Modules that include BC-non-FIPS module (<code>bouncy-castle-bc</code>)",id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc",children:[],level:3},{value:"Module BC-FIPS (<code>bouncy-castle-bcfips</code>)",id:"module-bc-fips-bouncy-castle-bcfips",children:[],level:3},{value:"Exclude BC-non-FIPS and include BC-FIPS",id:"exclude-bc-non-fips-and-include-bc-fips",children:[],level:3}],level:2}],d={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bouncycastle-introduce"},"BouncyCastle Introduce"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," is a Java library that complements the default Java Cryptographic Extension (JCE),\nand it provides more cipher suites and algorithms than the default JCE provided by Sun."),(0,o.kt)("p",null,"In addition to that, ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," has lots of utilities for reading arcane formats like PEM and ASN.1 that no sane person would want to rewrite themselves."),(0,o.kt)("p",null,"In Pulsar, security and crypto have dependencies on BouncyCastle Jars. For the detailed installing and configuring Bouncy Castle FIPS, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/documentation.html"},"BC FIPS Documentation"),", especially the ",(0,o.kt)("strong",{parentName:"p"},"User Guides")," and ",(0,o.kt)("strong",{parentName:"p"},"Security Policy")," PDFs."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," provides both ",(0,o.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/fips_faq.html"},"FIPS")," and non-FIPS version. But in a JVM, you can not include both of the 2 versions, and you need to exclude the current version before include the other."),(0,o.kt)("p",null,"In Pulsar, the security and crypto methods also depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle"),", especially in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7.0/security-tls-authentication"},"TLS Authentication")," and ",(0,o.kt)("a",{parentName:"p",href:"security-encryption"},"Transport Encryption"),". This document contains the configuration between BouncyCastle FIPS(BC-FIPS) and non-FIPS(BC-non-FIPS) version while using Pulsar."),(0,o.kt)("h2",{id:"how-bouncycastle-modules-packaged-in-pulsar"},"How BouncyCastle modules packaged in Pulsar"),(0,o.kt)("p",null,"In Pulsar's ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," module, We provide 2 sub modules: ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),"(for non-FIPS version) and ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),"(for FIPS version), to package BC jars together to make the include and exclude of ",(0,o.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," easier."),(0,o.kt)("p",null,"To achieve this goal, we will need to package several ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," jars together into ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," jar.\nEach of the original bouncy-castle jar is related with security, so BouncyCastle dutifully supplies signed of each JAR.\nBut when we do the re-package, Maven shade explodes the BouncyCastle jar file which puts the signatures into META-INF,\nthese signatures aren't valid for this new, uber-jar (signatures are only for the original BC jar).\nUsually, You will meet error like ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.SecurityException: Invalid signature file digest for Manifest main attributes"),"."),(0,o.kt)("p",null,"You could exclude these signatures in mvn pom file to avoid above error, by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-access",metastring:"transformers",transformers:!0},"\n<exclude>META-INF/*.SF</exclude>\n<exclude>META-INF/*.DSA</exclude>\n<exclude>META-INF/*.RSA</exclude>\n\n")),(0,o.kt)("p",null,"But it can also lead to new, cryptic errors, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"java.security.NoSuchAlgorithmException: PBEWithSHA256And256BitAES-CBC-BC SecretKeyFactory not available"),"\nBy explicitly specifying where to find the algorithm like this: ",(0,o.kt)("inlineCode",{parentName:"p"},'SecretKeyFactory.getInstance("PBEWithSHA256And256BitAES-CBC-BC","BC")'),"\nIt will get the real error: ",(0,o.kt)("inlineCode",{parentName:"p"},"java.security.NoSuchProviderException: JCE cannot authenticate the provider BC")),(0,o.kt)("p",null,"So, we used a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nthuemmel/executable-packer-maven-plugin"},"executable packer plugin")," that uses a jar-in-jar approach to preserve the BouncyCastle signature in a single, executable jar."),(0,o.kt)("h3",{id:"include-dependencies-of-bc-non-fips"},"Include dependencies of BC-non-FIPS"),(0,o.kt)("p",null,"Pulsar module ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", which defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bc/pom.xml")," contains the needed non-FIPS jars for Pulsar, and packaged as a jar-in-jar(need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"<classifier>pkg</classifier>"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcpkix-jdk15on</artifactId>\n    <version>${bouncycastle.version}</version>\n  </dependency>\n\n  <dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcprov-ext-jdk15on</artifactId>\n    <version>${bouncycastle.version}</version>\n  </dependency>\n\n")),(0,o.kt)("p",null,"By using this ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, you can easily include and exclude BouncyCastle non-FIPS jars."),(0,o.kt)("h3",{id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc"},"Modules that include BC-non-FIPS module (",(0,o.kt)("inlineCode",{parentName:"h3"},"bouncy-castle-bc"),")"),(0,o.kt)("p",null,"For Pulsar client, user need the bouncy-castle module, so ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original")," will include the ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, and have ",(0,o.kt)("inlineCode",{parentName:"p"},"<classifier>pkg</classifier>")," set to reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"jar-in-jar")," package.\nIt is included as following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>bouncy-castle-bc</artifactId>\n    <version>${pulsar.version}</version>\n    <classifier>pkg</classifier>\n  </dependency>\n\n")),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," already included in ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),", And ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-original")," has been included in a lot of other modules like ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-admin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker"),".",(0,o.kt)("br",{parentName:"p"}),"\n","But for the above shaded jar and signatures reason, we should not package Pulsar's ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," module into ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-all")," other shaded modules directly, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-shaded"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-client-admin-shaded")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker-shaded"),".\nSo in the shaded modules, we will exclude the ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <filters>\n    <filter>\n      <artifact>org.apache.pulsar:pulsar-client-original</artifact>\n      <includes>\n        <include>**</include>\n      </includes>\n      <excludes>\n        <exclude>org/bouncycastle/**</exclude>\n      </excludes>\n    </filter>\n  </filters>\n\n")),(0,o.kt)("p",null,"That means, ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle")," related jars are not shaded in these fat jars."),(0,o.kt)("h3",{id:"module-bc-fips-bouncy-castle-bcfips"},"Module BC-FIPS (",(0,o.kt)("inlineCode",{parentName:"h3"},"bouncy-castle-bcfips"),")"),(0,o.kt)("p",null,"Pulsar module ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),", which defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bcfips/pom.xml")," contains the needed FIPS jars for Pulsar.\nSimilar to ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," also packaged as a ",(0,o.kt)("inlineCode",{parentName:"p"},"jar-in-jar")," package for easy include/exclude."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,o.kt)("h3",{id:"exclude-bc-non-fips-and-include-bc-fips"},"Exclude BC-non-FIPS and include BC-FIPS"),(0,o.kt)("p",null,"If you want to switch from BC-non-FIPS to BC-FIPS version, Here is an example for ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-broker")," module: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>pulsar-broker</artifactId>\n    <version>${pulsar.version}</version>\n    <exclusions>\n      <exclusion>\n        <groupId>org.apache.pulsar</groupId>\n        <artifactId>bouncy-castle-bc</artifactId>\n      </exclusion>\n    </exclusions>\n  </dependency>\n  \n  <dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>bouncy-castle-bcfips</artifactId>\n    <version>${pulsar.version}</version>\n    <classifier>pkg</classifier>\n  </dependency>\n\n")),(0,o.kt)("p",null,"For more example, you can reference module ",(0,o.kt)("inlineCode",{parentName:"p"},"bcfips-include-test"),"."))}p.isMDXComponent=!0}}]);