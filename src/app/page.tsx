'use client'
import { useState } from "react";
import List from "./list";
import SearchBar from "./searchBar";
import Heading from "./heading";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {

    const term = e.target.value;
    const termCapitalize = term.charAt(0).toUpperCase() + term.slice(1);

    setSearchTerm(termCapitalize)
  }

  return (
    <div className="container flex flex-col space-y-4 mx-auto px-8">
      <Heading />
      <SearchBar handleSearch={handleSearch} />
      <List props={searchTerm}/> 
    </div>  
  );
}
