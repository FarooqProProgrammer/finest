import React from 'react'
import BlogCard from '../../common/BlogCard'

export default function Blog() {
    return (
        <section className="py-6 sm:py-12 bg-[#DCEAF5] ">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-start">
                    <h2 className="text-3xl font-bold">Latest Blog & News</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                  <BlogCard img={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'} />
                  <BlogCard img={'https://plus.unsplash.com/premium_photo-1661475877403-ce2e772fea2e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'} />
                  <BlogCard img={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'} />
                  <BlogCard img={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D'} />
                  

                </div>
            </div>
        </section>
    )
}
