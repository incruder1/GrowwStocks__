"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  var [click,setClick]=useState(false);
  const handleInputChange = async (e) => {
    const inputValue = e.target.value.trim();
    setSearchQuery(inputValue);
    console.log("inputValue", inputValue);
    // Fetch products from the server based on search query
    if (inputValue.length > 0) {
      await axios.get(`/api/tickerSearch?keywords=${inputValue}`)
        // .then(res=>res.json())
        .then((res) => {
          setSuggestions(res.data.name);
        });
    } else {
      setSuggestions([]);
    }
  };

  return (
   <div className="relative z-50 mx-5 ">
      <input
        type="text"
        className="my-3 block w-full appearance-none text-gray-600 rounded-full bg-gray-200 py-2 px-10 pl-10 align-top leading-normal focus:border-gray-500 focus:bg-white focus:outline-none"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="absolute top-1.5 right-2 mt-1.5 ml-3">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15.5 15.5L20 20M15.5 9.5C15.5 12.5376 12.5376 15.5 9.5 15.5C6.46243 15.5 3.5 12.5376 3.5 9.5C3.5 6.46243 6.46243 3.5 9.5 3.5C12.5376 3.5 15.5 6.46243 15.5 9.5Z"></path>
        </svg>
      </div>

      {suggestions.length > 0 && (
        <ul
          id="suggestionsList"
          className="bg-white flex flex-col border p-2 rounded-xl mt-4"
        > 
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
          {suggestions.map((product, key) => (
            <Link href={`/stocks/${product["2. name"]}`} key={product["1. symbol"]} passHref>
              <li
                className="hover:bg-black hover:text-white p-2 rounded-xl"
                key={key}
              >
                {product["2. name"]}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
