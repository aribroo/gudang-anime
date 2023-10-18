import AnimeList from './components/AnimeList';
import Link from 'next/link';

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const animes = await response.json();

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href={'/'} className="text-xl underline hover:text-indigo-600">
          Lihat semua
        </Link>
      </div>
      <AnimeList animes={animes.data} />;
    </div>
  );
};

export default Home;
