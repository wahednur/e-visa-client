import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="center h-screen">
      <div className="w-full md:w-xl border p-8 rounded-2xl bg-white drop-shadow-xl">
        <h1 className="sec-title">Login</h1>
        <div className="w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
