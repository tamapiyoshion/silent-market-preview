import{J as p}from"./jszip.min-C43rb2hX.js";import{w as f,a7 as m,a8 as c,a9 as d,aa as u,ab as b}from"./index-DRn63Rxe.js";import{contentPDF as g}from"./pdf-D76T5ccy.js";import{m as P}from"./export-DTpiBODx.js";async function $(e,s=()=>{}){const n=new p;n.file("full.md",f(e)),n.file("free.md",f(e,"free")),n.file("product-info.md",m(e)),e.ai&&n.file("audit.md",c(e)),s("商品原稿のPDFを作成中"),n.file("manuscript.pdf",await g(e));for(const i of e.chapters)for(const a of i.blocks)a.type==="image"&&n.file(d(a),a.src.split(",")[1],{base64:!0});const t=document.createElement("canvas");try{for(const[i,a]of e.bonuses.entries()){const o=`bonuses/bonus-${String(i+1).padStart(2,"0")}`;s(`特典 ${i+1} / ${e.bonuses.length} を作成中`),n.file(o+"/bonus.pdf",await P(a.product)),n.file(o+"/README.txt",`${a.label}
${a.product.pages.length}ページ
${a.product.description}
関連付け時点のコピーです。
`);for(const[r,l]of a.product.pages.entries())u(t,l),n.file(`${o}/page-${String(r+1).padStart(2,"0")}.png`,await b(t))}}finally{t.width=1,t.height=1}return n.file("README.txt",`SILENT MARKET 商品制作パッケージ

full.md / manuscript.pdf：有料部分を含む商品原稿です。無料公開しないでください。
free.md：無料公開に設定した章だけの原稿です。
assets/：原稿内の画像。販売先へ別途アップロードしてください。
bonuses/：特典のPDFとページ別PNG。
product-info.md：出品準備の企画メモ。公開前に内容を確認してください。

note・Brain・深夜マーケット等への自動出品は行いません。各販売先の仕様に合わせ、画像と有料境界を手動で設定してください。
PDFは画像形式で、文字選択・検索はできません。
`),s("ZIPをまとめています"),n.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:3}})}export{$ as contentZIP};
