// นำเข้า type User จากไฟล์ types
import { User } from '../models/types';

// ฟังก์ชัน getUser จำลองการเรียกข้อมูลผู้ใช้จาก API
// ในตัวอย่างนี้จะเป็นการส่งคืนข้อมูลจำลอง ไม่มีการเรียก API จริง
export const getUser = async (): Promise<User> => {
  // จำลองการเรียกข้อมูลผู้ใช้ด้วย Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: 'john@example.com',
      });
    }, 1000); // จำลองการ delay 1 วินาทีก่อนส่งคืนข้อมูล
  });
};
