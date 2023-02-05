import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
  redirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoute: any = (props: Props) => {
  if (!props.isLoggedIn) {
    return <Navigate to={props.redirectPath ?? "/"} replace />;
  }

  return props.children ? props.children : <Outlet />;
};

export default ProtectedRoute;
