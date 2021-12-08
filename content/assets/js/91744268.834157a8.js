"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69045],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44206:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var n=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],s={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},p=void 0,o={unversionedId:"client-libraries-cpp",id:"version-2.5.2/client-libraries-cpp",isDocsHomePage:!1,title:"Pulsar C++ client",description:"You can use Pulsar C++ client to create Pulsar producers and consumers in C++.",source:"@site/versioned_docs/version-2.5.2/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.5.2/client-libraries-cpp",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.2/client-libraries-cpp.md",tags:[],version:"2.5.2",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Python",permalink:"/docs/2.5.2/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/2.5.2/client-libraries-node"}},c=[{value:"Supported platforms",id:"supported-platforms",children:[],level:2},{value:"Linux",id:"linux",children:[{value:"Install RPM",id:"install-rpm",children:[],level:3},{value:"Install Debian",id:"install-debian",children:[],level:3},{value:"Build",id:"build",children:[{value:"RPM",id:"rpm",children:[],level:4},{value:"Debian",id:"debian",children:[],level:4}],level:3}],level:2},{value:"MacOS",id:"macos",children:[],level:2},{value:"Connection URLs",id:"connection-urls",children:[],level:2},{value:"Create a consumer",id:"create-a-consumer",children:[],level:2},{value:"Create a producer",id:"create-a-producer",children:[],level:2},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",children:[],level:2},{value:"Schema",id:"schema",children:[{value:"Create producer with Avro schema",id:"create-producer-with-avro-schema",children:[],level:3},{value:"Create consumer with Avro schema",id:"create-consumer-with-avro-schema",children:[],level:3}],level:2}],u={toc:c};function d(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use Pulsar C++ client to create Pulsar producers and consumers in C++."),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of a C++ client are thread-safe."),(0,r.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.kt)("p",null,"Pulsar C++ client is supported on ",(0,r.kt)("strong",{parentName:"p"},"Linux")," and ",(0,r.kt)("strong",{parentName:"p"},"MacOS")," platforms."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.doxygen.nl/"},"Doxygen"),"-generated API docs for the C++ client are available ",(0,r.kt)("a",{parentName:"p",href:"/api/cpp/2.5.0-SNAPSHOT"},"here"),"."),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since 2.1.0 release, Pulsar ships pre-built RPM and Debian packages. You can download and install those packages directly.")),(0,r.kt)("p",null,"Four kind of libraries ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," are included in your ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," after rpm/deb download and install.\nBy default, they are build under code path ",(0,r.kt)("inlineCode",{parentName:"p"},"${PULSAR_HOME}/pulsar-client-cpp"),", using command\n",(0,r.kt)("inlineCode",{parentName:"p"},"cmake . -DBUILD_TESTS=OFF -DLINK_STATIC=ON && make pulsarShared pulsarSharedNossl pulsarStatic pulsarStaticWithDeps -j 3"),"\nThese libraries rely on some other libraries, if you want to get detailed version of dependencies libraries, please reference ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/pkg/rpm/Dockerfile"},"these")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/pkg/deb/Dockerfile"},"files"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.so")," is the Shared library, it contains statically linked ",(0,r.kt)("inlineCode",{parentName:"li"},"boost")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl"),", and will also dynamically link all other needed libraries.\nThe command the when use this pulsar library is like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsar.so -I/usr/local/ssl/include\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsarnossl.so")," is the Shared library that similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.so")," except that the library ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto")," are dynamically linked.\nThe command the when use this pulsar library is like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsarnossl.so -lssl -lcrypto -I/usr/local/ssl/include -L/usr/local/ssl/lib\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.a")," is the Static library, it need to load some dependencies library when using it.\nThe command the when use this pulsar library is like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsar.a -lssl -lcrypto -ldl -lpthread  -I/usr/local/ssl/include -L/usr/local/ssl/lib -lboost_system -lboost_regex -lcurl -lprotobuf -lzstd -lz\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsarwithdeps.a")," is the Static library, base on ",(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.a"),", and archived in the dependencies libraries of ",(0,r.kt)("inlineCode",{parentName:"li"},"libboost_regex"),",  ",(0,r.kt)("inlineCode",{parentName:"li"},"libboost_system"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libcurl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libprotobuf"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libzstd")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"libz"),",\nThe command the when use this pulsar library is like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsarwithdeps.a -lssl -lcrypto -ldl -lpthread  -I/usr/local/ssl/include -L/usr/local/ssl/lib\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," does not include library openssl related libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"libssl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libcrypto"),", because these 2 library is related to security,\nby using user local system provided version is more reasonable, and more easy for user to handling security issue and library upgrade."),(0,r.kt)("h3",{id:"install-rpm"},"Install RPM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download a RPM package from the links in the table. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-2.5.2-1.x86_64.rpm"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-2.5.2-1.x86_64.rpm.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-2.5.2-1.x86_64.rpm.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-debuginfo-2.5.2-1.x86_64.rpm"},"client-debuginfo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-debuginfo-2.5.2-1.x86_64.rpm.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-debuginfo-2.5.2-1.x86_64.rpm.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-devel-2.5.2-1.x86_64.rpm"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-devel-2.5.2-1.x86_64.rpm.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/RPMS/apache-pulsar-client-devel-2.5.2-1.x86_64.rpm.sha512"},"sha512"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ rpm -ivh apache-pulsar-client*.rpm\n\n")),(0,r.kt)("p",null,"After install, Pulsar libraries will be placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib"),"."),(0,r.kt)("h3",{id:"install-debian"},"Install Debian"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download a Debian package from the links in the table. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client.deb"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client.deb.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client.deb.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client-dev.deb"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client-dev.deb.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.2/DEB/apache-pulsar-client-dev.deb.sha512"},"sha512"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ apt install ./apache-pulsar-client*.deb\n\n")),(0,r.kt)("p",null,"After install, Pulsar libraries will be placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib"),"."),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to build RPM and Debian packages from the latest master, follow the instructions below. All the instructions are run at the root directory of your cloned Pulsar repository.")),(0,r.kt)("p",null,"There are recipes that build RPM and Debian packages containing a\nstatically linked ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," with all the required\ndependencies."),(0,r.kt)("p",null,"To build the C++ library packages, build the Java packages first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nmvn install -DskipTests\n\n")),(0,r.kt)("h4",{id:"rpm"},"RPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/rpm/docker-build-rpm.sh\n\n")),(0,r.kt)("p",null,"This builds the RPM inside a Docker container and it leaves the RPMs in ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/rpm/RPMS/x86_64/"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarnossl.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-devel"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarwithdeps.a"),"and C++ and C headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-debuginfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Debug symbols for ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))))),(0,r.kt)("h4",{id:"debian"},"Debian"),(0,r.kt)("p",null,"To build Debian packages, enter the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/deb/docker-build-deb.sh\n\n")),(0,r.kt)("p",null,"Debian packages are created at ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/deb/BUILD/DEB/"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarnossl.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarwithdeps.a")," and C++ and C headers")))),(0,r.kt)("h2",{id:"macos"},"MacOS"),(0,r.kt)("p",null,"Pulsar releases are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," core repository. You can install the C++ client library with the following command. The package is installed with the library and headers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install libpulsar\n\n")),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,r.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, you can use the Pulsar URI scheme. The default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),". The following is an example for localhost."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.kt)("p",null,"In a Pulsar cluster in production, the URL looks as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.kt)("p",null,"If you use TLS authentication, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"To connect to Pulsar as a consumer, you need to create a consumer on the C++ client. The following is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscription-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"To connect to Pulsar as a producer, you need to create a producer on the C++ client. The following is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,r.kt)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,r.kt)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')),(0,r.kt)("p",null,"For complete examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp/examples"},"C++ client examples"),"."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"This section describes some examples about schema. For more information about schema, see ",(0,r.kt)("a",{parentName:"p",href:"schema-get-started"},"Pulsar schema"),"."),(0,r.kt)("h3",{id:"create-producer-with-avro-schema"},"Create producer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a producer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n\n')),(0,r.kt)("h3",{id:"create-consumer-with-avro-schema"},"Create consumer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a consumer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n\n')))}d.isMDXComponent=!0}}]);