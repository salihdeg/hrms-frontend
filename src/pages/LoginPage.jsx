import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import AuthService from "../services/AuthService";
import SdTextInput from "../utilities/customFromControls/SdTextInput";
import React from "react";

export default function LoginPage() {
  const initialValues = { email: "", password: "" };
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Eposta Geçerli Değil")
      .required("Email Alanı Zorunludur"),
    password: Yup.string()
      .required("Şifre Alanı Zorunludur"),
  });

  //confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Must Match")

  let authService = new AuthService();

  const handleLogin = (user) => {
    authService.login(user).then((result) => {
      if (result.data.success) {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Giriş Yap</h1>
          <Form>
            <SdTextInput label="Eposta" name="email" type="email" />
            <SdTextInput label="Şifre" name="password" type="password" />
            <Button style={{marginTop:"2rem"}} className="custom-btn" type="submit">
              Giriş Yap
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
