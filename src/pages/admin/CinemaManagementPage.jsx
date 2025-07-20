// CinemaManagementPage component - admin cinema management
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const CinemaManagementPage = () => {
  const sampleCinemas = [
    {
      id: 1,
      name: "Downtown Cinema",
      location: "Downtown",
      screens: 8,
      capacity: 1200,
    },
    {
      id: 2,
      name: "Mall Cinema",
      location: "Shopping Mall",
      screens: 6,
      capacity: 900,
    },
    {
      id: 3,
      name: "Suburban Cinema",
      location: "Suburbs",
      screens: 4,
      capacity: 600,
    },
  ];

  return (
    <AdminLayout>
      <div className="cinema-management-page">
        <h1>Cinema Management</h1>
        <button className="add-cinema-btn">Add New Cinema</button>
        <div className="cinemas-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Screens</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleCinemas.map((cinema) => (
                <tr key={cinema.id}>
                  <td>{cinema.name}</td>
                  <td>{cinema.location}</td>
                  <td>{cinema.screens}</td>
                  <td>{cinema.capacity}</td>
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

export default CinemaManagementPage;
