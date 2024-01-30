'use client';
import { useRef } from "react";
import { MdSearch } from "react-icons/md";

interface props {
  searcher: ( e: React.ChangeEvent<HTMLInputElement>) => void
  search: string
  }
export const InputSearch = ({searcher, search}: props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <>
      <span className="relative top-4 left-14" onClick={handleClick}>
        <MdSearch size={25} />
      </span>
      <input
        type="search"
        ref={inputRef}
        onClick={handleClick}
        className="p-4 pl-[75px] bg-components shadow-lg w-[420px] placeholder:text-textColor rounded-lg placeholder:font-light font-light"
        placeholder="Search for a country..."
        value={search}
        onChange={searcher}
      />
    </>
  );
};
