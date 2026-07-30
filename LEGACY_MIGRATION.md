# Legacy Site Migration Plan — legacy.kaovilai.pw → www.kaovilai.pw

Goal: everything worth keeping from the legacy Google Site lives on the new site, then archive legacy for good.
Crawled 2026-07-30. Legacy = Google Sites, 6 content pages, 3 hosted images, no other files.

## 1. Complete legacy catalog

### Pages
| Page | Content |
|---|---|
| `/` and `/about-me` (identical) | Header "Passawit Kaovilai (AKA TIGER)" · abandoned-notice → new site · About text · games list · places-visited map screenshot · Blog link |
| `/things-i-made` | Empty hub page (nav only) |
| `/things-i-made/cal` | Google Calendar embed, "Bangkok Time" |
| `/things-i-made/wishlists` | Bucket list (7 items) · Electronics: Focals 2.0 (link), Hololens · Others: BEV/PHEV, Cybertruck |
| `/pay-me` | Venmo, Zelle (enroll.zellepay.com QR link), Cash App, PayPal, Messenger (m.me/passawit) · 2 QR images (PromptPay Thai QR + Zelle QR) · tig.pw/pay |
| `/contact-me` | Mobile +1-415-769-9020 · email · street address + address.kaovilai.pw · LinkedIn, Twitter (@kaovilaip — old handle), Quora (Passawit-Kaovilai slug) |

### Text unique to legacy (verbatim highlights)
- "Computer Programming and Industrial Engineering Undergraduate at North Carolina State University graduating in May 2021"
- "Games I have played includes Rocket League, Fortnite, Team Fortress 2, Apex Legends, Need For Speed series, Finding Nemo, and a few other gems."
- "In red below are some places I have lived in, visited, or transited through. Screenshot from Google Maps' Timeline."

### Files/assets (all on lh3.googleusercontent.com — will die with the Google Site)
1. Places-visited map screenshot (home page)
2. PromptPay Thai QR image (pay-me)
3. Zelle QR image (pay-me)

### Functions
- Google Sites search — n/a, skip
- Calendar embed — superseded by new site's "Schedule a meeting" appointment link
- Payment QR display — must migrate

## 2. Gap analysis (legacy → new site)

| # | Item | Status | Action |
|---|---|---|---|
| G1 | PromptPay Thai QR | missing — issue #146, Copilot PR #147 in flight | review/merge #147 OR supersede; self-host QR image |
| G2 | Zelle proper link/QR | new site uses mailto hack | replace with enroll.zellepay.com QR link + self-hosted QR image |
| G3 | Messenger m.me/passawit | missing | add to Pay Me (or Social) |
| G4 | tig.pw/pay short link | missing | one-liner under Payment Methods |
| G5 | Games list | missing | playful line in About |
| G6 | Places-visited map | missing | self-host image in About (⚠ decision: it's a ~2021 screenshot — keep dated or reshoot fresh Timeline) |
| G7 | Wishlist "Others": BEV/PHEV, Cybertruck | missing | add to Wishlist box (Focals 2.0 → already generalized to "AR Glasses" ✓) |
| G8 | Degree detail (dual discipline, May 2021) | partial | About says 2016–2021; add "Computer Programming & Industrial Engineering" |
| G9 | Street address / address.kaovilai.pw | missing | ⚠ decision: publish on new site or drop (PII) |
| G10 | Calendar page | superseded ✓ | optional: add "Raleigh, NC (ET)" timezone note near Schedule link |
| G11 | Old handles (@kaovilaip, Quora Passawit-Kaovilai) | new site has newer handles | verify new ones correct; no action expected |
| — | Bucket list, contact phone/email, Venmo/CashApp/PayPal, LinkedIn, blog link | already migrated ✓ | none |

## 3. Edit plan (files to change)

1. **Download assets first** (lh3 URLs in section 1 → they die when the Google Site does):
   - `public/about/places-map.png`
   - `public/pay/promptpay-qr.png`
   - `public/pay/zelle-qr.png`
   CSP already `img-src 'self'` — self-hosting means no CSP change.
2. **src/components/HelloWorld.vue**
   - About section: degree detail (G8) + games line (G5) + places-map `<img loading="lazy">` with Timeline caption (G6)
   - Pay Me: Zelle → QR link (G2), add Messenger (G3), PromptPay QR (G1 — coordinate with PR #147), mono footer line "all of the above: tig.pw/pay" (G4)
   - Bucket List Wishlist box: add BEV/PHEV, Cybertruck (G7)
   - Contact/Social: address line IF G9 approved
3. **src/components/__tests__/HelloWorld.spec.ts** — extend: wishlist items present, pay links (zellepay, m.me, tig.pw/pay), promptpay img
4. **Rebuild docs/ + commit** (site serves from docs/)

## 4. Archive runbook (after edits live)

1. Verify all 3 images self-hosted and rendering on www.kaovilai.pw
2. Snapshot all 6 legacy URLs to Wayback Machine (web.archive.org/save)
3. Google Site: either delete, or strip to a single "moved to www.kaovilai.pw" page
4. DNS: keep `legacy.kaovilai.pw` CNAME while Google Site holds the pointer page, or retire the subdomain (new site already has `/contact-me` redirect for old deep links; consider same for `/pay-me`)
5. Remove "try the legacy site" link from new site hero once archived

## 5. Decisions needed from Tiger

- **G9**: publish street address on new site, or drop it?
- **G6**: reuse the dated (~2021) Timeline map screenshot, or take a fresh one?
- **G1**: merge Copilot PR #147 for Thai QR, or supersede it with this plan's Pay Me rework?
