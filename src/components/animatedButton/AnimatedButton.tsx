import { Link } from "react-router";

const AnimatedButton = () => {
  return (
    <Link to="/create" className="hidden md:block relative">
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        className="text-sm tracking-widest rotate ease-in-out animate-spin animatedButton"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
        <text>
          <textPath href="#circlePath" startOffset="0%">
            Создай свою историю *
          </textPath>
          <textPath href="#circlePath" startOffset="50%">
            Поделись своми мыслями *
          </textPath>
        </text>
      </svg>
      <button className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 m-auto w-25 h-25 bg-primary rounded-full flex items-center justify-center hover:scale-110 ease-in-out transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 6 18 6 18 15" />
        </svg>
      </button>
    </Link>
  );
};

export { AnimatedButton };
