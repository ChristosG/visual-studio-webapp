// components/Button.tsx
import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-vsAccent text-white px-4 py-2 rounded hover:bg-vsButtonHover transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
