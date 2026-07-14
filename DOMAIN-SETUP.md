# Custom domain setup

Do these steps only after purchasing the final domain.

1. Verify the domain in the personal or organization account settings under **Pages**.
2. Add the custom domain under the repository's **Settings > Pages**.
3. Create a file named `CNAME` in the repository root containing only the final hostname, for example `www.example.com`.
4. At the domain provider, point `www` to `<github-user>.github.io` with a CNAME record. For an apex domain, use the current GitHub Pages A/AAAA records from GitHub's documentation.
5. Avoid wildcard DNS records. Wait for DNS propagation, then enable **Enforce HTTPS** in GitHub Pages.
6. Replace the relative Open Graph image in `index.html` with the final absolute HTTPS URL and add a canonical link.
7. Add a `sitemap.xml` containing the final domain and append its URL to `robots.txt`.
8. Recheck `privacy.html` whenever hosting, forms, analytics, or third-party services change.

Official instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
