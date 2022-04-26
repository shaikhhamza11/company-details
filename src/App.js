import { BrowserRouter } from "react-router-dom"

import { Navbar } from "./components/componentExports"
import Router from "./routes/routes"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mx-auto pb-12 px-3">
        <Router />
      </main>
    </BrowserRouter>
  )
}

export default App
