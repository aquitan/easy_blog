import { useState } from 'react';
import { Image } from '../image/Image';
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image path="logo_easy_blog.svg" className="w-8 h-8" alt="Logo" />
        <span>EasyBlog</span>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Главная</Link>
        <Link to="/new">Новое</Link>
        <Link to="/popular">Популярное</Link>
        <Link to="/about">О нас</Link>
        <Link to="">
          <button className="py-2 px-4 rounded-2xl bg-amber-500 text-white">
            Войти{" "}
          </button>
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out`}
        >
          <Link to="/">Главная</Link>
          <Link to="/new">Новое</Link>
          <Link to="/popular">Популярное</Link>
          <Link to="/about">О нас</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-2xl bg-amber-500 text-white">
              Войти{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export {Navbar};