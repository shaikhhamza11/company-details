import { useParams, Link, useNavigate } from "react-router-dom"
import { useCompanyContext } from "../context/company/companyContext"
import { useEffect, useState } from "react"

const EditCompany = () => {
  let navigate = useNavigate()
  const params = useParams()
  const {
    companyData: { companies },
    dispatch,
  } = useCompanyContext()
  const [error, setError] = useState("")

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    companyName: "",
    companyType: "",
    customers: [],
  })

  const handleAddCustomer = () => {
    setSelectedUser({
      ...selectedUser,
      customers: [
        ...selectedUser.customers,
        { id: Math.random(), firstName: "", lastName: "" },
      ],
    })
  }

  const handleCustomerChange = (e, index) => {
    const { name, value } = e.target

    const custDetails = [...selectedUser.customers]
    custDetails[index][name] = value
    setSelectedUser({ ...selectedUser, customers: custDetails })
  }

  const handleRemoveCustomer = (index) => {
    setSelectedUser({
      ...selectedUser,
      customers: selectedUser.customers.filter((cust, i) => i !== index),
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const editCompany = {
      id: selectedUser.id,
      companyName: selectedUser.companyName,
      companyType: selectedUser.companyType,
      customers: selectedUser.customers,
    }
    if (selectedUser.companyName === "" || selectedUser.companyType === "") {
      setError("Please fill all the details")
      return
    }
    dispatch({ type: "edit-company", payload: { editCompany } })
    navigate("/home")
  }

  useEffect(() => {
    const company = companies.find((comp) => comp.id === +params.id)
    setSelectedUser(company)
  }, [params.id, companies])
  return (
    <div className="w-full container mt-20 mx-auto">
      <Link to="/home">
        <button className="btn btn-ghost font-bold">Back</button>
      </Link>
      {error && (
        <div className="alert alert-error shadow-lg mt-8">
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label font-bold" htmlFor="companyName">
            Name of Company
          </label>
          <input
            id="companyName"
            value={selectedUser.companyName}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, companyName: e.target.value })
            }
          ></input>
          <label className="label font-bold" htmlFor="companyName">
            Company Type
          </label>
          <input
            id="companyType"
            value={selectedUser.companyType}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, companyType: e.target.value })
            }
          ></input>

          {/* customers  */}
          <h1 className="text-3xl font-bold text-center my-4">
            Customer Details
          </h1>
          {selectedUser.customers.map(({ id, firstName, lastName }, index) => {
            return (
              <div key={id}>
                <div className="flex my-8 justify-center">
                  <label className="label font-bold">FirstName</label>
                  <input
                    id="firstName"
                    defaultValue={firstName}
                    type="text"
                    name="firstName"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleCustomerChange(e, index)}
                  ></input>
                  <label className="label ml-8 font-bold" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    defaultValue={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => handleCustomerChange(e, index)}
                  ></input>
                  <button
                    className="btn ml-2"
                    onClick={() => handleRemoveCustomer(index)}
                    disabled={selectedUser.customers.length === 1}
                  >
                    Remove
                  </button>
                </div>
                {selectedUser.customers.length - 1 === index && (
                  <button
                    className="btn btn-md  flex w-1/4 mx-auto"
                    onClick={handleAddCustomer}
                  >
                    Add customer
                  </button>
                )}
              </div>
            )
          })}

          <button
            className="mt-5 bg-stone-900 w-full max-w-sm  mx-auto  hover:bg-stone-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCompany
