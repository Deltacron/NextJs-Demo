import React from 'react';
import { ButtonStyle } from '../theme/typographyStyles';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: any) => void;
  type?: "button" | "submit" | "reset" | undefined,
  id?: string;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ id = "button", type = "button", className, variant = "primary", children, onClick }) => {
  return (
    <button type={type} id={id} className={`justify-center px-11 py-3 ${variant === 'primary' && 'bg-primary'} rounded-3xl max-md:px-5 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;