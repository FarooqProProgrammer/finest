import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({img}) {
    return (
        <article className="flex flex-col dark:bg-gray-900">
            <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={img} />
            </Link>
            <div className="flex flex-col flex-1 p-6 bg-white">
                <Link rel="noopener noreferrer" to="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                <Link rel="noopener noreferrer" to="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span className='text-orange-500 cursor-pointer'>Learn More</span>
                </div>
            </div>
        </article>
    )
}
