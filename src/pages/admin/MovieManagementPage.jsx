// MovieManagementPage component - admin movie management
import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";

const MovieManagementPage = () => {
  const sampleMovies = [
    {
      id: 1,
      title: "Action Movie",
      genre: "Action",
      duration: "2h 30m",
      status: "Active",
    },
    {
      id: 2,
      title: "Comedy Film",
      genre: "Comedy",
      duration: "1h 45m",
      status: "Active",
    },
    {
      id: 3,
      title: "Drama Series",
      genre: "Drama",
      duration: "2h 15m",
      status: "Inactive",
    },
  ];

  return (
    <AdminLayout>
      <div className="movie-management-page">
        <h1>Movie Management</h1>
        <button className="add-movie-btn">Add New Movie</button>
        <div className="movies-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleMovies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.status}</td>
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

export default MovieManagementPage;
