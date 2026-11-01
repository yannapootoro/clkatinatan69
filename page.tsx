 "use client";

import { useState } from "react";

const pages = [
  { label: "หน้าแรก", href: "#home" },
  { label: "กำหนดการ", href: "#schedule" },
  { label: "ประวัติความเป็นมา", href: "#history" },
  { label: "ร่วมทำบุญ", href: "#donate" },
  { label: "ติดต่อ", href: "#contact" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="page-shell">
      <header className="hero">
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <h1 className="hero-title">กฐินทาน 2569</h1>

        <nav id="site-menu" className={`menu-panel${menuOpen ? " menu-visible" : ""}`} aria-hidden={!menuOpen}>
          {pages.map((page, index) => (
            <a
              key={page.href}
              href={page.href}
              className="menu-link"
              style={{ "--item-index": index } as React.CSSProperties}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="empty-content" aria-label="พื้นที่เนื้อหา">
        {/* เตรียมพื้นที่สำหรับพัฒนาเนื้อหาหน้าเว็บในขั้นตอนถัดไป */}
      </section>
    </main>
  );
}
