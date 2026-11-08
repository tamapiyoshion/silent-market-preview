import{J as l}from"./jszip.min-DoPnuY-Y.js";import{q as r,r as p,t as c,u as d}from"./model-nBGIfpao.js";import{contentPDF as u}from"./pdf-DKHxA6oI.js";import{m as g}from"./export-C5_dPU1j.js";import{g as b,h as P}from"./index-3Z1hNnG1.js";import"./iso-8Wchqs8e.js";import"./Studio-15DNjHeE.js";import"./storage-C_rXZ_wQ.js";import"./client-CEjENRCx.js";async function k(e,o=()=>{}){const n=new l;n.file("full.md",r(e)),n.file("free.md",r(e,"free")),n.file("product-info.md",p(e)),e.ai&&n.file("audit.md",c(e)),o("商品原稿のPDFを作成中"),n.file("manuscript.pdf",await u(e));for(const a of e.chapters)for(const t of a.blocks)t.type==="image"&&n.file(d(t),t.src.split(",")[1],{base64:!0});const i=document.createElement("canvas");try{for(const[a,t]of e.bonuses.entries()){const s=`bonuses/bonus-${String(a+1).padStart(2,"0")}`;o(`特典 ${a+1} / ${e.bonuses.length} を作成中`),n.file(s+"/bonus.pdf",await g(t.product)),n.file(s+"/README.txt",`${t.label}
${t.product.pages.length}ページ
関連付け時点のコピーです。
`);for(const[f,m]of t.product.pages.entries())b(i,m),n.file(`${s}/page-${String(f+1).padStart(2,"0")}.png`,await P(i))}}finally{i.width=1,i.height=1}return n.file("README.txt",`SILENT MARKET 商品制作パッケージ

full.md / manuscript.pdf：有料部分を含む商品原稿です。無料公開しないでください。
free.md：無料公開に設定した章だけの原稿です。
assets/：原稿内の画像。販売先へ別途アップロードしてください。
bonuses/：特典のPDFとページ別PNG。
product-info.md：出品準備の企画メモ。公開前に内容を確認してください。

note・Brain・深夜マーケット等への自動出品は行いません。各販売先の仕様に合わせ、画像と有料境界を手動で設定してください。
PDFは画像形式で、文字選択・検索はできません。
`),o("ZIPをまとめています"),n.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:3}})}export{k as contentZIP};
