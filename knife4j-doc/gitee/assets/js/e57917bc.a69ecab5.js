"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6098],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},f=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,g=s["".concat(c,".").concat(d)]||s[d]||l[d]||a;return r?t.createElement(g,p(p({ref:n},f),{},{components:r})):t.createElement(g,p({ref:n},f))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10157:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],i={},c="No OpenAPI resource found for group: swagger-config",u={unversionedId:"faq/v4/knife4j-no-openapi",id:"faq/v4/knife4j-no-openapi",title:"No OpenAPI resource found for group: swagger-config",description:"\u5f88\u591a\u670b\u53cb\u5728\u5347\u7ea7\u5230Knife4j 4.0\u7684OpenAPI3\u7248\u672c\u4e2d\uff0c\u4f1a\u51fa\u73b0\u8be5\u9519\u8bef\u4fe1\u606f,\u5bfc\u81f4\u9875\u9762\u52a0\u8f7d\u5931\u8d25",source:"@site/docs/faq/v4/knife4j-no-openapi.md",sourceDirName:"faq/v4",slug:"/faq/v4/knife4j-no-openapi",permalink:"/docs/faq/v4/knife4j-no-openapi",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1677160565,formattedLastUpdatedAt:"2023\u5e742\u670823\u65e5",frontMatter:{},sidebar:"faq",previous:{title:"\u6587\u4ef6\u4e0a\u4f20\u4e0d\u663e\u793a\u4e0a\u4f20\u9009\u62e9\u6587\u672c\u57df",permalink:"/docs/faq/upload-error"}},f={},l=[],s={toc:l};function d(e){var n=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-openapi-resource-found-for-group-swagger-config"},"No OpenAPI resource found for group: swagger-config"),(0,a.kt)("p",null,"\u5f88\u591a\u670b\u53cb\u5728\u5347\u7ea7\u5230Knife4j 4.0\u7684OpenAPI3\u7248\u672c\u4e2d\uff0c\u4f1a\u51fa\u73b0\u8be5\u9519\u8bef\u4fe1\u606f,\u5bfc\u81f4\u9875\u9762\u52a0\u8f7d\u5931\u8d25"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"No OpenAPI resource found for group: swagger-config\n")),(0,a.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\u662f\u518d\u6dfb\u52a0\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"springdoc-openapi-ui"),"\u7684\u4f9d\u8d56\u5373\u53ef\uff0cMaven\u5750\u6807\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.github.xiaoymin</groupId>\n  <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>\n  <version>4.0.0</version>\n</dependency>\n\n\x3c!--\u518d\u6dfb\u52a0\u4e00\u4e2ajar--\x3e\n<dependency>\n  <groupId>org.springdoc</groupId>\n  <artifactId>springdoc-openapi-ui</artifactId>\n  \x3c!--\u4fdd\u6301\u7248\u672c\u4e0eKnife4j v4.0\u7684\u7248\u672c\u4e00\u81f4\uff0c\u907f\u514djar\u5305\u51b2\u7a81\uff0c\u56e0\u4e3aKnife4j-v4.0.0\u7248\u672c\u4f9d\u8d56\u7684springdoc\u7248\u672c\u662f1.6.9 --\x3e\n  <version>1.6.9</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u8be5\u95ee\u9898\u4f1a\u5728\u4e4b\u540e\u76844.1\u7248\u672c\u4e2d\u628a\u4f9d\u8d56\u6dfb\u52a0\u8fdb\u53bb\uff0c\u8fd9\u6837\u5f00\u53d1\u8005\u5c31\u4e0d\u5fc5\u518d\u5355\u72ec\u5f15\u5165\u4e86\u3002\u57284.1\u7248\u672c\u6ca1\u53d1\u7248\u672c\u4e4b\u524d\uff0c\u5148\u4e34\u65f6\u8fd9\u4e48\u89e3\u51b3\u5427~"))}d.isMDXComponent=!0}}]);