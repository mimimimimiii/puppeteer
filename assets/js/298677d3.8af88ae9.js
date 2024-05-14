/*! For license information please see 298677d3.8af88ae9.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91091],{90013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(85893),l=t(11151);const s={sidebar_label:"ElementHandle.$$eval"},a="ElementHandle.$$eval() method",i={id:"api/puppeteer.elementhandle.__eval",title:"ElementHandle.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the current element.",source:"@site/../docs/api/puppeteer.elementhandle.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__eval",permalink:"/next/api/puppeteer.elementhandle.__eval",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ElementHandle.$$eval"},sidebar:"api",previous:{title:"ElementHandle.$$",permalink:"/next/api/puppeteer.elementhandle.__"},next:{title:"ElementHandle.$eval",permalink:"/next/api/puppeteer.elementhandle._eval"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"elementhandleeval-method",children:"ElementHandle.$$eval() method"}),"\n",(0,r.jsx)(n.p,{children:"Runs the given function on an array of elements matching the given selector in the current element."}),"\n",(0,r.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The selector to query for."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Additional arguments to pass to ",(0,r.jsx)(n.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsx)(n.p,{children:"A promise to the result of the function."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const feedHandle = await page.$('.feed');\nexpect(\n  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))\n).toEqual(['Hello!', 'Hi!']);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,n,t)=>{var r=t(67294),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:c,ref:o,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);