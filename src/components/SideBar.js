import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Profile/downloads">downloads</Link>
        </li>
        <li>
          <Link to="/Profile/dashboard">dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
