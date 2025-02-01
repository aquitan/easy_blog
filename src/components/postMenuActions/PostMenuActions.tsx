import TrashIcon from "../../assets/trash.svg";
import BookmarkIcon from "../../assets/bookmark.svg";

const PostMenuActions = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <button className="flex gap-2 items-center">
        <img className="w-6" src={BookmarkIcon} alt="" />
        <span className="text-sm">Сохранить</span>
      </button>
      <button className="flex gap-2 items-center">
        <img className="w-6" src={TrashIcon} alt="" />
        <span className="text-sm">Удалить</span>
      </button>
    </div>
  );
};

export { PostMenuActions };
