ui <- iNZight(census.at.school.500)
Sys.sleep(3)

capture("inzight_cas")

ui$ctrlWidget$V1box$set_value("travel")
Sys.sleep(0.5)
capture("inzight_cas_travel")

ui$ctrlWidget$V1box$set_value("height")
Sys.sleep(0.5)
capture("inzight_cas_height")

ui$close()