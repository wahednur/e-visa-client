import React from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";

const ForgotPass = () => {
  const { forgotPass } = useAuth();

  const resetPass = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    try {
      await forgotPass(email);
      toast.success(
        "Email has been send please check your email inbox or spam"
      );
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="container">
      <form onSubmit={resetPass} className=" w-full md:w-1/3 mx-auto mt-10">
        <div className="frm-grp-col">
          <label htmlFor="email">Enter your register email</label>
          <input type="email" name="email" className="frm-ctr" />
        </div>
        <button className="btn" type="submit">
          Send email
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
