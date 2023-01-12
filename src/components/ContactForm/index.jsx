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
          <StyledOneToThreeGrid>
            <label htmlFor="name">Name</label>
            <StyledField name="name" placeholder="Alice Robertson" />
            {errors.name && touched.name && (
              <StyledErrorText>{errors.name}</StyledErrorText>
            )}
          </StyledOneToThreeGrid>

          <StyledOneToThreeGrid>
            <label htmlFor="subject">Subject</label>
            <StyledField name="subject" placeholder="just saying hi..." />
            {errors.subject && touched.subject && (
              <StyledErrorText>{errors.subject}</StyledErrorText>
            )}
          </StyledOneToThreeGrid>

          <StyledOneToThreeGrid>
            <label htmlFor="message">Message</label>
            <StyledField
              name="message"
              component="textarea"
              rows="6"
              placeholder="Hi Nick! I wanted to ..."
            />
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
