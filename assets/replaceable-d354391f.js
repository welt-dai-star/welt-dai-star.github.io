import{t as m,d as b,i as p,c as R}from"./index-75480b85.js";function C(e,o,r){var n=-1,u=e.length;o<0&&(o=-o>u?0:u+o),r=r>u?u:r,r<0&&(r+=u),u=o>r?0:r-o>>>0,o>>>=0;for(var f=Array(u);++n<u;)f[n]=e[n+o];return f}function h(e,o,r){var n=e.length;return r=r===void 0?n:r,!o&&r>=n?e:C(e,o,r)}var A="\\ud800-\\udfff",S="\\u0300-\\u036f",$="\\ufe20-\\ufe2f",y="\\u20d0-\\u20ff",M=S+$+y,j="\\ufe0e\\ufe0f",k="\\u200d",x=RegExp("["+k+A+M+j+"]");function s(e){return x.test(e)}function F(e){return e.split("")}var c="\\ud800-\\udfff",O="\\u0300-\\u036f",U="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",I=O+U+H,J="\\ufe0e\\ufe0f",T="["+c+"]",a="["+I+"]",i="\\ud83c[\\udffb-\\udfff]",V="(?:"+a+"|"+i+")",t="[^"+c+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",E="\\u200d",v=V+"?",g="["+J+"]?",P="(?:"+E+"(?:"+[t,d,l].join("|")+")"+g+v+")*",W=g+v+P,Z="(?:"+[t+a+"?",a,d,l,T].join("|")+")",_=RegExp(i+"(?="+i+")|"+Z+W,"g");function q(e){return e.match(_)||[]}function w(e){return s(e)?q(e):F(e)}function z(e){return function(o){o=m(o);var r=s(o)?w(o):void 0,n=r?r[0]:o.charAt(0),u=r?h(r,1).join(""):o.slice(1);return n[e]()+u}}var K=z("toUpperCase");const N=K;function D(e,o){return b({name:N(e),setup(){var r;const n=(r=p(R,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var u;const f=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u[e];return f?f():o}}})}export{D as r};
