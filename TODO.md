# TODO

Remaining tasks and items to review for the iNZight website.

---

## Content Review

- [ ] **Time Series (new)** - AI-generated documentation needs review against actual software UI

---

## Infrastructure Tasks

- [ ] **Set up new mailing list/newsletter system** - The old mailing lists (iNZight-General, iNZight-School, iNZight-Online) are deprecated. Consider setting up a new mailing list or newsletter system for announcements.
- [ ] **Configure analytics** - Set up analytics tracking (if desired)
- [x] **Set up 301 redirects from old URLs** - All redirects configured in docusaurus.config.mjs (query parameters handled automatically)

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
- [x] **Scatter Plot** - Documentation completed
- [x] **Histogram** - Documentation completed
- [x] **Dot Plot** - Documentation completed
- [x] **Grid Density Plot** - Documentation completed
- [x] **Hexagonal Binning Plot** - Documentation completed

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
- [ ] **Graphics documentation gaps** - Add to Plot features are minimally documented or missing
  - ~~Graph types (scatter, histogram, dot, grid, hex) - all completed~~
  - Add to Plot sections (Trend Lines, Axes/Labels, Identify Points) - need documentation
  - Plot features (Colour, Shape, Size) - need full content
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

## Screenshots Needed

### Graphics Documentation
- [ ] **Scatter Plot**: Basic scatter plot example (two numeric variables)
- [ ] **Scatter Plot**: Scatter plot with trend line
- [ ] **Scatter Plot**: Scatter plot with colour coding
- [ ] **Histogram**: Basic histogram
- [ ] **Histogram**: Histogram with different bin widths
- [ ] **Dot Plot**: Basic dot plot (single numeric variable, showing stacked dots with box plot)
- [ ] **Dot Plot**: Dot plot with categorical Variable 2 (grouped comparison)
- [ ] **Dot Plot**: Dot plot with mean indicator (inference for mean)
- [ ] **Grid Density Plot**: Basic grid density plot (two numeric variables, showing shaded squares)
- [ ] **Grid Density Plot**: Grid density plot with different grid resolution
- [ ] **Hexagonal Binning Plot**: Hex plot with "size" style (default)
- [ ] **Hexagonal Binning Plot**: Hex plot with "alpha" style
- [ ] **Hexagonal Binning Plot**: Hex plot with colour-by variable (hextri segments)
- [ ] **Colour**: Discrete colour coding example
- [ ] **Colour**: Continuous colour coding example
- [ ] **Shape**: Different point shapes example
- [ ] **Size**: Points sized by variable example
- [ ] **Trend Lines and Curves**: Linear regression line
- [ ] **Trend Lines and Curves**: Smoothing curve (loess)
- [ ] **Trend Lines and Curves**: Join points by line
- [ ] **Trend Lines and Curves**: x=y line
- [ ] **Axes and Labels**: Log transformation applied
- [ ] **Axes and Labels**: Custom axis limits
- [ ] **Axes and Labels**: Custom title and labels
- [ ] **Identify Points**: Labeled points example
- [ ] **Identify Points**: Points selected by brushing
- [ ] **Plot Appearance**: Jitter applied
- [ ] **Plot Appearance**: Rugs on axes
- [ ] **Plot Appearance**: Transparency adjustment
- [ ] **Inference**: Inference on scatter plot
- [ ] **Inference**: Inference on bar chart

### Dataset Menu Features
- [ ] **Data Dictionary**: Load data dictionary dialog
- [ ] **Data Dictionary**: View data dictionary
- [ ] **Data Dictionary**: Apply labels from dictionary
- [ ] **Generate Data Report**: Report generation dialog
- [ ] **Generate Data Report**: Example report output
- [ ] **Reorder and Select Variables**: Variable reordering interface

### Variables Menu Features
- [ ] **Convert to Categorical (multiple)**: Batch conversion dialog

---

## Notes

- iNZight Desktop version: 4.4.2
- iNZightModules version: 2.6.0
- Lite2 has additional panels not in Desktop
- Some features require additional R packages (rgl, dataMaid, etc.)
