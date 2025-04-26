import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "", 
  type = "button" 
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium focus:outline-none transition duration-200";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;