import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg'


import './review.css';

// import required modules
import { Pagination } from 'swiper/modules';
import {FaStar} from 'react-icons/fa6'

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div className='review'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5 text-black font-light text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates architecto quis neque labore, est asperiores? Cupiditate laboriosam et sequi aspernatur qui asperiores similique quisquam! Impedit reprehenderit eum distinctio molestias.</p>
                    <Avatar img={proPic} rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium text-black text-left'>Mark Ping</h5>
                    <p className='text-black font-light text-left'>CEO, Ping Inc.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5 text-black font-light text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates architecto quis neque labore, est asperiores? Cupiditate laboriosam et sequi aspernatur qui asperiores similique quisquam! Impedit reprehenderit eum distinctio molestias.</p>
                    <Avatar img={proPic} rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium text-black text-left'>Mark Ping</h5>
                    <p className='text-black font-light text-left'>CEO, Ping Inc.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5 text-black font-light text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates architecto quis neque labore, est asperiores? Cupiditate laboriosam et sequi aspernatur qui asperiores similique quisquam! Impedit reprehenderit eum distinctio molestias.</p>
                    <Avatar img={proPic} rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium text-black text-left'>Mark Ping</h5>
                    <p className='text-black font-light text-left'>CEO, Ping Inc.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5 text-black font-light text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates architecto quis neque labore, est asperiores? Cupiditate laboriosam et sequi aspernatur qui asperiores similique quisquam! Impedit reprehenderit eum distinctio molestias.</p>
                    <Avatar img={proPic} rounded className='w-10 mb-4' />
                    <h5 className='text-lg font-medium text-black text-left'>Mark Ping</h5>
                    <p className='text-black font-light text-left'>CEO, Ping Inc.</p>
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
    </div>
  )
}

export default Review
