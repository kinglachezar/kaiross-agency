# Kaiross Agency

One-page static website for Kaiross Agency, a performance marketing agency. Live at [kaiross.agency](https://kaiross.agency).

## Stack

Plain HTML and CSS. No build step.

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
