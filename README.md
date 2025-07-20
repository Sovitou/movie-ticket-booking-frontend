/src
|-- assets
|   |-- images
|   |-- styles
|       |-- main.css
|
|-- components
|   |-- common
|   |   |-- Button.js
|   |   |-- Input.js
|   |   |-- Modal.js
|   |   |-- Header.js
|   |   |-- Footer.js
|   |
|   |-- movies
|   |   |-- MovieCard.js
|   |   |-- MovieList.js
|   |   |-- MovieSearch.js
|   |
|   |-- layout
|       |-- AdminLayout.js
|       |-- UserLayout.js
|
|-- hooks
|   |-- useAuth.js        // Custom hook for authentication logic
|
|-- pages (or views)
|   |-- user
|   |   |-- HomePage.js
|   |   |-- MovieDetailPage.js
|   |   |-- OrderHistoryPage.js
|   |
|   |-- admin
|   |   |-- DashboardPage.js
|   |   |-- UserManagementPage.js
|   |   |-- MovieManagementPage.js
|   |   |-- CinemaManagementPage.js
|   |
|   |-- auth
|   |   |-- LoginPage.js
|   |   |-- SignUpPage.js
|   |   |-- ResetPasswordPage.js
|   |
|   |-- ProfilePage.js
|   |-- NotFoundPage.js
|
|-- services (or api)
|   |-- auth.service.js   // API calls related to authentication
|   |-- movie.service.js  // API calls for movies
|   |-- cinema.service.js // API calls for cinemas
|   |-- order.service.js  // API calls for orders
|
|-- utils
|   |-- formatDate.js     // Example utility function
|
|-- App.js                // Main component with routing
|-- index.js              // Entry point of the React app