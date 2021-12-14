"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9162],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8851:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var o=t(5900),a=t(4750),i=(t(9496),t(9613)),r=["components"],l={id:"aliases",title:"Alias"},p=void 0,s={unversionedId:"aliases",id:"version-6.x/aliases",isDocsHomePage:!1,title:"Alias",description:"Gli alias consentono di installare pacchetti con nomi personalizzati.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/it/aliases",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"aliases",title:"Alias"},sidebar:"version-6.x/docs",previous:{title:"Spazio di lavoro",permalink:"/it/workspaces"},next:{title:"Completamento tramite tab per la linea di comando",permalink:"/it/completion"}},c=[],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gli alias consentono di installare pacchetti con nomi personalizzati."),(0,i.kt)("p",null,"Supponiamo che tu usi ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," in tutto il tuo progetto. C'\xe8 un bug in ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," che rompe il tuo progetto. Hai una soluzione ma ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," non la unir\xe0. Normalmente dovresti installare ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," direttamente dal tuo fork (come una dipendenza ospitata da git) o pubblicarlo con un nome diverso. Se usi la seconda soluzione devi sostituire tutti i requisiti nel tuo progetto con il nuovo nome della dipendenza (",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). Con gli alias, hai una terza opzione."),(0,i.kt)("p",null,"Pubblica un nuovo pacchetto chiamato ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," e installalo usando ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," come il suo alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,i.kt)("p",null,"Non sono necessarie modifiche al codice. Tutte le richieste di ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," ora si risolveranno a ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,i.kt)("p",null,"A volte vorrai usare due diverse versioni di un pacchetto nel tuo progetto. Facile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,i.kt)("p",null,"Ora puoi richiedere la prima versione di lodash tramite ",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," e la seconda tramite ",(0,i.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,i.kt)("p",null,"Questo diventa ancora pi\xf9 potente se combinato con gli hook. Forse vuoi sostituire ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash")," con ",(0,i.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," in tutti i pacchetti in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". Puoi ottenere facilmente questo risultato con il seguente ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}u.isMDXComponent=!0}}]);