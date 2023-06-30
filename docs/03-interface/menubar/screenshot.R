ui <- iNZight(census.at.school.500)

capture("menubar")
crop(x0 = 0, x1 = 350, y0 = 33, y1 = 50)

## File Menu
file_menu <- RGtk2::gtkContainerGetChildren(
    ui$menuBarWidget$menubar$widget
)[[1]]

RGtk2::gtkMenuItemSelect(file_menu)
capture("file_menu")
crop(x0 = 3, x1 = 150, y0 = 30, y1 = 250)

# clip_menu <- RGtk2::gtkContainerGetChildren(
#     RGtk2::gtkMenuItemGetSubmenu(file_menu)
# )[[4]]
# RGtk2::gtkMenuItemSelect(clip_menu)
# capture("file_clipboard_menu")
# crop(x0 = 3, x1 = 135, y0 = 123, y1 = 172)

# RGtk2::gtkMenuItemDeselect(clip_menu)
RGtk2::gtkMenuItemDeselect(file_menu)

## Dataset Menu
data_menu <- RGtk2::gtkContainerGetChildren(
    ui$menuBarWidget$menubar$widget
)[[2]]

RGtk2::gtkMenuItemSelect(data_menu)
capture("dataset_menu")
crop(x0 = 40, x1 = 250, y0 = 30, y1 = 410)

# dataop_menu <- RGtk2::gtkContainerGetChildren(
#     RGtk2::gtkMenuItemGetSubmenu(data_menu)
# )[[5]]
# RGtk2::gtkMenuItemSelect(dataop_menu)
# capture("dataset_operations_menu", grid = TRUE)
# crop(x0 = 40, x1 = 195, y0 = 160, y1 = 230)

# RGtk2::gtkMenuItemDeselect(clip_menu)
RGtk2::gtkMenuItemDeselect(data_menu)


## Variable Menu
var_menu <- RGtk2::gtkContainerGetChildren(
    ui$menuBarWidget$menubar$widget
)[[3]]

RGtk2::gtkMenuItemSelect(var_menu)
capture("variables_menu")
crop(x0 = 90, x1 = 273, y0 = 30, y1 = 223)

RGtk2::gtkMenuItemDeselect(var_menu)


## Plot Menu
plot_menu <- RGtk2::gtkContainerGetChildren(
    ui$menuBarWidget$menubar$widget
)[[4]]

RGtk2::gtkMenuItemSelect(plot_menu)
capture("plot_menu")
crop(x0 = 150, x1 = 310, y0 = 30, y1 = 255)

RGtk2::gtkMenuItemDeselect(plot_menu)


## Help Menu
help_menu <- RGtk2::gtkContainerGetChildren(
    ui$menuBarWidget$menubar$widget
)[[7]]

RGtk2::gtkMenuItemSelect(help_menu)
capture("help_menu")
crop(x0 = 310, x1 = 522, y0 = 30, y1 = 178)

RGtk2::gtkMenuItemDeselect(help_menu)


ui$close()