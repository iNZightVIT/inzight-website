# Missing Documentation - Feature Audit

This document lists features in iNZight Desktop and Lite that are not yet documented on the new website.

---

## TODO: Future Tasks

- [ ] **Set up a mailing list** - The old mailing lists (iNZight-General, iNZight-School, iNZight-Online) are deprecated. Consider setting up a new mailing list or newsletter system for announcements.

---

## Critical Missing Section: Add-on Modules (`/docs/add-ons`)

The menubar documentation references `/docs/add-ons` but this section **does not exist**. This needs to cover:

### Desktop Advanced Modules (iNZightModules package)

1. **Quick Explore**
   - Missing values explorer
   - All 1-variable plots
   - All 1-variable summaries
   - Explore 2-variable plots
   - Pairs (scatter matrix)

2. **3D Plot** (`plot3D`)
   - Interactive 3D scatter plots
   - Requires rgl package

3. **Time Series Module** (legacy version)
   - Time series decomposition
   - Seasonal plots
   - Forecasting

4. **Model Fitting Module**
   - Linear regression
   - Generalized linear models
   - Model diagnostics
   - Residual plots

5. **Multiple Response Module**
   - Multiple response data analysis
   - Binary multiple response
   - Comparison plots

6. **Maps Module**
   - Coordinate maps (point data)
   - Regional/choropleth maps
   - Shape file import

### Lite-Only Modules

1. **Design of Experiment** (`F5_DesignofExperiment`)
   - Experimental design tools

2. **Multivariate** (`F7_Multivariate`)
   - Principal component analysis
   - Clustering

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
- [ ] `/docs/add-ons` section with all modules
- [ ] Time Series module documentation
- [ ] Model Fitting module documentation
- [ ] Maps module documentation

### P2 - Important (frequently used features)
- [ ] Quick Explore features
- [ ] Multiple Response module
- [ ] Code panel (Lite)
- [ ] Data Dictionary feature

### P3 - Nice to have
- [ ] 3D Plot module
- [ ] Design of Experiment (Lite)
- [ ] Multivariate (Lite)
- [ ] Generate Data Report
- [ ] Interactive plot export

---

## Notes

- iNZight Desktop version: 4.4.2
- iNZightModules version: 2.6.0
- Lite2 has additional panels not in Desktop
- Some features require additional R packages (rgl, dataMaid, etc.)
