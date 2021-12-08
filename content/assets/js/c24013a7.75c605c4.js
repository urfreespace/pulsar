"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65112],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return c}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),o=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),c=r,v=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?t.createElement(v,i(i({ref:a},p),{},{components:n})):t.createElement(v,i({ref:a},p))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,a,n){var t=n(67294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},26396:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(87462),r=n(67294),l=n(72389),i=n(79443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),o=n(86010),p="tabItem_vU9c";function m(e){var a,n,t,l=e.lazy,i=e.block,m=e.defaultValue,d=e.values,c=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),h=(0,u.lx)(k,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(a=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=f[0])?void 0:t.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),T=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(b),A=N[0],E=N[1],I=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var P=T[c];null!=P&&P!==A&&k.some((function(e){return e.value===P}))&&E(P)}var w=function(e){var a=e.currentTarget,n=I.indexOf(a),t=k[n].value;t!==A&&(x(a),E(t),null!=c&&y(c,t))},O=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;n=I[t]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},k.map((function(e){var a=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,className:(0,o.Z)("tabs__item",p,{"tabs__item--active":A===a}),key:a,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=n?n:a)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==A})}))))}function d(e){var a=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(a)},e))}},79443:function(e,a,n){var t=(0,n(67294).createContext)(void 0);a.Z=t},60115:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return v}});var t=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(26396),s=n(58215),u=["components"],o={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},p=void 0,m={unversionedId:"admin-api-tenants",id:"version-2.4.0/admin-api-tenants",isDocsHomePage:!1,title:"Managing Tenants",description:"Important",source:"@site/versioned_docs/version-2.4.0/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/2.4.0/admin-api-tenants",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.0/admin-api-tenants.md",tags:[],version:"2.4.0",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Clusters",permalink:"/docs/2.4.0/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/2.4.0/admin-api-brokers"}},d=[{value:"Tenant resources",id:"tenant-resources",children:[{value:"List",id:"list",children:[],level:3},{value:"Create",id:"create",children:[],level:3},{value:"Get configuration",id:"get-configuration",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3},{value:"Update",id:"update",children:[],level:3}],level:2}],c={toc:d};function v(e){var a=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.4.0/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,l.kt)("a",{parentName:"p",href:"admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Admin roles"),(0,l.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,l.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"You can list all of the tenants associated with an ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#instance"},"instance"),"."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#tenants-list"},(0,l.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants list\nmy-tenant-1\nmy-tenant-2\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getTenants?version=2.4.0&apiVersion=v2"},"GET /admin/v2/tenants"))),(0,l.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenants();\n\n")))),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("p",null,"You can create a new tenant."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#tenants-create"},(0,l.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant\n\n")),(0,l.kt)("p",null,"When creating a tenant, you can assign admin roles using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"--admin-roles")," flag. You can specify multiple roles as a comma-separated list. Here are some examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/createTenant?version=2.4.0&apiVersion=v2"},"POST /admin/v2/tenants/:tenant"))),(0,l.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().createTenant(tenantName, tenantInfo);\n\n")))),(0,l.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,l.kt)("p",null,"You can fetch the ",(0,l.kt)("a",{parentName:"p",href:"reference-configuration"},"configuration")," for an existing tenant at any time."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#tenants-get"},(0,l.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getTenant?version=2.4.0&apiVersion=v2"},"GET /admin/v2/tenants/:cluster"))),(0,l.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenantInfo(tenantName);\n\n")))),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#instance"},"instance"),"."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#tenants-delete"},(0,l.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants delete my-tenant\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/deleteTenant?version=2.4.0&apiVersion=v2"},"DELETE /admin/v2/tenants/:cluster"))),(0,l.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.Tenants().deleteTenant(tenantName);\n\n")))),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"You can update a tenant's configuration."),(0,l.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#tenants-update"},(0,l.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants update my-tenant\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/updateTenant?version=2.4.0&apiVersion=v2"},"DELETE /admin/v2/tenants/:cluster"))),(0,l.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().updateTenant(tenantName, tenantInfo);\n\n")))))}v.isMDXComponent=!0}}]);