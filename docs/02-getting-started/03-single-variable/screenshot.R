ui <- iNZight(census.at.school.500)
Sys.sleep(3)

ui$ctrlWidget$V1box$set_value("armspan")
Sys.sleep(0.5)
capture("inzight_cas_armspan")

s <- iNZight:::iNZGetSummary(ui)
focus(ui$win) <- TRUE
RGtk2::gtkWindowResize(s$win$widget, 900, 520)
Sys.sleep(1)
capture("inzight_cas_summary_armspan")
gWidgets2::dispose(s$win)

ui$getActiveDoc()$setSettings(list(plottype = "gg_violin"))
capture("inzight_cas_armspan_violin")

ui$ctrlWidget$V1box$set_value("travel")
Sys.sleep(0.5)
capture("inzight_cas_travel")

s <- iNZight:::iNZGetSummary(ui)
focus(ui$win) <- TRUE
RGtk2::gtkWindowResize(s$win$widget, 900, 520)
Sys.sleep(1)
capture("inzight_cas_summary_travel")
gWidgets2::dispose(s$win)

ui$close()