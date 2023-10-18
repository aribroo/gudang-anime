'use client';
import { useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

const InputSearch = () => {
  const searchRef = useRef('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  const handleInputClick = () => {
    if (searchRef.current) {
      searchRef.current.select();
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="relative">
        <input onClick={handleInputClick} type="text" placeholder="Search anime.." ref={searchRef} className="p-1 rounded-sm w-full font-medium ps-2" />

        <button className="absolute top-[3px] end-1" onClick={handleSearch}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
