import React from 'react'
import SetBg from './SetBg'

const BlogCard = ({data}) => {
  return (
    <article>
        <section className='relative pt-37 px-37 flex flex-col gap-6'>
            {
                data.map(info=>{
                    return(
                        <>
                        <article className='flex flex-wrap h-auto gap-6 max-w-full
                        justify-between'>

                                 <section className=' relative bg-red-300 h-75 w-1/2'>
            
                                    <SetBg bg = {info.img}/>
                                 </section>
                                 <section className='w-[47%] flex flex-col justify-center '>

                            
                                        <q  className='font-bold text-2xl'>
                                            {info.heading}
                                        </q>

                                        <p className='text-[#465b52] pt-4 pb-5 leading-1.2 font-semibold '>
                                            {info.description}
                                        </p>
                                        
                                        <a href='#'
                                        className='text-3 font-bold hover:[#08178]'
                                        >
                                            Continue Reading
                                        </a>

                                 </section>
                        </article>
                        
                        </>
                    )
                })
            }
        </section>
    </article>
  )
}

export default BlogCard
