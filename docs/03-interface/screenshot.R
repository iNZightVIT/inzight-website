ui <- iNZight(census.at.school.500)

capture("interface")

line_col <- "#094b85"
fill_col <- col2rgb("#18afe3", alpha = 0.2)

font_size <- 1.5
font_col <- line_col

# menu bar
add_rect(x0 = 0, x1 = 350, y0 = 33, y1 = 50,
    border_col = line_col, border_width = 4)
add_text(x0 = 355, y0 = 50 - (50 - 33) / 2,
    text = "Menu Bar", justify_x = 0,
    font_size = font_size, font_style = 2, font_col = font_col)

# data panel
add_rect(x0 = 230, x1 = 334, y0 = 57, y1 = 80,
    border_col = NA, fill_col = "white")
add_text(x = 330, y = 60, text = "Data Panel",
    justify_x = 1, justify_y = 1,
    font_size = font_size, font_style = 2, font_col = font_col)
add_rect(x = 0, x1 = 335, y0 = 55, y1 = 505,
    border_col = line_col, border_width = 4)

# control panel
add_rect(x0 = 205, x1 = 334, y0 = 512, y1 = 535,
    border_col = NA, fill_col = "white")
add_text(x = 330, y = 515, text = "Control Panel",
    justify_x = 1, justify_y = 1,
    font_size = font_size, font_style = 2, font_col = font_col)
add_rect(x = 0, x1 = 335, y0 = 510, y1 = 670,
    border_col = line_col, border_width = 4)

# plot toolbar
add_rect(x0 = 340, x1 = 460, y0 = 595, y1 = 618,
    border_col = NA, fill_col = "white")
add_text(x = 345, y = 615, text = "Plot Toolbar",
    justify_x = 0, justify_y = 0,
    font_size = font_size, font_style = 2, font_col = font_col)
add_rect(x0 = 340, x1 = 1040, y0 = 620, y1 = 670,
    border_col = line_col, border_width = 4)

ui$close()