import { render, screen } from '@testing-library/react';
import LoginButton from '../../../app/components/LoginButton';

test('Login button should be visible, have correct text, and be disabled by default', () => {
    // ใช้คำสั่ง render component "LoginButton" ด้วย default props
    render(<LoginButton />);

    // ใช้คำสั่ง screen.getByRole ในการค้นหาปุ่มที่มีคำว่า login โดยไม่สนอักษรตัวใหญ่ตัวเล็ก
    const button = screen.getByRole('button', { name: /login/i });

    // ตรวจสอบข้อความในปุ่มที่ค้นหาเจอจากโค้ดบรรทัดบน ว่าใช่คำว่า "Login" หรือไม่
    expect(button).toHaveTextContent('Login');

    // ตรวจสอบว่าปุ่มมองเห็นได้
    expect(button).toBeVisible();

    // ตรวจสอบว่าปุ่มถูกปิดการใช้งาน
    expect(button).toHaveAttribute('disabled');
});

test('Login button should respect props', () => {
    // ใช้คำสั่ง render component "LoginButton" โดยกำหนด props ให้ buttonText เป็น "Submit" และ disabled เป็น false
    render(<LoginButton buttonText="Submit" disabled={false} />);

    // ใช้คำสั่ง screen.getByRole ในการค้นหาปุ่มที่มีคำว่า submit โดยไม่สนอักษรตัวใหญ่ตัวเล็ก
    const button = screen.getByRole('button', { name: /submit/i });

    // ตรวจสอบข้อความตาม props buttonText
    expect(button).toHaveTextContent('Submit');

    // ตรวจสอบว่าปุ่มมองเห็นได้
    expect(button).toBeVisible();

    // ตรวจสอบว่าปุ่มไม่ถูกปิดการใช้งาน
    expect(button).not.toHaveAttribute('disabled');
});