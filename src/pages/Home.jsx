import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import StyledGridItem from "../components/GridItem/styled/StyledGridItem";

const BeforeText = styled.h5`
  font-size: var(--text-lvl-4);
`;

const Title = styled.h1`
  font-size: var(--text-lvl-2);
  line-height: 1.25;
`;

const Headline = styled.h3`
  font-size: var(--text-lvl-4);
  color: var(--accent-color);
`;

const Hero = styled.div`
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const RoundImage = ({ className, img, width, border }) => {
  return (
    <div
      className={className}
      style={{
        width: width,
        height: width,
        border: border,
        borderRadius: "48.5%",
        overflow: "hidden",
      }}
    >
      <img src={img} alt="" style={{ width: "100%" }} />
    </div>
  );
};

const ShadowImage = styled(RoundImage)`
  filter: drop-shadow(1px 2px 3px hsl(220deg 60% 50% / 0.3))
    drop-shadow(2px 4px 6px hsl(220deg 60% 50% / 0.3))
    drop-shadow(4px 8px 12px hsl(220deg 60% 50% / 0.3));
`;

const Home = ({ beforeText, title, headlines, actions }) => {
  return (
    <StyledGridItem gridArea="landing">
      <Hero>
        <section>
          <BeforeText>{beforeText}</BeforeText>
          <Title>{title}</Title>
          <Headline>
            <TypeAnimation
              sequence={[
                "A Web Developer",
                2150,
                "A CSS Wrangler",
                2150,
                "SOLID Programmer",
                2150,
                "A Team Player",
                2150,
                "Agile Trained",
                2150,
                "Loves Typography",
                2150,
                "Morale Booster",
                2150,
                "Has B. Computing",
                2150,
                "Avoids Dependencies",
                2150,
              ]}
              speed={51}
              wrapper="h2"
              repeat={Infinity}
            />
          </Headline>
          <p>With over 2 years of experience in the industry!</p>
        </section>

        <div>
          <ShadowImage
            width={220}
            img={require("../assets/profile-pic.jpg")}
            alt="snowmobile"
          />
        </div>
      </Hero>
    </StyledGridItem>
  );
};

export default Home;
