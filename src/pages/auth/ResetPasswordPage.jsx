// ResetPasswordPage component - password reset form
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
    setIsSubmitted(true);
    // Implement password reset logic here
  };

  if (isSubmitted) {
    return (
      <div className="reset-password-page">
        <div className="reset-container">
          <h1>Check Your Email</h1>
          <p>We've sent password reset instructions to {email}</p>
          <a href="/login">Back to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-page">
      <div className="reset-container">
        <h1>Reset Password</h1>
        <p>
          Enter your email address and we'll send you instructions to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Send Reset Instructions</Button>
        </form>
        <p>
          Remember your password? <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
