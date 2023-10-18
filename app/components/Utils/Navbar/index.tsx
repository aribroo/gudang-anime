import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-indigo-600">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/">
          <h3 className="text-white font-bold text-2xl">Gudang Anime</h3>
        </Link>
        <input type="text" placeholder=" Search anime.." className="border-r-2" />
      </div>
    </header>
  );
};

export default Navbar;
