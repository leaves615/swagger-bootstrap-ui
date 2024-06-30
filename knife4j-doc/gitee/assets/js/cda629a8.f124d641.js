"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9137],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,f=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},s="\u57fa\u4e8e\u9759\u6001Swagger JSON\u6587\u4ef6",p={unversionedId:"solution/ui-front-static",id:"solution/ui-front-static",title:"\u57fa\u4e8e\u9759\u6001Swagger JSON\u6587\u4ef6",description:"\u57fa\u4e8e\u9759\u6001Swagger JSON\u6587\u4ef6\u7684\u65b9\u5f0f\u9884\u89c8\u5f88\u7b80\u5355,\u9996\u5148\u9700\u8981\u4e00\u4e2aHTTP\u7684web\u670d\u52a1\u5373\u53ef",source:"@site/docs/solution/ui-front-static.md",sourceDirName:"solution",slug:"/solution/ui-front-static",permalink:"/docs/solution/ui-front-static",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u8096\u7389\u660e",lastUpdatedAt:1604670995,formattedLastUpdatedAt:"2020\u5e7411\u67086\u65e5",frontMatter:{}},u={},c=[{value:"\u57fa\u4e8enginx",id:"\u57fa\u4e8enginx",level:2},{value:"\u57fa\u4e8eIIS",id:"\u57fa\u4e8eiis",level:2}],g={toc:c},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u4e8e\u9759\u6001swagger-json\u6587\u4ef6"},"\u57fa\u4e8e\u9759\u6001Swagger JSON\u6587\u4ef6"),(0,a.kt)("p",null,"\u57fa\u4e8e\u9759\u6001Swagger JSON\u6587\u4ef6\u7684\u65b9\u5f0f\u9884\u89c8\u5f88\u7b80\u5355,\u9996\u5148\u9700\u8981\u4e00\u4e2aHTTP\u7684web\u670d\u52a1\u5373\u53ef"),(0,a.kt)("p",null,"\u4e24\u79cd\u9009\u62e9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nginx"),(0,a.kt)("li",{parentName:"ul"},"IIS")),(0,a.kt)("p",null,"\u4e0d\u7ba1\u662f\u57fa\u4e8enginx\u8fd8\u662fIIS\uff0c\u9996\u5148\u90fd\u9700\u8981\u5148\u672c\u5730\u751f\u6210\u4e00\u4e2a\u9759\u6001\u7684Swagger JSON\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swagger-bootstrap-ui"),"\u6b64\u5904\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b"),(0,a.kt)("p",null,"\u4fee\u6539\u9879\u76eejson\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"group.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "swagger",\n    "url": "/json/swagger.json",\n    "swaggerVersion": "2.0",\n    "location": "/json/swagger.json"\n  },\n  {\n    "name": "swagger1",\n    "url": "/json/swagger1.json",\n    "swaggerVersion": "2.0",\n    "location": "/json/swagger1.json"\n  }\n]\n')),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u9759\u6001\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"group.json"),"\u6587\u4ef6\u4e2d\u9884\u5b9a\u4e49\u4e86\u4e24\u4e2a\u9759\u6001\u7684swagger JSON\u6587\u4ef6,\u4e5f\u540c\u65f6\u5b58\u653e\u5728json\u6587\u4ef6\u5939\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swagger.json"),"\u7684\u5185\u5bb9\u4e3aswagger\u63a5\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"/v2/api-docs"),"\u4e2d\u54cd\u5e94\u7684\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "swagger": "2.0",\n  "info": {\n    "description": "<div style=\'font-size:14px;color:red;\'>swagger-bootstrap-ui-demo RESTful APIs</div>",\n    "version": "1.0",\n    "title": "swagger-bootstrap-ui\u5f88\u68d2~~~\uff01\uff01\uff01",\n    "termsOfService": "http://www.group.com/",\n    "contact": {\n      "name": "group@qq.com"\n    }\n  },\n  "host": "127.0.0.1:8999",\n  "basePath": "/"\n   //more.....\n}\n')),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\u540e,\u5373\u53ef\u901a\u8fc7nginx\u6216\u8005IIS\u90e8\u7f72\u9759\u6001\u6587\u4ef6\u6d4f\u89c8\u6211\u4eec\u7684\u63a5\u53e3\u6587\u6863\u4e86"),(0,a.kt)("h2",{id:"\u57fa\u4e8enginx"},"\u57fa\u4e8enginx"),(0,a.kt)("p",null,"\u57fa\u4e8enginx\u7684\u65b9\u5f0f,\u53ea\u9700\u8981\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"swagger-bootstrap-ui"),"\u7684\u6240\u6709\u9759\u6001\u6587\u4ef6\u62f7\u8d1d\u5230\u54cd\u5e94\u76ee\u5f55,\u7136\u540e\u518dnginx\u7684conf\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6eserver\u8282\u70b9\u5373\u53ef"),(0,a.kt)("p",null,"\u53c2\u8003\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n        listen       18001;\n        server_name  192.168.0.112;\n        #charset koi8-r;\n\n        location / {\n            #\u6b64\u5904\u4e3aswagger-bootstrap-ui\u9879\u76ee\u4e2dresources\u76ee\u5f55\u4e2d\u7684\u9759\u6001\u8d44\u6e90;\n            root /mnt/application/swagger-static;\n        }\n\n    }\n\n")),(0,a.kt)("h2",{id:"\u57fa\u4e8eiis"},"\u57fa\u4e8eIIS"),(0,a.kt)("p",null,"\u5728Windows\u7cfb\u7edf\u4e2d,\u53ef\u4ee5\u4f7f\u7528IIS\u90e8\u7f72\u6211\u4eec\u7684\u9759\u6001\u7ad9\u70b9,\u5feb\u901f\u9884\u89c8Swagger\u6587\u6863"),(0,a.kt)("p",null,"\u5177\u4f53\u8def\u5f84\uff1a"),(0,a.kt)("p",null,"\u63a7\u5236\u9762\u677f -> \u7ba1\u7406\u5de5\u5177 -> Internet Information Services (IIS)\u7ba1\u7406\u5668 -> \u6dfb\u52a0\u7f51\u7ad9 -> \u9009\u62e9\u9759\u6001\u76ee\u5f55 -> \u6d4f\u89c8"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709IIS\u7ba1\u7406\u5668,\u4f60\u9996\u5148\u9700\u8981\u81ea\u884c\u5b89\u88c5\u8be5\u670d\u52a1,\u81f3\u4e8e\u5982\u4f55\u5b89\u88c5IIS,\u81ea\u884c\u641c\u7d22\u89e3\u51b3,\u6b64\u5904\u4e0d\u518d\u9a9c\u8ff0."))}f.isMDXComponent=!0}}]);