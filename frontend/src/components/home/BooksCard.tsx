import React from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

interface Book {
  _id: string;
  title: string;
  author: string;
  publishYear: string;
}

interface BooksCardProps {
  books?: Book[];
}

const BooksCard: React.FC<BooksCardProps> = ({ books = [] }) => {
  // Ensure books is an array
  if (!Array.isArray(books)) {
    return <div>No books available</div>;
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;

