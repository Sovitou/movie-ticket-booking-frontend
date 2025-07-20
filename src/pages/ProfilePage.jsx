// ProfilePage component - user profile management
import React, { useState } from "react";
import UserLayout from "../components/layout/UserLayout";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    setIsEditing(false);
    // Implement profile update logic here
  };

  return (
    <UserLayout>
      <div className="profile-page">
        <h1>My Profile</h1>
        <div className="profile-container">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={profileData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={profileData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={profileData.phone}
                onChange={handleChange}
              />
              <div className="profile-actions">
                <Button type="submit">Save Changes</Button>
                <Button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <p>
                <strong>Name:</strong> {profileData.name}
              </p>
              <p>
                <strong>Email:</strong> {profileData.email}
              </p>
              <p>
                <strong>Phone:</strong> {profileData.phone}
              </p>
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default ProfilePage;
