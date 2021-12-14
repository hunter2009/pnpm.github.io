"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3173],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),s=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(r.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,k=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6639:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>r,metadata:()=>s,toc:()=>c,default:()=>u});var a=t(5900),i=t(4750),o=(t(9496),t(9613)),p=["components"],l={id:"package_json",title:"package.json"},r=void 0,s={unversionedId:"package_json",id:"package_json",isDocsHomePage:!1,title:"package.json",description:"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/it/next/package_json",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"pnpm bin",permalink:"/it/next/cli/bin"},next:{title:".npmrc",permalink:"/it/next/npmrc"}},c=[{value:"Campi",id:"campi",children:[{value:"engines",id:"engines",children:[],level:3},{value:"dependenciesMeta",id:"dependenciesmeta",children:[{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",children:[],level:4}],level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",children:[],level:4}],level:3},{value:"publishConfig",id:"publishconfig",children:[{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",children:[],level:4},{value:"publishConfig.directory",id:"publishconfigdirectory",children:[],level:4}],level:3},{value:"pnpm.overrides",id:"pnpmoverrides",children:[],level:3},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",children:[],level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm."),(0,o.kt)("h2",{id:"campi"},"Campi"),(0,o.kt)("h3",{id:"engines"},"engines"),(0,o.kt)("p",null,"Puoi specificare la versione di Node e pnpm su cui funziona il tuo software:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"Durante lo sviluppo locale, pnpm fallir\xe0 sempre con un messaggio di errore se la sua versione non corrisponde a quella specificata nel campo ",(0,o.kt)("inlineCode",{parentName:"p"},"engine"),"."),(0,o.kt)("p",null,"A meno che l'utente non abbia impostato il flag di configurazione ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," (vedi ",(0,o.kt)("a",{parentName:"p",href:"/it/next/npmrc#engine-strict"},".npmrc"),"), questo campo \xe8 solo consultivo e produrr\xe0 avvisi solo quando il tuo pacchetto \xe8 installato come dipendenza."),(0,o.kt)("h3",{id:"dependenciesmeta"},"dependenciesMeta"),(0,o.kt)("h4",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.20.0"),(0,o.kt)("p",null,"Se questo \xe8 impostato su true per una dipendenza locale, il pacchetto sar\xe0 collegato alla cartella dei moduli, non collegato simbolicamente."),(0,o.kt)("p",null,"Ad esempio, il seguente ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in uno spazio di lavoro creer\xe0 un collegamento simbolico a ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," nella cartella ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," di ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Ma cosa succede se ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," ha ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," nelle sue dipendenze peer? Se tutti i progetti nel monorepo utilizzano la stessa versione di ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),", nessun problema. Ma se ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," \xe8 richiesto da ",(0,o.kt)("inlineCode",{parentName:"p"},"card")," che utilizza ",(0,o.kt)("inlineCode",{parentName:"p"},"react@16")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," con ",(0,o.kt)("inlineCode",{parentName:"p"},"react@17"),"? Senza usare ",(0,o.kt)("inlineCode",{parentName:"p"},"inject"),", dovresti scegliere una singola versione di ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," e installarla come dipendenza dev di ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),". Ma usando il campo ",(0,o.kt)("inlineCode",{parentName:"p"},"injected")," puoi iniettare ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," in un pacchetto e ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," verr\xe0 installato con la versione di ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," di quel pacchetto."),(0,o.kt)("p",null,"Quindi questo sar\xe0 il ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," di ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"button")," sar\xe0 collegato fisicamente alle dipendenze di ",(0,o.kt)("inlineCode",{parentName:"p"},"card")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"react@16")," sar\xe0 collegato simbolicamente alle dipendenze di ",(0,o.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,o.kt)("p",null,"E questo sar\xe0 il ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," di ",(0,o.kt)("inlineCode",{parentName:"p"},"form"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"button")," sar\xe0 collegato fisicamente alle dipendenze di ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"react@17")," sar\xe0 collegato simbolicamente alle dipendenze di ",(0,o.kt)("inlineCode",{parentName:"p"},"form/node_modules/button"),"."),(0,o.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"Questo campo elenca alcune informazioni aggiuntive relative alle dipendenze elencate nel campo ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,o.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,o.kt)("p",null,"Se questo \xe8 impostato su true, la dipendenza peer selezionata verr\xe0 contrassegnata come opzionale dal gestore pacchetti. Pertanto, il consumatore che lo omette non sar\xe0 pi\xf9 segnalato come errore."),(0,o.kt)("p",null,"Ad esempio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Si noti che anche se ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," non \xe8 stato specificato in ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", \xe8 contrassegnato come facoltativo. pnpm quindi presumer\xe0 che qualsiasi versione di bar vada bene. Tuttavia, ",(0,o.kt)("inlineCode",{parentName:"p"},"pippo")," \xe8 facoltativo, ma solo per la specifica della versione richiesta."),(0,o.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"Aggiunto nella versione: v3.4.0"),(0,o.kt)("p",null,"\xc8 possibile sovrascrivere alcuni campi nel manifesto prima che il pacchetto sia impacchettato. I seguenti campi possono essere sovrascritti:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,o.kt)("inlineCode",{parentName:"a"},"typings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,o.kt)("li",{parentName:"ul"},"cpu"),(0,o.kt)("li",{parentName:"ul"},"os")),(0,o.kt)("p",null,"Per sovrascrivere un campo, aggiungi la versione pubblica del campo in ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"Ad esempio, il seguente ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Verr\xe0 pubblicato come:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,o.kt)("h4",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.11.5"),(0,o.kt)("p",null,"Per impostazione predefinita, per motivi di portabilit\xe0, nessun file tranne quelli elencati nel campo bin verr\xe0 contrassegnato come eseguibile nell'archivio del pacchetto risultante. Il campo ",(0,o.kt)("inlineCode",{parentName:"p"},"executableFiles")," consente di dichiarare campi aggiuntivi che devono avere il flag dell'eseguibile (+x) impostato anche se non sono direttamente accessibili tramite il campo bin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js",\n    ]\n  }\n}\n')),(0,o.kt)("h4",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.7.0"),(0,o.kt)("p",null,"Puoi anche utilizzare il campo ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," per personalizzare la sottocartella pubblicata relativa all'attuale ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"Dovrebbe avere una versione modificata del pacchetto corrente nella cartella specificata (di solito utilizzando strumenti di compilazione di terze parti)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In questo esempio la cartella ",(0,o.kt)("inlineCode",{parentName:"p"},'"dist"')," deve contenere un ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,o.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.10.1"),(0,o.kt)("p",null,"Questo campo consente di indicare a pnpm di sovrascrivere qualsiasi dipendenza nel grafico delle dipendenze. Questo \xe8 utile per imporre a tutti i tuoi pacchetti di utilizzare una singola versione di una dipendenza, eseguire il backport di una correzione o sostituire una dipendenza con un fork."),(0,o.kt)("p",null,"Nota che il campo delle sostituzioni pu\xf2 essere impostato solo alla radice del progetto."),(0,o.kt)("p",null,"Un esempio del campo ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,o.kt)("p",null,'Puoi specificare il pacchetto a cui appartiene la dipendenza sovrascritta separando il selettore del pacchetto dal selettore delle dipendenze con un ">", per esempio ',(0,o.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," sovrascriver\xe0 solo la dipendenza ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo")," di ",(0,o.kt)("inlineCode",{parentName:"p"},"qar@1"),", non per altre dipendenze."),(0,o.kt)("h3",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.9.0"),(0,o.kt)("p",null,"I campi ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions")," offrono un modo per estendere le definizioni dei pacchetti esistenti con informazioni aggiuntive. Ad esempio, se ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux")," dovrebbe avere ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom")," nelle sue ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," ma non ce l'ha, \xe8 possibile patchare ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux")," usando ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Le chiavi in ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions")," sono nomi di pacchetti o nomi di pacchetti e intervalli di semver, quindi \xe8 possibile correggere solo alcune versioni di un pacchetto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"I seguenti campi possono essere estesi utilizzando ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", e ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,o.kt)("p",null,"Un esempio pi\xf9 grande:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.16.0"),(0,o.kt)("p",null,'Questo campo consente di ignorare le build di dipendenze specifiche. Gli script "preinstall", "install" e "postinstall" dei pacchetti elencati non verranno eseguiti durante l\'installazione.'),(0,o.kt)("p",null,"Un esempio del campo ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}u.isMDXComponent=!0}}]);