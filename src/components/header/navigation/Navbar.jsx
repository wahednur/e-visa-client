import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/all-visa">All Visa</NavLink>
      </li>
      <li>
        <NavLink to="/add-visa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/my-visa">My Application Visa</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
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
                <img className="w-12" src="/favicon.svg" alt="" />
              </button>
              <div
                ref={menuRef}
                className={`desk-nav-user ${open ? "open" : ""}`}
              >
                <div className="flex flex-col space-y-3 p-5">
                  <div className="flex items-center gap-3">
                    <img src="/favicon.svg" className="w-12" alt="Name" />
                    <div className="flex flex-col justify-center">
                      <p>Abdul Wahed Nur</p>
                      <small className="text-gray-500">
                        wahednur@gmail.com
                      </small>
                    </div>
                  </div>
                  <hr className="text-gray-200" />
                  <div className="flex flex-col space-y-3">
                    <Link to="/add">Add Visa</Link>
                    <Link to="/my-visa">My Application Visa</Link>
                  </div>
                  <hr className="text-gray-200 mb-6" />
                  <button className="btn">Log Out</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="mbl-nav-wrap lg:hidden">
        <div className="nav-wrap flex justify-between items-center">
          <a href="/">
            <img className="w-12" src="/logo.svg" alt="" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`nav-icon text-secondary text-xl`}
          >
            <FaBars />
          </button>
        </div>
        <nav className={`mbl-nav ${open ? "open" : ""}`}>
          <ul className="flex flex-col">{navLinks}</ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
