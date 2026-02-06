# Review Checklist

Items that need user review before the website can be deployed.

---

## ⚠️ High Priority - Needs Verification

### Maps Module Status
- [x] ~~Maps module removed~~ - Not currently functional on Desktop or Lite. Documentation removed.

### URLs and External Links
- [x] **R package repository URL** - Confirmed correct: `https://r.docker.stat.auckland.ac.nz`
- [x] **Sponsor logos** - Updated to use local images in `/static/img/`

---

## 📝 Content Review

### New Module Documentation
Review these newly created module docs for accuracy:
- [ ] `/docs/reference/modules/model-fitting` - Model Fitting module
- [ ] `/docs/reference/modules/multiple-response` - Multiple Response module
- [ ] `/docs/reference/modules/quick-explore` - Quick Explore module
- [ ] `/docs/reference/modules/time-series` - Time Series module (new/tidyverts)
- [ ] `/docs/reference/modules/time-series-legacy` - Time Series Legacy module
- [ ] `/docs/reference/modules/3d-plot` - 3D Plot module (Desktop only)
- [ ] `/docs/reference/modules/design-of-experiment` - Design of Experiment (Lite only)
- [ ] `/docs/reference/modules/multivariate` - Multivariate (Lite only)

### Support/FAQ
- [x] ~~Code Panel~~ - Removed (not needed in FAQ)

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
- [x] ~~3D Plot module documentation~~ - Completed
- [x] ~~Design of Experiment module (Lite-only)~~ - Completed
- [x] ~~Multivariate module (Lite-only)~~ - Completed
- [x] ~~Code panel documentation (Lite)~~ - Completed
- [ ] Data Dictionary features
- [ ] Generate Data Report feature
- [ ] Interactive plot export
- [ ] FT Graphics features
- [ ] Complete menubar reference documentation

### Infrastructure
- [ ] Set up new mailing list/newsletter system
- [ ] Configure analytics (if desired)
- [ ] Set up 301 redirects from old URLs if needed - yes, from "/user_guides/addons/?topic=mod_X" to "/docs/reference/modules/mod-X"

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
