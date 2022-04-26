const companyReducer = (state, action) => {
  switch (action.type) {
    case "add-company":
      return {
        ...state,
        companies: [...state.companies, action.payload.newCompany],
      }

    case "delete-company":
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload.id
        ),
      }
    case "edit-company": {
      const updatedCompany = action.payload.editCompany
      return {
        ...state,
        companies: state.companies.map((company) => {
          return company.id === updatedCompany.id ? updatedCompany : company
        }),
      }
    }
    default:
      return state
  }
}

export default companyReducer
