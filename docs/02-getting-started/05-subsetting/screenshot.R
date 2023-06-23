ui <- iNZight(census.at.school.500)
Sys.sleep(3)

ui$ctrlWidget$V1box$set_value("gender")
ui$ctrlWidget$G1box$set_value("travel")
Sys.sleep(0.5)
capture("inzight_cas_gender_subset_travel")

ui$ctrlWidget$V1box$set_value("cellsource")
ui$ctrlWidget$V2box$set_value("gender")
ui$ctrlWidget$G1box$set_value("age")
Sys.sleep(0.5)
capture("inzight_cas_cellsource_gender_subset_age")

ui$ctrlWidget$V1box$set_value("height")
ui$ctrlWidget$V2box$set_value("armspan")
ui$ctrlWidget$G1box$set_value("age")
ui$ctrlWidget$G2box$set_value("gender")
Sys.sleep(0.5)
capture("inzight_cas_height_armspan_subset_age_gender")

ui$ctrlWidget$ctrlGp$children[[1]][8, 1]$set_index(2L)
Sys.sleep(0.5)
capture("inzight_cas_height_armspan_subset_age_gender-female")

ui$close()
