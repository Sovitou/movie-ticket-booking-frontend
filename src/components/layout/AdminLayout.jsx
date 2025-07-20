// AdminLayout component for admin pages
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-sidebar">
        <nav>
          <ul>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/admin/movies">Manage Movies</a>
            </li>
            <li>
              <a href="/admin/cinemas">Manage Cinemas</a>
            </li>
            <li>
              <a href="/admin/users">Manage Users</a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="admin-content">{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
