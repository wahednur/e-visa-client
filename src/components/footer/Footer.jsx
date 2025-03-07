import { FaFacebookF, FaRegPaperPlane, FaYoutube } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-primary bg-[url(/img/pattern.png)] bg-cover bg-no-repeat text-white mt-10 md:mt-16 lg:mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 md:py-16 lg:py-20">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-6xl font-bold">
              <img src="/favicon.svg" className="h-12 fill-amber-50" alt="" />
              <h1>e.visa</h1>
            </div>
            <p>
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <button className="px-5 py-3 bg-secondary uppercase hover:bg-white duration-300 hover:text-primary font-bold">
              Read more
            </button>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Services</h4>
            <div className="flex flex-col gap-3 mt-5">
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Canada visa
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Japan visa
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Spain visa
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Germany visa
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Italy visa
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Useful Links</h4>
            <div className="flex flex-col gap-3 mt-5">
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Home
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                About us
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Visa
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Blog
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-secondary"
                to="/"
              >
                <MdOutlineDoubleArrow className="text-secondary" />
                Contact us
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-2xl font-bold">Newsletter</h4>
            <p>Sign up for alerts, our latest blogs, thoughts, and insights.</p>
            <input
              type="text"
              className="w-full bg-white px-5 py-3 text-gray-500 outline-none"
              placeholder="Your email address"
            />
            <button className="px-5 w-full py-3 bg-secondary flex justify-center items-center gap-3 uppercase hover:bg-white duration-300 hover:text-primary font-bold">
              <FaRegPaperPlane /> Subscribe now
            </button>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="flex flex-col md:flex-row items-center md:justify-between py-6">
          <p>&copy; Copyright 2024 by Wahed Nur</p>
          <div className="flex gap-3 items-center">
            <Link className="p-4 bg-white/50 rounded-full hover:bg-secondary duration-300">
              <FaFacebookF />
            </Link>
            <Link className="p-4 bg-white/50 rounded-full hover:bg-secondary duration-300">
              <FaXTwitter />
            </Link>
            <Link className="p-4 bg-white/50 rounded-full hover:bg-secondary duration-300">
              <FaLinkedinIn />
            </Link>
            <Link className="p-4 bg-white/50 rounded-full hover:bg-secondary duration-300">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
