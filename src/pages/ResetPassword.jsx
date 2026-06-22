import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {

  const { token } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirm_password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const res = await axios.post(
        `https://januecom.duckdns.org/api/resetpassword/${token}`,
        formData
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
    <>
      <style>{`
        .reset-page{
          min-height:100vh;
          background:#f1f5f9;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px 20px;
        }

        .reset-card{
          width:100%;
          max-width:500px;
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 8px 20px rgba(0,0,0,0.1);
        }

        .reset-title{
          text-align:center;
          font-size:36px;
          font-weight:bold;
          color:#0f172a;
          margin-bottom:30px;
        }

        .reset-label{
          font-weight:600;
          color:#334155;
          margin-bottom:8px;
          display:block;
        }

        .reset-input{
          width:100%;
          padding:12px;
          border:1px solid #cbd5e1;
          border-radius:10px;
          margin-bottom:20px;
          outline:none;
        }

        .reset-input:focus{
          border-color:#38bdf8;
          box-shadow:0 0 8px rgba(56,189,248,0.3);
        }

        .reset-btn{
          width:100%;
          background:#0f172a;
          color:white;
          border:none;
          padding:14px;
          border-radius:10px;
          font-size:18px;
          font-weight:600;
          transition:0.3s;
        }

        .reset-btn:hover{
          background:#38bdf8;
        }

        @media(max-width:768px){
          .reset-card{
            padding:25px;
          }

          .reset-title{
            font-size:28px;
          }
        }
      `}</style>

      <div className="reset-page">

        <div className="reset-card">

          <h2 className="reset-title">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>

            <label className="reset-label">
              New Password
            </label>

            <input
              type="password"
              name="password"
              className="reset-input"
              placeholder="Enter New Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label className="reset-label">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirm_password"
              className="reset-input"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="reset-btn"
            >
              Update Password
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default ResetPassword;