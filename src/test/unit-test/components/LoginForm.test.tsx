import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from '../../../app/components/LoginForm';

describe('LoginForm', () => {
  test('allows the user to login', async () => {
    // // เรียกใช้ render LoginForm
    // xxxxx(xxxxx);

    // // จำลองการป้อนข้อมูล username และ password
    // fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    // xxxxx.xxxxx(xxxxx.xxxxx(/xxxxxx/i), { xxxxx: { xxxxx: 'pass' } });

    // // คลิกปุ่ม login
    // fireEvent.click(screen.getByRole('button', { name: xxxxx }));

    // // ตรวจสอบข้อความแสดงผลว่า 'Login Successful'
    // expect(screen.getByTestId('success-message')).toHaveTextContent('xxxxx');
  });

  test('shows an error message if the form is submitted with empty fields', () => {
    // // เรียกใช้ render LoginForm
    // xxxxx

    // // คลิกปุ่ม login
    // xxxxx

    // // ตรวจสอบข้อความ error 'Please enter both username and password' เมื่อไม่ได้ป้อนข้อมูล
    // expect(xxxxx.xxxxx('error-message')).xxxxx('Please enter both username and password');
  });
});