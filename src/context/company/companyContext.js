import { createContext, useContext, useReducer } from "react"
import companyReducer from "./companyReducer"
const CompanyContext = createContext()

export const CompanyProvider = ({ children }) => {
  const initialState = {
    companies: [
      {
        id: 1,
        companyName: "ZenZ",
        companyType: "Internet and Software",
        customers: [
          {
            id: Math.random(),
            firstName: "Hamza",
            lastName: "Shaikh",
          },
        ],
      },
      {
        id: 2,
        companyName: "Nike",
        companyType: "Clothing",
        customers: [
          {
            id: Math.random(),
            firstName: "Cristiano",
            lastName: "Ronaldo",
          },
          {
            id: Math.random(),
            firstName: "Karim",
            lastName: "Benzema",
          },
        ],
      },
      {
        id: 3,
        companyName: "Electronic Arts",
        companyType: "Gaming",
        customers: [
          {
            id: Math.random(),
            firstName: "John",
            lastName: "Doe",
          },
          {
            id: Math.random(),
            firstName: "Akshay",
            lastName: "Kumar",
          },
        ],
      },
    ],
    loading: false,
  }
  const [state, dispatch] = useReducer(companyReducer, initialState)

  return (
    <CompanyContext.Provider value={{ companyData: state, dispatch }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompanyContext = () => useContext(CompanyContext)
