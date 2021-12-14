"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8737],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),i=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=i(e.components);return o.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(t),s=r,b=c["".concat(d,".").concat(s)]||c[s]||m[s]||a;return t?o.createElement(b,p(p({ref:n},u),{},{components:t})):o.createElement(b,p({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7406:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>i,toc:()=>u,default:()=>c});var o=t(5900),r=t(4750),a=(t(9496),t(9613)),p=["components"],l={id:"how-peers-are-resolved",title:"\u30d4\u30a2\u306e\u89e3\u6c7a\u65b9\u6cd5"},d=void 0,i={unversionedId:"how-peers-are-resolved",id:"how-peers-are-resolved",isDocsHomePage:!1,title:"\u30d4\u30a2\u306e\u89e3\u6c7a\u65b9\u6cd5",description:"pnpm\u306e\u6700\u3082\u512a\u308c\u305f\u6a5f\u80fd\u306e1\u3064\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3001\u7279\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5e38\u306b1\u30bb\u30c3\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u6301\u3064\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u30eb\u30fc\u30eb\u306b\u304a\u3051\u308b\u552f\u4e00\u306e\u4f8b\u5916\u306f\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/how-peers-are-resolved.md",sourceDirName:".",slug:"/how-peers-are-resolved",permalink:"/ja/next/how-peers-are-resolved",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"how-peers-are-resolved",title:"\u30d4\u30a2\u306e\u89e3\u6c7a\u65b9\u6cd5"},sidebar:"docs",previous:{title:"\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f7f\u7528\u3057\u305f<code>node_modules</code>\u306e\u69cb\u9020",permalink:"/ja/next/symlinked-node-modules-structure"},next:{title:"pnpm\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",permalink:"/ja/next/uninstall"}},u=[],m={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm\u306e\u6700\u3082\u512a\u308c\u305f\u6a5f\u80fd\u306e1\u3064\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3001\u7279\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5e38\u306b1\u30bb\u30c3\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u6301\u3064\u3053\u3068\u3067\u3059\u3002 \u3053\u306e\u30eb\u30fc\u30eb\u306b\u304a\u3051\u308b\u552f\u4e00\u306e\u4f8b\u5916\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2"),"\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u306f\u3001\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u4e0a\u4f4d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u89e3\u6c7a\u3055\u308c\u307e\u3059\u3002\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u89aa\u3068\u3057\u3066\u5171\u6709\u3059\u308b\u304b\u3089\u3067\u3059\u3002 \u3064\u307e\u308a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0"),"\u306b2\u3064\u306e\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u304c\u3042\u308b\u3068\u304d (",(0,a.kt)("inlineCode",{parentName:"p"},"bar@^1"),"\u304a\u3088\u3073",(0,a.kt)("inlineCode",{parentName:"p"},"baz@^1"),") \u3001\u540c\u3058\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8907\u6570\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u306e\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),(0,a.kt)("p",null,"\u524d\u306e\u4f8b\u3067\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0"),"\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-1"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"foo-parent-2"),"\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3069\u3061\u3089\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3082",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),"\u304c\u5b58\u5728\u3057\u307e\u3059\u304c\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"baz"),"\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u7570\u306a\u308a\u307e\u3059\u3002 \u7d50\u679c\u3068\u3057\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0"),"\u306f2\u3064\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u3092\u6301\u3064\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u7247\u65b9\u306e\u30bb\u30c3\u30c8\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.0.0"),"\u304c\u3001\u3082\u3046\u7247\u65b9\u306e\u30bb\u30c3\u30c8\u306b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"baz@1.1.0"),"\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001pnpm\u306f\u8907\u6570\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u306b\u3064\u3044\u3066\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0"),"\u306e\u30cf\u30fc\u30c9\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u305f\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u30d5\u30a9\u30eb\u30c0\u306e\u4e2d\u3067\u4ed6\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3059\u308b\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u306e\u96a3\u306b\u30cf\u30fc\u30c9\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"\u3057\u304b\u3057\u3001\u30d1\u30c3\u30b1\u30fc\u30b8",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u304c\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u3064\u5834\u5408\u3001\u304a\u305d\u3089\u304f\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u306f\u8907\u6570\u306b\u306a\u308a\u307e\u3059\u3002pnpm\u306f\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u306e\u89e3\u6c7a\u7d50\u679c\u306b\u5bfe\u3059\u308b\u3001\u305d\u308c\u305e\u308c\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.0.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 foo@1.0.0_bar@1.0.0+baz@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo\n    \u2502       \u251c\u2500\u2500 bar   -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u251c\u2500\u2500 baz   -> ../../baz@1.1.0/node_modules/baz\n    \u2502       \u251c\u2500\u2500 qux   -> ../../qux@1.0.0/node_modules/qux\n    \u2502       \u2514\u2500\u2500 plugh -> ../../plugh@1.0.0/node_modules/plugh\n    \u251c\u2500\u2500 bar@1.0.0\n    \u251c\u2500\u2500 baz@1.0.0\n    \u251c\u2500\u2500 baz@1.1.0\n    \u251c\u2500\u2500 qux@1.0.0\n    \u251c\u2500\u2500 plugh@1.0.0\n")),(0,a.kt)("p",null,"pnpm\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.0.0"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0_bar@1.0.0+baz@1.1.0"),"\u306e\u305d\u308c\u305e\u308c\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u7d50\u679c\u3068\u3057\u3066\u3001Node.js\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u30ea\u30be\u30eb\u30d0\u306f\u6b63\u3057\u3044\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3092\u767a\u898b\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3092\u6301\u305f\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3082\u3001\u305d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u304c\u6301\u3064\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u306f\u3001\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u4e0a\u4f4d\u3067\u89e3\u6c7a\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059"),"\u3002\u3059\u308b\u3068\u3001\u63a8\u79fb\u7684\u4f9d\u5b58\u95a2\u4fc2\u3068\u306a\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8907\u6570\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30bb\u30c3\u30c8\u3068\u3057\u3066\u8868\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30d1\u30c3\u30b1\u30fc\u30b8",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0"),"\u304c1\u3064\u306e\u4f9d\u5b58\u95a2\u4fc2",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u3092\u6301\u3063\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u306f\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2",(0,a.kt)("inlineCode",{parentName:"p"},"c@^1"),"\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0"),"\u304c",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u306e\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3092\u89e3\u6c7a\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3067\u3059\u304b\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"b@1.0.0"),"\u306e\u30d4\u30a2\u4f9d\u5b58\u95a2\u4fc2\u3082\u540c\u3058\u3088\u3046\u306b\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u306e\u69cb\u9020\u304c\u3069\u3046\u306a\u308b\u306e\u304b\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002 \u3053\u3053\u3067\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"a@1.0.0"),"\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u306b2\u56de\u767b\u5834\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u30021\u3064\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.0.0"),"\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3001\u3082\u30461\u3064\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"c@1.1.0"),"\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 a@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.0.0/node_modules/b\n    \u251c\u2500\u2500 a@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 a\n    \u2502       \u2514\u2500\u2500 b -> ../../b@1.0.0_c@1.1.0/node_modules/b\n    \u251c\u2500\u2500 b@1.0.0_c@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.0.0/node_modules/c\n    \u251c\u2500\u2500 b@1.0.0_c@1.1.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 b\n    \u2502       \u2514\u2500\u2500 c -> ../../c@1.1.0/node_modules/c\n    \u251c\u2500\u2500 c@1.0.0\n    \u251c\u2500\u2500 c@1.1.0\n")))}c.isMDXComponent=!0}}]);