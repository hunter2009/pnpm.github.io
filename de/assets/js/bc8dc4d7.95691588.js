"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3728],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return t?i.createElement(c,o(o({ref:n},d),{},{components:t})):i.createElement(c,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7239:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var i=t(5900),r=t(4750),a=(t(9496),t(9613)),o=["components"],l={id:"faq",title:"FAQ - H\xe4ufig gestellte Fragen"},s=void 0,p={unversionedId:"faq",id:"version-6.x/faq",isDocsHomePage:!1,title:"FAQ - H\xe4ufig gestellte Fragen",description:"Warum verwendet mein node_modules Ordner Plattenplatz, wenn Pakete in einem globalen Store gespeichert werden?",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/de/faq",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"6.x",frontMatter:{id:"faq",title:"FAQ - H\xe4ufig gestellte Fragen"}},d=[{value:"Warum verwendet mein <code>node_modules</code> Ordner Plattenplatz, wenn Pakete in einem globalen Store gespeichert werden?",id:"warum-verwendet-mein-node_modules-ordner-plattenplatz-wenn-pakete-in-einem-globalen-store-gespeichert-werden",children:[],level:2},{value:"Funktioniert es unter Windows?",id:"funktioniert-es-unter-windows",children:[],level:2},{value:"Aber der verschachtelte <code>node_modules</code> Ansatz ist nicht mit Windows kompatibel?",id:"aber-der-verschachtelte-node_modules-ansatz-ist-nicht-mit-windows-kompatibel",children:[],level:2},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[],level:2},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[],level:2},{value:"Funktioniert pnpm \xfcber mehrere Laufwerke oder Dateisysteme hinweg?",id:"funktioniert-pnpm-\xfcber-mehrere-laufwerke-oder-dateisysteme-hinweg",children:[{value:"Speicherpfad ist angegeben",id:"speicherpfad-ist-angegeben",children:[],level:3},{value:"Speicherpfad ist NICHT angegeben",id:"speicherpfad-ist-nicht-angegeben",children:[],level:3}],level:2},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[],level:2},{value:"Wof\xfcr steht <code>pnpm</code> ?",id:"wof\xfcr-steht-pnpm-",children:[],level:2},{value:"<code>pnpm</code> funktioniert nicht mit &lt;IHR-PROJEKT-HIER&gt;?",id:"pnpm-funktioniert-nicht-mit-ihr-projekt-hier",children:[{value:"L\xf6sung 1",id:"l\xf6sung-1",children:[],level:3},{value:"L\xf6sung 2",id:"l\xf6sung-2",children:[],level:3},{value:"L\xf6sung 3",id:"l\xf6sung-3",children:[],level:3}],level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"warum-verwendet-mein-node_modules-ordner-plattenplatz-wenn-pakete-in-einem-globalen-store-gespeichert-werden"},"Warum verwendet mein ",(0,a.kt)("inlineCode",{parentName:"h2"},"node_modules")," Ordner Plattenplatz, wenn Pakete in einem globalen Store gespeichert werden?"),(0,a.kt)("p",null,"pnpm erstellt ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Harter_Linkk"},"Hardlinks")," vom globalen Speicher zu den ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," Ordnern des Projekts. Hardlinks verweisen auf dieselbe Stelle auf der Festplatte, an der sich die urspr\xfcnglichen Dateien befinden. Wenn Sie zum Beispiel ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," in Ihrem Projekt als Abh\xe4ngigkeit haben und 1MB Speicherplatz belegen, dann sieht es so aus, als belege es 1MB Speicherplatz im ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," Ordner des Projekts und die gleiche Menge an Speicherplatz im globalen Store. Diese 1 MB sind jedoch ",(0,a.kt)("em",{parentName:"p"},"derselbe Speicherplatz")," auf dem Datentr\xe4ger, der von zwei verschiedenen Speicherorten adressiert wird. Insgesamt belegt ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," also 1 MB, nicht 2 MB."),(0,a.kt)("p",null,"Mehr zu diesem Thema:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Warum scheinen Hardlinks denselben Platz einzunehmen wie die Originale?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Ein Thread aus dem pnpm Chatraum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Ein Problem im pnpm-Repository"))),(0,a.kt)("h2",{id:"funktioniert-es-unter-windows"},"Funktioniert es unter Windows?"),(0,a.kt)("p",null,"Kurze Antwort: Ja. Lange Antwort: Die Verwendung von symbolischen Verkn\xfcpfungen unter Windows ist, gelinde gesagt, problematisch, aber pnpm bietet eine Behelfsl\xf6sung. F\xfcr Windows verwenden wir stattdessen ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"Junctions"),"."),(0,a.kt)("h2",{id:"aber-der-verschachtelte-node_modules-ansatz-ist-nicht-mit-windows-kompatibel"},"Aber der verschachtelte ",(0,a.kt)("inlineCode",{parentName:"h2"},"node_modules")," Ansatz ist nicht mit Windows kompatibel?"),(0,a.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". However, pnpm does not create deep folders, it stores all packages flatly and uses symbolic links to create the dependency tree structure."),(0,a.kt)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),(0,a.kt)("p",null,"Although pnpm uses linking to put dependencies into ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",(0,a.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," together with its own dependencies."),(0,a.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,a.kt)("p",null,"Ein Paket kann verschiedene Abh\xe4ngigkeiten auf einem Rechner haben."),(0,a.kt)("p",null,"In project ",(0,a.kt)("strong",{parentName:"p"},"A")," ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,a.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,a.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,a.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,a.kt)("h2",{id:"funktioniert-pnpm-\xfcber-mehrere-laufwerke-oder-dateisysteme-hinweg"},"Funktioniert pnpm \xfcber mehrere Laufwerke oder Dateisysteme hinweg?"),(0,a.kt)("p",null,"Der Paketspeicher sollte auf dem selben Laufwerk und dem Dateisystem wie die Installation liegen, andernfalls werden Pakete kopiert, nicht verkn\xfcpft. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,a.kt)("p",null,"pnpm funktioniert in den folgenden zwei F\xe4llen anders:"),(0,a.kt)("h3",{id:"speicherpfad-ist-angegeben"},"Speicherpfad ist angegeben"),(0,a.kt)("p",null,"If the store path is specified via ",(0,a.kt)("a",{parentName:"p",href:"/de/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,a.kt)("p",null,"Wenn Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," auf Datentr\xe4ger ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," ausf\xfchren, muss sich der pnpm-Speicher auf dem Datentr\xe4ger ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," befinden. Wenn sich der pnpm-Speicher auf der Festplatte ",(0,a.kt)("inlineCode",{parentName:"p"},"B-"),"befindet, werden alle erforderlichen Pakete direkt an den Projektspeicherort kopiert, anstatt verkn\xfcpft zu werden. Dies behindert die Speicher- und Leistungsvorteile von pnpm stark."),(0,a.kt)("h3",{id:"speicherpfad-ist-nicht-angegeben"},"Speicherpfad ist NICHT angegeben"),(0,a.kt)("p",null,"Wenn der Speicherpfad nicht festgelegt ist, werden mehrere Speicher erstellt (einer pro Laufwerk oder Dateisystem)."),(0,a.kt)("p",null,"If installation is run on disk ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". Die Projekte w\xfcrden weiterhin die Vorteile von pnpm beibehalten, aber jedes Laufwerk kann redundante Pakete haben."),(0,a.kt)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",(0,a.kt)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),(0,a.kt)("p",null,"Der Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," entfernt ",(0,a.kt)("em",{parentName:"p"},"nicht referenzierte Pakete"),"."),(0,a.kt)("p",null,"Nicht referenzierte Pakete sind Pakete, die von keinem Projekt auf dem System verwendet werden. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,a.kt)("p",null,"For example, during ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,a.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,a.kt)("p",null,"Die Ausf\xfchrung von ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," ist nicht sch\xe4dlich und hat keine Nebeneffekte auf Ihre Projekte. Wenn zuk\xfcnftige Installationen entfernte Pakete erfordern, l\xe4dt pnpm sie erneut herunter."),(0,a.kt)("p",null,"It is best practice to run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Manchmal werden nicht referenzierte Pakete erneut erforderlich. Dies kann beim Wechseln von Zweigen und der Installation \xe4lterer Abh\xe4ngigkeiten auftreten, in diesem Fall m\xfcsste pnpm alle entfernten Pakete erneut herunterladen, was den Installationsprozess kurzzeitig verlangsamen kann."),(0,a.kt)("h2",{id:"wof\xfcr-steht-pnpm-"},"Wof\xfcr steht ",(0,a.kt)("inlineCode",{parentName:"h2"},"pnpm")," ?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," steht f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"performantes npm"),". ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," kam auf den Namen."),(0,a.kt)("h2",{id:"pnpm-funktioniert-nicht-mit-ihr-projekt-hier"},(0,a.kt)("inlineCode",{parentName:"h2"},"pnpm")," funktioniert nicht mit ","<","IHR-PROJEKT-HIER>?"),(0,a.kt)("p",null,"In den meisten F\xe4llen bedeutet dies, dass eine der Abh\xe4ngigkeiten Pakete ben\xf6tigt, die nicht in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," deklariert sind. Es ist ein h\xe4ufiger Fehler, der durch flache ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," verursacht wird. In diesem Fall handelt es sich um einen Fehler in der Abh\xe4ngigkeit, und die Abh\xe4ngigkeit sollte behoben werden. Dies kann allerdings einige Zeit in Anspruch nehmen, daher unterst\xfctzt pnpm Workarounds, damit die fehlerhaften Pakete funktionieren."),(0,a.kt)("h3",{id:"l\xf6sung-1"},"L\xf6sung 1"),(0,a.kt)("p",null,"Im folgenden Beispiel hat eine Abh\xe4ngigkeit ",(0,a.kt)("strong",{parentName:"p"},"nicht")," das ",(0,a.kt)("inlineCode",{parentName:"p"},"iterall")," Modul in der eigenen Liste der Abh\xe4ngigkeiten."),(0,a.kt)("p",null,"Die einfachste L\xf6sung, um fehlende Abh\xe4ngigkeiten der fehlerhaften Pakete zu beheben, besteht darin, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"iterall")," als Abh\xe4ngigkeit zur ",(0,a.kt)("inlineCode",{parentName:"strong"},"package.json")," unseres Projekts hinzuzuf\xfcgen"),"."),(0,a.kt)("p",null,"Sie k\xf6nnen dies tun, indem Sie es \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add iterall")," installieren, es wird automatisch der ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," Ihres Projekts hinzugef\xfcgt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,a.kt)("h3",{id:"l\xf6sung-2"},"L\xf6sung 2"),(0,a.kt)("p",null,"Eine der L\xf6sungen besteht darin, ",(0,a.kt)("a",{parentName:"p",href:"/de/pnpmfile#hooks"},"Hooks")," zu verwenden, um die fehlenden Abh\xe4ngigkeiten zur ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," des Pakets hinzuzuf\xfcgen."),(0,a.kt)("p",null,"Ein Beispiel war das ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard"),", das nicht mit ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," funktionierte. It has since been resolved such that it works with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,a.kt)("p",null,"Fr\xfcher wurde ein Fehler ausgel\xf6st:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,a.kt)("p",null,"The problem was that ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,a.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("p",null,"The solution was to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,a.kt)("p",null,"After creating a ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."),(0,a.kt)("h3",{id:"l\xf6sung-3"},"L\xf6sung 3"),(0,a.kt)("p",null,"In case there are too many issues, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,a.kt)("p",null,"To use it, try ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}u.isMDXComponent=!0}}]);