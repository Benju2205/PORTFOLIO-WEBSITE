import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";

const Contact = () => {
  const defaultValues = {
    username: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleOnSubmit = (values) => {
    values.preventDefault();
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    subject: yup.string(),
    message: yup.string().required("Message box cannot be left empty"),
  });

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me at :</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91-8360846614
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              benjaminxchhakchhuak@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              BH-4,LPU,Phagwara,Jalandhar,Punjab-144401
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{fontSize:'30px'}}>What's your story?</b>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magnam, qui? Nemo obcaecati molestiae dolore
            assumenda ut ipsa nihil ipsum repellendus repudiandae illo quaerat
            debitis, cumque veniam recusandae tenetur. Pariatur, ex?
          </p>

          {/* <form>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subject" name="user_subject"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
          </form> */}
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
            className="formik"
          >
            <Form className="form">
              <Field
                type="text"
                name="username"
                placeholder="Enter your name..."
                className="input"
              />
              <p className="error-message">
                <ErrorMessage name="username" />
              </p>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address..."
                className="input"
              />
              <p className="error-message">
                <ErrorMessage name="email" />
              </p>
              <Field
                type="text"
                name="subject"
                placeholder="Enter subject of your thoughts..."
                className="input"
              />
              <p className="error-message">
                <ErrorMessage name="subject" />
              </p>
              <textarea
                name="message"
                rows="7"
                placeholder="Share your thoughts with me..."
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
