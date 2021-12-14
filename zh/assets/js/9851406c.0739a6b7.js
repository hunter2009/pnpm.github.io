"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7398],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=l,k=m["".concat(o,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var d=2;d<a;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8233:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>d,toc:()=>c,default:()=>m});var r=n(5900),l=n(4750),a=(n(9496),n(9613)),p=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"version-6.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"\u522b\u540d: up",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/zh/cli/update",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"update",title:"pnpm update"},sidebar:"version-6.x/docs",previous:{title:"pnpm install",permalink:"/zh/cli/install"},next:{title:"pnpm remove",permalink:"/zh/cli/remove"}},c=[{value:"\u6458\u8981\uff1a",id:"\u6458\u8981",children:[],level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--latest, -L",id:"--latest--l",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--workspace",id:"--workspace",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--interactive, -i",id:"--interactive--i",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u522b\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"up")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u6839\u636e\u6307\u5b9a\u7684\u8303\u56f4\u66f4\u65b0\u8f6f\u4ef6\u5305\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5728\u4e0d\u5e26\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u65f6\uff0c\u5c06\u66f4\u65b0\u6240\u6709\u4f9d\u8d56\u5173\u7cfb\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u6a21\u5f0f\u6765\u66f4\u65b0\u7279\u5b9a\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9075\u5faa ",(0,a.kt)("inlineCode",{parentName:"td"},"package.json")," \u6307\u5b9a\u7684\u8303\u56f4\u66f4\u65b0\u6240\u6709\u7684\u4f9d\u8d56\u9879")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,a.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6240\u6709\u4f9d\u8d56\u9879\uff0c\u6b64\u64cd\u4f5c\u4f1a\u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"td"},"package.json")," \u6307\u5b9a\u7684\u8303\u56f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"td"},"foo")," \u66f4\u65b0\u5230 v2 \u4e0a\u7684\u6700\u65b0\u7248\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,a.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"@babel")," \u8303\u56f4\u5185\u7684\u6240\u6709\u4f9d\u8d56\u9879")))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u540c\u65f6\u5728\u6240\u6709\u5b50\u76ee\u5f55\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," (\u4e0d\u5305\u62ec node_modules) \u8fd0\u884c\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# \u66f4\u65b0\u5b50\u76ee\u5f55\u6df1\u5ea6\u4e3a 100 \u4ee5\u5185\u7684\u6240\u6709\u5305\npnpm --recursive update --depth 100\n# \u5c06\u6bcf\u4e2a\u5305\u4e2d\u7684 typescript \u66f4\u65b0\u4e3a\u6700\u65b0\u7248\u672c\npnpm --recursive update typescript@latest\n")),(0,a.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av3.2.0"),(0,a.kt)("p",null,"\u5ffd\u7565\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6307\u5b9a\u7684\u7248\u672c\u8303\u56f4\u3002 \u76f8\u53cd\uff0c\u7248\u672c\u5c06\u88ab\u6307\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \u88ab\u4f7f\u7528 (\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8de8\u4e3b\u7248\u672c\u7684\u5347\u7ea7) \u3002"),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"\u66f4\u65b0\u5168\u5c40\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u3002"),(0,a.kt)("h3",{id:"--workspace"},"--workspace"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.4.0"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u94fe\u63a5\u5de5\u4f5c\u533a\u4e2d\u6240\u6709\u7684\u5305\u3002 \u7248\u672c\u5c06\u66f4\u65b0\u81f3\u4e0e\u5de5\u4f5c\u533a\u5185\u7684\u5305\u5339\u914d\u7684\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u66f4\u65b0\u4e86\u7279\u5b9a\u7684\u5305\uff0c\u800c\u5728\u5de5\u4f5c\u533a\u5185\u4e5f\u627e\u4e0d\u5230\u4efb\u4f55\u53ef\u66f4\u65b0\u7684 \u4f9d\u8d56\u9879\uff0c\u5219\u547d\u4ee4\u5c06\u4f1a\u5931\u8d25\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"Express")," \u4e0d\u662f\u5de5\u4f5c\u533a\u5185\u7684\u5305\uff0c\u90a3\u4e48\u4ee5\u4e0b \u547d\u4ee4\u5c06\u5931\u8d25:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"\u4ec5\u66f4\u65b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"\u4ec5\u66f4\u65b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"\u5ffd\u7565\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av4.8.0"),(0,a.kt)("p",null,"\u663e\u793a\u8fc7\u65f6\u7684\u4f9d\u8d56\u9879\u5e76\u9009\u62e9\u8981\u66f4\u65b0\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}m.isMDXComponent=!0}}]);