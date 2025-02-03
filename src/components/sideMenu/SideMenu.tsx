import { Link } from "react-router";
import { PostDetailSearch } from "../postDetailSearch/PostDetailSearch";

const SideMenu = () => {
  return (
    <div className="flex h-max flex-col sticky top-8">
      <h2 className="mb-2 text-sm font-medium">Поиск</h2>
      <div className="">
        <PostDetailSearch />
      </div>
      <h2 className="mb-2 mt-2 text-sm font-medium">Фильтры</h2>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-primary cursor-pointer rounded-sm checked:bg-primary"
          />
          Новинки
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-primary cursor-pointer rounded-sm checked:bg-primary"
          />
          Популярное
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="tranding"
            className="appearance-none w-4 h-4 border-[1.5px] border-primary cursor-pointer rounded-sm checked:bg-primary"
          />
          Тренды
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-primary cursor-pointer rounded-sm checked:bg-primary"
          />
          Старое
        </label>
      </div>
      <h2 className="mb-2 mt-2 text-sm font-medium">Категории</h2>
      <div className="flex flex-col gap-2 text-sm">
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts"
        >
          Все
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts?cat=web-design"
        >
          Веб Дизайн
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts?cat=development"
        >
          Разработка
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts?cat=databases"
        >
          Базы данных
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts?cat=seo"
        >
          СЕО
        </Link>
        <Link
          className="hover:text-gray-500 transition-colors ease-in-out"
          to="/posts?cat=marketing"
        >
          Маркетинг
        </Link>
      </div>
    </div>
  );
};

export { SideMenu };
