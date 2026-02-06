# Review Checklist

Items that need user review before the website can be deployed.

---

## ⚠️ High Priority - Needs Verification

### Maps Module Status
- [ ] **Verify Desktop Maps module works** - The iNZightMaps package now requires a Stadia Maps API key. Check if it works out-of-the-box or needs configuration.
- [ ] **Verify Lite Maps module status** - User indicated Maps may not work on Lite. Confirm current status.
- [ ] **Update Maps documentation** if changes are needed based on testing.

### URLs and External Links
- [ ] **R package repository URL** - Is `https://r.docker.stat.auckland.ac.nz` still the correct URL?
- [ ] **Confirm sponsor logo URLs** work (some reference inzight.nz which may not exist yet)

---

## 📝 Content Review

### New Module Documentation
Review these newly created module docs for accuracy:
- [ ] `/docs/reference/modules/model-fitting` - Model Fitting module
- [ ] `/docs/reference/modules/maps` - Maps module (includes warning about API key)
- [ ] `/docs/reference/modules/multiple-response` - Multiple Response module
- [ ] `/docs/reference/modules/quick-explore` - Quick Explore module
- [ ] `/docs/reference/modules/time-series` - Time Series module (new/tidyverts)
- [ ] `/docs/reference/modules/time-series-legacy` - Time Series Legacy module

### About Pages
Already implemented - quick review recommended:
- [ ] `/about` - Main about page
- [ ] `/about/team` - Team members (any updates needed?)
- [ ] `/about/sponsors` - Sponsor logos display correctly
- [ ] `/about/development` - Development info
- [ ] `/about/brand` - Brand assets (are logos available?)

### Related Projects
- [ ] `/related` - Check all external links are working

---

## 🔧 Technical Items

### Broken Links (Known)
The following links point to documentation that doesn't exist yet:
- `/docs/interface/menubar/plot` (from menubar index)
- `/docs/interface/menubar/dataset` (from menubar index)
- `/docs/interface/menubar/variables` (from menubar index)
- `/docs/interface/menubar/variables-manipulate` (from menubar index)
- `/docs/interface/menubar/dataset-filter` (from menubar index)
- `/docs/interface/menubar/help` (from menubar index)
- Various reference menu links in interface docs

These are expected - documentation needs to be created for these sections.

### Version Toggle Component
- [x] `<Desktop>` and `<Lite>` components working correctly
- [ ] Test version toggle across all pages with version-specific content

---

## 📋 Future Tasks (Not Blocking Deployment)

### Documentation to Add
- [ ] 3D Plot module documentation
- [ ] Design of Experiment module (Lite-only)
- [ ] Multivariate module (Lite-only)
- [ ] Data Dictionary features
- [ ] Generate Data Report feature
- [ ] Interactive plot export
- [ ] Code panel documentation (Lite)
- [ ] Complete menubar reference documentation

### Infrastructure
- [ ] Set up new mailing list/newsletter system
- [ ] Configure analytics (if desired)
- [ ] Set up 301 redirects from old URLs if needed

---

## ✅ Completed

- [x] Docusaurus upgraded to 3.9.2
- [x] iNZight Lite URLs updated to `lite.inzight.nz`
- [x] Removed deprecated mailing list references
- [x] Updated About page with correct project leadership
- [x] Removed "End of Life" warnings from Advanced modules docs
- [x] Created Time Series module documentation (new + legacy)
- [x] Fixed `<Desktop>` and `<Lite>` component rendering
- [x] Switched to Bun for package management
- [x] Fixed TypeScript configuration issues
- [x] Fixed MDX v3 syntax issues (escaped curly braces)
