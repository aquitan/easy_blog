import { Link } from "react-router";
import {
  AnimatedButton,
  FeaturedPosts,
  MainCategories,
  PostsList,
} from "../../components";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMPS */}
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-primary">
          Главная
        </Link>
        <span>/</span>
        <span className="text-primary">Блоги и посты</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur dolorem sed quia!
          </p>
        </div>
        {/* animated btn */}
        <AnimatedButton />
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div>
        <h2 className="my-8 text-2xl text-gray-600">Недавние посты</h2>

        <PostsList />
      </div>
    </div>
  );
};

export default Home;
