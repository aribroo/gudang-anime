import AnimeList from '@/app/components/AnimeList';
import Header from '@/app/components/AnimeList/Header';

const Search = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const animeSearch = await response.json();

  return (
    <div>
      <Header title={`Pencarian untuk ${params.keyword}...`} linkHref={undefined} linkTitle={undefined} />
      <AnimeList api={animeSearch.data} />
    </div>
  );
};

export default Search;
