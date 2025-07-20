// NotFoundPage component - 404 error page
import React from "react";
import UserLayout from "../components/layout/UserLayout";
import Button from "../components/common/Button";

const NotFoundPage = () => {
  return (
    <UserLayout>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <Button onClick={() => (window.location.href = "/")}>Go Home</Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default NotFoundPage;
