"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1001],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(9496);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3461:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var t=n(5900),i=n(4750),l=(n(9496),n(9613)),a=["components"],o={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-5.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/tr/5.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-5.x/docs",previous:{title:"pnpm link",permalink:"/tr/5.x/cli/link"},next:{title:"pnpm import",permalink:"/tr/5.x/cli/import"}},u=[{value:"Parametreler",id:"parametreler",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;paket_se\xe7ici&gt;",id:"--filter-paket_se\xe7ici",children:[],level:3}],level:2}],s={toc:u};function m(e){var r=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,l.kt)("a",{parentName:"p",href:"/tr/5.x/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,l.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,l.kt)("p",null,"This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/tr/5.x/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-paket_se\xe7ici"},"--filter ","<","paket_se\xe7ici>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/tr/5.x/filtering"},"Buradan daha fazla bilgiye ula\u015fabilirsin.")))}m.isMDXComponent=!0}}]);