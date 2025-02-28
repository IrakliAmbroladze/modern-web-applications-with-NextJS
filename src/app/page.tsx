"use client";

import { useEffect, useState } from "react";

interface PostData {
  posts: [{ title: string }];
}

function HomePage() {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>{data.posts[0] && <h1>Title is: {data.posts[0].title}!</h1>}</div>
  );
}

export default HomePage;
