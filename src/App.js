import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  Login,
  NotFound,
  AddCompany,
  ViewCompany,
  SignUp,
} from "./pages/pagesExport"
import { Navbar } from "./components/componentExports"
function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto pb-12 px-3">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/add" element={<AddCompany />}></Route>
          <Route path="/view/:id" element={<ViewCompany />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
