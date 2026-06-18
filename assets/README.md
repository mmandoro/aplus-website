# A-Plus assets folder

Drop your images in here, then add one line to the config at the bottom of `index.html`.
The website builds these sections **dynamically** from that config — no coding needed.

## Folders

| Folder | What goes here | Used by |
|--------|----------------|---------|
| `brand/` | Your own A-Plus logo (`logo.png`) and favicon | Top navigation bar |
| `hero/`  | Big background photos for the rotating hero (`slide1.jpg`, `slide2.jpg`…) | Hero carousel |
| `logos/` | Client / partner / "trusted by" logos (`client1.png`…) | Scrolling logo strip |
| `portfolio/` | Screenshots of sites/work you've done (`project1.jpg`…) | "Our work" gallery |

## Tips
- **File names:** use lowercase, no spaces (use `-` instead). e.g. `dallas-plumbing.jpg`
- **Logos:** PNG with a transparent background looks best.
- **Photos / portfolio:** JPG, roughly 1600px wide is plenty. Keep each under ~400KB so the site stays fast (you can compress free at tinypng.com).
- After adding a file, open `index.html`, scroll to the bottom, and add it to the matching list (`heroSlides`, `logos`, or `portfolio`). There are example lines showing the format.

## It still looks good while empty
Until you add real images, the site shows tasteful placeholders automatically, so you can launch first and fill these in over time.
