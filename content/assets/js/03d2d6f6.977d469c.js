"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70390],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return a?l.createElement(h,i(i({ref:t},c),{},{components:a})):l.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61060:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},o=void 0,p={unversionedId:"client-libraries-cpp",id:"version-2.4.2/client-libraries-cpp",isDocsHomePage:!1,title:"Pulsar C++ client",description:"You can use Pulsar C++ client to create Pulsar producers and consumers in C++.",source:"@site/versioned_docs/version-2.4.2/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.4.2/client-libraries-cpp",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.2/client-libraries-cpp.md",tags:[],version:"2.4.2",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Python",permalink:"/docs/2.4.2/client-libraries-python"},next:{title:"WebSocket",permalink:"/docs/2.4.2/client-libraries-websocket"}},c=[{value:"Supported platforms",id:"supported-platforms",children:[],level:2},{value:"System requirements",id:"system-requirements",children:[],level:2},{value:"Linux",id:"linux",children:[{value:"Compilation",id:"compilation",children:[],level:3},{value:"Install Dependencies",id:"install-dependencies",children:[],level:3},{value:"Install RPM",id:"install-rpm",children:[],level:3},{value:"Install Debian",id:"install-debian",children:[],level:3},{value:"Build",id:"build",children:[{value:"RPM",id:"rpm",children:[],level:4},{value:"Debian",id:"debian",children:[],level:4}],level:3}],level:2},{value:"MacOS",id:"macos",children:[{value:"Compilation",id:"compilation-1",children:[],level:3},{value:"Install <code>libpulsar</code>",id:"install-libpulsar",children:[],level:3}],level:2},{value:"Connection URLs",id:"connection-urls",children:[],level:2},{value:"Create a consumer",id:"create-a-consumer",children:[],level:2},{value:"Create a producer",id:"create-a-producer",children:[],level:2},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",children:[],level:2},{value:"Schema",id:"schema",children:[{value:"Create producer with Avro schema",id:"create-producer-with-avro-schema",children:[],level:3},{value:"Create consumer with Avro schema",id:"create-consumer-with-avro-schema",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use Pulsar C++ client to create Pulsar producers and consumers in C++."),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of a C++ client are thread-safe."),(0,r.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.kt)("p",null,"Pulsar C++ client is supported on ",(0,r.kt)("strong",{parentName:"p"},"Linux")," and ",(0,r.kt)("strong",{parentName:"p"},"MacOS")," platforms."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.doxygen.nl/"},"Doxygen"),"-generated API docs for the C++ client are available ",(0,r.kt)("a",{parentName:"p",href:"/api/cpp/2.4.2"},"here"),"."),(0,r.kt)("h2",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"You need to install the following components before using the C++ client:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/"},"CMake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.boost.org/"},"Boost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Protocol Buffers")," 2.6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/"},"libcurl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/googletest"},"Google Test"))),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("h3",{id:"compilation"},"Compilation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the Pulsar repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install all necessary dependencies.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ apt-get install cmake libssl-dev libcurl4-openssl-dev liblog4cxx-dev \\\n  libprotobuf-dev protobuf-compiler libboost-all-dev google-mock libgtest-dev libjsoncpp-dev\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Compile and install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/googletest"},"Google Test"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n# libgtest-dev version is 1.18.0 or above\n$ cd /usr/src/googletest\n$ sudo cmake .\n$ sudo make\n$ sudo cp ./googlemock/libgmock.a ./googlemock/gtest/libgtest.a /usr/lib/\n\n# less than 1.18.0\n$ cd /usr/src/gtest\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgtest.a /usr/lib\n\n$ cd /usr/src/gmock\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgmock.a /usr/lib\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Compile the Pulsar client library for C++ inside the Pulsar repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")),(0,r.kt)("p",null,"After you install the components successfully, the files ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," folder of the repository. The tools ",(0,r.kt)("inlineCode",{parentName:"p"},"perfProducer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"perfConsumer")," are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," directory."),(0,r.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since 2.1.0 release, Pulsar ships pre-built RPM and Debian packages. You can download and install those packages directly.")),(0,r.kt)("p",null,"After you download and install RPM or DEB, the ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," libraries are in your ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("p",null,"By default, they are built in code path ",(0,r.kt)("inlineCode",{parentName:"p"},"${PULSAR_HOME}/pulsar-client-cpp"),". You can build with the command below."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake . -DBUILD_TESTS=OFF -DLINK_STATIC=ON && make pulsarShared pulsarSharedNossl pulsarStatic pulsarStaticWithDeps -j 3"),"."),(0,r.kt)("p",null,"These libraries rely on some other libraries. If you want to get detailed version of dependencies, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/pkg/rpm/Dockerfile"},"RPM")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-cpp/pkg/deb/Dockerfile"},"DEB")," files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.so")," is a shared library, containing statically linked ",(0,r.kt)("inlineCode",{parentName:"li"},"boost")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl"),". It also dynamically links all other necessary libraries. You can use this Pulsar library with the command below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsar.so -I/usr/local/ssl/include\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsarnossl.so")," is a shared library, similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.so")," except that the libraries ",(0,r.kt)("inlineCode",{parentName:"li"},"openssl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"crypto")," are dynamically linked. You can use this Pulsar library with the command below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsarnossl.so -lssl -lcrypto -I/usr/local/ssl/include -L/usr/local/ssl/lib\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.a")," is a static library. You need to load dependencies before using this library. You can use this Pulsar library with the command below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsar.a -lssl -lcrypto -ldl -lpthread  -I/usr/local/ssl/include -L/usr/local/ssl/lib -lboost_system -lboost_regex -lcurl -lprotobuf -lzstd -lz\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"libpulsarwithdeps.a")," is a static library, based on ",(0,r.kt)("inlineCode",{parentName:"li"},"libpulsar.a"),". It is archived in the dependencies of ",(0,r.kt)("inlineCode",{parentName:"li"},"libboost_regex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libboost_system"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libcurl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libprotobuf"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"libzstd")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"libz"),". You can use this Pulsar library with the command below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n g++ --std=c++11  PulsarTest.cpp -o test /usr/lib/libpulsarwithdeps.a -lssl -lcrypto -ldl -lpthread  -I/usr/local/ssl/include -L/usr/local/ssl/lib\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," does not include library openssl related libraries ",(0,r.kt)("inlineCode",{parentName:"p"},"libssl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libcrypto"),", because these two libraries are related to security. It is more reasonable and easier to use the versions provided by the local system to handle security issues and upgrade libraries."),(0,r.kt)("h3",{id:"install-rpm"},"Install RPM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download a RPM package from the links in the table. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-2.4.2-1.x86_64.rpm"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-2.4.2-1.x86_64.rpm.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-2.4.2-1.x86_64.rpm.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-debuginfo-2.4.2-1.x86_64.rpm"},"client-debuginfo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-debuginfo-2.4.2-1.x86_64.rpm.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-debuginfo-2.4.2-1.x86_64.rpm.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-devel-2.4.2-1.x86_64.rpm"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-devel-2.4.2-1.x86_64.rpm.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/RPMS/apache-pulsar-client-devel-2.4.2-1.x86_64.rpm.sha512"},"sha512"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ rpm -ivh apache-pulsar-client*.rpm\n\n")),(0,r.kt)("p",null,"After you install RPM successfully, Pulsar libraries are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("h3",{id:"install-debian"},"Install Debian"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download a Debian package from the links in the table. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client.deb"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client.deb.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client.deb.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client-dev.deb"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client-dev.deb.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"https://archive.apache.org/dist/pulsar/pulsar-2.4.2/DEB/apache-pulsar-client-dev.deb.sha512"},"sha512"))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the package using the following command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ apt install ./apache-pulsar-client*.deb\n\n")),(0,r.kt)("p",null,"After you install DEB successfully, Pulsar libraries are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to build RPM and Debian packages from the latest master, follow the instructions below. You should run all the instructions at the root directory of your cloned Pulsar repository.")),(0,r.kt)("p",null,"There are recipes that build RPM and Debian packages containing a\nstatically linked ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," with all required dependencies."),(0,r.kt)("p",null,"To build the C++ library packages, you need to build the Java packages first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nmvn install -DskipTests\n\n")),(0,r.kt)("h4",{id:"rpm"},"RPM"),(0,r.kt)("p",null,"To build the RPM inside a Docker container, use the command below. The RPMs are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/rpm/RPMS/x86_64/")," path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/rpm/docker-build-rpm.sh\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarnossl.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-devel"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarwithdeps.a"),"and C++ and C headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-debuginfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Debug symbols for ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))))),(0,r.kt)("h4",{id:"debian"},"Debian"),(0,r.kt)("p",null,"To build Debian packages, enter the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/deb/docker-build-deb.sh\n\n")),(0,r.kt)("p",null,"Debian packages are created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/deb/BUILD/DEB/")," path."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarnossl.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsarwithdeps.a")," and C++ and C headers")))),(0,r.kt)("h2",{id:"macos"},"MacOS"),(0,r.kt)("h3",{id:"compilation-1"},"Compilation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the Pulsar repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install all necessary dependencies.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n# OpenSSL installation\n$ brew install openssl\n$ export OPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include/\n$ export OPENSSL_ROOT_DIR=/usr/local/opt/openssl/\n\n# Protocol Buffers installation\n$ brew tap homebrew/versions\n$ brew install protobuf260\n$ brew install boost\n$ brew install log4cxx\n\n# Google Test installation\n$ git clone https://github.com/google/googletest.git\n$ cd googletest\n$ cmake .\n$ make install\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Compile the Pulsar client library in the repository that you cloned.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")),(0,r.kt)("h3",{id:"install-libpulsar"},"Install ",(0,r.kt)("inlineCode",{parentName:"h3"},"libpulsar")),(0,r.kt)("p",null,"Pulsar releases are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," core repository. You can install the C++ client library with the following command. The package is installed with the library and headers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install libpulsar\n\n")),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,r.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, you can use the Pulsar URI scheme. The default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),". The following is an example for localhost."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.kt)("p",null,"In a Pulsar cluster in production, the URL looks as follows. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.kt)("p",null,"If you use TLS authentication, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"To use Pulsar as a consumer, you need to create a consumer on the C++ client. The following is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscription-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"To use Pulsar as a producer, you need to create a producer on the C++ client. The following is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,r.kt)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,r.kt)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,r.kt)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')),(0,r.kt)("p",null,"For complete examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp/examples"},"C++ client examples"),"."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"This section describes some examples about schema. For more information about schema, see ",(0,r.kt)("a",{parentName:"p",href:"schema-get-started"},"Pulsar schema"),"."),(0,r.kt)("h3",{id:"create-producer-with-avro-schema"},"Create producer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a producer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n\n')),(0,r.kt)("h3",{id:"create-consumer-with-avro-schema"},"Create consumer with Avro schema"),(0,r.kt)("p",null,"The following example shows how to create a consumer with an Avro schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n\n')))}d.isMDXComponent=!0}}]);