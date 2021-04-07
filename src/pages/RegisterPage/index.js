import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router";

import "./styles.scss";
import { validatePassword } from "../../utils/validationUtils";

const SigninSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});

function checkPasswordsMatch(password, confirmPassword) {
  if (password === confirmPassword) return null;
  return "Passwords does not match";
}

class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        <div className="responsiveContainer">
          <div className="textFormContainer">
            <h1>Register</h1>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={(values) => {
                // same shape as initial values
                localStorage.setItem("authToken", values["email"]);
                this.props.history.push("/");
                // console.log(values);
              }}
            >
              {({ errors, touched, values }) => (
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
                  <Field
                    name="password"
                    type="password"
                    validate={validatePassword}
                  />
                  {errors.password && touched.password ? (
                    <span className="errorTextStyles">{errors.password}</span>
                  ) : null}
                  <label>confirm password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    validate={() => {
                      return checkPasswordsMatch(
                        values.password,
                        values.confirmPassword
                      );
                    }}
                  />
                  {(errors.confirmPassword === "Required" ||
                    values.password !== values.confirmPassword) &&
                  touched.confirmPassword ? (
                    <span className="errorTextStyles">
                      {errors.confirmPassword}
                    </span>
                  ) : null}
                  <button type="submit" className="submitButtonStyles">
                    Register
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
