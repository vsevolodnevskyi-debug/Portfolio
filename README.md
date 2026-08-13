# Vsevolod Nevskyi — portfolio site

A single-page portfolio for an AI Automation Consultant: three languages, an embedded video intro, and a contact form — with no framework, no build step, and no third-party JavaScript.

**Live:** _add your URL here after deploying_

## Why it is built this way

Most portfolio sites pull in a framework, a component library, and three analytics scripts to render what is essentially one page of text. This one does none of that, on purpose:

- **No build step.** Clone it, open `index.html`, and you are looking at the production site. What you edit is what ships.
- **No dependencies, no third-party requests.** No React, no jQuery, no bundler, and no CDN — fonts are self-hosted, so the page makes zero external calls. Nothing in the supply chain to compromise, and no visitor IP leaks to Google Fonts (which matters under GDPR).
- **Strict CSP without `unsafe-inline`.** All JavaScript lives in `app.js` rather than inline `<script>` tags, which is what makes a genuinely strict Content Security Policy possible.
- **Three languages from one file.** A small `data-i18n` system swaps text, page title, and the video track per language, and remembers the choice.

Total payload: ~65 KB of code plus media.

## Structure

```
index.html      markup + styles (inline <style>, allowed by CSP)
app.js          i18n dictionaries, language switcher, video, contact form
fonts.css       @font-face declarations, split by unicode-range
fonts/          self-hosted woff2 subsets (SIL Open Font License)
vercel.json     security headers and cache policy
assets/         video intros and poster frames
```

### A note on the serif

Fraunces has no Cyrillic glyphs, so Ukrainian headings fall back to Playfair Display — declared next in the stack, which the browser resolves per character with no extra logic:

```css
--serif: 'Fraunces', 'Playfair Display', Georgia, serif;
```

Fonts are subset by script (`latin`, `latin-ext`, `cyrillic`) with matching `unicode-range` rules, so a visitor reading the English page never downloads the Cyrillic files.

## How the language switcher works

English lives in the HTML itself and is captured into the `en` dictionary on load; Ukrainian and Swedish are dictionaries in `app.js`. Every translatable element carries a `data-i18n` key.

```js
document.querySelectorAll('[data-i18n]').forEach(el => {
  const v = I18N[lang][el.dataset.i18n];
  if (v !== undefined) el.innerHTML = v;
});
```

Adding a language means adding one dictionary and one button. Adding a translatable string means adding `data-i18n="some.key"` to the element and the key to each dictionary.

Machine translation is disabled (`translate="no"` plus `<meta name="google" content="notranslate">`). Browser translation plugins rewrite text nodes, which collides with the switcher rewriting the same nodes — the result is garbled text. Since the site ships its own reviewed translations, letting a plugin re-translate them is a downgrade in both accuracy and stability.

## Video per language

The card adapts to whichever clip is loaded — the Ukrainian intro is vertical (9:16), the English one landscape (16:9):

```js
vid.addEventListener('loadedmetadata', () => {
  const landscape = vid.videoWidth > vid.videoHeight;
  card.classList.toggle('landscape', landscape);
});
```

Height is capped with `min(533px, calc(100svh - 270px))` so the whole card is visible on load regardless of screen height, rather than being cut off on shorter laptop displays.

## Contact form

Posts to [Web3Forms](https://web3forms.com) — no backend, no database, no stored personal data. Protections, outermost first:

| Layer | Purpose |
|---|---|
| Honeypot field | Bots fill hidden inputs; humans never see them |
| Time trap (< 3 s) | Instant submissions are scripted, not typed |
| Rate limit | Max 3 sends per 10 min, 20 s minimum between them |
| Field length caps | Prevents oversized payloads |
| `form-action` in CSP | Browser refuses to post the form anywhere else |

The client-side rate limit is a UX guard and is trivially bypassed by design; the enforceable limit lives with the form provider.

## Security headers

Set in `vercel.json` and applied at the edge:

`Content-Security-Policy` · `Strict-Transport-Security` · `X-Frame-Options: DENY` · `X-Content-Type-Options: nosniff` · `Referrer-Policy` · `Permissions-Policy` · `Cross-Origin-Opener-Policy`

Verify a deployment at [securityheaders.com](https://securityheaders.com) — this configuration scores A/A+.

For a static site the real attack surface is not the code but the accounts that can publish it. Two-factor authentication on the Git host, the hosting provider, and the domain registrar matters more than everything above combined.

## Deploying

1. Push this folder to a repository
2. Import it into [Vercel](https://vercel.com) — no build settings needed, it is static
3. Get a free access key at [web3forms.com](https://web3forms.com) and replace `REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`
4. Enable **2FA** on both accounts before connecting a custom domain

Any static host works — the only Vercel-specific file is `vercel.json`. On Netlify the equivalent lives in `netlify.toml`; on Cloudflare Pages, in `_headers`.

## Reuse

MIT licensed — see [LICENSE](LICENSE). Fork it, strip the content, keep the structure. If the i18n approach or the CSP setup is useful to you, that is the point.

## Contact

Vsevolod Nevskyi — Uppsala, Sweden
[vsevolod.nevskyi@gmail.com](mailto:vsevolod.nevskyi@gmail.com) · [LinkedIn](https://www.linkedin.com/in/vsevolod-nevskyi-4a7649168/)
