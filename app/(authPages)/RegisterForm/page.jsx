"use client"

import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";

export default  function RegisterFormpage() {
  const router = useRouter();
  const handleRegister = async(e) =>{
    e.preventDefault()
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const payload = {username, password}
    const result = await registerUser(payload)
    console.log(result)
    router.push('/')
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
           <p className="font-bold text-4xl">sign up</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
              <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="text" className="input" placeholder="username" name='username'/>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name='password'
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
