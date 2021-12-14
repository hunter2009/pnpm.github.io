"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8716],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=p(n),v=r,h=s["".concat(c,".").concat(v)]||s[v]||u[v]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5124:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>d,default:()=>s});var i=n(5900),r=n(4750),l=(n(9496),n(9613)),o=["components"],a={id:"why",title:"pnpm why"},c=void 0,p={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/it/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/it/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/it/5.x/cli/run"}},d=[{value:"Opzioni",id:"opzioni",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--parseable",id:"--parseable",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",children:[],level:3}],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato."),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Mostra l'albero delle dipendenze per il pacchetto specificato di ogni pacchetto nelle sottocartelle o di ogni pacchetto dello spazio di lavoro quando eseguito all'interno di uno spazio di lavoro."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Aggiunto nella versione: v3.7.0"),(0,l.kt)("p",null,"Visualizza le informazioni in formato JSON."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Visualizza output dettagliato."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Visualizza output analizzabile invece della visualizzazione ad albero."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Elenca i pacchetti nella cartella di installazione globale invece che nel progetto corrente."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Ulteriori informazioni sui filtri.")))}s.isMDXComponent=!0}}]);