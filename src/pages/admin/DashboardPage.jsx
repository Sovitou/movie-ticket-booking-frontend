// DashboardPage component - admin dashboard overview
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <div className="dashboard-page">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Movies</h3>
            <p className="stat-number">25</p>
          </div>
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Total Bookings</h3>
            <p className="stat-number">5,678</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p className="stat-number">$12,345</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
