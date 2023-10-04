import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className=" border-2 boder-gray-500 rounded-lg px-4 py-2 m-4  hover:shadow-xl">
      <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500"></h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-3xl" />
        <h2 className="my-2">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-3xl" />
        <h2 className="my-2">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <BiShow
          className="text-3xl text text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>
      {showModel && (
        <BookModel
          book={book}
          onclose={() => {
            setShowModel(false);
          }}
        />
      )}
    </div>
  );
};

export default BookSingleCard;
