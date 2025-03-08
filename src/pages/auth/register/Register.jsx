import { FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { apiUrl } from "../../../hooks/useApiUrl";
import { toast } from "sonner";
import { useState } from "react";

const Register = () => {
  const { userRegister, updateUser, setUser, googleLogin, user, loading } =
    useAuth();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setErrors("Password must be at least 6 characters log");
    }
    if (!/[a-z]/.test(password)) {
      return setErrors("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return setErrors("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
      return setErrors("Password must contain at least one number");
    }
    if (!/[@$!%*?&]/.test(password)) {
      return setErrors("Password must contain at least one special character");
    }
    const newUser = {
      name,
      photo,
      email,
      password,
    };
    try {
      const result = await userRegister(email, password);
      await updateUser(name, photo);
      setUser({ ...result?.user, displayName: name, photoURL: photo });
      await fetch(`${apiUrl}/create-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      toast.success(`${result?.user?.email} account created successfully`);
      navigate(location?.state ? location.pathname : "/");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
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
      navigate(location?.state ? location.pathname : "/");
    } catch (err) {
      console.log(err.message);
    }
  };
  if (loading) return null;
  if (user?.email) return navigate("/");
  return (
    <div className="center min-h-[calc(100vh-350px)]">
      <div className="w-full md:w-xl p-8 rounded-2xl bg-white drop-shadow-xl">
        <h4 className="title mb-4">
          Welcome to <span className="text-primary">e.visa</span>
        </h4>
        <h1 className="sec-title">Register now</h1>
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row items-center gap-5 my-6">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-4 btn capitalize"
            >
              <img className="bg-white p-2 rounded-full" src="/g.svg" alt="" />{" "}
              sign up with google
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
            Register with username and password
          </h4>
          <form onSubmit={handleRegister} action="w-full">
            <div className="frm-grp-col">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="frm-ctr" />
            </div>
            <div className="frm-grp-col">
              <label htmlFor="photoURL">PhotoURL</label>
              <input type="text" name="photoURL" className="frm-ctr" />
            </div>
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
              {errors && <small className="text-red-500">{errors}</small>}
            </div>
            <button className="btn w-full">Login</button>
          </form>
          <p className=" my-5 text-center">
            You have already account? please{" "}
            <Link to="/login" className="text-primary hover:text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
