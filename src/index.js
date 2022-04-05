import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Rank from "./components/Rank"
import "./index.css"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":rankId" element={<Rank />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
