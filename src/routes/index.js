import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";


export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        {path: "verify", element: <VerifyPage /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "group", element: <Group /> },
        { path: "settings", element: <Settings /> },
        { path: "conversation", element: <Conversation /> },
        { path: "chats", element: <Chats /> },
        { path: "contact", element: <Contact /> },
        { path: "profile", element: <Profile /> },
        {path: "call", element: <CallPage />},
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = 
  lazy(() => import("../pages/dashboard/GeneralApp"));
const Conversation = 
  lazy(() => import("../pages/dashboard/Conversation"))
;
const Chats = lazy(() => import("../pages/dashboard/Chats"));
const Group = lazy(() => import("../pages/dashboard/Group"));
const CallPage = lazy(() => import("../pages/dashboard/Call"));
const Contact = lazy(() => import("../sections/Dashboard/contact"));
const Page404 = lazy(() => import("../pages/Page404"));

const LoginPage = lazy(() => import("../pages/auth/Login"));
const VerifyPage = lazy(() => import("../pages/auth/Verify"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const ResetPasswordPage = 
  lazy(() => import("../pages/auth/ResetPassword"))
;
const NewPasswordPage = 
  lazy(() => import("../pages/auth/NewPassword"));

// Settings
const Settings = lazy(() => import("../pages/dashboard/Settings"));
const Profile = 
  lazy(() => import("../pages/dashboard/Settings/Profile"));
