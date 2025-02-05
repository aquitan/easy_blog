import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Post } from "../../shared/interface";
import { SyntheticEvent, useState } from "react";

const Create = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState<string>("");
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost: Partial<Post>) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const submitForm = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate({
      title: formData.get("title") as string,
      desc: formData.get("desc") as string,
      category: formData.get("category") as string,
      content: content,
    });
  };

  if (!isLoaded) {
    return <div>Загрузка...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Вам нужно авторизоваться</div>;
  }

  return (
    <div className="h-[calc(100vh-63px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Создать новый пост</h2>
      <form
        onSubmit={submitForm}
        action=""
        className="flex flex-col gap-6 flex-1 mb-6"
      >
        <button className="bg-primary text-white shadow-md text-sm px-4 py-1 rounded-xl w-fit">
          Добавь превью
        </button>
        <input
          name="title"
          type="text"
          placeholder="Заголовок"
          className="text-4xl font-semibold outline-0 bg-transparent"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Выбери категорию
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">Общие</option>
            <option value="web-design">Дизайн</option>
            <option value="development">Разработка</option>
            <option value="databases">Базы данных</option>
            <option value="seo">СЕО</option>
            <option value="marketing">Маркетинг</option>
          </select>
        </div>
        <textarea
          name="desc"
          id=""
          placeholder="Краткое описание"
          className="p-2 rounded-xl bg-white shadow-md"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md border-0"
        />
        <button className="bg-primary text-white py-2 px-6 w-36 rounded-2xl">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Create;
