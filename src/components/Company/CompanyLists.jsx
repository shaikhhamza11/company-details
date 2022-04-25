import { useCompanyContext } from "../../context/company/companyContext"
import { FaTrash, FaEye, FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
const CompanyLists = () => {
  const {
    companyData: { companies },
    dispatch,
  } = useCompanyContext()
  return companies.length === 0 ? (
    <h2 className="text-center bg-base-100  py-5 mt-8">No data.</h2>
  ) : (
    <div className="overflow-x-auto mt-4">
      <table className="table  w-full md:text-xl border-none">
        <thead>
          <tr>
            <th></th>
            <th>Company Name</th>
            <th>Company Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => {
            return (
              <tr key={company.id} className="">
                <th>{index + 1}</th>
                <td>{company.companyName}</td>
                <td>{company.companyType}</td>
                <td className="flex  justify-between mt-3 ">
                  <FaTrash
                    className="cursor-pointer "
                    onClick={() =>
                      dispatch({
                        type: "delete-company",
                        payload: { id: company.id },
                      })
                    }
                  />
                  <Link to={`/view/${company.id}`}>
                    <FaEye className="cursor-pointer" />
                  </Link>
                  <FaEdit className="cursor-pointer" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyLists
