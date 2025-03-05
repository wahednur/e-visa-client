import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import SyncLoader from "react-spinners/ClipLoader";
function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <SyncLoader loading={loading} />;
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
