import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/BlogPosts'; // Import your sample blog data
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function BlogDetail() {
  const { id } = useParams(); // Get the id from URL parameters
  const blog = blogPosts.find((blog) => blog.id === id); // Find the blog post by id

  const { codeSnippet, moreDescription } = blog;

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="max-w-2xl min-h-[70vh] absolute top-20 left-0 right-0 mx-auto my-3 border-[3px] p-5 border-slate-700">
      <h2 className="text-3xl pb-4 ">{blog.title}</h2>
      <p>{blog.desc}</p>
      {blog.img && <img className="my-3" src={blog.img} />}

      <div>
        {moreDescription && <div className="my-4">{moreDescription}</div>}
      </div>
      <div>
        {codeSnippet &&
          Object.keys(codeSnippet).map((key) => (
            <div key={key}>
              <SyntaxHighlighter
                language={codeSnippet[key].language}
                style={darcula}
              >
                {codeSnippet[key].code}
              </SyntaxHighlighter>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlogDetail;
