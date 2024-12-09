import React from 'react'
import { Table } from "flowbite-react";

const ManageBooks = () => {

  const [allBooks, setAllBooks] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => {
      setAllBooks(data)
    })
  }, [])

  // Delete Book from the database
  const handleDelete = (id) => {
    console.log(id)

    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE'
    }).then(res => res.json()).then(data => {
      alert("Book Deleted Successfully")
      if(data.deleted){
        const newBooks = allBooks.filter(book => book._id !== id)
        setAllBooks(newBooks)
      }
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold mb-8'>Manage Your Books</h2>

      {/* Table for book Data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => (
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$10.00</Table.Cell>
                <Table.Cell>
                  <a href={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </a>
                  <button onClick={()=> handleDelete(book._id)} className="font-semibold px-4 py-1 bg-red-600 text-white rounded-sm hover:bg-sky-600">
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))
        }
      </Table>
      
    </div>
  )
}

export default ManageBooks
