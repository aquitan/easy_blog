import { Link } from "react-router";
import { Image } from "../image/Image";
import { Post } from "../../shared/interface";

const PostPreview = ({
  title,
  desc,
  category,
  createdAt,
  slug,
}: Partial<Post>) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          w="735"
          path="postImg.jpeg"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to="/tes"
          className="text-4xl font-semibold line-clamp-4 md:line-clamp-2 overflow-ellipsis"
        >
          {title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Автор</span>
          <Link className="text-primary" to="">
            Иван Иванов
          </Link>
          <span>Категория</span>
          <Link className="text-primary" to="">
            {category}
          </Link>
          <span>{createdAt}</span>
        </div>
        <div className="line-clamp-5 overflow-ellipsis">{desc}</div>

        <Link
          to={`/post/${slug}`}
          className="text-primary text-sm hover:text-primary-500"
        >
          Читать
        </Link>
      </div>
    </div>
  );
};

export { PostPreview };
