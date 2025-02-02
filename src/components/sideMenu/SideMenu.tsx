import { Link } from "react-router";
import { PostDetailSearch } from "../postDetailSearch/PostDetailSearch";

const SideMenu = () => {
  return (
    <div className="flex h-max flex-col sticky top-8">
      <h2 className="mb-2 text-sm font-medium">Поиск</h2>
      <div className="">
        <PostDetailSearch />
      </div>
      <h2 className="mb-2 text-sm font-medium">Фильтры</h2>
      <h2 className="mb-2 text-sm font-medium">Категории</h2>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
        <Link to="/posts">Все</Link>
      </div>
    </div>
  );
};

export { SideMenu };
