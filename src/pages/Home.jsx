import { CompanyLists, Logout } from "../components/componentExports"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <Logout />
      <CompanyLists />
      <Link to="/add">
        <button className="btn btn-small md:btn-lg  mt-8 ">Add company</button>
      </Link>
    </div>
  )
}

export default Home
