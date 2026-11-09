import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { useRouter } from '../context/RouterContext';
import { RevealHeading } from './Reveal';

export const Writing: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <section id="writing" className="v3-section">
      <div className="v3-wrap v3-split">
        <div className="v3-split-head">
          <RevealHeading>Writing</RevealHeading>
          <p className="v3-mute">Notes from production work.</p>
          <p><button type="button" className="v3-link" onClick={() => navigate('/blog')}>All posts</button></p>
        </div>
        <div className="v3-posts">
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <button type="button" key={p.slug} className="v3-post" onClick={() => navigate(`/blog/${p.slug}`)}>
              <b>{p.title}</b>
              <span>{p.date}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
