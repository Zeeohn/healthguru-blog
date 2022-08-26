import React from "react";
import { ButtonStyles } from "./../../styles/buttons/ButtonStyles";
import { ButtonTypes } from "./../../constants/ButtonTypes";

function Button({ children, tag, variant = ButtonTypes.primary, ...props }) {
  return (
    <ButtonStyles as={tag} {...props} variant={variant}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
