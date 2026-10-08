# Cartlane

An Amazon-inspired demo storefront built with HTML, CSS, and JavaScript. Product names and descriptions from the DummyJSON catalog, written reviews with consistent average ratings and counts, search, category filters, sorting, product details, a browser-local cart, and simulated checkout. No payment collection or real orders.

## Run locally

Run `python -m http.server 8000` in this folder, then open http://localhost:8000.

## GitHub Pages

The included GitHub Actions workflow deploys the static site when changes reach `main`. In the repository, select **Settings → Pages → Source → GitHub Actions**. All asset links are relative, so the site works under `/dummysite/` as well as at a domain root. No build or dependencies required.

## Customize

Edit listings in `app.js`, styling in `styles.css`, and page content in `index.html`. Product photos are cached locally from the [DummyJSON sample product catalog](https://dummyjson.com/products); names, descriptions, photos, and review entries come from this development dataset, which includes real brand names. Reviews are dataset fixtures, not verified customer submissions. Prices remain example prices and are not current retail quotes. This project is not affiliated with Amazon or the brands pictured. Verify asset rights before commercial reuse.

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
