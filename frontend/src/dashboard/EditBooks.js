import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react';

const EditBooks = () => {
  const { id } = useParams();
  const [bookData, setBookData] = React.useState(null);

  // Define bookCategories before using them
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Horror",
    "Thriller",
    "Romance",
    "Biography",
    "Autobiography",
    "Self-Help",
    "Cookbook",
    "Health",
    "History",
    "Travel",
    "Guide",
    "Children",
    "Young Adult",
    "Poetry",
    "Comics",
    "Art",
    "Photography",
  ];

  // Initialize selectedCategories with the first category
  const [selectedCategories, setSelectedCategories] = useState(bookCategories[0]);

  React.useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBookData(data);
        } else {
          throw new Error('Failed to fetch book data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };

  }, [id]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  const { title, imageUrl, authorName, description, pdfUrl } = bookData;

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setSelectedCategories(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookData = {
      title,
      authorName,
      imageUrl,
      category,
      description,
      pdfUrl,
    };

    // console.log(bookData);
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Book Updated Successfully');
        // console.log(data);
      });
  };



  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8'>Update the Book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          {/* Book Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name="title" type="text" placeholder="Book Name" defaultValue={title} required />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image URL" defaultValue={imageUrl} required />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select id="inputState" name="categoryName" className='w-full rounded-md border border-gray-300 text-gray-500 bg-gray-50' value={selectedCategories}
              onChange={handleCategoryChange}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
        </div>

        {/* Description*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" name="description" value="Book Description" />
          </div>
          <Textarea className="w-full" id="description" type="text" name="description" placeholder="Write your Book description..." required rows={6} defaultValue={description} />
        </div>

        {/* Book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" name="pdfUrl" value="Book PDF URL" />
          </div>
          <TextInput id="pdfUrl" type="text" name="pdfUrl" placeholder="Book PDF URL" defaultValue={pdfUrl} required />
        </div>

        <Button type="submit" className='mt-5'>Update Book</Button>

      </form>
    </div>
  );
}
export default EditBooks
