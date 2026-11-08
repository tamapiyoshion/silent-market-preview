import{o as r,a as l,l as h,s as o,b as d,_ as m,n as p,d as $,c as x}from"./iso-8Wchqs8e.js";function y(e){if(e.ai?.copyRisk)throw Error("教材原文との長い連続一致があるため、販売用出力を停止しました。転載の範囲を確認し、原稿を修正して再監査してください。")}function F(e){const n=e.ai;return n?n.knowledgeSources?.length?n.findings.filter(t=>n.sources.some(i=>i.id===t.sourceId)):n.findings:[]}function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([\\`*_{}\[\]#])/g,"\\$1")}function S(e){return u(e).replace(/\|/g,"\\|").replace(/\r?\n/g,"<br>")}function D(e){return`assets/${e.id}.jpg`}function H(e){switch(e.type){case"heading":return`### ${u(e.text.replace(/\r?\n/g," "))}`;case"paragraph":return u(e.text);case"image":return`![${u(e.alt.replace(/\r?\n/g," "))}](${D(e)})${e.caption?`

`+u(e.caption):""}`;case"table":return["| "+e.headers.map(S).join(" | ")+" |","| "+e.headers.map(()=>"---").join(" | ")+" |",...e.rows.map(n=>"| "+n.map(S).join(" | ")+" |")].join(`
`)}}function V(e,n="all"){return y(e),"# "+u(e.title||e.name)+`

`+e.chapters.map((t,i)=>({c:t,i})).filter(({c:t})=>n==="all"||t.access==="free").map(({c:t,i})=>`## 第${i+1}章 ${u(t.title)}

> ${t.access==="free"?"無料公開部分":"有料部分"}

${t.blocks.map(H).join(`

`)}`).join(`

---

`)+`
`+j(e,n)}function W(e){return y(e),`# 商品企画メモ

## 商品タイトル
${e.title}

## 想定購入者
${e.audience}

## 解決課題
${e.problem}

## 提供価値
${e.value}

## 販売用説明文
${e.description??""}

## 特典
${e.bonuses.map(n=>"- "+n.label).join(`
`)}
`}function j(e,n="all"){if(!e.ai)return"";const t=new Set(e.ai.findings.filter(c=>c.chapter>=0&&e.chapters[c.chapter]?.access==="free"&&c.verification==="supported").map(c=>c.sourceId)),i=e.ai.sources.filter(c=>n==="all"||t.has(c.id));return i.length?`
## 参照資料

`+i.map(c=>`- ${u(c.title)}：${encodeURI(c.url).replace(/[()]/g,R=>R==="("?"%28":"%29")} / 確認 ${c.checkedAt} / ${c.status==="retrieved"?"本文抜粋を取得":"未検証"}`).join(`
`)+`

`+u(e.ai.note)+`
`:""}function X(e){return y(e),`# 出典と監査記録

`+(e.ai?.note??"")+`

`+(F(e).map(n=>`- ${n.severity==="major"?"重大":"参考"} / ${n.verification} / 第${n.chapter+1}章：${n.claim}
  ${n.reason}
  ${n.sourceId}「${n.quote}」`).join(`
`)??"")+j(e)}const k={note:"note",brain:"Brain"},O=m(Object.keys(k)),b=o().min(1).max(100).regex(/^[a-zA-Z0-9_-]+$/),a=(e=2e4)=>o().max(e),g=p().finite().nonnegative().max(1e12).nullable(),L=r({heading:a(200),body:a()}).strict(),v=r({limit:p().int().min(20).max(1e4),lineBreaks:d(),tone:m(["丁寧","親しみやすい","簡潔"])}).strict(),U=r({id:b,name:a(100),x:v,threads:v}).strict(),P=r({from:$().nullable(),to:$().nullable(),posts:p().int().nonnegative().max(1e12).nullable(),views:p().int().nonnegative().max(1e12).nullable(),registrations:p().int().nonnegative().max(1e12).nullable(),purchases:p().int().nonnegative().max(1e12).nullable(),revenue:g,fees:g,refunds:g}).strict(),z=()=>({from:null,to:null,posts:null,views:null,registrations:null,purchases:null,revenue:null,fees:null,refunds:null}),_=r({x:a(),threads:a(),article:a(),launch:a(),gift:a(),profile:a(),registration:a()}).strict(),E=r({free:d(),bonuses:d(),delivery:d(),links:d(),claims:d(),terms:d(),publicFiles:d()}).strict(),M=()=>({free:!1,bonuses:!1,delivery:!1,links:!1,claims:!1,terms:!1,publicFiles:!1}),C=r({version:h(1),briefRef:r({documentId:b,approvedHash:o().regex(/^[a-f0-9]{64}$/),reviewHash:o().regex(/^[a-f0-9]{64}$/)}).strict().optional(),id:b,sourceId:b.nullable(),sourceHash:o().regex(/^[a-f0-9]{64}$/).nullable(),platform:O,title:a(200),audience:a(4e3),problem:a(4e3),value:a(4e3),description:a(),contents:a(),outline:a(),bonuses:a(),price:g,saleUrl:a(2048),articleUrl:a(2048),registrationUrl:a(2048),freeGift:a(4e3),manualFree:a(),sections:l(L).max(20),pageCurrent:d().default(!1),assets:_,brandId:b,reviews:E,metrics:P,launched:d()}).strict(),Y=r({version:h(1),projects:l(C).max(50),brands:l(U).min(1).max(20),activeId:a(100)}).strict().superRefine((e,n)=>{for(const t of e.projects)(!!t.sourceId!=!!t.sourceHash||t.sourceId&&t.manualFree||t.metrics.from&&t.metrics.to&&t.metrics.from>t.metrics.to)&&n.addIssue({code:"custom",message:"商品参照・無料原稿・集計期間が正しくありません。"});(new Set(e.projects.map(t=>t.id)).size!==e.projects.length||new Set(e.brands.map(t=>t.id)).size!==e.brands.length||e.projects.some(t=>!e.brands.some(i=>i.id===t.brandId))||e.activeId&&!e.projects.some(t=>t.id===e.activeId))&&n.addIssue({code:"custom",message:"販売データのID・文体設定が一致しません。"})}),T=()=>({id:crypto.randomUUID(),name:"基本の文体",x:{limit:280,lineBreaks:!0,tone:"簡潔"},threads:{limit:500,lineBreaks:!0,tone:"丁寧"}});function ee(){return{version:1,projects:[],brands:[T()],activeId:""}}function te(e){return{version:1,id:crypto.randomUUID(),sourceId:null,sourceHash:null,platform:"note",title:"",audience:"",problem:"",value:"",description:"",contents:"",outline:"",bonuses:"",price:null,saleUrl:"",articleUrl:"",registrationUrl:"",freeGift:"",manualFree:"",sections:[],pageCurrent:!1,assets:{x:"",threads:"",article:"",launch:"",gift:"",profile:"",registration:""},brandId:e,reviews:M(),metrics:z(),launched:!1}}const I=o().min(1).max(100).regex(/^[a-zA-Z0-9_-]+$/),s=(e=4e3)=>o().max(e),f=l(s(1e3)).max(30),A=U.extend({profile:s(),policy:s(),prohibited:f,knowledgeIds:l(o().uuid()).max(10),updatedAt:x()}).strict(),q=r({title:s(200),brandId:I.nullable(),audience:s(),pain:s(),problem:s(),value:s(),outcomes:f,included:f,excluded:f,price:p().int().nonnegative().max(1e9).nullable(),priceStatus:m(["tentative","confirmed"]),chapters:l(r({title:s(200),access:m(["free","paid"]),purpose:s(1e3)}).strict()).max(20),freePurpose:s(),paidPurpose:s(),bonuses:l(r({title:s(100),description:s(1e3),templateId:m(["planner","checklist","journal"])}).strict()).max(10),destinations:l(m(Object.keys(k))).max(2),tone:s(200),prohibited:f,sources:l(r({title:s(200),url:o().max(2048).nullable().refine(e=>!e||(()=>{try{const n=new URL(e);return n.protocol==="https:"&&!n.username&&!n.password}catch{return!1}})()),checkedOn:$().nullable(),status:m(["unverified","user-reviewed"])}).strict()).max(20),unknowns:f}).strict(),B=r({version:h(1),id:I,updatedAt:x(),data:q,approval:r({hash:o().regex(/^[a-f0-9]{64}$/),at:x()}).strict().nullable()}).strict(),G=r({version:h(1),document:B,brand:A.nullable()}).strict().superRefine((e,n)=>{e.document.data.brandId!==(e.brand?.id??null)&&n.addIssue({code:"custom",message:"ブランド参照が一致しません。"})}),Z=r({briefId:I,briefHash:o(),jobId:o().nullable(),productId:I.nullable(),review:r({hash:o().regex(/^[a-f0-9]{64}$/),at:x()}).strict().nullable()}).strict(),ne=r({version:h(1),documents:l(B).max(50),brands:l(A).max(20),links:l(Z).max(100),activeId:o().max(100)}).strict().superRefine((e,n)=>{(new Set(e.documents.map(t=>t.id)).size!==e.documents.length||new Set(e.brands.map(t=>t.id)).size!==e.brands.length||e.documents.some(t=>t.data.brandId&&!e.brands.some(i=>i.id===t.data.brandId))||e.activeId&&!e.documents.some(t=>t.id===e.activeId)||e.links.some(t=>!e.documents.some(i=>i.id===t.briefId)))&&n.addIssue({code:"custom",message:"設計書・ブランド・リンクの参照が正しくありません。"})}),ae=()=>({version:1,documents:[],brands:[],links:[],activeId:""}),re=()=>({version:1,id:crypto.randomUUID(),updatedAt:new Date().toISOString(),approval:null,data:{title:"",brandId:null,audience:"",pain:"",problem:"",value:"",outcomes:[],included:[],excluded:[],price:null,priceStatus:"tentative",chapters:[],freePurpose:"",paidPurpose:"",bonuses:[],destinations:["note"],tone:"丁寧",prohibited:[],sources:[],unknowns:[]}}),se=()=>({id:crypto.randomUUID(),name:"新しいブランド",profile:"",policy:"",prohibited:[],knowledgeIds:[],updatedAt:new Date().toISOString(),x:{limit:280,lineBreaks:!0,tone:"簡潔"},threads:{limit:500,lineBreaks:!0,tone:"丁寧"}});function w(e){return Array.isArray(e)?e.map(w):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).sort(([n],[t])=>n.localeCompare(t)).map(([n,t])=>[n,w(t)])):e}const J=e=>JSON.stringify(w({version:e.version,id:e.document.id,updatedAt:e.document.updatedAt,data:e.document.data,brand:e.brand})),K=async e=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e)))).map(n=>n.toString(16).padStart(2,"0")).join(""),N=e=>K(J(e)),ie=(e,n)=>G.parse({version:1,document:e,brand:n.find(t=>t.id===e.data.brandId)??null});async function oe(e){return!!e.document.approval&&e.document.approval.hash===await N(e)}export{C as F,Y as L,G as S,oe as a,re as b,N as c,z as d,ae as e,ee as f,te as g,M as h,y as i,H as j,ne as k,K as l,u as m,se as n,T as o,k as p,V as q,W as r,ie as s,X as t,D as u};
