"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6662],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=o(r),d=i,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var o=2;o<l;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3442:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>o,toc:()=>c,default:()=>h});var n=r(5900),i=r(4750),l=(r(9496),r(9613)),a=["components"],p={id:"publish",title:"pnpm publish"},s=void 0,o={unversionedId:"cli/publish",id:"version-6.x/cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/es/cli/publish",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"6.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-6.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/es/cli/env"},next:{title:"pnpm pack",permalink:"/es/cli/pack"}},c=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[],level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[],level:3},{value:"git-checks",id:"git-checks",children:[],level:3},{value:"publish-branch",id:"publish-branch",children:[],level:3},{value:"--force",id:"--force",children:[],level:3},{value:"--report-summary",id:"--report-summary",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Publishes a package to the registry."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,l.kt)("p",null,"When publishing a package inside a ",(0,l.kt)("a",{parentName:"p",href:"/es/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,l.kt)("p",null,"You may override some fields before publish, using the ",(0,l.kt)("a",{parentName:"p",href:"/es/package_json#publishconfig"},"publishConfig")," field in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". You also can use the ",(0,l.kt)("a",{parentName:"p",href:"/es/package_json#publishconfigdirectory"},(0,l.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools)."),(0,l.kt)("p",null,"When running this command recursively (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,l.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,l.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,l.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,l.kt)("h3",{id:"git-checks"},"git-checks"),(0,l.kt)("p",null,"Added in: v4.11.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default : ",(0,l.kt)("strong",{parentName:"li"},"true")," (since v5)"),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When true, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),(0,l.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,l.kt)("p",null,"Added in: v4.11.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"master")),(0,l.kt)("li",{parentName:"ul"},"Types: ",(0,l.kt)("strong",{parentName:"li"},"String"))),(0,l.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,l.kt)("h3",{id:"--force"},"--force"),(0,l.kt)("p",null,"Added in: v5.18.0"),(0,l.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,"Added in: v6.5.0"),(0,l.kt)("p",null,"Save the list of published packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,"Added in: 4.6.0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/filtering"},"Read more about filtering.")))}h.isMDXComponent=!0}}]);