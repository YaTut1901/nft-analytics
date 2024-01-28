import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigate(searchTerm ? `/explore?query=${searchTerm}` 
                            : '/explore');
      }
    };

    return (
        <form>   
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-white opacity-70" 
                   aria-hidden="true" 
                   xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 20 20">
                <path stroke="currentColor" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" 
                   onChange={ (e) => setSearchTerm(e.target.value) }
                   onKeyDown={ handleSearch }
                   class="block w-80 p-1.5 ps-10 text-sm rounded-full outline-none bg-indigo-900 bg-opacity-40 border-gray-900 border-opacity-10 border-2 focus:border-opacity-40 transition duration-300 placeholder:text-white placeholder:opacity-30" 
                   placeholder="Search for Collections, NFTs and more..." 
                   required>
            </input>
          </div>
        </form>
    );
}

export default Search;