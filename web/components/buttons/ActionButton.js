import React from 'react';
import ActionButtonStyles from '../../src/styles/buttons/ActionButtonStyles';

function ActionButton({ children, ...rest }) {
  return (
    <ActionButtonStyles role='button' tabIndex={0} {...rest}>
        {children}
    </ActionButtonStyles>
  );
}

export default ActionButton;