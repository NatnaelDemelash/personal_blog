import React from 'react'
import { Link} from 'react-router-dom'

const Blogs = (props) => {
    const {id, title, desc, categories} = props


  return (
    <div className='max-w-md flex flex-col px-4 py-2 m-4 rounded border-[4px] border-solid border-[#1d2a35] backgroundShadow duration-300'>
        <h2 className='my-2 text-4xl underline max-w-sm pb-3'><Link to={`/blog/${id}`}>{title}</Link></h2>
        <div>
         <p>{desc}</p>
        </div>
        <p>{categories.map((category) =><p className='inline-flex ml-2 px-2 bg-purple-500 text-white rounded my-4'>#{category}</p>)}</p>
    </div>
  )
}

export default Blogs