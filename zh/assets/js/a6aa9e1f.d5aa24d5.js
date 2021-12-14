"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{4069:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(4750),l=t(9496),n=t(1626),i=t(1254),s=t(741);const m="sidebar_ssYr",o="sidebarItemTitle_Ccjj",c="sidebarItemList_4Elb",g="sidebarItem_QOi+",d="sidebarItemLink_AUC7",p="sidebarItemLinkActive_ZHSB";var u=t(4250);function v(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},a.title),l.createElement("ul",{className:c},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var E=["sidebar","toc","children"];const h=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,r.Z)(e,E),o=a&&a.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:a})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&l.createElement("div",{className:"col col--2"},t))))}},6825:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var r=t(9496),l=t(2781),n=t(4069),i=t(5205),s=t(741),m=t(4250);const o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=t(213);const g=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,g=a.blogDescription,d=a.blogTitle,p="/"===a.permalink?m:d;return r.createElement(n.Z,{title:p,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},5205:(e,a,t)=>{t.d(a,{Z:()=>N});var r=t(9496),l=t(1626),n=t(9613),i=t(4250),s=t(741),m=t(3285),o=t(213),c=t(2911),g=t(1303);const d="blogPostTitle_aFK0",p="blogPostData_49fo",u="blogPostDetailsFull_+2pV";var v=t(550);const E="image_7cxj";const h=function(e){var a=e.author,t=a.name,l=a.title,n=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},b="authorCol_dfpk";function _(e){var a=e.authors,t=e.assets;return 0===a.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",b),key:a},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(n=t.authorsImageUrls[a])?n:e.imageURL})}))})))}const N=function(e){var a,t,E,h,b=(E=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return E(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),N=(0,m.C)().withBaseUrl,Z=e.children,f=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,C=void 0!==w&&w,I=P.date,L=P.formattedDate,M=P.permalink,y=P.tags,U=P.readingTime,x=P.title,B=P.editUrl,A=P.authors,R=null!=(a=k.image)?a:f.image,F=!C&&T,j=y.length>0;return r.createElement("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=C?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:d,itemProp:"headline"},C?x:r.createElement(s.Z,{itemProp:"url",to:M},x)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},L),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",b(U))),r.createElement(_,{authors:A,assets:k}))),R&&r.createElement("meta",{itemProp:"image",content:N(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},Z)),(j||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[u]=C,t))},j&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":F})},r.createElement(v.Z,{tags:y})),C&&B&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:B})),F&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":j})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+x},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1303:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(9496),l=t(4250),n=t(5900),i=t(4750),s=t(1626);const m="iconEdit_GV-8";var o=["className"];const c=function(e){var a=e.className,t=(0,i.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var g=t(213);function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},550:(e,a,t)=>{t.d(a,{Z:()=>p});var r=t(9496),l=t(1626),n=t(4250),i=t(741);const s="tag_uJ+Z",m="tagRegular_+Mv7",o="tagWithCount_Z34Q";const c=function(e){var a,t=e.permalink,n=e.name,c=e.count;return r.createElement(i.Z,{href:t,className:(0,l.Z)(s,(a={},a[m]=!c,a[o]=c,a))},n,c&&r.createElement("span",null,c))},g="tags_IPg7",d="tag_sT4K";function p(e){var a=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(g,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return r.createElement("li",{key:t,className:d},r.createElement(c,{name:a,permalink:t}))}))))}}}]);