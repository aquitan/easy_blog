import { createBrowserRouter } from "react-router";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import New from "../pages/new/New";
import Popular from "../pages/popular/Popular";
import Post from "../pages/post/Post";
import PostsList from "../pages/posts/Posts";
import Create from "../pages/create/Create";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new", element: <New /> },
      { path: "/popular", element: <Popular /> },
      { path: "/about", element: <About /> },
      { path: "/post/:slug", element: <Post /> },
      { path: "/posts", element: <PostsList /> },
      { path: "/create", element: <Create /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
