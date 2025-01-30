import { useState } from 'react';
import { Image } from '../image/Image';


const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image path="logo_easy_blog.svg" className="w-8 h-8" alt='Logo' />
        <span>EasyBlog</span>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Главная</a>
        <a href="">Новое</a>
        <a href="">Популярное</a>
        <a href="">О нас</a>
        <a href="">
          <button className="py-2 px-4 rounded-2xl bg-amber-500 text-white">
            Войти{" "}
          </button>
        </a>
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
          <a href="">Главная</a>
          <a href="">Новое</a>
          <a href="">Популярное</a>
          <a href="">О нас</a>
          <a href="">
            <button className="py-2 px-4 rounded-2xl bg-amber-500 text-white">
              Войти
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export {Navbar};