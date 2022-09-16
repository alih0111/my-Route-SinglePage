import React from "react";

export default function PostPage(props) {
  const id = props.match.params.id || 1;
  return (
    <div>
      <h2>Post detail - {id}</h2>
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  );
}
