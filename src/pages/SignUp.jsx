import { useState } from "react"
import { useUserContext } from "../context/userAuth/userContext"
import { useNavigate, Link } from "react-router-dom"
const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { signUp } = useUserContext()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-8 ">
      <h2 className="mb-3 font-bold text-3xl">Sign Up</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-control w-full">
          <label className="label">Email</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn mt-4">
          Sign Up
        </button>
      </form>
      <h2>
        Already have an account?{" "}
        <Link to="/" className="text-blue-600 font-bold ">
          Login
        </Link>
      </h2>
      {error && (
        <div className="alert alert-error shadow-lg mt-8">
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default SignUp
