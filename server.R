shinyServer <- function(input, output, session) {
    observe({
      query <- parseQueryString(session$clientData$url_search)
      if (is.null(query[['plot']])) {
        show("inputsWindow")
        show("actual_plot")
      } else {
        show("plotWindow")
      }
    })
    
    output$plot <- renderPlot({
      plot(seq(input$num))
    })
  }
