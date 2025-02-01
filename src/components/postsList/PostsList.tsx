import { PostPreview } from "../postPreview/PostPreview";

const PostsList = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </div>
  );
};

export { PostsList };
