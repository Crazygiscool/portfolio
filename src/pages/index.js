import api from '../lib/ghost';

export async function getStaticProps() {
  const posts = await api.posts.browse({ limit: 5 });
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
