"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13135],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,v=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?t.createElement(v,i(i({ref:n},m),{},{components:a})):t.createElement(v,i({ref:n},m))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(87462),r=a(67294),s=a(72389),i=a(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),p=a(86010),m="tabItem_vU9c";function u(e){var n,a,t,s=e.lazy,i=e.block,u=e.defaultValue,c=e.values,d=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(n=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=k[0])?void 0:t.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),N=b.tabGroupChoices,y=b.setTabGroupChoices,T=(0,r.useState)(g),w=T[0],P=T[1],C=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=N[d];null!=O&&O!==w&&f.some((function(e){return e.value===O}))&&P(O)}var I=function(e){var n=e.currentTarget,a=C.indexOf(n),t=f[a].value;t!==w&&(E(n),P(t),null!=d&&y(d,t))},x=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=C.indexOf(e.currentTarget)+1;a=C[t]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":w===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:I,onClick:I},null!=a?a:n)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,s.Z)();return r.createElement(u,(0,t.Z)({key:String(n)},e))}},79443:function(e,n,a){var t=(0,a(67294).createContext)(void 0);n.Z=t},34369:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return v}});var t=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(26396),o=a(58215),l=["components"],p={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",original_id:"admin-api-permissions"},m=void 0,u={unversionedId:"admin-api-permissions",id:"version-2.5.1/admin-api-permissions",isDocsHomePage:!1,title:"Managing permissions",description:"Important",source:"@site/versioned_docs/version-2.5.1/admin-api-permissions.md",sourceDirName:".",slug:"/admin-api-permissions",permalink:"/docs/2.5.1/admin-api-permissions",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.1/admin-api-permissions.md",tags:[],version:"2.5.1",frontMatter:{id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",original_id:"admin-api-permissions"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Namespaces",permalink:"/docs/2.5.1/admin-api-namespaces"},next:{title:"Persistent topics",permalink:"/docs/2.5.1/admin-api-persistent-topics"}},c=[{value:"Grant permissions",id:"grant-permissions",children:[],level:2},{value:"Get permissions",id:"get-permissions",children:[],level:2},{value:"Revoke permissions",id:"revoke-permissions",children:[],level:2}],d={toc:c};function v(e){var n=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important")),(0,s.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,s.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.5.0-SNAPSHOT/"},"Java admin API doc"),".")))),(0,s.kt)("p",null,"Pulsar allows you to grant namespace-level or topic-level permission to users."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you grant a namespace-level permission to a user, then the user can access all the topics under the namespace.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you grant a topic-level permission to a user, then the user can access only the topic."))),(0,s.kt)("p",null,"The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,s.kt)("a",{parentName:"p",href:"admin-api-topics.md/#grant-permission"},"manage topics"),"."),(0,s.kt)("h2",{id:"grant-permissions"},"Grant permissions"),(0,s.kt)("p",null,"You can grant permissions to specific roles for lists of operations such as ",(0,s.kt)("inlineCode",{parentName:"p"},"produce")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"consume"),"."),(0,s.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.5.1/pulsar-admin#grant-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"grant-permission"))," subcommand and specify a namespace, actions using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--actions")," flag, and a role using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n  --actions produce,consume \\\n  --role admin10\n\n")),(0,s.kt)("p",null,"Wildcard authorization can be performed when ",(0,s.kt)("inlineCode",{parentName:"p"},"authorizationAllowWildcardsMatching")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,s.kt)("p",null,"e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.role.*'\n\n")),(0,s.kt)("p",null,"Then, roles ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.2"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.foo"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.bar"),", etc. can produce and consume.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role '*.role.my'\n\n")),(0,s.kt)("p",null,"Then, roles ",(0,s.kt)("inlineCode",{parentName:"p"},"1.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"foo.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bar.role.my"),", etc. can produce and consume."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": A wildcard matching works at ",(0,s.kt)("strong",{parentName:"p"},"the beginning or end of the role name only"),"."),(0,s.kt)("p",null,"e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.*.role'\n\n")),(0,s.kt)("p",null,"In this case, only the role ",(0,s.kt)("inlineCode",{parentName:"p"},"my.*.role")," has permissions.",(0,s.kt)("br",{parentName:"p"}),"\n","Roles ",(0,s.kt)("inlineCode",{parentName:"p"},"my.1.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.2.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.foo.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.bar.role"),", etc. ",(0,s.kt)("strong",{parentName:"p"},"cannot")," produce and consume.")),(0,s.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/grantPermissionOnNamespace?version=2.5.1&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,s.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n\n")))),(0,s.kt)("h2",{id:"get-permissions"},"Get permissions"),(0,s.kt)("p",null,"You can see which permissions have been granted to which roles in a namespace."),(0,s.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"reference-pulsar-admin#permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"permissions"))," subcommand and specify a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces permissions test-tenant/ns1\n{\n  "admin10": [\n    "produce",\n    "consume"\n  ]\n}\n\n'))),(0,s.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getPermissions?version=2.5.1&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/permissions"))),(0,s.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPermissions(namespace);\n\n")))),(0,s.kt)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,s.kt)("p",null,"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."),(0,s.kt)(i.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.5.1/pulsar-admin#revoke-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"revoke-permission"))," subcommand and specify a namespace and a role using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces revoke-permission test-tenant/ns1 \\\n  --role admin10\n\n"))),(0,s.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/revokePermissionsOnNamespace?version=2.5.1&apiVersion=v2"},"DELETE /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,s.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().revokePermissionsOnNamespace(namespace, role);\n\n")))))}v.isMDXComponent=!0}}]);