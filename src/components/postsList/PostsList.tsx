import { useQuery } from "@tanstack/react-query";
import { Post } from "../../shared/interface";
import { PostPreview } from "../postPreview/PostPreview";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return response.data;
};

const PostsList = () => {
  const { isPending, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  return (
    <div className="flex w-full flex-col gap-12 mb-8">
      {isPending && <div>Loading...</div>}
      {data &&
        data.posts.map((post: Post) => (
          <PostPreview
            key={post.slug}
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            slug={post.slug}
          />
        ))}
    </div>
  );
};

export { PostsList };
