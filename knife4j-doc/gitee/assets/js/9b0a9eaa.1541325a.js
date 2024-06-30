"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7128],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"production-forbidden-ui",title:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u3001Swagger\u7b49Ui\u8d44\u6e90\u548c\u63a5\u53e3",description:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u7b49Ui\u8d44\u6e90",keywords:["knife4j","\u5c4f\u853dswagger","\u5c4f\u853dknife4j"],sidebar_position:4,author:"\u516b\u4e00\u83dc\u5200",data:"2023\u5e747\u670819\u65e5"},p=void 0,s={unversionedId:"blog/production-forbidden-ui",id:"blog/production-forbidden-ui",title:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u3001Swagger\u7b49Ui\u8d44\u6e90\u548c\u63a5\u53e3",description:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u7b49Ui\u8d44\u6e90",source:"@site/docs/blog/production-forbidden-ui.mdx",sourceDirName:"blog",slug:"/blog/production-forbidden-ui",permalink:"/docs/blog/production-forbidden-ui",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1689775801,formattedLastUpdatedAt:"2023\u5e747\u670819\u65e5",sidebarPosition:4,frontMatter:{id:"production-forbidden-ui",title:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u3001Swagger\u7b49Ui\u8d44\u6e90\u548c\u63a5\u53e3",description:"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u5c4f\u853dKnife4j\u7b49Ui\u8d44\u6e90",keywords:["knife4j","\u5c4f\u853dswagger","\u5c4f\u853dknife4j"],sidebar_position:4,author:"\u516b\u4e00\u83dc\u5200",data:"2023\u5e747\u670819\u65e5"}},u={},d=[{value:"1.\u76ee\u7684",id:"1\u76ee\u7684",level:2},{value:"2.\u89e3\u51b3\u65b9\u6848",id:"2\u89e3\u51b3\u65b9\u6848",level:2},{value:"2.1 \ud83c\udf31 \u57fa\u4e8eSpring Boot\u6846\u67b6\u63d0\u4f9b\u7684<code>@Conditional</code>\u6761\u4ef6\u63a7\u5236\u76f8\u5173<code>@Bean</code>\u7684\u751f\u6548",id:"21--\u57fa\u4e8espring-boot\u6846\u67b6\u63d0\u4f9b\u7684conditional\u6761\u4ef6\u63a7\u5236\u76f8\u5173bean\u7684\u751f\u6548",level:3},{value:"2.2 \u26d4 \u57fa\u4e8eServlet\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d",id:"22--\u57fa\u4e8eservlet\u4f53\u7cfb\u4e0b\u7684filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d",level:3},{value:"2.3 \u26f0\ufe0f \u57fa\u4e8eGateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d",id:"23-\ufe0f-\u57fa\u4e8egateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d",level:3},{value:"2.4 \ud83d\udc80 \u57fa\u4e8eMaven\u9879\u76ee\u7684jar\u6392\u9664\u673a\u5236\u4ece\u6839\u6e90\u89e3\u51b3\u95ee\u9898",id:"24--\u57fa\u4e8emaven\u9879\u76ee\u7684jar\u6392\u9664\u673a\u5236\u4ece\u6839\u6e90\u89e3\u51b3\u95ee\u9898",level:3},{value:"2.5 \ud83d\udca3 \u57fa\u4e8e\u751f\u4ea7\u73af\u5883Nginx\u3001Ingress\u7b49\u63a7\u5236\u8bf7\u6c42\u8def\u5f84\u5904\u7406",id:"25--\u57fa\u4e8e\u751f\u4ea7\u73af\u5883nginxingress\u7b49\u63a7\u5236\u8bf7\u6c42\u8def\u5f84\u5904\u7406",level:3},{value:"3.\u603b\u7ed3",id:"3\u603b\u7ed3",level:2}],c={toc:d},m="wrapper";function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Spring Boot \u5e94\u7528\u4e2d,\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5c4f\u853dKnife4j\u53ca\u76f8\u5173Swagger\u8d44\u6e90"),(0,a.kt)("p",null,"\u5173\u8054Issues\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/I67JDM",target:"_blank",rel:"noopener"},"\u5f00\u542f\u751f\u4ea7\u73af\u5883,\u5c4f\u853d\u6240\u6709\u8d44\u6e90\u63a5\u53e3")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/I4XDYE",target:"_blank",rel:"noopener"},"\u751f\u4ea7\u73af\u5883\u5c4f\u853dbug")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/I2810R",target:"_blank",rel:"noopener"},"3.0.2 \u914d\u7f6e\u751f\u4ea7\u73af\u5883\u5c4f\u853d\u540e\uff0c\u4f9d\u7136\u53ef\u4ee5\u8bbf\u95ee\u90e8\u5206\u63a5\u53e3")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/IYSZE",target:"_blank",rel:"noopener"},"yml\u683c\u5f0f \u5c4f\u853dSwagger\u6240\u6709\u8d44\u6e90\uff0c\u4e0d\u751f\u6548")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/IP1HK",target:"_blank",rel:"noopener"},"\u751f\u4ea7\u73af\u5883swagger-ui\u5c4f\u853d")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/ISBVR",target:"_blank",rel:"noopener"},"\u5f00\u542f\u751f\u4ea7\u73af\u5883,\u5c4f\u853dSwagger\u6240\u6709\u8d44\u6e90\u63a5\u53e3 \u5efa\u8bae")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://gitee.com/xiaoym/knife4j/issues/I4Z2Z6",target:"_blank",rel:"noopener"},"\u751f\u4ea7\u73af\u5883\u5c4f\u853d\u914d\u7f6e&2.0.9\u7248\u672c\u95ee\u9898")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiaoymin/knife4j/issues/578",target:"_blank",rel:"noopener"},"4.1.0 basic \u9a8c\u8bc1\uff0c \u4efb\u610f\u8bf7\u6c42\u90fd\u4f1a\u5bfc\u81f4\u8bf7\u6c42\u901a\u8fc7\uff0c\u4ece\u800c\u5bfc\u81f4doc.html \u4e0d\u63d0\u793a\u9a8c\u8bc1")),(0,a.kt)("li",{parentName:"ul"},"\u2705 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiaoymin/knife4j/issues/338",target:"_blank",rel:"noopener"},"springcloud \u751f\u4ea7\u73af\u5883\u65e0\u6cd5\u5173\u95ed")),(0,a.kt)("li",{parentName:"ul"},"......")),(0,a.kt)("p",null,"\ud83c\udfd6\ufe0f \u672c\u6587\u4ed3\u5e93\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xiaoymin/knife4j-demo/tree/master/knife4j-forbidden-api",target:"_blank",rel:"noopener"},"knife4j-forbidden-api")),(0,a.kt)("p",null,"\u4ece\u4ed3\u5e93\u7684issues\u4e2d\u4e0d\u96be\u53d1\u73b0\uff0c\u8be5\u9700\u6c42\u786e\u786e\u5b9e\u5b9e\u5b58\u5728\uff0c\u867d\u7136\u5728Knife4j\u4e4b\u524d\u7684\u7248\u672c\uff0c\u5e76\u6ca1\u6709\u63d0\u4f9b\u5c4f\u853d\u8d44\u6e90\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u4f46\u4e5f\u6709\u5f88\u591a\u5f00\u53d1\u8005\u63d0\u4e86\u5efa\u8bae"),(0,a.kt)("p",null,"\u8fd9\u5728\u4e4b\u540e\u7684\u7248\u672c\u8fed\u4ee3\u4e2d,Knife4j\u4e3b\u8981\u63d0\u4f9b\u4e86",(0,a.kt)("a",{parentName:"p",href:"/docs/features/accessControl#352-%E8%AE%BF%E9%97%AE%E9%A1%B5%E9%9D%A2%E5%8A%A0%E6%9D%83%E6%8E%A7%E5%88%B6",target:null,rel:null},"Basic\u9a8c\u8bc1"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/docs/features/accessControl",target:null,rel:null},"Production\u66b4\u529b\u5c4f\u853d"),"\u7684\u624b\u6bb5\uff0c\u8fd9\u4e9b\u90fd\u662f\u57fa\u4e8e\u5b9e\u9645\u9700\u6c42\u573a\u666f\u51fa\u53d1\u6765\u505a\u7684,\u751f\u4ea7\u73af\u5883\u5c4f\u853d\u63a5\u53e3\u63cf\u8ff0\u4e5f\u662f\u4e3a\u4e86\u4fdd\u62a4\u5e94\u7528\u7a0b\u5e8f\u5b89\u5168\u7684\u4e00\u79cd\u624b\u6bb5\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u7ad9\u5728\u5b9e\u9645\u9700\u6c42\u4ee5\u53ca\u4e1a\u52a1\u573a\u666f\u7684\u89d2\u5ea6\uff0c\u53bb\u5206\u6790\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u8fdb\u884c\u5c4f\u853d\u63a5\u53e3"),(0,a.kt)("p",null,"\u4eceissues\u4e2d\uff0c\u6211\u4eec\u5c4f\u853d\u7684\u573a\u666f\u4e3b\u8981\u53d1\u751f\u5728\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \u5355\u4f53Spring Boot\u5e94\u7528\u5c4f\u853d\u63a5\u53e3\u548c\u9759\u6001ui\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u5fae\u670d\u52a1Spring Cloud\u3001Spring Cloud Gateway\u7f51\u5173\u573a\u666f\u4e0b\u5c4f\u853d\u63a5\u53e3\u548c\u9759\u6001\u8d44\u6e90")),(0,a.kt)("p",null,"\u5c4f\u853d\u7684\u624b\u6bb5\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd(\u6b22\u8fce\u8865\u5145):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf31 \u57fa\u4e8eSpring Boot\u6846\u67b6\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"@Conditional"),"\u6761\u4ef6\u63a7\u5236\u76f8\u5173",(0,a.kt)("inlineCode",{parentName:"li"},"@Bean"),"\u7684\u751f\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u26d4 \u57fa\u4e8eServlet\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"),(0,a.kt)("li",{parentName:"ul"},"\u26f0\ufe0f \u57fa\u4e8eGateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc80 \u57fa\u4e8eMaven\u9879\u76ee\u7684jar\u6392\u9664\u673a\u5236\u4ece\u6839\u6e90\u89e3\u51b3\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca3 \u57fa\u4e8e\u751f\u4ea7\u73af\u5883Nginx\u3001Ingress\u7b49\u63a7\u5236\u8bf7\u6c42\u8def\u5f84\u5904\u7406")),(0,a.kt)("h2",{id:"1\u76ee\u7684"},"1.\u76ee\u7684"),(0,a.kt)("p",null,"\u901a\u8fc7\u5f00\u53d1\u8005\u63d0\u51fa\u7684issues\uff0c\u5c4f\u853d\u7684\u76ee\u7684\u53ca\u63d0\u4f9bBasic\u9a8c\u8bc1\u7684\u65b9\u6848\u6765\u5206\u6790\uff0c\u6211\u89c9\u5f97\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd10 \u751f\u4ea7\u73af\u5883\u4e0a\u7ebf\u7684\u7cfb\u7edf\uff0c\u5c4f\u853d\u63a5\u53e3\u63cf\u8ff0\u6027\u89c4\u8303\uff0c\u5bf9\u4e8e\u751f\u4ea7\u7cfb\u7edf\u662f\u4e00\u79cd",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u5168\u4fdd\u62a4\u673a\u5236")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd10 Basic\u65b9\u6848\u66f4\u5e0c\u671b\u7684\u662f\u80fd\u591f\u4e0a\u7ebf\u540e\u4e5f\u4fdd\u7559\u63a5\u53e3\uff0c\u89e3\u51b3\u751f\u4ea7\u73af\u5883\u51fa\u95ee\u9898\u65f6\u4fbf\u4e8e\u8c03\u8bd5\u5b9a\u4f4d\u95ee\u9898\uff0c\u5f53Basic\u80fd\u8d77\u5230\u4e00\u5b9a\u7684\u5b89\u5168\u9632\u62a4\u4f5c\u7528")),(0,a.kt)("h2",{id:"2\u89e3\u51b3\u65b9\u6848"},"2.\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h3",{id:"21--\u57fa\u4e8espring-boot\u6846\u67b6\u63d0\u4f9b\u7684conditional\u6761\u4ef6\u63a7\u5236\u76f8\u5173bean\u7684\u751f\u6548"},"2.1 \ud83c\udf31 \u57fa\u4e8eSpring Boot\u6846\u67b6\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"h3"},"@Conditional"),"\u6761\u4ef6\u63a7\u5236\u76f8\u5173",(0,a.kt)("inlineCode",{parentName:"h3"},"@Bean"),"\u7684\u751f\u6548"),(0,a.kt)("p",null,"\u5728Spring Boot\u5f00\u53d1\u6846\u67b6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u6761\u4ef6\u6ce8\u5165\u7684\u673a\u5236\u6ce8\u89e3",(0,a.kt)("inlineCode",{parentName:"p"},"@Conditional"),",\u987e\u540d\u601d\u4e49\u5c31\u662f\u53ef\u4ee5\u6307\u5b9a\u6211\u4eec\u7684\u4ee3\u7801\u5728\u7279\u5b9a\u73af\u5883\u624d\u751f\u6548\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u5728\u5199\u7b2c\u4e09\u65b9\u7684starter\u7684\u5305\u65f6\uff0c\u662f\u4e00\u79cd\u7ecf\u5e38\u4f7f\u7528\u7684\u624b\u6bb5\u3002\u6709\u5173",(0,a.kt)("inlineCode",{parentName:"p"},"@Conditional"),"\u6ce8\u89e3\u7b49\u6761\u4ef6\u6ce8\u5165\u7684\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003\u6211\u4e4b\u524d\u5206\u4eab\u7684\u4e00\u7bc7Blog",(0,a.kt)("a",{parentName:"p",href:"https://www.xiaominfo.com/blog/springboot/2020-09-23-spring-boot-conditional",target:"_blank",rel:"noopener"},"\u300aSpring Boot\u6846\u67b6\u4e2d\u5982\u4f55\u4f18\u96c5\u7684\u6ce8\u5165\u5b9e\u4f53Bean\u300b")),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u9700\u6c42\u573a\u666f\u662f\uff1a\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u80fd\u591f\u5c4f\u853d\u90e8\u5206\u63a5\u53e3\u4ee5\u53caUi\u8d44\u6e90\uff0c\u90a3\u4e48\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u7ed3\u5408",(0,a.kt)("inlineCode",{parentName:"p"},"@Conditional"),"\u6ce8\u89e3\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"@Profile"),"\u6ce8\u89e3\u6765\u5b9e\u73b0\u4e0d\u540c\u73af\u5883\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@Bean"),"\u52a0\u8f7d\u673a\u5236\u5462\uff1f"),(0,a.kt)("p",null,"\u7b54\u6848\u5f53\u7136\u662f\u53ef\u4ee5\u7684,\u8003\u8651\u5230\u5728Spring Boot\u73af\u5883\u4e2d\u5927\u90e8\u5206\u7684\u4e2d\u95f4\u4ef6\u90fd\u63d0\u4f9b\u4e86\u914d\u7f6e\u5316,\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"enable"),"\u5c5e\u6027\u6765\u5f00\u542f\u52a0\u8f7d\u914d\u7f6e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"spring.profiles"),"\u901a\u8fc7\u914d\u7f6e\u8fdb\u884c\u533a\u5206"),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u4f8b\u5b50\uff1a\u6211\u4eec\u5bf9\u4e8eKnife4j\u7684\u914d\u7f6e\u6587\u4ef6\u6709\u4e24\u4e2a\uff0c\u5206\u522b\u5bf9\u5e94dev\u73af\u5883\u548cprod\u73af\u5883"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883(dev)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application-dev.yml"',title:'"application-dev.yml"'},"knife4j:\n  enable: true\n  ## other properties.......\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883(prod)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="application-prod.yml"',title:'"application-prod.yml"'},"knife4j:\n  enable: false\n  ## other properties.......\n\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u7a0b\u5e8f\u5728\u542f\u52a8\u65f6\uff0c\u53ea\u9700\u8981\u901a\u8fc7\u8bbe\u5b9aSpring Boot\u5e94\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Profiles"),"\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u6211\u4eec\u7684\u63a5\u53e3\u65e0\u6cd5\u8bbf\u95ee\uff0c\u5982\u679c\u6211\u4eec\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),"\u73af\u5883\uff0c\u90a3\u4e48\u8bbf\u95ee\u6587\u6863\u65f6\uff0c\u4f1a\u51fa\u73b0\u63a5\u53e3404\u7684\u60c5\u51b5~"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a"),"\u8fd9\u79cd\u60c5\u51b5\u662f\u5bf9\u4e8eJava\u540e\u7aef\u5e94\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u7c7b\u7ea7\u522b\u7684\u63a7\u5236\uff0c\u901a\u8fc7Spring Boot\u6846\u67b6\u63d0\u4f9b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@Conditional"),"\u6ce8\u89e3\u6765\u8fbe\u5230\u6761\u4ef6\u6ce8\u5165\u53ca\u90e8\u5206\u4ee3\u7801\u53ef\u914d\u7f6e\u751f\u6548\u7684\u76ee\u7684"),(0,a.kt)("p",null,"\u867d\u7136\u754c\u9762\u53ef\u8bbf\u95ee\uff0c\u4f46\u662f\u5bf9\u4e8e\u63a5\u53e3\u7684\u89c4\u8303\u63cf\u8ff0\u5e76\u6ca1\u6709\u4f5c\u7528\u3002"),(0,a.kt)("h3",{id:"22--\u57fa\u4e8eservlet\u4f53\u7cfb\u4e0b\u7684filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"},"2.2 \u26d4 \u57fa\u4e8eServlet\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"),(0,a.kt)("p",null,"\u57fa\u4e8eServlet\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d\u662f\u4e00\u79cd\u62e6\u622a\u673a\u5236\uff0c\u4e3b\u8981\u5229\u7528\u4e86Servlet\u89c4\u8303\u4e0b\u7684Filter\u673a\u5236\uff0c\u5bf9\u6240\u6709\u7684\u8bf7\u6c42\u8d44\u6e90\u8fdb\u884c\u62e6\u622a\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5bf9\u6240\u6709\u6d89\u53ca\u5230Knife4j\u3001Swagger\u8d44\u6e90\u7684\u8bf7\u6c42\u90fd\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"),(0,a.kt)("p",null,"\u573a\u666f\u7684\u8d44\u6e90\u62e6\u622a\u5730\u5740\u53ef\u4ee5\u53c2\u8003\u6587\u6863",(0,a.kt)("a",{parentName:"p",href:"/docs/features/accessControl",target:null,rel:null},"\u300a\u8bbf\u95ee\u6743\u9650\u63a7\u5236\u300b")),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u4e86\u8981\u5c4f\u853d\u7684\u8d44\u6e90\uff0c\u4ee5\u53caFilter\u673a\u5236\uff0c\u6b64\u65f6\uff0c\u5f00\u53d1\u8005\u5373\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0Filter\u4ee3\u7801\uff0c\u5e76\u5c06\u5176\u6ce8\u5165\u5230Spring Boot\u7684\u5e94\u7528\u6846\u67b6\u4e2d\u63a5\u53e3"),(0,a.kt)("p",null,"\u5728Knife4j\u63d0\u4f9b\u7684",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/knife4j/blob/dev/knife4j/knife4j-openapi2-spring-boot-starter/src/main/java/com/github/xiaoymin/knife4j/spring/filter/ProductionSecurityFilter.java",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductionSecurityFilter.java"))," \u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {\n    HttpServletRequest httpServletRequest = (HttpServletRequest) request;\n    if (production) {\n        String uri = httpServletRequest.getRequestURI();\n        // \u5339\u914d\u5224\u65aduri\u5730\u5740\u662f\u5426\u6211\u4eec\u9700\u8981\u5c4f\u853d\u7684\u8d44\u6e90\n        if (!match(uri)) {\n            chain.doFilter(request, response);\n        } else {\n            HttpServletResponse resp = (HttpServletResponse) response;\n            resp.setStatus(customCode);\n            resp.sendError(customCode, "You do not have permission to access this page");\n        }\n    } else {\n        chain.doFilter(request, response);\n    }\n}   \n')),(0,a.kt)("h3",{id:"23-\ufe0f-\u57fa\u4e8egateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"},"2.3 \u26f0\ufe0f \u57fa\u4e8eGateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d"),(0,a.kt)("p",null,"\u57fa\u4e8eGateway\u7f51\u5173\u4f53\u7cfb\u4e0b\u7684Filter\u8fc7\u6ee4\u5668\u8fdb\u884c\u62e6\u622a\u5c4f\u853d\u548cServlet\u4f53\u7cfb\u4e0b\u7684Filter\u8fdb\u884c\u62e6\u622a\u662f\u540c\u4e00\u79cd\u601d\u60f3\uff0c\u56e0\u4e3aSpring Cloud Gateway\u662f\u57fa\u4e8eNetty\u9a71\u52a8\u8bbe\u8ba1\u5b9e\u73b0\uff0c\u4f46\u601d\u60f3\u65b9\u6cd5\u662f\u540c\u4e00\u79cd"),(0,a.kt)("p",null,"\u65e0\u975e\u662f\u4f7f\u7528Spring Cloud Gateway\u63d0\u4f9b\u7684Filter\u63a5\u53e3\uff0c\u81ea\u5b9a\u4e49\u5b9e\u73b0match\u540e\u5c4f\u853d\u8fc7\u6ee4"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003Knife4j\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/knife4j/blob/dev/knife4j/knife4j-gateway-spring-boot-starter/src/main/java/com/github/xiaoymin/knife4j/spring/gateway/filter/basic/WebFluxSecurityBasicAuthFilter.java",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"WebFluxSecurityBasicAuthFilter.java"))),(0,a.kt)("h3",{id:"24--\u57fa\u4e8emaven\u9879\u76ee\u7684jar\u6392\u9664\u673a\u5236\u4ece\u6839\u6e90\u89e3\u51b3\u95ee\u9898"},"2.4 \ud83d\udc80 \u57fa\u4e8eMaven\u9879\u76ee\u7684jar\u6392\u9664\u673a\u5236\u4ece\u6839\u6e90\u89e3\u51b3\u95ee\u9898"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u4e5f\u662f\u5229\u7528Maven\u9879\u76ee\u63d0\u4f9b\u7684Profiles\u673a\u5236\uff0c\u6211\u4eec\u5728\u9879\u76ee\u6253\u5305\u6784\u5efa\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5bf9\u4e00\u4e9b\u4e0d\u9700\u8981\u7684jar\u5305\u8fdb\u884cexclusion\u6392\u9664\uff0c\u6bd4\u5982Knife4j\u7684ui\u5305\u6216\u8005swagger\u5b98\u65b9ui\u5305\uff0c\u8fd9\u79cdjar\u5305\u90fd\u662fwebjar\u7c7b\u578b\uff0c\u91cc\u9762\u5168\u90e8\u662f\u9759\u6001\u8d44\u6e90"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Maven"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Profiles"),"\u662f\u4e00\u79cd\u914d\u7f6e\u7ba1\u7406\u673a\u5236\uff0c\u5141\u8bb8\u4f60\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6216\u6761\u4ef6\u8bbe\u7f6e\u548c\u6fc0\u6d3b\u4e0d\u540c\u7684\u6784\u5efa\u914d\u7f6e\u3002\u53ef\u4ee5\u4f7f\u7528Profiles\u6765\u5b9a\u4e49\u4e00\u7ec4\u63d2\u4ef6\u3001\u4f9d\u8d56\u9879\u548c\u6784\u5efa\u9009\u9879\uff0c\u8fd9\u4e9b\u9009\u9879\u5728\u7279\u5b9a\u7684\u6784\u5efa\u73af\u5883\u4e2d\u751f\u6548"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u5728\u751f\u4ea7\u73af\u5883\u65e0\u9700\u8bbf\u95ee\u63d0\u4f9b\u5916\u90e8\u5165\u53e3\uff0c\u90a3\u4e48\u6211\u4eec\u5728\u6253\u5305\u6784\u5efa\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u6392\u9664\u5373\u53ef"),(0,a.kt)("p",null,"\u57fa\u4e8e\u8fd9\u79cd\u601d\u60f3\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u5728\u9879\u76ee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u4e2d\u914d\u7f6eMaven\u7684Profiles\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<profiles>\n    <profile>\n        <id>dev</id>\n        <activation>\n            \x3c!-- \u6fc0\u6d3b\u6761\u4ef6\u4e3a"dev"\u7cfb\u7edf\u5c5e\u6027\u5b58\u5728 --\x3e\n            <property>\n                <name>env</name>\n                <value>dev</value>\n            </property>\n        </activation>\n    </profile>\n    <profile>\n        <id>prod</id>\n        <activation>\n            \x3c!-- \u6fc0\u6d3b\u6761\u4ef6\u4e3a"prod"\u73af\u5883\u53d8\u91cf\u5b58\u5728 --\x3e\n            <property>\n                <name>env</name>\n                <value>prod</value>\n            </property>\n        </activation>\n        <dependencies>\n            <dependency>\n                <groupId>com.github.xiaoymin</groupId>\n                <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>\n                <exclusions>\n                    <exclusion>\n                        <groupId>com.github.xiaoymin</groupId>\n                        <artifactId>knife4j-openapi3-ui</artifactId>\n                    </exclusion>\n                    <exclusion>\n                        <groupId>org.webjars</groupId>\n                        <artifactId>swagger-ui</artifactId>\n                    </exclusion>\n                </exclusions>\n\n            </dependency>\n        </dependencies>\n    </profile>\n</profiles>\n\n')),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u4e3b\u8981\u4f5c\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 \u58f0\u660e\u4e86\u4e24\u4e2aProfile\u7c7b\u578b\uff0cid\u5206\u522b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"prod")),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u914d\u7f6e\u4e86\u4e24\u79cdProfile\u7c7b\u578b\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u540d\u79f0\u6765\u8fdb\u884c\u533a\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u2705 \u5728",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),"\u7c7b\u578b\u4e0b\u9762\uff0c\u6211\u4eec\u914d\u7f6e\u7684\u5f15\u7528jar\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"exclusions"),"\u89c4\u5219\uff0c\u8be5Profile\u7c7b\u578b\u4e0b\u4f1a\u6392\u9664",(0,a.kt)("inlineCode",{parentName:"li"},"knife4j-openapi3-ui"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"swagger-ui"),"\u8fd9\u4e24\u4e2ajar\u5305\uff0c\u800c\u8fd9\u4e24\u4e2a\u5305\u5206\u522b\u662fKnife4j\u548cswagger\u5b98\u7f51\u63d0\u4f9b\u7684Ui\u8d44\u6e90\u5305")),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u5f53\u6211\u4eec\u5728\u9879\u76ee\u6784\u5efa\u6253\u5305\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u53d8\u91cf\uff0c\u8fdb\u884c\u6784\u5efa\uff0c\u6392\u9664\u76f8\u5173\u7684jar\u5305\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Pprod\n")),(0,a.kt)("h3",{id:"25--\u57fa\u4e8e\u751f\u4ea7\u73af\u5883nginxingress\u7b49\u63a7\u5236\u8bf7\u6c42\u8def\u5f84\u5904\u7406"},"2.5 \ud83d\udca3 \u57fa\u4e8e\u751f\u4ea7\u73af\u5883Nginx\u3001Ingress\u7b49\u63a7\u5236\u8bf7\u6c42\u8def\u5f84\u5904\u7406"),(0,a.kt)("p",null,"\u4e0a\u97622.1~2.4\u63d0\u4f9b\u7684\u65b9\u6848\u90fd\u662f\u901a\u8fc7\u4ee3\u7801\u6216\u8005\u5de5\u7a0b\u4e0a\u8fdb\u884c\u914d\u7f6e\u4ee5\u8fbe\u5230\u76ee\u7684\uff0c\u5982\u679c\u6211\u4eec\u7684\u670d\u52a1\u5df2\u7ecf\u4e0a\u7ebf\uff0c\u4e0d\u7ba1\u662fNginx\u6216\u8005\u5728Kubernetes\u96c6\u7fa4\u73af\u5883\u4e2d\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7Nginx\u3001Ingress\u7b49\u4ee3\u7406\u670d\u52a1\u5668\u8fdb\u884c\u914d\u7f6e\u62e6\u622a\u5904\u7406"),(0,a.kt)("p",null,"\u4e5f\u4e0d\u5931\u4e3a\u4e00\u79cd\u5904\u7406\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5728Nginx\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e\u62e6\u622a\u8d44\u6e90\u63a5\u53e3\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nlocation /doc.html {\n    return 403;  # \u8fd4\u56de 403 \u72b6\u6001\u7801\u8868\u793a\u7981\u6b62\u8bbf\u95ee\n}\n\nlocation /swagger-ui.html {\n    return 403;  # \u8fd4\u56de 403 \u72b6\u6001\u7801\u8868\u793a\u7981\u6b62\u8bbf\u95ee\n}\n\n// \u5176\u4ed6\u8def\u7531\u63a5\u53e3\u53ca\u8d44\u6e90\n\n")),(0,a.kt)("p",null,"\u800c\u5728Kubernetes\u96c6\u7fa4\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528Ingress\u63a7\u5236\u8bf7\u6c42,\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-ingress\nspec:\n  rules:\n    - http:\n        paths:\n        # \u8f6c\u53d1doc.html\u5230error-service,\u53ef\u4ee5\u5728\u8be5\u670d\u52a1\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u9519\u8bef\u9875\u9762\u6216\u8fd4\u56de\u9002\u5f53\u7684\u9519\u8bef\u7801\n          - path: /doc.html\n            pathType: Prefix\n            backend:\n              service:\n                name: error-service\n                port:\n                  number: 80\n")),(0,a.kt)("h2",{id:"3\u603b\u7ed3"},"3.\u603b\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u4ece\u5de5\u7a0b\u3001\u4ee3\u7801\u7b49\u591a\u65b9\u89d2\u5ea6\u7ed9\u5927\u5bb6\u63d0\u4f9b\u4e86\u4e00\u79cd\u89e3\u51b3\u601d\u8def\u65b9\u6848\uff0c\u5e0c\u671b\u80fd\u5bf9\u5927\u5bb6\u6709\u6240\u5e2e\u52a9\u3002"))}k.isMDXComponent=!0}}]);