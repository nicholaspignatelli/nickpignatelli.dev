import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import StyledField from "./styled/StyledField";
import StyledOneToThreeGrid from "./styled/StyledOneToThreeGrid";
import StyledErrorText from "./styled/StyledErrorText";
import StyledSubmitButton from "./styled/StyledSubmitButton";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    subject: Yup.string().required("required"),
    message: Yup.string()
      .max(1000, "1000 character limit")
      .required("empty message"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        let mailLink = `mailto:nickpignatelli@icloud.com?subject=${
          values.subject + " (from " + values.name + ")"
        }&body=${values.message}`;
        window.location.href = mailLink;
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <p>Connect with me</p>
          <p>Reach out if you want to chat!</p>

          <StyledOneToThreeGrid>
            <label htmlFor="name">Name</label>
            <StyledField name="name" />
            {errors.name && touched.name && (
              <StyledErrorText>{errors.name}</StyledErrorText>
            )}
          </StyledOneToThreeGrid>

          <StyledOneToThreeGrid>
            <label htmlFor="subject">subject</label>
            <StyledField name="subject" />
            {errors.subject && touched.subject && (
              <StyledErrorText>{errors.subject}</StyledErrorText>
            )}
          </StyledOneToThreeGrid>

          <StyledOneToThreeGrid>
            <label htmlFor="message">Message</label>
            <StyledField name="message" />
            {errors.message && touched.message && (
              <StyledErrorText>{errors.message}</StyledErrorText>
            )}
          </StyledOneToThreeGrid>
          <StyledSubmitButton>Submit</StyledSubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
