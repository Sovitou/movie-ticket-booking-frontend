// UserLayout component for user pages
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
