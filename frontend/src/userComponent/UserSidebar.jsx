import React from 'react'
import { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuFold2Line } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { FaUserPlus } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineBusAlert } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import './user.css'
import logo from'./logo.jpg'
import { FaLocationCrosshairs } from "react-icons/fa6";
const Sidebar = () => {
  const [SidebarShow, SetSidebarShow] = useState(false);
  return (
    <div className={"sidebar" + (SidebarShow ? "" : " hide")}>
      <div className="inside-sidebar">
        <div
          className={
            "sidebar-header d-flex justify-content-between p-2 " +
            (SidebarShow ? "" : "hide ps-3")
          }
        >
          {SidebarShow && (
            <div className="logo">
                            <img src={logo} alt="" style={{width:"100px"}}/>
            </div>
          )}
          <div className="menu-icon">
            {SidebarShow ? (
              <RiMenuFoldLine onClick={() => SetSidebarShow(false)} size={"18px"}/>
            ) : (
              <RiMenuFold2Line onClick={() => SetSidebarShow(true)} size={"18px"} />
            )}
          </div>
        </div>
      </div>
      <div className="sidebar-nav ps-2" style={{marginTop:"100px"}}>
         <div className={""+  (SidebarShow ? "" : "hide ")}>
        <Link to={"/trackbus"} className="p-2  mb-3  d-flex align-items-center gap-3" style={{textDecoration:"none", color:"black"}} > 
        <SiGooglemaps />
            {SidebarShow && "Track Bus"}</Link>
            </div>
         <div className={""+  (SidebarShow ? "" : "hide ")}>
          <Link to={"/driver"} className="p-2  mb-3  d-flex align-items-center gap-3" style={{textDecoration:"none", color:"black"}}>
          <IoMdPerson />
            {SidebarShow && "Driver Details"}
          </Link>
       </div>
         <div className={""+  (SidebarShow ? "" : "hide ")}>
         <Link to={"/bus"} className="p-2  mb-3  d-flex align-items-center gap-3" style={{textDecoration:"none", color:"black"}}>
         <MdOutlineBusAlert />
            {SidebarShow && "Bus Details"}
         </Link>
         </div>
         <div className={""+  (SidebarShow ? "" : "hide ")}>
         <Link to={"/location"} className="p-2  mb-3  d-flex align-items-center gap-3" style={{textDecoration:"none", color:"black"}}>
         <FaLocationCrosshairs />
            {SidebarShow && "Location"}
         </Link>
         </div>
      </div>

      <div className={"logout d-flex gap-3 align-items-center ps-2"+(SidebarShow ? "" : "hide ps-2")}>
      <IoMdLogOut /> {SidebarShow && "logout"}
      </div>
    </div>
  );
}

export default Sidebar