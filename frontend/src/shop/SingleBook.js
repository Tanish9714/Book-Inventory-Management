import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = React.useState(null);

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

  const { title, imageUrl, authorName, description, pdfUrl, category } = bookData;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto px-5 lg:px-24 py-12">
        <div className="flex flex-wrap -m-4 mt-10">
          <div className="lg:w-1/2 md:w-2/4 w-full p-4 shadow-md">
            <div className='flex justify-center items-center bg-gray-100 py-4 rounded'>
              <img src={imageUrl} alt="" className="w-80 h-auto object-cover object-center" />
            </div>

          </div>
          <div className="lg:w-1/2 md:w-2/4 w-full p-4">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-3"> By {authorName}</h2>
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500 mt-1 mr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
              <span className="text-gray-600">4 Reviews</span>
            </div>
            <p className="leading-relaxed mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <div className="flex">
                <span className="mr-2 font-semibold">Quantity:</span>
                <div className="relative">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    placeholder='1'
                    className="w-12 h-6 pl-3 pr-1 text-center bg-gray-100 border rounded focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="title-font font-medium text-2xl text-gray-900 mt-3">$10.00</span>
              {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-3">Add to Cart</button> */}
              <button className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-3 ml-8">
                <a href={pdfUrl} target="_blank" rel="noreferrer">Read Book</a>
              </button>
              

              
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
