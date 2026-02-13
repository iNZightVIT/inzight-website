# TODO

Remaining tasks and items to review for the iNZight website.

---

## Content Review

- [ ] **Time Series (new)** - AI-generated documentation needs review against actual software UI

### Graphics Documentation Review — Resolved

All 13 review questions have been addressed:

1. ~~Histogram frequency/density toggle~~ — Removed (no such feature)
2. ~~Dot plot box whiskers~~ — Confirmed: min/max is correct
3. ~~Colour palette level threshold~~ — Fixed: removed specific number
4. ~~Bar chart conditioning direction~~ — Confirmed: same colour = Variable 2
5. ~~Scatter Spearman's default~~ — Correct; survey uses Pearson (noted for survey docs)
6. ~~Median inference bootstrap-only~~ — Confirmed
7. ~~Join points~~ — Works in GUI; generated screenshot with time-series data; R API has minor bug when `lines.by=TRUE` without `colby`
8. ~~Identify points methods~~ — Updated from old website docs; Desktop features wrapped in `<Desktop>`
9. ~~Histogram bin control~~ — Fixed: clarified it's the Point size slider (inverse relationship)
10. ~~Quantile smoother cutoffs~~ — Added specific thresholds (200, 1000)
11. ~~Grid density shading~~ — Confirmed quantile-based from code (`inzgridplot.R:45-53`)
12. ~~Colour emphasis~~ — Updated: cycling through levels/quantiles
13. ~~Point fill default~~ — Confirmed correct

---

## Infrastructure Tasks

- [ ] **Set up new mailing list/newsletter system** - The old mailing lists (iNZight-General, iNZight-School, iNZight-Online) are deprecated. Consider setting up a new mailing list or newsletter system for announcements.
- [ ] **Configure analytics** - Set up analytics tracking (if desired)

---

## Documentation - Missing Features

### Dataset Menu - ~~Undocumented Features~~ Done

- [x] **Data Dictionary** — `/docs/reference/data/data-dictionary`
- [x] **Generate Data Report** — `/docs/reference/data/generate-report`
- [x] **Reorder and Select Variables** — `/docs/reference/data/reorder-select`

### Variables Menu - Partially Documented

- [x] **Convert to Categorical (multiple)**
  - Batch conversion of numeric → categorical
  - Currently only single variable documented

### Plot Features - Undocumented

- [x] **Interactive Plots**
  - Export to interactive HTML (plotly)
  - Interactive features in Add to Plot

- [x] **FT (Financial Times) Graphics**
  - FT-style chart formatting
  - Export options

### Lite-Specific Features

- [ ] **Code Panel (`G1_Code`)** - Low priority
  - View generated R code
  - Copy/export code

- [ ] **Paste Dataset (`B6_PasteDataset`)**
  - Paste data directly from clipboard
  - CSV/TSV detection

- [ ] **Add Columns (`E6_AddColumns`)**
  - Add new empty columns
  - Different from "Create Variable"

- [ ] **Remove Columns (`E8_RemoveColumns`)**
  - Bulk column removal

- [ ] **Alphabetise Variables (`D7_AlphabetiseVariables`)**
  - Sort columns alphabetically

### Infrastructure/Reference - Missing

- [ ] **Transition Guide for 4.2**
  - `/docs/transition-to-4.2/` is referenced but may be incomplete
  - Old site had this at `/docs/transition-to-4.2`

- [ ] **R User Documentation**
  - How to use iNZight packages programmatically
  - API reference for iNZightPlots, iNZightTools, etc.

- [ ] **Menubar reference documentation**
  - Plot, Dataset, Variables, etc.

---

## Priority Order

### P2 - Important (frequently used features)
- [x] Data Dictionary feature
- [x] Menubar reference documentation (Plot, Dataset, Variables, etc.)

### P3 - Nice to have
- [ ] Code panel (Lite) - Low priority
- [ ] Generate Data Report
- [x] Interactive plot export
- [x] FT Graphics
- [ ] Other Lite-specific features (Paste Dataset, Add/Remove Columns, Alphabetise Variables)
- [x] Convert to Categorical (multiple)
- [ ] Reorder and Select Variables
- [ ] Transition Guide for 4.2
- [ ] R User Documentation

---

## Screenshots Needed

### Graphics Documentation
- [ ] **Axes and Labels**: Log transformation applied
- [ ] **Axes and Labels**: Custom axis limits
- [ ] **Axes and Labels**: Custom title and labels
- [ ] **Identify Points**: Labeled points example

### Dataset Menu Features
- [x] ~~Data Dictionary~~
- [x] ~~Generate Data Report~~
- [x] ~~Reorder and Select Variables~~

### Variables Menu Features
- [ ] **Convert to Categorical (multiple)**: Batch conversion dialog

---

## Notes

- iNZight Desktop version: 4.4.2
- iNZightModules version: 2.6.0
- Lite2 has additional panels not in Desktop
- Some features require additional R packages (rgl, dataMaid, etc.)
