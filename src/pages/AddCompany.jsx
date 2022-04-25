import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCompanyContext } from "../context/company/companyContext"

const AddCompany = () => {
  let navigate = useNavigate()
  const { dispatch } = useCompanyContext()
  const [companyName, setCompanyName] = useState("")
  const [companyType, setCompanyType] = useState("")
  const [customers, setCustomers] = useState([
    {
      id: Math.random(),
      firstName: "",
      lastName: "",
    },
  ])

  //   add fields

  const handleAddCustomer = () => {
    setCustomers([
      ...customers,
      { id: Math.random(), firstName: "", lastName: "" },
    ])
  }

  const handleRemoveCustomer = (index) => {
    setCustomers((prevState) => prevState.filter((cust, i) => i !== index))
  }

  const handleCustomerChange = (e, index) => {
    const { name, value } = e.target

    const custDetails = [...customers]
    custDetails[index][name] = value
    setCustomers(custDetails)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(companyName, companyType)
    const newCompany = {
      id: Math.random(),
      companyName,
      companyType,
      customers,
    }
    if (companyName === "" && companyType === "") {
      return
    }
    dispatch({ type: "add-company", payload: { newCompany } })
    navigate("/")
  }

  return (
    <div className="w-full container mt-20 mx-auto">
      <Link to="/">
        <button className="btn btn-ghost font-bold">Back</button>
      </Link>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label font-bold" htmlFor="companyName">
            Name of Company
          </label>
          <input
            id="companyName"
            value={companyName}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
          <label className="label font-bold" htmlFor="companyName">
            Company Type
          </label>
          <input
            id="companyType"
            value={companyType}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            onChange={(e) => setCompanyType(e.target.value)}
          ></input>

          {/* customers  */}
          <h1 className="text-3xl font-bold text-center my-4">
            Customer Details
          </h1>
          {customers.map(({ id, firstName, lastName }, index) => {
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
                    disabled={customers.length === 1}
                  >
                    Remove
                  </button>
                </div>
                {customers.length - 1 === index && (
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
export default AddCompany
