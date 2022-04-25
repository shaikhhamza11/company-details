import { Link } from "react-router-dom"

import { FaAddressBook } from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content justify-center ">
      <Link to="/home">
        <button className="btn btn-ghost normal-case text-2xl">
          <span>
            <FaAddressBook className="mr-2 text-2xl" />
          </span>
          Company Book
        </button>
      </Link>
    </div>
  )
}

export default Navbar
