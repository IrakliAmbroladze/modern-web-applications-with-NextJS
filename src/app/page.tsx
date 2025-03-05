const getData = async (postId: number) => {
  const res = await fetch(`https://dummyjson.com/posts/${postId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home({
  searchParams,
}: {
  searchParams: { postId?: string };
}) {
  const postId = searchParams?.postId ? parseInt(searchParams.postId, 10) : 1;
  const data = await getData(postId);

  return (
    <div>
      <h1>Server-Side Fetching</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <a href={`/?postId=${postId + 1}`}>
        <button>Next Post</button>
      </a>
    </div>
  );
}
