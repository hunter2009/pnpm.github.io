"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4550],{9613:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3956:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>u});var t=n(5900),o=n(4750),i=(n(9496),n(9613)),a=["components"],p={id:"errors",title:"Error Codes"},s=void 0,l={unversionedId:"errors",id:"version-6.x/errors",isDocsHomePage:!1,title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/versioned_docs/version-6.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/errors",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/errors.md",tags:[],version:"6.x",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"version-6.x/docs",previous:{title:"Working with Git",permalink:"/git"},next:{title:"Logos",permalink:"/logos"}},c=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[],level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[],level:2}],d={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,i.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,i.kt)("p",null,"If you changed the store directory intentionally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,i.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,i.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,i.kt)("p",null,"For instance, package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"However, there is only ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,i.kt)("p",null,"To fix this error, all dependencies that use the ",(0,i.kt)("a",{parentName:"p",href:"/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."))}u.isMDXComponent=!0}}]);