import { Navigate } from "react-router-dom"
import { useUserContext } from "../context/userAuth/userContext"
const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext()
  if (!user) {
    return <Navigate to="/" />
  }
  return children
}
export default ProtectedRoute
