import{J as m}from"./jszip.min-B1vbFYkE.js";import{m as f,av as p,aw as c,ax as d,a4 as u}from"./index-COjtLyQz.js";import{contentPDF as b}from"./pdf-O47vtSK1.js";import{m as g}from"./export-CuALp5Ys.js";import{d as P}from"./draw-CdXlx_pb.js";async function y(e,o=()=>{}){const n=new m;n.file("full.md",f(e)),n.file("free.md",f(e,"free")),n.file("product-info.md",p(e)),e.ai&&n.file("audit.md",c(e)),o("商品原稿のPDFを作成中"),n.file("manuscript.pdf",await b(e));for(const i of e.chapters)for(const t of i.blocks)t.type==="image"&&n.file(d(t),t.src.split(",")[1],{base64:!0});const a=document.createElement("canvas");try{for(const[i,t]of e.bonuses.entries()){const s=`bonuses/bonus-${String(i+1).padStart(2,"0")}`;o(`特典 ${i+1} / ${e.bonuses.length} を作成中`),n.file(s+"/bonus.pdf",await g(t.product)),n.file(s+"/README.txt",`${t.label}
${t.product.pages.length}ページ
${t.product.description}
関連付け時点のコピーです。
`);for(const[r,l]of t.product.pages.entries())P(a,l),n.file(`${s}/page-${String(r+1).padStart(2,"0")}.png`,await u(a))}}finally{a.width=1,a.height=1}return n.file("README.txt",`SILENT MARKET 商品制作パッケージ

full.md / manuscript.pdf：有料部分を含む商品原稿です。無料公開しないでください。
free.md：無料公開に設定した章だけの原稿です。
assets/：原稿内の画像。販売先へ別途アップロードしてください。
bonuses/：特典のPDFとページ別PNG。
product-info.md：出品準備の企画メモ。公開前に内容を確認してください。

note・Brain・深夜マーケット等への自動出品は行いません。各販売先の仕様に合わせ、画像と有料境界を手動で設定してください。
PDFは画像形式で、文字選択・検索はできません。
`),o("ZIPをまとめています"),n.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:3}})}export{y as contentZIP};
