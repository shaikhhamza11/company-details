import { createContext, useContext, useReducer } from "react"
import companyReducer from "./companyReducer"
import { companies } from "../../constant/companyDetails"
const CompanyContext = createContext()

export const CompanyProvider = ({ children }) => {
  const initialState = {
    companies,
  }
  const [state, dispatch] = useReducer(companyReducer, initialState)

  return (
    <CompanyContext.Provider value={{ companyData: state, dispatch }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompanyContext = () => useContext(CompanyContext)
