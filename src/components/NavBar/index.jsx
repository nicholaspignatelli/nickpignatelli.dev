import DrawerMenu from "./components/DrawerMenu";
import StyledLogoName from "./components/LogoName/styled/StyledLogoName";

const NavBar = ({ name, menuOptions, className }) => {
  return (
    <nav className={className}>
      <StyledLogoName
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {name}
      </StyledLogoName>

      <DrawerMenu items={menuOptions} />
    </nav>
  );
};

export default NavBar;
