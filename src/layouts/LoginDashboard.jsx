import React from "react";
import loginImg from "../assets/Login_re_4vu2_undraw.svg";
import LoginPage from "../pages/LoginPage";
// import SdTextInput from "../utilities/customFromControls/SdTextInput";

export default function LoginDashboard() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <LoginPage />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={loginImg} alt="Login" />
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
