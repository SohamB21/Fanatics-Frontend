import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  ProSidebarProvider,
} from "react-pro-sidebar";
import {
  PiCaretCircleLeft,
  PiCaretCircleRight,
  PiUploadSimple,
  PiTShirt,
  PiHouse,
  PiInfo,
  PiShoppingCart,
  PiSignIn,
  PiSignOut,
  PiQuestion,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import userPfp4 from "../assets/userPfp4.png";

function MySidebar() {
  const { collapseSidebar, isCollapsed } = useProSidebar();
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleToggle = () => {
    collapseSidebar(!isExpanded);
    setIsExpanded(!isExpanded);
  };

  return (
    <ProSidebarProvider>
      <div id="app" className="h-screen flex">
        <Sidebar
          className="bg-lightBlue text-navy text-medium h-screen rounded-r-lg"
          defaultCollapsed={true}
          collapsed={!isExpanded}
        >
          <Menu className="h-screen py-4">
            <MenuItem
              icon={
                !isExpanded ? (
                  <PiCaretCircleRight
                    className="text-orange w-6 h-6"
                    onClick={handleToggle}
                  />
                ) : (
                  <PiCaretCircleLeft
                    className="text-orange w-6 h-6"
                    onClick={handleToggle}
                  />
                )
              }
              hideLabel
            >
              {isExpanded && (
                <div className="flex items-center gap-2">
                  <img
                    src={userPfp4}
                    alt="User Pfp"
                    className="rounded-full w-10 h-10 border-2 rounded-full border-orange"
                  />
                  <p className="text-wrap italic">Barnali</p>
                </div>
              )}
            </MenuItem>

            <Link to="/admin-dashboard/upload">
              <MenuItem
                icon={<PiUploadSimple className="text-orange w-6 h-6" />}
              >
                Upload Jerseys
              </MenuItem>
            </Link>
            <Link to="/admin-dashboard/manage">
              <MenuItem icon={<PiTShirt className="text-orange w-6 h-6" />}>
                Manage Jerseys
              </MenuItem>
            </Link>

            <Link to="/">
              <MenuItem icon={<PiHouse className="text-orange w-6 h-6" />}>
                Home
              </MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem icon={<PiInfo className="text-orange w-6 h-6" />}>
                About
              </MenuItem>
            </Link>
            <Link to="/shop">
              <MenuItem
                icon={<PiShoppingCart className="text-orange w-6 h-6" />}
              >
                Shop
              </MenuItem>
            </Link>

            <hr className="border-t border-orange border-solid border-opacity-50 m-2" />

            <Link to="/">
              <MenuItem icon={<PiSignIn className="text-orange w-6 h-6" />}>
                Sign In
              </MenuItem>
            </Link>
            <Link to="/">
              <MenuItem icon={<PiSignOut className="text-orange w-6 h-6" />}>
                Log Out
              </MenuItem>
            </Link>
            <Link to="/">
              <MenuItem icon={<PiQuestion className="text-orange w-6 h-6" />}>
                Help
              </MenuItem>
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </ProSidebarProvider>
  );
}

export default MySidebar;
