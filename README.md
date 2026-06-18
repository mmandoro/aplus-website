# A-Plus Branding Technologies — website

The official website for **A-Plus Branding Technologies** — conversion-focused websites, AI receptionists and automation for local businesses in Cape Town.

Live domain: https://aplusbrandingtechnologies.com

## What's here
- `index.html` — the whole website, in one file (fast and easy to host).
- `assets/` — your images. Drop files in here and they appear on the site. See [assets/README.md](assets/README.md).

## How to edit (no coding needed)
Open `index.html` and scroll to the bottom. There are two clearly-marked sections:

1. **`BIZ`** — your WhatsApp number, phone, email and Google profile link. Edit once, updates every button.
2. **`SITE`** — the dynamic content:
   - `heroSlides` — the rotating hero messages
   - `logos` — the "trusted by" logo strip
   - `portfolio` — your "our work" gallery
   - `brandLogo` — your own A-Plus logo

To add an image: put the file in the right `assets/` folder, then add one line to the matching list. Examples are already in the file.

## How to put it live
Pick one:
- **IONOS hosting** — upload the folder to your webroot, point the domain, then activate SSL.
- **GitHub Pages (free)** — repo Settings → Pages → deploy from `main` branch → `/root`. Then point your domain at it.
- **Netlify / Cloudflare Pages (free)** — connect this repo, deploy, point the domain.

## Built with
Plain HTML, CSS and JavaScript — no build step, no dependencies.
