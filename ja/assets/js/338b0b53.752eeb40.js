"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6545],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>d});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(f,p(p({ref:r},s),{},{components:n})):t.createElement(f,p({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4692:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>m});var t=n(5900),o=n(4750),a=(n(9496),n(9613)),p=["components"],i={id:"errors",title:"Error Codes"},l=void 0,c={unversionedId:"errors",id:"errors",isDocsHomePage:!1,title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ja/next/errors",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"docs",previous:{title:"Git \u3068\u306e\u9023\u643a",permalink:"/ja/next/git"},next:{title:"\u30ed\u30b4",permalink:"/ja/next/logos"}},s=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[],level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[],level:2}],u={toc:s};function m(e){var r=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5b58\u5728\u3057\u3001\u5225\u306e\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u610f\u56f3\u7684\u306b\u5909\u66f4\u3057\u305f\u3044\u5834\u5408\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001pnpm\u306f\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f7f\u7528\u3057\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u306a\u3044\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4f9d\u5b58\u95a2\u4fc2\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u30d1\u30c3\u30b1\u30fc\u30b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u306e\u4f9d\u5b58\u95a2\u4fc2\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," \u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u306f\u5931\u6557\u3059\u308b\u3067\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/next/workspaces#workspace-protocol-workspace"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb"),"\u3092\u4f7f\u7528\u3059\u308b\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002 \u624b\u52d5\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"\u30b3\u30de\u30f3\u30c9\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);