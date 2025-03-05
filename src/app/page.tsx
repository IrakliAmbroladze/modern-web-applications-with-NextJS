"use client";

import { useEffect, useState } from "react";

const HomePage = () => {
  return <App />;
};

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetData() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    }
    fetData();
  }, [url]);
  return { data, loading };
}

function App() {
  const { data, loading } = useFetch("https://dummyjson.com/posts");
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          Data:
          {JSON.stringify(data)}
        </p>
      )}
    </div>
  );
}

export default HomePage;
