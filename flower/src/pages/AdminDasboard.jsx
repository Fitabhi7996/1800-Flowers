import React from "react";
import "./Admindashboard.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/arun/Sidebar";
import Adminroutes from "../components/arun/Adminroutes";

const Admindashboard = () => {
  return (
    <>
      <Sidebar>
        <Adminroutes />
      </Sidebar>
    </>
  );
};

export default Admindashboard;
