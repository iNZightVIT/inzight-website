# TODO

Remaining tasks and items to review for the iNZight website.

---

## Content Review

- [ ] **Time Series (new)** - AI-generated documentation needs review against actual software UI

---

## Infrastructure Tasks

- [ ] **Set up new mailing list/newsletter system** - The old mailing lists (iNZight-General, iNZight-School, iNZight-Online) are deprecated. Consider setting up a new mailing list or newsletter system for announcements.
- [ ] **Configure analytics** - Set up analytics tracking (if desired)
- [ ] **Set up 301 redirects from old URLs**:
  - `/user_guides/addons/?topic=mod_X` → `/docs/reference/modules/mod-X`

---

## Documentation - Missing Features

### Dataset Menu - Undocumented Features

- [ ] **Data Dictionary**
  - Load data dictionary
  - View data dictionary
  - Apply labels from dictionary

- [ ] **Generate Data Report**
  - Automated data quality report
  - Uses dataMaid package
  - PDF/HTML output

- [ ] **Reorder and Select Variables**
  - Change column order
  - Select subset of variables

### Variables Menu - Partially Documented

- [ ] **Convert to Categorical (multiple)**
  - Batch conversion of numeric → categorical
  - Currently only single variable documented

### Graphics Documentation - Partially Documented

#### Graph Types (Minimal Content)
- [ ] **Scatter Plot** - Currently only has title/description, needs full documentation
- [ ] **Histogram** - Currently only has title/description, needs full documentation
- [ ] **Dot Plot** - Currently only has title/description, needs full documentation
- [ ] **Grid Density Plot** - Currently only has title/description, needs full documentation
- [ ] **Hexagonal Binning Plot** - Currently only has title/description, needs full documentation

#### Plot Features (Incomplete)
- [ ] **Colour** - Documentation incomplete (only has discrete/continuous headers, no content)
- [ ] **Shape** - Very minimal (one sentence)
- [ ] **Size** - Very minimal (one sentence)

#### Add to Plot Panel - Undocumented Sections
- [ ] **Trend Lines and Curves** - Mentioned but not documented
  - Linear regression lines
  - Smoothing curves (loess, quantile regression)
  - Join points by line
  - Add x=y line
  - Available for scatter/hexbin/grid-density plots

- [ ] **Axes and Labels** - Mentioned but not documented
  - Log transformations
  - Axis limits and scaling
  - Label customization
  - Title and subtitle options

- [ ] **Identify Points** - Not documented at all
  - Label points by variable or row ID
  - Color points
  - Selection methods (by value, by clicking, by brushing)
  - Merge labeled points

- [ ] **Customise Plot Appearance - Additional Features** - Partially documented
  - Plot type override (switch between scatter/grid/hex)
  - Jitter (for x and/or y axis)
  - Rugs (distribution along axes)
  - Transparency/alpha adjustment
  - Point fill options
  - Background color options
  - General appearance settings

#### Inference Information (Incomplete)
- [ ] **Inference** - Only has brief intro and dot plot/histogram section
  - Inference for other plot types (bar charts, scatter plots, etc.)
  - Confidence intervals
  - Hypothesis tests
  - Complete documentation of inference options

### Plot Features - Undocumented

- [ ] **Interactive Plots**
  - Export to interactive HTML (plotly)
  - Interactive features in Add to Plot

- [ ] **FT (Financial Times) Graphics**
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
- [ ] **Graphics documentation gaps** - Many graph types and Add to Plot features are minimally documented or missing
  - Graph types (scatter, histogram, dot, grid, hex) - need full content
  - Add to Plot sections (Trend Lines, Axes/Labels, Identify Points) - need documentation
  - Plot appearance features (jitter, rugs, transparency, etc.) - need documentation
- [ ] Data Dictionary feature
- [ ] Menubar reference documentation (Plot, Dataset, Variables, etc.)

### P3 - Nice to have
- [ ] Code panel (Lite) - Low priority
- [ ] Generate Data Report
- [ ] Interactive plot export
- [ ] FT Graphics
- [ ] Other Lite-specific features (Paste Dataset, Add/Remove Columns, Alphabetise Variables)
- [ ] Convert to Categorical (multiple)
- [ ] Reorder and Select Variables
- [ ] Transition Guide for 4.2
- [ ] R User Documentation

---

## Notes

- iNZight Desktop version: 4.4.2
- iNZightModules version: 2.6.0
- Lite2 has additional panels not in Desktop
- Some features require additional R packages (rgl, dataMaid, etc.)
