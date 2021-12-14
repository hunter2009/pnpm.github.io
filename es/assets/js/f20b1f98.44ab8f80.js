"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8942],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2035:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>u});var r=t(5900),o=t(4750),l=(t(9496),t(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},c=void 0,p={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Ejecuta un comando de shell en el \xe1mbito de un proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/es/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/es/next/cli/test"},next:{title:"pnpm dlx",permalink:"/es/next/cli/dlx"}},s=[{value:"Ejemplos",id:"ejemplos",children:[],level:2},{value:"Opciones",id:"opciones",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ejecuta un comando de shell en el \xe1mbito de un proyecto."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)("p",null,"Si tienes Jest como dependencia de tu proyecto, no es necesario instalar Jest globalmente, simplemente ejec\xfatalo con ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,l.kt)("p",null,"El argumento ",(0,l.kt)("inlineCode",{parentName:"p"},"exec")," es opcional cuando el comando a ejecutar no est\xe1 en conflicto con un comando incorporado de pnpm, as\xed que tambi\xe9n puedes ejecutar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"A\xf1adido en la versi\xf3n: v2.9.0"),(0,l.kt)("p",null,"Ejecuta un comando de shell en cada proyecto del workspace."),(0,l.kt)("p",null,"El nombre del paquete actual est\xe1 disponible a trav\xe9s de la variable de entorno",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (soportado desde pnpm v2.22.0 en adelante)."),(0,l.kt)("p",null,"Ejemplos:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# elimina las instalaciones de node_modules para todos los paquetes\npnpm -r exec -- rm -rf node_modules\n# lista la informaci\xf3n de todos los paquetes\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"A\xf1adido en la versi\xf3n: v5.1.0"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Leer m\xe1s sobre filtrado.")))}u.isMDXComponent=!0}}]);