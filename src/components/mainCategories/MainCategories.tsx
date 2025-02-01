import { Link } from "react-router";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-2xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-primary text-white px-4 py-1 rounded-full"
        >
          Все посты
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-primary-50 text-text px-4 py-1 rounded-full"
        >
          Дизайн
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-primary-50 text-text px-4 py-1 rounded-full"
        >
          Разработка
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-primary-50 text-text px-4 py-1 rounded-full"
        >
          Базы данных
        </Link>

        <Link
          to="/posts?cat=seo"
          className="hover:bg-primary-50 text-text px-4 py-1 rounded-full"
        >
          SEO
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-primary-50 text-text px-4 py-1 rounded-full"
        >
          Маркетинг
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <input className="pl-2" type="text" placeholder="Найти пост" />
      </div>
    </div>
  );
};

export { MainCategories };
