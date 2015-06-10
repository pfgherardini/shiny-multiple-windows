# shiny-multiple-windows

This is a shiny app that demonstrates using two separate browser windows, one with plotting controls, and the other with the actual plot. Special thanks to Dean Attali for suggesting the strategy to use.

Please refer to [this](https://groups.google.com/forum/#!topic/shiny-discuss/DNlnC3JGNBI) discussion on Google Groups.

The application requires the [shinyjs](https://github.com/daattali/shinyjs) library to be installed. Please install the latest version of shinyjs from GitHub. 

```
library(devtools)
install_github("daattali/shinyjs")
```

you can then test the app as follows

```
library(shiny)
shiny::runGitHub('shiny-multiple-windows', 'pfgherardini')
```

The aim was to make the whole thing as transparent as possible to shiny. The approach is based on storing the image in the browser local storage and adding an event listener to the plot window that watches for modifications to the local storage and loads the image data from it.

