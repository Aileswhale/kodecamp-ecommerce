import { useState } from "react";


const Signup = () => {
    // const { action, setAction } = useState("Sign Up");

  return (
    <div className="h-[100vh]">
      <div className="flex flex-col w-[70%] m-auto mt-[10%] ">
              <div className="font-bold text-[2rem] text-center my-5">Sign Up</div>

        <div>
          <label className="font-bold "> Full Name </label> <br />
          <input
            className="border border-black rounded px-[7px] py-[5px] outline-none w-[100%] my-[10px]"
            type="text"
            placeholder="input your full name" required
          />
        </div>
        <div>
          <label className="font-bold "> E-mail</label> <br />
          <input
            className="border border-black rounded px-[7px] py-[5px] outline-none w-[100%] my-[10px]"
            type="email"
            placeholder="input your e-mail"
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

        <div className="submit-container flex justify-center  mt-[10px]">
          <div className="w-[100%]">
            <button
              className="border rounded-[1rem] px-[1rem] py-[10px] bg-gray-400 w-[100%]"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          {/* <div>
            <button
              className="border rounded-[1rem] px-[1rem] py-[10px] bg-gray-400"
              type="submit"
            >
              Login
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Signup