import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { CompanyProvider } from "./context/company/companyContext"
import { UserProvider } from "./context/userAuth/userContext"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <UserProvider>
      <CompanyProvider>
        <App />
      </CompanyProvider>
    </UserProvider>
  </React.StrictMode>
)
