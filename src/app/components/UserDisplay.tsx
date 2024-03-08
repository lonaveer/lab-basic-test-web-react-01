import React, { useState, useEffect } from 'react';
import { User } from '../models/types';
// สมมติ getUser คือฟังก์ชันที่เรียก API เพื่อรับข้อมูลผู้ใช้
// ในที่นี้เราจะไม่ใช้งานจริง ๆ แต่จะ mock การทำงานของมันในไฟล์ทดสอบแทน
import { getUser } from '../utils/userApi';

const UserDisplay: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData: User = await getUser();
      setUser(userData);
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default UserDisplay;