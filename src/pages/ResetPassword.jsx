import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://januecom.duckdns.org/api/resetpassword/${token}`,
        {
          password,
          confirm_password: confirmPassword
        }
      );

      alert(res.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Password reset failed"
      );
    }
  }

  return (
    <div className="container mt-5">

      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="password"
          className="form-control mb-3"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Reset Password
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;