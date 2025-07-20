// UserManagementPage component - admin user management
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const UserManagementPage = () => {
  const sampleUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin" },
  ];

  return (
    <AdminLayout>
      <div className="user-management-page">
        <h1>User Management</h1>
        <button className="add-user-btn">Add New User</button>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagementPage;
