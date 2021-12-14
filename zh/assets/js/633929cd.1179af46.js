"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2527],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(t),m=a,d=k["".concat(o,".").concat(m)]||k[m]||s[m]||l;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7510:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>u,default:()=>k});var r=t(5900),a=t(4750),l=(t(9496),t(9613)),p=["components"],i={id:"recursive",title:"pnpm recursive"},o=void 0,c={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"\u5728 package \u4e2d\u7684\u6240\u6709\u5b50\u76ee\u5f55\u6216\u6bcf\u4e2a\u53ef\u7528\u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u9012\u5f52\u8fd0\u884c pnpm \u547d\u4ee4\u3002 \u76ee\u524d\uff0c\u53ea\u6709\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u9012\u5f52\u4f7f\u7528\uff1aadd, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/zh/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/zh/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/zh/5.x/cli/server"}},u=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[],level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[],level:3},{value:"--no-bail",id:"--no-bail",children:[],level:3},{value:"--no-sort",id:"--no-sort",children:[],level:3},{value:"--reverse",id:"--reverse",children:[],level:3}],level:2},{value:"pnpm -r exec",id:"pnpm--r-exec",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d\u7684\u6240\u6709\u5b50\u76ee\u5f55\u6216\u6bcf\u4e2a\u53ef\u7528\u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u9012\u5f52\u8fd0\u884c pnpm \u547d\u4ee4\u3002 \u76ee\u524d\uff0c\u53ea\u6709\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u9012\u5f52\u4f7f\u7528\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"rebuild"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"why")),(0,l.kt)("p",null,"\u522b\u540d\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"true\uff0cfalse\uff0cdee"))),(0,l.kt)("p",null,"\u5c06\u4e00\u4e2a monorepo \u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u672c\u5730\u53ef\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u94fe\u63a5\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules "),"\u4e2d\uff0c\u800c\u4e0d\u662f\u4ece\u6ce8\u518c\u8868\u91cd\u65b0\u4e0b\u8f7d\u3002 \u8fd9\u4e2a\u529f\u80fd\u6a21\u62df\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u5b83\u8bbe\u7f6e\u4e3a deep \u65f6\uff0c\u672c\u5730",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e5f\u53ef\u4ee5\u88ab\u5b50\u4f9d\u8d56\u9879\u94fe\u63a5\u5230\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u9f13\u52b1\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/workspaces#link-workspace-packages"},"npmrc")," \u4ee3\u66ff\u6765\u8fdb\u884c\u6b64\u8bbe\u7f6e\uff0c\u53bb\u5f3a\u5236\u6240\u6709\u73af\u5883\u4e2d\u90fd\u6709\u540c\u6837\u7684\u8868\u73b0\u3002 \u6b64\u9009\u9879\u5355\u72ec\u5b58\u5728\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5728\u5fc5\u8981\u65f6\u8986\u76d6\u5b83\u3002"),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"\u8bbe\u7f6e\u540c\u65f6\u8fd0\u884c\u7684\u6700\u5927\u4efb\u52a1\u6570\u3002 \u5bf9\u4e8e\u65e0\u9650\u7684\u5e76\u53d1\uff0c\u53ef\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity"),"\u3002"),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u5219\u5728\u4efb\u52a1\u629b\u51fa\u9519\u8bef\u65f6\u505c\u6b62\u3002"),(0,l.kt)("p",null,"\u6b64\u914d\u7f6e\u4e0d\u4f1a\u5f71\u54cd\u9000\u51fa\u7801\uff08exit code\uff09\u3002 \u5373\u4f7f\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," \uff0c\u6240\u6709\u4efb\u52a1\u4e5f\u90fd\u5c06\u5b8c\u6210\uff0c\u9664\u975e\u4efb\u610f\u7684\u4efb\u52a1\u6267\u884c\u5931\u8d25\uff0c\u90a3\u4e48\u8be5\u547d\u4ee4\u5c06\u4ee5\u975e\u96f6\u7801\uff08non-zero code\uff09\u9000\u51fa\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff08\u5728\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d run test\uff0c\u5982\u679c\u5176\u4e2d\u4efb\u610f\u4e00\u4e2a\u5931\u8d25\u5219\u7ee7\u7eed\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"\u5f53\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"packages"),"\u6309\u62d3\u6251\u8fdb\u884c\u6392\u5e8f\uff08\u4f9d\u8d56\u4e8e\u4f9d\u8d56\u9879\u524d\uff09\u3002 \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort"),"\u7981\u7528\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1a v5.17.1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,"\u5f53\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e4b\u95f4\u7684\u987a\u5e8f\u4f1a\u98a0\u5012\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,l.kt)("p",null,"Added in: v2.9.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,l.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,l.kt)("p",null,"The name of the current package is available through the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/5.x/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}k.isMDXComponent=!0}}]);