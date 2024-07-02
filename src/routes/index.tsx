import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoute/PrivateRoute";
import CRM_DASHBOARD from "../container/dashboards/crm/crm";
import { DMS_BASE_URL } from "../main";
import App from "../pages/App";
import Auth from "../pages/auth";
import Login from "../pages/auth/login";
import NotFound from "../pages/error/error404";
import Home from "../pages/welcome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={DMS_BASE_URL} element={<Home />} />
      <Route path={DMS_BASE_URL} element={<Auth />}>
        <Route path={`${DMS_BASE_URL}login`} element={<Login />} />
      </Route>
      <Route path={DMS_BASE_URL} element={<PrivateRoutes />}>
        <Route path="" element={<App />}>
          <Route path="dashboards" element={<CRM_DASHBOARD />} />
        </Route>
      </Route>
      <Route path={`${DMS_BASE_URL}404`} element={<NotFound />} />
      <Route path="*" element={<Navigate to="404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
