'use strict';
const products = [
  {
    "id": 78,
    "name": "Apple MacBook Pro 14 Inch Space Grey",
    "category": "Electronics",
    "price": 649.99,
    "old": 799.99,
    "rating": 4.7,
    "reviews": 3,
    "badge": "Best seller",
    "desc": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Very happy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Hazel Evans"
      },
      {
        "rating": 5,
        "comment": "Very happy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Christopher West"
      },
      {
        "rating": 4,
        "comment": "Very satisfied!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Aubrey Garcia"
      }
    ]
  },
  {
    "id": 47,
    "name": "Table Lamp",
    "category": "Home & living",
    "price": 29.99,
    "old": 44.99,
    "rating": 4.3,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Excellent quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Benjamin Foster"
      },
      {
        "rating": 3,
        "comment": "Would not recommend!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Sophia Jones"
      },
      {
        "rating": 5,
        "comment": "Awesome product!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Natalie Harris"
      }
    ]
  },
  {
    "id": 90,
    "name": "Puma Future Rider Trainers",
    "category": "Style",
    "price": 54.99,
    "old": 74.99,
    "rating": 3.7,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Highly impressed!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Jackson Morales"
      },
      {
        "rating": 1,
        "comment": "Very disappointed!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Sophia Jones"
      },
      {
        "rating": 5,
        "comment": "Very pleased!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Logan Torres"
      }
    ]
  },
  {
    "id": 51,
    "name": "Boxed Blender",
    "category": "Kitchen",
    "price": 39.99,
    "old": 59.99,
    "rating": 5.0,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Very pleased!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Ella Adams"
      },
      {
        "rating": 5,
        "comment": "Would buy again!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Ruby Andrews"
      },
      {
        "rating": 5,
        "comment": "Very happy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Aurora Lawson"
      }
    ]
  },
  {
    "id": 14,
    "name": "Knoll Saarinen Executive Conference Chair",
    "category": "Home & living",
    "price": 149.99,
    "old": 199.99,
    "rating": 3.0,
    "reviews": 3,
    "badge": "Best seller",
    "desc": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "reviewList": [
      {
        "rating": 2,
        "comment": "Waste of money!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Ella Cook"
      },
      {
        "rating": 2,
        "comment": "Very dissatisfied!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Clara Berry"
      },
      {
        "rating": 5,
        "comment": "Would buy again!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Elena Long"
      }
    ]
  },
  {
    "id": 93,
    "name": "Brown Leather Belt Watch",
    "category": "Style",
    "price": 49.99,
    "old": 69.99,
    "rating": 3.0,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "reviewList": [
      {
        "rating": 1,
        "comment": "Very unhappy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "James Garcia"
      },
      {
        "rating": 4,
        "comment": "Fast shipping!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Avery Barnes"
      },
      {
        "rating": 4,
        "comment": "Would buy again!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "David Martinez"
      }
    ]
  },
  {
    "id": 52,
    "name": "Carbon Steel Wok",
    "category": "Kitchen",
    "price": 24.99,
    "old": 34.99,
    "rating": 4.3,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "reviewList": [
      {
        "rating": 4,
        "comment": "Excellent quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Nolan Bryant"
      },
      {
        "rating": 4,
        "comment": "Highly impressed!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Luna Perez"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Noah Lewis"
      }
    ]
  },
  {
    "id": 46,
    "name": "Plant Pot",
    "category": "Home & living",
    "price": 12.99,
    "old": 19.99,
    "rating": 4.0,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "reviewList": [
      {
        "rating": 4,
        "comment": "Fast shipping!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Vivian Carter"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Ella Adams"
      },
      {
        "rating": 3,
        "comment": "Poor quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Liam Smith"
      }
    ]
  },
  {
    "id": 81,
    "name": "Lenovo Yoga 920",
    "category": "Electronics",
    "price": 499.99,
    "old": 649.99,
    "rating": 4.3,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    "reviewList": [
      {
        "rating": 4,
        "comment": "Would buy again!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Bella Gonzalez"
      },
      {
        "rating": 5,
        "comment": "Great value for money!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Nathan Reed"
      },
      {
        "rating": 4,
        "comment": "Great value for money!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Hazel Gardner"
      }
    ]
  },
  {
    "id": 65,
    "name": "Lunch Box",
    "category": "Kitchen",
    "price": 16.99,
    "old": 24.99,
    "rating": 4.0,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Very pleased!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Jace Smith"
      },
      {
        "rating": 5,
        "comment": "Very happy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Zoe Bennett"
      },
      {
        "rating": 2,
        "comment": "Poor quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Michael Johnson"
      }
    ]
  },
  {
    "id": 13,
    "name": "Bedside Table African Cherry",
    "category": "Home & living",
    "price": 79.99,
    "old": 99.99,
    "rating": 4.0,
    "reviews": 3,
    "badge": "New find",
    "desc": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "reviewList": [
      {
        "rating": 4,
        "comment": "Excellent quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Aaliyah Hanson"
      },
      {
        "rating": 4,
        "comment": "Excellent quality!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Liam Smith"
      },
      {
        "rating": 4,
        "comment": "Highly recommended!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Avery Barnes"
      }
    ]
  },
  {
    "id": 88,
    "name": "Nike Air Jordan 1 Red And Black",
    "category": "Style",
    "price": 64.99,
    "old": 89.99,
    "rating": 3.3,
    "reviews": 3,
    "badge": "Deal",
    "desc": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "reviewList": [
      {
        "rating": 5,
        "comment": "Highly impressed!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Elena Long"
      },
      {
        "rating": 4,
        "comment": "Very happy with my purchase!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Addison Wright"
      },
      {
        "rating": 1,
        "comment": "Waste of money!",
        "date": "2025-04-30T09:41:02.053Z",
        "reviewerName": "Mason Wright"
      }
    ]
  }
];
const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
let cart={};try{const saved=JSON.parse(localStorage.getItem('cartlane-cart')||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))for(const p of products){const q=saved[p.id];if(Number.isInteger(q)&&q>0&&q<=99)cart[p.id]=q;}}catch{}
let category='All',query='',onlyDeals=false,toastTimer;
function save(){try{localStorage.setItem('cartlane-cart',JSON.stringify(cart));}catch{}updateCount();}
function updateCount(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#cart-count').textContent=count;$('#dialog-count').textContent=`(${count})`;$('#open-cart').setAttribute('aria-label',`Open cart, ${count} items`);}
function starDisplay(rating){return `<span class="stars" aria-label="${rating} out of 5 stars"><span aria-hidden="true">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5-Math.round(rating))}</span></span>`;}
function stars(p){return `<button class="rating rating-link" data-reviews="${p.id}" aria-label="Read ${p.reviews} reviews for ${p.name}">${starDisplay(p.rating)}<span>${p.rating.toFixed(1)} (${p.reviews} reviews)</span></button>`;}
function escapeHtml(value){return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function reviews(p){const bars=[5,4,3,2,1].map(n=>{const count=p.reviewList.filter(r=>r.rating===n).length;return `<div class="review-bar"><span>${n} star</span><div class="bar-track"><div class="bar-fill" style="width:${count/p.reviews*100}%"></div></div><span>${count}</span></div>`;}).join('');return `<section class="reviews-section" id="product-reviews" aria-label="Product reviews"><h3>Product reviews</h3><div class="review-summary"><div><strong class="review-average">${p.rating.toFixed(1)}</strong>${starDisplay(p.rating)}<p>${p.reviews} reviews</p></div><div class="review-bars">${bars}</div></div><div class="review-list">${p.reviewList.map(r=>`<article class="review"><div class="review-heading"><div class="review-avatar" aria-hidden="true">${escapeHtml(r.reviewerName.split(' ').map(n=>n[0]).join(''))}</div><div><strong>${escapeHtml(r.reviewerName)}</strong><time datetime="${r.date.slice(0,10)}">${new Date(r.date).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}</time></div>${starDisplay(r.rating)}</div><p>${escapeHtml(r.comment)}</p></article>`).join('')}</div></section>`;}

function render(){let list=products.filter(p=>(category==='All'||p.category===category)&&(!onlyDeals||p.badge==='Deal')&&`${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(query));const sort=$('#sort').value;if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);$('#catalog-title').textContent=onlyDeals?"Today's little wins":category==='All'?'Your next favorite is here':category;$('#result-count').textContent=`${list.length} ${list.length===1?'product':'products'}${query?' matching your search':''}`;$('#products').innerHTML=list.length?list.map(p=>`<article class="card"><span class="badge ${p.badge==='Deal'?'deal':''}">${p.badge}</span><button class="image-button" data-detail="${p.id}" aria-label="View ${p.name}"><img src="./assets/${p.id}.webp" alt="${p.name}" loading="lazy"></button><div class="card-body"><span class="category-label">${p.category}</span><button class="title-button" data-detail="${p.id}">${p.name}</button>${stars(p)}<div class="price"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div><p class="shipping">Free delivery on $50+ orders</p><button class="add" data-add="${p.id}" aria-label="Add ${p.name} to cart">Add to cart</button></div></article>`).join(''):'<div class="empty"><h2>No finds just yet</h2><p>Try another search or browse all departments.</p><button class="primary" id="reset-filters">Show all products</button></div>';document.querySelectorAll('[data-category]').forEach(b=>{b.classList.toggle('active',b.dataset.category===category);b.setAttribute('aria-pressed',String(b.dataset.category===category));});}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2400);}
function add(id){if((cart[id]||0)>=99){toast('Maximum quantity is 99 per product.');return;}cart[id]=(cart[id]||0)+1;save();toast('Added to your cart');}
function scrollCatalog(){$('#catalog').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
function reset(){category='All';query='';onlyDeals=false;$('#search').value='';$('#search-category').value='All';render();}
function renderCart(){const entries=products.filter(p=>cart[p.id]);$('#cart-items').innerHTML=entries.length?entries.map(p=>`<div class="cart-row"><img src="./assets/${p.id}.webp" alt="${p.name}"><div class="cart-info"><strong>${p.name}</strong><div>${money(p.price)}</div><div class="quantity"><button data-change="${p.id}" data-delta="-1" aria-label="Decrease quantity of ${p.name}">−</button><span aria-label="Quantity">${cart[p.id]}</span><button data-change="${p.id}" data-delta="1" aria-label="Increase quantity of ${p.name}" ${cart[p.id]>=99?'disabled':''}>+</button><button class="remove" data-remove="${p.id}">Remove</button></div></div></div>`).join(''):'<div class="empty"><h2>A little room for something good.</h2><p>Your cart is empty. Explore the finds to get started.</p><button class="primary" data-close="cart-dialog">Keep browsing</button></div>';const subtotal=entries.reduce((n,p)=>n+p.price*cart[p.id],0),shipping=subtotal>=50?0:4.99;$('#cart-summary').innerHTML=entries.length?`<div class="summary"><p><span>Subtotal</span><span>${money(subtotal)}</span></p><p><span>Delivery</span><span>${shipping===0?'Free':money(shipping)}</span></p><p class="total"><span>Total</span><span>${money(subtotal+shipping)}</span></p><button id="checkout" class="primary">Place order</button><small>Simulated checkout. No payment required.</small></div>`:'';updateCount();}
function detail(id,showReviews=false){const p=products.find(p=>p.id===id);$('#product-detail').innerHTML=`<div class="detail-layout"><img src="./assets/${p.id}.webp" alt="${p.name}"><div><span class="category-label">${p.category}</span><h2>${p.name}</h2>${stars(p)}<p>${p.desc}</p><div class="price"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div><p>Free delivery on $50+ orders</p><button class="add" data-add="${p.id}">Add to cart</button></div></div>${reviews(p)}`;if(!$('#product-dialog').open)$('#product-dialog').showModal();if(showReviews)$('#product-reviews').scrollIntoView({block:'start'});}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.category){category=b.dataset.category;onlyDeals=false;$('#search-category').value=category;render();if(b.closest('nav'))scrollCatalog();}if(b.dataset.add)add(Number(b.dataset.add));if(b.dataset.detail)detail(Number(b.dataset.detail));if(b.dataset.reviews)detail(Number(b.dataset.reviews),true);if(b.dataset.close)document.getElementById(b.dataset.close).close();if(b.dataset.change){const id=Number(b.dataset.change);cart[id]=Math.min(99,(cart[id]||0)+Number(b.dataset.delta));if(cart[id]<=0)delete cart[id];save();renderCart();}if(b.dataset.remove){delete cart[b.dataset.remove];save();renderCart();}if(b.id==='reset-filters'){reset();}if(b.id==='checkout'){cart={};save();$('#cart-dialog').close();$('#order-dialog').showModal();}});
$('#search-form').addEventListener('submit',e=>{e.preventDefault();query=$('#search').value.trim().toLowerCase();category=$('#search-category').value;onlyDeals=false;render();scrollCatalog();});$('#search').addEventListener('input',()=>{query=$('#search').value.trim().toLowerCase();render();});$('#search-category').addEventListener('change',()=>{category=$('#search-category').value;onlyDeals=false;render();});$('#sort').addEventListener('change',render);$('#open-cart').addEventListener('click',()=>{renderCart();$('#cart-dialog').showModal();});for(const id of ['shop-deals','deals'])document.getElementById(id).addEventListener('click',()=>{reset();onlyDeals=true;render();scrollCatalog();});$('#browse-all').addEventListener('click',()=>{reset();scrollCatalog();});$('#back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{const r=d.getBoundingClientRect();if(e.target===d&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))d.close();}));window.addEventListener('storage',e=>{if(e.key==='cartlane-cart')location.reload();});updateCount();render();
