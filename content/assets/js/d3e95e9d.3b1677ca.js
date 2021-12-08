"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38220],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38261:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},s=void 0,o={unversionedId:"client-libraries-cpp",id:"version-2.5.0/client-libraries-cpp",isDocsHomePage:!1,title:"Pulsar C++ client",description:"Supported platforms",source:"@site/versioned_docs/version-2.5.0/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.5.0/client-libraries-cpp",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.0/client-libraries-cpp.md",tags:[],version:"2.5.0",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.5.0/docsSidebar",previous:{title:"Python",permalink:"/docs/2.5.0/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/2.5.0/client-libraries-node"}},c=[{value:"Supported platforms",id:"supported-platforms",children:[],level:2},{value:"Linux",id:"linux",children:[{value:"Install RPM",id:"install-rpm",children:[],level:3},{value:"Install Debian",id:"install-debian",children:[],level:3},{value:"Build",id:"build",children:[{value:"RPM",id:"rpm",children:[],level:4},{value:"Debian",id:"debian",children:[],level:4}],level:3}],level:2},{value:"MacOS",id:"macos",children:[],level:2},{value:"Connection URLs",id:"connection-urls",children:[],level:2},{value:"Create a consumer",id:"create-a-consumer",children:[],level:2},{value:"Create a producer",id:"create-a-producer",children:[],level:2},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",children:[],level:2},{value:"Schema",id:"schema",children:[{value:"Create producer with Avro schema",id:"create-producer-with-avro-schema",children:[],level:3},{value:"Create consumer with Avro schema",id:"create-consumer-with-avro-schema",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,l.kt)("p",null,"Pulsar C++ client is supported on ",(0,l.kt)("strong",{parentName:"p"},"Linux")," and ",(0,l.kt)("strong",{parentName:"p"},"MacOS")," platforms."),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Since 2.1.0 release, Pulsar ships pre-built RPM and Debian packages. You can download and install those packages directly.")),(0,l.kt)("h3",{id:"install-rpm"},"Install RPM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download a RPM package from the links in the table. ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-2.5.0-1.x86_64.rpm"},"client")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-2.5.0-1.x86_64.rpm.asc"},"asc"),", ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-2.5.0-1.x86_64.rpm.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-debuginfo-2.5.0-1.x86_64.rpm"},"client-debuginfo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-debuginfo-2.5.0-1.x86_64.rpm.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-debuginfo-2.5.0-1.x86_64.rpm.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-devel-2.5.0-1.x86_64.rpm"},"client-devel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-devel-2.5.0-1.x86_64.rpm.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/RPMS/apache-pulsar-client-devel-2.5.0-1.x86_64.rpm.sha512"},"sha512"))))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install the package using the following command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ rpm -ivh apache-pulsar-client*.rpm\n\n")),(0,l.kt)("h3",{id:"install-debian"},"Install Debian"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download a Debian package from the links in the table. ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client.deb"},"client")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client.deb.asc"},"asc"),", ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client.deb.sha512"},"sha512"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client-dev.deb"},"client-devel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client-dev.deb.asc"},"asc"),",  ",(0,l.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.0/DEB/apache-pulsar-client-dev.deb.sha512"},"sha512"))))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ apt install ./apache-pulsar-client*.deb\n\n")),(0,l.kt)("h3",{id:"build"},"Build"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you want to build RPM and Debian packages from the latest master, follow the instructions below. All the instructions are run at the root directory of your cloned Pulsar repository.")),(0,l.kt)("p",null,"There are recipes that build RPM and Debian packages containing a\nstatically linked ",(0,l.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," with all the required\ndependencies."),(0,l.kt)("p",null,"To build the C++ library packages, build the Java packages first."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nmvn install -DskipTests\n\n")),(0,l.kt)("h4",{id:"rpm"},"RPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/rpm/docker-build-rpm.sh\n\n")),(0,l.kt)("p",null,"This builds the RPM inside a Docker container and it leaves the RPMs in ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/rpm/RPMS/x86_64/"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,l.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-devel"),(0,l.kt)("td",{parentName:"tr",align:null},"Static library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-debuginfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Debug symbols for ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))))),(0,l.kt)("h4",{id:"debian"},"Debian"),(0,l.kt)("p",null,"To build Debian packages, enter the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/deb/docker-build-deb.sh\n\n")),(0,l.kt)("p",null,"Debian packages are created at ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/deb/BUILD/DEB/"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Package name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,l.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar-client-dev"),(0,l.kt)("td",{parentName:"tr",align:null},"Static library ",(0,l.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")))),(0,l.kt)("h2",{id:"macos"},"MacOS"),(0,l.kt)("p",null,"Pulsar releases are available in the ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," core repository. You can install the C++ client library with the following command. The package is installed with the library and headers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install libpulsar\n\n")),(0,l.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,l.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,l.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, you can use the Pulsar URI scheme. The default port is ",(0,l.kt)("inlineCode",{parentName:"p"},"6650"),". The following is an example for localhost."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,l.kt)("p",null,"In a Pulsar cluster in production, the URL looks as follows: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,l.kt)("p",null,"If you use TLS authentication, you need to add ",(0,l.kt)("inlineCode",{parentName:"p"},"ssl"),", and the default port is ",(0,l.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,l.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,l.kt)("p",null,"To connect to Pulsar as a consumer, you need to create a consumer on the C++ client. The following is an example. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscription-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,l.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,l.kt)("p",null,"To connect to Pulsar as a producer, you need to create a producer on the C++ client. The following is an example. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,l.kt)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,l.kt)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,l.kt)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,l.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')),(0,l.kt)("p",null,"For complete examples, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp/examples"},"C++ client examples"),"."),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("p",null,"This section describes some examples about schema. For more information about schema, see ",(0,l.kt)("a",{parentName:"p",href:"schema-get-started"},"Pulsar schema"),"."),(0,l.kt)("h3",{id:"create-producer-with-avro-schema"},"Create producer with Avro schema"),(0,l.kt)("p",null,"The following example shows how to create a producer with an Avro schema."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n\n')),(0,l.kt)("h3",{id:"create-consumer-with-avro-schema"},"Create consumer with Avro schema"),(0,l.kt)("p",null,"The following example shows how to create a consumer with an Avro schema."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n\n')))}d.isMDXComponent=!0}}]);