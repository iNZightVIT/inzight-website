ui <- iNZight(gapminder)

capture("data_panel")
crop(x0 = 0, x1 = 335, y0 = 55, y1 = 505)

capture("data_selection_box")
crop(x0 = 2, x1 = 335, y0 = 55, y1 = 83)

capture("data_toolbar")
crop(x0 = 2, x1 = 150, y0 = 83, y1 = 112)

file.copy(
    system.file("images", "datasheet.gif", package = "gWidgets2"),
    "spreadsheet-icon.gif"
)
file.copy(
    system.file("images", "ed-search.gif", package = "gWidgets2"),
    "search-icon.gif"
)

capture("pagination_cols")
crop(x0 = 151, x1 = 335, y0 = 83, y1 = 112)

capture("pagination_rows", grid=T)
crop(x0 = 2, x1 = 335, y0 = 470, y1 = 502)

ui$close()