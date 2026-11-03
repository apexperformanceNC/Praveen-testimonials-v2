# Praveen Testimonials — V2

A separate, data-driven testimonials website for Praveen (NASM Certified Personal Trainer).

**The original site is independent and remains at:** https://apexperformanceNC.github.io/Praveen-testimonials/

## Live site (after enabling GitHub Pages)
https://apexperformanceNC.github.io/Praveen-testimonials-v2/

## The four main files
- `index.html` — page structure (rarely needs editing)
- `style.css` — styling and photo crops (rarely needs editing)
- `site.js` — creates cards from the data file (rarely needs editing)
- `testimonials.json` — names, testimonial paragraphs, photo links, and order

## Adding a testimonial
1. Obtain the person's approval to publish their exact wording and photograph, especially any health details.
2. Open `testimonials.json` on GitHub and click Edit (pencil).
3. Copy an existing **complete object** (from its `{` to its matching `}`) and paste it after the final object, preceded by a comma.
4. Set a unique `id` (lowercase with hyphens), `name`, `subtitle`, `paragraphs` (list of text paragraphs), and `images` (list of full image URLs). For a text-only testimonial, use `"images": []`. Keep `"kind": "standard"`.
5. Use GitHub's Preview/Commit interface to save, then check the live page after Pages deploys.

**Example** (an object within the surrounding JSON array, not a complete file):
```json
{
  "id": "example-client",
  "name": "Example Client",
  "subtitle": "42 · Profession",
  "paragraphs": [
    "First paragraph of their approved testimonial.",
    "Second paragraph."
  ],
  "images": [],
  "kind": "standard"
}
```
For a photograph, upload the file to a public images folder and use its public direct URL in `images`. Existing V2 photos deliberately reference the original public site's images to avoid altering or duplicating that repository.

**Do not use Replace All.** JSON needs commas between objects, but no trailing comma after the last object. Invalid JSON will prevent testimonials loading until corrected.

## One-time GitHub Pages setup
On this V2 repository, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**. The published URL should be the V2 URL above. Keep the original repository's Pages settings unchanged.

## Notes
- V2 retains all nine testimonials migrated from the existing website.
- The original site is not modified by this repository.
- This is a separate layout and should be visually reviewed on desktop/mobile before replacing any résumé link.
- Photographs used here load from the original public site. If the original image URLs change later, update the links in `testimonials.json`.
