import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ animes }) => {
  return (
    <div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {animes.map((anime: any) => (
          <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="">
            <Image src={`${anime.images.jpg.large_image_url}`} alt="..." width={600} height={600} />
            <h3 className="text-[#000] font-bold md:text-xl text-base p-4">{anime.title_english}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
