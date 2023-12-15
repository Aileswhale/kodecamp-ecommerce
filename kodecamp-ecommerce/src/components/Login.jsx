import { Link } from "react-router-dom";

const Login = () => {
      return (
        <div className="h-[100vh]">
          <div className="flex flex-col w-[70%] lg:w-[50%] m-auto mt-[10%] ">
            <div className="font-bold text-[2rem] text-center my-5">Login</div>

            <div>
              <label className="font-bold "> Full Name </label> <br />
              <input
                className="border border-black rounded px-[7px] py-[5px] outline-none w-[100%] my-[10px]"
                type="text"
                placeholder="input your full name"
                required
              />
            </div>

            <div>
              <label className="font-bold "> Password</label>
              <br />
              <input
                className="border border-black rounded px-[7px] py-[5px] outline-none w-[100%] my-[10px]"
                type="password"
                placeholder="input your password "
              />
            </div>

            <div>
              <p>Forgot Password ?</p>
            </div>

            <div className="submit-container flex justify-center  mt-[10px]">
              <div className="w-[100%]">
                <button
                  className="border rounded-[1rem] px-[1rem] py-[10px] bg-gray-400 w-[100%]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Don't have an account?
                <Link to="Signup">
                  <span className="text-red-500"> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
     
}

export default Login