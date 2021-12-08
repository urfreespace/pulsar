"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13353],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),y=o,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12117:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},l=void 0,s={unversionedId:"security-bouncy-castle",id:"version-2.5.1/security-bouncy-castle",isDocsHomePage:!1,title:"Bouncy Castle Providers",description:"BouncyCastle Introduce",source:"@site/versioned_docs/version-2.5.1/security-bouncy-castle.md",sourceDirName:".",slug:"/security-bouncy-castle",permalink:"/docs/2.5.1/security-bouncy-castle",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.1/security-bouncy-castle.md",tags:[],version:"2.5.1",frontMatter:{id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",original_id:"security-bouncy-castle"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Extending",permalink:"/docs/2.5.1/security-extending"},next:{title:"Java",permalink:"/docs/2.5.1/client-libraries-java"}},d=[{value:"BouncyCastle Introduce",id:"bouncycastle-introduce",children:[],level:2},{value:"Include dependencies of BC-non-FIPS",id:"include-dependencies-of-bc-non-fips",children:[{value:"Pulsar Client and Broker dependencies on BC-non-FIPS",id:"pulsar-client-and-broker-dependencies-on-bc-non-fips",children:[],level:3}],level:2},{value:"Exclude BC-non-FIPS and include BC-FIPS",id:"exclude-bc-non-fips-and-include-bc-fips",children:[{value:"BC-FIPS",id:"bc-fips",children:[],level:3}],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bouncycastle-introduce"},"BouncyCastle Introduce"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," is a Java library that complements the default Java Cryptographic Extension (JCE),\nand it many more cipher suites and algorithms than the default JCE provided by Sun."),(0,a.kt)("p",null,"In addition to that, ",(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," has lots of utilities for reading arcane formats like PEM and ASN.1 that no sane person would want to rewrite themselves."),(0,a.kt)("p",null,"In Pulsar, security and crypto have dependencies on BouncyCastle Jars. For the detailed installing and configuring Bouncy Castle FIPS, see ",(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/documentation.html"},"BC FIPS Documentation"),", especially the ",(0,a.kt)("strong",{parentName:"p"},"User Guides")," and ",(0,a.kt)("strong",{parentName:"p"},"Security Policy")," PDFs."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle")," provides both ",(0,a.kt)("a",{parentName:"p",href:"https://www.bouncycastle.org/fips_faq.html"},"FIPS")," and non-FIPS version. But in a JVM, you can not include both of the 2 versions, and you need to exclude the current version before include the other."),(0,a.kt)("p",null,"In Pulsar, the security and crypto methods also depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"Bouncy Castle"),", especially in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.5.1/security-tls-authentication"},"TLS Authentication")," and ",(0,a.kt)("a",{parentName:"p",href:"security-encryption"},"Transport Encryption"),". This document contains the configuration between BouncyCastle FIPS(BC-FIPS) and non-FIPS(BC-non-FIPS) version while using Pulsar."),(0,a.kt)("h2",{id:"include-dependencies-of-bc-non-fips"},"Include dependencies of BC-non-FIPS"),(0,a.kt)("p",null,"By default, BouncyCastle non-FIPS version is build along with Pulsar's Broker and Java client."),(0,a.kt)("p",null,"Pulsar module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc"),", which defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bc/pom.xml")," contains the needed non-FIPS jars for Pulsar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-jdk15on</artifactId>\n      <version>${bouncycastle.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcprov-ext-jdk15on</artifactId>\n      <version>${bouncycastle.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"By using this ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bc")," module, user can easily include and exclude BouncyCastle non-FIPS jars."),(0,a.kt)("h3",{id:"pulsar-client-and-broker-dependencies-on-bc-non-fips"},"Pulsar Client and Broker dependencies on BC-non-FIPS"),(0,a.kt)("p",null,"Pulsar Client(",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),") module include BouncyCastle non-FIPS jars by add dependency like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>bouncy-castle-bc</artifactId>\n      <version>${project.parent.version}</version>\n      <classifier>pkg</classifier>\n    </dependency>\n\n")),(0,a.kt)("p",null,"And Pulsar Broker (",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-broker"),") module include BouncyCastle non-FIPS jars by indirectly include Pulsar Client(",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-client-original"),") module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-original</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n\n")),(0,a.kt)("h2",{id:"exclude-bc-non-fips-and-include-bc-fips"},"Exclude BC-non-FIPS and include BC-FIPS"),(0,a.kt)("p",null,"After understanding the above dependencies, user can easily exclude non-FIPS version and include FIPS version."),(0,a.kt)("h3",{id:"bc-fips"},"BC-FIPS"),(0,a.kt)("p",null,"Pulsar module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips"),", which defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle/bcfips/pom.xml")," contains the needed FIPS jars for Pulsar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"User can choose include module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," module directly, or include original BC-FIPS jars. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n    <dependency>\n      <groupId>${project.groupId}</groupId>\n      <artifactId>pulsar-broker</artifactId>\n      <version>${project.version}</version>\n      <exclusions>\n        <exclusion>\n          <groupId>${project.groupId}</groupId>\n          <artifactId>bouncy-castle-bc</artifactId>\n        </exclusion>\n      </exclusions>\n    </dependency>\n\n    \x3c!--exclude bouncy castle non-FIPS version, then load fips version--\x3e\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bc-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.bouncycastle</groupId>\n      <artifactId>bcpkix-fips</artifactId>\n      <version>${bouncycastlefips.version}</version>\n    </dependency>\n\n")),(0,a.kt)("p",null,"Besides this, module ",(0,a.kt)("inlineCode",{parentName:"p"},"bouncy-castle-bcfips")," builds contain an output with format NAR, you can set java environment by ",(0,a.kt)("inlineCode",{parentName:"p"},"-DBcPath='nar/file/path'"),", Pulsar will auto load it."),(0,a.kt)("p",null,"For more example, you can reference module ",(0,a.kt)("inlineCode",{parentName:"p"},"bcfips-include-test")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bcfips-nar-test"),"."))}p.isMDXComponent=!0}}]);