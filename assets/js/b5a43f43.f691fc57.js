/*! For license information please see b5a43f43.f691fc57.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69270],{71443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var s=r(85893),i=r(11151);const n={sidebar_label:"Locator"},l="Locator class",c={id:"api/puppeteer.locator",title:"Locator class",description:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically.",source:"@site/../docs/api/puppeteer.locator.md",sourceDirName:"api",slug:"/api/puppeteer.locator",permalink:"/next/api/puppeteer.locator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Locator"},sidebar:"api",previous:{title:"LaunchOptions",permalink:"/next/api/puppeteer.launchoptions"},next:{title:"Locator.click",permalink:"/next/api/puppeteer.locator.click"}},d={},o=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"locator-class",children:"Locator class"}),"\n",(0,s.jsx)(t.p,{children:"Locators describe a strategy of locating objects and performing an action on them. If the action fails because the object is not ready for the action, the whole operation is retried. Various preconditions for a successful action are checked automatically."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Locator<T> extends EventEmitter<LocatorEvents>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Extends:"})," ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locatorevents",children:"LocatorEvents"}),">"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"_",children:"_"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"T"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Used for nominally typing ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator",children:"Locator"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"timeout",children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"number"})}),(0,s.jsx)("td",{})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"click",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.click",children:"click(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"clone",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.clone",children:"clone()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Clones the locator."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"fill",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.fill",children:"fill(this, value, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Fills out the input identified by the locator using the provided value. The type of the input is determined at runtime and the appropriate fill-out method is chosen based on the type. contenteditable, selector, inputs are supported."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"filter",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.filter",children:"filter(predicate)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Creates an expectation that is evaluated against located values."}),(0,s.jsx)(t.p,{children:"If the expectations do not match, then the locator will retry."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"hover",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.hover",children:"hover(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"map",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.map",children:"map(mapper)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Maps the locator using the provided mapper."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"race",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.race",children:"race(locators)"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"static"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Creates a race between multiple locators but ensures that only a single one acts."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"scroll",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.scroll",children:"scroll(this, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setensureelementisintheviewport",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.setensureelementisintheviewport",children:"setEnsureElementIsInTheViewport(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"settimeout",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.settimeout",children:"setTimeout(timeout)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setvisibility",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.setvisibility",children:"setVisibility(this, visibility)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setwaitforenabled",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.setwaitforenabled",children:"setWaitForEnabled(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"setwaitforstableboundingbox",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.setwaitforstableboundingbox",children:"setWaitForStableBoundingBox(this, value)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"wait",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.wait",children:"wait(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.p,{children:"Waits for the locator to get the serialized value from the page."}),(0,s.jsx)(t.p,{children:"Note this requires the value to be JSON-serializable."})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waithandle",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.locator.waithandle",children:"waitHandle(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Waits for the locator to get a handle from the page."})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},75251:(e,t,r)=>{var s=r(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,n={},o=null,a=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,s)&&!d.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:o,ref:a,props:n,_owner:c.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>l});var s=r(67294);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);