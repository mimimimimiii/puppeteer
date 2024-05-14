/*! For license information please see 66601998.2dcbbb8f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51689],{23118:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(85893),t=s(11151);const a={sidebar_label:"JSHandle"},d="JSHandle class",i={id:"api/puppeteer.jshandle",title:"JSHandle class",description:"Represents a reference to a JavaScript object. Instances can be created using Page.evaluateHandle().",source:"@site/versioned_docs/version-22.8.1/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/api/puppeteer.jshandle",draft:!1,unlisted:!1,tags:[],version:"22.8.1",frontMatter:{sidebar_label:"JSHandle"},sidebar:"api",previous:{title:"Frame.waitForSelector",permalink:"/api/puppeteer.frame.waitforselector"},next:{title:"JSHandle.asElement",permalink:"/api/puppeteer.jshandle.aselement"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"jshandle-class",children:"JSHandle class"}),"\n",(0,n.jsxs)(r.p,{children:["Represents a reference to a JavaScript object. Instances can be created using ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Handles prevent the referenced JavaScript object from being garbage-collected unless the handle is purposely ",(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.dispose",children:"disposed"}),". JSHandles are auto-disposed when their associated frame is navigated away or the parent context gets destroyed."]}),"\n",(0,n.jsxs)(r.p,{children:["Handles can be used as arguments for any evaluation function such as ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page._eval",children:"Page.$eval()"}),", ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"}),", and ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"}),". They are resolved to their referenced object."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class JSHandle<T = unknown>\n"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(r.code,{children:"JSHandle"})," class."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const windowHandle = await page.evaluateHandle(() => window);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"_",children:"_"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"T"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Used for nominally typing ",(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"move",children:"move"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"() => this"})}),(0,n.jsx)("td",{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"aselement",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.aselement",children:"asElement()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Either ",(0,n.jsx)(r.code,{children:"null"})," or the handle itself if the handle is an instance of ",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"dispose",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.dispose",children:"dispose()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Releases the object referenced by the handle for garbage collection."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"evaluate",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.evaluate",children:"evaluate(pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"evaluatehandle",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Evaluates the given function with the current handle as its first argument."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getproperties",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperties",children:"getProperties()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Gets a map of handles representing the properties of the current handle."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getproperty",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperty",children:"getProperty(propertyName)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Fetches a single property from the referenced object."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getproperty",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.getproperty_1",children:"getProperty(propertyName)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"jsonvalue",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.jsonvalue",children:"jsonValue()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"A vanilla object representing the serializable portions of the referenced object."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["If the object has a ",(0,n.jsx)(r.code,{children:"toJSON"})," function, it ",(0,n.jsx)(r.strong,{children:"will not"})," be called."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"remoteobject",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.remoteobject",children:"remoteObject()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Provides access to the ",(0,n.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject",children:"Protocol.Runtime.RemoteObject"})," backing this handle."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"tostring",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jshandle.tostring",children:"toString()"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Returns a string representation of the JSHandle."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsx)(r.p,{children:"Useful during debugging."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75251:(e,r,s)=>{var n=s(67294),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,a={},c=null,h=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:h,props:a,_owner:i.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>d});var n=s(67294);const t={},a=n.createContext(t);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);