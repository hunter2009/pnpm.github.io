"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2712],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3980:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>o,toc:()=>m,default:()=>u});var a=n(5900),l=n(4750),r=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"Telep\xedt\xe9s"},s=void 0,o={unversionedId:"installation",id:"version-6.x/installation",isDocsHomePage:!1,title:"Telep\xedt\xe9s",description:"\xd6n\xe1ll\xf3 parancsf\xe1jl haszn\xe1lat\xe1val",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/hu/installation",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"6.x",frontMatter:{id:"installation",title:"Telep\xedt\xe9s"},sidebar:"version-6.x/docs",previous:{title:"Motiv\xe1ci\xf3",permalink:"/hu/motivation"},next:{title:"pnpm CLI",permalink:"/hu/pnpm-cli"}},m=[{value:"\xd6n\xe1ll\xf3 parancsf\xe1jl haszn\xe1lat\xe1val",id:"\xf6n\xe1ll\xf3-parancsf\xe1jl-haszn\xe1lat\xe1val",children:[{value:"Node.js nincs el\u0151re telep\xedtve a rendszeren",id:"nodejs-nincs-el\u0151re-telep\xedtve-a-rendszeren",children:[],level:3},{value:"Node.js telep\xedtve van a rendszeren",id:"nodejs-telep\xedtve-van-a-rendszeren",children:[],level:3}],level:2},{value:"Corepack segits\xe9g\xe9vel",id:"corepack-segits\xe9g\xe9vel",children:[],level:2},{value:"npm haszn\xe1lat\xe1val",id:"npm-haszn\xe1lat\xe1val",children:[],level:2},{value:"Via npx resolution",id:"via-npx-resolution",children:[],level:2},{value:"Friss\xedt\xe9s",id:"friss\xedt\xe9s",children:[],level:2},{value:"Kompatibilit\xe1s",id:"kompatibilit\xe1s",children:[],level:2},{value:"Hibaelh\xe1r\xedt\xe1s",id:"hibaelh\xe1r\xedt\xe1s",children:[],level:2},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xf6n\xe1ll\xf3-parancsf\xe1jl-haszn\xe1lat\xe1val"},"\xd6n\xe1ll\xf3 parancsf\xe1jl haszn\xe1lat\xe1val"),(0,r.kt)("h3",{id:"nodejs-nincs-el\u0151re-telep\xedtve-a-rendszeren"},"Node.js nincs el\u0151re telep\xedtve a rendszeren"),(0,r.kt)("p",null,"POSIX rendszereken akkor is telep\xedtheted pnpm-et, ha nincs rajta Node.js, a k\xf6vetkez\u0151 parancsf\xe1jl haszn\xe1lat\xe1val:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Ha nincs telep\xedtve a curl, akkor a wget-et lehet haszn\xe1lni:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Windows rendszeren (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"Mag\xe1t a Node.js-t a ",(0,r.kt)("a",{parentName:"p",href:"/hu/cli/env"},"pnpm env")," parancsokkal lehet telep\xedteni."),(0,r.kt)("h3",{id:"nodejs-telep\xedtve-van-a-rendszeren"},"Node.js telep\xedtve van a rendszeren"),(0,r.kt)("p",null,"Linux vagy macOS rendszeren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n")),(0,r.kt)("p",null,"Windows rendszeren (PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"Az \xf6n\xe1ll\xf3 szkript al\xe1 van \xedrva. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"\xcdgy ellen\u0151rizheti"),"."),(0,r.kt)("h2",{id:"corepack-segits\xe9g\xe9vel"},"Corepack segits\xe9g\xe9vel"),(0,r.kt)("p",null,"A 16.13-as verzi\xf3tol kezdve a Node.js ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," parancs\xe1val kezelheted a k\xfcl\xf6nb\xf6z\u0151 csomagkezel\u0151ket. Ez egy kis\xe9rleti funkci\xf3, ez\xe9rt el\u0151bb enged\xe9lyezned kell a k\xf6vetkez\u0151 parancsal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"Ez automatikusan telep\xedti a pnpm-et a rendszerre. Azonban val\xf3sz\xedn\u0171leg nem a pnpm utols\xf3 verzi\xf3ja ker\xfcl telep\xedt\xe9sre. A friss\xedt\xe9shez ellen\u0151rizd, hogy mi a leg\xfajabb pnpm verzi\xf3, \xe9s futtasd ezt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.22.2 --activate\n")),(0,r.kt)("h2",{id:"npm-haszn\xe1lat\xe1val"},"npm haszn\xe1lat\xe1val"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"via-npx-resolution"},"Via npx resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"friss\xedt\xe9s"},"Friss\xedt\xe9s"),(0,r.kt)("p",null,"pnpm telep\xedt\xe9se ut\xe1n nincs sz\xfcks\xe9g m\xe1s csomagkezel\u0151k haszn\xe1lat\xe1ra a friss\xedt\xe9s\xe9hez. A pnpm-et saj\xe1t maga is friss\xedtheti, \xedgy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/hu/continuous-integration"},"Continuous Integration"),"."))),(0,r.kt)("h2",{id:"kompatibilit\xe1s"},"Kompatibilit\xe1s"),(0,r.kt)("p",null,"Itt van egy lista a kor\xe1bbi pnpm verzi\xf3kr\xf3l a megfelel\u0151 Node.js verzi\xf3t\xe1mogat\xe1ssal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"hibaelh\xe1r\xedt\xe1s"},"Hibaelh\xe1r\xedt\xe1s"),(0,r.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,r.kt)("p",null,"Let's assume you have the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,r.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it have written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/hu/uninstall"},"Uninstalling pnpm"),"."))}u.isMDXComponent=!0}}]);