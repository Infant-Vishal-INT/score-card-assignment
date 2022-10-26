import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/loginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const formik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validationSchema: yup.object({
      loginEmail: yup
        .string()
        .email("Please enter the valid email")
        .required("Please enter the valid email"),
      loginPassword: yup.string().required("Please enter the valid email"),
    }),
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const response = await axios.post(
          `https://stormy-cod-cloak.cyclic.app/signIn`,
          { username: values.loginEmail, password: values.loginPassword }
        );
        localStorage.setItem("jwtToken", response.data.token);
        navigate("/score_card");
        window.location.reload();
      } catch (error) {
        console.log("error:", error);
        localStorage.setItem("jwtToken", "");
        toast.error("Please enter the valid credentials", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });

  return (
    <div className="d-flex flex-column justify-content-center login-container">
      <ToastContainer />
      <div className="card align-self-center login-form-card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                name="loginEmail"
                onChange={formik.handleChange}
                value={formik.values.loginEmail}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              {formik.errors.loginEmail && formik.touched.loginEmail ? (
                <div className="modal-text text-danger">
                  {formik.errors.loginEmail}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                className="form-control"
                id="loginPassword"
                name="loginPassword"
                onChange={formik.handleChange}
                value={formik.values.loginPassword}
                placeholder="Password"
              />
              {formik.errors.loginPassword && formik.touched.loginPassword ? (
                <div className="modal-text text-danger">
                  {formik.errors.loginPassword}
                </div>
              ) : null}
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="showPasswordCheckBox"
                onClick={togglePasswordVisiblity}
              />
              <label
                className="form-check-label"
                htmlFor="showPasswordCheckBox"
              >
                Show Password
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
