'use client';

import { useState } from 'react';
import { Button } from '@radix-ui/themes';
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";

export default function NumberNavigator() {
  const [page, setPage] = useState(1);
  const maxPage = 99; // you can change this!

  const handleLeft = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRight = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= maxPage) {
      setPage(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Left Arrow Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleLeft} 
        disabled={page === 1}
        className="rounded-md bg-white/10 hover:bg-white/20 transition disabled:opacity-50"
      >
        <ArrowLeftIcon className="w-5 h-5" />
      </Button>

      {/* Number Input */}
      <input
        type="number"
        min="1"
        max={maxPage}
        value={page}
        onChange={handleInputChange}
        className="w-14 text-center bg-black/20 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-gray-800 [appearance:textfield]"
      />

      {/* Right Arrow Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleRight} 
        disabled={page === maxPage}
        className="rounded-md bg-white/10 hover:bg-white/20 transition disabled:opacity-50"
      >
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
