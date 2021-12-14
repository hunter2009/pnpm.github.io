"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1149],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),v=i,f=c["".concat(p,".").concat(v)]||c[v]||u[v]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1479:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>c});var r=n(5900),i=n(4750),l=(n(9496),n(9613)),o=["components"],a={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: v4.3.0",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/es/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/es/next/cli/install-test"},next:{title:"pnpm list",permalink:"/es/next/cli/list"}},d=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[],level:3},{value:"--fix",id:"--fix",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v4.3.0"),(0,l.kt)("p",null,"Checks for known security issues with the installed packages."),(0,l.kt)("p",null,"If security issues are found, try to update your dependencies via ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update"),". If a simple update does not fix all the issues, use ",(0,l.kt)("a",{parentName:"p",href:"/es/next/package_json#pnpmoverrides"},"overrides")," to force versions that are not vulnerable. For instance, if ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable, use this overrides to force ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Or alternatively, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"low"),", ",(0,l.kt)("strong",{parentName:"li"},"moderate"),", ",(0,l.kt)("strong",{parentName:"li"},"high"),", ",(0,l.kt)("strong",{parentName:"li"},"critical")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"low"))),(0,l.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,l.kt)("h3",{id:"--fix"},"--fix"),(0,l.kt)("p",null,"Added in: v6.11.0"),(0,l.kt)("p",null,"Add overrides to the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file in order to force non-vulnerable versions of the dependencies."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Output audit report in JSON format."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only audit dev dependencies."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only audit production dependencies."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't audit ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,l.kt)("p",null,"Added in: v6.7.1"),(0,l.kt)("p",null,"If the registry responds with a non-200 status code, the process should exit with 0. So the process will fail only if the registry actually successfully responds with found vulnerabilities."))}c.isMDXComponent=!0}}]);