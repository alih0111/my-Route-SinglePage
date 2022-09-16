import { Link } from "react-router-dom";

const items = [
  { name: "Blog -1", to: "/blogs/1" },
  { name: "Blog -2", to: "/blogs/2" },
  { name: "Blog -3", to: "/blogs/3" },
];
export default function BlogPage() {
  return (
    <div>
      <h2>Blog Page</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={{ pathname: item.to, search: "sort=name" }}>
              {item.name}
            </Link>
            {/* <Link to={item.to}>{item.name}</Link> */}
          </li>
        );
      })}
    </div>
  );
}
