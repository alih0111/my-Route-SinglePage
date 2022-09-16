import Blog from "./components/Blog";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/profile", component: Profile },
  { path: "/about-us", component: AboutUsPage },
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
