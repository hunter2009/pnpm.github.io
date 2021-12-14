"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3958],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(n),s=l,f=d["".concat(o,".").concat(s)]||d[s]||m[s]||p;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var a=2;a<p;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2055:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>o,metadata:()=>a,toc:()=>u,default:()=>d});var r=n(5900),l=n(4750),p=(n(9496),n(9613)),i=["components"],c={id:"exec",title:"pnpm exec"},o=void 0,a={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0432 \u043a\u043e\u0440\u043d\u0435).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ru/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/ru/next/cli/test"},next:{title:"pnpm dlx",permalink:"/ru/next/cli/dlx"}},u=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0432 \u043a\u043e\u0440\u043d\u0435)."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 (\u043f\u0430\u043a\u0435\u0442\u043e\u0432)."),(0,p.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,p.kt)("p",null,"\u0415\u0441\u043b\u0438 Jest \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c Jest \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e, \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,"\u0427\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432 \u0432\u0438\u0434\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"exec")," \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430, \u0438 \u0435\u0451 \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0443\u0435\u0442 \u0441 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 pnpm:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.9.0"),(0,p.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 (\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430)."),(0,p.kt)("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 pnpm v2.22.0 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u044b\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438)."),(0,p.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"# \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043f\u043a\u0443 node_modules \u0443 \u0432\u0441\u0435\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432\npnpm -r exec -- rm -rf node_modules\n# \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0430\u043a\u0435\u0442\u0435, \u043f\u0440\u043e\u0445\u043e\u0434\u044f \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043f\u0430\u043a\u0435\u0442\u0443\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.1.0"),(0,p.kt)("p",null,"\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0437\u043c \u0438 \u0442\u043e\u043f\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445 \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430. \u042d\u0442\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u043b\u0430\u0433 \u0434\u043b\u044f \u0434\u043e\u043b\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043d\u0430\u0434 \u043c\u043d\u043e\u0433\u0438\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043e\u0440\u043a\u0438."),(0,p.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}d.isMDXComponent=!0}}]);