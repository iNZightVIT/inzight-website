# Missing Documentation - Feature Audit

This document lists features in iNZight Desktop and Lite that are not yet documented on the new website.

---

## TODO: Future Tasks

- [ ] **Set up a mailing list** - The old mailing lists (iNZight-General, iNZight-School, iNZight-Online) are deprecated. Consider setting up a new mailing list or newsletter system for announcements.

---

## Advanced Modules Documentation

### ✅ Completed Module Documentation

The following modules now have documentation in `/docs/reference/modules/`:

1. **Time Series Module** (new tidyverts version) - `/docs/reference/modules/time-series`
2. **Time Series Module (Legacy)** - `/docs/reference/modules/time-series-legacy`
3. **Model Fitting Module** - `/docs/reference/modules/model-fitting`
4. **Multiple Response Module** - `/docs/reference/modules/multiple-response`
5. **Quick Explore** - `/docs/reference/modules/quick-explore`
6. **3D Plot** (Desktop only) - `/docs/reference/modules/3d-plot`
7. **Design of Experiment** (Lite only) - `/docs/reference/modules/design-of-experiment`
8. **Multivariate** (Lite only) - `/docs/reference/modules/multivariate`

### ❌ All modules now documented!

All major analysis modules have documentation.

---

## Dataset Menu - Undocumented Features

### Data Dictionary
- Load data dictionary
- View data dictionary
- Apply labels from dictionary

### Generate Data Report
- Automated data quality report
- Uses dataMaid package
- PDF/HTML output

### Reorder and Select Variables
- Change column order
- Select subset of variables

---

## Variables Menu - Partially Documented

### Convert to Categorical (multiple)
- Batch conversion of numeric → categorical
- Currently only single variable documented

---

## Plot Features - Undocumented

### Interactive Plots
- Export to interactive HTML (plotly)
- Interactive features in Add to Plot

### FT (Financial Times) Graphics
- FT-style chart formatting
- Export options

---

## Lite-Specific Features

### Code Panel (`G1_Code`)
- View generated R code
- Copy/export code
- (Not currently documented - low priority)

### Paste Dataset (`B6_PasteDataset`)
- Paste data directly from clipboard
- CSV/TSV detection

### Add Columns (`E6_AddColumns`)
- Add new empty columns
- Different from "Create Variable"

### Remove Columns (`E8_RemoveColumns`)
- Bulk column removal

### Alphabetise Variables (`D7_AlphabetiseVariables`)
- Sort columns alphabetically

---

## Infrastructure/Reference - Missing

### Transition Guide for 4.2
- `/docs/transition-to-4.2/` is referenced but may be incomplete
- Old site had this at `/docs/transition-to-4.2`

### R User Documentation
- How to use iNZight packages programmatically
- API reference for iNZightPlots, iNZightTools, etc.

---

## Priority Order for Documentation

### P1 - Critical (blocks deployment, referenced but missing)
- [x] ~~Advanced modules documentation section~~ - Completed
- [x] ~~Time Series module documentation~~ - Completed (new + legacy)
- [x] ~~Model Fitting module documentation~~ - Completed
- [ ] ~~Maps module~~ - Removed (not currently functional)

### P2 - Important (frequently used features)
- [x] ~~Quick Explore features~~ - Completed
- [x] ~~Multiple Response module~~ - Completed
- [ ] Code panel (Lite) - Low priority
- [ ] Data Dictionary feature
- [ ] Menubar reference documentation (Plot, Dataset, Variables, etc.)

### P3 - Nice to have
- [x] ~~3D Plot module~~ - Completed
- [x] ~~Design of Experiment (Lite)~~ - Completed
- [x] ~~Multivariate (Lite)~~ - Completed
- [ ] Generate Data Report
- [ ] Interactive plot export
- [ ] FT Graphics

---

## Notes

- iNZight Desktop version: 4.4.2
- iNZightModules version: 2.6.0
- Lite2 has additional panels not in Desktop
- Some features require additional R packages (rgl, dataMaid, etc.)
