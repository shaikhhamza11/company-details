import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import {
  Home,
  Login,
  NotFound,
  AddCompany,
  ViewCompany,
  SignUp,
  EditCompany,
} from "../pages/pagesExport"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddCompany />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/view/:id"
        element={
          <ProtectedRoute>
            <ViewCompany />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditCompany />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router
