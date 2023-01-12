import StyledGridItem from "../components/GridItem/styled/StyledGridItem";
import ContactForm from "../components/ContactForm";
import Title from "../styled/Title.styled";

const Contact = () => (
  <StyledGridItem gridArea="contact" id="Contact">
    <div>
      <Title>Contact</Title>
      <p style={{ fontSize: "var(--text-lvl-4" }}>Connect with me</p>
      <p>Reach out if you want to chat!</p>
      <ContactForm />
    </div>
  </StyledGridItem>
);

export default Contact;
