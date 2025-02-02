import { useState } from "react";
import { PostsList, SideMenu } from "../../components";

const Posts = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Разработка</h1>
      <button
        className="md:hidden bg-primary text-sm text-white rounded-2xl py-1 px-2 mb-4"
        onClick={() => setOpen((prev: boolean): boolean => !prev)}
      >
        {!open ? "Показать фильтр" : "Скрыть фильтр"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostsList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Posts;
