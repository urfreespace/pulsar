"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45262],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),k=r,d=h["".concat(u,".").concat(k)]||h[k]||p[k]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(89521),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,a,i=e.lazy,o=e.block,p=e.defaultValue,h=e.values,k=e.groupId,d=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),g=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],C=w[1],P=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var J=g[k];null!=J&&J!==T&&f.some((function(e){return e.value===J}))&&C(J)}var x=function(e){var t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==T&&(O(t),C(a),null!=k&&N(k,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=n?n:t)}))),i?(0,r.cloneElement)(m.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},83536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return h},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(26396),l=n(58215),u=["components"],s={id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},c=void 0,p={unversionedId:"security-jwt",id:"version-2.6.1/security-jwt",isDocsHomePage:!1,title:"Client authentication using tokens based on JSON Web Tokens",description:"Token authentication overview",source:"@site/versioned_docs/version-2.6.1/security-jwt.md",sourceDirName:".",slug:"/security-jwt",permalink:"/docs/2.6.1/security-jwt",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.6.1/security-jwt.md",tags:[],version:"2.6.1",frontMatter:{id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Using TLS with KeyStore configure",permalink:"/docs/2.6.1/security-tls-keystore"},next:{title:"Authentication using Athenz",permalink:"/docs/2.6.1/security-athenz"}},h=[{value:"Token authentication overview",id:"token-authentication-overview",children:[{value:"CLI Tools",id:"cli-tools",children:[],level:3},{value:"Pulsar client",id:"pulsar-client",children:[],level:3}],level:2},{value:"Enable token authentication",id:"enable-token-authentication",children:[{value:"Create a secret key",id:"create-a-secret-key",children:[],level:3},{value:"Create a key pair",id:"create-a-key-pair",children:[],level:3},{value:"Generate tokens",id:"generate-tokens",children:[],level:3},{value:"Authorization",id:"authorization",children:[],level:3},{value:"Enable token authentication on Brokers",id:"enable-token-authentication-on-brokers",children:[],level:3},{value:"Enable token authentication on Proxies",id:"enable-token-authentication-on-proxies",children:[],level:3}],level:2}],k={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"token-authentication-overview"},"Token authentication overview"),(0,i.kt)("p",null,"Pulsar supports authenticating clients using security tokens that are based on ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),")."),(0,i.kt)("p",null,'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (eg: publish to a topic or consume from a topic).'),(0,i.kt)("p",null,"A user typically gets a token string from the administrator (or some automated service)."),(0,i.kt)("p",null,"The compact representation of a signed JWT is a string that looks like as the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,i.kt)("p",null,'Application specifies the token when you create the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"always-use-tls-transport-encryption"},"Always use TLS transport encryption"),(0,i.kt)("p",{parentName:"blockquote"},"Sending a token is equivalent to sending a password over the wire. You had better use TLS encryption all the time when you connect to the Pulsar service. See\n",(0,i.kt)("a",{parentName:"p",href:"security-tls-transport"},"Transport Encryption using TLS")," for more details.")),(0,i.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools"},"Command-line tools")," like ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools#pulsar-perf"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools#pulsar-client"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,i.kt)("p",null,"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,i.kt)("p",null,"The token string can also be read from a file, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nauthParams=file:///path/to/token/file\n\n")),(0,i.kt)("h3",{id:"pulsar-client"},"Pulsar client"),(0,i.kt)("p",null,"You can use tokens to authenticate the following Pulsar clients."),(0,i.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\uff09\n    .build();\n\n')),(0,i.kt)("p",null,"Similarly, you can also pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        }))\n    .build();\n\n'))),(0,i.kt)(l.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/'\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n")),(0,i.kt)("p",null,"Alternatively, you can also pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/'\n                authentication=AuthenticationToken(read_token))\n\n"))),(0,i.kt)(l.Z,{value:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n')),(0,i.kt)("p",null,"Similarly, you can also pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n        return readToken()\n    }),\n})\n\n'))),(0,i.kt)(l.Z,{value:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'))),(0,i.kt)(l.Z,{value:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n                         .Build();\n\n')))),(0,i.kt)("h2",{id:"enable-token-authentication"},"Enable token authentication"),(0,i.kt)("p",null,"On how to enable token authentication on a Pulsar cluster, you can refer to the guide below."),(0,i.kt)("p",null,"JWT supports two different kinds of keys in order to generate and validate the tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Symmetric :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can use a single ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Secret"))," key to generate and validate tokens."))),(0,i.kt)("li",{parentName:"ul"},"Asymmetric: A pair of keys consists of the Private key and the Public key.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can use ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Private"))," key to generate tokens."),(0,i.kt)("li",{parentName:"ul"},"You can use ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Public"))," key to validate tokens.")))),(0,i.kt)("h3",{id:"create-a-secret-key"},"Create a secret key"),(0,i.kt)("p",null,"When you use a secret key, the administrator creates the key and uses the key to generate the client tokens. You can also configure this key to brokers in order to validate the clients."),(0,i.kt)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output my-secret.key\n\n")),(0,i.kt)("p",null,"Enter this command to generate base64 encoded private key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n\n")),(0,i.kt)("h3",{id:"create-a-key-pair"},"Create a key pair"),(0,i.kt)("p",null,"With Public and Private keys, you need to create a pair of keys. Pulsar supports all algorithms that the Java JWT library (shown ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jwtk/jjwt#signature-algorithms-keys"},"here"),") supports."),(0,i.kt)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store ",(0,i.kt)("inlineCode",{parentName:"li"},"my-private.key")," in a safe location and only administrator can use ",(0,i.kt)("inlineCode",{parentName:"li"},"my-private.key")," to generate new tokens."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-public.key")," is distributed to all Pulsar brokers. You can publicly share this file without any security concern.")),(0,i.kt)("h3",{id:"generate-tokens"},"Generate tokens"),(0,i.kt)("p",null,'A token is the credential associated with a user. The association is done through the "principal" or "role". In the case of JWT tokens, this field is typically referred as ',(0,i.kt)("strong",{parentName:"p"},"subject"),", though they are exactly the same concept."),(0,i.kt)("p",null,"Then, you need to use this command to require the generated token to have a ",(0,i.kt)("strong",{parentName:"p"},"subject")," field set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n\n")),(0,i.kt)("p",null,"This command prints the token string on stdout."),(0,i.kt)("p",null,'Similarly, you can create a token by passing the "private" key using the command below:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n\n")),(0,i.kt)("p",null,"Finally, you can enter the following command to create a token with a pre-defined TTL. And then the token is automatically invalidated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n\n")),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"The token itself does not have any permission associated. The authorization engine determines whether the token should have permissions or not. Once you have created the token, you can grant permission for this token to do certain actions. The following is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n            --role test-user \\\n            --actions produce,consume\n\n")),(0,i.kt)("h3",{id:"enable-token-authentication-on-brokers"},"Enable token authentication on Brokers"),(0,i.kt)("p",null,"To configure brokers to authenticate clients, add the following parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientTlsEnabled=true\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\nbrokerClientTrustCertsFilePath=/path/my-ca/certs/ca.cert.pem\n\n# If this flag is set then the broker authenticates the original Auth data\n# else it just accepts the originalPrincipal and authorizes it (if required).\nauthenticateOriginalAuthData=true\n\n# If using secret key\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private\n# tokenPublicKey=file:///path/to/public.key\n\n")),(0,i.kt)("h3",{id:"enable-token-authentication-on-proxies"},"Enable token authentication on Proxies"),(0,i.kt)("p",null,"To configure proxies to authenticate clients, add the following parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.conf"),":"),(0,i.kt)("p",null,"The proxy uses its own token when connecting to brokers. You need to configure the role token for this key pair in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyRoles")," of the brokers. For more details, see the ",(0,i.kt)("a",{parentName:"p",href:"security-authorization"},"authorization guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\n\n# Whether client authorization credentials are forwarded to the broker for re-authorization.\n# Authentication must be enabled via authenticationEnabled=true for this to take effect.\nforwardAuthorizationCredentials=true\n\n")))}d.isMDXComponent=!0}}]);