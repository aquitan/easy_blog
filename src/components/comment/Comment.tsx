import { Image } from "../image/Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-2xl lg:w-3/5 mb-8">
      <div className="flex items-center gap-4">
        <Image
          path="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Иван Иванов</span>
        <span className="text-sm text-gray-500">2 дня назад</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          aliquid, aliquam molestias odit officia maiores sint delectus maxime
          dolorum quas est magni quia quod mollitia? Quis autem optio fugit
          quisquam voluptatum non atque dolorem hic reprehenderit modi ex
          eligendi vitae at, nostrum aut laudantium provident temporibus ducimus
          placeat sequi alias.
        </p>
      </div>
    </div>
  );
};

export { Comment };
