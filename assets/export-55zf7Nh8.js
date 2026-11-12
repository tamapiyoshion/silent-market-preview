import{aA as m,m as f,aB as p,aC as c,aD as d,a9 as u}from"./index-B257NE3u.js";import{J as b}from"./jszip.min-DyudNIFw.js";import{contentPDF as g}from"./pdf-B6MdiP6E.js";import{m as P}from"./export-D0ByUlYX.js";import{d as D}from"./draw-Bzp9I280.js";async function A(n,s=()=>{}){n=m(n);const e=new b;e.file("full.md",f(n)),e.file("free.md",f(n,"free")),e.file("product-info.md",p(n)),n.ai&&e.file("audit.md",c(n)),s("商品原稿のPDFを作成中"),e.file("manuscript.pdf",await g(n));for(const i of n.chapters)for(const a of i.blocks)a.type==="image"&&e.file(d(a),a.src.split(",")[1],{base64:!0});const t=document.createElement("canvas");try{for(const[i,a]of n.bonuses.entries()){const o=`bonuses/bonus-${String(i+1).padStart(2,"0")}`;s(`特典 ${i+1} / ${n.bonuses.length} を作成中`),e.file(o+"/bonus.pdf",await P(a.product)),e.file(o+"/README.txt",`${a.label}
${a.product.pages.length}ページ
${a.product.description}
関連付け時点のコピーです。
`);for(const[r,l]of a.product.pages.entries())D(t,l),e.file(`${o}/page-${String(r+1).padStart(2,"0")}.png`,await u(t))}}finally{t.width=1,t.height=1}return e.file("README.txt",`SILENT MARKET 商品制作パッケージ

full.md / manuscript.pdf：有料部分を含む商品原稿です。無料公開しないでください。
free.md：無料公開に設定した章だけの原稿です。
assets/：原稿内の画像。販売先へ別途アップロードしてください。
bonuses/：特典のPDFとページ別PNG。
product-info.md：出品準備の企画メモ。公開前に内容を確認してください。

note・Brain・深夜マーケット等への自動出品は行いません。各販売先の仕様に合わせ、画像と有料境界を手動で設定してください。
PDFは画像形式で、文字選択・検索はできません。
`),s("ZIPをまとめています"),e.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:3}})}export{A as contentZIP};
