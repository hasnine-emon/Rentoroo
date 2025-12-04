import React from 'react'
import { assets } from '../assets/data'
import Title from './Title'

const Testimonial = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 !pt-36" >
       <Title
              title1={"What People Says"}
              title2={"What People Says"}
              titleStyles={"mb-10"}
              para={"Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."}
            />

            {/* continer */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' >
              <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm' >
                <div className='flexBetween' >
                  <div className='flex gap-1' >
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                  </div>
                  <p>22 sep 2025</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam, error. Ipsum, quam. Aperiam pariatur eius nesciunt 
                  voluptate quos distinctio, quam, veniam a aspernatur odit vitae?</p>
                  <div className='flex items-center gap-2' >
                    <img src={assets.user1} alt="" className='h-8 w-8 rounded-full' />
                    <p className='text-gray-800 font-medium' >John Doe</p>
                  </div>
              </div>

               <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm' >
                <div className='flexBetween' >
                  <div className='flex gap-1' >
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                  </div>
                  <p>22 sep 2025</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam, error. Ipsum, quam. Aperiam pariatur eius nesciunt 
                  voluptate quos distinctio, quam, veniam a aspernatur odit vitae?</p>
                  <div className='flex items-center gap-2' >
                    <img src={assets.user2} alt="" className='h-8 w-8 rounded-full' />
                    <p className='text-gray-800 font-medium' >Donald Jackman</p>
                  </div>
              </div>

               <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm' >
                <div className='flexBetween' >
                  <div className='flex gap-1' >
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                    <img src={assets.star} alt="" width={16}/>
                  </div>
                  <p>22 sep 2025</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam, error. Ipsum, quam. Aperiam pariatur eius nesciunt 
                  voluptate quos distinctio, quam, veniam a aspernatur odit vitae?</p>
                  <div className='flex items-center gap-2' >
                    <img src={assets.user3} alt="" className='h-8 w-8 rounded-full' />
                    <p className='text-gray-800 font-medium' >John Doe</p>
                  </div>
              </div>



            </div>
    </section>
  )
}

export default Testimonial

