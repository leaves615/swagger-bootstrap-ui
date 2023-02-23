"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7013],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=a.createContext({}),d=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(k.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,N=s["".concat(k,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},49837:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>k,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},k="Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f",d={unversionedId:"middleware-sources/desktop/config-nacos",id:"middleware-sources/desktop/config-nacos",title:"Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f",description:"Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\u5728\u4ee3\u8868\u8fd0\u884cDesktop\u7ec4\u4ef6\u65f6\uff0c\u6240\u6709\u6570\u636e\u5168\u90e8\u6765\u6e90\u4e8eNacos\u914d\u7f6e\u4e2d\u5fc3\uff0c\u7531\u4e8eNacos\u63d0\u4f9b\u4e86\u53ef\u64cd\u4f5c\u7684Web\u754c\u9762\uff0c\u56e0\u6b64\u4f7f\u7528\u4e0a\u4e5f\u662f\u8f83\u65b9\u4fbf\u7684\u3002",source:"@site/docs/middleware-sources/desktop/config-nacos.md",sourceDirName:"middleware-sources/desktop",slug:"/middleware-sources/desktop/config-nacos",permalink:"/docs/middleware-sources/desktop/config-nacos",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1677160565,formattedLastUpdatedAt:"2023\u5e742\u670823\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"Disk\u672c\u5730\u914d\u7f6e\u6a21\u5f0f",permalink:"/docs/middleware-sources/desktop/config-disk"}},p={},u=[{value:"\u542f\u52a8\u914d\u7f6e",id:"\u542f\u52a8\u914d\u7f6e",level:2},{value:"\u6587\u6863\u914d\u7f6e",id:"\u6587\u6863\u914d\u7f6e",level:2},{value:"Disk\u6a21\u5f0f",id:"disk\u6a21\u5f0f",level:3},{value:"Cloud\u6a21\u5f0f",id:"cloud\u6a21\u5f0f",level:3},{value:"Nacos\u6a21\u5f0f",id:"nacos\u6a21\u5f0f",level:3},{value:"Eureka\u6a21\u5f0f",id:"eureka\u6a21\u5f0f",level:3}],s={toc:u};function m(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f"},"Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f"),(0,l.kt)("p",null,"Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\u5728\u4ee3\u8868\u8fd0\u884cDesktop\u7ec4\u4ef6\u65f6\uff0c\u6240\u6709\u6570\u636e\u5168\u90e8\u6765\u6e90\u4e8eNacos\u914d\u7f6e\u4e2d\u5fc3\uff0c\u7531\u4e8eNacos\u63d0\u4f9b\u4e86\u53ef\u64cd\u4f5c\u7684Web\u754c\u9762\uff0c\u56e0\u6b64\u4f7f\u7528\u4e0a\u4e5f\u662f\u8f83\u65b9\u4fbf\u7684\u3002"),(0,l.kt)("h2",{id:"\u542f\u52a8\u914d\u7f6e"},"\u542f\u52a8\u914d\u7f6e"),(0,l.kt)("p",null,"\u6765\u770bNacos\u6a21\u5f0f\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'\n# \u901a\u8fc7docker-compose\u53ef\u4ee5\u5feb\u901f\u90e8\u7f72knife4j\u670d\u52a1\nversion: "2.0"\nservices:\n  knife4j:\n    container_name: knife4j-desktop-nacos\n    restart: always\n    image: "xiaoymin/knife4j:v2.0"\n    network_mode: "bridge"\n    # \u7aef\u53e3\u6620\u5c04\n    ports:\n      - "10000:10000"\n    # \u6307\u5b9a\u914d\u7f6e\u5c5e\u6027\u6a21\u5f0f\u4e3aNacos\u914d\u7f6e\u4e2d\u5fc3\n    environment:\n      - knife4j.source=nacos\n      - knife4j.nacos.server=127.0.0.1:8848\n      - knife4j.nacos.username=nacos\n      - knife4j.nacos.password=nacos\n      # \u4f7f\u7528\u8005\u81ea\u884c\u5728\u6240\u6307\u5b9a\u7684nacos\u4e0a\u521b\u5efa namespace \u3001dataid\u3001group\n      - knife4j.nacos.namespace=knife4j\n      - knife4j.nacos.dataId=knife4j_data_id\n      - knife4j.nacos.group=DEFAULT_GROUP\n\n')),(0,l.kt)("p",null,"\u5c5e\u6027\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.source"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u8868\u5f53\u524d\u5bb9\u5668\u4ee5\u4ec0\u4e48\u6a21\u5f0f\u542f\u52a8\uff0cnacos\u5219\u4ee3\u8868\u5f53\u524d\u7ec4\u4ef6\u9009\u62e9\u7684\u662f\u57fa\u4e8eNacos\u914d\u7f6e\u4e2d\u5fc3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.server"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u670d\u52a1\u5730\u5740\uff0c\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"ip:port"),",\u63a8\u8350Nacos\u7248\u672c>=2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.username"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u9274\u6743\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.password"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u9274\u6743\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u6240\u5c5enacos\u4e0anamespace\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.dataId"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6edataId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos.group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6egroup\u540d\u79f0")))),(0,l.kt)("p",null,"Nacos\u6a21\u5f0f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8005\u9700\u8981\u4e8b\u5148\u5728Nacos\u914d\u7f6e\u4e2d\u5fc3\u4e2d\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6(\u4ec5\u652f\u6301properties\u548cyml\u7c7b\u578b)\u4ee5\u4f5c\u4e3aDesktop\u7ec4\u4ef6\u6570\u636e\u6e90\u542f\u52a8\u8fd0\u884c\uff0c\u5185\u5bb9\u53ef\u4ee5\u4e3a\u7a7a"),(0,l.kt)("p",null,"\u521b\u5efa\u7684\u8be5\u914d\u7f6e\u6240\u5bf9\u5e94\u7684namespace\u3001dataId\u3001group\u5c31\u662f\u4e0a\u9762\u914d\u7f6e\u6240\u5bf9\u5e94\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u800c\u8be5\u914d\u7f6e\uff0c\u5219\u4e5f\u662fDesktop\u7528\u6765\u805a\u5408\u5404\u65b9OpenAPI\u6570\u636e\u7684\u914d\u7f6e\u6765\u6e90,\u4e0b\u9762\u4ecb\u7ecd\u7684\u56db\u79cd\u6a21\u5f0f\u7684\u914d\u7f6e\u5185\u5bb9\u90fd\u5b58\u653e\u5728\u8be5\u914d\u7f6e\u4e2d"),(0,l.kt)("h2",{id:"\u6587\u6863\u914d\u7f6e"},"\u6587\u6863\u914d\u7f6e"),(0,l.kt)("p",null,"\u4e0b\u9762\u5219\u4ecb\u7ecd\uff0c\u5982\u679c\u5728Nacos\u7684\u914d\u7f6e\u4e2d\u5fc3\uff0c\u914d\u7f6e\u805a\u5408\u4e0d\u540c\u7c7b\u578b\u7684OpenAPI\u89c4\u8303\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u58f0\u660e\uff0c\u4e0d\u540c\u4e8e",(0,l.kt)("a",{parentName:"p",href:"config-disk",target:null,rel:null},"Disk\u672c\u5730\u914d\u7f6e\u4e2d\u5fc3"),"\u6a21\u5f0f\uff0c\u4ee5\u6587\u4ef6\u5939\u4f5c\u4e3a\u6bcf\u4e00\u4e2a\u6587\u6863\u7684\u5185\u5bb9\u8fdb\u884c\u805a\u5408"),(0,l.kt)("p",null,"Nacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\u5219\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5c06\u6240\u6709\u6587\u6863\u7684\u914d\u7f6e\u90fd\u914d\u7f6e\u5728\u540c\u4e00\u4e2a\u914d\u7f6e\u4e2d")),(0,l.kt)("h3",{id:"disk\u6a21\u5f0f"},"Disk\u6a21\u5f0f"),(0,l.kt)("p",null,"\u7531\u4e8e\u5728",(0,l.kt)("a",{parentName:"p",href:"config-disk",target:null,rel:null},"Disk\u672c\u5730\u914d\u7f6e\u4e2d\u5fc3"),"\u6a21\u5f0f\u4e2d\uff0c\u6211\u4eec\u805a\u5408\u672c\u5730OpenAPI\u6587\u4ef6\u5373\u53ef\uff0c\u800cNacos\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\u5219\u6709\u8f7b\u5fae\u4e0d\u540c\uff0c\u56e0\u4e3a\u5df2\u7ecf\u6ca1\u6709\u4e86\u78c1\u76d8\u6587\u4ef6\uff0c\u56e0\u6b64\uff0c\u7528\u6237\u53ef\u4ee5\u5c06OpenAPI\u89c4\u8303\u6587\u4ef6\u5b58\u653e\u5728Nacos\u914d\u7f6e\u4e2d\u5fc3\u4e2d\uff0c\u8fd9\u6837\u5c31\u80fd\u5229\u7528Desktop\u8fdb\u884c\u805a\u5408\u4e86"),(0,l.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="Nacos{dataId=knife4j_data_id,group=DEFAULT_GROUP}"',title:'"Nacos{dataId'},"# \u7b2c\u4e00\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/disk-t1/doc.html\nknife4j.disk[0].contextPath=disk-t1\nknife4j.disk[0].routes[0].name=\u5206\u7ec41\nknife4j.disk[0].routes[0].dataId=openapi1\nknife4j.disk[0].routes[0].group=DEFAULT_GROUP\nknife4j.disk[0].routes[0].order=1\n\n# \u7b2c\u4e8c\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/disk-t2/doc.html\nknife4j.disk[1].contextPath=disk-t2\nknife4j.disk[1].routes[0].name=\u5206\u7ec42-1\nknife4j.disk[1].routes[0].dataId=openapi2\nknife4j.disk[1].routes[0].group=DEFAULT_GROUP\nknife4j.disk[1].routes[0].order=1\nknife4j.disk[1].routes[1].name=\u5206\u7ec42-2\nknife4j.disk[1].routes[1].dataId=openapi3\nknife4j.disk[1].routes[1].group=DEFAULT_GROUP\nknife4j.disk[1].routes[1].order=2\n\n# more....\n\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u5206\u522b\u914d\u7f6e\u4e86\u4e09\u4e2a\u79bb\u7ebf\u7684OpenAPI\u89c4\u8303\u6587\u4ef6\uff0cdataId\u5206\u522b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"openapi1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"openapi2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"openapi3")),(0,l.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(79018).Z,width:"2638",height:"1292"})),(0,l.kt)("p",null,"\u901a\u8fc7\u8be5\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u4ee5\u540eOpenAPI\u5b9a\u4e49\u5185\u5bb9\u5219\u53ef\u4ee5\u7834\u5386\u53f2\u7684\u653e\u5728Nacos\u914d\u7f6e\u4e2d\u5fc3\u800c\u5feb\u901f\u8fdb\u884c\u6e32\u67d3\u4e86\u3002"),(0,l.kt)("p",null,"Disk\u6a21\u5f0f\u8be6\u7ec6\u914d\u7f6e\u5c5e\u6027\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9876\u7ea7\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"disk\u6a21\u5f0f\u6587\u6863\uff0c\u591a\u4e2a\u6587\u6863\u4e0b\u6807\u7d2f\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".contextPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u8def\u5f84\uff0c\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"\u82f1\u6587\u3001\u6570\u5b57\u3001\u82f1\u6587+\u6570\u5b57\u7b49"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"disk\u6a21\u5f0f\u805a\u5408\u7684\u6587\u6863\u6570\u91cf\uff0c\u591a\u4e2a\u5219\u4e0b\u6807\u589e\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes","[0]",".name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5206\u7ec4\u663e\u793a\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes","[0]",".dataId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u653e\u5728Nacos\u914d\u7f6e\u4e2d\u7684OpenAPI\u5185\u5bb9\u7684dataId\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes","[0]",".group"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5OpenAPI\u5185\u5bb9\u5728Nacos\u914d\u7f6e\u4e2d\u5fc3\u4e2d\u7684group\u5206\u7ec4\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes","[0]",".debugUrl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5728\u8c03\u8bd5\u65f6\u7684HTTP\u5730\u5740,\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"http://192.168.1.1:9090"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.disk","[0]",".routes","[0]",".order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5206\u7ec4\u663e\u793a\u987a\u5e8f\u503c\uff0c\u6392\u5e8f\u89c4\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"asc"))))),(0,l.kt)("h3",{id:"cloud\u6a21\u5f0f"},"Cloud\u6a21\u5f0f"),(0,l.kt)("p",null,"Cloud\u6a21\u5f0f\u5219\u914d\u7f6e\u6bd4\u8f83\u7b80\u5355\uff0c\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="Nacos{dataId=knife4j_data_id,group=DEFAULT_GROUP}"',title:'"Nacos{dataId'},"\n# cloud\u6a21\u5f0f\u7b2c\u4e00\u4e2a\u6587\u6863\uff0chttp://ip:port/cloud1/doc.html\nknife4j.cloud[0].contextPath=cloud1\nknife4j.cloud[0].routes[0].name=\u7528\u6237\nknife4j.cloud[0].routes[0].uri=http://192.168.0.152:8999\nknife4j.cloud[0].routes[0].location=/v2/api-docs?group=2.X\u7248\u672c\n\n# cloud\u6a21\u5f0f\u7b2c\u4e8c\u4e2a\u6587\u6863\uff0chttp://ip:port/cloud2/doc.html\nknife4j.cloud[1].contextPath=cloud2\nknife4j.cloud[1].routes[0].name=\u8ba2\u5355\nknife4j.cloud[1].routes[0].uri=http://192.168.0.153:8999\nknife4j.cloud[1].routes[0].location=/v2/api-docs?group=2.X\u7248\u672c\n\n\n\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5c5e\u6027\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9876\u7ea7\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"cloud\u6a21\u5f0f\u6587\u6863\uff0c\u591a\u4e2a\u6587\u6863\u4e0b\u6807\u7d2f\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".contextPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u8def\u5f84\uff0c\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"\u82f1\u6587\u3001\u6570\u5b57\u3001\u82f1\u6587+\u6570\u5b57\u7b49"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"cloud\u6a21\u5f0f\u805a\u5408\u7684\u6587\u6863\u6570\u91cf\uff0c\u591a\u4e2a\u5219\u4e0b\u6807\u589e\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes","[0]",".name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5206\u7ec4\u663e\u793a\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes","[0]",".uri"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"cloud\u6a21\u5f0f\u4e0b\u83b7\u53d6OpenAPI\u4fe1\u606f\u7684\u670d\u52a1\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes","[0]",".location"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u7684\u5b9e\u9645OpenAPI\u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes","[0]",".debugUrl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5728\u8c03\u8bd5\u65f6\u7684HTTP\u5730\u5740(\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u8d70uri\u7684\u5730\u5740),\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"http://192.168.1.1:9090"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.cloud","[0]",".routes","[0]",".order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5206\u7ec4\u663e\u793a\u987a\u5e8f\u503c\uff0c\u6392\u5e8f\u89c4\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"asc"))))),(0,l.kt)("h3",{id:"nacos\u6a21\u5f0f"},"Nacos\u6a21\u5f0f"),(0,l.kt)("p",null,"\u6b64Nacos\u6a21\u5f0f\u5219\u4ee3\u8868\u7684\u662fNacos\u670d\u52a1\u4e2d\u5fc3\uff0c\u901a\u8fc7\u914d\u7f6e\u805a\u5408\u5404\u4e2aNacos\u670d\u52a1\u4e2d\u5fc3\u7684\u5404\u4e2a\u670d\u52a1\u7684OpenAPI\u6587\u6863\uff0c\u7528\u6237\u9700\u8981\u907f\u514d\u6df7\u6dc6\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.\u53ea\u8981\u662f\u7f51\u7edc\u4e92\u901a\uff0c\u5404\u4e2a\u9879\u76ee\u7ec4\u3001\u4e2d\u5fc3\u7684Nacos\u5b9e\u4f8b\u90fd\u53ef\u4ee5\u914d\u7f6e\u3002\n2.Nacos\u7248\u672c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e2.0\u7248\u672c")),(0,l.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="Nacos{dataId=knife4j_data_id,group=DEFAULT_GROUP}"',title:'"Nacos{dataId'},"# Nacos\u6a21\u5f0f\u4e0b\u7684\u7b2c\u4e00\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/nacos_doc1/doc.html\nknife4j.nacos[0].contextPath=nacos_doc1\n# \u805a\u5408192.168.0.110\u670d\u52a1\u5668\u4e0a\u7684Nacos\u5b9e\u4f8b\nknife4j.nacos[0].server=192.168.0.110:8848\nknife4j.nacos[0].username=nacos\nknife4j.nacos[0].password=nacos\nknife4j.nacos[0].namespace=dev\nknife4j.nacos[0].routes[0].name=\u7528\u6237\nknife4j.nacos[0].routes[0].serviceName=userService\nknife4j.nacos[0].routes[0].groupName=DEFAULT_GROUP\nknife4j.nacos[0].routes[0].location=/v2/api-docs?group=2.X\u7248\u672c\n\n# Nacos\u6a21\u5f0f\u4e0b\u7684\u7b2c\u4e8c\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/nacos_doc2/doc.html\nknife4j.nacos[1].contextPath=nacos_doc2\n# \u805a\u5408192.168.0.112\u670d\u52a1\u5668\u4e0a\u7684Nacos\u5b9e\u4f8b\nknife4j.nacos[1].server=192.168.0.112:8848\nknife4j.nacos[1].username=nacos\nknife4j.nacos[1].password=nacos\nknife4j.nacos[1].namespace=dev\nknife4j.nacos[1].routes[0].name=\u7528\u6237\nknife4j.nacos[1].routes[0].serviceName=orderService\nknife4j.nacos[1].routes[0].groupName=DEFAULT_GROUP\nknife4j.nacos[1].routes[0].location=/v2/api-docs?group=default\n\n\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5c5e\u6027\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9876\u7ea7\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u6a21\u5f0f\u6587\u6863\uff0c\u591a\u4e2a\u6587\u6863\u4e0b\u6807\u7d2f\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".contextPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u8def\u5f84\uff0c\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"\u82f1\u6587\u3001\u6570\u5b57\u3001\u82f1\u6587+\u6570\u5b57\u7b49"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".server"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740,\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"ip:port"),",\u4e0d\u9700\u8981protocol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".username"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518cnamespaceId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".clusters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\uff0c\u591a\u4e2a\u4ee5\u9017\u53f7\u5206\u5272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u6a21\u5f0f\u805a\u5408\u7684\u6587\u6863\u6570\u91cf\uff0c\u591a\u4e2a\u5219\u4e0b\u6807\u589e\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5206\u7ec4\u663e\u793a\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".serviceName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u771f\u5b9e\u670d\u52a1\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".groupName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u771f\u5b9e\u670d\u52a1\u6240\u5904\u5206\u7ec4\u540d\u79f0\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULT_GROUP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"nacos\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u771f\u5b9e\u670d\u52a1\u6240\u5904namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".location"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u7684\u5b9e\u9645OpenAPI\u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".debugUrl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5728\u8c03\u8bd5\u65f6\u7684HTTP\u5730\u5740(\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u8d70\u4ecenacos\u6ce8\u518c\u4e2d\u5fc3\u89e3\u6790\u62ff\u5230\u7684\u670d\u52a1\u771f\u5b9e\u5730\u5740)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.nacos","[0]",".routes","[0]",".order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5206\u7ec4\u663e\u793a\u987a\u5e8f\u503c\uff0c\u6392\u5e8f\u89c4\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"asc"))))),(0,l.kt)("h3",{id:"eureka\u6a21\u5f0f"},"Eureka\u6a21\u5f0f"),(0,l.kt)("p",null,"Eureka\u6a21\u5f0f\u5219\u540cNacos\u6a21\u5f0f\u5dee\u4e0d\u591a\uff0c\u805a\u5408Eureka\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u4f8b\u4e0a\u7684\u5404\u4e2a\u5b50\u670d\u52a1OpenAPI\u6587\u6863"),(0,l.kt)("p",null,"\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="Nacos{dataId=knife4j_data_id,group=DEFAULT_GROUP}"',title:'"Nacos{dataId'},"# Eureka\u6a21\u5f0f\u4e0b\u7684\u7b2c\u4e00\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/eureka1/doc.html\nknife4j.eureka[0].contextPath=eureka1\nknife4j.eureka[0].serviceUrl=http://localhost:10000/eureka/\nknife4j.eureka[0].username=eureka\u9274\u6743\u8d26\u53f7\nknife4j.eureka[0].password=eureka\u9274\u6743\u5bc6\u7801\nknife4j.eureka[0].routes[0].name=\u7528\u6237\nknife4j.eureka[0].routes[0].serviceName=userService\nknife4j.eureka[0].routes[0].location=/v2/api-docs?group=2.X\u7248\u672c\n\n# Eureka\u6a21\u5f0f\u4e0b\u7684\u7b2c\u4e8c\u4e2a\u6587\u6863\uff0c\u8bbf\u95ee\uff1ahttp://ip:port/eureka2/doc.html\nknife4j.eureka[1].contextPath=eureka2\nknife4j.eureka[1].serviceUrl=http://192.168.0.220:10000/eureka/\nknife4j.eureka[1].username=eureka\u9274\u6743\u8d26\u53f7\nknife4j.eureka[1].password=eureka\u9274\u6743\u5bc6\u7801\nknife4j.eureka[1].routes[0].name=\u7528\u6237\nknife4j.eureka[1].routes[0].serviceName=userService\nknife4j.eureka[1].routes[0].location=/v2/api-docs?group=2.X\u7248\u672c\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5c5e\u6027\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9876\u7ea7\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u6a21\u5f0f\u6587\u6863\uff0c\u591a\u4e2a\u6587\u6863\u4e0b\u6807\u7d2f\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".contextPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u8def\u5f84\uff0c\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"\u82f1\u6587\u3001\u6570\u5b57\u3001\u82f1\u6587+\u6570\u5b57\u7b49"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".serviceUrl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".username"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u6a21\u5f0f\u805a\u5408\u7684\u6587\u6863\u6570\u91cf\uff0c\u591a\u4e2a\u5219\u4e0b\u6807\u589e\u52a0\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes","[0]",".name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5206\u7ec4\u663e\u793a\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes","[0]",".serviceName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"eureka\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u7684\u771f\u5b9e\u670d\u52a1\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes","[0]",".location"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u7684\u5b9e\u9645OpenAPI\u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes","[0]",".debugUrl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6587\u6863\u5728\u8c03\u8bd5\u65f6\u7684HTTP\u5730\u5740(\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u8d70\u4eceeureka\u6ce8\u518c\u4e2d\u5fc3\u89e3\u6790\u62ff\u5230\u7684\u670d\u52a1\u771f\u5b9e\u5730\u5740)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"knife4j.eureka","[0]",".routes","[0]",".order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5206\u7ec4\u663e\u793a\u987a\u5e8f\u503c\uff0c\u6392\u5e8f\u89c4\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"asc"))))))}m.isMDXComponent=!0},79018:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/knife4j-nacos-disk-f46e69b743e551b77a71e47374bc73e1.png"}}]);