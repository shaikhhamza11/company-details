import { useParams, Link } from "react-router-dom"
import { useCompanyContext } from "../context/company/companyContext"

const ViewCompany = () => {
  const params = useParams()
  const {
    companyData: { companies },
  } = useCompanyContext()

  const company = companies.find((comp) => comp.id === +params.id)
  return company ? (
    <div className="">
      <h1 className="text-3xl font-bold my-4">
        Company Name:{company.companyName}
      </h1>
      <h1 className="text-3xl font-semi-bold my-4">
        Type: {company.companyType}
      </h1>
      <h2 className="text-xl font-semi-bold">Customers Details</h2>
      <ul>
        {company.customers.map((cust, i) => (
          <li key={cust.id}>
            <span>{i + 1})</span>
            <span className="text-lg">{cust.firstName}</span>
            <span className="text-lg">{cust.lastName}</span>
          </li>
        ))}
      </ul>
      <Link to="/home">
        <button className="btn btn-md m-20">Go Back</button>
      </Link>
    </div>
  ) : (
    <h2 className="text-center bg-base-100  py-5 mt-8">Invalid Id</h2>
  )
}

export default ViewCompany
