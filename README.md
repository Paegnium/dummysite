# Cartlane

An Amazon-inspired demo storefront built with HTML, CSS, and JavaScript. Product names and descriptions from the DummyJSON catalog, written reviews with consistent average ratings and counts, search, category filters, sorting, product details, a browser-local cart, and simulated checkout. No payment collection or real orders.

## Run locally

Run `python -m http.server 8000` in this folder, then open http://localhost:8000.

## GitHub Pages

The included GitHub Actions workflow deploys the static site when changes reach `main`. In the repository, select **Settings → Pages → Source → GitHub Actions**. All asset links are relative, so the site works under `/dummysite/` as well as at a domain root. No build or dependencies required.

## Customize

Edit listings in `products.json` and run `node scripts/build-catalog.mjs`, styling in `styles.css`, and page content in `index.html`. Product photos are cached locally from the [DummyJSON sample product catalog](https://dummyjson.com/products); names, descriptions, photos, and review entries come from this development dataset, which includes real brand names. Reviews are dataset fixtures, not verified customer submissions. Prices remain example prices and are not current retail quotes. This project is not affiliated with Amazon or the brands pictured. Verify asset rights before commercial reuse.

Cart state is saved only on the visitor's current browser. If storage is unavailable, the cart continues working for the session.

## First publication as `dummysite`

With GitHub CLI authenticated to an account allowed to create repositories:

```bash
git init -b main
git add .
git commit -m "Build Cartlane demo storefront"
gh repo create dummysite --public --source=. --remote=origin
owner=$(gh api user --jq .login)
gh api --method POST "repos/$owner/dummysite/pages" -f build_type=workflow
git push -u origin main
```

After the deployment workflow succeeds, open `https://<your-github-username>.github.io/dummysite/`.

## Scraping product data

The public catalog is at `https://paegnium.github.io/dummysite/products.json`.
Each record contains `source_platform`, `title`, numeric `price`, ISO currency code `currency`, `seller_id`, `seller_name`, ISO date `selling_since`, `rating`, `review_count`, `review` (objects with `text`, numeric `rating`, and ISO timestamp `date`), and an absolute `product_url`. Additional presentation fields are included.

The same records are embedded in the initial HTML in `<script id="product-data" type="application/json">`. Standard Schema.org Product/Offer/Review JSON-LD is in `#product-jsonld`. All 75 cards, seller metadata, and review text are also included in the initial HTML. JavaScript is not required for extraction. Product cards have `data-product-id`, `data-source-platform`, and `data-seller-id`; prices use `<data value="..." data-currency="USD">`; dates use `<time datetime="...">`. Product URLs use `?product=<id>` and open the corresponding detail view when JavaScript is enabled.

`source_platform` is Cartlane (not Amazon or the product manufacturer). The catalog has 75 listings across six departments and fifteen illustrative sellers. Seller names, IDs, and selling-since dates are sample metadata, not third-party seller history. Existing listings are preserved; the 48 additional listings use varied seller identities, review dates, text, and counts. Reviews include the original development dataset entries and authored sample entries for testing, including negative MacBook Pro reviews and a mix of positive, mixed, and negative feedback on new listings. They are not verified customer submissions.

Edit `products.json` as the source of truth, then run `node scripts/build-catalog.mjs` to validate the schema, review counts and ratings, and regenerate the HTML. Deployment runs this command automatically. Do not edit generated catalog HTML or embed a separate product list in `app.js`.

```python
import requests
from bs4 import BeautifulSoup
import json

url = "https://paegnium.github.io/dummysite/"
response = requests.get(url, timeout=30)
response.raise_for_status()
soup = BeautifulSoup(response.text, "html.parser")
products = json.loads(soup.select_one("#product-data").string)
print(products[0]["title"], products[0]["seller_name"], products[0]["review"])
```

## Expanded catalog pricing

The 48 new listings use product names, descriptions, photos, and reference prices from the DummyJSON development catalog. `original_price` is a sample reference price, not a verified current market quote. Each new listing has a distinct selling price. Sixteen new low-rated listings (below 3 stars) cost approximately 12–32% of their reference price; mixed-review listings cost 45–67%; positive-review listings cost 76–95%. These synthetic pricing and review scenarios support scraping tests and are not actual merchant offers. Ratings and review counts are computed from the listed reviews.

## Products compared with the other storefronts

The catalogs in [dummysite2](https://github.com/Paegnium/dummysite2) and [dummysite3](https://github.com/Paegnium/dummysite3) were compared by product model, not by offer ID or title spelling. Fifteen previously absent models were added as Cartlane listings (IDs 2001–2015) under six new seller identities. All original 60 listings are unchanged. Multiple alternate-seller offers for one model in the source repositories are represented by one new listing here.

Six dummysite2 models already existed: Nike Air Jordan 1 (88), MacBook Pro M1 Pro (78), Table Lamp (47), iPhone 13 Pro (123), Puma Future Rider (90), and the HESHE leather bag (173). Their shortened source titles were treated as aliases. The M4 MacBook Pro in dummysite3 is a different model from the existing M1 Pro laptop and was added separately.

Each new record has `reference_product_url` linking to the corresponding source offer, with its own Cartlane URL, seller identity, prices, dates, and authored review entries. All nine unique models from dummysite3 and the six missing models from dummysite2 are represented. Source reviews and aggregate counts were not reused; Cartlane ratings/counts are calculated from the reviews included here.

Cartlane continues to show USD. New dummysite2 offers use the source USD price as their sample reference price; the nine SGD-based dummysite3 models use independently chosen illustrative USD reference prices, not a live exchange-rate conversion. Prices differ from the source offers, with low-rated new listings discounted 72–84% against their sample reference price. These remain test scenarios, not verified market quotations.

Copied product assets retain their existing formats through the optional `image` path. Photography notices from dummysite3 are retained in `assets/IMPORTED-ASSET-NOTICES.txt`; six existing SVG assets from dummysite2 and the M4 SVG from dummysite3 are reused as product illustrations. The source repositories are not modified.
