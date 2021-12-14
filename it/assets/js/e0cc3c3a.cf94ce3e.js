"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2898],{9613:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>u});var t=i(9496);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=c(i),u=o,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return i?t.createElement(k,a(a({ref:n},s),{},{components:i})):t.createElement(k,a({ref:n},s))}));function u(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=i.length,a=new Array(l);a[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<l;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7839:(e,n,i)=>{i.r(n),i.d(n,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>m});var t=i(5900),o=i(4750),l=(i(9496),i(9613)),a=["components"],r={id:"pnpmfile",title:".pnpmfile.cjs"},p=void 0,c={unversionedId:"pnpmfile",id:"version-6.x/pnpmfile",isDocsHomePage:!1,title:".pnpmfile.cjs",description:"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato .pnpmfile.cjs.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/it/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"pnpmfile",title:".pnpmfile.cjs"},sidebar:"version-6.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/it/pnpm-workspace_yaml"},next:{title:"Spazio di lavoro",permalink:"/it/workspaces"}},s=[{value:"Hooks",id:"hooks",children:[{value:"TL;DR",id:"tldr",children:[],level:3},{value:"<code>hooks.readPackage(pkg, context): pkg | Promise&lt;pkg&gt;</code>",id:"hooksreadpackagepkg-context-pkg--promisepkg",children:[{value:"Argomenti",id:"argomenti",children:[],level:4},{value:"Utilizzo",id:"utilizzo",children:[],level:4},{value:"Limitazioni conosciute",id:"limitazioni-conosciute",children:[],level:4}],level:3},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile | Promise&lt;lockfile&gt;</code>",id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile",children:[{value:"Argomenti",id:"argomenti-1",children:[],level:4},{value:"Esempio di utilizzo",id:"esempio-di-utilizzo",children:[],level:4},{value:"Limitazioni note",id:"limitazioni-note",children:[],level:4}],level:3}],level:2},{value:"Configurazione correlata",id:"configurazione-correlata",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[],level:3},{value:"pnpmfile",id:"pnpmfile",children:[],level:3},{value:"global-pnpmfile",id:"global-pnpmfile",children:[],level:3}],level:2}],d={toc:s};function m(e){var n=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Gli hook possono essere dichiarati in un file chiamato ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"."),(0,l.kt)("p",null,"Per impostazione predefinita, ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella stessa cartella del file di blocco. Ad esempio, in uno ",(0,l.kt)("a",{parentName:"p",href:"/it/workspaces"},"spazio di lavoro")," con un file di blocco ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dovrebbe trovarsi nella radice del monorepo."),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("h3",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Funzione hook"),(0,l.kt)("th",{parentName:"tr",align:null},"Processo"),(0,l.kt)("th",{parentName:"tr",align:null},"Utilizzi"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che pnpm ha analizzato il manifesto del pacchetto della dipendenza"),(0,l.kt)("td",{parentName:"tr",align:null},"Ti permette di mutare il ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json")," di una dipendenza")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che le dipendenze sono state risolte."),(0,l.kt)("td",{parentName:"tr",align:null},"Consente di modificare il file di blocco.")))),(0,l.kt)("h3",{id:"hooksreadpackagepkg-context-pkg--promisepkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg | Promise<pkg>")),(0,l.kt)("p",null,"Consente di modificare ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," di una dipendenza dopo l'analisi e prima della risoluzione. Queste mutazioni non vengono salvate nel filesystem, tuttavia, interessano ci\xf2 viene risolto nel file di blocco e quindi ci\xf2 che viene installato."),(0,l.kt)("p",null,"Nota che dovrai eliminare ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," se hai gi\xe0 risolto la dipendenza che desideri modificare."),(0,l.kt)("h4",{id:"argomenti"},"Argomenti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkg")," - Il manifesto del pacchetto. La risposta dal registro o il contenuto di ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,l.kt)("h4",{id:"utilizzo"},"Utilizzo"),(0,l.kt)("p",null,"Esempio ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," (cambia le dipendenze di una dipendenza):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Sovrascrive il manifesto di foo@1.x dopo averlo scaricato dal registro\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Sostituisce bar@x.x.x con bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // Questo modificher\xe0 ogni pacchetto che usa baz@x.x.x in modo da usare baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,l.kt)("h4",{id:"limitazioni-conosciute"},"Limitazioni conosciute"),(0,l.kt)("p",null,"Rimozione del campo ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," da una dipendenza del manifesto tramite ",(0,l.kt)("inlineCode",{parentName:"p"},"readPackage")," sar\xe0 impedir\xe0 a pnpm di costruire la dipendenza. Quando si crea una dipendenza, pnpm legge il ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," del pacchetto dall'archivio del pacchetto, che non \xe8 interessato dall'hook. Per ignorare la compilazione di un pacchetto, utilizzare il campo ",(0,l.kt)("a",{parentName:"p",href:"/it/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,l.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile--promiselockfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>")),(0,l.kt)("p",null,"Aggiunto nella versione: v1.41.0"),(0,l.kt)("p",null,"Consente di modificare l'output del file di blocco prima che venga serializzato."),(0,l.kt)("h4",{id:"argomenti-1"},"Argomenti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lockfile")," - L'oggetto risoluzioni lockfile serializzato su ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,l.kt)("h4",{id:"esempio-di-utilizzo"},"Esempio di utilizzo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".pnpmfile.cjs"',title:'".pnpmfile.cjs"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,l.kt)("h4",{id:"limitazioni-note"},"Limitazioni note"),(0,l.kt)("p",null,"Non ce ne sono: tutto ci\xf2 che pu\xf2 essere fatto con il file di blocco pu\xf2 essere modificato tramite questa funzione e puoi persino estendere la funzionalit\xe0 del file di blocco."),(0,l.kt)("h2",{id:"configurazione-correlata"},"Configurazione correlata"),(0,l.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,l.kt)("p",null,"Aggiunto nella versione: v1.25.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"Booleano"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," verr\xe0 ignorato. Utile insieme a ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-script")," quando si si desidera assicurarsi che nessuno script venga eseguito durante l'installazione."),(0,l.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,l.kt)("p",null,"Aggiunto nella versione: v1.39.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},".pnpmfile.cjs")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"percorso")),(0,l.kt)("li",{parentName:"ul"},"Esempio: ",(0,l.kt)("strong",{parentName:"li"},".pnpm/.pnpmfile.cjs"))),(0,l.kt)("p",null,"La posizione del file pnpm locale."),(0,l.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,l.kt)("p",null,"Aggiunto nella versione: v1.39.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"percorso")),(0,l.kt)("li",{parentName:"ul"},"Esempio: ",(0,l.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.cjs"))),(0,l.kt)("p",null,"La posizione di un file pnpm globale. Un file pnpm globale viene utilizzato da tutti i progetti durante l'installazione."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Si consiglia di utilizzare file pnpm locali. Usa un pnpmfile globale solo se usi pnpm su progetti che non usano pnpm come gestore di pacchetti principale."))))}m.isMDXComponent=!0}}]);