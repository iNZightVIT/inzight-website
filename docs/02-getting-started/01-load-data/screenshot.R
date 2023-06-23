ui <- iNZight()
Sys.sleep(3)


w <- iNZight:::iNZImportWin$new(ui)
capture("load_data")

w$close()
w <- iNZight:::iNZImportExampleWin$new(ui)
w$dsData$set_value("census.at.school.500")
capture("example_data")


ui$close()