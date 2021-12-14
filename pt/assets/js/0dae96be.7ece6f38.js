"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8605],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},794:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>c});var r=n(5900),a=n(4750),o=(n(9496),n(9613)),i=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Adicionado em: v4.3.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/pt/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/pt/next/cli/install-test"},next:{title:"pnpm list",permalink:"/pt/next/cli/list"}},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[],level:3},{value:"--fix",id:"--fix",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adicionado em: v4.3.0"),(0,o.kt)("p",null,"Verifica problemas de seguran\xe7a conhecidos nos pacotes instalados."),(0,o.kt)("p",null,"Se problemas de seguran\xe7a forem encontrados, tente atualizar suas depend\xeancias executando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Se uma atualiza\xe7\xe3o simples n\xe3o corrigir todos os problemas, use ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/package_json#pnpmoverrides"},"substitui\xe7\xf5es")," para for\xe7a vers\xf5es que n\xe3o s\xe3o vulner\xe1veis. Por exemplo, se ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," for vulner\xe1vel use essa substitui\xe7\xe3o para for\xe7ar ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Como alternativa use ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Mostre apenas avisos com gravidade maior ou igual a ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Adicionado em: v6.11.0"),(0,o.kt)("p",null,"Adicione substitui\xe7\xf5es ao ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," para for\xe7a vers\xf5es n\xe3o vulner\xe1veis das depend\xeancias."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Devolve um relat\xf3rio de auditoria no formato JSON."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Auditar apenas as depend\xeancias de desenvolvimento."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Auditar apenas as depend\xeancias de produ\xe7\xe3o."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"N\xe3o audita as depend\xeancias em ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"Adicionado em: v6.7.1"),(0,o.kt)("p",null,"Se o registro responder com um c\xf3digo de status diferente de 200, o processo ser\xe1 encerrado sem erros. Ent\xe3o o processo falhar\xe1 apenas se o registro responder com sucesso e com vulnerabilidades encontradas."))}c.isMDXComponent=!0}}]);