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

The same records are embedded in the initial HTML in `<script id="product-data" type="application/json">`. Standard Schema.org Product/Offer/Review JSON-LD is in `#product-jsonld`. All 12 cards, seller metadata, and review text are also included in the initial HTML. JavaScript is not required for extraction. Product cards have `data-product-id`, `data-source-platform`, and `data-seller-id`; prices use `<data value="..." data-currency="USD">`; dates use `<time datetime="...">`. Product URLs use `?product=<id>` and open the corresponding detail view when JavaScript is enabled.

`source_platform` and seller are Cartlane (not Amazon or the product manufacturer). Seller ID `cartlane-001` and selling-since date `2026-10-08` are illustrative store metadata for this sample site, not third-party seller history. Reviews remain the existing development dataset entries.

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
