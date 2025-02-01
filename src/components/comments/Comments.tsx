const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h2 className="text-xl text-gray-500 underline">Комментарии</h2>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          className="w-full p-4 rounded-2xl bg-white"
          placeholder="Напиши комментарий..."
          name=""
          id=""
        />
        <button className="bg-primary text-white px-4 py-3 font-medium rounded-2xl">
          Отправить
        </button>
      </div>
    </div>
  );
};

export { Comments };
