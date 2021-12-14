"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7880],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||p;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1245:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>d});var r=n(5900),a=n(4750),p=(n(9496),n(9613)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"This command is deprecated! Use pnpm exec and pnpm dlx instead.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/pt/next/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/pt/next/pnpm-cli"},next:{title:"Configurando",permalink:"/pt/next/configuring"}},s=[{value:"For new users",id:"for-new-users",children:[],level:2},{value:"For npm users",id:"for-npm-users",children:[],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This command is deprecated! Use ",(0,p.kt)("a",{parentName:"p",href:"/pt/next/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," and ",(0,p.kt)("a",{parentName:"p",href:"/pt/next/cli/dlx"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," instead."))),(0,p.kt)("h2",{id:"for-new-users"},"For new users"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,p.kt)("p",null,"If you just want to run a binary of a project's dependency, see ",(0,p.kt)("a",{parentName:"p",href:"/pt/next/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,p.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,p.kt)("p",null,"npm has a great package runner called ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}d.isMDXComponent=!0}}]);