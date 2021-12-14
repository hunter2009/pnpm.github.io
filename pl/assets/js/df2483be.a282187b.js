"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8353],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),a=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=a(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var a=2;a<l;a++)o[a]=t[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3004:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>a,toc:()=>u,default:()=>d});var n=t(5900),i=t(4750),l=(t(9496),t(9613)),o=["components"],c={id:"rebuild",title:"pnpm rebuild"},p=void 0,a={unversionedId:"cli/rebuild",id:"version-5.x/cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/i18n/pl/docusaurus-plugin-content-docs/version-5.x/cli/rebuild.md",sourceDirName:"cli",slug:"/cli/rebuild",permalink:"/pl/5.x/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"5.x",frontMatter:{id:"rebuild",title:"pnpm rebuild"},sidebar:"version-5.x/docs",previous:{title:"pnpm import",permalink:"/pl/5.x/cli/import"},next:{title:"pnpm prune",permalink:"/pl/5.x/cli/prune"}},u=[{value:"Opcje",id:"opcje",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"rb")),(0,l.kt)("p",null,"Rebuild a package."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This command runs the ",(0,l.kt)("strong",{parentName:"p"},"pnpm rebuild")," command in every package of the monorepo."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pl/5.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);