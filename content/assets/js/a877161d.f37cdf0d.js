"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58879],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},l=void 0,s={unversionedId:"io-connectors",id:"version-2.4.1/io-connectors",isDocsHomePage:!1,title:"Builtin Connectors",description:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.",source:"@site/versioned_docs/version-2.4.1/io-connectors.md",sourceDirName:".",slug:"/io-connectors",permalink:"/docs/2.4.1/io-connectors",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.4.1/io-connectors.md",tags:[],version:"2.4.1",frontMatter:{id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Debug",permalink:"/docs/2.4.1/io-debug"},next:{title:"Developing Connectors",permalink:"/docs/2.4.1/io-develop"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.\nThese connectors import and export data from some of the most commonly used data systems. Using any these connectors is\nas easy as writing a simple connector configuration and running the connector locally or submitting the connector to a\nPulsar Functions cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-aerospike"},"Aerospike Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-cassandra"},"Cassandra Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-kafka.md#sink"},"Kafka Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-kafka.md#source"},"Kafka Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-kinesis.md#sink"},"Kinesis Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-rabbitmq.md#source"},"RabbitMQ Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-rabbitmq.md#sink"},"RabbitMQ Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-twitter"},"Twitter Firehose Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-cdc"},"CDC Source Connector based on Debezium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.4.1/io-netty#source"},"Netty Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-hbase.md#sink"},"Hbase Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-elasticsearch.md#sink"},"ElasticSearch Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-file.md#source"},"File Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-hdfs.md#sink"},"Hdfs Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-mongo.md#sink"},"MongoDB Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-redis.md#sink"},"Redis Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-solr.md#sink"},"Solr Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-influxdb.md#sink"},"InfluxDB Sink Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"io-jdbc"},"JDBC Sink Connector"))))}m.isMDXComponent=!0}}]);