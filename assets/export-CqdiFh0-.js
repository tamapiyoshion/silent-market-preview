import{J as c,b as p}from"./jszip.min-hxJtrs24.js";import{aG as d,A as b,m as f,aH as g,aI as u,aJ as h,ac as P}from"./index-0UhDuXnk.js";import{contentPDF as E}from"./pdf-CZC9FrHq.js";import{m as y}from"./export-BgX9EcAT.js";import{d as D}from"./draw-DlqysoJi.js";async function v(e,i=()=>{}){e=d(e);const r=b(e.productionSettings,e.chapters);if(r.length)throw Error(r.join(" "));const n=new c;if(e.productionSettings?.platform==="note")for(const[a,t]of Object.entries(p(e)))n.file(a,t);n.file("full.md",f(e)),n.file("free.md",f(e,"free")),n.file("product-info.md",g(e)),e.ai&&n.file("audit.md",u(e)),i("商品原稿のPDFを作成中"),n.file("manuscript.pdf",await E(e));for(const a of e.chapters)for(const t of a.blocks)t.type==="image"&&n.file(h(t),t.src.split(",")[1],{base64:!0});const s=document.createElement("canvas");try{for(const[a,t]of e.bonuses.entries()){const o=`bonuses/bonus-${String(a+1).padStart(2,"0")}`;i(`特典 ${a+1} / ${e.bonuses.length} を作成中`),n.file(o+"/bonus.pdf",await y(t.product)),n.file(o+"/README.txt",`${t.label}
${t.product.pages.length}ページ
${t.product.description}
関連付け時点のコピーです。
`);for(const[l,m]of t.product.pages.entries())D(s,m),n.file(`${o}/page-${String(l+1).padStart(2,"0")}.png`,await P(s))}}finally{s.width=1,s.height=1}return n.file("README.txt",`SILENT MARKET 商品制作パッケージ

full.md / manuscript.pdf：有料部分を含む商品原稿です。無料公開しないでください。
free.md：無料公開に設定した章だけの原稿です。
assets/：原稿内の画像。販売先へ別途アップロードしてください。
bonuses/：特典のPDFとページ別PNG。
product-info.md：出品準備の企画メモ。公開前に内容を確認してください。

note・Brain・深夜マーケット等への自動出品は行いません。各販売先の仕様に合わせ、画像と有料境界を手動で設定してください。
PDFは画像形式で、文字選択・検索はできません。
`),i("ZIPをまとめています"),n.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:3}})}export{v as contentZIP};
