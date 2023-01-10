import React, { useState } from "react";

import StyledListItem from "./styled/StyledListItem";
import StyledUnorderedList from "../../../../styled/StyledUnorderedList";
import BurgerMenuIcon from "./components/BurgerMenuIcon";
import CloseIcon from "./components/CloseIcon";

const DrawerMenu = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const executeScroll = (label) => {
    document.getElementById(label).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      {!isOpen && (
        <StyledUnorderedList>
          <StyledListItem>
            <button onClick={toggleMenu}>
              <BurgerMenuIcon />
            </button>
          </StyledListItem>
        </StyledUnorderedList>
      )}
      {isOpen && (
        <div>
          <StyledUnorderedList>
            {items.map(({ label }) => (
              <StyledListItem
                id={`#menu-${label}`}
                onClick={() => executeScroll(label)}
              >
                {label}
              </StyledListItem>
            ))}
            <StyledListItem>
              <button onClick={toggleMenu}>
                <CloseIcon />
              </button>
            </StyledListItem>
          </StyledUnorderedList>
        </div>
      )}
    </div>
  );
};
export default DrawerMenu;
