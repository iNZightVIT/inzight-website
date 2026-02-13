#!/usr/bin/env Rscript
#
# Generate documentation screenshots for iNZight website
#
# Usage:
#   Rscript scripts/generate-screenshots.R
#
# Outputs PNG files to docs/05-graphics/screenshots/
# These can then be referenced in documentation pages.
#
# Datasets used:
#   - census.at.school.500 (FutureLearnData) <U+2014> small dataset (500 rows)
#   - gapminder (FutureLearnData) <U+2014> larger dataset (3577 rows)
#

library(iNZightPlots)
library(FutureLearnData)

data(census.at.school.500)
data(gapminder)

cas <- census.at.school.500

# Output directory
out_dir <- file.path("docs", "05-graphics", "screenshots")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

# Helper: save a plot to PNG
save_plot <- function(filename, expr, width = 600, height = 480) {
    path <- file.path(out_dir, filename)
    png(path, width = width, height = height, res = 96)
    eval(expr)
    dev.off()
    cat(sprintf("  <U+2713> %s\n", filename))
}

cat("Generating screenshots...\n\n")

# =============================================================================
# GRAPH TYPES
# =============================================================================

cat("--- Graph Types ---\n")

# -- Dot Plot --
save_plot("dot-basic.png", quote(
    inzplot(~height, data = cas)
))

save_plot("dot-grouped.png", quote(
    inzplot(height ~ gender, data = cas)
))

save_plot("dot-mean-inference.png", quote(
    inzplot(height ~ gender,
        data = cas,
        inference.type = c("conf", "comp"),
        inference.par = "mean"
    )
))

# -- Histogram --
save_plot("hist-basic.png", quote(
    inzplot(~height, data = cas, plottype = "hist")
))

# -- Scatter Plot --
save_plot("scatter-basic.png", quote(
    inzplot(height ~ armspan, data = cas)
))

save_plot("scatter-trend.png", quote(
    inzplot(height ~ armspan, data = cas, trend = "linear")
))

save_plot("scatter-colour.png", quote(
    inzplot(height ~ armspan, data = cas, colby = gender)
))

# -- Bar Chart --
save_plot("bar-oneway.png", quote(
    inzplot(~travel, data = cas)
))

save_plot("bar-twoway.png", quote(
    inzplot(travel ~ gender, data = cas)
))

save_plot("bar-segmented.png", quote(
    inzplot(~travel, data = cas, colby = gender)
))

save_plot("bar-counts.png", quote(
    inzplot(~travel, data = cas, bar.counts = TRUE)
))

save_plot("bar-inference.png", quote(
    inzplot(~travel,
        data = cas,
        inference.type = c("conf"),
        inference.par = "proportion"
    )
))

# -- Grid Density Plot --
save_plot("grid-basic.png", quote(
    inzplot(height ~ armspan, data = cas, plottype = "grid")
))

# -- Hexagonal Binning Plot --
save_plot("hex-size.png", quote(
    inzplot(height ~ armspan,
        data = cas, plottype = "hex",
        hex.style = "size"
    )
))

save_plot("hex-alpha.png", quote(
    inzplot(height ~ armspan,
        data = cas, plottype = "hex",
        hex.style = "alpha"
    )
))

save_plot("hex-colour.png", quote(
    inzplot(height ~ armspan,
        data = cas, plottype = "hex",
        colby = gender
    )
))


# =============================================================================
# PLOT FEATURES
# =============================================================================

cat("\n--- Plot Features ---\n")

# -- Colour --
save_plot("colour-discrete.png", quote(
    inzplot(height ~ armspan, data = cas, colby = travel)
))

save_plot("colour-continuous.png", quote(
    inzplot(height ~ armspan, data = cas, colby = age)
))

# -- Shape --
save_plot("shape.png", quote(
    inzplot(height ~ armspan, data = cas, symbolby = gender)
))

# -- Size --
save_plot("size.png", quote(
    inzplot(height ~ armspan, data = cas, sizeby = rightfoot)
))


# =============================================================================
# ADD TO PLOT FEATURES
# =============================================================================

cat("\n--- Add to Plot Features ---\n")

# -- Trend Lines --
save_plot("trend-linear.png", quote(
    inzplot(height ~ armspan, data = cas, trend = "linear")
))

save_plot("trend-smooth.png", quote(
    inzplot(height ~ armspan, data = cas, smooth = 0.7)
))

save_plot("trend-loe.png", quote(
    inzplot(height ~ armspan, data = cas, LOE = TRUE)
))

save_plot("trend-join.png", quote({
    nz <- gapminder[gapminder$Country == "New Zealand", ]
    inzplot(Infantmortality ~ Year, data = nz, join = TRUE, lines.by = FALSE)
}))

# -- Axes and Labels --
# (Log transformations require iNZightTools transform; skip for now)

# -- Plot Appearance --
save_plot("appearance-jitter.png", quote(
    inzplot(height ~ armspan, data = cas, jitter = "xy")
))

save_plot("appearance-rugs.png", quote(
    inzplot(height ~ armspan, data = cas, rugs = "xy")
))

save_plot("appearance-alpha.png", quote(
    inzplot(height ~ armspan, data = cas, alpha = 0.3)
))

# =============================================================================
# INFERENCE
# =============================================================================

cat("\n--- Inference ---\n")

save_plot("inference-dotplot-mean.png", quote(
    inzplot(height ~ gender,
        data = cas,
        inference.type = c("conf", "comp"),
        inference.par = "mean"
    )
))

save_plot("inference-dotplot-median.png", quote(
    inzplot(height ~ gender,
        data = cas,
        inference.type = c("conf"),
        inference.par = "median"
    )
))

save_plot("inference-scatter.png", quote(
    inzplot(height ~ armspan,
        data = cas,
        trend = "linear",
        inference.type = c("conf")
    )
))

save_plot("inference-bar.png", quote(
    inzplot(travel ~ gender,
        data = cas,
        inference.type = c("conf"),
        inference.par = "proportion"
    )
))

cat("\nDone! Screenshots saved to:", out_dir, "\n")
