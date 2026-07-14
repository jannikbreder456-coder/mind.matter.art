# Organic Dreamscapes

Portfolio and inquiry website for **Mind Matter Art by Jannik Breder**.

## Publish

The repository includes a GitHub Pages workflow. Every push to `main` validates the JavaScript, builds a lightweight production artifact, and publishes the website.

Only `img/logo.svg` and the optimized WebP files in `img/optimized` are published. The high-resolution source artwork remains local and is excluded by `.gitignore`.

## Add or update artwork

1. Add the high-resolution source image to the local `img` folder.
2. Add its filename and output name to `IMAGES` in `optimize_images.py`.
3. Run `python optimize_images.py` after installing Pillow with `python -m pip install -r requirements-dev.txt`.
4. Add the optimized paths and bilingual description to the `products` array in `script.js`.
5. Commit and push the changes to `main`.

## Custom domain

The project is prepared for a custom domain. Follow `DOMAIN-SETUP.md` after purchasing the domain.

## Rights

See `LICENSE.txt`. Artwork and portfolio content are not offered under an open-content license.
