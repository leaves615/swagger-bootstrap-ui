"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},k=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(d,l(l({ref:n},k),{},{components:t})):a.createElement(d,l({ref:n},k))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={},u="4.2 Knife4jAggregation\u5fae\u670d\u52a1\u805a\u5408\u4e2d\u95f4\u4ef6",s={unversionedId:"middleware/knife4jAggregation",id:"middleware/knife4jAggregation",title:"4.2 Knife4jAggregation\u5fae\u670d\u52a1\u805a\u5408\u4e2d\u95f4\u4ef6",description:"\u8be5\u6587\u6863\u9875\u4ecb\u7ecd\u5df2\u4f5c\u5e9f,\u8bf7\u79fb\u6b65\u65b0\u7684\u6587\u6863\u4ecb\u7ecd",source:"@site/docs/middleware/knife4jAggregation.md",sourceDirName:"middleware",slug:"/middleware/knife4jAggregation",permalink:"/docs/middleware/knife4jAggregation",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{}},k={},p=[{value:"4.2.1 \u7ec4\u4ef6\u5c5e\u6027\u8bf4\u660e",id:"421-\u7ec4\u4ef6\u5c5e\u6027\u8bf4\u660e",level:2},{value:"4.2.2 Disk\u6a21\u5f0f",id:"422-disk\u6a21\u5f0f",level:2},{value:"4.2.3 Cloud\u6a21\u5f0f",id:"423-cloud\u6a21\u5f0f",level:2},{value:"4.2.4 Eureka\u6a21\u5f0f",id:"424-eureka\u6a21\u5f0f",level:2},{value:"4.2.4 Nacos\u6a21\u5f0f",id:"424-nacos\u6a21\u5f0f",level:2}],c={toc:p},m="wrapper";function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"42-knife4jaggregation\u5fae\u670d\u52a1\u805a\u5408\u4e2d\u95f4\u4ef6"},"4.2 Knife4jAggregation\u5fae\u670d\u52a1\u805a\u5408\u4e2d\u95f4\u4ef6"),(0,i.kt)("admonition",{title:"\u53cb\u60c5\u63d0\u793a",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u6587\u6863\u9875\u4ecb\u7ecd\u5df2\u4f5c\u5e9f,\u8bf7\u79fb\u6b65\u65b0\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/middleware-sources/aggregation-introduction",target:null,rel:null},"\u6587\u6863\u4ecb\u7ecd"))),(0,i.kt)("p",null,"Knife4j\u4e00\u76f4\u81f4\u529b\u4e8e\u5c06\u76ee\u524d\u7684Ui\u63d0\u4f9b\u7ed9\u66f4\u591a\u7684\u5e73\u53f0\u6216\u8005\u522b\u7684\u8bed\u8a00\u4f7f\u7528\u800c\u52aa\u529b\uff0c\u7ecf\u8fc7\u8fd9\u4e48\u957f\u65f6\u95f4\u7684\u53d1\u5c55\uff0cKnife4j\u63d0\u4f9b\u7684\u8f7b\u91cf\u7ea7\u805a\u5408\u4e2d\u95f4\u4ef6\u7ec8\u4e8e\u8bde\u751f\u4e86\uff0c\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.8"),"\u7248\u672c\u5f00\u59cb\uff0cKnife4j\n\u63d0\u4f9b\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"knife4j-aggregation-spring-boot-starter"),"\u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u662f\u4e00\u4e2a\u57fa\u4e8eSpring Boot\u7cfb\u7edf\u7684starter\uff0c\u4ed6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u79cd\u80fd\u529b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u8f7b\u91cf\u7ea7\u3001\u6700\u7b80\u5355\u3001\u6700\u65b9\u4fbf\u7684\u805a\u5408OpenApi\u89c4\u8303\u7684\u4e2d\u95f4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u8ba9\u6240\u6709\u7684\u57fa\u4e8eSpring Boot\u7684Web\u4f53\u7cfb\u62e5\u6709\u4e86\u8f7b\u677e\u805a\u5408OpenApi\u7684\u80fd\u529b"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b4\u79cd\u6a21\u5f0f\u4f9b\u5f00\u53d1\u8005\u9009\u62e9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u672c\u5730\u9759\u6001JSON\u6587\u4ef6\u7684\u65b9\u5f0f\u805a\u5408OpenAPI"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e91\u7aefHTTP\u63a5\u53e3\u7684\u65b9\u5f0f\u805a\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u805a\u5408"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8eNacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u805a\u5408"))),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8be5starter\u53d1\u5e03\u4e86Docker\u955c\u50cf\uff0c\u8de8\u5e73\u53f0\u4e0e\u8bed\u8a00\u8ba9\u5f00\u53d1\u8005\u57fa\u4e8e\u6b64Docker\u955c\u50cf\u8f7b\u677e\u8fdb\u884c\u805a\u5408OpenAPI\u89c4\u8303 "),(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u7f8e\u517c\u5bb9\u6240\u6709Spring Boot\u7248\u672c\uff0c\u6ca1\u6709\u517c\u5bb9\u6027\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u5f7b\u5e95\u653e\u5f03\u57fa\u4e8eZuul\u3001Spring Cloud Gateway\u7b49\u590d\u6742\u7684\u805a\u5408\u65b9\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u517c\u5bb9OpenAPI2\u89c4\u8303\u4ee5\u53caOpenAPI3\u89c4\u8303")),(0,i.kt)("p",null,"\u57fa\u4e8eSpring Boot\u5f15\u5165\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-aggregation-spring-boot-starter</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93\u641c\u7d22aggregation\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    <version>2.0.8</version>\n</dependency>\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8be5\u7ec4\u4ef6\u7684\u8bf4\u660e\u4ee5\u53ca\u4e0d\u540c\u7684\u805a\u5408\u65b9\u5f0f\u4ecb\u7ecd\n[","[toc]","]"),(0,i.kt)("h2",{id:"421-\u7ec4\u4ef6\u5c5e\u6027\u8bf4\u660e"},"4.2.1 \u7ec4\u4ef6\u5c5e\u6027\u8bf4\u660e"),(0,i.kt)("p",null,"\u65e2\u7136\u57fa\u4e8eSpring Boot\u7684starter\u7ec4\u4ef6\u53d1\u5e03\uff0c\u90a3\u4e48\u5fc5\u7136\u63d0\u4f9b\u4e86\u5f88\u591a\u5c5e\u6027\uff0c\u5b8c\u6574\u7684\u5c5e\u6027\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  cloud:\n    enable: true\n    routes:\n      - name: \u7528\u6237\u4f53\u7cfb\n        uri: 192.168.0.152:8999\n        location: /v2/api-docs?group=2.X\u7248\u672c\n        swaggerVersion: 2.0\n        servicePath: /abbb/ffe\n        routeAuth:\n          enable: true\n          username: test\n          password: 12313\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n  eureka:\n    enable: false\n    serviceUrl: http://localhost:10000/eureka/\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        serviceName: service-order\n        location: /v2/api-docs?group=default\n        swaggerVersion: 2.0\n        servicePath: /order\n        routeAuth:\n          enable: true\n          username: test\n          password: 12313\n  nacos:\n    enable: false\n    serviceUrl: http://localhost:10000/nacos/\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        serviceName: service-order\n        location: /v2/api-docs?group=default\n        swaggerVersion: 2.0\n        servicePath: /order\n        routeAuth:\n          enable: true\n          username: test\n          password: 12313\n  disk:\n    enable: false\n    routes:\n      - name: \u7528\u6237\n        location: classpath:openapi/user.json\n")),(0,i.kt)("p",null,"\u5c5e\u6027\u5206\u4e3a5\u4e2a\u65b9\u9762\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542fKnife4jAggregation\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542fDisk\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542fCloud\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542fEureka\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542fNacos\u6a21\u5f0f")),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Disk\u3001Cloud\u3001Eureka\u3001Nacos\u8fd9\u56db\u79cd\u6a21\u5f0f\u53ea\u80fd\u4f7f\u75281\u79cd\uff0c\u4e0d\u80fd\u6df7\u5408\u4e00\u8d77\u4f7f\u7528(\u5373\u53ea\u80fd\u914d\u7f6e\u8fd94\u4e2d\u6a21\u5f0f\u4e2d\u7684\u4e00\u79cd\u5c5e\u6027\uff0c\u7136\u540e\u5c06\u5176",(0,i.kt)("inlineCode",{parentName:"p"},"enable"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),",\u5176\u4ed6\u4e09\u79cd\u7684enable\u5219\u5fc5\u987b\u8bbe\u7f6e\u4e3afalse)")),(0,i.kt)("p",null,"\u5f00\u542f\u805a\u5408\u7ec4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.enableAggregation"),":\u8be5\u5c5e\u6027\u662f\u524d\u63d0\u6761\u4ef6\uff0c\u5982\u679c\u8981\u542f\u7528\u805a\u5408\uff0c\u90a3\u4e48\u8be5\u5c5e\u6027\u5fc5\u987b\u8bbe\u7f6e\u4e3atrue")),(0,i.kt)("h2",{id:"422-disk\u6a21\u5f0f"},"4.2.2 Disk\u6a21\u5f0f"),(0,i.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/action/aggregation-disk",target:null,rel:null},"\u57fa\u4e8eDisk\u6a21\u5f0f\u805a\u5408OpenAPI")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Disk\u6a21\u5f0f\u4ee3\u8868\u7684\u662f\u672c\u5730\u6a21\u5f0f\uff0c\u5f00\u53d1\u8005\u672c\u5730\u5b58\u5728\u4e00\u4e2a\u6216\u591a\u4e2aOpenAPI\u89c4\u8303\u7684JSON\u6587\u4ef6\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7Knife4j\u7684\u805a\u5408\u7ec4\u4ef6\u5c06\u8be5OpenAPI\u89c4\u8303\u89e3\u6790\u5e76\u6e32\u67d3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  disk:\n    enable: true\n    routes:\n      - name: \u7528\u6237\n        location: classpath:openapi/user.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.disk.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Disk\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes.location"),":\u672c\u5730Disk\u6a21\u5f0f\u805a\u5408\u7684OpenAPI\u89c4\u8303JSON\u6587\u4ef6,\u53ef\u4ee5\u662fV2\u4e5f\u53ef\u4ee5\u662fV3\u7248\u672c")),(0,i.kt)("h2",{id:"423-cloud\u6a21\u5f0f"},"4.2.3 Cloud\u6a21\u5f0f"),(0,i.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/action/aggregation-cloud",target:null,rel:null},"\u57fa\u4e8eCloud\u6a21\u5f0f\u805a\u5408OpenAPI")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53d6\u540dCloud\u6a21\u5f0f\u4ee3\u8868\u7684\u662f\u5f00\u53d1\u8005\u7684OpenAPI\u89c4\u8303\u662f\u4ee5HTTP\u63a5\u53e3\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u914d\u7f6e\u901a\u8fc7\u8c03\u7528HTTP\u63a5\u53e3\u6765\u83b7\u53d6OpenAPI\u89c4\u8303"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  cloud:\n    enable: true\n    routes:\n      - name: \u7528\u6237\u4f53\u7cfb\n        uri: 192.168.0.152:8999\n        location: /v2/api-docs?group=2.X\u7248\u672c\n        swaggerVersion: 2.0\n        servicePath: /abbb/ffe\n        routeAuth:\n          enable: true\n          username: test3\n          password: 66666\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Cloud\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684OpenAPI\u89c4\u8303\u7684HTTP\u63a5\u53e3\u9700\u8981\u4ee5Basic\u9a8c\u8bc1\u8fdb\u884c\u9274\u6743\u8bbf\u95ee\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5982\u679c\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u6a21\u5f0f\u4e0b\u6240\u6709\u914d\u7f6e\u7684Routes\u8282\u70b9\u63a5\u53e3\u90fd\u4f1a\u4ee5Basic\u9a8c\u8bc1\u4fe1\u606f\u8bbf\u95ee\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routeAuth.password"),":Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408(\u5fc5\u9009)\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.uri"),":\u8be5\u670d\u52a1\u7684\u63a5\u53e3URI\u8d44\u6e90\uff0c\u5982\u679c\u662fHTTPS\uff0c\u5219\u9700\u8981\u5b8c\u6574\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.location:"),":\u5177\u4f53\u8d44\u6e90\u63a5\u53e3\u5730\u5740\uff0c\u6700\u7ec8Knife4j\u662f\u901a\u8fc7uri+location\u7684\u7ec4\u5408\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.swaggerVersion"),":\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"2.0"),"\uff0c\u53ef\u9009\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.servicePath"),":\u8be5\u5c5e\u6027\u662f\u6700\u7ec8\u5728Ui\u4e2d\u5c55\u793a\u7684\u63a5\u53e3\u524d\u7f00\u5c5e\u6027\uff0c\u63d0\u4f9b\u8be5\u5c5e\u6027\u7684\u76ee\u7684\u4e5f\u662f\u56e0\u4e3a\u901a\u5e38\u5f00\u53d1\u8005\u5728\u4ee5Gateway\u7b49\u65b9\u5f0f\u805a\u5408\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u524d\u7f00\u8def\u5f84\u6765\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u6700\u7ec8\u8fd9\u4e2a\u524d\u7f00\u8def\u5f84\u4f1a\u5728\u6bcf\u4e2a\u63a5\u53e3\u4e2d\u8fdb\u884c\u8ffd\u52a0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth"),":\u5982\u679c\u8be5Route\u8282\u70b9\u7684\u63a5\u53e3\u5f00\u542f\u4e86Basic\uff0c\u5e76\u4e14\u548c\u516c\u5171\u914d\u7f6e\u7684Basic\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.cloud.routes.routeAuth.password"),":Basic\u5bc6\u7801"))),(0,i.kt)("h2",{id:"424-eureka\u6a21\u5f0f"},"4.2.4 Eureka\u6a21\u5f0f"),(0,i.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/action/aggregation-eureka",target:null,rel:null},"\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u805a\u5408OpenAPI")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4eceEureka\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u805a\u5408\u5df2\u7ecf\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ee5\u53ca\u6ce8\u518c\u7684\u670d\u52a1\u5fc5\u987b\u96c6\u6210OpenAPI\u5e76\u4e14\u80fd\u63d0\u4f9b\u63a5\u53e3\n\u8be5\u6a21\u5f0f\u7c7b\u4f3c\u4e8eCloud\u6a21\u5f0f\uff0c\u53ea\u662f\u9690\u85cf\u4e86\u670d\u52a1\u7684\u5730\u5740\u800c\u5df2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  eureka:\n    enable: false\n    serviceUrl: http://localhost:10000/eureka/\n    serviceAuth:\n      enable: false\n      username: test\n      password: 12313\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        serviceName: service-order\n        location: /v2/api-docs?group=default\n        swaggerVersion: 2.0\n        servicePath: /order\n        routeAuth:\n          enable: true\n          username: test\n          password: 12313\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Eureka\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.serviceUrl"),":Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.serviceAuth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679cEureka\u7684\u6ce8\u518c\u548c\u83b7\u53d6\u670d\u52a1\u9700\u8981\u8fdb\u884cBasic\u8ba4\u8bc1\uff0c\u5f00\u53d1\u8005\u9700\u8981\u914d\u7f6e\u8be5\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.serviceAuth.enable"),":\u662f\u5426\u542f\u7528Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.serviceAuth.usernae"),":Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.serviceAuth.password"),":Eureka\u6ce8\u518c\u4e2d\u5fc3Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routeAuth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684OpenAPI\u89c4\u8303\u7684\u670d\u52a1\u9700\u8981\u4ee5Basic\u9a8c\u8bc1\u8fdb\u884c\u9274\u6743\u8bbf\u95ee\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5982\u679c\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u6a21\u5f0f\u4e0b\u6240\u6709\u914d\u7f6e\u7684Routes\u8282\u70b9\u63a5\u53e3\u90fd\u4f1a\u4ee5Basic\u9a8c\u8bc1\u4fe1\u606f\u8bbf\u95ee\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routeAuth.password"),":Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408(\u5fc5\u9009)\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u4e0d\u914d\u7f6e\uff0c\u6700\u7ec8Ui\u4f1a\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.serviceName"),":Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.uri"),":\u8be5\u670d\u52a1\u7684\u63a5\u53e3URI\u8d44\u6e90\uff0c\u5982\u679c\u662fHTTPS\uff0c\u5219\u9700\u8981\u5b8c\u6574\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.location:"),":\u5177\u4f53\u8d44\u6e90\u63a5\u53e3\u5730\u5740\uff0c\u6700\u7ec8Knife4j\u662f\u901a\u8fc7\u6ce8\u518c\u670d\u52a1uri+location\u7684\u7ec4\u5408\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.swaggerVersion"),":\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"2.0"),"\uff0c\u53ef\u9009\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.servicePath"),":\u8be5\u5c5e\u6027\u662f\u6700\u7ec8\u5728Ui\u4e2d\u5c55\u793a\u7684\u63a5\u53e3\u524d\u7f00\u5c5e\u6027\uff0c\u63d0\u4f9b\u8be5\u5c5e\u6027\u7684\u76ee\u7684\u4e5f\u662f\u56e0\u4e3a\u901a\u5e38\u5f00\u53d1\u8005\u5728\u4ee5Gateway\u7b49\u65b9\u5f0f\u805a\u5408\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u524d\u7f00\u8def\u5f84\u6765\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u6700\u7ec8\u8fd9\u4e2a\u524d\u7f00\u8def\u5f84\u4f1a\u5728\u6bcf\u4e2a\u63a5\u53e3\u4e2d\u8fdb\u884c\u8ffd\u52a0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.routeAuth"),":\u5982\u679c\u8be5Route\u8282\u70b9\u7684\u63a5\u53e3\u5f00\u542f\u4e86Basic\uff0c\u5e76\u4e14\u548c\u516c\u5171\u914d\u7f6e\u7684Basic\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.eureka.routes.routeAuth.password"),":Basic\u5bc6\u7801")),(0,i.kt)("h2",{id:"424-nacos\u6a21\u5f0f"},"4.2.4 Nacos\u6a21\u5f0f"),(0,i.kt)("p",null,"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/action/aggregation-nacos",target:null,rel:null},"\u57fa\u4e8eNacos\u6ce8\u518c\u4e2d\u5fc3\u805a\u5408OpenAPI")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u4eceNacos\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u805a\u5408\u5df2\u7ecf\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ee5\u53ca\u6ce8\u518c\u7684\u670d\u52a1\u5fc5\u987b\u96c6\u6210OpenAPI\u5e76\u4e14\u80fd\u63d0\u4f9b\u63a5\u53e3\n\u8be5\u6a21\u5f0f\u7c7b\u4f3c\u4e8eCloud\u6a21\u5f0f\uff0c\u53ea\u662f\u9690\u85cf\u4e86\u670d\u52a1\u7684\u5730\u5740\u800c\u5df2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enableAggregation: true\n  nacos:\n    enable: true\n    serviceUrl: http://192.168.0.112:8804/nacos/\n    routeAuth:\n      enable: true\n      username: test\n      password: 12313\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        serviceName: service-order\n        groupName: test\n        namespaceId: test\n        clusters: test\n        location: /v2/api-docs?group=default\n        swaggerVersion: 2.0\n        servicePath: /order\n        routeAuth:\n          enable: true\n          username: test\n          password: 12313\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528nacos\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.serviceUrl"),":nacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routeAuth"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a\u516c\u5171Basic\u9a8c\u8bc1\u5c5e\u6027(\u53ef\u9009)\uff0c\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684OpenAPI\u89c4\u8303\u7684\u670d\u52a1\u9700\u8981\u4ee5Basic\u9a8c\u8bc1\u8fdb\u884c\u9274\u6743\u8bbf\u95ee\uff0c\u90a3\u4e48\u53ef\u4ee5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5982\u679c\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u6a21\u5f0f\u4e0b\u6240\u6709\u914d\u7f6e\u7684Routes\u8282\u70b9\u63a5\u53e3\u90fd\u4f1a\u4ee5Basic\u9a8c\u8bc1\u4fe1\u606f\u8bbf\u95ee\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routeAuth.password"),":Basic\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408(\u5fc5\u9009)\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)\uff0c\u5982\u679c\u8be5\u5c5e\u6027\u4e0d\u914d\u7f6e\uff0c\u6700\u7ec8Ui\u4f1a\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.serviceName"),":nacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.groupName"),":Nacos\u5206\u7ec4\u540d\u79f0,\u975e\u5fc5\u987b,\u5f00\u53d1\u8005\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.namespaceId"),":\u547d\u540d\u7a7a\u95f4id,\u975e\u5fc5\u987b,\u5f00\u53d1\u8005\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.clusters"),":\u96c6\u7fa4\u540d\u79f0,\u591a\u4e2a\u96c6\u7fa4\u7528\u9017\u53f7\u5206\u9694,\u975e\u5fc5\u987b,\u5f00\u53d1\u8005\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.uri"),":\u8be5\u670d\u52a1\u7684\u63a5\u53e3URI\u8d44\u6e90\uff0c\u5982\u679c\u662fHTTPS\uff0c\u5219\u9700\u8981\u5b8c\u6574\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.location:"),":\u5177\u4f53\u8d44\u6e90\u63a5\u53e3\u5730\u5740\uff0c\u6700\u7ec8Knife4j\u662f\u901a\u8fc7\u6ce8\u518c\u670d\u52a1uri+location\u7684\u7ec4\u5408\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.swaggerVersion"),":\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"2.0"),"\uff0c\u53ef\u9009\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.servicePath"),":\u8be5\u5c5e\u6027\u662f\u6700\u7ec8\u5728Ui\u4e2d\u5c55\u793a\u7684\u63a5\u53e3\u524d\u7f00\u5c5e\u6027\uff0c\u63d0\u4f9b\u8be5\u5c5e\u6027\u7684\u76ee\u7684\u4e5f\u662f\u56e0\u4e3a\u901a\u5e38\u5f00\u53d1\u8005\u5728\u4ee5Gateway\u7b49\u65b9\u5f0f\u805a\u5408\u65f6\uff0c\u9700\u8981\u4e00\u4e2a\u524d\u7f00\u8def\u5f84\u6765\u8fdb\u884c\u8f6c\u53d1\uff0c\u800c\u6700\u7ec8\u8fd9\u4e2a\u524d\u7f00\u8def\u5f84\u4f1a\u5728\u6bcf\u4e2a\u63a5\u53e3\u4e2d\u8fdb\u884c\u8ffd\u52a0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.routeAuth"),":\u5982\u679c\u8be5Route\u8282\u70b9\u7684\u63a5\u53e3\u5f00\u542f\u4e86Basic\uff0c\u5e76\u4e14\u548c\u516c\u5171\u914d\u7f6e\u7684Basic\u4e0d\u4e00\u6837\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.routeAuth.enable"),":\u662f\u5426\u542f\u7528Basic\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.routeAuth.usernae"),":Basic\u7528\u6237\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"knife4j.nacos.routes.routeAuth.password"),":Basic\u5bc6\u7801")))}d.isMDXComponent=!0}}]);