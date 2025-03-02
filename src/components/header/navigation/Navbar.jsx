import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="desk-nav hidden md:block bg-white shadow-md">
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
            <div>User</div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
