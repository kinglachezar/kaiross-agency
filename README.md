# Kaiross Agency

One-page static website for Kaiross Agency, a performance marketing agency. Live at [kaiross.agency](https://kaiross.agency).

## Stack

Plain HTML, CSS, and a small vanilla JS file for the multi-step application form. No build step. The form currently shows a confirmation state client-side only; wire it to a backend (Cloudflare Worker, Formspree, etc.) before using it for real leads.

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Select this repository.
3. Build settings: framework preset **None**, build command empty, build output directory `/`.
4. Deploy, then add the custom domain `kaiross.agency` under the project's Custom domains tab.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
