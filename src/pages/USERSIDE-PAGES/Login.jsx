import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import Checkbox from "../../components/Checkbox";


function Login() {
  return (
    <div className="my-28">
      <center>
        <header>
          <h1 className="text-3xl text-[#08083c] font-medium" >Log In</h1>
          <h3 className="mt-4 text-xl" >We're glad to see you again!</h3>
          <p className=" text-sm" >
          Don't have an account?  <span className="text-[#EB662B] cursor-pointer hover:text-[#1967D2] duration-200 " ><Link to="/register">Sign Up!</Link></span>
          </p>
        </header>
        <div className="border border-slate-400 shadow-sm w-1/3 h-auto p-10 rounded-lg space-y-6 mt-10 max-lg:w-1/2 max-sm:w-8/12 ">
          <InputField
            w={100}
            type="email"
            name="userEmail"
            placeholder="Email Address"
          />
          <InputField
            w={100}
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="flex items-center justify-between text-slate-700 max-lg:flex-col max-lg:items-start gap-4" >
            <Checkbox forlabel="rememberMe" id="rememberMe" label="Remember Me" />
            <span className="cursor-pointer hover:text-[#1967D2] duration-200 " >Lost your password?</span>
          </div>
          <button
            type="submit"
            className="bg-[#EB662B] w-full text-white py-4 rounded-lg hover:bg-[#08083c] duration-200 cursor-pointer"
          >
            Register
          </button>
          <div className="border-t border-slate-400 pt-10 flex gap-4 items-center">
            <button
              className="bg-transparent hover:bg-[#1967D2] hover:text-white w-1/2 text-[#1967D2] py-4 rounded-lg border border-[#1967D2] duration-200 cursor-pointer"
            >
             Continue Facebook
            </button>
            <button
              className="bg-transparent hover:bg-[#D93025] hover:text-white w-1/2 text-[#D93025] py-4 rounded-lg border border-[#D93025] duration-200 cursor-pointer"
            >
             Continue Google
            </button>
          </div>
        </div>
      </center>
    </div>

  )
}

export default Login