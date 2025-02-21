import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationModal from "../../component/Modal/ConfirmationModal";
import Cookies from "js-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleConfirmLogout = () => {
    Cookies.remove("adminToken");
    navigate("/login");
    setIsModalVisible(false);
  };

  const handleCancelLogout = () => {
    setIsModalVisible(false);
  };

  const menuItems = [
    {
      name: "user",
      displayName: "User",
      route: "/",
      icon: PersonIcon,
    },
    {
      name: "logout",
      displayName: "Logout",
      route: "/logout",
      icon: ExitToAppIcon,
    },
  ];

  const handleItemClick = (route) => {
    if (route === "/logout") {
      setIsModalVisible(true);
    } else {
      navigate(route);
    }
  };

  return (
    <>
      <div className="h-screen bg-white w-[270px] transition-all duration-300 ease-in-out">
        <div
          className="flex items-center justify-center h-[80px]"
          onClick={() => navigate("/")}
        >
          <h1 className="text-3xl font-bold tracking-widest text-[#0D47A1] uppercase">
            Dashboard
          </h1>
        </div>
        <div
          className="h-[calc(100vh-80px)] overflow-y-auto w-[270px] shadow-lg p-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc #BBDEFB" }}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-3 my-2 rounded-lg cursor-pointer transition-colors 
              ${
                location.pathname === item.route
                  ? "bg-[#0D47A1] text-white" 
                  : "text-[#0D47A1] hover:bg-[#BBDEFB] hover:text-[#002171]"
              }`}
              onClick={() => handleItemClick(item.route)}
            >
              <item.icon className="w-6 h-6 mr-3" />
              <span>{item.displayName}</span>
            </div>
          ))}
        </div>
      </div>
      <ConfirmationModal
        isVisible={isModalVisible}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
};

export default Sidebar;
