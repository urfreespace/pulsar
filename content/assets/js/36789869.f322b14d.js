"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22907],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75092:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"io-develop",title:"Develop Connectors",sidebar_label:"Developing Connectors",original_id:"io-develop"},c=void 0,l={unversionedId:"io-develop",id:"version-2.4.2/io-develop",isDocsHomePage:!1,title:"Develop Connectors",description:"This guide describes how developers can write new connectors for Pulsar IO to move data",source:"@site/versioned_docs/version-2.4.2/io-develop.md",sourceDirName:".",slug:"/io-develop",permalink:"/docs/2.4.2/io-develop",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.2/io-develop.md",tags:[],version:"2.4.2",frontMatter:{id:"io-develop",title:"Develop Connectors",sidebar_label:"Developing Connectors",original_id:"io-develop"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Builtin Connectors",permalink:"/docs/2.4.2/io-connectors"},next:{title:"CDC connector",permalink:"/docs/2.4.2/io-cdc"}},p=[{value:"Developing",id:"developing",children:[{value:"Develop a source connector",id:"develop-a-source-connector",children:[],level:4},{value:"Develop a sink connector",id:"develop-a-sink-connector",children:[],level:4}],level:3},{value:"Testing",id:"testing",children:[],level:3},{value:"Packaging",id:"packaging",children:[{value:"Creating a NAR package",id:"creating-a-nar-package",children:[],level:4},{value:"Creating an Uber JAR",id:"creating-an-uber-jar",children:[],level:4}],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes how developers can write new connectors for Pulsar IO to move data\nbetween Pulsar and other systems. It describes how to create a Pulsar IO connector."),(0,o.kt)("p",null,"Pulsar IO connectors are specialized ",(0,o.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions"),". So writing\na Pulsar IO connector is as simple as writing a Pulsar function. Pulsar IO connectors come\nin two flavors: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source"),",\nwhich import data from another system, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink"),",\nwhich export data to another system. For example, ",(0,o.kt)("a",{parentName:"p",href:"io-kinesis"},"KinesisSink")," would export\nthe messages of a Pulsar topic to a Kinesis stream, and ",(0,o.kt)("a",{parentName:"p",href:"io-rabbitmq"},"RabbitmqSource")," would import\nthe messages of a RabbitMQ queue to a Pulsar topic."),(0,o.kt)("h3",{id:"developing"},"Developing"),(0,o.kt)("h4",{id:"develop-a-source-connector"},"Develop a source connector"),(0,o.kt)("p",null,"What you need to develop a source connector is to implement ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source"),"\ninterface."),(0,o.kt)("p",null,"First, you need to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java#L33"},"open")," method. This method will be called once when the source connector\nis initialized. In this method, you can retrieve all the connector specific settings through\nthe passed ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," parameter, and initialize all the necessary resourcess. For example, a Kafka\nconnector can create the Kafka client in this ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method."),(0,o.kt)("p",null,"Beside the passed-in ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," object, the Pulsar runtime also provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceContext")," for the\nconnector to access runtime resources for tasks like collecting metrics. The implementation can\nsave the ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceContext")," for further usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Open connector with configuration\n     *\n     * @param config initialization config\n     * @param sourceContext\n     * @throws Exception IO type exceptions when opening a connector\n     */\n    void open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n\n")),(0,o.kt)("p",null,"The main task for a Source implementor is to implement ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java#L41"},"read"),"\nmethod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Reads the next message from source.\n     * If source does not have any new messages, this call should block.\n     * @return next message from source.  The return result should never be null\n     * @throws Exception\n     */\n    Record<T> read() throws Exception;\n\n")),(0,o.kt)("p",null,"The implementation should be blocking on this method if nothing to return. It should never return\n",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". The returned ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java#L28"},"Record")," should encapsulates the information that is needed by\nPulsar IO runtime."),(0,o.kt)("p",null,"These information includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Topic Name"),": ",(0,o.kt)("em",{parentName:"li"},"Optional"),". If the record is originated from a Pulsar topic, it should be the Pulsar topic name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Key"),": ",(0,o.kt)("em",{parentName:"li"},"Optional"),". If the record has a key associated with it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Value"),": ",(0,o.kt)("em",{parentName:"li"},"Required"),". The actual data of this record."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Partition Id"),": ",(0,o.kt)("em",{parentName:"li"},"Optional"),". If the record is originated from a partitioned source,\nreturn its partition id. The partition id will be used as part of the unique identifier\nby Pulsar IO runtime to do message deduplication and achieve exactly-once processing guarantee."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Record Sequence"),": ",(0,o.kt)("em",{parentName:"li"},"Optional"),". If the record is originated from a sequential source,\nreturn its record sequence. The record sequence will be used as part of the unique identifier\nby Pulsar IO runtime to do message deduplication and achieve exactly-once processing guarantee."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Properties"),": ",(0,o.kt)("em",{parentName:"li"},"Optional"),". If the record carries user-defined properties, return those properties.")),(0,o.kt)("p",null,"Additionally, the implementation of the record should provide two methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"ack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fail"),". These\ntwo methods will be used by Pulsar IO connector to acknowledge the records that it has done\nprocessing and fail the records that it has failed to process."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"KafkaSource")," is a good example to follow."),(0,o.kt)("h4",{id:"develop-a-sink-connector"},"Develop a sink connector"),(0,o.kt)("p",null,"Developing a sink connector is as easy as developing a source connector. You just need to\nimplement ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")," interface."),(0,o.kt)("p",null,"Similarly, you first need to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java#L36"},"open")," method to initialize all the necessary resources\nbefore implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java#L44"},"write")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Open connector with configuration\n     *\n     * @param config initialization config\n     * @param sinkContext\n     * @throws Exception IO type exceptions when opening a connector\n     */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n\n")),(0,o.kt)("p",null,"The main task for a Sink implementor is to implement ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java#L44"},"write")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Write a message to Sink\n     * @param record record to write to sink\n     * @throws Exception\n     */\n    void write(Record<T> record) throws Exception;\n\n")),(0,o.kt)("p",null,"In the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," method, the implementor can decide how to write the value and\nthe optional key to the actual source, and leverage all the provided information such as\n",(0,o.kt)("inlineCode",{parentName:"p"},"Partition Id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Record Sequence")," for achieving different processing guarantees. The implementor\nis also responsible for acknowledging records if it has successfully written them or failing\nrecords if has failed to write them."),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Testing connectors can be challenging because Pulsar IO connectors interact with two systems\nthat may be difficult to mock - Pulsar and the system the connector is connecting to. It is\nrecommended to write very specifically test the functionalities of the connector classes\nwhile mocking the external services."),(0,o.kt)("p",null,"Once you have written sufficient unit tests for your connector, we also recommend adding\nseparate integration tests to verify end-to-end functionality. In Pulsar, we are using ",(0,o.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"testcontainers")," for all Pulsar integration tests. Pulsar IO\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io"},"IntegrationTests")," are good examples to follow on integration testing your connectors."),(0,o.kt)("h3",{id:"packaging"},"Packaging"),(0,o.kt)("p",null,"Once you've developed and tested your connector, you must package it so that it can be submitted\nto a ",(0,o.kt)("a",{parentName:"p",href:"functions-overview"},"Pulsar Functions")," cluster. There are two approaches described\nhere work with Pulsar Functions' runtime."),(0,o.kt)("p",null,"If you plan to package and distribute your connector for others to use, you are obligated to\nproperly license and copyright your own code and to adhere to the licensing and copyrights of\nall libraries your code uses and that you include in your distribution. If you are using the\napproach described in ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-nar-package"},'"Creating a NAR package"'),", the NAR plugin will\nautomatically create a ",(0,o.kt)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your connector."),(0,o.kt)("h4",{id:"creating-a-nar-package"},"Creating a NAR package"),(0,o.kt)("p",null,"The easiest approach to packaging a Pulsar IO connector is to create a NAR package using ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin"),"."),(0,o.kt)("p",null,"NAR stands for NiFi Archive. It is a custom packaging mechanism used by Apache NiFi, to provide\na bit of Java ClassLoader isolation. For more details, you can read this ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd"},"blog post")," to understand\nhow NAR works. Pulsar uses the same mechanism for packaging all the ",(0,o.kt)("a",{parentName:"p",href:"io-connectors"},"builtin connectors"),"."),(0,o.kt)("p",null,"All what you need is to include this ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin")," in your maven project for your connector. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.2.0</version>\n  </plugin>\n</plugins>\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter"},"TwitterFirehose")," connector is a good example to follow."),(0,o.kt)("h4",{id:"creating-an-uber-jar"},"Creating an Uber JAR"),(0,o.kt)("p",null,"An alternative approach is to create an ",(0,o.kt)("em",{parentName:"p"},"uber JAR")," that contains all of the connector's JAR files\nand other resource files. No directory internal structure is necessary."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html"},"maven-shade-plugin")," to create a Uber JAR. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n\n")))}m.isMDXComponent=!0}}]);