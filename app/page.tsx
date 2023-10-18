import Header from './components/AnimeList/Header';
import AnimeList from './components/AnimeList';

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`);
  const TopAnimes = await response.json();

  return (
    // Anime Terpopuler
    <section>
      <Header title={'Paling Populer'} linkHref={`/populer`} linkTitle={'Lihat Semua'} />
      <AnimeList api={TopAnimes.data} />;
    </section>
  );
};

export default Home;
