import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/BlogPosts'; // Import your sample blog data

function BlogDetail() {
  const { id } = useParams(); // Get the id from URL parameters
  const blog = blogPosts.find(blog => blog.id === id); // Find the blog post by id

  if (!blog) {
    return <div>Blog post not found.</div>;
  }


  return (
    <div className='max-w-2xl min-h-[70vh] mx-auto my-3 border-[3px] p-5 border-slate-700'>
      <h2 className='text-3xl pb-4 '>{blog.title}</h2>
      <p>{blog.desc}</p>
      {blog.img && <img className='my-3' src={blog.img} />}
      {/* Add additional details here, such as content, author, etc. */}
    </div>
  );
}

export default BlogDetail;
