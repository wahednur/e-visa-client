import { Link } from "react-router-dom";
import { FaApple, FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <div className="center h-screen">
      <div className="w-full md:w-xl p-8 rounded-2xl bg-white drop-shadow-xl">
        <h4 className="title mb-4">
          Welcome to <span className="text-primary">e.visa</span>
        </h4>
        <h1 className="sec-title">Login</h1>
        <div className="w-full mt-8">
          <div className="flex items-center gap-5 my-6">
            <button className="flex items-center gap-4 btn capitalize">
              <img className="bg-white p-2 rounded-full" src="/g.svg" alt="" />{" "}
              login with google
            </button>
            <button className="btn text-3xl h-16">
              <FaFacebook />
            </button>
            <button className="btn text-3xl h-16">
              <FaApple />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <hr className="text-gray-300 my-8 w-1/2" />
            <span className=" px-3">or</span>
            <hr className="text-gray-300 my-8 w-1/2" />
          </div>
          <h4 className="text-center py-3 text-lg text-primary">
            Login with username and password
          </h4>
          <form action="w-full">
            <div className="frm-grp-col">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="frm-ctr" />
            </div>
            <div className="frm-grp-col">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <Link to="forgot-pass">Forgot password</Link>
              </div>
              <input type="password" name="password" className="frm-ctr" />
            </div>
            <button className="btn w-full">Login</button>
          </form>
          <p className=" my-5 text-center">
            No Account? please{" "}
            <Link to="/register" className="text-primary hover:text-secondary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
