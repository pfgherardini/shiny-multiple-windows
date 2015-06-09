library(shinyjs)

shinyUI(
	fluidPage(
    tags$head(tags$script(src = "window_communication.js")),
    useShinyjs(),
    
    hidden(
      div(
        id = "inputsWindow",
        numericInput("num", "Number", 10),
        tags$a("Open plot window", href = "?plot=true", target = "_blank")
      )),
      hidden(
        div(
          id = "actual_plot",
        plotOutput("plot")
        )
       ),
      hidden(
        div(
        id = "plotWindow"
      )
    )
  )
)
  

