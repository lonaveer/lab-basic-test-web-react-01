import { fireEvent, render, screen } from '@testing-library/react';
import { LoginForm } from '../../../app/components/LoginForm';

describe('LoginForm', () => {
  test('allows the user to login', async () => {
    // // เรียกใช้ render LoginForm
    // xxxxx(xxxxx);

    // // จำลองการป้อนข้อมูล username และ password
    // xxxxx.xxxxx(xxxxx);
    // xxxxx.xxxxx(xxxxx);

    // // คลิกปุ่ม login
    // xxxxx.xxxxx(xxxxx);

    // // ตรวจสอบข้อความแสดงผลว่า 'Login Successful'
    // xxxxx(xxxxx.xxxxx('xxxxx')).xxxxxx(xxxxx');
  });

  test('shows an error message if the form is submitted with empty fields', () => {
    // // เรียกใช้ render LoginForm
    // xxxxx(xxxxx);

    // // คลิกปุ่ม login
    // xxxxx.xxxxx(xxxxx);

    // // ตรวจสอบข้อความ error 'Please enter both username and password' เมื่อไม่ได้ป้อนข้อมูล
    // xxxxx(xxxxx.xxxxx('xxxxx')).xxxxx('xxxxx');
  });
});