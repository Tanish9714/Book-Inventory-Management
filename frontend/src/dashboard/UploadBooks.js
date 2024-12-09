import React from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react';

const UploadBooks = () => {
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

  const [selectedCategories, setSelectedCategories] = useState(bookCategories[0]);

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setSelectedCategories(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
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
  
    console.log(bookData);
  
    fetch('http://localhost:5000/upload-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      alert('Book uploaded successfully!');
      form.reset();
    });
  };
  
  

  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8'>Upload A Book</h2>

      <form onSubmit={handleFormSubmit} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          {/* Book Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name="title" type="text" placeholder="Book Name" required />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image URL" required />
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
          <Textarea className="w-full" id="description" type="text" name="description" placeholder="Write your Book description..." required rows={6}/>
        </div>

        {/* Book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" name="pdfUrl" value="Book PDF URL" />
          </div>
          <TextInput id="pdfUrl" type="text" name="pdfUrl" placeholder="Book PDF URL" required />
        </div>

        <Button type="submit" className='mt-5'>Upload Book</Button>

      </form>
    </div>
  );
};

export default UploadBooks;
