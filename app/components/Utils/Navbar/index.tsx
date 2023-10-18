import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="bg-indigo-600">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/">
          <h3 className="text-white font-bold text-2xl">Gudang Anime</h3>
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
