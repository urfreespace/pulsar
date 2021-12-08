"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36917],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=l,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(k,p(p({ref:a},c),{},{components:t})):n.createElement(k,p({ref:a},c))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(87462),l=t(67294),r=t(72389),p=t(79443);var i=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(89521),o=t(86010),c="tabItem_vU9c";function u(e){var a,t,n,r=e.lazy,p=e.block,u=e.defaultValue,m=e.values,d=e.groupId,k=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),f=(0,s.lx)(v,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===u?u:null!=(a=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=g[0])?void 0:n.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),b=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,l.useState)(h),A=T[0],w=T[1],P=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=b[d];null!=x&&x!==A&&v.some((function(e){return e.value===x}))&&w(x)}var E=function(e){var a=e.currentTarget,t=P.indexOf(a),n=v[t].value;n!==A&&(S(a),w(n),null!=d&&N(d,n))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;t=P[n]||P[0];break;case"ArrowLeft":var l=P.indexOf(e.currentTarget)-1;t=P[l]||P[P.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var a=e.value,t=e.label;return l.createElement("li",{role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":A===a}),key:a,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:E,onClick:E},null!=t?t:a)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==A})}))))}function m(e){var a=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(a)},e))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},39042:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),p=t(26396),i=t(58215),s=["components"],o={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},c=void 0,u={unversionedId:"admin-api-packages",id:"version-2.8.0/admin-api-packages",isDocsHomePage:!1,title:"Manage packages",description:"Package management enables version management and simplifies the upgrade and rollback processes for Functions, Sinks, and Sources. When you use the same function, sink and source in different namespaces, you can upload them to a common package management system.",source:"@site/versioned_docs/version-2.8.0/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/admin-api-packages",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.8.0/admin-api-packages.md",tags:[],version:"2.8.0",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},sidebar:"version-2.8.0/docsSidebar",previous:{title:"Functions",permalink:"/docs/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/docs/adaptors-kafka"}},m=[{value:"Package name",id:"package-name",children:[],level:2},{value:"Package URL",id:"package-url",children:[],level:2},{value:"Permissions",id:"permissions",children:[],level:2},{value:"Package resources",id:"package-resources",children:[{value:"Upload a package",id:"upload-a-package",children:[],level:3},{value:"Download a package",id:"download-a-package",children:[],level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",children:[],level:3},{value:"List all the specified type packages under a namespace",id:"list-all-the-specified-type-packages-under-a-namespace",children:[],level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",children:[],level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",children:[],level:3},{value:"Delete a specified package",id:"delete-a-specified-package",children:[],level:3}],level:2}],d={toc:m};function k(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Package management enables version management and simplifies the upgrade and rollback processes for Functions, Sinks, and Sources. When you use the same function, sink and source in different namespaces, you can upload them to a common package management system."),(0,r.kt)("h2",{id:"package-name"},"Package name"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," is identified by five parts: ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tenant"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package name"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Part"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the package. The following types are supported: ",(0,r.kt)("inlineCode",{parentName:"td"},"function"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sink")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"source"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"The fully qualified name of the package: ",(0,r.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the package.")))),(0,r.kt)("p",null,"The following is a code sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nclass PackageName {\n   private final PackageType type;\n   private final String namespace;\n   private final String tenant;\n   private final String name;\n   private final String version;\n}\n\nenum PackageType {\n   FUNCTION("function"), SINK("sink"), SOURCE("source");\n}\n\n')),(0,r.kt)("h2",{id:"package-url"},"Package URL"),(0,r.kt)("p",null,"A package is located using a URL. The package URL is written in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n<type>://<tenant>/<namespace>/<package name>@<version>\n\n")),(0,r.kt)("p",null,"The following are package URL examples:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sink://public/default/mysql-sink@1.0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"function://my-tenant/my-ns/my-function@0.1"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"source://my-tenant/my-ns/mysql-cdc-source@2.3")),(0,r.kt)("p",null,"The package management system stores the data, versions and metadata of each package. The metadata is shown in the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"metadata"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contact"),(0,r.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, team email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the package is modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"A key/value map that stores your own information.")))),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"The packages are organized by the tenant and namespace, so you can apply the tenant and namespace permissions to packages directly."),(0,r.kt)("h2",{id:"package-resources"},"Package resources"),(0,r.kt)("p",null,"You can use the package management with command line tools, REST API and Java client."),(0,r.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,r.kt)("p",null,"You can upload a package to the package management service in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0&apiVersion=v3"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Upload a package to the package management service synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,r.kt)("h3",{id:"download-a-package"},"Download a package"),(0,r.kt)("p",null,"You can download a package to the package management service in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Download a package to the package management service synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Download a package to the package management service asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,r.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,r.kt)("p",null,"You can get a list of all versions of a package in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/?version=2.8.0&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"List all versions of a package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"List all versions of a package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,r.kt)("h3",{id:"list-all-the-specified-type-packages-under-a-namespace"},"List all the specified type packages under a namespace"),(0,r.kt)("p",null,"You can get a list of all the packages with the given type in a namespace in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/?version=2.8.0&apiVersion=v3"},"PUT /admin/v3/packages/:type/:tenant/:namespace/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"List all the packages with the given type in a namespace synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"List all the packages with the given type in a namespace asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))),(0,r.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,r.kt)("p",null,"You can get the metadata of a package in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/?version=2.8.0&apiVersion=v3"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Get the metadata of a package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Get the metadata of a package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,r.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,r.kt)("p",null,"You can update the metadata of a package in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/?version=2.8.0&apiVersion=v3"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Update a package metadata information synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Update a package metadata information asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,r.kt)("h3",{id:"delete-a-specified-package"},"Delete a specified package"),(0,r.kt)("p",null,"You can delete a specified package with its package name in the following ways."),(0,r.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"The following command example deletes a package of version 0.1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete function://public/default/example@v0.1\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0&apiVersion=v3"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/?version=2.8.0"))),(0,r.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("p",null,"Delete a specified package synchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   void delete(String packageName) throws PulsarAdminException;\n\n")),(0,r.kt)("p",null,"Delete a specified package asynchronously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> deleteAsync(String packageName);\n\n")))))}k.isMDXComponent=!0}}]);