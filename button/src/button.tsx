import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant = 'primary',
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition ${getButtonStyle()} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export { Button };
