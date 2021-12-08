"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16335],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},s=void 0,p={unversionedId:"client-libraries-python",id:"version-2.5.2/client-libraries-python",isDocsHomePage:!1,title:"Pulsar Python client",description:"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the python subdirectory of the C++ client code.",source:"@site/versioned_docs/version-2.5.2/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.5.2/client-libraries-python",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.5.2/client-libraries-python.md",tags:[],version:"2.5.2",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Go",permalink:"/docs/2.5.2/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.5.2/client-libraries-cpp"}},c=[{value:"Install",id:"install",children:[{value:"Install using pip",id:"install-using-pip",children:[],level:3},{value:"Install from source",id:"install-from-source",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Producer example",id:"producer-example",children:[],level:3},{value:"Consumer example",id:"consumer-example",children:[],level:3},{value:"Reader interface example",id:"reader-interface-example",children:[],level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",children:[],level:3}],level:2},{value:"Schema",id:"schema",children:[{value:"Declare and validate schema",id:"declare-and-validate-schema",children:[],level:3},{value:"Supported schema types",id:"supported-schema-types",children:[],level:3},{value:"Schema definition reference",id:"schema-definition-reference",children:[{value:"Fields parameters",id:"fields-parameters",children:[],level:4},{value:"Schema definition examples",id:"schema-definition-examples",children:[{value:"Simple definition",id:"simple-definition",children:[],level:5},{value:"Using enums",id:"using-enums",children:[],level:5},{value:"Complex types",id:"complex-types",children:[],level:5}],level:4}],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar Python client library is a wrapper over the existing ",(0,l.kt)("a",{parentName:"p",href:"client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,l.kt)("a",{parentName:"p",href:"/api/cpp/2.5.0-SNAPSHOT"},"same features"),". You can find the code in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp/python"},(0,l.kt)("inlineCode",{parentName:"a"},"python")," subdirectory")," of the C++ client code."),(0,l.kt)("p",null,"All the methods in producer, consumer, and reader of a Python client are thread-safe."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/pdoc"},"pdoc"),"-generated API docs for the Python client are available ",(0,l.kt)("a",{parentName:"p",href:"/api/python/2.5.0-SNAPSHOT"},"here"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"You can install the ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,l.kt)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from source."),(0,l.kt)("h3",{id:"install-using-pip"},"Install using pip"),(0,l.kt)("p",null,"To install the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,l.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client==2.5.2\n\n")),(0,l.kt)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MacOS ",(0,l.kt)("br",null),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.4, 3.5, 3.6, 3.7")))),(0,l.kt)("h3",{id:"install-from-source"},"Install from source"),(0,l.kt)("p",null,"To install the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.5.2/client-libraries-cpp#compilation"},"instructions")," and compile the Pulsar C++ client library. That builds the Python binding for the library."),(0,l.kt)("p",null,"To install the built Python bindings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("p",null,"The complete Python API reference is available at ",(0,l.kt)("a",{parentName:"p",href:"/api/python/2.5.0-SNAPSHOT"},"api/python"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"You can find a variety of Python code examples for the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,l.kt)("h3",{id:"producer-example"},"Producer example"),(0,l.kt)("p",null,"The following example creates a Python producer for the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,l.kt)("h3",{id:"consumer-example"},"Consumer example"),(0,l.kt)("p",null,"The following example creates a consumer with the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n")),(0,l.kt)("p",null,"This example shows how to configure negative acknowledgement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n")),(0,l.kt)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,l.kt)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.5.2/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")),(0,l.kt)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,l.kt)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,l.kt)("p",null,"The following is an example. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n")),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,l.kt)("p",null,"You can declare a schema by passing a class that inherits\nfrom ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as\nclass variables. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\n")),(0,l.kt)("p",null,"With this simple schema definition, you can create producers, consumers and readers instances that refer to that."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n")),(0,l.kt)("p",null,'After creating the producer, the Pulsar broker validates that the existing topic schema is indeed of "Avro" type and that the format is compatible with the schema definition of the ',(0,l.kt)("inlineCode",{parentName:"p"},"Example")," class."),(0,l.kt)("p",null,"If there is a mismatch, an exception occurs in the producer creation."),(0,l.kt)("p",null,"Once a producer is created with a certain schema definition,\nit will only accept objects that are instances of the declared\nschema class."),(0,l.kt)("p",null,"Similarly, for a consumer/reader, the consumer will return an\nobject, instance of the schema record class, rather than the raw\nbytes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n")),(0,l.kt)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,l.kt)("p",null,"You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BytesSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StringSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,l.kt)("inlineCode",{parentName:"td"},"str")," objects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"JsonSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AvroSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,l.kt)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,l.kt)("p",null,"The schema definition is done through a class that inherits from ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,l.kt)("p",null,"This class has a number of fields which can be of either\n",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,l.kt)("inlineCode",{parentName:"p"},"Record"),". All the\nfields are specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields\nare matching the AVRO fields types."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dict")),(0,l.kt)("td",{parentName:"tr",align:null},"Key is always ",(0,l.kt)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,l.kt)("p",null,"Additionally, any Python ",(0,l.kt)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,l.kt)("h4",{id:"fields-parameters"},"Fields parameters"),(0,l.kt)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Set a default value for the field. Eg: ",(0,l.kt)("inlineCode",{parentName:"td"},"a = Integer(default=5)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,l.kt)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,l.kt)("h5",{id:"simple-definition"},"Simple definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n")),(0,l.kt)("h5",{id:"using-enums"},"Using enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n")),(0,l.kt)("h5",{id:"complex-types"},"Complex types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n")))}m.isMDXComponent=!0}}]);