import { blogPosts } from '../data/BlogPosts';
import { weblinks } from '../data/WebLinks';
import Blogs from './Blogs';
import WebLink from './WebLink';

const HomePage = () => {
  return (
    <main className="container mx-auto px-4 pt-10">
        <div className='flex gap-6'>
        <section>
            <h1 className='uppercase font-semibold text-4xl mx-6'>Recent Blog Posts</h1>
            {blogPosts.map((blog) => (
            <Blogs key={blog.id} id={blog.id} title={blog.title} desc={blog.desc} categories={blog.categories}/>
            ))}
        </section>

        <section>
            <h1 className='uppercase font-semibold text-4xl mx-6'>Around the Web</h1>
            {weblinks.map((weblink, index) => (
            <WebLink key={index} title={weblink.title} link={weblink.link}/>
            ))}
        </section>
        </div>
    </main>
  )
}

export default HomePage