import { Link } from "react-router";
import {
  Comments,
  Comment,
  Image,
  PostDetailSearch,
  PostMenuActions,
} from "../../components";
import VkIcon from "../../assets/vk-icon.svg";
import TgIcon from "../../assets/tg-icon.svg";

const Post = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sequi
            accusamus odit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Автор</span>
            <Link className="text-primary" to="">
              Иван Иванов
            </Link>
            <span>Категория</span>
            <Link className="text-primary" to="">
              Дизайн
            </Link>
            <span>2 дня назад</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            itaque, nobis dolores necessitatibus ipsam excepturi officia vero
            molestias cumque cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi nemo voluptatibus ducimus ipsa? Hic,
            reprehenderit ad autem quae non architecto?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image path="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify w-4/5">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatum odio perspiciatis laboriosam provident mollitia explicabo
            alias, minus perferendis laudantium, totam ullam! Debitis, eveniet.
            Dolores illum corporis dolorem doloribus molestias cupiditate animi,
            exercitationem odio quasi distinctio. Commodi voluptate officiis
            eligendi explicabo quasi nostrum sit ab quis excepturi qui
            distinctio voluptates vero veniam autem saepe unde atque tempore
            dolorum, numquam deserunt perspiciatis! Voluptates ut voluptas fugit
            aspernatur hic ratione labore est tempore obcaecati quasi in neque
            distinctio quam amet repellat vitae corporis quo architecto iure
            odit, accusamus eum fugiat consectetur assumenda. Nihil dignissimos
            nulla consequuntur molestiae labore eligendi, in illo quibusdam.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quo minima voluptate maxime. Nulla ipsum eaque sint eligendi itaque
            quae, nihil at vel vero. Temporibus odit repudiandae eius qui fugiat
            harum illum eum? Mollitia, illum doloribus rerum vero corrupti quis
            facere magnam nulla iste officiis accusamus dolores blanditiis
            adipisci possimus, illo non repudiandae et molestias modi optio
            maxime? Pariatur modi officiis dolorem inventore minima perspiciatis
            itaque ipsam fugiat recusandae maxime laboriosam enim veritatis in
            quibusdam, accusamus omnis animi consectetur? Dolorum deserunt fuga
            omnis! Necessitatibus eligendi ratione, vitae harum, dignissimos
            voluptate rerum natus consequuntur sapiente hic, maiores quod quidem
            doloribus laborum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quo minima voluptate maxime. Nulla ipsum eaque sint eligendi itaque
            quae, nihil at vel vero. Temporibus odit repudiandae eius qui fugiat
            harum illum eum? Mollitia, illum doloribus rerum vero corrupti quis
            facere magnam nulla iste officiis accusamus dolores blanditiis
            adipisci possimus, illo non repudiandae et molestias modi optio
            maxime? Pariatur modi officiis dolorem inventore minima perspiciatis
            itaque ipsam fugiat recusandae maxime laboriosam enim veritatis in
            quibusdam, accusamus omnis animi consectetur? Dolorum deserunt fuga
            omnis! Necessitatibus eligendi ratione, vitae harum, dignissimos
            voluptate rerum natus consequuntur sapiente hic, maiores quod quidem
            doloribus laborum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quo minima voluptate maxime. Nulla ipsum eaque sint eligendi itaque
            quae, nihil at vel vero. Temporibus odit repudiandae eius qui fugiat
            harum illum eum? Mollitia, illum doloribus rerum vero corrupti quis
            facere magnam nulla iste officiis accusamus dolores blanditiis
            adipisci possimus, illo non repudiandae et molestias modi optio
            maxime? Pariatur modi officiis dolorem inventore minima perspiciatis
            itaque ipsam fugiat recusandae maxime laboriosam enim veritatis in
            quibusdam, accusamus omnis animi consectetur? Dolorum deserunt fuga
            omnis! Necessitatibus eligendi ratione, vitae harum, dignissimos
            voluptate rerum natus consequuntur sapiente hic, maiores quod quidem
            doloribus laborum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quo minima voluptate maxime. Nulla ipsum eaque sint eligendi itaque
            quae, nihil at vel vero. Temporibus odit repudiandae eius qui fugiat
            harum illum eum? Mollitia, illum doloribus rerum vero corrupti quis
            facere magnam nulla iste officiis accusamus dolores blanditiis
            adipisci possimus, illo non repudiandae et molestias modi optio
            maxime? Pariatur modi officiis dolorem inventore minima perspiciatis
            itaque ipsam fugiat recusandae maxime laboriosam enim veritatis in
            quibusdam, accusamus omnis animi consectetur? Dolorum deserunt fuga
            omnis! Necessitatibus eligendi ratione, vitae harum, dignissimos
            voluptate rerum natus consequuntur sapiente hic, maiores quod quidem
            doloribus laborum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quo minima voluptate maxime. Nulla ipsum eaque sint eligendi itaque
            quae, nihil at vel vero. Temporibus odit repudiandae eius qui fugiat
            harum illum eum? Mollitia, illum doloribus rerum vero corrupti quis
            facere magnam nulla iste officiis accusamus dolores blanditiis
            adipisci possimus, illo non repudiandae et molestias modi optio
            maxime? Pariatur modi officiis dolorem inventore minima perspiciatis
            itaque ipsam fugiat recusandae maxime laboriosam enim veritatis in
            quibusdam, accusamus omnis animi consectetur? Dolorum deserunt fuga
            omnis! Necessitatibus eligendi ratione, vitae harum, dignissimos
            voluptate rerum natus consequuntur sapiente hic, maiores quod quidem
            doloribus laborum.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8 w-1/5">
          <h2 className="mb-5 text-xl">Автор</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Image
                path="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <Link to="">Иван Иванов</Link>
            </div>
            <div className="flex items-center gap-2">
              <Link to="">
                <img className="w-6" src={VkIcon} alt="" />
              </Link>
              <Link to="">
                <img className="w-6" src={TgIcon} alt="" />
              </Link>
            </div>
            <PostMenuActions />
            <h2>Категории</h2>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                Все
              </Link>
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                Дизайн
              </Link>
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                Разработка
              </Link>
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                Базы данных
              </Link>
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                SEO
              </Link>
              <Link
                className="hover:text-gray-500 transition-colors ease-in-out"
                to=""
              >
                Маркетинг
              </Link>
            </div>
            <h2>Поиск</h2>
            <PostDetailSearch />
          </div>
        </div>
      </div>
      <Comments />
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Post;
