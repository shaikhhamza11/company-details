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
    default:
      return state
  }
}

export default companyReducer
