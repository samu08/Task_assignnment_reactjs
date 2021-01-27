import React, { useState, useEffect } from 'react' 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";



const signInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min")
});

const initialValues = {
  email: "",
  password: ""
};


const SignInForm = () => {
    let history = useHistory();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {

        if(values.email==='adminxyz@gmail.com'&&values.password==='Admin_007')
        {
            history.push('/adminuser')
            console.log("vAdmin successfully logged In!!!")
            
        
        }
    
        else{

            history.push('/users')
          console.log("User logged In!!!")
        }
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container" className="text-center" >
            <h1>SIGNIN </h1>
            <Form className="text-center">
              <div className="form-row" >
                <label htmlFor="email">Username</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                 
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>

                    <br/>
                   
              <div className="form-row">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                 
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>

              <button
                type="submit"
                class="btn btn-success"
             
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
           
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
