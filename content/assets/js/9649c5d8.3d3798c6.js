"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1798],{63306:function(e,r,n){var t=n(75068),a=n(85020),s=n(67294),l=n(44908),o=function(e){function r(){return e.apply(this,arguments)||this}(0,t.Z)(r,e);var n=r.prototype;return n.componentDidMount=function(){var e=window.location.search,r=l[0],n=this.props.module||"pulsar-admin",t=(e=e.replace("?","")).split("&"),a="master";for(var s in t){var o=t[s].split("=");"version"===o[0]&&(a=o[1])}if("master"===a){var i=r.split(".");a=parseInt(i[0])+"."+(parseInt(i[1])+1)+".0"}var p=a.split("."),c=parseInt(p[0]),u=parseInt(p[1]),f=5,d="/pulsar-admin";"pulsar-client"===n?(f=8,d="/reference-cli-tools/#pulsar-client"):"pulsar-perf"===n?(f=8,d="/reference-cli-tools/#pulsar-perf"):"pulsar"===n&&(f=8,d="/reference-cli-tools/#pulsar"),c>1&&u<=f||1===c?window.location.href=a===r?"/docs/en"+d:"/docs/en/"+a+d:(a=parseInt(p[0])+"."+parseInt(p[1])+".0",window.location.href="http://pulsar.apache.org/tools/"+n+"/"+a+"-SNAPSHOT")},n.render=function(){return s.createElement(a.Z,null,s.createElement("div",{className:"tailwind"},s.createElement("div",{className:"my-12 container"})))},r}(s.Component);r.Z=o},12849:function(e,r,n){n.r(r);var t=n(63306),a=n(67294);r.default=function(){return a.createElement(t.Z,{module:"pulsar"})}}}]);