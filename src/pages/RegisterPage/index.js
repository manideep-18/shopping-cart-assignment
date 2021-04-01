import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";

import Header from "../../components/Header";

import "./styles.scss";

const SigninSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="responsiveContainer">
          <div className="textFormContainer">
            <h1>Register</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={(values) => {
                // same shape as initial values
                localStorage.setItem("authToken", values["email"]);
                this.props.history.push("/");
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="fieldsContainer">
                  <label>username</label>
                  <Field name="username" type="text" />
                  {errors.username && touched.username ? (
                    <span className="errorTextStyles">{errors.username}</span>
                  ) : null}
                  <label>email</label>
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? (
                    <span className="errorTextStyles">{errors.email}</span>
                  ) : null}
                  <label>password</label>
                  <Field name="password" type="password" />
                  {errors.password && touched.password ? (
                    <span className="errorTextStyles">{errors.password}</span>
                  ) : null}
                  <button type="submit" className="submitButtonStyles">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterPage);