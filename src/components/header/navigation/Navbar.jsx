import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { toast } from "sonner";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMbl, setOpenMbl] = useState(false);
  const { user, logOut } = useAuth();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-visa">All Visa</NavLink>
      </li>
      <li>
        <NavLink to="/add-visa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/applied-visa">My Application Visa</NavLink>
      </li>
      {user?.email ? (
        ""
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  const userNavItems = (
    <>
      <Link to="/add-visa">Add Visa</Link>
      <Link to="/visa-list">My Added Visas</Link>
      <Link to="/applied-visa">My Application Visa</Link>
    </>
  );
  // setOpen(false) outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await logOut();
    toast.success("Logout successfully");
  };

  return (
    <>
      <div className="desk-nav hidden lg:block bg-white shadow-md">
        <div className="container">
          <nav className="flex justify-between items-center py-3">
            <div className="flex items-center gap-6">
              <Link to="/">
                <img src="/logo.svg" alt="visa go" className="h-12" />
              </Link>
              <div className="text-left">
                <ul className="flex items-center">{navLinks}</ul>
              </div>
            </div>
            <div className="relative">
              <button
                ref={buttonRef}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL ? `${user?.photoURL}` : "/favicon.svg"}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </button>
              <div
                ref={menuRef}
                className={`desk-nav-user ${open ? "open" : ""}`}
              >
                <div className="flex flex-col space-y-3 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={
                        user?.photoURL ? `${user?.photoURL}` : "/favicon.svg"
                      }
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col justify-center">
                      <p>
                        {user?.displayName
                          ? user?.displayName
                          : "No name set yet"}
                      </p>
                      <small className="text-gray-500">
                        {user?.email ? user?.email : "No user email"}
                      </small>
                    </div>
                  </div>
                  <hr className="text-gray-200" />
                  <div className="flex flex-col space-y-3">{userNavItems}</div>
                  <hr className="text-gray-200 mb-6" />
                  {user?.email ? (
                    <button onClick={handleLogout} className="btn">
                      Log Out
                    </button>
                  ) : (
                    <Link to="/login" className="btn">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="mbl-nav-wrap lg:hidden py-3">
        <div className="nav-wrap flex justify-between items-center">
          <a href="/">
            <img className="h-10" src="/logo.svg" alt="" />
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenMbl(!openMbl)}
              className={`nav-icon text-secondary text-xl`}
            >
              <FaBars />
            </button>
            {/* User info  */}
            <div className="relative z-50">
              <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL ? `${user?.photoURL}` : "/favicon.svg"}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </button>
              <div className={`desk-nav-user ${open ? "open" : ""}`}>
                <div className="flex flex-col space-y-3 p-5">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={
                        user?.photoURL ? `${user?.photoURL}` : "/favicon.svg"
                      }
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col justify-center">
                      <p>
                        {user?.displayName
                          ? user?.displayName
                          : "No name set yet"}
                      </p>
                      <small className="text-gray-500">
                        {user?.email ? user?.email : "No user email"}
                      </small>
                    </div>
                  </div>
                  <hr className="text-gray-200" />
                  <div className="flex flex-col space-y-3">
                    <Link to="/add">Add Visa</Link>
                    <Link to="/my-visa">My Application Visa</Link>
                  </div>
                  <hr className="text-gray-200 mb-6" />
                  {user?.email ? (
                    <button onClick={handleLogout} className="btn">
                      Log Out
                    </button>
                  ) : (
                    <Link className="btn">Login</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={`mbl-nav z-50 ${openMbl ? "open" : ""}`}>
          <ul className="flex flex-col">{navLinks}</ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
