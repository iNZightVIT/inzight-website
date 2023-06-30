ui <- iNZight()
Sys.sleep(3)

capture("control-panel")
crop(
    x1 = 340,
    y0 = 500
)

ui$close()
