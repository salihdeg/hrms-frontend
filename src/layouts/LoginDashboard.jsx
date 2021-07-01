import React from "react";
import { useLocation } from "react-router-dom";
import loginImg from "../assets/Login_re_4vu2_undraw.svg";
import welcomeImg from "../assets/welcome_cats_thqn_undraw.svg";
import LoginPage from "../pages/LoginPage";
// import SdTextInput from "../utilities/customFromControls/SdTextInput";

export default function LoginDashboard() {
  const loginState = useLocation();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          {loginState.pathname === "/login" ? (
            <LoginPage />
          ) : loginState.pathname === "/register/worker" ? (
            <div></div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="col-md-7 my-auto">
          {loginState.pathname === "/login" ? (
            <img className="img-fluid w-100" src={loginImg} alt="Login" />
          ) : loginState.pathname === "/register/worker" ? (
            <img className="img-fluid w-100" src={welcomeImg} alt="Login" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
    //<Form>
    //   <h1>Giriş Yapın</h1>
    //   <SdTextInput name="email" placeholder="Eposta" />
    //   <SdTextInput name="password" placeholder="Şifre" />
    //   <Button color="primary" type="submit">
    //     Ekle
    //   </Button>
    //</Form>
  );
}
