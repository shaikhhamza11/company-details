import { Link, useNavigate } from "react-router-dom"

import { FaAddressBook } from "react-icons/fa"
import { useUserContext } from "../../context/userAuth/userContext"
const Navbar = () => {
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
    <div className="navbar bg-neutral text-neutral-content justify-between ">
      <Link to="/home">
        <button className="btn btn-ghost normal-case text-2xl">
          <span>
            <FaAddressBook className="mr-2 text-2xl" />
          </span>
          Company Book
        </button>
      </Link>
      {user && (
        <button
          className="btn btn-md btn-ghost bg-red-900 text-2xl mx-auto"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default Navbar
