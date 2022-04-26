import React from "react"
import { useUserContext } from "../../context/userAuth/userContext"
import { useNavigate } from "react-router-dom"
const Logout = () => {
  const { user, logOut } = useUserContext()
  let navigate = useNavigate()
  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <button
      className="btn btn-small md:btn-lg bg-red-900 hover:bg-red-700 my-8 relative left-3/4"
      onClick={handleLogOut}
    >
      Logout
    </button>
  )
}

export default Logout
