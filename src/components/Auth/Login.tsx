import { useState } from "react";
import "remixicon/fonts/remixicon.css";
// import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState("password");
  const [passErrror, setPassError] = useState("")
  const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(password.length < 8){
        setPassError("Password must be at least 8 characters long")
    }else{
        setPassError("")
        setEmail("")
        setPassword("")
    }
  }
  return (
    <section className="bg-zinc-800 h-[100vh] overflow-y-hidden w-[100vw] md:flex md:justify-center md:items-center">
      <div className="bg-zinc-800 h-[100vh] md:h-[90vh] overflow-hidden w-[100vw] md:w-[50vw] lg:w-[35vw] md:border-2 rounded-2xl md:border-[#834045] display-none md:display-block">
        <header
          style={{ fontFamily: "Roboto" }}
          className="text-white font-bold text-4xl p-8 pt-10 w-[100vw]"
        >
          Log In
        </header>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className="flex items-center justify-center flex-col gap-8 w-full h-[90%]">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            style={{ fontFamily: "Roboto" }}
            className="text-zinc-500 text-xl bg-transparent border-2 border-[#834045] rounded-3xl p-2 pl-4 outline-none w-[80%] placeholder:text-zinc-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <section className="relative w-full flex justify-center items-center flex-col">
            <input
              required
              style={{ fontFamily: "Roboto" }}
              type={passType}
              className="text-zinc-500 text-xl bg-transparent border-2 border-[#834045] rounded-3xl p-2 pl-4 outline-none w-[80%] placeholder:text-zinc-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <div className="text-red-500 text-lg absolute left-[14%] -bottom-8">{passErrror}</div>
            <button
              style={{ fontFamily: "Roboto" }}
              className="text-white text-xl absolute right-[15%]"
              onClick={(e) => {
                e.preventDefault();
                setPassType(passType === "password" ? "text" : "password");
              }}
            >
              {passType === "password" ? (
                <i className="ri-eye-off-line"></i>
              ) : (
                <i className="ri-eye-line"></i>
              )}
            </button>
          </section>
          <section className="flex justify-between items-center w-[80%]">
            {/* <Link to="/home" className="text-[#834045]  text-xl bg-[#834045] rounded-3xl p-2 pl-4 outline-none w-[80%]">Forgot Password</Link> */}
            <a
              href="#"
              style={{ fontFamily: "Roboto" }}
              className="text-[#834045]  text-xl rounded-3xl p-2 pl-4 outline-none w-[80%]"
            >
              Forgot Password
            </a>
          </section>
          <button
            style={{ fontFamily: "Roboto" }}
            className="text-white text-2xl rounded-full font-semibold bg-[#834045]  p-3 outline-none w-[80%]"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
