# Run using the R in the iNZight folder, otherwise the graphics don't
# work correctly.

args <- commandArgs(trailingOnly = TRUE)
dir <- if (length(args)) args[1] else "docs"

inzight_dir <- file.path("~", "iNZightVIT")
if (!is.null(inzight_dir) && dir.exists(inzight_dir)) {
    .libPaths(file.path(inzight_dir, "library"), include.site = FALSE)
} else if (dir.exists(file.path("~", "iNZightVIT-dev", "library"))) {
    .libPaths(file.path("~", "iNZightVIT-dev", "library"),
        include.site = FALSE)
} else {
    .libPaths(file.path("~", "iNZightVIT", "library"),
        include.site = FALSE)
}

if (!requireNamespace("screenshot", quietly = TRUE))
    remotes::install_github("iNZightVIT/screenshot")
library(screenshot)
library(iNZight)
ui <- iNZight()
old_prefs <- ui$preferences

ui$preferences$popout <- FALSE
ui$preferences$dev.features <- FALSE
ui$preferences$window.size <- c(1040, 640)
ui$savePreferences()
ui$close()

options("screenshot.add.grid" = TRUE) # set to FALSE when finished

crawl(dir)

ui$preferences <- old_prefs
ui$savePreferences()
