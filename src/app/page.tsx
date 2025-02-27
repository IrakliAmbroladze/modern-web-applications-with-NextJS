export default async function HomePage() {
  let data;

  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) throw new Error("API request failed");
    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <div>
      <h1>Title is: {data.posts[0].title}!</h1>
    </div>
  );
}
