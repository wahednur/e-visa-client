import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaApple, FaFacebook } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { apiUrl } from "../../../hooks/useApiUrl";
import { toast } from "sonner";
const Login = () => {
  const { setUser, googleLogin, userLogin, user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      setUser(result?.user);
      console.log(result);
      const newUser = {
        name: result?.user?.displayName,
        photo: result?.user?.photoURL,
        email: result?.user?.email,
      };
      const res = await fetch(`${apiUrl}/create-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      toast.success(`${newUser.email} Login successfully`);
      console.log(data.message);
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await userLogin(email, password);
      setUser(result?.user);
      toast.success(`${email} Login successfully`);
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(err.message);
    }
  };
  if (loading) return null;
  if (user?.email) return navigate("/");
  return (
    <div className="center h-screen">
      <div className="w-full md:w-xl p-8 rounded-2xl bg-white drop-shadow-xl">
        <h4 className="title mb-4">
          Welcome to <span className="text-primary">e.visa</span>
        </h4>
        <h1 className="sec-title">Login</h1>
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row items-center gap-5 my-6">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-4 btn capitalize"
            >
              <img className="bg-white p-2 rounded-full" src="/g.svg" alt="" />{" "}
              login with google
            </button>
            <div className="flex items-center gap-4">
              <button className="btn text-3xl h-16">
                <FaFacebook />
              </button>
              <button className="btn text-3xl h-16">
                <FaApple />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <hr className="text-gray-300 my-8 w-1/2" />
            <span className=" px-3">or</span>
            <hr className="text-gray-300 my-8 w-1/2" />
          </div>
          <h4 className="text-center py-3 text-lg text-primary">
            Login with username and password
          </h4>
          <form onSubmit={handleLogin} className="w-full">
            <div className="frm-grp-col">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="frm-ctr" />
            </div>
            <div className="frm-grp-col">
              <div className="flex justify-between">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-pass">Forgot password</Link>
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
