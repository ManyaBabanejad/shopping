import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* دکمه منو */}
      <button className="menu-btn" onClick={() => setOpen(true)}>
        ☰ منو
      </button>

      {/* نوار منو */}
      <div className={`sidebar ${open ? "show" : ""}`}>

        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>

        <Link to="/" onClick={() => setOpen(false)}>صفحه اصلی</Link>
        <Link to="/products" onClick={() => setOpen(false)}>محصولات</Link>
        <Link to="/about" onClick={() => setOpen(false)}>درباره ما</Link>
        <Link to="/login" onClick={() => setOpen(false)}>ورود</Link>
      </div>

      {/* تار کردن صفحه */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}></div>
      )}
    </>
  );
}
