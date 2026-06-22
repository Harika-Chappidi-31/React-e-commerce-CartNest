import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  async function sendLink(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://januecom.duckdns.org/api/forgotpassword",
        {
          email
        }
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response?.data?.message);
    }
  }

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>

      <form onSubmit={sendLink}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;