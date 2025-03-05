"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  return <App />;
};

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading };
}

function App() {
  const [postId, setPostId] = useState(1);
  const { data, loading } = useFetch(`https://dummyjson.com/posts/${postId}`);

  return (
    <div>
      <h1>Fetch Posts</h1>
      <button onClick={() => setPostId((prev) => prev + 1)}>Next Post</button>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default HomePage;
