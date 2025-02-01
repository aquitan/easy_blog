import { Link } from "react-router";
import { Image } from "../../components/image/Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* imgage */}
        <Image
          w="900"
          path="featured1.jpeg"
          className="rounded-3xl object-cover"
        />
        {/* details */}
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold lg:text-lg">01.</h2>
            <Link to="" className="text-primary lg:text-lg">
              Дизайн
            </Link>
          </div>
          <span className="text-gray-500">2 дня назад</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit. Lorem ipsum dolor sit.
        </Link>
      </div>
      {/* other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            w="300"
            path="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold">02.</h2>
                <Link className="text-primary" to="">
                  Дизайн
                </Link>
              </div>
              <div className="text-gray-500 text-sm">2 дня назад</div>
            </div>
            <Link
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              to=""
            >
              Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            w="300"
            path="featured3.jpeg"
            className="rounded-3xl object-cover  w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold">03.</h2>
                <Link className="text-primary" to="">
                  Дизайн
                </Link>
              </div>
              <div className="text-gray-500 text-sm">2 дня назад</div>
            </div>
            <Link
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              to=""
            >
              Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            </Link>
          </div>
        </div>
        {/* fouth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            w="300"
            path="featured4.jpeg"
            className="rounded-3xl object-cover  w-1/3 aspect-video"
          />
          <div className="w-2/3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold">04.</h2>
                <Link className="text-primary" to="">
                  Дизайн
                </Link>
              </div>
              <div className="text-gray-500 text-sm">2 дня назад</div>
            </div>
            <Link
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              to=""
            >
              Lorem ipsum dolor sit. Lorem ipsum dolor sit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedPosts };
