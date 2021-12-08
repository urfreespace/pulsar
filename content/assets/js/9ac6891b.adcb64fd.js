"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49028],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],o={id:"functions-quickstart",title:"Get started with Pulsar Functions",sidebar_label:"Get started",original_id:"functions-quickstart"},s=void 0,u={unversionedId:"functions-quickstart",id:"version-2.4.0/functions-quickstart",isDocsHomePage:!1,title:"Get started with Pulsar Functions",description:"This tutorial walks you through running a standalone Pulsar cluster on your machine, and then running your first Pulsar Function using that cluster. The first Pulsar Function runs in local run mode (outside your Pulsar cluster), while the second runs in cluster mode (inside your cluster).",source:"@site/versioned_docs/version-2.4.0/functions-quickstart.md",sourceDirName:".",slug:"/functions-quickstart",permalink:"/docs/2.4.0/functions-quickstart",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.0/functions-quickstart.md",tags:[],version:"2.4.0",frontMatter:{id:"functions-quickstart",title:"Get started with Pulsar Functions",sidebar_label:"Get started",original_id:"functions-quickstart"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.4.0/functions-overview"},next:{title:"API",permalink:"/docs/2.4.0/functions-api"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Run a standalone Pulsar cluster",id:"run-a-standalone-pulsar-cluster",children:[],level:2},{value:"Run a Pulsar Function in local run mode",id:"run-a-pulsar-function-in-local-run-mode",children:[{value:"Process explanation",id:"process-explanation",children:[],level:3}],level:2},{value:"Run a Pulsar Function in cluster mode",id:"run-a-pulsar-function-in-cluster-mode",children:[],level:2},{value:"Write and run a new function",id:"write-and-run-a-new-function",children:[],level:2},{value:"Write and run a Go function",id:"write-and-run-a-go-function",children:[],level:2},{value:"Package Python dependencies",id:"package-python-dependencies",children:[{value:"Client requirements",id:"client-requirements",children:[],level:3},{value:"Python dependencies",id:"python-dependencies",children:[{value:"Package",id:"package",children:[],level:4}],level:3}],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial walks you through running a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#standalone"},"standalone")," Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#cluster"},"cluster")," on your machine, and then running your first Pulsar Function using that cluster. The first Pulsar Function runs in local run mode (outside your Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#cluster"},"cluster"),"), while the second runs in cluster mode (inside your cluster)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In local run mode, Pulsar Functions communicate with Pulsar cluster, but run outside of the cluster.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Maven")," on your machine."),(0,r.kt)("h2",{id:"run-a-standalone-pulsar-cluster"},"Run a standalone Pulsar cluster"),(0,r.kt)("p",null,"In order to run Pulsar Functions, you need to run a Pulsar cluster locally first. The easiest way is to run Pulsar in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#standalone"},"standalone")," mode. Follow these steps to start up a standalone cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.4.0/apache-pulsar-2.4.0-bin.tar.gz\n$ tar xvfz apache-pulsar-2.4.0-bin.tar.gz\n$ cd apache-pulsar-2.4.0\n$ bin/pulsar standalone \\\n  --advertised-address 127.0.0.1\n\n")),(0,r.kt)("p",null,"When running Pulsar in standalone mode, the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," tenant and the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace are created automatically. The tenant and namespace are used throughout this tutorial."),(0,r.kt)("h2",{id:"run-a-pulsar-function-in-local-run-mode"},"Run a Pulsar Function in local run mode"),(0,r.kt)("p",null,"You can start with a simple function that takes a string as input from a Pulsar topic, adds an exclamation point to the end of the string, and then publishes the new string to another Pulsar topic. The following is the code for the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.apache.pulsar.functions.api.examples;\n\nimport java.util.function.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) {\n        return String.format("%s!", input);\n    }\n}\n\n')),(0,r.kt)("p",null,"A JAR file containing this function and several other functions (written in Java) is included with the binary distribution you have downloaded (in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," folder). Run the function in local mode on your laptop but outside your Pulsar cluster with the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions localrun \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --name exclamation\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"multiple-input-topics"},"Multiple input topics"),(0,r.kt)("p",{parentName:"blockquote"},"In the example above, a single topic is specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--inputs")," flag. You can also specify multiple input topics with a comma-separated list using the same flag. ")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--inputs topic1,topic2\n\n\n"))),(0,r.kt)("p",null,"You can open up another shell and use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," tool to listen for messages on the output topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-client consume persistent://public/default/exclamation-output \\\n  --subscription-name my-subscription \\\n  --num-messages 0\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"--num-messages")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," means that consumers listen on the topic indefinitely, rather than only accepting a certain number of messages.")),(0,r.kt)("p",null,"With a listener up and running, you can open up another shell and produce a message on the input topic that you specify."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce persistent://public/default/exclamation-input \\\n  --num-produce 1 \\\n  --messages "Hello world"\n\n')),(0,r.kt)("p",null,"When the message has been successfully processed by the exclamation function, you will see the following output. To shut down the function, press ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+C"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n----- got message -----\nHello world!\n\n")),(0,r.kt)("h3",{id:"process-explanation"},"Process explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello world")," message you publish to the input topic (",(0,r.kt)("inlineCode",{parentName:"li"},"persistent://public/default/exclamation-input"),") is passed to the exclamation function."),(0,r.kt)("li",{parentName:"ul"},"The exclamation function processes the message (providing a result of ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello world!"),") and publishes the result to the output topic (",(0,r.kt)("inlineCode",{parentName:"li"},"persistent://public/default/exclamation-output"),")."),(0,r.kt)("li",{parentName:"ul"},"If the exclamation function ",(0,r.kt)("em",{parentName:"li"},"does not")," run, Pulsar will durably store the message data published to the input topic in ",(0,r.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," until a consumer consumes and acknowledges the message.")),(0,r.kt)("h2",{id:"run-a-pulsar-function-in-cluster-mode"},"Run a Pulsar Function in cluster mode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#run-a-pulsar-function-in-local-run-mode"},"Local run mode")," is useful for development and test. However, when you use Pulsar for real deployment, you run it in ",(0,r.kt)("strong",{parentName:"p"},"cluster mode"),". In cluster mode, Pulsar Functions run ",(0,r.kt)("em",{parentName:"p"},"inside")," of your Pulsar cluster and are managed using the same ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#functions"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin functions"))," interface."),(0,r.kt)("p",null,"The following command deploys the same exclamation function you run locally in your Pulsar cluster, rather than outside of it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --name exclamation\n\n")),(0,r.kt)("p",null,"You will see ",(0,r.kt)("inlineCode",{parentName:"p"},"Created successfully")," in the output. Check the list of functions running in your cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n")),(0,r.kt)("p",null,"You will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"exclamation")," function. Check the status of your deployed function using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getstatus")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions getstatus \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,r.kt)("p",null,"You will see the following JSON output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "functionStatusList": [\n    {\n      "running": true,\n      "instanceId": "0"\n    }\n  ]\n}\n\n')),(0,r.kt)("p",null,"As you can see, the instance is currently running, and an instance with the ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," is running. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," command, you can get other information about the function, for example, topics, tenant, namespace, and so on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,r.kt)("p",null,"You will see the following JSON output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "exclamation",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "output": "persistent://public/default/exclamation-output",\n  "autoAck": true,\n  "inputs": [\n    "persistent://public/default/exclamation-input"\n  ],\n  "parallelism": 1\n}\n\n')),(0,r.kt)("p",null,"As you can see, only one instance of the function is running in your cluster. Update the parallel functions to ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --inputs persistent://public/default/exclamation-input \\\n  --output persistent://public/default/exclamation-output \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation \\\n  --parallelism 3\n\n")),(0,r.kt)("p",null,"You will see ",(0,r.kt)("inlineCode",{parentName:"p"},"Updated successfully")," in the output. If you enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," command, you see that the parallel functions are increased to ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", meaning that three instances of the function are running in your cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "exclamation",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "output": "persistent://public/default/exclamation-output",\n  "autoAck": true,\n  "inputs": [\n    "persistent://public/default/exclamation-input"\n  ],\n  "parallelism": 3\n}\n\n')),(0,r.kt)("p",null,"Shut down the running function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name exclamation\n\n")),(0,r.kt)("p",null,"When you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Deleted successfully")," in the output, you've successfully run, updated, and shut down functions running in cluster mode. "),(0,r.kt)("h2",{id:"write-and-run-a-new-function"},"Write and run a new function"),(0,r.kt)("p",null,"In order to write and run ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/functions-api#functions-for-python"},"Python")," functions, you need to install some dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pip install pulsar-client\n\n")),(0,r.kt)("p",null,"In the examples above, you run and manage pre-written Pulsar Functions and learn how they work. You can also write your own functions with Python API. In the following example, the function takes a string as input, reverses the string, and publishes the reversed string to the specified topic."),(0,r.kt)("p",null,"First, create a new Python file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ touch reverse.py\n\n")),(0,r.kt)("p",null,"Add the following information in the Python file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\ndef process(input):\n    return input[::-1]\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," method defines the processing logic of Pulsar Functions. It uses Python slice magic to reverse each incoming string. You can deploy the function using the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --py reverse.py \\\n  --classname reverse \\\n  --inputs persistent://public/default/backwards \\\n  --output persistent://public/default/forwards \\\n  --tenant public \\\n  --namespace default \\\n  --name reverse\n\n")),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Created successfully"),", the function is ready to accept incoming messages. Because the function is running in cluster mode, you can ",(0,r.kt)("strong",{parentName:"p"},"trigger")," the function using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/pulsar-admin#trigger"},(0,r.kt)("inlineCode",{parentName:"a"},"trigger"))," command. This command sends a message that you specify to the function and returns the function output. The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin functions trigger \\\n  --name reverse \\\n  --tenant public \\\n  --namespace default \\\n  --trigger-value "sdrawrof won si tub sdrawkcab saw gnirts sihT"\n\n')),(0,r.kt)("p",null,"You will get the following output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nThis string was backwards but is now forwards\n\n")),(0,r.kt)("p",null,"You have created a new Pulsar Function, deployed it in your Pulsar standalone cluster in ",(0,r.kt)("a",{parentName:"p",href:"#run-a-pulsar-function-in-cluster-mode"},"cluster mode"),", and triggered the Function. "),(0,r.kt)("h2",{id:"write-and-run-a-go-function"},"Write and run a Go function"),(0,r.kt)("p",null,"Go function depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-go"),". Make sure that you have built ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-go")," before using Go function."),(0,r.kt)("p",null,"To write and run a Go function, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new Go file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ntouch helloFunc.go\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Append a byte for messages from the input topic.",(0,r.kt)("br",{parentName:"li"}),"The following is a ",(0,r.kt)("inlineCode",{parentName:"li"},"helloFunc.go")," example. Each message from the input topic is appended with a ",(0,r.kt)("inlineCode",{parentName:"li"},"110")," byte, and then delivered to the output topic.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\npackage main\n\nimport (\n    "context"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleResponse(ctx context.Context, in []byte) ([]byte, error) {\n    res := append(in, 110)\n    return res, nil\n}\n\nfunc main() {\n    pf.Start(HandleResponse)\n}\n\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Compile code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ngo build -o examplepulsar helloFunc.go\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run Go function. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n$ bin/pulsar-admin functions create \\\n  --go examplepulsar \\\n  --inputs persistent://public/default/backwards \\\n  --output persistent://public/default/forwards \\\n  --tenant public \\\n  --namespace default \\\n  --name gofunc\n\n")),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"Created successfully"),", the function is ready to accept incoming messages. Start a producer and produce messages to the ",(0,r.kt)("inlineCode",{parentName:"p"},"backwards")," input topic. Start a consumer and consume messages from the ",(0,r.kt)("inlineCode",{parentName:"p"},"forwards")," output topic, you will see ",(0,r.kt)("inlineCode",{parentName:"p"},"110")," is appended to all messages."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--classname")," parameter is not specified when running Go function, because there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"Class")," concept in Go, which is different from Java and Python."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--go")," command to specify an executable file, make sure you have executable permissions."))),(0,r.kt)("h2",{id:"package-python-dependencies"},"Package Python dependencies"),(0,r.kt)("p",null,"When you deploy Python functions in a cluster offline, you need to package the required dependencies in a ZIP file before deployment."),(0,r.kt)("h3",{id:"client-requirements"},"Client requirements"),(0,r.kt)("p",null,"The following programs are required to be installed on the client machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npip \\\\ required for getting python dependencies\nzip \\\\ for building zip archives\n\n")),(0,r.kt)("h3",{id:"python-dependencies"},"Python dependencies"),(0,r.kt)("p",null,"A file named ",(0,r.kt)("strong",{parentName:"p"},"requirements.txt")," is needed with required dependencies for the Python function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nsh==1.12.14\n\n")),(0,r.kt)("p",null,"Prepare the Pulsar Function in the ",(0,r.kt)("strong",{parentName:"p"},"src")," folder."),(0,r.kt)("p",null,"Run the following command to gather Python dependencies in the ",(0,r.kt)("strong",{parentName:"p"},"deps")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npip download \\\n--only-binary :all: \\\n--platform manylinux1_x86_64 \\\n--python-version 27 \\\n--implementation cp \\\n--abi cp27m -r requirements.txt -d deps\n\n")),(0,r.kt)("p",null,"Sample output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nCollecting sh==1.12.14 (from -r requirements.txt (line 1))\n  Using cached https://files.pythonhosted.org/packages/4a/22/17b22ef5b049f12080f5815c41bf94de3c229217609e469001a8f80c1b3d/sh-1.12.14-py2.py3-none-any.whl\n  Saved ./deps/sh-1.12.14-py2.py3-none-any.whl\nSuccessfully downloaded sh\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," is not needed as a dependency as it has already installed in the worker node."))),(0,r.kt)("h4",{id:"package"},"Package"),(0,r.kt)("p",null,"Create a destination folder with the desired package name, for example, ",(0,r.kt)("strong",{parentName:"p"},"exclamation"),". Copy the ",(0,r.kt)("strong",{parentName:"p"},"src")," and ",(0,r.kt)("strong",{parentName:"p"},"deps")," folders into it, and compress the folder into a ZIP archive."),(0,r.kt)("p",null,"Sample sequence"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ncp -R deps exclamation/\ncp -R src exclamation/\n\nls -la exclamation/\ntotal 7\ndrwxr-xr-x   5 a.ahmed  staff  160 Nov  6 17:51 .\ndrwxr-xr-x  12 a.ahmed  staff  384 Nov  6 17:52 ..\ndrwxr-xr-x   3 a.ahmed  staff   96 Nov  6 17:51 deps\ndrwxr-xr-x   3 a.ahmed  staff   96 Nov  6 17:51 src\n\nzip -r exclamation.zip exclamation\n\n")),(0,r.kt)("p",null,"After package all the required dependencies into the ",(0,r.kt)("strong",{parentName:"p"},"exclamation.zip")," file, you can deploy functions in a Pulsar worker. The Pulsar worker does not need internet connectivity to download packages, because they are all included in the ZIP file."))}d.isMDXComponent=!0}}]);