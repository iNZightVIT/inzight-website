---
title: R package
weight: 10
---

Installing iNZight on R requires first setting up the necessary package repository, and ensuring you have the necessary dependencies if on Linux (see [above](#linux-installer)).

To add the repository and install the packages, use the following in R:
```r
options(
    repos = c(
        "https://r.docker.stat.auckland.ac.nz",
        "https://cran.rstudio.com"
    )
)

install.packages(c("iNZight", "iNZightModules"), dependencies = TRUE)
```

To run iNZight:
```r
library(iNZight)
iNZight()
```

To run VIT:
```r
library(vit)
iNZightVIT()
```