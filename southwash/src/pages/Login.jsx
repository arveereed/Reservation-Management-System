import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"

function Login() {
  const { adminAcc, setToken, token } = useContext(AppContext)

  if (token) {
    return <Navigate to="/dashboard" />
  }

  const [admin, setAdmin] = useState({
    username: '',
    password: ''
  })
  
  const [errors, setErrors] = useState('')
  
  const handleSubmit = (formData) => {
    if (formData.username !== adminAcc.username || formData.password !== adminAcc.password) {
      setErrors('The credentials is not correct.')
      return
    }
    setErrors('')
    setToken('yourValidToken')
  }

  return (
    <div className="grid place-content-center min-h-screen">
      <form onSubmit={(e) => e.preventDefault()} className='z-10 space-y-4 font-["Poppins"] w-[660px] rounded-xl p-24' style={{
        backgroundColor: 'rgba(111, 186, 247, .8)'
      }}>
        <div className="grid place-content-center mb-4">
          <h3>Admin account</h3>
        </div>
        <div className='form-input-container'>
          <label htmlFor="username">Username</label>
          <input
            className='mt-2 bg-transparent shadow-none border-b-[1px] px-2 py-1 outline-none border-black'
            id='username' 
            type="text"
            autoComplete="off"
            value={admin.username}
            onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
          />
        </div>
        <div className='form-input-container'>
          <label htmlFor="password">Password</label>
          <input 
            className='mt-2 bg-transparent shadow-none border-b-[1px] px-2 py-1 outline-none border-black'
            id='password' 
            type="password"
            value={admin.password}
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          />
        </div>
        {errors && (
          <div className="bg-red-500 py-1 px-2 text-white rounded-md grid place-content-center">{errors}</div>
        )}
        <button onClick={() => handleSubmit(admin)} className='mt-4 w-full h-[48px] text-white bg-[#43625b] border-[#363636] border-1 rounded-lg shadow-[7px_5px_5px_0px_rgba(0,0,0,0.4)]'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login