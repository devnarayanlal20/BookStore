import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
import { BASE_URL } from "../services/url";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-4">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-3">
            <span className="text-md mr-4 text-gray-400">ID</span>
            <span>{book._id}</span>
          </div>
          <div className="my-3">
            <span className="text-md mr-4 text-gray-400">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-3">
            <span className="text-md mr-4 text-gray-400">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          {book.about && (
            <div className="my-3">
              <span className="text-md mr-4 text-gray-400">About</span>
              <span>{book.about}</span>
            </div>
          )}
          <div className="my-3">
            <span className="text-md mr-4 text-gray-400">Create Time</span>
            <span>{book.createdAt}</span>
          </div>
          <div className="my-3">
            <span className="text-md mr-4 text-gray-400">Last Update Time</span>
            <span>{book.updatedAt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
