import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from '../../../app/components/LoginForm';

describe('LoginForm', () => {
  test('allows the user to login', async () => {
    // เรียกใช้ render LoginForm
    render(<LoginForm />);

    // จำลองการป้อนข้อมูล username และ password
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pass' } });

    // คลิกปุ่ม login
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // ตรวจสอบข้อความแสดงผลว่า 'Login Successful'
    expect(screen.getByTestId('success-message')).toHaveTextContent('Login Successful');
  });

  test('shows an error message if the form is submitted with empty fields', () => {
    // // เรียกใช้ render LoginForm
    render(<LoginForm />);

    // // คลิกปุ่ม login
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // // ตรวจสอบข้อความ error 'Please enter both username and password' เมื่อไม่ได้ป้อนข้อมูล
    expect(screen.getByTestId('error-message')).toHaveTextContent('Please enter both username and password');
  });
});