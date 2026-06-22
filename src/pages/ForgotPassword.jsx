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
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  }

  return (
    <>
      <style>{`
        .forgot-page{
          min-height:100vh;
          background:#f1f5f9;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px 20px;
        }

        .forgot-card{
          width:100%;
          max-width:500px;
          background:white;
          padding:40px;
          border-radius:20px;
          box-shadow:0 8px 20px rgba(0,0,0,0.1);
        }

        .forgot-title{
          text-align:center;
          font-size:36px;
          font-weight:bold;
          color:#0f172a;
          margin-bottom:30px;
        }

        .forgot-label{
          font-weight:600;
          color:#334155;
          margin-bottom:8px;
          display:block;
        }

        .forgot-input{
          width:100%;
          padding:12px;
          border:1px solid #cbd5e1;
          border-radius:10px;
          outline:none;
          margin-bottom:20px;
        }

        .forgot-input:focus{
          border-color:#38bdf8;
          box-shadow:0 0 8px rgba(56,189,248,0.3);
        }

        .forgot-btn{
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

        .forgot-btn:hover{
          background:#38bdf8;
        }

        @media(max-width:768px){
          .forgot-card{
            padding:25px;
          }

          .forgot-title{
            font-size:28px;
          }
        }
      `}</style>

      <div className="forgot-page">
        <div className="forgot-card">

          <h2 className="forgot-title">
            Forgot Password
          </h2>

          <form onSubmit={sendLink}>

            <label className="forgot-label">
              Email Address
            </label>

            <input
              type="email"
              className="forgot-input"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="forgot-btn"
            >
              Send Reset Link
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default ForgotPassword;