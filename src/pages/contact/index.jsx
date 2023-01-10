import StyledGridItem from "../../components/GridItem/styled/StyledGridItem";
import ContactForm from "../../components/ContactForm";
import Title from "../../styled/Title.styled";

const Contact = () => (
  <StyledGridItem gridArea="contact" id="Contact">
    <div>
      <Title>Contact</Title>
      <ContactForm />
    </div>
  </StyledGridItem>
);

export default Contact;
