import { withPosts } from "./withEntities";

export const PostsList = withPosts(({ posts }) => {
  if (posts.isLoading) {
    return <div>Posts Loading...</div>;
  }

  if (posts.error) {
    return <div>{posts.error}</div>;
  }

  return (
    <>
      <div>
        <h3>Posts</h3>
        <ul>
          {posts.data.length === 0 && <li>No posts found</li>}
          {posts.data.map((post) => (
            <li key={post.id}>
              {post.title} ({post.body}) - {post.userId}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});
