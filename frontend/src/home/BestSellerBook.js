import React from 'react'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const BestSellerBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0, 12)))
    }, []);
  return (
    <div>
      <BookCard books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default BestSellerBook
