import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BookCard.css';

const BookCard = ({ headline, books }) => {

  const handleCart = (bookId) => {
    // Find the book based on its ID
    const bookToAddToCart = books.find(book => book._id === bookId);
    if (bookToAddToCart) {
      // Get existing cart items from local storage or initialize as an empty array
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      // Add the new book to the cart
      existingCartItems.push(bookToAddToCart);
      // Save updated cart items back to local storage
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      // Optionally, you can provide feedback to the user that the item has been added to the cart
      alert('Book added to cart!');
    }
  }

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* cards */}
      <div className='card mt-12 '>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book =>
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative bg-gray-100 py-4 px-4 rounded'>
                  <img src={book.imageUrl} alt="" />
                  <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping onClick={() => handleCart(book._id)} className='w-4 h-4 text-white'/>
                  </div>
                </div>
                <div>
                  <div className='text-black font-light text-left'>
                  <h3 >{book.title}</h3>
                  <p >{book.authorName}</p>
                  <div>
                    <p >$10.00</p>
                  </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      </div>
  );
};

export default BookCard;
