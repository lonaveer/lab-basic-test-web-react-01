import React from 'react';

// Interface สำหรับ props
interface LoginButtonProps {
  buttonText?: string; // กำหนดให้สามารถรับข้อความปุ่มได้
  disabled?: boolean; // กำหนดให้สามารถรับสถานะ disabled ได้
}

const LoginButton: React.FC<LoginButtonProps> = ({
  buttonText = 'Login', // กำหนดค่า default ของ buttonText
  disabled = true, // กำหนดค่า default ของ disabled
}) => (
  <button className="btn-primary" disabled={disabled}>
    {buttonText}
  </button>
);

export default LoginButton;