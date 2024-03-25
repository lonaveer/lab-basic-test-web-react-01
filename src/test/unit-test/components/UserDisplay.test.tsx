import { render, screen, waitFor } from '@testing-library/react';
import UserDisplay from '../../../app/components/UserDisplay';
import { getUser } from '../../../app/utils/userApi';
import { User } from '../../../app/models/types';

// // Mock ฟังก์ชัน getUser จาก userApi
// jest.mock('../../../app/utils/userApi', () => ({
//     xxxxx: jest.fn(),
// }));

test('should display user data after loading', async () => {
    // // กำหนดข้อมูลที่คาดหวังจะได้รับจาก API
    // const mockUser: User = {
    //     name: 'John Doe',
    //     email: 'john@example.com',
    // };

    // // กำหนดให้ฟังก์ชัน getUser ที่ถูก mock คืนค่าข้อมูล mockUser เมื่อถูกเรียก
    // (xxxxx as jest.Mock).mockResolvedValue(xxxxx);

    // // Render คอมโพเนนต์ UserDisplay
    // xxxxx(xxxxx);

    // // รอและตรวจสอบว่าข้อความ "Loading..." ถูกแสดงในระหว่างที่กำลังโหลดข้อมูล
    // expect(screen.getByText(/loading.../i)).xxxxx();

    // // ใช้ waitFor เพื่อรอการอัปเดตของ UI หลังจากข้อมูลถูกโหลด
    // // ฟังก์ชันใน waitFor จะถูกลองเรียกซ้ำจนกว่าจะไม่ throw error
    // await xxxxx(() => {
    //     // ตรวจสอบว่าข้อมูลผู้ใช้ถูกแสดงบนหน้าเว็บ
    //     expect(screen.getByText(mockUser.name)).xxxxx();
    // });

    // // หรือใช้ findByText ในการตรวจสอบข้อมูลหลัง UI Update แทนการใช้ waitFor ก็ได้
    // // เนื่องจาก waitFor ไม่สามารถใส่ expect ได้มากกว่าหนึ่ง
    // const emailDisplay = await screen.findByText(`Email: ${mockUser.email}`);
    // expect(emailDisplay).toBeInTheDocument();

    // หมายเหตุ !!
    // อนาคต : ถ้า React Hook Testing Library นั้นสามารถใช้งานได้ใน React 18
    // แนะนำให้ใช้ renderHook ของ React Hook Testing Library แทน จะสะดวกกว่า
});