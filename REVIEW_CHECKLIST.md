# Review Checklist

Items that need user review before the website can be deployed.

---

## ✅ Completed

- [x] Docusaurus upgraded to 3.9.2
- [x] iNZight Lite URLs updated to `lite.inzight.nz`
- [x] Removed deprecated mailing list references
- [x] Updated About page with correct project leadership
- [x] Removed "End of Life" warnings from Advanced modules docs
- [x] Fixed `<Desktop>` and `<Lite>` component rendering
- [x] Switched to Bun for package management
- [x] Fixed TypeScript configuration issues
- [x] Fixed MDX v3 syntax issues (escaped curly braces)
- [x] Maps module removed (not functional)
- [x] R package repository URL confirmed correct
- [x] Sponsor logos updated
- [x] Code Panel removed from FAQ
- [x] About pages reviewed (team redesigned)
- [x] Related projects page reviewed
- [x] Version toggle working
- [x] Survey data docs consolidated into single page
- [x] Removed unused/duplicate pages (markdown-page, merge, surveyspec)
- [x] Module docs updated to use original content from old site
- [x] Install page updated with latest version (4.4.0)

---

## 📝 Content Review - Module Documentation

All module docs now use original content from old site:

- [x] **Model Fitting** - Original content (brief)
- [x] **Multiple Response** - Original content with images
- [x] **Quick Explore** - Original content
- [x] **3D Plot** - Original content (brief)
- [x] **Design of Experiment** - Minimal placeholder (Lite only, no old docs)
- [x] **Multivariate** - Minimal placeholder (Lite only, no old docs)
- [ ] **Time Series (new)** - AI-generated, needs review against actual software
- [x] **Time Series (Legacy)** - Original content from old site

---

## 🔧 Known Broken Links

These links in the menubar index point to docs that don't exist yet:
- Various reference menu sub-pages (Plot, Dataset, Variables, Help menus)

These are expected - full menubar reference documentation is a future task.

---

## 📋 Future Tasks (Not Blocking Deployment)

### Documentation to Add
- [ ] Complete menubar reference documentation (Plot, Dataset, Variables, Help)
- [ ] Data Dictionary feature
- [ ] Generate Data Report feature
- [ ] Interactive plot export
- [ ] FT Graphics features

### Infrastructure
- [ ] Set up new mailing list/newsletter system
- [ ] Configure analytics (if desired)
- [ ] Set up 301 redirects from old URLs:
  - `/user_guides/addons/?topic=mod_X` → `/docs/reference/modules/mod-X`
