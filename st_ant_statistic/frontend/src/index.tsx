
import React from "react"
import ReactDOM from "react-dom"
import StatisticComponent from "./AntStatistic"

// Lots of import to define a Styletron engine and load the light theme of baseui


// Wrap your CustomSlider with the baseui them
ReactDOM.render(
  <React.StrictMode>
    <StatisticComponent />
  </React.StrictMode>,
  document.getElementById("root")
)