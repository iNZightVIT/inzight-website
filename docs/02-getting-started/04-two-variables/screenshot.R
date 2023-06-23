ui <- iNZight(census.at.school.500)
Sys.sleep(3)

ui$ctrlWidget$V1box$set_value("travel")
ui$ctrlWidget$V2box$set_value("gender")
Sys.sleep(0.5)
capture("inzight_cas_travel_gender")

ui$ctrlWidget$V2box$set_index(1)
ui$ctrlWidget$V1box$set_value("gender")
ui$ctrlWidget$V2box$set_value("travel")
Sys.sleep(0.5)
capture("inzight_cas_gender_travel")

s <- iNZight:::iNZGetSummary(ui)
focus(ui$win) <- TRUE
RGtk2::gtkWindowResize(s$win$widget, 900, 520)
Sys.sleep(1)
capture("inzight_cas_summary_travel_gender")
gWidgets2::dispose(s$win)

ui$ctrlWidget$V1box$set_value("height")
Sys.sleep(0.5)
capture("inzight_cas_height_gender")

s <- iNZight:::iNZGetSummary(ui)
focus(ui$win) <- TRUE
RGtk2::gtkWindowResize(s$win$widget, 900, 520)
Sys.sleep(1)
capture("inzight_cas_summary_height_gender")
gWidgets2::dispose(s$win)

ui$ctrlWidget$V2box$set_value("armspan")
Sys.sleep(0.5)
capture("inzight_cas_height_armspan")

s <- iNZight:::iNZGetSummary(ui)
focus(ui$win) <- TRUE
RGtk2::gtkWindowResize(s$win$widget, 900, 520)
Sys.sleep(1)
capture("inzight_cas_summary_height_armspan")
gWidgets2::dispose(s$win)

ui$close()