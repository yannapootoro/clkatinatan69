# กฐินทาน 2569 — Homepage

โปรเจกต์ Next.js สำหรับนำขึ้น Vercel

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## Deploy บน Vercel

1. สร้าง Git repository แล้วอัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้
2. เข้า Vercel แล้วเลือก **Add New → Project**
3. Import repository
4. กด Deploy ได้เลย (Framework: Next.js)

## เพิ่มฟอนต์

- วางไฟล์ฟอนต์ Was MarinaNP ที่ได้รับอนุญาตให้ใช้งานไว้ใน `public/fonts/`
- ตั้งชื่อไฟล์เป็น `WasMarinaNP.woff2` (หรือ `.woff`) ตามที่กำหนดใน `app/globals.css`
- ฟอนต์ Sukhumvit Set ตั้งค่าไว้ผ่าน Google Fonts หากมีไฟล์ฟอนต์ใช้งานเอง แนะนำให้วางไว้ใน `public/fonts/` และเปลี่ยน `@import` เป็น `@font-face` เพื่อให้ควบคุมเวอร์ชันและการโหลดได้แน่นอน

## ปรับรายการเมนู

แก้ข้อความและลิงก์ใน array `pages` ที่ `app/page.tsx` ได้เลย ตอนนี้ลิงก์เป็น anchor placeholder สำหรับพัฒนาหน้าย่อยภายหลัง
