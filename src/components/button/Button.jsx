import React from 'react';
import './Button.styles.scss';

const BUTTON_TYPES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}
const Button = ({children, button_type, ...otherProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPES[button_type]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button