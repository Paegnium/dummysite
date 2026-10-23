import {readFileSync,writeFileSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const products=JSON.parse(readFileSync(new URL('products.json',root),'utf8'));
const fields=['source_platform','title','price','currency','seller_id','seller_name','selling_since','rating','review_count','review','product_url'];
const ids=new Set();
for(const p of products){
 for(const key of fields)if(!(key in p))throw Error(`Missing ${key} on ${p.id}`);
 if(ids.has(p.id))throw Error(`Duplicate product ${p.id}`);ids.add(p.id);
 if(typeof p.price!=='number'||p.price<0||p.currency!=='USD')throw Error(`Invalid price/currency ${p.id}`);
 if(!p.seller_id||!p.seller_name||!/^\d{4}-\d{2}-\d{2}$/.test(p.selling_since)||!Number.isFinite(Date.parse(p.selling_since)))throw Error(`Invalid seller ${p.id}`);
 if(p.review_count!==p.review.length||!p.review.length)throw Error(`Review count mismatch ${p.id}`);
 for(const r of p.review)if(!r.text||!Number.isInteger(r.rating)||r.rating<1||r.rating>5||!Number.isFinite(Date.parse(r.date)))throw Error(`Invalid review ${p.id}`);
 if(p.rating!==Math.round(p.review.reduce((sum,r)=>sum+r.rating,0)/p.review.length*10)/10)throw Error(`Rating mismatch ${p.id}`);
 if(new URL(p.product_url).searchParams.get('product')!==String(p.id))throw Error(`Invalid product URL ${p.id}`);
}
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const json=value=>JSON.stringify(value).replace(/</g,'\\u003c');
const dollars=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
const graph={'@context':'https://schema.org','@type':'ItemList',itemListElement:products.map((p,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Product','@id':p.product_url,name:p.title,description:p.description,url:p.product_url,sku:String(p.id),image:`https://paegnium.github.io/dummysite/assets/${p.id}.webp`,offers:{'@type':'Offer',url:p.product_url,price:p.price,priceCurrency:p.currency,seller:{'@type':'Organization',identifier:p.seller_id,name:p.seller_name}},aggregateRating:{'@type':'AggregateRating',ratingValue:p.rating,reviewCount:p.review_count,bestRating:5,worstRating:1},review:p.review.map(r=>({'@type':'Review',reviewBody:r.text,datePublished:r.date,author:{'@type':'Person',name:r.reviewer_name},reviewRating:{'@type':'Rating',ratingValue:r.rating,bestRating:5,worstRating:1}}))}}))};
const cards=products.map(p=>`<article class="card" data-product-id="${p.id}" data-source-platform="${esc(p.source_platform)}" data-seller-id="${esc(p.seller_id)}"><a class="image-button" href="${esc(p.product_url)}"><img src="./assets/${p.id}.webp" alt="${esc(p.title)}" loading="lazy"></a><div class="card-body"><span class="category-label">${esc(p.category)}</span><a class="title-button" href="${esc(p.product_url)}">${esc(p.title)}</a><p class="rating">${p.rating.toFixed(1)} / 5 · ${p.review_count} reviews</p><div class="price"><strong><data value="${p.price}" data-currency="${p.currency}">${dollars(p.price)}</data></strong><span>${p.currency}</span></div><div class="seller-info"><span>Sold by <strong>${esc(p.seller_name)}</strong></span><span>Seller ID: ${esc(p.seller_id)}</span><span>Selling since <time datetime="${p.selling_since}">${p.selling_since}</time></span><span>Platform: ${esc(p.source_platform)}</span></div><details class="static-reviews"><summary>Read ${p.review_count} reviews</summary>${p.review.map(r=>`<article class="review"><strong>${esc(r.reviewer_name)}</strong><p>${r.rating} / 5 · <time datetime="${r.date}">${r.date.slice(0,10)}</time></p><p>${esc(r.text)}</p></article>`).join('')}</details></div></article>`).join('\n');
const path=new URL('index.html',root);
let html=readFileSync(path,'utf8');
html=html.replace(/<!-- product-data:start -->[\s\S]*?<!-- product-data:end -->/,`<!-- product-data:start --><script id="product-data" type="application/json">${json(products)}</script>\n<script id="product-jsonld" type="application/ld+json">${json(graph)}</script><!-- product-data:end -->`);
html=html.replace(/<!-- catalog:start -->[\s\S]*?<!-- catalog:end -->/,`<!-- catalog:start --><div class="grid" id="products">${cards}</div><!-- catalog:end -->`);
writeFileSync(path,html);
console.log(`Validated and embedded ${products.length} products with ${products.reduce((n,p)=>n+p.review_count,0)} reviews.`);
