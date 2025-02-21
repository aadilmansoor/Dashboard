import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./shared/sidebar/SideBar";
import Navbar from "./shared/navbar";
import User from "./component/user/User";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import verifyToken from "./utilis/tokenVerification";
import Profile from "./component/profile/Profile";

function ProtectedRoute() {
  const isAuthenticated = verifyToken();
  const currentPath = window.location.pathname;

  if (currentPath.startsWith("/reset-password")) {
    return <Outlet />;
  }

  return isAuthenticated?.status ? <Outlet /> : <Navigate to="/login" />;
}

function IsLogged() {
  const logged = verifyToken();
  const currentPath = window.location.pathname;

  if (currentPath.startsWith("/reset-password")) {
    return <Outlet />;
  }

  return !logged?.status ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  return (
    <Routes>
    
      <Route element={<IsLogged />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

    
      <Route element={<ProtectedRoute />}>
        <Route
          path="/*"
          element={
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Sidebar />
              <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                <div style={{ height: "calc(100dvh - 80px)" }}>
                  <Routes>
                    <Route path="/" element={<User />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
              </Box>
            </Box>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
