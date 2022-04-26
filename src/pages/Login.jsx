import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../context/userAuth/userContext"
import GoogleButton from "react-google-button"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { logIn, googleSignIn } = useUserContext()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await logIn(email, password)
      navigate("/home")
    } catch (err) {
      setError(err.message)
    }
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate("/home")
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <div className="p-8 ">
      <h2 className="mb-3 font-bold text-3xl">Log In</h2>
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
          Login
        </button>
      </form>
      <GoogleButton
        className="my-4"
        onClick={(e) => handleGoogleSignIn(e)}
      ></GoogleButton>
      <h2>
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-bold ">
          SignUp
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

export default Login
