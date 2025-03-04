import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  console.log(location);
  if (loading) {
    return <div>Loading</div>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"} replace={true} />;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
