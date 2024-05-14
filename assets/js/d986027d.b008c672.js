/*! For license information please see d986027d.b008c672.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33820],{96981:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(85893),o=r(11151);r(23277),r(64757);const i={},a="Configuration",s={id:"guides/configuration",title:"Configuration",description:"By default, Puppeteer downloads and uses a specific version of Chrome so its",source:"@site/versioned_docs/version-22.8.1/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/guides/configuration",draft:!1,unlisted:!1,tags:[],version:"22.8.1",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Debugging",permalink:"/guides/debugging"}},l={},c=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Examples",id:"examples",level:3},{value:"Changing the default cache directory",id:"changing-the-default-cache-directory",level:4},{value:"Environment variables",id:"environment-variables",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Puppeteer downloads and uses a specific version of Chrome so its\nAPI is guaranteed to work out of the box. To use Puppeteer with a different\nversion of Chrome or Chromium, pass in the executable's path when creating a\n",(0,t.jsx)(n.code,{children:"Browser"})," instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use Puppeteer with Firefox. See\n",(0,t.jsx)(n.a,{href:"https://pptr.dev/faq#q-what-is-the-status-of-cross-browser-support",children:"status of cross-browser support"})," for\nmore information."]}),"\n","\n",(0,t.jsx)(n.p,{children:"All defaults in Puppeteer can be customized in two ways:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration-files",children:"Configuration files"})," (",(0,t.jsx)(n.strong,{children:"recommended"}),")"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#environment-variables",children:"Environment variables"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Note that some options are only customizable through environment variables (such\nas ",(0,t.jsx)(n.code,{children:"HTTPS_PROXY"}),")."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Puppeteer's configuration files and environment variables are ignored by ",(0,t.jsx)(n.code,{children:"puppeteer-core"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-files",children:"Configuration files"}),"\n",(0,t.jsxs)(n.p,{children:["Configuration files are the ",(0,t.jsx)(n.strong,{children:"recommended"})," choice for configuring Puppeteer.\nPuppeteer will look up the file tree for any of the following formats:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".puppeteerrc.cjs"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".puppeteerrc.js"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".puppeteerrc"})," (YAML/JSON),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".puppeteerrc.json"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:".puppeteerrc.yaml"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"puppeteer.config.js"}),", and"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"puppeteer.config.cjs"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"../api/puppeteer.configuration",children:(0,t.jsx)(n.code,{children:"Configuration"})})," interface for possible\noptions."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["After adding a configuration file, you may need to remove and reinstall\n",(0,t.jsx)(n.code,{children:"puppeteer"})," for it to take effect if the changes affect installation."]})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Previous versions of Puppeteer allowed configuration via the ",(0,t.jsx)(n.code,{children:"config"})," key in\n",(0,t.jsx)(n.code,{children:"package.json"}),". This behavior is now deprecated and will be removed in the future."]})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h4,{id:"changing-the-default-cache-directory",children:"Changing the default cache directory"}),"\n",(0,t.jsxs)(n.p,{children:["Starting in v19.0.0, Puppeteer stores browsers in ",(0,t.jsx)(n.code,{children:"~/.cache/puppeteer"})," to\nglobally cache browsers between installation. This can cause problems if\n",(0,t.jsx)(n.code,{children:"puppeteer"})," is packed during some build step and moved to a fresh location. The\nfollowing configuration can solve this issue (reinstall ",(0,t.jsx)(n.code,{children:"puppeteer"})," to take\neffect):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="project-directory/.puppeteerrc.cjs"',children:"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  // Changes the cache location for Puppeteer.\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Notice this is only possible with CommonJS configuration files as information\nabout the ambient environment is needed (in this case, ",(0,t.jsx)(n.code,{children:"__dirname"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["Along with configuration files, Puppeteer looks for certain\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Environment_variable",children:"environment variables"})," for\ncustomizing behavior. Environment variables will always override configuration\nfile options when applicable."]}),"\n",(0,t.jsxs)(n.p,{children:["The following options are ",(0,t.jsx)(n.em,{children:"environment-only"})," options"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"HTTP_PROXY"}),", ",(0,t.jsx)(n.code,{children:"HTTPS_PROXY"}),", ",(0,t.jsx)(n.code,{children:"NO_PROXY"})," - defines HTTP proxy settings that are\nused to download and run the browser."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All other options can be found in the documentation for the\n",(0,t.jsx)(n.a,{href:"../api/puppeteer.configuration",children:(0,t.jsx)(n.code,{children:"Configuration"})})," interface."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},75251:(e,n,r)=>{var t=r(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,u=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},85893:(e,n,r)=>{e.exports=r(75251)},64757:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(67294),o=r(90512);const i={tabItem:"tabItem__kUE"};function a({children:e,hidden:n,className:r}){return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},e)}},23277:(e,n,r)=>{r.d(n,{Z:()=>E});var t=r(67294),o=r(90512),i=r(6379),a=r(16550),s=r(11666),l=r(47348),c=r(83928),u=r(76632);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function f(e){var n,r;return null!==(r=null===(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const r=(0,a.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,l._X)(o),s=(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(p(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[o,r]);return[i,s]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,i=h(e),[a,l]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:r,groupId:o}),[p,f]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,o]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),g=(()=>{const e=null!=c?c:p;return b({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var j=r(30358);const v={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function O({className:e,block:n,selectedValue:r,selectValue:a,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[l.length-1];break}}null==n||n.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:i})=>t.createElement("li",w(x({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:u},i),{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:r}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=g(e);return t.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},t.createElement(O,x({},n,e)),t.createElement(P,x({},n,e)))}function E(e){const n=(0,j.Z)();return t.createElement(k,x({key:String(n)},e),f(e.children))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>a});var t=r(67294);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);